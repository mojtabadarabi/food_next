import { axiosInstance } from '@/lib';
import { RequestsHeaders, SsrReturnType } from '@/types';
import { HydrationBoundary, QueryClient, QueryClientProvider, dehydrate } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';



export const reactQuerySsr = async ({
    context = null,
    queryKey,
    queryFn
}: any): Promise<SsrReturnType> => {
    const queryClient = new QueryClient()
    let isError = false
    let headers: RequestsHeaders | null = null
    try {
        headers = getReqHeaders({ context })
        if (headers) {
            axiosInstance.defaults.headers.common = {
                ...axiosInstance.defaults.headers.common,
                ...headers
            }

        }
        await queryClient.prefetchQuery({
            queryKey,
            queryFn: queryFn,
        })
    } catch (error: any) {
        isError = true
        if (context && error && error.response) context.res.statusCode = error.response.status;
    }
    return {
        isError,
        dehydratedState: dehydrate(queryClient),
        headers
    }
}
export function ReactQueryContainer({ children, dehydratedState }: { children: React.ReactNode, dehydratedState: any }) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        // With SSR, we usually want to set some default staleTime
                        // above 0 to avoid refetching immediately on the client
                        staleTime: 60 * 1000,
                    },
                },
            }),
    )

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydratedState}>
                {children}
            </HydrationBoundary>
        </QueryClientProvider>
    )
}

export function getReqHeaders({ context }: { context: GetServerSidePropsContext }): RequestsHeaders {
    let headers: RequestsHeaders = {
        Authorization: null
    }
    if (context.req.cookies['token']) {
        headers.Authorization = context.req.cookies['token']
    }
    return headers
}

export const PreparationComponent = (WrappedComponent: any) => {
    const Component = (props: SsrReturnType) => {
        if (props.headers) {
            axiosInstance.defaults.headers.common.Authorization = props.headers.Authorization
        }

        return <WrappedComponent {...props} />;
    };

    return Component;
};
import { getUser } from '@/api';
import { ReactQueryContainer, reactQuerySsr } from '@/helpers/ReactQuery';
import { Template } from '@/lib/components';
import UserProvider from '@/lib/providers/UserProvider';
import '@/styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import NApp from 'next/app';
import localFont from 'next/font/local';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../../public/font/Yekan.woff' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider user={pageProps?.user || null}>
      <ReactQueryContainer dehydratedState={pageProps.dehydratedState}>
        <main className={myFont.className}>
          <Template user={pageProps.user} template={pageProps.isAdminTemplate ? 'admin' : 'public'}>
            <Component {...pageProps} />
          </Template>

        </main>
      </ReactQueryContainer>
    </UserProvider>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  if (appContext.ctx.err) return { err: appContext.ctx.err }
  let fetchedUser: any = {}
  //@ts-ignore
  const refreshTokenCookie = appContext.ctx.req?.cookies?.['refresh_token']
  //@ts-ignore
  const userCookie = appContext.ctx.req?.cookies?.['user']
  if (refreshTokenCookie && refreshTokenCookie !== 'null') {
    const props = await reactQuerySsr({
      context: appContext.ctx,
      queryKey: ['user'],
      queryFn: () => getUser()
    })
    if (!props.isError) {
      fetchedUser = {
        isLogin: true,
        ...(JSON.parse(userCookie))
      }
    }
    else {
      fetchedUser.isLogin = false
    }
  }
  else {
  }

  const appProps = await NApp.getInitialProps(appContext);
  return {
    ...appProps,
    pageProps:
    {
      user:fetchedUser,
      ...appProps.pageProps,
      isAdminTemplate: appContext.ctx.pathname.split('/')[1] === 'admin',
    }
  }
}


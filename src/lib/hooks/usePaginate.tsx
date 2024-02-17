import { INITIAL_PAGE, INITIAL_PAGINATE } from "@/configs/appStatics"
import { Pagination } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

interface Props {
    Loading: () => JSX.Element
    Error: () => JSX.Element
    Empty: () => JSX.Element
    Children: () => JSX.Element
    queryKey: any[]
    fetchFn: (page: number, paginate: number) => any
}

export default function usePaginate(props: Props) {
    const {
        Loading,
        Error,
        Empty,
        Children,
        queryKey,
        fetchFn
    } = props
    const [page, setPage] = useState<number>(INITIAL_PAGE)
    const [paginate, setPaginate] = useState<number>(INITIAL_PAGINATE)

    const { data, isError, isLoading, isFetching } = useQuery({ queryKey: [...queryKey, page], queryFn: () => fetchFn(page, paginate) })


    const checkStatus = () => {
        if (isLoading || isFetching) {
            return Loading()
        }
        if (isError || !data) {
            return Error()
        }
        if (data.length === 0) {
            return Empty()
        }
        return Children()
    }
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    const getPagination = () => {
        return <Pagination dir={'ltr'} sx={{
            m: 'auto', color: 'red',
            '& .MuiPaginationItem-root': {
                '&.Mui-selected': {
                    background: 'var(--sub-color-plate)',
                    color: 'white',
                },
                '&:hover': {
                    background: 'var(--sub-color-plate)',
                }
            },
        }} count={data.restaurants.totalPage} page={page} onChange={handleChange} />
    }

    return {
        checkStatus,
        changePage: (page: number) => setPage(page),
        changePaginate: (paginate: number) => setPaginate(paginate),
        page,
        paginate,
        isLoading: isLoading || isFetching,
        data,
        getPagination
    }
}

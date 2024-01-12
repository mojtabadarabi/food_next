import { changeRoleApi, getUsersApi } from '@/api/user'
import appRoutes from '@/configs/appRoutes'
import { isUserHavePermissions, reactQuerySsr } from '@/helpers/ReactQuery'
import DataGridTable from '@/lib/components/DataGridTable'
import { formatDateToPersianByTime } from '@/lib/functions/alerts/date'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { GetServerSidePropsContext } from 'next'

export default function access() {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: changeRoleApi,
        mutationKey: ['change_role'],
        onSuccess: (data) => {  
            console.log(data)
            console.log('data')
            queryClient.setQueryData(
                ['users', { _id:data.data._id }],
                (oldData) => oldData ? {
                  ...oldData,
                  role: 'ADDDD'
                } : oldData
              )
        }
    })

    const { data } = useQuery({ queryKey: ['users'], queryFn: () => getUsersApi() })
    console.log(data)
    console.log('data')

    const handleChange = (role,userId) => {
        console.log(role)
        console.log(userId)
        mutate({role,userId})
    }

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'نام',
            width: 150,
            renderCell: (row) => <div className='flex items-center justify-center'>{row.value || 'ندارد'}</div>
        },
        {
            field: 'email',
            headerName: 'ایمیل',
            width: 250,
            renderCell: (row) => <div className='flex items-center justify-center'>{row.value || 'ندارد'}</div>
        },
        {
            field: 'phone_number',
            headerName: 'تلفن',
            width: 150,
            renderCell: (row) => <div className='flex items-center justify-center'>{row.value || 'ندارد'}</div>
        },
        {
            field: 'createdAt',
            headerName: 'آخرین تغییر',
            width: 150,
            renderCell: (row) => {
                return <div>{row && row.value ? formatDateToPersianByTime(row?.value) : null}</div>
            }
        },
        {
            field: 'role',
            headerName: 'نقش',
            width: 150,
            renderCell: (row) => {
                return (
                    <div className='flex items-center justify-center'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={row.value}
                                label="Role"
                                onChange={(e)=>handleChange(e.target.value,row?.row?._id)}
                            >
                                <MenuItem value={'ADMIN'}>ادمین</MenuItem>
                                <MenuItem value={'SUPER_ADMIN'}>فوق ادمین</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                )
            }
        },
    ];

    return (
        <div><DataGridTable columns={columns} rows={data?.data?.map?.(item => {
            return { ...item, id: item._id }
        }) || []} /></div>
    )

}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const user = context.req.cookies['user']
    const isHavePermissions = isUserHavePermissions(JSON.parse(user)?.permissions, ['USER_MANAGEMENT'])
    if (!isHavePermissions) {
        return {
            redirect: {
                permanent: false,
                destination: appRoutes.home
            }
        }
    }
    const props = await reactQuerySsr({
        context,
        queryKey: ['users'],
        queryFn: () => getUsersApi()
    })
    return {
        props: {
            ...props
        }
    }
}
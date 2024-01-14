import { deleteRestaurantApi } from "@/api/restaurant/admin";
import { changeApprovalApi } from "@/api/restaurant/client";
import { changeRoleApi } from "@/api/user";
import DataGridTable from "@/lib/components/DataGridTable";
import { formatDateToPersianByTime } from "@/lib/functions/alerts/date";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";

export default function useRestaurantsTable({ restaurants }) {
    const queryClient = useQueryClient()
    const { mutate, isPending, variables } = useMutation({
        mutationFn: changeApprovalApi,
        mutationKey: ['change_approval'],
        onSuccess: (data) => {
            console.log('ssssssssssssssss')
            queryClient.setQueryData(['admin_restaurants'], cashedData => {
                const updatedUsers = [...cashedData.data]
                const foundedUser = updatedUsers.findIndex(user => user._id === variables.ids[0])
                updatedUsers[foundedUser].isApproval = variables?.isApproval
                return {
                    ...data,
                    data: updatedUsers
                }
            })
        }
    })

    const handleChange = (id: string, isApproval: boolean) => {
        mutate({
            ids: [id],
            type: 'restaurants',
            isApproval
        })
    }

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'نام',
            width: 150,
            renderCell: (row) => <div className='flex items-center justify-center'>{row.value || 'ندارد'}</div>
        },
        {
            field: 'description',
            headerName: 'توضیحات',
            width: 250,
            renderCell: (row) => <div className='flex items-center justify-center'>{row.value || 'ندارد'}</div>
        },
        {
            field: 'address',
            headerName: 'آدرس',
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
            field: 'isApproval',
            headerName: 'وضعیت تایید',
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
                                onChange={(e) => handleChange(row?.row?._id, e.target.value)}
                            >
                                <MenuItem value={true}>تایید</MenuItem>
                                <MenuItem value={false}>رد</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                )
            }
        },

    ];

    const Table = () => {
        return (
            <DataGridTable columns={columns} rows={restaurants?.map?.(restaurant => {
                return { ...restaurant, id: restaurant._id }
            }) || []} />
        )
    }

    return { Table }
}

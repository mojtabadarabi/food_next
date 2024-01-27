
import { deleteAdminsApi } from "@/api/admins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";

export default function AdminsList({ users }: { users: any }) {
    const queryClient = useQueryClient()

    const { mutateAsync, isPending } = useMutation({
        mutationFn: deleteAdminsApi,
        mutationKey: ['delete-admins'],
    })
    console.log(users)
    const onDeleteAdmin = (id) => {
        const ids = [id]
        mutateAsync({ ids }).then(() => {
            queryClient.setQueryData(['manage-admin-page'], cashedData => {
                const restaurantAdmins = [...cashedData.restaurantAdmins]
                const restaurantAdminsIds = restaurantAdmins.map(admin => admin._id)
                ids.map(user => {
                    console.log(user)
                    const index = restaurantAdminsIds.indexOf(user);
                    console.log(index)
                    if (index > -1) { // only splice array when item is found
                        restaurantAdmins.splice(index, 1); // 2nd parameter means remove one item only
                    }
                })
                return {
                    ...cashedData,
                    restaurantAdmins
                }
            })
        })
    }
    return (
        <div className="py-3">
            <table className="w-full">
                <thead className="text-sm font-bold">
                    <tr>
                        <td className="p-2">نام</td>
                        <td className="p-2">یوزرنیم</td>
                        <td className="p-2">ایمیل</td>
                        <td className="p-2">شماره</td>
                        <td className="p-2">حذف</td>
                    </tr>
                </thead>
                <tbody className="text-sm font-light">
                    {
                        users.map((user) => (
                            <tr className="bg-zinc-200 rounded-xl">
                                <td className="p-2">{user.name || 'ندارد'}</td>
                                <td className="p-2">{user.username || 'ندارد'}</td>
                                <td className="p-2">{user.email || 'ندارد'}</td>
                                <td className="p-2">{user.phone_number || 'ندارد'}</td>
                                <td className="p-2 felx justify-center items-center">
                                    <MdDelete onClick={() => onDeleteAdmin(user._id)} className={'cursor-pointer hover:text-red-500'} size={20} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


import { MdDelete } from "react-icons/md";

export default function AdminsList({ users }: { users: any }) {
    console.log(users)
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
                                    <MdDelete className={'cursor-pointer hover:text-red-500'}  size={20} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

import SpinnerLoading from "./SpinnerLoading"

interface Props {
    children: React.ReactNode
    type?: 'submit' | 'button'
    loading?:boolean
    onClick?:any
}


export default function LoadingButton(props: Props) {
    const { children, type = 'submit',loading=false ,onClick=()=>{}} = props
    return (
        <button type={type} onClick={onClick} className={`bg-[var(--button-bg)] h-[40px] flex items-center justify-center text-sm font-bold  text-white p-4 rounded-md`}>
            {loading?<SpinnerLoading/>:children}
        </button>
    )
}

import { useState } from 'react'

export default function useStateProps({ initialProps }: any) {
    const [props, setProps] = useState(initialProps)
    const setStateByKey = (key: string, value: string) => {
        setProps((prev: any) => {
            return {
                ...prev,
                [key]: value
            }
        })
    }
    const getProps = (key: string) => {
        return {
            value: props[key],
            onChange: (e: any) => setStateByKey(key, e.target.value)
        }
    }
    return {
        props,
        setStateByKey,
        getProps
    }
}

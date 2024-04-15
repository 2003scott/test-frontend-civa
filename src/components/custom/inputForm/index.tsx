import React from "react"
import { Input } from "../input"

type Props = {
    id: string,
    children?: React.ReactNode,
    title: string,
    containerClassName?: string,
    error ?: string,
} & React.InputHTMLAttributes<HTMLInputElement>

const InputForm = React.forwardRef<HTMLInputElement, Props>(({ error,id, title, containerClassName = "", children, ...props }, ref) => {
    return (
        <div className={`${containerClassName} space-y-1 [&_*]:w-full`}>
            <label className="select-none gap-1" htmlFor={id}>
                <p>{title}</p>
            </label>
            {children ? children : <Input id={id} ref={ref} {...props} />}
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    )
})

export { InputForm }

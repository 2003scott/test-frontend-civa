import React from "react"
import { cn } from "../../../utils/className"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
    return (
        <>
            <input {...props}
                ref={ref}
                className={cn("outline-none border p-2 rounded-md focus:border-primary", className)} />
        </>
    )
})

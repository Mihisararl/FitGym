import React from "react";
import { cn } from "@/utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, error, className, id, ...props },
    ref
) {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="space-y-2">
            <label htmlFor={inputId} className="block text-sm font-medium text-text">
                {label}
            </label>
            <input
                id={inputId}
                ref={ref}
                className={cn(
                    "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30",
                    className
                )}
                {...props}
            />
            {error ? <p className="text-sm text-red-500">{error}</p> : null}
        </div>
    );
});

Input.displayName = "Input";

export default Input;
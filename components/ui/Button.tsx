import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    fullWidth?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "bg-brand-gradient text-white shadow-glow hover:scale-[1.02] hover:opacity-95 active:scale-[0.98]",
    secondary:
        "bg-surface text-text border border-border hover:bg-white/70 dark:hover:bg-white/10",
    outline:
        "border border-white/80 text-white hover:bg-white hover:text-black"
};

export default function Button({
    variant = "primary",
    className,
    fullWidth,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition duration-300",
                variantClasses[variant],
                fullWidth && "w-full",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

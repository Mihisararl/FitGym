import { cn } from "@/utils/cn";

type CardProps = {
    className?: string;
    children: React.ReactNode;
};

export default function Card({ className, children }: CardProps) {
    return (
        <article
            className={cn(
                "rounded-2xl border border-border bg-surface p-6 shadow-md transition duration-300",
                className
            )}
        >
            {children}
        </article>
    );
}

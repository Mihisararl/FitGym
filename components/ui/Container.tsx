import { cn } from "@/utils/cn";

type ContainerProps = {
    className?: string;
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
};

export default function Container({
    className,
    children,
    as: Component = "div"
}: ContainerProps) {
    return (
        <Component className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
            {children}
        </Component>
    );
}

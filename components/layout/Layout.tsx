import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

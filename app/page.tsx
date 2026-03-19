import Layout from "@/components/layout/Layout";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function HomePage() {
    return (
        <Layout>
            <Hero />
            <About />
            <Services />
            <Contact />
        </Layout>
    );
}

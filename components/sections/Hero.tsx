"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay,
            duration: 0.7,
            ease: "easeOut"
        }
    })
};

export default function Hero() {
    return (
        <section id="home" className="relative flex min-h-screen items-center pt-20">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/gym.png')" }}
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

            <Container className="relative z-10 py-24 text-center">
                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    custom={0.1}
                    className="font-heading text-5xl font-extrabold uppercase leading-tight text-white sm:text-6xl lg:text-7xl"
                >
                    Unleash Your
                    <span className="mt-1 block bg-brand-gradient bg-clip-text text-transparent">Potential</span>
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    custom={0.25}
                    className="mx-auto mt-6 max-w-2xl text-lg text-white/85 sm:text-xl"
                >
                    Join the fittest community in town and train in a premium gym designed for serious results.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    custom={0.4}
                    className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
                >
                    <Button>Start Your Journey</Button>
                    <Button variant="outline">Learn More</Button>
                </motion.div>
            </Container>
        </section>
    );
}

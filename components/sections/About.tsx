import Image from "next/image";
import Container from "@/components/ui/Container";

const stats = [
    { label: "Members", value: "500+" },
    { label: "Expert Trainers", value: "15+" },
    { label: "Classes Weekly", value: "50+" }
];

export default function About() {
    return (
        <section id="about" className="bg-surface py-20 md:py-28">
            <Container>
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div className="relative overflow-hidden rounded-3xl">
                        <Image
                            src="/images/place.png"
                            alt="Modern gym interior"
                            width={900}
                            height={900}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <span className="section-underline" />
                        <h2 className="section-title">About Our Gym</h2>
                        <p className="mt-4 max-w-xl text-muted">
                            FitGym combines top-tier equipment, certified coaching, and high-energy community support
                            so you can level up your strength, endurance, and confidence in one place.
                        </p>
                        <p className="mt-4 max-w-xl text-muted">
                            Whether you are just starting or aiming for peak performance, we build programs that
                            keep your progress consistent and measurable.
                        </p>

                        <div className="mt-8 grid grid-cols-3 gap-4">
                            {stats.map((item) => (
                                <div key={item.label}>
                                    <p className="font-heading text-3xl font-bold text-secondary">{item.value}</p>
                                    <p className="text-sm text-muted">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

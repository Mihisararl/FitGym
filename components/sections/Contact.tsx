"use client";

import { Mail, MapPin, Phone, Send, Timer } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import { ContactPayload, emailRules, messageRules, nameRules } from "@/utils/validation";

type ApiResponse = {
    success: boolean;
    message: string;
};

const infoItems = [
    { icon: MapPin, label: "Address", value: "123 Fitness Street, Gym City, GC 12345" },
    { icon: Phone, label: "Phone", value: "(+94) 70 1110 110" },
    { icon: Mail, label: "Email", value: "info@fitgym.com" },
    { icon: Timer, label: "Hours", value: "Mon-Fri: 6:00 AM - 11:00 PM | Sat-Sun: 7:00 AM - 9:00 PM" }
];

export default function Contact() {
    const [apiMessage, setApiMessage] = useState<ApiResponse | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<ContactPayload>({
        mode: "onTouched",
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    const onSubmit = async (data: ContactPayload) => {
        setApiMessage(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.name.trim(),
                    email: data.email.trim(),
                    message: data.message.trim()
                })
            });

            let result: ApiResponse;

            try {
                result = (await response.json()) as ApiResponse;
            } catch {
                result = {
                    success: false,
                    message: "Unexpected server response. Please try again."
                };
            }

            if (!response.ok) {
                setApiMessage({
                    success: false,
                    message: result.message || "Unable to send your message. Please check your details and try again."
                });
                return;
            }

            setApiMessage({
                success: true,
                message: result.message || "Thanks! Your message has been sent successfully."
            });

            if (result.success) {
                reset();
            }
        } catch {
            setApiMessage({ success: false, message: "Network error. Please try again." });
        }
    };

    return (
        <section id="contact" className="bg-surface py-20 md:py-28">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <span className="section-underline mx-auto" />
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="mt-4 text-muted">Ready to start your fitness journey? Contact us for a free consultation.</p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    <article className="rounded-2xl border border-border bg-bg p-6 md:p-8">
                        <h3 className="font-heading text-2xl font-semibold">Send a Message</h3>
                        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                            <Input
                                label="Name"
                                placeholder="Your name"
                                error={errors.name?.message}
                                {...register("name", nameRules)}
                            />

                            <Input
                                type="email"
                                label="Email"
                                placeholder="your.email@example.com"
                                error={errors.email?.message}
                                {...register("email", emailRules)}
                            />

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-text">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    placeholder="Tell us about your fitness goals..."
                                    className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                                    {...register("message", messageRules)}
                                />
                                {errors.message?.message ? (
                                    <p className="text-sm text-red-500">{errors.message.message}</p>
                                ) : null}
                            </div>

                            <Button type="submit" fullWidth disabled={isSubmitting} className="gap-2 disabled:cursor-not-allowed disabled:opacity-60">
                                {isSubmitting ? (
                                    <>
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} />
                                        Send Message
                                    </>
                                )}
                            </Button>

                            {apiMessage ? (
                                <p
                                    className={`rounded-xl px-4 py-3 text-sm ${apiMessage.success
                                        ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                                        : "bg-red-500/15 text-red-600 dark:text-red-400"
                                        }`}
                                    role="status"
                                >
                                    {apiMessage.message}
                                </p>
                            ) : null}
                        </form>
                    </article>

                    <article className="rounded-2xl border border-border bg-bg p-6 md:p-8">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/images/contact.png"
                                alt="Gym consultation"
                                width={800}
                                height={500}
                                className="h-60 w-full object-cover"
                            />
                        </div>

                        <div className="mt-6 space-y-4">
                            {infoItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div key={item.label} className="flex items-start gap-3">
                                        <div className="rounded-lg bg-brand-gradient p-2 text-white">
                                            <Icon size={16} />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{item.label}</p>
                                            <p className="text-sm text-muted">{item.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </article>
                </div>
            </Container>
        </section>
    );
}

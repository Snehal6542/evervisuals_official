'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PenTool, Layers, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { HandDrawnFilters, Highlight, SketchButton, SketchCard, DrawnArrow } from "@/src/components/ui/HandDrawnFilters";

export default function Home() {
    const { scrollYProgress } = useScroll();

    // Parallax for background doodles
    const yDoodle = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-[#fdfbf7] font-sans text-[#2d2d2d] selection:bg-[#ffeb3b]">
            <HandDrawnFilters />

            {/* Background Texture (Grid Paper) */}
            <div
                className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    filter: 'url(#rough-paper)'
                }}
            />

            {/* --- NAVBAR --- */}
            <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-6 backdrop-blur-sm">
                <div className="text-2xl font-bold tracking-tight">
                    Ever<span className="text-blue-600">Visuals</span>
                </div>
                <div className="hidden gap-8 md:flex font-medium">
                    {['Services', 'Showcase', 'About'].map(item => (
                        <a key={item} href="#" className="relative group">
                            {item}
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all group-hover:w-full rounded-full" />
                        </a>
                    ))}
                </div>
                <SketchButton className="text-sm">Get Your Ad</SketchButton>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">

                <div className="relative mb-6 inline-block">
                    <span className="rounded-full border border-black bg-white px-4 py-2 text-sm font-medium uppercase tracking-widest shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">
                        The Animation Agency for Small Firms
                    </span>
                </div>

                <div className="relative max-w-4xl">
                    <h1 className="mb-8 text-6xl font-black leading-[1.1] tracking-tight md:text-8xl">
                        Boring Ads <br />
                        <Highlight color="#a5f3fc">Don't</Highlight> Sell.
                    </h1>
                    <DrawnArrow />
                </div>

                <p className="max-w-xl text-xl text-gray-600 font-medium leading-relaxed">
                    We create thumb-stopping animation ads that turn scrollers into customers. Premium motion design tailored for the ambitious small business.
                </p>

                <div className="mt-10 flex gap-6">
                    <SketchButton>
                        Watch Our Reels <ArrowRight size={18} />
                    </SketchButton>
                </div>

                {/* Floating Doodles */}
                <motion.div style={{ y: yDoodle }} className="absolute left-[10%] top-[20%] opacity-20 hidden lg:block">
                    <LayoutGrid size={64} className="-rotate-12" />
                </motion.div>
                <motion.div style={{ y: yDoodle }} className="absolute right-[10%] bottom-[20%] opacity-20 hidden lg:block">
                    <PenTool size={64} className="rotate-12" />
                </motion.div>

            </section>

            {/* --- FEATURES GRID --- */}
            <section className="relative z-10 px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-bold">The <Highlight>Formula</Highlight></h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <SketchCard delay={0.1} title="Dynamic Motion" icon={<Layers size={24} />} />
                        <SketchCard delay={0.2} title="Pro Scripts" icon={<PenTool size={24} />} />
                        <SketchCard delay={0.3} title="ROI Focused" icon={<LayoutGrid size={24} />} />
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIAL (Sticky Note Style) --- */}
            <section className="relative z-10 flex items-center justify-center py-32 bg-[#fffdf5] border-y border-black/5">
                <div className="relative w-full max-w-2xl px-6">
                    {/* Sticky Note */}
                    <motion.div
                        whileHover={{ rotate: 0, scale: 1.02 }}
                        className="relative rotate-1 bg-[#ffeb3b] p-12 shadow-[4px_4px_10px_rgba(0,0,0,0.1)]"
                        style={{ filter: "url(#rough-paper)" }}
                    >
                        {/* Pin */}
                        <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border border-black/20 bg-red-500 shadow-sm" />

                        <p className="font-serif text-2xl italic leading-relaxed text-black/80">
                            "The animation they created for our local bakery tripled our click-through rate in just one week. Truly game-changing for a small business like ours."
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-black/10" style={{ filter: "url(#rough-paper)" }} />
                            <div>
                                <div className="font-bold">Mark Thompson</div>
                                <div className="text-sm opacity-60">Founder, FreshBites</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- CHECKLIST --- */}
            <section className="mx-auto max-w-3xl px-6 py-24">
                <div className="space-y-6">
                    {["High-Converting Scripts", "Custom Character Design", "Multi-Platform Export (4K)"].map((item, i) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 border-b border-black/10 pb-4"
                        >
                            <CheckCircle2 className="text-green-600" />
                            <span className="text-xl font-medium">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- NEW SECTION: TRUSTED BY MARQUEE --- */}
            <section className="relative z-10 overflow-hidden border-y-2 border-black bg-[#ffeb3b] py-12" style={{ filter: "url(#rough-paper)" }}>
                <div className="flex whitespace-nowrap">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                        className="flex gap-24 px-12 text-3xl font-black uppercase tracking-widest text-black"
                    >
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="flex items-center gap-8">
                                <span>BISTRO 21</span>
                                <span className="opacity-30">×</span>
                                <span>GLOW SPA</span>
                                <span className="opacity-30">×</span>
                                <span>PEAK FITNESS</span>
                                <span className="opacity-30">×</span>
                                <span>URBAN COFFEE</span>
                                <span className="opacity-30">×</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- NEW SECTION: HAND-DRAWN GALLERY --- */}
            <section className="relative z-10 px-6 py-32">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-20 text-center">
                        <h2 className="text-5xl font-black md:text-6xl">Motion <Highlight color="#fbcfe8">Mastery.</Highlight></h2>
                    </div>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        {[
                            { title: "Viral Hooks", img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80" },
                            { title: "Explainer Videos", img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ rotate: i % 2 === 0 ? 2 : -2 }}
                                className="group relative"
                            >
                                <div className="relative overflow-hidden border-4 border-black bg-white p-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all group-hover:shadow-[16px_16px_0px_rgba(0,0,0,1)]" style={{ filter: "url(#rough-paper)", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
                                    <div className="relative mb-4 aspect-video overflow-hidden border-2 border-dashed border-black">
                                        <img src={item.img} alt={item.title} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                                    </div>
                                    <h3 className="font-serif text-3xl font-bold italic">{item.title}</h3>
                                    <p className="mt-2 text-gray-600">Bringing your brand's personality to life with high-energy animation that converts.</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- NEW SECTION: PRICING --- */}
            <section className="relative z-10 bg-[#fffdf5] px-6 py-32 border-t border-dashed border-black/20">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl font-bold md:text-5xl">Simple <Highlight color="#bbf7d0">Pricing.</Highlight></h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Basic Plan */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative border-2 border-black bg-white p-12 text-center"
                            style={{ filter: "url(#rough-paper)" }}
                        >
                            <h3 className="text-2xl font-bold">The Starter Clip</h3>
                            <div className="my-6 text-6xl font-black">$299</div>
                            <ul className="mb-8 space-y-4 font-medium text-gray-600">
                                <li>One 15s High-Impact Ad</li>
                                <li>Custom Scriptwriting</li>
                                <li>Basic Character Design</li>
                                <li>2 Rounds of Revisions</li>
                            </ul>
                            <SketchButton className="w-full">Get Started</SketchButton>
                        </motion.div>

                        {/* Pro Plan */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative border-4 border-black bg-black text-white p-12 text-center shadow-[12px_12px_0px_#ffeb3b]"
                            style={{ filter: "url(#rough-paper)" }}
                        >
                            <div className="absolute -top-6 right-8 rotate-12 rounded-full border-2 border-black bg-white px-4 py-1 text-sm font-bold text-black rotate-12 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                                BEST VALUE
                            </div>
                            <h3 className="text-2xl font-bold">The Growth Bundle</h3>
                            <div className="my-6 text-6xl font-black">$799</div>
                            <ul className="mb-8 space-y-4 font-medium text-gray-400">
                                <li>Three Multi-Format Ads</li>
                                <li>Full Storyboarding</li>
                                <li>Professional Voiceover</li>
                                <li>Social Media Optimization</li>
                                <li>Unlimited Revisions</li>
                            </ul>
                            <button className="w-full border-2 border-white bg-white px-8 py-4 font-bold text-black transition-all hover:bg-transparent hover:text-white" style={{ filter: "url(#rough-paper)" }}>
                                Book a Call
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- NEW SECTION: FAQ --- */}
            <section className="relative z-10 px-6 py-32">
                <div className="mx-auto max-w-3xl">
                    <h2 className="mb-16 text-center text-4xl font-bold">The <Highlight color="#fed7aa">Scribbled</Highlight> FAQ.</h2>

                    <div className="space-y-6">
                        {[
                            { q: "How long does a typical ad take?", a: "Our typical turnaround time is 7-10 business days from the moment we finalize your script and storyboard." },
                            { q: "Do you handle the scriptwriting?", a: "Yes! Every package includes professional scriptwriting tailored to your brand's voice and goals." },
                            { q: "Can I use these ads on all platforms?", a: "Absolutely. We deliver your ads in formats optimized for Instagram, TikTok, Facebook, and YouTube." }
                        ].map((faq, i) => (
                            <details key={i} className="group overflow-hidden rounded-xl border-2 border-black bg-white transition-all open:bg-yellow-50" style={{ filter: "url(#rough-paper)" }}>
                                <summary className="cursor-pointer p-6 text-xl font-bold outline-none flex justify-between items-center list-none">
                                    {faq.q}
                                    <span className="transition-transform group-open:rotate-45 text-3xl font-light">+</span>
                                </summary>
                                <div className="border-t-2 border-dashed border-black/20 p-6 text-lg font-medium text-gray-700">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="border-t-2 border-dashed border-black/20 py-12 text-center">
                <p className="font-medium opacity-50">Crafting motion that matters for small businesses.</p>
            </footer>

        </main>
    );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogoClick = () => {
        setIsShaking(true);
        // Reset animation after it completes
        setTimeout(() => setIsShaking(false), 800);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "py-3 glass shadow-sm backdrop-blur-sm"
                : "py-5 bg-transparent "
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-tight flex items-center gap-2"
                        onClick={handleLogoClick}
                    >
                        <span className={`text-2xl ${isShaking ? 'shake' : ''}`}>🐼</span>
                        <span className="hidden sm:inline-block">Dev Panda</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden text-lg md:flex items-center space-x-4">
                        <div className="flex items-center space-x-4">
                            <button className='rounded-lg p-2 text-lg text-black hover:bg-[#16a249] hover:text-white'>
                                <Link href="#projects" className="nav-link">
                                    Projects
                                </Link>
                            </button>
                            <button className='rounded-lg p-2 text-lg text-black hover:bg-[#16a249] hover:text-white'>
                                <Link href="/" className="nav-link">
                                    Skills
                                </Link>
                            </button>
                            <button className='rounded-lg p-2 text-lg text-black hover:bg-[#16a249] hover:text-white'>
                                <Link href="/" className="nav-link">
                                    About
                                </Link>
                            </button>
                            <button className='rounded-lg p-2 text-lg text-black hover:bg-[#16a249] hover:text-white'>
                                <Link href="/" className="nav-link">
                                    Contact
                                </Link>
                            </button>

                            <button className='rounded-lg p-2 font-bold text-lg text-black hover:bg-[#16a249] hover:text-white'>
                                <Link href="/">Dev&apos;Aura</Link>
                            </button>
                            <button className='rounded-lg p-2 text-lg text-black hover:bg-[#16a249] hover:text-white'>
                                <Link href="/signup">Inscription</Link>
                            </button>
                            <button className='rounded-lg p-2 text-lg text-black hover:bg-[#16a249] hover:text-white'>
                                <Link href="/signin">Connexion</Link>
                            </button>
                        </div>

                    </div>

                    {/* Mobile Navigation Toggle */}
                    <button
                        className="md:hidden text-foreground"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden glass mt-3 rounded-lg p-4 animate-fade-in backdrop-blur-sm">
                        <div className="flex flex-col items-center justify-between">
                            <button className='flex justify-center items-center m-2 rounded-lg px-10 py-2.5 font-bold text-lg text-black bg-[#16a249]'>
                                <Link
                                    href="#projects"
                                    className="nav-link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Projects
                                </Link>
                            </button>
                            <button className='flex justify-center items-center m-2 rounded-lg p-2 font-bold text-lg text-black e px-10 py-2.5 bg-[#16a249]'>
                                <Link
                                    href="#skills"
                                    className="nav-link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Skills
                                </Link>
                            </button>
                            <button className='flex justify-center items-center m-2 rounded-lg p-2 font-bold text-lg text-black  px-10 py-2.5 bg-[#16a249]'>
                                <Link
                                    href="#about"
                                    className="nav-link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    About
                                </Link>
                            </button>
                            <button className='flex justify-center items-center m-2 rounded-lg p-2 font-bold text-lg text-black  px-10 py-2.5 bg-[#16a249]'>
                                <Link
                                    href="#contact"
                                    className="nav-link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </button>
                            <button className='flex justify-center items-center m-2 rounded-lg p-2 font-bold text-lg text-black px-10 py-2.5 bg-[#16a249]'>
                                <Link href="/">Dev&apos;Aura</Link>
                            </button>
                            <button className='flex justify-center items-center m-2 rounded-lg p-2 text-lg font-bold text-black px-10 py-2.5 bg-[#16a249]'>
                                <Link href="/register">Inscription</Link>
                            </button>
                            <button className='flex justify-center items-center m-2 rounded-lg p-2 text-lg font-bold text-black px-10 py-2.5 bg-[#16a249]'>
                                <Link href="/login">Connexion</Link>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar2;
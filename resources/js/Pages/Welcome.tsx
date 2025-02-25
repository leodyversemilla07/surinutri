import { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import { motion } from 'framer-motion';

export default function Welcome({ auth }: PageProps) {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => {
            const elements = document.querySelectorAll('.scroll-animate');
            elements.forEach(element => {
                const position = element.getBoundingClientRect();
                if (position.top < window.innerHeight - 100) {
                    element.classList.add('animated');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Head title="Welcome to SuriNuti" />
            <div className="bg-[#f2f2f2] text-[#205a4f] min-h-screen">
                <header className="bg-white shadow-md sticky top-0 z-10 transition-all duration-300">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="/images/logo.png" alt="SuriNuti logo" className="h-12 w-auto mr-3 hover:scale-105 transition-transform duration-300" />
                            <span className="text-2xl font-bold text-[#205a4f] tracking-tight">SuriNuti</span>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white transition duration-300 ease-in-out">Features</a>
                            <a href="#testimonials" className="px-3 py-2 rounded-md text-sm font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white transition duration-300 ease-in-out">Testimonials</a>
                            <a href="#faq" className="px-3 py-2 rounded-md text-sm font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white transition duration-300 ease-in-out">FAQ</a>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-4 py-2 rounded-md text-sm font-medium bg-[#205a4f] text-white hover:bg-[#205a4f]/90 transition duration-300 ease-in-out"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-3 py-2 rounded-md text-sm font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white transition duration-300 ease-in-out"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="px-4 py-2 rounded-md text-sm font-medium bg-[#205a4f] text-white hover:bg-[#205a4f]/90 transition duration-300 ease-in-out"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                        <button className="md:hidden p-2" onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div id="mobile-menu" className="hidden md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white transition duration-300">Features</a>
                            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white transition duration-300">Testimonials</a>
                            <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white transition duration-300">FAQ</a>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="block px-3 py-2 rounded-md text-base font-medium bg-[#205a4f] text-white mt-2"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="block px-3 py-2 rounded-md text-base font-medium bg-[#205a4f] text-white mt-2"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </header>

                <main>
                    <section className="py-24 bg-gradient-to-b from-white to-[#f2f2f2]">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                className="flex flex-col md:flex-row items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#205a4f] mb-6 leading-tight">
                                        Nurturing <span className="text-[#bcb429]">Future</span> Generations
                                    </h1>
                                    <p className="text-xl md:text-2xl text-[#7c8488] mb-10 max-w-3xl leading-relaxed">
                                        SuriNuti empowers healthcare professionals to monitor and improve the nutritional status of children aged 0-59 months.
                                    </p>
                                    <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                                        <Link
                                            href={route('register')}
                                            className="px-8 py-4 rounded-lg text-lg font-semibold bg-[#205a4f] text-white hover:bg-[#205a4f]/90 transition duration-300 ease-in-out shadow-lg inline-block"
                                        >
                                            Get Started
                                        </Link>
                                        <button
                                            onClick={() => setIsVideoModalOpen(true)}
                                            className="px-8 py-4 rounded-lg text-lg font-semibold bg-white text-[#205a4f] border-2 border-[#205a4f] hover:bg-[#f2f2f2] transition duration-300 ease-in-out shadow-lg inline-flex items-center"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                                            </svg>
                                            Watch Demo
                                        </button>
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <motion.img
                                        src="/images/hero-image.webp"
                                        alt="Child nutrition monitoring"
                                        className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        whileHover={{ scale: 1.03 }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    <section id="features" className="py-20 scroll-animate">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl font-bold text-[#205a4f] mb-4">
                                    Comprehensive Child Nutrition Monitoring
                                </h2>
                                <div className="w-20 h-1 bg-[#bcb429] mx-auto mb-4"></div>
                                <p className="text-xl text-[#7c8488] max-w-3xl mx-auto">
                                    Our platform offers a complete suite of tools to track and analyze child growth and nutrition.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {[
                                    {
                                        title: "Accurate Measurements",
                                        description: "Record and track precise growth measurements for comprehensive monitoring with our smart tracking system.",
                                        icon: (
                                            <svg className="w-12 h-12 text-[#bcb429]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Trend Analysis",
                                        description: "Visualize growth trends and identify potential nutritional issues early with intelligent data analytics.",
                                        icon: (
                                            <svg className="w-12 h-12 text-[#bcb429]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Personalized Insights",
                                        description: "Receive tailored recommendations based on each child's unique growth pattern and nutritional needs.",
                                        icon: (
                                            <svg className="w-12 h-12 text-[#bcb429]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        )
                                    }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-[#bcb429]"
                                        whileHover={{ y: -10 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className="bg-[#f2f2f2] rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#205a4f] mb-4 text-center">{feature.title}</h3>
                                        <p className="text-[#7c8488] text-center">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-20 bg-[#205a4f] text-white scroll-animate">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose SuriNuti?</h2>
                                <div className="w-20 h-1 bg-[#bcb429] mx-auto mb-4"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    {
                                        title: "Easy to Use",
                                        description: "Intuitive interface designed for healthcare professionals",
                                        icon: <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                                    },
                                    {
                                        title: "Data Security",
                                        description: "Data Privacy Act-compliant, ensuring patient data protection",
                                        icon: <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    },
                                    {
                                        title: "Real-time Updates",
                                        description: "Instant access to the latest nutritional data",
                                        icon: <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    },
                                    {
                                        title: "Comprehensive Reports",
                                        description: "Generate detailed reports for better decision-making",
                                        icon: <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-[#1d4f45] p-6 rounded-lg text-center hover:bg-[#164039] transition-all duration-300"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className="text-[#bcb429] flex justify-center">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-gray-300">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="testimonials" className="py-20 bg-white scroll-animate">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl font-bold text-[#205a4f] mb-4">What Our Users Say</h2>
                                <div className="w-20 h-1 bg-[#bcb429] mx-auto mb-4"></div>
                                <p className="text-xl text-[#7c8488] max-w-3xl mx-auto">
                                    Hear from healthcare professionals who have transformed their practice with SuriNuti.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        name: "Dr. Maria Santos",
                                        role: "Pediatrician",
                                        quote: "SuriNuti has revolutionized how we track child nutrition. It's an indispensable tool in our practice.",
                                        image: "/images/pediatrician.webp"
                                    },
                                    {
                                        name: "Nurse John Doe",
                                        role: "Public Health Nurse",
                                        quote: "The insights provided by SuriNuti have helped us identify and address nutritional issues much earlier.",
                                        image: "/images/nurse.webp"
                                    },
                                    {
                                        name: "Dr. Emily Chen",
                                        role: "Nutritionist",
                                        quote: "SuriNuti's user-friendly interface and comprehensive reports make my job so much easier and more effective.",
                                        image: "/images/nutritionist.webp"
                                    }
                                ].map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-[#f8f8f8] p-8 rounded-xl shadow-lg relative"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                                            />
                                        </div>
                                        <div className="pt-12 text-center">
                                            <svg className="w-10 h-10 text-[#bcb429]/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                            <p className="italic text-[#7c8488] mb-6">{testimonial.quote}</p>
                                            <h3 className="text-xl font-bold text-[#205a4f]">{testimonial.name}</h3>
                                            <p className="text-[#bcb429]">{testimonial.role}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="faq" className="py-20 bg-[#f2f2f2] scroll-animate">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl font-bold text-[#205a4f] mb-4">Frequently Asked Questions</h2>
                                <div className="w-20 h-1 bg-[#bcb429] mx-auto mb-4"></div>
                                <p className="text-xl text-[#7c8488]">
                                    Find answers to common questions about SuriNuti.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    {
                                        question: "How does SuriNuti ensure data privacy?",
                                        answer: "SuriNuti adheres to strict Data Privacy Act compliance measures, including data encryption, secure servers, and regular security audits to protect all patient information."
                                    },
                                    {
                                        question: "Can SuriNuti integrate with existing healthcare systems?",
                                        answer: "Yes, SuriNuti is designed to integrate seamlessly with most existing healthcare management systems through our API."
                                    },
                                    {
                                        question: "Is training provided for using SuriNuti?",
                                        answer: "We offer comprehensive training sessions, both online and in-person, to ensure all users can effectively utilize SuriNuti's features."
                                    },
                                    {
                                        question: "How often is SuriNuti updated?",
                                        answer: "We release updates on a monthly basis, incorporating user feedback and the latest nutritional research to continually improve our platform."
                                    }
                                ].map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white rounded-xl shadow-md overflow-hidden"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <button
                                            className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                                            onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                                        >
                                            <span className="text-lg font-medium text-[#205a4f]">{faq.question}</span>
                                            <svg
                                                className={`w-5 h-5 text-[#bcb429] transition-transform duration-300 ${activeAccordion === index ? 'transform rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div
                                            className={`px-6 pt-0 overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
                                        >
                                            <p className="text-[#7c8488]">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-20 bg-[#bcb429] scroll-animate">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl sm:text-4xl font-bold text-[#205a4f] mb-6">Ready to Get Started?</h2>
                                <p className="text-xl text-[#205a4f] mb-10 max-w-2xl mx-auto">
                                    Join healthcare professionals worldwide in improving child nutrition with SuriNuti.
                                </p>
                                <Link
                                    href={route('register')}
                                    className="px-8 py-4 rounded-lg text-lg font-semibold bg-[#205a4f] text-white hover:bg-[#205a4f]/90 transition duration-300 ease-in-out shadow-lg inline-block"
                                >
                                    Sign Up Now
                                </Link>
                            </motion.div>
                        </div>
                    </section>
                </main>

                <footer className="bg-[#205a4f] text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">About SuriNuti</h3>
                                <p className="text-sm text-[#f2f2f2]">
                                    Empowering healthcare professionals to monitor and improve child nutrition worldwide.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-sm hover:text-[#bcb429]">Home</a></li>
                                    <li><a href="#features" className="text-sm hover:text-[#bcb429]">Features</a></li>
                                    <li><a href="#testimonials" className="text-sm hover:text-[#bcb429]">Testimonials</a></li>
                                    <li><a href="#faq" className="text-sm hover:text-[#bcb429]">FAQ</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-sm hover:text-[#bcb429]">Privacy Policy</a></li>
                                    <li><a href="#" className="text-sm hover:text-[#bcb429]">Terms of Service</a></li>
                                    <li><a href="#" className="text-sm hover:text-[#bcb429]">Data Protection</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                                <p className="text-sm text-[#f2f2f2]">
                                    Email: info@surinuti.com<br />
                                    Phone: +1 (123) 456-7890
                                </p>
                                <div className="flex space-x-4 mt-4">
                                    <a href="#" className="text-white hover:text-[#bcb429]">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white hover:text-[#bcb429]">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white hover:text-[#bcb429]">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-[#f2f2f2]/20 text-center">
                            <p className="text-sm">&copy; 2025 SuriNuti. All rights reserved.</p>
                        </div>
                    </div>
                </footer>

                {isVideoModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-[#205a4f]">SuriNuti Demo</h3>
                                <button onClick={() => setIsVideoModalOpen(false)} className="text-[#205a4f] hover:text-[#bcb429]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}


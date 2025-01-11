import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useState } from 'react';

export default function Welcome({ auth }: PageProps) {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    return (
        <>
            <Head title="Welcome to SuriNuti" />
            <div className="bg-[#f2f2f2] text-[#205a4f] min-h-screen">
                <header className="bg-white shadow-sm sticky top-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="/images/logo.png" alt="SuriNuti logo" className="h-10 w-auto mr-3" />
                            <span className="text-xl font-bold text-[#205a4f]">SuriNuti</span>
                        </div>
                        <nav className="hidden md:flex space-x-4">
                            <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white transition duration-150 ease-in-out">Features</a>
                            <a href="#testimonials" className="px-3 py-2 rounded-md text-sm font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white transition duration-150 ease-in-out">Testimonials</a>
                            <a href="#faq" className="px-3 py-2 rounded-md text-sm font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white transition duration-150 ease-in-out">FAQ</a>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-3 py-2 rounded-md text-sm font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white transition duration-150 ease-in-out"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-3 py-2 rounded-md text-sm font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white transition duration-150 ease-in-out"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="px-3 py-2 rounded-md text-sm font-medium bg-[#205a4f] text-white hover:bg-[#205a4f]/90 transition duration-150 ease-in-out"
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
                            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white">Features</a>
                            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white">Testimonials</a>
                            <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white">FAQ</a>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white"
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
                                        className="block px-3 py-2 rounded-md text-base font-medium text-[#205a4f] hover:bg-[#bcb429] hover:text-white"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </header>

                <main>
                    <section className="py-20 bg-gradient-to-b from-white to-[#f2f2f2]">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#205a4f] mb-6">
                                    Nurturing Future Generations
                                </h1>
                                <p className="text-xl md:text-2xl text-[#7c8488] mb-10 max-w-3xl">
                                    SuriNuti empowers healthcare professionals to monitor and improve the nutritional status of children aged 0-59 months.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                                    <Link
                                        href={route('register')}
                                        className="px-6 py-3 rounded-md text-lg font-semibold bg-[#205a4f] text-white hover:bg-[#205a4f]/90 transition duration-150 ease-in-out shadow-lg"
                                    >
                                        Get Started
                                    </Link>
                                    <button
                                        onClick={() => setIsVideoModalOpen(true)}
                                        className="px-6 py-3 rounded-md text-lg font-semibold text-[#205a4f] border-2 border-[#205a4f] hover:bg-[#205a4f] hover:text-white transition duration-150 ease-in-out flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                        Watch Demo
                                    </button>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img src="/images/hero-image.webp" alt="Child nutrition monitoring" className="rounded-lg shadow-xl" />
                            </div>
                        </div>
                    </section>

                    <section id="features" className="py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-[#205a4f] text-center mb-12">
                                Comprehensive Child Nutrition Monitoring
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Accurate Measurements",
                                        description: "Record and track precise growth measurements for comprehensive monitoring.",
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Trend Analysis",
                                        description: "Visualize growth trends and identify potential nutritional issues early.",
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Personalized Insights",
                                        description: "Receive tailored recommendations based on each child's unique growth pattern.",
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                            </svg>
                                        )
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                                        <div className="bg-[#bcb429] rounded-full p-3 mb-4">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#205a4f] mb-2">{feature.title}</h3>
                                        <p className="text-[#7c8488]">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-20 bg-[#205a4f] text-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-center mb-12">Why Choose SuriNuti?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { title: "Easy to Use", description: "Intuitive interface designed for healthcare professionals" },
                                    { title: "Data Security", description: "Data Privacy Act-compliant, ensuring patient data protection" },
                                    { title: "Real-time Updates", description: "Instant access to the latest nutritional data" },
                                    { title: "Comprehensive Reports", description: "Generate detailed reports for better decision-making" }
                                ].map((item, index) => (
                                    <div key={index} className="bg-[#205a4f] border border-[#bcb429] rounded-lg p-6 hover:bg-[#1a4940] transition-colors duration-300">
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-[#f2f2f2]">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="testimonials" className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-[#205a4f] text-center mb-12">What Our Users Say</h2>
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
                                    <div key={index} className="bg-[#f2f2f2] rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-center mb-4">
                                            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                            <div>
                                                <h3 className="font-semibold text-[#205a4f]">{testimonial.name}</h3>
                                                <p className="text-sm text-[#7c8488]">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-[#205a4f] italic">"{testimonial.quote}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="faq" className="py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-[#205a4f] text-center mb-12">Frequently Asked Questions</h2>
                            <div className="space-y-8">
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
                                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                        <h3 className="text-xl font-semibold text-[#205a4f] mb-2">{faq.question}</h3>
                                        <p className="text-[#7c8488]">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-20 bg-[#bcb429]">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 className="text-3xl font-bold text-[#205a4f] mb-6">Ready to Get Started?</h2>
                            <p className="text-xl text-[#205a4f] mb-10 max-w-2xl mx-auto">
                                Join healthcare professionals worldwide in improving child nutrition with SuriNuti.
                            </p>
                            <Link
                                href={route('register')}
                                className="px-8 py-4 rounded-md text-lg font-semibold bg-[#205a4f] text-white hover:bg-[#205a4f]/90 transition duration-150 ease-in-out shadow-lg inline-block"
                            >
                                Sign Up Now
                            </Link>
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


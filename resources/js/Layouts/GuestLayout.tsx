import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-50 via-emerald-50/80 to-teal-50">
            {/* Left side - Decorative */}
            <div className="md:w-1/2 bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 p-12 flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10 animate-fade-in">
                    <Link href="/" className="inline-block transform hover:scale-105 transition-transform">
                        <ApplicationLogo className="w-24 h-24 fill-current text-white" />
                    </Link>
                </div>
                <div className="relative z-10 hidden md:block text-white space-y-8">
                    <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">SuriNutri</h1>
                    <p className="text-2xl mb-12 text-gray-100 animate-fade-in-up delay-200">
                        Empowering child nutrition monitoring and tracking
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-lg">Track growth progress</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span className="text-lg">Monitor nutritional status</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <span className="text-lg">Get personalized recommendations</span>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 hidden md:flex space-x-6">
                    <a href="#" className="text-green-100 hover:text-white transition-colors">
                        Terms of Service
                    </a>
                    <a href="#" className="text-green-100 hover:text-white transition-colors">
                        Privacy Policy
                    </a>
                </div>

                {/* Enhanced decorative elements with better contrast */}
                <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-emerald-700/20 rounded-full blur-2xl"></div>
            </div>

            {/* Right side - Content */}
            <div className="md:w-1/2 p-8 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="backdrop-blur-xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] rounded-2xl p-8 border border-gray-200">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

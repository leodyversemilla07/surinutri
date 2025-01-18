import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-green-50">
            {/* Left side - Decorative */}
            <div className="md:w-1/2 bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                    <Link href="/" className="inline-block">
                        <ApplicationLogo className="w-20 h-20 fill-current text-white" />
                    </Link>
                </div>
                <div className="relative z-10 hidden md:block text-white">
                    <h1 className="text-4xl font-bold mb-4">SuriNutri</h1>
                    <p className="text-xl mb-8">Empowering child nutrition monitoring and tracking</p>
                    <div className="space-y-4">
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
                <div className="relative z-10 hidden md:flex space-x-4">
                    <a href="#" className="text-green-100 hover:text-white transition-colors">
                        Terms of Service
                    </a>
                    <a href="#" className="text-green-100 hover:text-white transition-colors">
                        Privacy Policy
                    </a>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>

            {/* Right side - Content */}
            <div className="md:w-1/2 p-8 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="bg-white shadow-xl rounded-lg p-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

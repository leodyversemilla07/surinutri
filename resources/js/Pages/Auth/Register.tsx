import { useState, FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import PasswordStrengthMeter from '@/Components/PasswordStrengthMeter';

export default function Register() {
    const [loading, setLoading] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        post(route('register'), {
            onFinish: () => {
                reset('password', 'password_confirmation');
                setLoading(false);
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="w-full max-w-md mx-auto space-y-8 relative z-10">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-emerald-700 tracking-tight mb-2">
                        Create your account
                    </h2>
                    <p className="text-emerald-600 text-lg">
                        Join SuriNutri for personalized nutrition plans
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-emerald-100">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-5">
                            <div>
                                <InputLabel htmlFor="name" value="Full Name" className="text-emerald-700 font-medium mb-1.5" />
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="pl-10 w-full rounded-xl border-emerald-200 focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 transition-all duration-200"
                                        autoComplete="name"
                                        isFocused={true}
                                        placeholder="Juan Dela Cruz"
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />
                                </div>
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="email" value="Email Address" className="text-emerald-700 font-medium mb-1.5" />
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="pl-10 w-full rounded-xl border-emerald-200 focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 transition-all duration-200"
                                        autoComplete="username"
                                        placeholder="juandelacruz@gmail.com"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                </div>
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="password" value="Password" className="text-emerald-700 font-medium mb-1.5" />
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="pl-10 w-full rounded-xl border-emerald-200 focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 transition-all duration-200"
                                        autoComplete="new-password"
                                        placeholder="••••••••"
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />
                                </div>
                                <PasswordStrengthMeter password={data.password} />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-emerald-700 font-medium mb-1.5" />
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="pl-10 w-full rounded-xl border-emerald-200 focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 transition-all duration-200"
                                        autoComplete="new-password"
                                        placeholder="••••••••"
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        required
                                    />
                                </div>
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            <div className="flex items-center">
                                <Checkbox
                                    name="terms"
                                    checked={data.terms}
                                    onChange={(e) => setData('terms', e.target.checked)}
                                    className="rounded text-emerald-600 shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                                />
                                <div className="ml-2 text-sm text-emerald-700">
                                    I agree to the{' '}
                                    <a href="#" className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors duration-200">
                                        Terms of Service
                                    </a>{' '}
                                    and{' '}
                                    <a href="#" className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors duration-200">
                                        Privacy Policy
                                    </a>
                                </div>
                            </div>
                            <InputError message={errors.terms} className="mt-2" />
                        </div>

                        <div className="space-y-4">
                            <PrimaryButton
                                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                                disabled={processing || loading}
                            >
                                {(processing || loading) && (
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                )}
                                Create Account
                            </PrimaryButton>
                        </div>
                    </form>
                </div>

                <div className="text-center pt-2">
                    <div className="text-sm text-emerald-600 mb-3">
                        Already have an account?
                    </div>

                    <Link
                        href={route('login')}
                        className="inline-flex justify-center py-2.5 px-6 border border-emerald-300 rounded-xl shadow-sm text-sm font-medium text-emerald-700 bg-white hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out"
                    >
                        Sign in
                    </Link>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="hidden md:block absolute top-0 right-0 -mt-16 -mr-32 transform rotate-12 z-0">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-emerald-200 to-green-100 opacity-70 blur-2xl"></div>
            </div>
            <div className="hidden md:block absolute bottom-0 left-0 -mb-16 -ml-32 transform -rotate-12 z-0">
                <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-emerald-100 to-teal-200 opacity-70 blur-2xl"></div>
            </div>
        </GuestLayout>
    );
}


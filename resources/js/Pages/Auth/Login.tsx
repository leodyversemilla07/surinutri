import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { useState } from 'react';
import { authStyles } from '@/Styles/auth';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [loading, setLoading] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        post(route('login'), {
            onFinish: () => setLoading(false),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="w-full max-w-md mx-auto space-y-8 relative z-10">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-emerald-700 tracking-tight mb-2">
                        Welcome back
                    </h2>
                    <p className="text-emerald-600 text-lg">
                        Sign in to your SuriNutri account
                    </p>
                </div>

                {status && (
                    <div className="mb-4 font-medium text-sm text-emerald-600 bg-emerald-50 p-4 rounded-xl border border-emerald-200 shadow-sm">
                        {status}
                    </div>
                )}

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-emerald-100">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-5">
                            <div className="relative">
                                <InputLabel htmlFor="email" value="Email" className="text-emerald-700 font-medium mb-1.5" />
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
                                        placeholder="juandelacruz@gmail.com"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                </div>
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="relative">
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
                                        placeholder="••••••••"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                </div>
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded text-emerald-600 shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                                />
                                <span className="ml-2 text-sm text-emerald-700">
                                    Remember me
                                </span>
                            </div>

                            {canResetPassword && (
                                <div className="text-sm">
                                    <Link
                                        href={route('password.request')}
                                        className="font-medium text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                            )}
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
                                Sign in
                            </PrimaryButton>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-emerald-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-emerald-500 font-medium">Or continue with</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    className="flex items-center justify-center px-4 py-2.5 border border-emerald-100 bg-white shadow-sm text-sm font-medium rounded-xl text-emerald-700 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                >
                                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                    Google
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center px-4 py-2.5 border border-emerald-100 bg-white shadow-sm text-sm font-medium rounded-xl text-emerald-700 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                >
                                    <svg className="h-5 w-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                        />
                                    </svg>
                                    Facebook
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="text-center pt-2">
                    <div className="text-sm text-emerald-600 mb-3">
                        New to SuriNutri?
                    </div>

                    <Link
                        href={route('register')}
                        className="inline-flex justify-center py-2.5 px-6 border border-emerald-300 rounded-xl shadow-sm text-sm font-medium text-emerald-700 bg-white hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out"
                    >
                        Create an account
                    </Link>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="hidden md:block absolute top-0 right-0 -mt-20 -mr-32 transform rotate-12 z-0">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-emerald-200 to-green-100 opacity-70 blur-2xl"></div>
            </div>
            <div className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-32 transform -rotate-12 z-0">
                <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-emerald-100 to-teal-200 opacity-70 blur-2xl"></div>
            </div>
        </GuestLayout>
    );
}

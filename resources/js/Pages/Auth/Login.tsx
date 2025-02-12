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

    const socialButtonClass = "flex items-center justify-center px-4 py-2.5 border border-emerald-100 bg-white/80 shadow-sm text-sm font-medium rounded-xl text-emerald-700 transition-all duration-200 hover:bg-emerald-50 hover:border-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500";

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="w-full space-y-6">
                <div className="text-center">
                    <h2 className={authStyles.titleClass}>
                        Welcome back
                    </h2>
                    <p className={authStyles.subtitleClass}>
                        Sign in to your SuriNutri account
                    </p>
                </div>

                {status && (
                    <div className="mb-4 font-medium text-sm text-emerald-600 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <InputLabel htmlFor="email" value="Email" className={authStyles.labelClass} />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className={authStyles.inputClass}
                                placeholder="juandelacruz@gmail.com"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" className={authStyles.labelClass} />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className={authStyles.inputClass}
                                placeholder="••••••••"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className={authStyles.checkboxClass}
                            />
                            <span className="ml-2 text-sm text-emerald-700">
                                Remember me
                            </span>
                        </div>

                        {canResetPassword && (
                            <div className="text-sm">
                                <Link
                                    href={route('password.request')}
                                    className={authStyles.linkClass}
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="space-y-3">
                        <PrimaryButton className="w-full" disabled={processing || loading}>
                            {loading ? (
                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                            ) : null}
                            Sign in
                        </PrimaryButton>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className={authStyles.dividerClass} />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-emerald-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button type="button" className={authStyles.socialButtonClass}>
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
                            <button type="button" className={authStyles.socialButtonClass}>
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

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-green-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-green-500">
                                New to SuriNutri?
                            </span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link
                            href={route('register')}
                            className="w-full flex justify-center py-2 px-4 border border-green-300 rounded-md shadow-sm text-sm font-medium text-green-700 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
                        >
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}

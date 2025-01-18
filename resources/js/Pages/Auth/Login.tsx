import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

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

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="w-full space-y-6">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-green-800">
                        Welcome back
                    </h2>
                    <p className="mt-2 text-sm text-green-600">
                        Sign in to your SuriNutri account
                    </p>
                </div>

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600 bg-green-100 p-4 rounded-md border border-green-200">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <InputLabel htmlFor="email" value="Email" className="block text-sm font-medium text-green-700" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-green-300 rounded-md shadow-sm placeholder-green-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="juandelacruz@gmail.com"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" className="block text-sm font-medium text-green-700" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-green-300 rounded-md shadow-sm placeholder-green-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-300 rounded"
                            />
                            <span className="ml-2 block text-sm text-green-700">
                                Remember me
                            </span>
                        </div>

                        {canResetPassword && (
                            <div className="text-sm">
                                <Link
                                    href={route('password.request')}
                                    className="font-medium text-green-600 hover:text-green-500"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        )}
                    </div>

                    <div>
                        <PrimaryButton
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
                            disabled={processing}
                        >
                            Sign in
                        </PrimaryButton>
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

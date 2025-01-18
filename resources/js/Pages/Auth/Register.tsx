import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="w-full space-y-6">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-green-800">
                        Create your account
                    </h2>
                    <p className="mt-2 text-sm text-green-600">
                        Join SuriNutri and start monitoring your child's nutrition
                    </p>
                </div>

                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <InputLabel htmlFor="name" value="Full Name" className="block text-sm font-medium text-green-700" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-green-300 rounded-md shadow-sm placeholder-green-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder='Juan dela Cruz'
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="email" value="Email" className="block text-sm font-medium text-green-700" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-green-300 rounded-md shadow-sm placeholder-green-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder='juandelacruz@gmail.com'
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
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
                            placeholder='••••••••'
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="block text-sm font-medium text-green-700" />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-green-300 rounded-md shadow-sm placeholder-green-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder='••••••••'
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div>
                        <PrimaryButton className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out" disabled={processing}>
                            Create Account
                        </PrimaryButton>
                    </div>
                </form>

                <div className="flex items-center justify-center">
                    <Link
                        href={route('login')}
                        className="font-medium text-green-600 hover:text-green-500"
                    >
                        Already have an account? Sign in
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}


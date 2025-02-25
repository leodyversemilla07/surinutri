import { PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

interface Props {
    children: ReactNode;
}

export default function GuestLayout({ children }: PropsWithChildren<Props>) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-br from-emerald-50 to-teal-50 px-4 sm:px-6 lg:px-8 pb-12">
            <div className="w-full sm:max-w-md mt-12 mb-6">
                <Link href="/" className="flex justify-center">
                    <ApplicationLogo className="w-32 h-32" />
                </Link>
            </div>

            <div className="w-full relative">
                {children}
            </div>
        </div>
    );
}

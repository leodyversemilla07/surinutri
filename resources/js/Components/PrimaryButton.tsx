import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-emerald-700 to-emerald-800 border-0 rounded-xl font-semibold text-white text-sm transition-all duration-300 ease-in-out shadow-[0_4px_20px_rgba(6,78,59,0.2)] hover:shadow-[0_4px_24px_rgba(6,78,59,0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed ${disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

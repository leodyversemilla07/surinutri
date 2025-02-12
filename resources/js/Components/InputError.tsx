import { ClassAttributes, HTMLAttributes } from 'react';

export default function InputError({ message, className = '', ...props }: ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p {...props} className={'mt-2 text-sm font-medium text-red-600 bg-red-50 px-3 py-1.5 rounded-lg border border-red-100 ' + className}>
            {message}
        </p>
    ) : null;
}

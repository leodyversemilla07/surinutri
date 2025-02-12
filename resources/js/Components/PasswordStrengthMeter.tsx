import { useEffect, useState } from 'react';

interface PasswordStrengthMeterProps {
    password: string;
}

export default function PasswordStrengthMeter({ password }: PasswordStrengthMeterProps) {
    const [strength, setStrength] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        calculateStrength(password);
    }, [password]);

    const calculateStrength = (password: string) => {
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        setStrength(score);
        setMessage(getStrengthMessage(score));
    };

    const getStrengthMessage = (score: number) => {
        if (score === 0) return 'Very weak';
        if (score === 1) return 'Weak';
        if (score === 2) return 'Fair';
        if (score === 3) return 'Good';
        if (score === 4) return 'Strong';
        return 'Very strong';
    };

    const getColor = () => {
        if (strength <= 1) return ['bg-red-500', 'text-red-700', 'bg-red-100'];
        if (strength === 2) return ['bg-yellow-500', 'text-yellow-700', 'bg-yellow-50'];
        if (strength === 3) return ['bg-emerald-500', 'text-emerald-700', 'bg-emerald-50'];
        return ['bg-teal-500', 'text-teal-700', 'bg-teal-50'];
    };

    const [barColor, textColor, bgColor] = getColor();

    return (
        <div className="mt-2">
            <div className={`h-2 w-full ${bgColor} rounded-full overflow-hidden`}>
                <div
                    className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                    style={{ width: `${(strength / 5) * 100}%` }}
                />
            </div>
            <p className={`text-xs mt-1.5 font-medium ${textColor}`}>
                {message}
            </p>
        </div>
    );
}

import React, { useEffect, useState } from 'react';

interface PasswordStrengthMeterProps {
    password: string;
}

const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({ password }) => {
    const [strength, setStrength] = useState<number>(0);
    const [label, setLabel] = useState<string>('');

    useEffect(() => {
        calculateStrength(password);
    }, [password]);

    const calculateStrength = (password: string): void => {
        let calculatedStrength = 0;

        if (password.length === 0) {
            setStrength(0);
            setLabel('');
            return;
        }

        // Length check
        if (password.length >= 8) calculatedStrength += 1;
        if (password.length >= 12) calculatedStrength += 1;

        // Character variety checks
        if (/[A-Z]/.test(password)) calculatedStrength += 1;
        if (/[a-z]/.test(password)) calculatedStrength += 1;
        if (/[0-9]/.test(password)) calculatedStrength += 1;
        if (/[^A-Za-z0-9]/.test(password)) calculatedStrength += 1;

        // Normalize to a 0-4 scale
        calculatedStrength = Math.min(Math.floor(calculatedStrength / 1.5), 4);

        setStrength(calculatedStrength);

        // Set descriptive label
        switch (calculatedStrength) {
            case 0:
                setLabel('Too Weak');
                break;
            case 1:
                setLabel('Weak');
                break;
            case 2:
                setLabel('Fair');
                break;
            case 3:
                setLabel('Good');
                break;
            case 4:
                setLabel('Strong');
                break;
            default:
                setLabel('');
        }
    };

    const getColor = (): string => {
        switch (strength) {
            case 0:
                return 'bg-red-500';
            case 1:
                return 'bg-orange-500';
            case 2:
                return 'bg-yellow-500';
            case 3:
                return 'bg-emerald-500';
            case 4:
                return 'bg-green-600';
            default:
                return 'bg-gray-200';
        }
    };

    const getLabelColor = (): string => {
        switch (strength) {
            case 0:
                return 'text-red-500';
            case 1:
                return 'text-orange-500';
            case 2:
                return 'text-yellow-500';
            case 3:
                return 'text-emerald-500';
            case 4:
                return 'text-green-600';
            default:
                return 'text-gray-200';
        }
    };

    return (
        <div className="mt-2">
            <div className={`h-2 w-full ${getColor()} rounded-full overflow-hidden`}>
                <div
                    className={`h-full rounded-full transition-all duration-500 ${getColor()}`}
                    style={{ width: `${(strength / 4) * 100}%` }}
                />
            </div>
            <p className={`text-xs mt-1.5 font-medium ${getLabelColor()}`}>
                {label}
            </p>
        </div>
    );
};

export default PasswordStrengthMeter;

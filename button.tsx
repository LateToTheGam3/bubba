// components/ui/button.tsx
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'solid' | 'outline'; // You can define more variants if needed
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'solid', onClick }) => {
    const baseStyles = 'px-4 py-2 font-semibold text-white rounded-lg';
    const solidStyles = 'bg-purple-700 hover:bg-purple-600';
    const outlineStyles = 'border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white';

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variant === 'outline' ? outlineStyles : solidStyles}`}
        >
            {children}
        </button>
    );
};
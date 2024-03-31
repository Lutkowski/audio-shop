import React, { ReactNode } from 'react';
import classes from "./Button.module.css";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
    const combinedClasses = `${classes.Button} ${className || ''}`;

    return (
        <button className={combinedClasses.trim()} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
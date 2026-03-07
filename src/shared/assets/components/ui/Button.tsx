import { tv } from 'tailwind-variants';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'danger' | 'ghost';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const Button = ({
    children,
    onClick,
    size = 'medium',
    color = 'primary',
    className,
    type,
    disabled,
    ...rest
}: ButtonProps) => {
    const button = tv({
        base: 'text-basetransition-colors text-brand-white-light h-12 max-h-16 cursor-pointer rounded px-14 py-3 font-medium duration-300 hover:opacity-80',
        variants: {
            color: {
                primary: 'bg-brand-gradient-blue-light',
                secondary: 'btn-gradient-border rounded border bg-transparent',
                danger: 'bg-brand-red',
                ghost: 'text-brand-blue bg-transparent',
            },
            size: {
                small: 'h-10 px-4 py-2 text-sm',
                medium: 'h-12 px-6 py-3 text-base',
                large: 'h-16 px-8 py-4 text-lg',
            },
        },
        defaultVariants: {
            color: 'primary',
        },
    });

    return (
        <button
            className={button({
                size,
                color,
                className,
            })}
            onClick={onClick}
            type={type}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;

import { tv } from 'tailwind-variants';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    color?: 'primary' | 'secondary' | 'danger' | 'ghost';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const Button = ({
    children,
    onClick,
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
        },
        defaultVariants: {
            color: 'primary',
        },
    });

    return (
        <button
            className={button({
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

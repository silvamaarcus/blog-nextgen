import { tv } from 'tailwind-variants';

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

const Badge = ({ children, className, size }: BadgeProps) => {
    const badge = tv({
        base: 'bg-brand-gradient-blue-light text-brand-white-dark inline-block rounded px-3 py-1 font-semibold tracking-widest uppercase shadow-lg',
        variants: {
            size: {
                xs: 'text-xs',
                sm: 'text-sm',
                md: 'text-base',
                lg: 'text-lg',
            },
        },
        defaultVariants: {
            size: 'xs',
        },
    });

    return <span className={badge({ className, size })}>{children}</span>;
};

export default Badge;

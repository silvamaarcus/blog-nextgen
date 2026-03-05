import { tv } from 'tailwind-variants';

interface AvatarProps {
    src: string;
    alt: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

const Avatar = ({ src, alt, size = 'medium', className }: AvatarProps) => {
    const avatar = tv({
        base: 'border-brand-blue rounded-full border-2 border-solid object-cover',
        variants: {
            size: {
                small: 'h-8 w-8',
                medium: 'h-12 w-12',
                large: 'h-16 w-16',
            },
        },
        defaultVariants: {
            size: 'medium',
        },
    });

    return (
        <div>
            <img src={src} alt={alt} className={avatar({ size, className })} />
        </div>
    );
};

export default Avatar;

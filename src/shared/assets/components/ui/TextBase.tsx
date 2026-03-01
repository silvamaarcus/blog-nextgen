import { tv } from 'tailwind-variants';

interface TextBaseProps {
  text: string;
  size?: 'b1' | 'b2' | 'b3';
  color?: 'primary' | 'secondary' | 'body';
}

const TextBase = ({ text, size, color }: TextBaseProps) => {
  const title = tv({
    base: 'text-brand-blue font-medium',
    variants: {
      color: {
        primary: 'text-brand-blue',
        secondary: 'text-brand-white-light',
        body: 'text-brand-gray-6',
      },
      size: {
        b1: 'text-lg sm:text-2xl sm:leading-[1.3]',
        b2: 'text-base sm:text-lg sm:leading-[1.4]',
        b3: 'text-sm sm:text-base sm:leading-normal',
      },
    },
    defaultVariants: {
      size: 'b1',
      color: 'body',
    },
  });

  return (
    <span
      className={title({
        color,
        size,
      })}
    >
      {text}
    </span>
  );
};

export default TextBase;

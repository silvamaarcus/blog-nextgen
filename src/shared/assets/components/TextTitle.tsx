import { tv } from 'tailwind-variants';

interface TextTitleProps {
  text: string;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const TextTitle = ({ text, size = 'h1' }: TextTitleProps) => {
  const title = tv({
    base: 'text-brand-blue font-semibold',
    variants: {
      size: {
        h1: 'text-[56px] sm:text-8xl sm:leading-[0.9]',
        h2: 'text-[40px] sm:text-[64px]',
        h3: 'text-[32px] sm:text-5xl sm:leading-[1.1]',
        h4: 'text-[28px] sm:text-4xl sm:leading-[1.2]',
        h5: 'text-xl sm:text-2xl sm:leading-[1.3]',
        h6: 'text-base sm:text-lg sm:leading-[1.4]',
      },
    },
    defaultVariants: {
      size: 'h1',
    },
  });

  return (
    <span
      className={title({
        size,
      })}
    >
      {text}
    </span>
  );
};

export default TextTitle;

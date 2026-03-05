interface InputProps {
    id?: string;
    type?: string;
    placeholder?: string;
    errorMessage?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    className?: string;
}

const Input = ({
    id,
    type = 'text',
    placeholder,
    errorMessage,
    icon,
    iconPosition = 'left',
    className,
    ...rest
}: InputProps) => {
    const getPositionClasses = () => {
        if (!icon) return 'pl-6';

        if (iconPosition === 'left') {
            return 'pl-16';
        } else {
            return 'pl-6';
        }
    };

    return (
        <div className="flex flex-col space-y-2 text-left">
            <div className="flex w-full justify-end">
                {errorMessage && (
                    <p className="text-brand-red text-base">{errorMessage}</p>
                )}
            </div>
            <div className="relative">
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    {...rest}
                    className={`bg-brand-black-light text-brand-white-light focus:ring-brand-blue h-14 w-full rounded focus:border-transparent focus:ring-2 focus:outline-none ${getPositionClasses()} ${errorMessage ? 'border-brand-red border' : 'border border-transparent'} ${className}`}
                />

                {icon && (
                    <div
                        className={`absolute top-4 h-6 w-6 [&>svg]:h-full [&>svg]:w-full ${iconPosition === 'left' ? 'left-6' : 'right-6'}`}
                    >
                        {icon}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Input;

interface TextareaProps {
    id?: string;
    placeholder?: string;
    className?: string;
}

const Textarea = ({ id, placeholder, className, ...rest }: TextareaProps) => {
    return (
        <textarea
            id={id}
            className={`bg-brand-black-light text-brand-white-light focus:ring-brand-blue h-50 w-full rounded p-6 focus:border-transparent focus:ring-2 focus:outline-none ${className}`}
            placeholder={placeholder}
            cols={8}
            {...rest}
        />
    );
};

export default Textarea;

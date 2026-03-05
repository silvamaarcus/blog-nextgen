interface TextareaProps {
    id?: string;
    placeholder?: string;
    className?: string;
}

const Textarea = ({ id, placeholder, className, ...rest }: TextareaProps) => {
    return (
        <textarea
            id={id}
            className={`bg-brand-black-light text-brand-white-light focus:ring-brand-blue h-14 w-full rounded focus:border-transparent focus:ring-2 focus:outline-none ${className}`}
            placeholder={placeholder}
            {...rest}
        >
            Textarea
        </textarea>
    );
};

export default Textarea;

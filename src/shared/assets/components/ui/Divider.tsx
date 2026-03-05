interface DividerProps {
    className?: string;
}

const Divider = ({ className }: DividerProps) => {
    return (
        <div
            className={`border-brand-white-light/10 w-full border-b ${className}`}
        ></div>
    );
};

export default Divider;

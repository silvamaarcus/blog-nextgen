interface ToggleSwitchProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    disabled?: boolean;
}

const ToggleSwitch = ({
    checked,
    onChange,
    name,
    disabled,
}: ToggleSwitchProps) => {
    return (
        <label className="relative inline-block h-8 w-15 rounded-full">
            <input
                type="checkbox"
                className="peer sr-only cursor-pointer"
                checked={checked}
                onChange={onChange}
                name={name}
                disabled={disabled}
            />
            <span className="bg-brand-black-dark peer-checked:bg-brand-blue-dark peer-focus:ring-brand-blue-dark absolute top-0 right-0 bottom-0 left-0 cursor-pointer rounded-4xl transition-colors duration-300 peer-focus:ring-2" />
            <span className="bg-brand-white-dark absolute bottom-1 left-1 h-6 w-6 rounded-full transition-transform duration-300 peer-checked:translate-x-6" />
        </label>
    );
};

export default ToggleSwitch;

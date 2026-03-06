interface DateTimePickerProps {
    value?: string;
    onChange?: (value: string) => void;
    type?: 'date' | 'datetime-local' | 'time';
}

const DateTimePicker = ({
    value,
    onChange,
    type = 'date',
    ...rest
}: DateTimePickerProps) => {
    return (
        <input
            className={`bg-brand-black-light text-brand-white-light focus:ring-brand-blue h-14 w-full rounded px-6 focus:border-transparent focus:ring-2 focus:outline-none`}
            type={type}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            {...rest}
        />
    );
};

export default DateTimePicker;

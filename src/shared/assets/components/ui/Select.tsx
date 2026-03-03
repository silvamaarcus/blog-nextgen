interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  errorMessage?: string;
}

const SelectComponent = ({ options, errorMessage, ...rest }: SelectProps) => {
  return (
    <div className="flex flex-col space-y-2 text-left">
      {errorMessage && (
        <div className="flex w-full justify-end">
          <p className="text-brand-red text-base">{errorMessage}</p>
        </div>
      )}
      <select
        className={`bg-brand-black-light text-brand-white-light focus:ring-brand-blue h-14 w-full rounded px-6 focus:border-transparent focus:ring-2 focus:outline-none ${errorMessage ? 'border-brand-red border' : 'border border-transparent'}`}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;

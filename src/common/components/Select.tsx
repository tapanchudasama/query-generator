import { FC, useEffect, useState } from "react";

type Option = {
  label?: string;
  value?: string;
};
type SelectProps = {
  label?: string;
  placeholder: string;
  dropdownOptions: Option[];
  onChange: (value: string) => void;
};

export const Select: FC<SelectProps> = ({
  label,
  placeholder,
  dropdownOptions,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string>();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  };

  const handleChange = (value: string) => {
    setIsOpen(false);
    setValue(value);
    onChange(value);
  };

  useEffect(() => {
    const listener = () => {
      setIsOpen(false);
    };

    document.body.addEventListener("click", listener);

    return () => {
      document.body.removeEventListener("click", listener);
    };
  });

  return (
    <div onClick={() => setIsOpen(false)} className="space-y-2 w-full relative">
      <p className="text-white text-sm">{label}</p>
      <div
        onClick={handleClick}
        className={`select-none ${
          !value ? "text-neutral-400" : "text-white"
        } w-full px-4 my-2 py-2 bg-slate-800 rounded-md text-sm cursor-pointer`}
      >
        {!value ? placeholder : value}
      </div>
      {dropdownOptions.length > 0 && isOpen && (
        <div className="absolute w-full select-none space-y-2 py-2 shadow-md rounded-md bg-slate-800">
          {dropdownOptions.map(({ label, value }) => {
            if (!label || !value) {
              return;
            }
            return (
              <div
                key={value}
                onClick={() => handleChange(value)}
                className="mx-3 px-3 py-2 cursor-pointer text-sm text-white hover:bg-slate-900 rounded-md"
              >
                {label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

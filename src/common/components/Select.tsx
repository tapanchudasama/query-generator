import { FC } from "react";

type Option = {
  label: string;
  value: string;
};
type SelectProps = {
  label?: string;
  placeholder: string;
  dropdownOptions: Option[];
};

export const Select: FC<SelectProps> = ({
  label,
  placeholder,
  dropdownOptions,
}) => {
  return (
    <div className="space-y-2 w-full">
      <p className="text-white text-sm">{label}</p>
      <div className="text-neutral-400 w-full px-4 my-2 py-2 bg-slate-800 rounded-md text-sm cursor-pointer">
        {placeholder}
      </div>
      {dropdownOptions.length > 0 && (
        <div className="space-y-2 py-2 shadow-md rounded-md bg-slate-800">
          {dropdownOptions.map(({ label, value }) => (
            <div
              key={value}
              className="mx-3 px-3 py-2 cursor-pointer text-sm text-white hover:bg-slate-900 rounded-md"
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

import { FC } from "react";

export const Button: FC<{ children: string; onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-blue-800 mt-8 text-white bg-blue-700 px-4 py-3 rounded-md font-semibold text-sm"
    >
      {children}
    </button>
  );
};

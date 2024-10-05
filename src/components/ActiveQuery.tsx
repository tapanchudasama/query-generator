import { FC } from "react";

export const ActiveQuery: FC<{ query: string }> = ({ query = "" }) => {
  return (
    <p className="bg-blue-800 w-full rounded-xl px-6 py-2 text-white">
      <span className="font-bold">Query: </span>
      <span>{query}</span>
    </p>
  );
};

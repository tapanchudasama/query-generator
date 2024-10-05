import { Select } from "../common/components/Select";

export const Rule = () => {
  return (
    <div className="flex space-x-4">
      <Select
        placeholder="Select field"
        label="Field"
        dropdownOptions={[
          {
            label: "Theme",
            value: "Theme",
          },
          {
            label: "Theme",
            value: "Theme",
          },
        ]}
      />
      <Select
        placeholder="Select condition"
        label="Condition"
        dropdownOptions={[]}
      />
      <Select
        placeholder="Select criteria"
        label="Criteria"
        dropdownOptions={[
          {
            label: "Theme",
            value: "Theme",
          },
        ]}
      />
    </div>
  );
};

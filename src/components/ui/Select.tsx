import { IconChevronDown } from "@devigner-ui/icons/ChevronDown";
import "./Field.css";

export interface SelectOption<T extends string> {
  value: T;
  label: string;
}

interface SelectProps<T extends string> {
  value: T;
  options: readonly SelectOption<T>[];
  onChange: (value: T) => void;
  disabled?: boolean;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
}

export function Select<T extends string>({
  value,
  options,
  onChange,
  disabled,
  ...aria
}: SelectProps<T>) {
  return (
    <div className="field field--select">
      <select
        className="field__select"
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value as T)}
        {...aria}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <IconChevronDown className="field__icon" strokeWidth={2} />
    </div>
  );
}

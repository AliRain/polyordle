import { Label } from '../styles';
import { Select } from './styles';

interface IProps {
  label: string;
  value: string | number;
  options: { value: string; label: string }[];
  onChange(v: string): void;
}

const Dropdown: React.VFC<IProps> = ({ label, value, options, onChange }) => {
  return (
    <Label>
      {label}
      <Select value={value} onChange={e => onChange(e.target.value)}>
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </Select>
    </Label>
  );
};

export default Dropdown;

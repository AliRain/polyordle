import { Label } from '../styles';
import { Checkbox as StyledCheckbox } from './styles';

interface IProps {
  label: string;
  checked: boolean;
  onChange(checked: boolean): void;
}

const Checkbox: React.VFC<IProps> = ({ label, checked, onChange }) => {
  return (
    <Label>
      {label}
      <StyledCheckbox type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
    </Label>
  );
};

export default Checkbox;

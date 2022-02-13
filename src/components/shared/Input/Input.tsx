import { InputHTMLAttributes } from 'react';
import { Label } from '../styles';
import { Input as StyledInput } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.VFC<IProps> = ({ label, ...props }) => {
  return (
    <Label>
      {label}
      <StyledInput {...props} />
    </Label>
  );
};

export default Input;

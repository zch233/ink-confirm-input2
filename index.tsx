import React, {FC, useCallback, useState} from 'react';
import TextInput from 'ink-text-input';
import yn from 'yn';

interface Props {
  isChecked?: boolean,
  placeholder?: string,
  onChange?: (value:string) => void,
  onSubmit?: (checked: boolean) => void,
  value?: string,
}

const ConfirmInput:FC<Props> = ({isChecked=false, onChange=() => {}, onSubmit=() => {}, placeholder='', value='', ...props}) => {
  const handleSubmit = useCallback((newValue: string) => {
    onSubmit(yn(newValue, {default: isChecked}));
  }, [isChecked, onSubmit]);

  return (
    <TextInput
      {...props}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onSubmit={handleSubmit}
    />
  );
};

interface UncontrolledProps extends Omit<Props, 'value' | 'onChange'> {
  /**
   * Initial value.
   */
  initialValue?: string;
}

export const UncontrolledConfirmInput: FC<UncontrolledProps> = ({ initialValue = '', ...props }) => {
  const [value, setValue] = useState(initialValue);

  return <ConfirmInput {...props} value={value} onChange={setValue} />;
};

export default ConfirmInput
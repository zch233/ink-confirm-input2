import React, {FC, useCallback} from 'react';
import TextInput from 'ink-text-input';
import yn from "yn";

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
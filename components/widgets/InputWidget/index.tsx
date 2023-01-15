import { useState } from 'react';
import { InputWidgetProps } from '../../../types';

export default function InputWidget({
  defaultValue = '',
  ...restProps
}: InputWidgetProps) {
  const [value, setValue] = useState<string>(defaultValue);

  return (
    <input
      {...restProps}
      value={value}
      onChange={(event) => {
        setValue(event.currentTarget.value);
      }}
    />
  );
}

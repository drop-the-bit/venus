import { ButtonWidgetProps } from '../../../types';

export default function ButtonWidget({ title, onClick }: ButtonWidgetProps) {
  return <button onClick={onClick}>{title}</button>;
}

import { TitleWidgetProps } from '../../../types';
import style from './style.module.css';

export type Props = TitleWidgetProps;

export function TitleWidget({ title }: Props) {
  return (
    <div className={style.widget}>
      <h1>{title}</h1>
    </div>
  );
}

export default TitleWidget;

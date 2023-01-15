import { TitleWidgetProps } from '../../../types';
import style from './style.module.css';

export function TitleWidget({ title }: TitleWidgetProps) {
  return (
    <div className={style.widget}>
      <h1>{title}</h1>
    </div>
  );
}

export default TitleWidget;

import { renderWidgets } from '../../../helpers/renderWidget';
import { LayoutWidgetProps } from '../../../types';
import style from './style.module.scss';

export function LayoutWidget({
  direction = 'vertical',
  width,
  height,
  widgetProps,
}: LayoutWidgetProps) {
  return (
    <div
      className={style.widgetLayout}
      style={{
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        width,
        height,
      }}
    >
      {renderWidgets(widgetProps)}
    </div>
  );
}

export default LayoutWidget;

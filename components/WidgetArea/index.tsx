import { renderWidgets } from '../../helpers/renderWidget';
import { WidgetMeta } from '../../types';

type Props = {
  widgetMetaList: WidgetMeta[];
};

export default function WidgetArea({ widgetMetaList }: Props) {
  return <div>{renderWidgets(widgetMetaList)}</div>;
}

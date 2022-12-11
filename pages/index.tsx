import WidgetArea from '../components/WidgetArea';
import { WidgetMeta } from '../types';

const WIDGET_META_LIST: WidgetMeta[] = [
  { type: 'title', title: 'Title widget' },
];

export default function Index() {
  return (
    <div id="content">
      <WidgetArea widgetMetaList={WIDGET_META_LIST} />
    </div>
  );
}

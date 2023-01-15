import WidgetArea from '../components/WidgetArea';
import { WidgetMeta } from '../types';

const WIDGET_META_LIST: WidgetMeta[] = [
  { type: 'title', title: 'Title widget' },
  {
    type: 'image',
    src: '/vercel.svg',
    alt: '',
    width: 100,
    height: 100,
  },
  {
    type: 'video',
    src: '/cat-run.mp4',
  },
  {
    type: 'layout',
    direction: 'vertical',
    widgetProps: [
      {
        type: 'input',
        defaultValue: '',
        placeholder: '입력하세요',
      },
      {
        type: 'button',
        title: '제출',
        onClick: () => {
          alert('submit');
        },
      },
    ],
  },
];

export default function Index() {
  return (
    <div id="content">
      <WidgetArea widgetMetaList={WIDGET_META_LIST} />
    </div>
  );
}

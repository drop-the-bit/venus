import { Fragment } from 'react';
import { WidgetMeta } from '../../types';
import TitleWidget from '../widgets/TitleWidget';

type Props = {
  widgetMetaList: WidgetMeta[];
};

const getWidgetByType = (props: WidgetMeta) => {
  try {
    switch (props.type) {
      case 'title':
        return <TitleWidget {...props} />;
      default:
        throw new Error('Failed to find matched widget');
    }
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    } else {
      alert('Unexpected error ocurred');
    }
  }
};

export default function WidgetArea({ widgetMetaList }: Props) {
  return (
    <div id="widget-area">
      {widgetMetaList.map((props, index) => {
        return (
          <Fragment key={`widget-${index}`}>{getWidgetByType(props)}</Fragment>
        );
      })}
    </div>
  );
}

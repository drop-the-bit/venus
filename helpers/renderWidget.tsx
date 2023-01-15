import { Fragment } from 'react';
import ButtonWidget from '../components/widgets/ButtonWidget';
import ImageWidget from '../components/widgets/ImageWidget';
import InputWidget from '../components/widgets/InputWidget';
import LayoutWidget from '../components/widgets/LayoutWidget';
import { TitleWidget } from '../components/widgets/TitleWidget';
import VideoWidget from '../components/widgets/VideoWidget';
import { WidgetMeta } from '../types';

const getWidgetByType = (props: WidgetMeta) => {
  try {
    switch (props.type) {
      case 'title':
        return <TitleWidget {...props} />;

      case 'button':
        return <ButtonWidget {...props} />;

      case 'image':
        return <ImageWidget {...props} />;

      case 'input':
        return <InputWidget {...props} />;

      case 'video':
        return <VideoWidget {...props} />;

      case 'layout':
        return <LayoutWidget {...props} />;

      default:
        throw new Error('Failed to find matched widget');
    }
  } catch (e) {
    if (e instanceof Error) {
      globalThis?.window?.alert(e.message);
    } else {
      globalThis?.window?.alert('Unexpected error ocurred');
    }
  }
};

export function renderWidgets(widgetMetaList: WidgetMeta[]) {
  return widgetMetaList.map((props, index) => {
    return (
      <Fragment key={`widget-${index}`}>{getWidgetByType(props)}</Fragment>
    );
  });
}

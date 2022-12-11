import { CommonWidgetProps } from '../components/widgets/types';

export type TitleWidgetProps = CommonWidgetProps & { title: string };

export type WidgetTypes = 'title';

export type CommonWidgetMeta<T> = { type: WidgetTypes } & T;

export interface TitleWidgetMeta extends CommonWidgetMeta<TitleWidgetProps> {
  type: 'title';
}

export type WidgetMeta = TitleWidgetMeta;

export type CommonWidgetProps = {
  flex?: string;
};

export type TitleWidgetProps = CommonWidgetProps & { title: string };
export type ButtonWidgetProps = CommonWidgetProps & {
  onClick: () => void;
  title: string;
};
export type ImageWidgetProps = CommonWidgetProps & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};
export type InputWidgetProps = CommonWidgetProps & {
  type: React.HTMLProps<HTMLInputElement>['type'];
  defaultValue?: string;
  placeholder?: string;
};

export type VideoWidgetProps = CommonWidgetProps & {
  src: string;
  width?: number;
  height?: number;
  controls?: boolean;
};

export type LayoutWidgetProps = CommonWidgetProps & {
  direction?: 'horizontal' | 'vertical';
  width?: number | `${number}fr`;
  height?: number | `${number}fr`;
  widgetProps: WidgetMeta[];
};

export type WidgetTypes =
  | 'title'
  | 'button'
  | 'image'
  | 'input'
  | 'video'
  | 'layout';

export type CommonWidgetMeta<T> = { type: WidgetTypes } & T;

export interface TitleWidgetMeta extends CommonWidgetMeta<TitleWidgetProps> {
  type: 'title';
}

export interface ButtonWidgetMeta extends CommonWidgetMeta<ButtonWidgetProps> {
  type: 'button';
}
export interface ImageWidgetMeta extends CommonWidgetMeta<ImageWidgetProps> {
  type: 'image';
}

export interface VideoWidgetMeta extends CommonWidgetMeta<VideoWidgetProps> {
  type: 'video';
}
export interface InputWidgetMeta extends CommonWidgetMeta<InputWidgetProps> {
  type: 'input';
}

export interface LayoutWidgetMeta extends CommonWidgetMeta<LayoutWidgetProps> {
  type: 'layout';
}

export type WidgetMeta =
  | TitleWidgetMeta
  | ButtonWidgetMeta
  | ImageWidgetMeta
  | InputWidgetMeta
  | VideoWidgetMeta
  | LayoutWidgetMeta;

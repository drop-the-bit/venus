import { VideoWidgetProps } from '../../../types';

export default function VideoWidget({
  src,
  width,
  height,
  controls = true,
}: VideoWidgetProps) {
  return <video src={src} width={width} height={height} controls={controls} />;
}

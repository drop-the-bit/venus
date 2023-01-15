import { ImageWidgetProps } from '../../../types';
import Image from 'next/image';

export default function ImageWidget({
  src,
  alt = '',
  width,
  height,
}: ImageWidgetProps) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}

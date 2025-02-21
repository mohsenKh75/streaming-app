import React, { Ref } from 'react';
import { Box } from '../Box';
import { classnames } from '@/utils/classnames';

interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  radius?: number;
  ref?: never;
  objectFit?: 'object-contain' | 'object-cover';
}

export function Image({ className, src, objectFit, ...props }: Props) {
  const imageComponentClassName = classnames(
    'block',
    objectFit,

    className
  );
  if (!src) {
    return <Box className={imageComponentClassName} />;
  }
  const renderImage = () => <img className={imageComponentClassName} src={src} {...props} />;
  return <>{renderImage()}</>;
}

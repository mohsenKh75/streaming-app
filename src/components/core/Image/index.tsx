import React, { Ref } from 'react';
import { Box } from '../Box';
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import { classnames } from '@/utils/classnames';

interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  radius?: number;
  webPUrl?: string;
  disableLazyLoad?: boolean;
  ref?: never;
  customRef?: Ref<HTMLImageElement>;
  objectFit?: 'object-contain' | 'object-cover';
}

export function Image({ className, webPUrl, src, customRef, disableLazyLoad = true, objectFit, ...props }: Props) {
  const hasLazyLoadClass = !!src && !disableLazyLoad;
  const imageComponentClassName = classnames(
    'block',
    objectFit,
    {
      lazyload: hasLazyLoadClass,
      'animate-skeleton': !src
    },
    className
  );

  const imageSrc = disableLazyLoad ? src : undefined;
  const dataSrc = !disableLazyLoad ? src : undefined;

  const srcWebP = disableLazyLoad ? webPUrl : undefined;
  const dataSrcWebP = !disableLazyLoad ? webPUrl : undefined;

  const srcJpeg = disableLazyLoad ? src : undefined;
  const dataSrcJpeg = !disableLazyLoad ? src : undefined;

  if (!src) {
    return <Box className={imageComponentClassName} />;
  }
  const renderImage = () => (
    <img ref={customRef} className={imageComponentClassName} src={imageSrc} data-src={dataSrc} {...props} />
  );
  return (
    <>
      {webPUrl ? (
        <picture>
          <source type='image/webp' srcSet={srcWebP} data-srcset={dataSrcWebP} />
          <source type='image/jpeg' srcSet={srcJpeg} data-srcset={dataSrcJpeg} />
          {renderImage()}
        </picture>
      ) : (
        renderImage()
      )}
    </>
  );
}

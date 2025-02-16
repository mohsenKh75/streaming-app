import { ComponentProps, ElementType, ReactElement } from 'react';
import { ColorType } from '../../../../figma/tailwindTypes';
import { classnames } from '@/utils/classnames';

export type ValidTags = keyof JSX.IntrinsicElements;

export interface BoxProps<T extends ValidTags = 'div'> {
  tag?: T;
  customRef?: ComponentProps<T>['ref'];
  backgroundColor?: `bg-${ColorType}`;
  borderColor?: string;
  boxShadow?: string;
  typeTrackingId?: string;
  ref?: never;
}

export function Box<T extends ValidTags = 'div'>({
  backgroundColor,
  borderColor,
  boxShadow,
  className,
  tag,
  typeTrackingId,
  customRef,
  ...props
}: BoxProps<T> & JSX.IntrinsicElements[T]): ReactElement {
  const Tag = tag || ('div' as ElementType);
  return (
    <Tag
      {...props}
      ref={customRef}
      className={classnames(backgroundColor, borderColor, boxShadow, className)}
      type-tracking-id={typeTrackingId}
    ></Tag>
  );
}

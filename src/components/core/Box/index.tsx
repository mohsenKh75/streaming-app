import { ElementType, ReactElement } from 'react';
import { ColorType } from '../../../../figma/tailwindTypes';
import { classnames } from '@/utils/classnames';
import { ExtendedHTMLDivElement } from '@/components/shared/HorizentalScroll';

export type ValidTags = keyof JSX.IntrinsicElements;

export interface BoxProps<T extends ValidTags = 'div'> {
  tag?: T;
  customRef?: React.RefObject<ExtendedHTMLDivElement | null>;
  backgroundColor?: `bg-${ColorType}`;
  borderColor?: `border-${ColorType}`;
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

import { GridContainer, GridContainerProps } from '@/components/core/GridContainer';
import { classnames } from '@/utils/classnames';
import React, { ReactNode, DOMAttributes, useRef } from 'react';

export interface ExtendedHTMLDivElement extends HTMLDivElement {
  isDown?: boolean;
  startX?: number;
}

interface Props extends Pick<GridContainerProps<'div'>, 'xSpacing'> {
  children: ReactNode;
  className?: string;
  onScroll?: DOMAttributes<HTMLDivElement>['onScroll'];
  scrollContainerRef?: React.RefObject<ExtendedHTMLDivElement | null>;
  onSwipeEnd?: (isTouchEnd?: boolean) => void;
}

export function HorizontalScroll({
  children,
  className,
  onScroll,
  scrollContainerRef,
  onSwipeEnd,
  ...gridContainerProps
}: Props) {
  const scrollContainerRefObject = useRef<ExtendedHTMLDivElement>(null);
  const scrollRef = scrollContainerRef || scrollContainerRefObject;
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const scrollContainer = scrollRef?.current;
    if (!scrollContainer) return;

    scrollContainer.isDown = true;
    scrollContainer.startX = e.pageX - scrollContainer.offsetLeft;
  };

  const handleMouseLeave = () => {
    const scrollContainer = scrollRef?.current;
    if (scrollContainer) scrollContainer.isDown = false;
    onSwipeEnd?.(false);
  };

  const handleMouseUp = () => {
    const scrollContainer = scrollRef?.current;
    if (scrollContainer) scrollContainer.isDown = false;
    onSwipeEnd?.(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const scrollContainer = scrollRef?.current;
    if (!scrollContainer || !scrollContainer.isDown) return;

    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = x - (scrollContainer.startX || 0); // Adjust scrolling speed
    scrollContainer.startX = x;
    scrollContainer.scrollLeft = scrollContainer.scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    onSwipeEnd?.(true);
  };

  return (
    <GridContainer
      className={classnames(className, 'no-scrollbar overflow-y-hidden overflow-x-auto cursor-grab')}
      customRef={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchEnd={handleTouchEnd}
      onScroll={onScroll}
      {...gridContainerProps}
    >
      {children}
    </GridContainer>
  );
}

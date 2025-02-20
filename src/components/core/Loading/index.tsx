import { classnames } from '@/utils/classnames';
import { Box } from '../Box';

interface Props {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  isLoading?: boolean;
  className?: string;
}

const sizeMap = {
  small: 'w-4 h-4 border-2',
  medium: 'w-6 h-6 border-4',
  large: 'w-8 h-8 border-4'
};

export function Loading({ size = 'medium', color = 'border-white', isLoading = false, className }: Props) {
  const sizeClasses = sizeMap[size];

  return (
    <Box
      className={classnames(
        `inline-block ${sizeClasses} border-solid border-t-transparent animate-spin rounded-full ${color}`,
        className,
        { hidden: !isLoading }
      )}
      role='status'
      aria-label='loading'
    />
  );
}

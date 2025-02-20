import { classnames } from '@/utils/classnames';
import { ReactElement } from 'react';
import { Image } from '../Image';
import { Loading } from '../Loading';
import { BackgroundColorClassNameType, TextFontSizeType } from 'figma/tailwindTypes';
import { Typography } from '../Typography';
import { Box } from '../Box';

interface Props {
  children?: string | ReactElement;
  onClick?: () => void;

  disabled?: boolean;
  isLoading?: boolean;
  buttonType?: keyof typeof BUTTON_TYPE;
  shape?: 'filled' | 'outlined' | 'textOnly';
  leftIcon?: string;
  rightIcon?: string;
  backgroundColor?: BackgroundColorClassNameType;
  fullSize?: boolean;
  className?: string;
  textVariant?: TextFontSizeType;
  inline?: boolean;
}
const BUTTON_TYPE = {
  DEFAULT: 'DEFAULT',
  SMALL: 'SMALL'
} as const;

export function Button({
  children,
  onClick,
  disabled,
  isLoading,
  buttonType = BUTTON_TYPE.DEFAULT,
  shape = 'filled',
  leftIcon,
  rightIcon,
  backgroundColor = 'bg-primary-base',
  fullSize = false,
  inline = false,
  className,
  textVariant = 'text-body'
}: Props) {
  return (
    <Box
      tag='button'
      disabled={disabled}
      className={classnames('rounded-sm', className, {
        [`${backgroundColor} text-white`]: shape === 'filled',
        'flex items-center justify-center ': !inline,
        ' border border-neutral-pure-white': shape === 'outlined',
        'w-28 h-10': buttonType === BUTTON_TYPE.DEFAULT,
        'w-20 h-10': buttonType === BUTTON_TYPE.SMALL,
        'w-full h-12': fullSize
      })}
      onClick={onClick}
    >
      {!isLoading && rightIcon && <Image src={rightIcon} alt='arrowLeft' width={24} height={24} />}
      <Loading isLoading={isLoading} />
      {!isLoading && (
        <Typography className='px-2' variant={textVariant}>
          {children}
        </Typography>
      )}
      {!isLoading && leftIcon && <Image src={leftIcon} alt='arrowLeft' width={24} height={24} />}
    </Box>
  );
}

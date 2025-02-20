import { classnames } from '@/utils/classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { Typography } from '../Typography';

interface Props {
  label: string;
  to: string;
  hash?: string;
}

export function Link({ label, to, hash }: Props) {
  const location = useLocation();
  const finalUrl = hash ? `${to}#${hash}` : to;
  const isActive = location.pathname + location.hash === finalUrl;

  return (
    <NavLink
      to={finalUrl}
      className={classnames(
        'relative w-full px-6 py-2 text-neutral-pure-white text-lg font-bold transition-color duration-300 border-b-[1px]',
        {
          'bg-gradient-to-t from-red-900 to-transparent border-primary-base': isActive,
          'border-neutral-base opacity-70 hover:opacity-100': !isActive
        }
      )}
    >
      <Typography variant='text-subtitle'>{label}</Typography>
    </NavLink>
  );
}

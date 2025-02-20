import { Box } from '@/components/core/Box';
import { Button } from '@/components/core/Button';
import { Typography } from '@/components/core/Typography';
import { useState } from 'react';

interface Props {
  text: string;
  maxLength: number;
}
export function ExpandableSection({ text, maxLength = 150 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Typography tag='span' className='inline' variant='text-body'>
      {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      {text.length > maxLength && (
        <Button inline textVariant='text-body-strong' shape='textOnly' onClick={toggleExpansion}>
          {isExpanded ? 'نمایش کمتر' : 'نمایش بیشتر'}
        </Button>
      )}
    </Typography>
  );
}

import { GridContainer } from '@/components/core/GridContainer';
import { Link } from '@/components/core/Link';

export function SeasonNav() {
  return (
    <GridContainer>
      <Link to='/' hash='1' label='فصل 1' />
      <Link to='/' hash='2' label='فصل 2' />
      <Link to='/' hash='3' label='فصل 3' />
    </GridContainer>
  );
}

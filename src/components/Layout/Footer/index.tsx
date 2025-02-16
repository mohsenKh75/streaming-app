import { ASSETS } from '@/assets';
import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';

export function Footer() {
  return (
    <GridContainer justifyContent='justify-between'>
      <Image src={ASSETS.home} width={24} height={24} />
      <Image src={ASSETS.stream} width={24} height={24} />
      <Image src={ASSETS.search} width={24} height={24} />
      <Image src={ASSETS.archive} width={24} height={24} />
    </GridContainer>
  );
}

import { ASSETS } from '@/assets';
import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';

export function Header() {
  return (
    <GridContainer
      justifyContent='justify-between'
      className='max-h-[40] px-2 border-b-[1px] border-neutral-base'
      backgroundColor='bg-neutral-pure-black'
    >
      <Image src={ASSETS.arrowRight} width={24} height={32} />
      <Image src={ASSETS.logo} className='scale-150' width={40} height={40} />
      <Image src={ASSETS.profile} width={24} height={24} />
    </GridContainer>
  );
}

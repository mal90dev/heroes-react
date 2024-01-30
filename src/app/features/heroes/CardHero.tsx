import React from 'react';
import {Card, CardHeader, Image} from '@nextui-org/react';
import { Hero } from './shared/interfaces/hero.interface';

interface Props {
  hero: Hero
}

export const CardHero: React.FC<Props> = ({hero}) => {
  
  return (
    <>
      <Card className="col-3 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">{ hero.name }</p>
          <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={hero.image}
        />
      </Card>
    </>
  )
}

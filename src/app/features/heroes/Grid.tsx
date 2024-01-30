import { useEffect, useState } from 'react';
import { CardHero } from './CardHero';
import HeroesService from './shared/services/HeroesService';
import { Hero } from './shared/interfaces/hero.interface';


interface Props {
  pageToShow: number
}


export const Grid: React.FC<Props> = ({pageToShow}) => {

  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {

    async function fetchHeroes() {
      try {
        const heroes = await HeroesService.getHeroes(pageToShow);
        setHeroes(heroes);
        // console.log(heroes);
      } catch (error) {
        console.error('Error fetching heroes:', error);
      }
    }
    fetchHeroes();
  }, [pageToShow]);
  

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 grid-flow-row-dense gap-10">
        { heroes?.map((hero, index)=> (
          <CardHero key={index} hero={hero}/>
        ))}
      </div>
    </>
  )
}

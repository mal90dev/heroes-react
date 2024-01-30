import {Pagination} from '@nextui-org/react';
import HeroesService from './shared/services/HeroesService';

interface Props {
  onChangeNumberPage(page: number): void;
}

export const Paginator: React.FC<Props> = ({ onChangeNumberPage }) => {

  const heroesPerPage = 8;

  const getPages = (): number => {
    const totalHeroes = HeroesService.numHeroes;
    return Math.ceil(totalHeroes / heroesPerPage);
  }

  const handleChangePaginator = (page: number): void => {
    onChangeNumberPage(page);
  }
  
  return (
    <div className="pt-2 flex justify-end">
      <Pagination total={getPages()} initialPage={1} onChange={handleChangePaginator}/>
    </div>
  )
}

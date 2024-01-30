import { useState } from 'react';
import { Grid } from '../Grid';
import { Paginator } from '../Paginator';
import { Header } from './../Header';

export const GridHeroView = () => {
  
  const [page, setpage] = useState(1);

  const handleChangeNumberPage = (page: number) => {
    setpage(page);
  }

  return (
    <>
      <Header />
      <div className="grid">
        <Grid pageToShow={page}/>
        <Paginator onChangeNumberPage={handleChangeNumberPage}/>
      </div>
    </>
  )
}

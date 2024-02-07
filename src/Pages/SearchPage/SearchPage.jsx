import { SearchInput } from './components/SearchInput';
import { useSearchParams  } from 'react-router-dom';
import './SearchPage.css';
import { getItemsByName } from '../../helpers/getItemsByName';
import { Item } from '../../UI/components';

export const SearchPage = () => {

  const [ searchParams ]= useSearchParams();
  const q = searchParams.get('q') || '';
  const items = getItemsByName( q );

   //Si el query está vacío mostrará la alerta de Search Item
   const showSearch = ( q.length === 0 ); 

  //Si el query ya tiene escrito algo y no se encuentra en el array de heroes entonces mostrará la alerta de No found
  const showError = ( q.length > 0 ) && ( items.length === 0 );

  console.log( items )
  
  return (
    <>
      <section className='search-page section'>
        <div className="search-input-container container">
          {
            <SearchInput searchText={ q }/>
          }
        </div>

        <div className="grid container">
          {
            items.map( item => (
              <Item key = { item.productNumber } item={ item }/>
            ))
          }
        </div>
        <div className="container flex animate__animated animate__fadeIn" 
               style={{ display: (showSearch) ? '' : 'none'}}
          >
            
            <p>Search an Item...</p>
        </div>
        <div className="container flex animate__animated animate__fadeIn" 
            style={{ display: (showError) ? '' : 'none' }}
            >
            <p>No Item with <b> { q }</b></p>
          </div>

      </section>
    </>
  )
}

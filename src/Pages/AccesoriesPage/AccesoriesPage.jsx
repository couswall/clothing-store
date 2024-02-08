
import { CategoryProduct } from '../../UI/components/CategoryProduct/CategoryProduct'
import { items } from '../../data/data'
import './AccesoriesPage.css'

export const AccesoriesPage = () => {

    const itemList = items.filter( item => item.category === 'Accesories' ); 
    const arrayOfCategories = ["All", "Women", "Men"];
   
    const filterItems = ( itemsList = [] , name = '', value = '' ) => {
        if ( name === "All" || value === "All" ) {
          return itemsList
        }else{
         return itemsList.filter(  item => item.genre === name.toLowerCase() || item.genre === value.toLowerCase()  );
        }
    }

  return (
    <>

        <CategoryProduct 
            itemsList={ itemList }
            arrayOfCategories={ arrayOfCategories }
            filterItems={ filterItems }
        />
    </>
    )
}

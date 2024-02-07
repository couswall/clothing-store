import { useForm } from '../../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchInput.css';
import { FaSearch } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';


export const SearchInput = ({animationSearch, searchText }) => {

  const { setShowSearchInput, showSearchInput } = useContext( CartContext );
  const navigate = useNavigate();
  const location = useLocation();


  const { searchInput, onInputChange, onResetForm} = useForm({
    searchInput: searchText || ''
  });

  const onSubmitSearch = (e) => {
    e.preventDefault();

    if( searchInput.trim().length <= 1 ) return; 
    

    if (location.pathname === "/search") {
      
      navigate(`?q=${ searchInput }`);
    
    } else {
      navigate(`search?q=${ searchInput }`);
    }

    setShowSearchInput( false );


  }

  return (
    <div className={`search-input-wrapper animate__animated ${animationSearch}`}>
      <div className="container flex">
        <form className='grid' onSubmit={ onSubmitSearch }>
          <input 
            type="text" 
            placeholder='Search'
            name='searchInput'
            value={ searchInput }
            onChange={ onInputChange }
            required

          />
          <button className='btn' type='submit'>
            <FaSearch/>
          </button>
        </form>
      </div>
    </div>
  )
}

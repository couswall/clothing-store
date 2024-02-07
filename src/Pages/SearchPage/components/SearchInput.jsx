import { useContext } from 'react';
import './SearchInput.css';
import { FaSearch } from "react-icons/fa";
import { CartContext } from '../../../context';


export const SearchInput = ({animationSearch}) => {

  const { showSearchInput }  = useContext( CartContext );

  return (
    <div className={`search-input-wrapper animate__animated ${animationSearch}`}>
      <div className="container flex">
        <form className='grid'>
          <input 
            type="text" 
            placeholder='Search'
          />
          <button className='btn'>
            <FaSearch/>
          </button>
        </form>
      </div>
    </div>
  )
}

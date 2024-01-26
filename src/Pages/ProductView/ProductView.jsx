
import { useParams } from 'react-router-dom';
import './ProductView.css';
import { getItemByProductNumber } from '../../helpers/getItemByProductNumber';

export const ProductView = () => {
  
  const { productNumber } = useParams();

  const item = getItemByProductNumber( productNumber );

  return (
    <>
      
    </>
  )
}

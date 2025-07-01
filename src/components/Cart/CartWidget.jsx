import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const totalQuantity = getTotalQuantity();

  const styles = {
    cartWidget: { position: 'relative', display: 'inline-block', cursor: 'pointer', textDecoration: 'none' },
    cartIcon: { fontSize: '30px', fontWeight: 'bold', color: 'black' },
    cartCount: { position: 'absolute', top: '-6px', right: '-6px', backgroundColor: 'red', color: 'white', fontSize: '12px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '50%', lineHeight: 1 }
  };

  return (
    <Link to="/cart" style={styles.cartWidget}>
      <ShoppingCartIcon style={styles.cartIcon} />
      {totalQuantity > 0 && <span style={styles.cartCount}>{totalQuantity}</span>}
    </Link>
  );
};

export default CartWidget;

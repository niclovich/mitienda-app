import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  const styles = {
    cartWidget: {
      position: 'relative',
      display: 'inline-block',
    },
    cartIcon: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: 'black',
    },
    cartCount: {
      position: 'absolute',
      top: '-6px',
      right: '-6px',
      backgroundColor: 'red',
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      padding: '2px 6px',
      borderRadius: '50%',
      lineHeight: 1,
    },
  };

  return (
    <div style={styles.cartWidget}>
      <ShoppingCartIcon style={styles.cartIcon} />
      <span style={styles.cartCount}>0</span>
    </div>
  );
};

export default CartWidget;

import { AppRouter } from './Routes/AppRouter'
import { CartProvider } from './context'

export const ClothingStoreApp = () => {
  return (
    <>

      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </>
  )
}

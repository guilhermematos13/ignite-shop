import { ReactNode, createContext } from 'react'

interface CartContextType {
  createItem: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const createItem = () => {
    console.log('contexto')
  }

  return (
    <CartContext.Provider value={{ createItem }}>
      {children}
    </CartContext.Provider>
  )
}

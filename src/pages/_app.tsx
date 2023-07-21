import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logoImg from '../assets/Logo.svg'
import Image from 'next/image'
import {
  ButtonContainer,
  Container,
  Header,
  HeaderButton,
  SpanButton,
} from '@/styles/pages/app'
import ShoppingCart from '../assets/ShoppingCart.svg'
import { CartContextProvider } from '@/context/CartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <ButtonContainer>
            <HeaderButton>
              <Image src={ShoppingCart} alt="" />
            </HeaderButton>
            <SpanButton>1</SpanButton>
          </ButtonContainer>
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}

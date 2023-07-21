import { keyframes, styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
  justifyContent: 'center',
})

export const Header = styled('header', {
  padding: '2rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 1304,
  margin: '0 auto',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
})

export const SpanButton = styled('span', {
  fontWeight: 'bold',
  color: '$white',
  borderRadius: 1000,
  background: '$green300',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 2,
  width: 24,
  height: 24,
  fontSize: 14,
  marginLeft: -10,
  marginTop: -8,
})

export const HeaderButton = styled('button', {
  padding: 12,
  outline: 'none',
  background: '$gray800',
  border: 0,
  color: '$gray300',
  borderRadius: 6,
  cursor: 'pointer',
})

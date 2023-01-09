import React from 'react'
import { useLocation } from 'react-router-dom'
import { MainContainer } from './styled'

const Header = () => {
  const location = useLocation()
  console.log(location)
  return (
    <MainContainer>
      {location.pathname === "/" ? <p className="destaque">SACOLA</p> : <p>SACOLA</p>}
      {location.pathname === "/pagamento" ? <p className="destaque">PAGAMENTO</p> : <p>PAGAMENTO</p>}
      {location.pathname === "/confirmacao" ? <p className="destaque">CONFIRMAÇÃO</p> : <p>CONFIRMAÇÃO</p>}
    </MainContainer>
  )
}

export default Header 
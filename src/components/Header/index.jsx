import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from '../../utils/style/colors'
import logo from '../../assets/dark-logo.png'

const StyledNav = styled.nav`
    margin : 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const StyledLogo = styled.img`
    width: 260px;
    height: 97px;
`
const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

function Header() {
  return (
    <StyledNav>
      <StyledLogo src={logo} alt="logo" />
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Freelances</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
      </div>
      
    </StyledNav>
  )
}

export default Header
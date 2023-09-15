import styled from "styled-components";
import colors from '../../utils/style/colors'
import homePicture from '../../assets/home-illustration.svg'
import { Link } from "react-router-dom";

const StyledPage = styled.div`
  background-color: ${colors.backgroundLight};
  margin: 100px;
  height: 824px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const StyledLink = styled(Link)`
  width: 50px;
  padding: 10px 70px;
  text-decoration: none;
  font-size: 18px;
  color: white; 
  border-radius: 30px; 
  background-color: ${colors.primary};
`
const StyledImg = styled.img`
  width: 500px;
`
const StyledTitle = styled.h1`
  line-height: 2em;
`

function Home() {
  return (
  <StyledPage>
    <div>
      <StyledTitle>
        Repérez vos besoins,<br />
        on s'occupe du reste,<br />
        avec les meilleurs<br />
        talents
      </StyledTitle>
      <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
    </div>
    <StyledImg src={homePicture} alt="home illustration" />
  </StyledPage>
  )
}

export default Home

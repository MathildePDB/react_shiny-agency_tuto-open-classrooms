import ErrorPicture from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledPage = styled.div`
  background-color: ${colors.backgroundLight};
  margin: 100px;
  height: 824px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`

function Error() {
  return (
    <StyledPage>
      <p>Oups...</p>
      <img src={ErrorPicture} alt="404 error" />
      <p>Il semblerait qu'il y ait un problème</p>
    </StyledPage>
  )
}

export default Error
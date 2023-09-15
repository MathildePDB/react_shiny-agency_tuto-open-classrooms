import Card from '../../components/Card'
import styled from 'styled-components'

const CardsContainer = styled.div`
  margin-top: 50px;
  display: grid;
  gap: 60px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'DevOps',
  },
  {
    name: 'John Doe',
    jobTitle: 'Développeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse fullstack',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse fullstack',
  }
]

function Freelances() {
  return (
    <StyledDiv>
      <h1>Trouvez votre prestataire</h1>
      <p>Chez Shiny nous réussissons les meilleurs profils pour vous.</p>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer> 
    </StyledDiv>
  )
}

export default Freelances
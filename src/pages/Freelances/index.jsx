import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { useFetch, useTheme } from '../../utils/hooks'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
  const { theme } = useTheme()
  const { data, isDataLoading, error } = useFetch(
    `http://localhost:8000/freelances`,
  )

  const freelancersList = data?.freelancersList

  if (error) {
    return <span>Oups... il y a eu un problème</span>
  }

  return (
    <div>
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réussissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList &&
            freelancersList.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                title={profile.name}
                pcture={profile.picture}
              />
            ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances

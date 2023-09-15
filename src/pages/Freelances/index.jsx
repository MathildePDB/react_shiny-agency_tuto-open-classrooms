import Card from '../../components/Card'

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
  }
]

function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          title={profile.name}
        />
      ))}
    </div>
  )
}

export default Freelances
import PersonComponent from '../components/Person'
import { Person } from '../interfaces'

export default function Index() {
    console.log('????')

  return (
    <ul>
      {people.map((p: Person) => (
        <PersonComponent key={p.id} person={p} />
      ))}
    </ul>
  )
}

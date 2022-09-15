import PersonComponent from '../components/Person'
import { Person } from '../interfaces'

export default function Index() {

  return (
    <ul>
      {people.map((p: Person) => (
        <PersonComponent key={p.id} person={p} />
      ))}
    </ul>
  )
}

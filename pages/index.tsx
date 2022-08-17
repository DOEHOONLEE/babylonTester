import PersonComponent from '../components/Person'
import { Person } from '../interfaces'
import { people } from '../data'

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

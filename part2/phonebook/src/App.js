import { useEffect, useState } from 'react'
import axios from 'axios'

const Form = ({ newPerson, handleChange, handleClick }) => {
  return (
    <form>
      <div>
        name: <input value={newPerson.name} name='name' onChange={handleChange} />
      </div>
      <div>
        number: <input value={newPerson.number} name='number' onChange={handleChange} />
      </div>
      <div>
        <button onClick={handleClick} type="submit">add</button>
      </div>
    </form>
  )
}

const Numbers = ({persons}) => {
  return (
    persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)
 )
} 
 
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newPerson, setNewPerson] = useState(
    { name: '', number: '' }
  )

  useEffect(() => {
    const promise = axios.get('http://localhost:3001/persons')
    promise.then(response => {
      console.log(response.data)
      setPersons(response.data)
    })
  }, [])


  const handleClick = (e) => {
    e.preventDefault()
    //setPersons(persons.concat({ key: persons.length+1, name: newName }))
    const personExists = persons.find(person => person.name === newPerson.name)
    personExists
      ? alert(`${newPerson.name} is already added to phonebook`)
      : setPersons([...persons, { name: newPerson.name, number: newPerson.number }])
    
    setNewPerson({
      name: '',
      number: ''
    })
  }

  const handleChange = (e) => {
    setNewPerson({...newPerson, [e.target.name]: e.target.value})
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      <h2>add a new</h2>
      <Form
        newPerson={newPerson}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} />
      <div>debug: {newPerson.name} {newPerson.number}</div>
    </div>
  )
}

export default App

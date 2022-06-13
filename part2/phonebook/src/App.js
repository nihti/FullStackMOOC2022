import { useEffect, useState } from 'react'
import personsRequests from './services/persons'

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

const Numbers = ({persons, handleDelete}) => {
  return (
    persons.map(person => (
      <div key={person.id}>
        {person.name} {person.number}
        <button onClick={handleDelete} value={person.id} name={person.name}>delete</button>
      </div>
    ))
  )
}

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='notification'>
      {message}
    </div>
  )
}
 
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newPerson, setNewPerson] = useState(
    { name: '', number: '' }
  )
  const [message, setMessage] = useState('')

  useEffect(() => {
    personsRequests
      .getAll().then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    const personObject = { name: newPerson.name, number: newPerson.number }
    const personExists = persons.find(person => person.name === personObject.name)
    const message = () => {
      setMessage(`${newPerson.name} is already added to phonebook`)
      setTimeout(() => {
        setMessage('')
      }, 2500)
    }
    const createPerson = () => {
      personsRequests.create(personObject)
        .then(response => {
          setPersons([...persons, response.data])
        })
      setMessage(`${newPerson.name} added to phonebook`)
      setTimeout(() => {
        setMessage('')
      }, 2500)
    }

    personExists ? message() : createPerson()
    
    setNewPerson({
      name: '',
      number: ''
    })
  }

  const handleChange = (e) => {
    setNewPerson({...newPerson, [e.target.name]: e.target.value})
  }

  const handleDelete = (e) => {
    if (window.confirm(`delete ${e.target.name}?`)) {
      personsRequests.remove(e.target.value).then(response => {
        personsRequests.getAll().then(response => {
          setPersons(response.data)
        })
      })
      setMessage(`deleted ${e.target.name} from numbers`)
      setTimeout(() => {
        setMessage('')
      }, 2500)
    }
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      { message && <Notification message={message} />}
      <h2>add a new</h2>
      <Form
        newPerson={newPerson}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} handleDelete={handleDelete}/>
      <div>debug: {newPerson.name} {newPerson.number}</div>
    </div>
  )
}

export default App

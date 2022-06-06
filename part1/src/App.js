
const Hello = (props) => (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )


const App = () => {
  const now = new Date()
  const name = 'Peter'
  const age = 10
  return [
    <Hello name={name} age={age} key='1' />,
    <Hello name="Nimi" age={20+10} key='2' />
  ]
}

export default App

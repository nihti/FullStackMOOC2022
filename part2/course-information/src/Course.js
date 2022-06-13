const Header = ({ name }) => (
  <h2>{ name }</h2>
)

const Part = ({ name, exercises }) => (
  <p>{name} {exercises}</p>
)

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}

const Total = ({ parts }) => (
  <p>
    <b>total of exercises
      { ' ' +
        parts.reduce((sum, part) => {
          return sum + part.exercises
        }, 0)
      }
    </b>
  </p>
)

const Course = ({ course }) => (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
)

export default Course
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'Fundamentals of React',
        exercises: 10
      }
    ]
  }

  return (
    <div>
      <Header text={course.name} />
      <Content text={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)
  const all = good + neutral + bad
  return (
    <div>
      <Header text={'GIVE FEEDBACK'} />
      <Button handleClick={handleGood} text='Good' />
      <Button handleClick={handleNeutral} text='Neutral' />
      <Button handleClick={handleBad} text='Bad' />
      {all !== 0 && <Statistics good={good} neutral={neutral} bad={bad} all={all}></Statistics>}
      {all === 0 && <h2>No button pressed</h2>}
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

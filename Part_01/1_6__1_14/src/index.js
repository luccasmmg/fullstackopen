import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Button from './Button'
import Statistic from './Statistic'

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
      {all !== 0 && (
        <>
          <Statistic text='Good:' value={good} />
          <Statistic text='Neutral:' value={neutral} />
          <Statistic text='Bad:' value={bad} />
          <Statistic text='All:' value={all} />
          <Statistic text='Average:' value={(good - bad) / all} />
          <Statistic text='Positive:' value={(good * 100) / all} />
        </>
      )}
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

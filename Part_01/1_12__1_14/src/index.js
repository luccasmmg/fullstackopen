import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'

const App = props => {
  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)
  const [mostVotes, setMostVotes] = useState(0)
  const handleAnecdote = () => setSelected(getRandom)
  const handleVotes = () => {
    const newPoints = { ...votes }
    newPoints[selected] += 1
    if (votes[selected] >= mostVotes) {
      setMostVotes(selected)
    }
    return setVotes(newPoints)
  }

  const getRandom = () => Math.floor(Math.random() * Math.floor(anecdotes.length))

  return (
    <div>
      {props.anecdotes[selected]}
      <p>Has: {votes[selected]}</p>
      <br></br>
      <Button handleClick={handleAnecdote} text='Next anedocte:' />
      <Button handleClick={handleVotes} text='Vote:' />
      <h3>The adedocte with most votes is:</h3>
      <br></br>
      {props.anecdotes[mostVotes]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))

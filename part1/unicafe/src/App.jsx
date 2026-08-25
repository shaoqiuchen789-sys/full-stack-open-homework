import { useState } from 'react'

const StatisticsLine = (props) => {
  return <tr><td>{props.text}</td><td>{props.value}</td></tr>
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  if (good + neutral + bad > 0) {
    return <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={good + neutral + bad} />
          <StatisticsLine text="average" value={((good - bad) / (good + neutral + bad)).toFixed(2)} />
          <StatisticsLine text="positive" value={((good / (good + neutral + bad)) * 100).toFixed(2) + ' %'} />
        </tbody>
      </table>
    </div>
  }
  else {
    return <div>
      <h2>statistics</h2>
      <p>No feedback given</p>
    </div>
  }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback
      </h2>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
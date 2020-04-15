import React from 'react'
import Statistic from './Statistic'

const Statistics = props => (
  <>
    <Statistic text='Good:' value={props.good} />
    <Statistic text='Neutral:' value={props.neutral} />
    <Statistic text='Bad:' value={props.bad} />
    <Statistic text='All:' value={props.all} />
    <Statistic text='Average:' value={(props.good - props.bad) / props.all} />
    <Statistic text='Positive:' value={(props.good * 100) / props.all} />
  </>
)

export default Statistics

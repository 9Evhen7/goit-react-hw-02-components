import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return <p>total : {total}</p>;
  };

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercent = total ? (good / total) * 100 : 0;
    return <p>positivePercent : {parseInt(positivePercent, 10)}%</p>;
  }

  render() {
    const stateKeys = Object.keys(this.state);
    return (
      <div>
        <h2>Please leave feedback</h2>

        {stateKeys.map(key => {
          return (
            <button
              key={key}
              onClick={e =>
                this.setState(prevState => {
                  return { [key]: prevState[key] + 1 };
                })
              }
            >
              {key}
            </button>
          );
        })}

        <h2>Statistics</h2>
        {stateKeys.map(key => {
          return (
            <p key={`${key}Stat`}>
              {key}:{this.state[key]}
            </p>
          );
        })}
        {this.countTotalFeedback()}
        {this.countPositiveFeedbackPercentage()}
      </div>
    );
  }
}

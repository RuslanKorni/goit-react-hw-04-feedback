import {useState} from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statitics';
import Notification from './Notification/Notification';



 const App = () => {
const [state, setState] = useState({
  good: 0,
  neutral: 0,
  bad: 0,
});

  const onLeaveFeedback = state => {
    setState(prevState => ({...prevState,
      [state]: prevState[state] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    return Math.round((good / countTotalFeedback()) * 100);
  }


    const { good, neutral, bad } = state;
    // робимо змінну бо хуки не приймають функцію так як я передав пропТипи числом
    const totalFeedback = countTotalFeedback()
    const PositiveFeedbackPercentage = countPositiveFeedbackPercentage()
    const options = Object.keys(state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={PositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
    
  
}

export default App;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {
};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const handleIncreaseClick = () => {
    const action = increase(1); // action creator
    dispatch(action);
  }

  const handleDecreaseClick = () => {
    // const action = decrease(); // action creator
    dispatch(decrease(1));
  }

  return (
    <div>
      Counter: {counter}

      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;

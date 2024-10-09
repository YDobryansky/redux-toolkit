import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
  reset
} from '../redux/counter/counterSlice';
import { AppDispatch, RootState } from '../redux/store';

const Counter = () => {
  const count = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="counter">
      <h2 className="counter__value" onClick={() => dispatch(reset())}>
        {count}
      </h2>
      <div className="counter__buttons">
        <button className="counter__btn">
          <span className="counter__text" onClick={() => dispatch(increment())}>
            Increment
          </span>
        </button>
        <button className="counter__btn" onClick={() => dispatch(decrement())}>
          <span className="counter__text">Decrement</span>
        </button>
        <button className="counter__btn" onClick={() => dispatch(incrementAsync(10))}>
          <span className="counter__text">IncrementAcync by 10</span>
        </button>
        <button className="counter__btn" onClick={() => dispatch(decrementAsync(10))}>
          <span className="counter__text">DecrementAsync by 10</span>
        </button>
      </div>
    </div>
  );
};

export default Counter;

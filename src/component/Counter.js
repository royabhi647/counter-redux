import React from "react";
import { increment, decrement } from "../store/counterSlice";
import { useSelector,useDispatch } from "react-redux";

const Counter = () => {
    const count = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {count}</h1>
      <div className="btn">
      <button onClick={()=>dispatch(increment())}>⬆️</button>
      <button className="decrease-btn" onClick={()=>dispatch(decrement())}>⬇️</button>
      </div>
    </div>
  );
};

export default Counter;

import { useDispatch } from "react-redux";
import {increment, decrement, incrementByAmount, multiplication} from '../stores/counter'

function CounterAction() {

    const dispatch = useDispatch()
    return (
      <div>
        <button onClick={()=>dispatch(increment())}>Artır (+)</button>
        <button onClick={()=>dispatch(decrement())}>Azalt (-)</button>
        <button onClick={()=>dispatch(incrementByAmount(1000))}>1000 Artır</button>
        <button onClick={()=>dispatch(multiplication())}>Kendisiyle Çarp</button>
      </div>
    );
  }
  
  export default CounterAction;
  
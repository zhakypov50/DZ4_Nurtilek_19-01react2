import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {buttonPlus, buttonMinus, buttonMultiplication, buttonDivision} from "../../redux/action";
import "./CalculatorPage.css"

export default function CalculatorPage() {

    const dispatch = useDispatch()
    const result = useSelector(state => state.result)

    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')

    const plusButton = () => {
        dispatch(buttonPlus((Number(number1) + Number(number2))))
    }

    const minusButton = () => {
        dispatch(buttonMinus(number1 - number2))
    }

    const multiplyButton = () => {
        dispatch(buttonMultiplication(number1 * number2))
    }

    const divideButton = () => {
        dispatch(buttonDivision(number1 / number2))
    }

    return <>
        <div className="container">
            <h2>CALCULATOR</h2>
            <br/>
                <input type="number" className="inputs" value={number1} onChange={(e) => setNumber1(e.target.value)}/>
                <input type="number" className="inputs" value={number2} onChange={(e) => setNumber2(e.target.value)}/>
            <br/>
            <div>
                <button onClick={plusButton}>+</button>
                <button onClick={minusButton}>-</button>
                <button onClick={multiplyButton}>*</button>
                <button onClick={divideButton}>/</button>
            </div>
            <br/>
            {
                number1 > 0 || number2 > 0
                    ?
                    <>
                        <h2 className="result">{result}</h2>
                    </>
                    :
                    <span>RESULT</span>
            }
        </div>
    </>
}
import React, { Component } from 'react';

export class Math extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstNumber : 8,
            secondNumber : 4,
            result : 0,
            op : '+'
        }
    }
    handleFirstNumber(e){
        this.setState({
            firstNumber : Number(e.target.value)
        });
    }
    handleSecondNumber(e){
        this.setState({
            secondNumber : Number(e.target.value)
        });
    }
    /*performAddition() {
        const {firstNumber,secondNumber} = this.state;
        this.setState({
            result : firstNumber + secondNumber,
            op : "+"
        });
    }
    performSubtraction() {  
        const {firstNumber,secondNumber} = this.state;
        this.setState({
            result : firstNumber - secondNumber,
            op : "-"

        });
    }
    performMultiplication() {
        const {firstNumber,secondNumber} = this.state;
        this.setState({
            result : firstNumber * secondNumber,
            op : "x" 
        });
    }
    performDivision() {
        const {firstNumber,secondNumber} = this.state;
        this.setState({
            result : firstNumber / secondNumber,
            op : "/"
        });
    }*/
    performMath(op) {
        const {firstNumber,secondNumber} = this.state;
        let result = 0;
        if(op === '+'){
            result = firstNumber + secondNumber;
        } else if(op === '-'){
            result = firstNumber - secondNumber;
        } else if(op === 'x'){
            result = firstNumber * secondNumber;
        } else if(op === '/'){
            result = firstNumber / secondNumber;
        }
        this.setState({
            result : result,
            op : op,
        });
    }
    render(){
        const {firstNumber,secondNumber,result,op} = this.state;
        return(
            <div>
                <input type="text" value={firstNumber} onChange={(e) => this.handleFirstNumber(e)} />
                <input type="text" value={secondNumber} onChange={(e) => this.handleSecondNumber(e)}/>
                <button onClick={() => this.performMath('+')}>+</button>
                <button onClick={() => this.performMath('-')}>-</button>
                <button onClick={() => this.performMath('x')}>*</button>
                <button onClick={() => this.performMath('/')}>/</button>
                <p>{firstNumber}   {op}  {secondNumber}   =  {result}</p>
            </div>
        );
    }
}
export default Math;
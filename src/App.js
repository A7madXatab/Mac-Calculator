//eslint-disable-next-line
import React, { Component } from 'react';
//eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
let buttonLables = ["AC","+/-","%","/","7","8","9","*","4","5","6","-",
 "1","2","3","+","0"," ",".","="]
 class App extends Component {
     constructor(props)
     {
         super(props);
         this.state = {
             totallAmount:0,
             currentValue:"0",
             operation:"",
             showResult:false
         }
     }
     addValue(val){
                this.setState({
                    currentValue:this.state.currentValue==="0"
                    ?val
                    :this.state.currentValue+val
                })
     }
     maplabelTOButton(label)
     {
         switch(label)
         {
             case "+":
              return <button className="ops" onClick={() => this.setOperation(label)}>+</button>;
             case "-":
              return <button className="ops" onClick={() => this.setOperation(label)}>-</button>
             case "*":
             return <button className="ops" onClick={() => this.setOperation(label)}>x</button>
             case "AC": 
              return <button onClick={() => this.clear()}>AC</button>
             case "/":
             return <button className="ops" onClick={() => this.setOperation(label)}>/</button>
             case "+/-":
             return <button onClick={() => this.negate()}>+/-</button>;
             case "%":
             return <button onClick={() => this.mod()}>%</button>
             case "=":
              return <button className="ops" onClick={() => this.doOperation()}>=</button>
              case "0":
              return <button className={`col`} onClick={() => this.addValue(label)}>{label}</button>
             default :
              return <button className={`${label}`} onClick={() => this.addValue(label)}>{label}</button>
         }
     }
     mod = () => {
         this.setState({
             currentValue:Number(this.state.currentValue)/100
         })
     }
     clear = () =>{
         this.setState({
            currentValue:"0",
             totallAmount:"",
         })
     }
     setOperation = (op) => {
            this.setState({
                operation:op,
                totallAmount:this.state.currentValue,
                currentValue:"0",
             })
     }
     doOperation = () => {
      let totallAmount = Number(this.state.totallAmount)
      let curerntValue= Number(this.state.currentValue);
      console.log(totallAmount);
      console.log(curerntValue);
       switch(this.state.operation)
        {
            case "+":
            {
             totallAmount= totallAmount+curerntValue;
             this.setState({
                 currentValue:totallAmount
             })
            }
            break;
             case "/":
              totallAmount/=curerntValue;
              this.setState({
                currentValue:totallAmount
             })
             break
              case "*":
               totallAmount*=curerntValue;
               this.setState({
                currentValue:totallAmount
             })
             break;
               case "-":
                totallAmount-=curerntValue
                this.setState({
                    currentValue:totallAmount
                 })
                 break;
        }
     }
     render()
     {
         return (<div className="calc">
            <div className="input">
             <h1>{this.state.currentValue}</h1>
            </div>
            <div className="buttonsDiv grid">
              {buttonLables.map(label => (
                   this.maplabelTOButton(label)
              ))}
            </div>
         </div>)
     }
 }
 export default App;
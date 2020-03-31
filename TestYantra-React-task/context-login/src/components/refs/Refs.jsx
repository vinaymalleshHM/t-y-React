import React, { Component } from 'react'

export default class Refs extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.inputRef = React.createRef();
        this.inputRefresh = React.createRef();

    }

    printRef = () => {
        console.log("Div element ", this.myRef.current.textContent)
    }
    
    
    focusInputElement = ()=>{
        console.log("Input Ref ",this.inputRef)
        this.inputRef.current.focus()
    }


    componentDidMount (){
        this.focusInputElement()
    }

    render() {
        //console.log("Ref Object ",this.myRef)
        // console.log("Ref Object ",this.myRef.current.textContent) //error
        return (
            <>
                <div ref={this.myRef}>
                    this is Ref Component
                </div>
                <button onClick={this.printRef}>print the Ref</button>
                <input ref={this.inputRef}  type="text" name="" placeholder="Enter something!!!"/>
                <button onClick={this.focusInputElement}>Focus the Input Element</button>
                {/* <input type="text" ref={this.componentDidMount}/> */}
            </>)
    }
}


class Welcome extends React.Component {
    constructor(props) {
        super(props)
        console.log(this);

        this.showMeassage = this.showMeassage.bind(this)//we are binding in costructor otherwise it get executes every time by clicking
    }
    state = {
        name: 'nidhin'
    }
    greet() {
        console.log('Hello ', this.state.name)
    }

    showMeassage() {
        console.log('Binding in Constructor')
    }
    //Best Way of writing method
    handleClick = ()=>{
        console.log('Inside arrow Fuction ',this.state.name)
    }

    render() {
        return (<div>
            <h1>Hello, {this.state.name}</h1>
            {/* <button value='click' onClick={alert('Hellow')}/>  /to over come this we use 1.Arroe Func  2.bind */}
           
           {/* <button onClick={() => alert('Hello')}> click</button> */}

            {/* <button onClick={this.greet.bind(this)}>Bind</button> */}
            {/* if we use while clicking it consumes memory */}
            {/* if we  call using () to a func it will get executed */}
            {/* <button onClick={this.showMeassage}>Binding in Constructor</button>
            <button onClick={this.handleClick}>using arrow Function</button> */}

        </div>
        )
    }
}
ReactDOM.render(<Welcome />, document.getElementById('react-container'))
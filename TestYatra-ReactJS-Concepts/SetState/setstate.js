class Welcome extends React.Component {
    constructor(props) {
        super(props)//we cant chage props data
        console.log(this);
    }

    state = {
       // name: 'nidhin'
        name: 'nidhin',
        show : false

    }
    
    //Best Way of writing method
    handleClick = () => {
        console.log('Inside Handle Click ',this)
        console.log('Inside arrow Fuction ',this.state.name)
        //nenevr evere mutate state directly
        //this.state.name = 'Shibhu'
        this.setState({     //seState is method which is used to set data of Sate
            name : 'Shibu'
        })

    }

    render() {
        console.log('Inside render ',this)

        return (<div>
            <h1>Hello, {this.state.name}</h1>
            <button onClick={this.handleClick}>Click here to Change Name</button>

        </div>
        )
    }
}
ReactDOM.render(<Welcome />, document.getElementById('react-container'))
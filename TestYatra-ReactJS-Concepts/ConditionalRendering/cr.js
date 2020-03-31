class ConditionalRendering extends React.Component {
    constructor(prop) {
        super(prop)
        /* state = {
            adminName: 'Vinay',
            userName: 'Giri',
            isAdmin: false
        } */
        this.state = {  //use this keyword r keep outside costructor 
            adminName: 'Vinay',
            userName: 'Giri',
            isAdmin: true,
            adminId: 100,
            userID: 200
        }
    }

    changeUserAdmin = () => {
        this.setState({
            isAdmin: !this.state.isAdmin
        })
    }

    navigateToGoogle = (event) => {
        console.log('Event ', event);
        event.preventDefault();
    }

    render() {
        // if (this.state.isAdmin) {
        //     return <h1>{this.state.adminName}</h1>
        // }
        // else {
        //     return <h1>{this.state.userName}</h1>

        // }

        // return this.state.isAdmin? <h1>{this.state.adminName}</h1>:<h1>{this.state.userName}</h1>

        // return (<div>
        //     <h1>{this.state.isAdmin ? this.state.adminName : this.state.userName}</h1>
        //     <h4>{this.state.isAdmin ? this.state.adminId : this.state.userID}</h4>
        //     <p>Home</p>
        //     <p>Login</p>
        // </div>)

        const admin = <div>
            <h1>{this.state.adminName}</h1>
            <h1>{this.state.adminId}</h1>
        </div>
        const user = <div>
            <h1>{this.state.userName}</h1>
            <h1>{this.state.userID}</h1>
        </div>


        return (<div>{this.state.isAdmin ? admin : user}
            <p>Home</p>
            <p>Login</p>
            <button onClick={this.changeUserAdmin}>Click</button>
            <a href="http://www.google.com" onClick={this.navigateToGoogle}>Navigate to google</a>
        </div>)

    }
}
ReactDOM.render(<ConditionalRendering />, document.getElementById('react-container'))

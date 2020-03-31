class Header extends React.Component{
    constructor (props){
        super(props)
        console.log('props ',props)
    }
    render(){
        
    return <h1>This is Header</h1>
    }
}

class Content extends React.Component{
    constructor (props){
        super(props)
        console.log('props ',props)
    }
    render(){
        
    return <p>Welcome,{this.props.userName}</p>
    }
}
class Footer extends React.Component{
    constructor (props){
        super(props)
        console.log('props ',props)
    }
    render(){
        
    return <h1>This is Footer</h1>
    }
}
ReactDOM.render(<div><Header/><Content userName='Vishnu'/><Footer/>
    </div>,document.getElementById('react-container'))



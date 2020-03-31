function Header (){
    return <h1>This is Header {
        
    }</h1>
}
//ReactDOM.render(<Header/>,document.getElementById('react-container'))

function Content(props){
return <p>Welcome, {props.userName}</p>
}
function Footer(props){
    return <p>This is Footer</p>
    }

ReactDOM.render(<div><Header/><Content userName='Vishnu'/><Footer/>
    </div>,document.getElementById('react-container'))
class Header extends React.Component{
    constructor (props){
        super(props)
        console.log('props ',props)
    }
    render(){
        // return React.createElement('h1',null,'This is Header')
        return React.createElement('h1',null,this.props.headerValue)
    }
}
// const header = React.createElement(Header)
const header = React.createElement(Header,{
    headerValue: 'hello'
})
// ReactDOM.render(header,document.getElementById('react-container'))


class Footer extends React.Component{
    constructor (props){
        super(props)
        console.log('props ',props)
    }
    render(){
        //return React.createElement('h1',null,'This is Footer')
        return React.createElement('h1',null,this.props.footerValue)
    }
}

class Content extends React.Component{
    constructor (props){
        super(props)
        console.log('props ',props)
    }
    render(){
        //return React.createElement('h1',null,'This is Content')
        return React.createElement('h1',null,this.props.contentValue)
    }
}

const footer = React.createElement(Footer,{
    footerValue: 'This is Footer'
})
const content = React.createElement(Content,{
    contentValue: 'This is Content'
})

const mul = React.createElement('div',null,header,footer,content)
ReactDOM.render(mul,document.getElementById('react-container'))


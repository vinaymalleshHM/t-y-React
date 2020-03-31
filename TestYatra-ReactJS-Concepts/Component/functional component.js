function Header(prop){
//function Header({headerName}){
    console.log('Props ',prop)
//    return React.createElement('h1',null,'Header')
   prop.headerName ='Hello World' // it wont 
    return React.createElement('h1',null,prop.headerName)
   // return React.createElement('h1',null,headerName)
}

// const header = React.createElement(Header,null)
const header = React.createElement(Header,{
    headerName : 'This is Header',
    id : 'header',
    show : true
},'Header Component')

// const multipleHeaders = React.createElement('div',null,header,header,header)
// ReactDOM.render(multipleHeaders,document.getElementById('react-container'))
//ReactDOM.render(header,document.getElementById('react-container'))


function Footer(prop){
    return React.createElement('h1',null,'This is Footer')

}

function Content(prop){
    return React.createElement('p',null,'This is Content')

}

const content = React.createElement(Content)
const footer = React.createElement(Footer)

const homePage = React.createElement('div',null,header,content,content,footer)

ReactDOM.render(homePage,document.getElementById('react-container'))
//JSX Syntax
// const element = <h1>Hello World</h1>

//ReactDOM.render(element,document.getElementById('react-container'))

// const userName = 'Dulquer'
// const greet = <h1>Hello, { userName }</h1>

// //ReactDOM.render(greet,document.getElementById('react-container'))

/* const list = <ul>
    <li>Deodrant</li>
    <li>Saree</li>
    <li>Shoe</li>
</ul>
ReactDOM.render(list,document.getElementById('react-container')) */

const items = ['Deodrant','Saree','Shoe']
const list = <ul>

    {
        items.map((item,index)=>{
            return <li key={item+index}>
                {item}
            </li>
        })
    }
</ul>

ReactDOM.render(list,document.getElementById('react-container')) 



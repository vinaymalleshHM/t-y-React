function App(props){
    return(
        <div>
            <Home homeName='oila' />
            <List list={['Bags','Book','Pen']}/>
        </div>
    )
}

function List(props){
    return(
        <ul>
            { props.list.map((val,index)=>{
            return <li key={val+index}>{val}</li>
                })
            }
        </ul>
    )
}

function Home(props){
    return(
        <div>
            {props.homeName}
        </div>
    )
}
ReactDOM.render(<div><App/></div>,document.getElementById('react-container'))
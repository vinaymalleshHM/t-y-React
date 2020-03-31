class Parent extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent Constuctor");
        this.state={
            name:'Mounting phase',
            show: true
        }
    }

    
    static getDerivedStateFromProps(props,state){
        console.log('Parent getDirevedStateFromProps');
        return null;
    }
    
    changeName = () => {
        this.setState({
            name : 'updating phase'
        })
    }

    removeChild = () => {
        this.setState({
            show : false
        })
    }

    render(){
        console.log('Parent Render');
        
        return (<div>
            <h1>Parent Component</h1>
            {this.state.show? <Child/>:<h1>Child Component Un mounted</h1>}
            <Child />
            <button onClick={this.changeName}>Change the Name</button>
            <button onClick={this.removeChild}>Remove Child</button>
            </div>
        )
    }
    componentDidMount(){
        console.log('Parent componentDidMount');
        
    }
    shouldComponentUpdate(){
        console.log("------------------------Parent shouldComponentUpdate-------------------");
        return true;
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('-----------------------Parent getSnapshotBeforeUpdate---------------------');

        console.log('Previos props ',prevProps);
        console.log('Previos state ',prevState);
        console.log('Current State ', this.state);
        
        return "scrolling position"
        
    }
    componentDidUpdete(prevProps,prevState,snapshot){
        console.log('-----------------Parent componentDidUpdete---------------');
        console.log('Previos state ',prevState);
        console.log('Previos props ',prevProps);
        console.log('Snapshot ',snapshot);
        
    }
    componentWillUnmount(){
        console.log('Parent UnMount');
        
    }
}


// class Child extends React.Component{
//     constructor(props){
//         super(props)
//         console.log('Child Constructor');
        
        
//     }

//     static getDerivedStateFromProps(){
//         console.log('Child getDirevedStateFromProps');
//         return null;
//     }

//     render(){
//         return(<div>
//             <h1>Child Component</h1>
//         </div>)
//     }
    
//     componentDidMount(){
//         console.log('Child componentDidMount');
        
//     }
//     shouldComponentUpdate(){
//         console.log("child shouldComponentUpdate");
//        return true
        
//     }

//     getSnapshotBeforeUpdate(){
//         console.log('Child getSnapshotBeforeUpdate');
        
//     }
//     componentDidUpdete(){
//         console.log('Child ComponentDidUpdete');
     
//     }
//     componentWillUnmount(){
//         console.log('Child UnMount');
        
//     }


//     }

ReactDOM.render(<div>
<Parent/>
</div>,document.getElementById('react-container'))
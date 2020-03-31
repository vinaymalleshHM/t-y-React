import React from 'react';

function RecipeList(props){
    //const {id,name,img,ingridiants} = prop
    console.log(props);
    
    return (<div>{
        props.list.map((val,index)=>{
            //console.log(val);
            const {id,name,img,ingridiants} =val
            return(
       
                <div className='card'>
                    <div className="card-body">
                        <img src={img} className="card-img-top"></img>
                        <h4>{id}</h4>
                        <h4>{name}</h4>
                        {/* <h4>{ingridiants}</h4> */}
                        <button onClick={() => props.action(val)}>Details</button>
                        
                         </div>
                </div>
            )
            
            
            
        })
        
}</div>)


}

export default RecipeList;

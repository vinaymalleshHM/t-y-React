import React from 'react';
function RecipeDetails(props){
    console.log(props);
    console.log(props.data.id);
    
    // const {data} =props
    // console.log(data);
    // const {id,name,img,ingridiants} 

    // return ( 
    //     <div className="card">
    //         <div className="card-body">
    //             {/* <img src={img} className="card-img-top"></img>
    //           <h4>{id}</h4>
    //           <h4>{name}</h4>
    //          <p>ingridiants</p> */}

              
    //         </div>

    //     </div>
    // )
    return (<div>             
                <div className='card'>
                    <div className="card-body">
                        <img src={props.data.img} className="card-img-top"></img>
                        <h4>{props.data.id}</h4>
                        <h4>{props.data.name}</h4>
                         <h4>{props.data.ingridiants}</h4>
                    </div>
                </div> 
            </div>
            )

}
export default RecipeDetails;

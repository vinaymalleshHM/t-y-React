import React from 'react';
function RecipeDetails(props) {
    console.log(props);
    console.log(props.data.id);

    return (<div>
        <div className='card'>
            <div className="card-body">
                <img src={props.data.recipeImg} className="card-img-top"></img>
                <h4><b>Recipe ID : </b>{props.data.id}</h4>
                <h4><b>Recipe Name : </b>{props.data.recipeName}</h4>
                <h4><b>Recipe Ingradeints : </b>{props.data.recipeIng}</h4>
            </div>
        </div>
    </div>
    )

}
export default RecipeDetails;

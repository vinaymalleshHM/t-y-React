
function valid() 
{

    let iEle = document.getElementById('dinga').value
    let url1 = `http://www.omdbapi.com/?s=${iEle}&apikey=d2d0a0ca`

    fetch(url1)
        .then(response => response.json())
        .then(json => 
            {
                console.log(json)
                const { Title, Year, imdbID, Type, Poster } = json
                document.getElementById('test').innerHTML = "";
                for (let i = 0; i < json.Search.length; i++) {
                    console.log(json.Search[i])
                    
                    let div1 = document.createElement('div')
                    let div2 = document.createElement('div')
                    let div3 = document.createElement('div')
                    let img = document.createElement('img')
                    let h5 = document.createElement('h5')
                    let p1 = document.createElement('p')
                    let p2 = document.createElement('p')
                    let p3 = document.createElement('p')
                let button = document.createElement('button')
                
                img.src = json.Search[i].Poster
                h5.textContent = 'Title : ' + json.Search[i].Title
                p1.textContent = "Year : " + json.Search[i].Year
                p2.textContent = 'IMDB ID : ' + json.Search[i].imdbID
                p3.textContent = 'Type: ' + json.Search[i].Type
                button.textContent = 'Watch'
                
                div1.classList = 'col-md-3 float-right'
                div2.classList = 'card'
                div3.classList = 'card-body'
                h5.classList = 'card-title'
                p1.classList = 'card-text'
                p2.classList = 'card-text'
                p3.classList = 'card-text'
                button.classList = 'btn btn-primary offset-3'
                
                div1.appendChild(div2)
                div2.appendChild(div3)
                div3.appendChild(img)
                div3.appendChild(h5)
                div3.appendChild(p1)
                div3.appendChild(p2)
                div3.appendChild(p3) 
                div3.appendChild(button) 
                
                document.getElementById('test').appendChild(div1)
                //document.body.appendChild(div1)
                
                
            }
            //let div = document.getElementById('vin')
            //div.appendChild(div1);
            //div.innerHTML = `<div>${json.Search}<div>`;
        })

    .catch(reject => console.log("can't Search movie"))
}
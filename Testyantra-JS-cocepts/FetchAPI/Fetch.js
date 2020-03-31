/* fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))


 */
function valid() {
  let url = 'https://jsonplaceholder.typicode.com/todos/'
  let iEle = document.getElementById('dinga').value
  let original = url.concat(iEle)
  console.log(original)
  fetch(original)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      for (let i = 0; i < json.length; i++) {
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        let div3 = document.createElement('div')
        let h5 = document.createElement('h5')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        document.body.appendChild(div1)
        
        h5.textContent = json[i].userId
        p1.textContent = json[i].id
        p2.textContent = json[i].title
        p3.textContent = json[i].completed

        div2.classList = 'card w-50'
        div3.classList = 'card-body'
        h5.classList = 'card-title'
        p1.classList = 'card-text"'
        p2.classList = 'card-text'
        p3.classList = 'card-text'

        div1.appendChild(div2)
        div2.appendChild(div3)
        div3.appendChild(h5)
        div3.appendChild(p1)
        div3.appendChild(p1)
        div3.appendChild(p1)

      }
    })


}



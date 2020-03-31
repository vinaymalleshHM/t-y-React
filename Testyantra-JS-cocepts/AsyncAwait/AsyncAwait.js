async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    console.log('Data ', data)
}
getData();

//await keyword only use in asnc func

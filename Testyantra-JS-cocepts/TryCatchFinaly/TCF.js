async function getData() {
    console.log("getData() frunction is Started")
    try {
        const response = await fetch('https://jsonaceholder.typicode.com/todos')
        const data = await response.json()
        console.log('Data ', data)
    } catch (error) {
        console.log("Error ",error)
    }
    console.log("getData() frunction is ended")

}
getData();
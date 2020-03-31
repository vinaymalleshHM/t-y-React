console.log('JS started')

const myPromise = new Promise(function (resolve, reject) {
    if (20 > 10) {
        const data = [100, 200, 300, 400];
        resolve(data)
        //  resolve([100,200,300,400]) both same

    } else {
        reject('Failed to Fetch The Data')
    }
})

myPromise.then(function (data) {
    console.log('Data is ', data)
    const filteredData = data.filter(val => val > 200)
    //console.log('FilterdData is ',filteredData)
    return filteredData
}).then(function (filterData) {
    console.log('FilteredData is ', filterData)
})
    .catch(function (error) {
        console.log('Error is ', error)
    })

console.log('JS Ended')



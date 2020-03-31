const myPromise = new Promise((resolve, reject) => {
    if (20 > 10) {
        const data = [100, 200, 300, 400];
        resolve(data)
        //  resolve([100,200,300,400]) both same

    } else {
        reject('Failed to Fetch The Data')
    }
}).then(data => {
    console.log(data)
    const filteredData = data.filter(val => val > 200)
    return filteredData

}).then(filData => console.log(filData)).catch(error => console.log(error))
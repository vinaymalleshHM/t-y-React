// const table = React.createElement('table',null,
// React.createElement('tr',null,
// React.createElement('th',null,'Name'),
// React.createElement('th',null,'Phone No')),
// React.createElement('tr',null,
// React.createElement('td',null,'Dimple'),
// React.createElement('td',null,'1234')),
// React.createElement('tr',null,
// React.createElement('td',null,'Dinga'),
// React.createElement('td',null,'5678')))

// const Items = React.createElement('ul',null,
// React.createElement('li',{id:'cofee'},'Coffee'),
// React.createElement('li',{id:'tea'},'Tea')) 

// const reactEle = React.createElement('div',null,Items,table)

// ReactDOM.render(reactEle, document.getElementById('react-container'))



const tableData = [{
    name: 'vinay',
    phoneno: 1233
},
{
    name: 'jhon',
    phoneno: 8731

}];



//const data = React.createElement('table', null, React.createElement('thead', null,
const data = React.createElement('table', {
    className : 'tabelBorder',
}, 
//React.createElement('thead', null,
React.createElement('thead', {
    className : 'header'
},
    React.createElement('th', null, 'Name'),
    React.createElement('th', null, 'Phone No')),
    tableData.map((val, index) => {
        return React.createElement('tbody', {
            key: `${val} ${index}`
            //className : 'tbody'
        }, React.createElement('td', null, tableData[index].name), 
        React.createElement('td', null, tableData[index].phoneno))
    }))

const mobiles = ['Honor', 'Oppo']

const mobileList = React.createElement('ul',null,mobiles.map((mobile,index) => {
    return React.createElement('li',{
        key : `${mobile} ${index}`
    },mobile)
}))
console.log('Mobile list',mobileList)
        const allItems = React.createElement('div', null, data, mobileList);

        ReactDOM.render(allItems, document.getElementById('react-container'))
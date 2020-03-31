
const Items = React.createElement('ul',null,
React.createElement('li',{id:'cofee'},'Coffee'),
React.createElement('li',{id:'tea'},'Tea'))

//console.log('Items ',Items);
//ReactDOM.render(Items,document.getElementById('react-container'))

const mobiles = ['Honor','Oppo','Samsung','Nokie','Redmi','Lonovo','Oppo']

const mobileList = React.createElement('ul',null,mobiles.map((mobile,index) => {
    return React.createElement('li',{
        key : `${mobile} ${index}`
    },mobile)
}))
 //ReactDOM.render(mobileList,document.getElementById('react-container'))

console.log('MobileList ',mobileList)
console.log('Item ',Items) 

const allItems  = React.createElement('div',null,Items,mobileList)

ReactDOM.render(allItems,document.getElementById('react-container'))
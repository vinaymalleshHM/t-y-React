import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';

export default function ProductTable() {
   const val= {
        accounts: [],
        pName: '',
        company: '',
        price: '',
        qty: '',
        proImg: '',
        description: '',
        medicineType: '',
            }
    const [pro, setPro]=useState({allD:[]})

 useEffect(() => {
    getAllAccounts();
 }, [])
  const getAllAccounts = () => {
    const url = 'https://react-medi.firebaseio.com/addproducts.json'
    Axios.get(url).then((response => {
        const fetchedAccount = []
        for (const key in response.data) {
            let account = response.data[key]
            fetchedAccount.push({
                ...account,
                id: key,
            })
            setPro({allD:fetchedAccount})
        }
        
      })).catch((err) => {
        console.log('Error ', err)
      })
    }
  const [state, setState] = React.useState({
    columns: [
      { title: 'Product Name', field: 'pName' },
      { title: 'company', field: 'company' },
      {title: 'price',field: 'price'},
      { title: 'qty', field: 'qty' },
      { title: 'Image', field: 'proImg' },
      { title: 'Description', field: 'description' },
      { title: 'Medicine Type', field: 'medicineType'},
    ],
    data: [],
  });

  return (
      <>
     
       <MaterialTable
       options={{headerStyle:{backgroundColor:'black',color:'white'}}}
          title="Product Details"
          columns={state.columns}
          data={pro.allD.map(val=>{
            return val
          })}
          editable={{
            onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setPro(prevState => {
                const data = [...pro.allD];
                data.push(newData);
                setPro({allD:data})
                return { ...pro, data };
              });
            }, 600);
          }),
            onRowUpdate: (newData, oldData) =>

              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    console.log('old data',oldData)
                    console.log('new data',newData)
                    setPro(prevState => {
                      const data = [...pro.allD];
                      data[data.indexOf(oldData)] = newData;
                      setPro({allD:data})
                      return { ...pro, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setPro(prevState => {
                    const data = [...pro.allD];
                    data.splice(data.indexOf(oldData), 1);
                    setPro({allD:data})
                    return { ...pro, data };
                  });
                }, 600);
              }),
          }}
        />
</>
  );
}
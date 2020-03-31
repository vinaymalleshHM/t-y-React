import React, { Component } from 'react'
import ServiceTable,{deleteIconrow,editIcon,okBtn,cancelBtn,addbtn} from './ServiceTable';
import moment from 'moment';
export default class ServiceTableValidation extends Component {
    

  state = {
        empdetails: [
          {
            name: "navas",
            age: "22",
            technology: "react.js",
            organisation: "cognizant technoloy solutions",
            date:"10-12-1998"
          },
          {
            name: "soundharya",
            age: 22,
            technology: "node.js",
            organisation: "samsung",
            date:"10-12-1998"
          },
          {
            name: "yacub",
            age: 22,
            technology: "angular",
            organisation: "boeing",
            date:"10-12-1998"
          },
          {
            name: "rayan",
            age: 22,
            technology: "javascript",
            organisation: "paypal",
            date:"10-12-1998"
          }
        ],
        editedIndex: -1,
        editedName: "",
        editedAge: "",
        editedTechnology: "",
        editedOrganisation: "",
        editedDate:"",

        //error variables
        editedNameErr: false,
        editedAgeErr: false,
        editedTechnologyErr: false,
        editedOrganisationErr: false,

        //error msg variables
        editedNameMsg: "",
        editedAgeMsg: "",
        editedTechnologyMsg: "",
        editedOrganisationMsg: "",

      };
    




      
      deleteComponentbyrow =(index) =>{
        const empdetails = this.state.empdetails.slice();
        empdetails.splice(index, 1);
        this.setState({ empdetails });
      }
      editComponent=(index)=> {
        const selected = this.state.empdetails[index];

            this.setState({
              editedIndex: index,
              editedName: selected.name,
              editedAge: selected.age,
              editedTechnology: selected.technology,
              editedOrganisation: selected.organisation,
              editedDate:selected.date
            });
      }
      cancelEdit = () => {
        this.setState({ editedIndex: -1 });
      };
      addcomponent = index => {
        this.state.empdetails.push({
          name: "",
          age: "",
          technology: "",
          organisation: "",
          date:""
        });
        this.setState(
          prevState => {
            return { empdetails: prevState.empdetails };
          },
          () => {
            let index = this.state.empdetails.length - 1;
            this.editComponent(index);
          }
        );
      };
    
      updateComponent=(index)=> {
       
        console.log("validation ",this.validation())
        const promise = this.validation()
        console.log("promise ",promise)
        console.log("index ",this.state.editedIndex)
        console.log("name ",this.state.editedName)
        console.log("age ",this.state.editedAge)
        console.log("tech ",this.state.editedTechnology)
        console.log("Organisation ",this.state.editedOrganisation)
        console.log("date ",this.state.editedDate)
        promise.then((value)=>{

            if (value) {
                const empdetails = this.state.empdetails.slice();
                empdetails[index].name = this.state.editedName;
                empdetails[index].age = this.state.editedAge;
                empdetails[index].technology = this.state.editedTechnology;
                empdetails[index].organisation = this.state.editedOrganisation;
                empdetails[index].date = moment(this.state.editedDate).format("DD-MM-YYYY");
              
                console.log("value ",value)
              this.setState({
                empdetails,
                editedName: "",
                editedAge: "",
                editedTechnology: "",
                editedOrganisation: "",
                editedDate:"",
                editedIndex: -1
              });
          }

        }).catch(()=>{
            console.log("problem")
        })
      }
      onchangehandler = name => event => {
        this.setState({
          [name]: event.target.value
        });
    };
    validation =async ()=>{

            const {editedName,editedAge ,editedTechnology,editedOrganisation} = this.state


            if (this.state.editedName !== '') {
                await this.setState({
                    ...this.state,
                    editedNameErr: false,
                })
                if (editedName.trim().match(/^[a-zA-Z ]*$/) && editedName !== '') {
                    await    this.setState({
                        ...this.state,
                        editedNameErr: false,
                         editedNameMsg: ''
                     })
                 }
                 else {
                    await this.setState({
                         ...this.state,
                         editedNameErr: true,
                         editedNameMsg: 'Name should be Character'
                     })
     
                 }
            }else{
                await   this.setState({
                    ...this.state,
                    editedNameErr: true,
                    editedNameMsg: "Name Can't blank"
                })
            }

           
            if (editedAge !== '') {
                await this.setState({
                    ...this.state,
                    editedAgeErr: false,
                })
                if (String(editedAge).trim().match(/^0*([0-9]|[1-8][0-9]|9[0-9]|1[0-4][0-9]|150)$/) && editedAge !== '') {
                    await    this.setState({
                        ...this.state,
                        editedAgeErr: false,
                        editedAgeMsg: ''
                     })
                 }
                 else {
                    await this.setState({
                         ...this.state,
                         editedAgeErr: true,
                         editedAgeMsg: 'age should be in 0 to 150'
                     })
     
                 }
            }else{
                await   this.setState({
                    ...this.state,
                    editedAgeErr: true,
                    editedAgeMsg: "Age Can't blank"
                })
            }




        if (this.state.editedNameErr === false  && this.state.editedAgeErr ===false) {
            return true
            
        } else {
         
           return false

        }

      }

    
    render() {

       
        
        return (
            <>
              
               <ServiceTable data ={this.state} method={this.onchangehandler} method1={this.addcomponent} 
               method2 ={this.updateComponent} method4={this.cancelEdit} method5 ={this.editComponent} method6={this.deleteComponentbyrow}
               method7={this.validation}
               />
              
            </>
        )
    }
}

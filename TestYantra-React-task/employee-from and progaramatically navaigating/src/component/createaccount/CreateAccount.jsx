import React from 'react'
import Axios from 'axios';

class CreateAccount extends React.Component {
  
  state = {
    username: '',
    emailid: '',
    mobileno: '',
    password: '',
    showErrName:false,
    showErrEmail:false,
    showErrMobile:false,
    showErrPass:false
  };

  handleChange=(e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validForm= async (event)=>{
    event.preventDefault()

    const { username,emailid,mobileno,password} = this.state
    if(username.trim().match(/^[a-zA-Z ]*$/)  && username !==''){
     await this.setState({
        showErrName :false
        
      })
       console.log(this.state.showErrName)
    }
    else{
      
      await this.setState({
        showErrName :true
        
      })
       console.log(this.state.showErrName)
   
    }
    if(emailid.trim().match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)){
      await this.setState({
        showErrEmail :false
        
      })   
       console.log(this.state.showErrEmail)
  
    }
    else{
      
      await this.setState({
        showErrEmail :true
        
      })   
       console.log(this.state.showErrEmail)
    }
    if(mobileno.trim().match(/^[0-9]{10}$/)){
      await this.setState({
        showErrMobile :false
        
      }) 
       console.log(this.state.showErrMobile)
    }
    else{
      
      await this.setState({
        showErrMobile :true
        
      })
     
       console.log(this.state.showErrMobile)

    }
    if(password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/) &&  password !==""){
      await this.setState({
        showErrPass :false
        
      })
     
       console.log(this.state.showErrPass)
    
    }
    else{
      
      await this.setState({
        showErrPass :true
        
      })
      
       console.log(this.state.showErrPass)
   
    }
    this.sendCorrect()
  }
  
  sendCorrect = ()=>{
     if(this.state.showErrName !==true && this.state.showErrEmail !==true && this.state.showErrPass!==true && this.state.showErrMobile!==true  ){
       this.saveData()
       console.log('hj',this.state.showErrName)
       console.log('hj',this.state.showErrEmail)
       console.log('hj',this.state.showErrPass)
       console.log('hj',this.state.mobileno)
      }
        }
  
  
  saveData = () => {
    // event.preventDefault()
    console.log("Form Data ", this.state)
    // const formData = this.state;
     const formData = this.state;
    
    const { username,emailid,mobileno,password} = formData

    const url = 'https://react-employee-project.firebaseio.com/employeeaccounts.json'
    Axios.post(url, formData).then((response) => {
      console.log("Success ", response)
      if (response.status === 200) {
        // this.setState({
        //   username:'',
        //   emailid:'',
        //   mobileno:'',
        //   password:''
        // })
        this.props.history.push('/login')
      }
    }).catch((err) => {
      console.log("Error ", err)

    })

  }


  render() {
   
    return (<>
      <div className="card col-md-4 offset-4 mt-5">
        <div className="card-body">
          <h3 className="card-title">Registration page</h3>
          <form name="userRegistrationForm" onSubmit={this.validForm} className="form-group">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="username" className="form-control" 
              value={this.state.username} onChange={this.handleChange} />
              {this.state.showErrName?<p style={{color:'red',fontSize:'15px'}}>User Name should be characters only</p>:null}
             
            </div>
            <div className="form-group">
              <label>Email ID:</label>
              <input type="text" className="form-control" name="emailid" 
              value={this.state.emailid} onChange={this.handleChange} />
              {this.state.showErrEmail?<p style={{color:'red',fontSize:'15px'}}>Enter valid Email</p>:null}

             
            </div>
            <div className="form-group">
              <label>Mobile No:</label>
              <input type="text" name="mobileno" className="form-control" 
              
              value={this.state.mobileno} onChange={this.handleChange} />
              {this.state.showErrMobile?<p style={{color:'red',fontSize:'15px'}}>Enter 10 digit</p>:null}

              
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="text" name="password" className="form-control" 
              value={this.state.password} onChange={this.handleChange} />
              {this.state.showErrPass?<p style={{color:'red',fontSize:'15px'}}>password Should contain minimum one upercase,minimum one loswercase and minimum one Special symbol</p>:null}

            </div>
            <input type="submit" className="btn btn-primary offset-4 mt-3" value="Register" />
          </form>
        </div>
      </div>
    </>

    );
  }


}

export default CreateAccount
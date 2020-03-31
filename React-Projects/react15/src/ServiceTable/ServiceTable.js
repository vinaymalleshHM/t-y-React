import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Done from "@material-ui/icons/Done";
import Cancel from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
//import TableHead from '@material-ui/core/TableHead';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  iconCell: {
    width: "7.4em"
  },
  textField: {
    width: "8em"
  }
});
class ServiceTable extends Component {
  state = {
    empdetails: [
      {
        name: "navas",
        age: "22",
        technology: "react.js",
        organisation: "cognizant technoloy solutions"
      },
      {
        name: "soundharya",
        age: 22,
        technology: "node.js",
        organisation: "samsung"
      },
      {
        name: "yacub",
        age: 22,
        technology: "angular",
        organisation: "boeing"
      },
      {
        name: "rayan",
        age: 22,
        technology: "javascript",
        organisation: "paypal"
      }
    ],
    editedIndex: -1,
    editedName: "",
    editedAge: "",
    editedTechnology: "",
    editedOrganisation: ""
  };

  ////=========>methods
  deleteComponentbyrow(index) {
    const empdetails = this.state.empdetails.slice();
    empdetails.splice(index, 1);
    this.setState({ empdetails });
  }
  editComponent(index) {
    const selected = this.state.empdetails[index];
    this.setState({
      editedIndex: index,
      editedName: selected.name,
      editedAge: selected.age,
      editedTechnology: selected.technology,
      editedOrganisation: selected.organisation
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
      organisation: ""
    });
    this.setState(
      prevState => {
        return { empdetails: prevState.empdetails };
      },
      () => {
        debugger;
        let index = this.state.empdetails.length - 1;
        this.editComponent(index);
      }
    );
  };

  updateComponent(index) {
    const empdetails = this.state.empdetails.slice();
    empdetails[index].name = this.state.editedName;
    empdetails[index].age = this.state.editedAge;
    empdetails[index].technology = this.state.editedTechnology;
    empdetails[index].organisation = this.state.editedOrganisation;
    this.setState({
      empdetails,
      editedName: "",
      editedAge: "",
      editedTechnology: "",
      editedOrganisation: "",
      editedIndex: -1
    });
  }
  onchangehandler = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    const { editedIndex, empdetails } = this.state;
    const { classes } = this.props;
    const deleteIconrow = index => (
      <IconButton onClick={() => this.deleteComponentbyrow(index)}>
        <DeleteIcon color="secondary" />
      </IconButton>
    );

    const editIcon = index => (
      <IconButton onClick={() => this.editComponent(index)}>
        <EditIcon color="primary" />
      </IconButton>
    );
    const okBtn = index => (
      <IconButton onClick={() => this.updateComponent(index)}>
        <Done color="secondary" />
      </IconButton>
    );
    const cancelBtn = (
      <IconButton onClick={this.cancelEdit}>
        <Cancel color="primary" />
      </IconButton>
    );
    const addbtn = (
      <IconButton onClick={this.addcomponent}>
        <AddIcon color="primary" />
      </IconButton>
    );

    const editName = (
      <TextField
        id="name"
        label="name"
        className={classes.textField}
        value={this.state.editedName}
        margin="normal"
        onChange={this.onchangehandler("editedName")}
      />
    );
    const editAge = (
      <TextField
        id="age"
        label="age"
        className={classes.textField}
        value={this.state.editedAge}
        margin="normal"
        onChange={this.onchangehandler("editedAge")}
      />
    );
    const editTechnology = (
      <TextField
        id="technology"
        label="technology"
        className={classes.textField}
        value={this.state.editedTechnology}
        margin="normal"
        onChange={this.onchangehandler("editedTechnology")}
      />
    );
    const editOrganisation = (
      <TextField
        id="organisation"
        label="organisation"
        className={classes.textField}
        value={this.state.editedOrganisation}
        margin="normal"
        helperText="required"
        onChange={this.onchangehandler("editedOrganisation")}
      />
    );
    return (
      <div>
        {addbtn}

        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableBody>
              {empdetails.map((row, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      {index === editedIndex ? editName : row.name}
                    </TableCell>
                    <TableCell>
                      {index === editedIndex ? editAge : row.age}
                    </TableCell>
                    <TableCell>
                      {index === editedIndex ? editTechnology : row.technology}
                    </TableCell>
                    <TableCell>
                      {index === editedIndex
                        ? editOrganisation
                        : row.organisation}
                    </TableCell>
                    <TableCell>
                      {index === editedIndex
                        ? okBtn(empdetails.indexOf(row))
                        : deleteIconrow(empdetails.indexOf(row))}
                      {index === editedIndex
                        ? cancelBtn
                        : editIcon(empdetails.indexOf(row))}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(ServiceTable);
// {/* <TableHead>
//            <TableRow>
//              <TableCell>Delete</TableCell>
//             <TableCell align="right">edit</TableCell>
//             <TableCell align="right">Name</TableCell>
//             <TableCell align="right">age</TableCell>
//              <TableCell align="right">technology</TableCell>
//              <TableCell align="right">organisation</TableCell>
//          </TableRow>
//         </TableHead> */}
//   deletecomponent(index){
//     this.setState({ editedIndex:this.state.empdetails.pop(index)})
// }
{
  /*  {deletebtn}  */
}
// const deletebtn=(
//     <IconButton onClick={this.deletecomponent}>
//         <DeleteIcon color="secondary"/>
//     </IconButton>
// )
//===========>for editing

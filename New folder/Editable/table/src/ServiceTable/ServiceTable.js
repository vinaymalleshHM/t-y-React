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
    width: "20em"
  }
});
class ServiceTable extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {

    const { editedIndex, empdetails } = this.props.data;
    const { classes } = this.props;
    const deleteIconrow = index => (
      <IconButton onClick={() => this.props.method6(index)}>
        <DeleteIcon color="secondary" />
      </IconButton>
    );

    const editIcon = index => (
      <IconButton onClick={() => this.props.method5(index)}>
        <EditIcon color="primary" />
      </IconButton>
    );
    const okBtn = index => (
      <IconButton onClick={() => this.props.method2(index)}>
        <Done color="secondary" />
      </IconButton>
    );
    const cancelBtn = (
      <IconButton onClick={this.props.method4}>
        <Cancel color="primary" />
      </IconButton>
    );
    const addbtn = (
      <IconButton onClick={this.props.method1}>
        <AddIcon color="primary" />
      </IconButton>
    );

    const editName = (
      <TextField
        id="name"
        label="name"
        className={classes.textField}
        value={this.props.data.editedName}
        margin="normal"
        onChange={this.props.method("editedName")}
        error={this.props.data.editedNameErr}
        helperText={this.props.data.editedNameErr?this.props.data.editedNameMsg:null}
      />
    );
    const editAge = (
      <TextField
        id="age"
        label="age"
        className={classes.textField}
        value={this.props.data.editedAge}
        margin="normal"
        onChange={this.props.method("editedAge")}
        error={this.props.data.editedAgeErr}
        helperText={this.props.data.editedAgeErr?this.props.data.editedAgeMsg:null}
      />
    );
    const editTechnology = (
      <TextField
        id="technology"
        label="technology"
        className={classes.textField}
        value={this.props.data.editedTechnology}
        margin="normal"
        onChange={this.props.method("editedTechnology")}
      />
    );
    const editOrganisation = (
      <TextField
        id="organisation"
        label="organisation"
        className={classes.textField}
        value={this.props.data.editedOrganisation}
        margin="normal"
        onChange={this.props.method("editedOrganisation")}
      />
    );
    const editDate = (
      <TextField
        id="date"
        type="date"
        label="Date"
        className={classes.textField}
        value={this.props.data.editedDate}
        margin="normal"
        onChange={this.props.method("editedDate")}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{ inputProps: {max: "2020-02-10"} }}
        
      />
    );
    
    return (
      <>
        {addbtn}

        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableBody>
              {this.props.data.empdetails.map((row, index) => {
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
                      {index === editedIndex? editOrganisation : row.organisation}
                    </TableCell>
                    <TableCell>
                      {index === editedIndex ? editDate : row.date}
                    </TableCell> 
                    <TableCell>
                      {index === editedIndex ? okBtn(empdetails.indexOf(row)) : deleteIconrow(empdetails.indexOf(row))}
                      {index === editedIndex ? cancelBtn : editIcon(empdetails.indexOf(row))}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
       {/*  <ServiceTableValidation  formData={this.state.empdetails}/> */}
      </>
    );
  }
}
export default withStyles(styles)(ServiceTable);
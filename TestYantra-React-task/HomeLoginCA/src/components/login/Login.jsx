import React from 'react'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["emailid"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });

        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }

    render() {
        const regStyle = {
            color: 'red',
            fontSize: '20px'
        }
        return (<>
            <div className="card col-md-4 offset-4 mt-5">
                <div className="card-body">
                    <h3 className="card-title offset-4">Login</h3>
                    <form name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} className="form-group">
                        <div className="form-group">
                            <label>Email ID:</label>
                            <input type="text" className="form-control" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                            <p style={regStyle}>{this.state.errors.emailid}</p>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" name="password" className="form-control" value={this.state.fields.password} onChange={this.handleChange} />
                            <p style={regStyle}>{this.state.errors.password}</p>
                        </div>
                        <input type="submit" className="btn btn-primary offset-4 mt-3" value="Register" />
                    </form>
                </div>
            </div>
        </>

        );

    }
}
export default Login
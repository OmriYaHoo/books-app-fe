import React, {Component} from 'react';

class LoginPage extends Component {

    constructor() {
        super();

        this.state = {
            userName: "",
            pwd: ""
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.middleware.getUser(this.state.userName, this.state.pwd);
    };

    onChangeUserName = (evt) => {
        this.setState({userName: evt.target.value});
    };

    onChangePwd = (evt) => {
        this.setState({pwd: evt.target.value});
    };

    signUpForm = (evt) => {
        this.props.middleware.postUser(this.state.userName, this.state.pwd);
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="animated fadeInDown">
                    <h1 style={{marginBottom: "5%", marginTop: "5%"}}>Books App</h1>
                    <h3 style={{marginBottom: "1%", marginTop: "1%"}}>Login Page:</h3>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               placeholder="Enter User Name" onChange={this.onChangeUserName}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your data with anyone
                            else (we hope).
                        </small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Enter Password" onChange={this.onChangePwd}/>
                    </div>
                    <button type="submit" className="btn btn-success" id="loginButton">Login</button>
                    <button type="button" className="btn btn-primary" id="signupButton" onClick={this.signUpForm}>SignUp</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;

import React from 'react';
import {Form,Button, NavLink} from 'react-bootstrap';
import './LoginUI.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/auth';
class LoginUI extends React.Component {
    handleSubmit= (e) => {
        e.preventDefault();
        const username=e.target.elements.formBasicEmail.value;
        const password=e.target.elements.formBasicPassword.value;
        this.props.onAuth(username, password);
        this.props.history.push('/');
           
    }
    render(){
        
        return(
            <div className="login">
             <Form   onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username"  inputRef={(ref) => { this.email = ref }} required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" inputRef={(ref) => { this.password = ref }} required />
                </Form.Group>
            
                <NavLink></NavLink>
                <Button variant="primary" type="submit" className="loginButton">
                    Submit
                </Button>
            </Form>
            </div>
        );
    }
}

const mapStateToProps= (state) => {
    return {
        loading:state.loading,
        error: state.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginUI);
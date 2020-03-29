import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import {connect} from  'react-redux'; 
import 'antd/dist/antd.css';
import CustomLayout from './containers/CustomLayout';
import * as actions from './store/actions/auth';
import { BrowserView, MobileView } from 'react-device-detect';
import MobileLayout from './containers/MobileView/MobileLayout';
class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render(){
    return (
      <div>
        <Router>
          <BrowserView>
          <CustomLayout {...this.props}>
            <BaseRouter/>
          </CustomLayout>
          </BrowserView>
          <MobileView>
           <MobileLayout {...this.props}>
            <BaseRouter/>
           </MobileLayout>
          </MobileView>
          
        </Router>   
      </div>
    );
  }
}
const mapStateToProps = state => {
    return{
      isAuthenticated: state.token !== null 
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { Redirect } from "react-router-dom";
// Take in a component as argument WrappedComponent
function AppGuard (WrappedComponent) {
  class HOC extends React.Component {
  	constructor(props){
  		super(props);
  	}
  	componentDidMount() {
  		this.validateSession();
  	}
  	componentDidUpdate() {
  		this.validateSession();
  	}
  	validateSession = () => {
  		const isLogin = sessionStorage.getItem("isLogin") === "true";
  		console.log(isLogin);
	    if(!isLogin)
	    return <Redirect to="/login" />
  	}
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return HOC;
};

export default AppGuard;

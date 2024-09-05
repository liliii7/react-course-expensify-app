import React from "react";
import { connect } from "react-redux";
import { startSetExpenses } from "../actions/expenses";
import { firebase } from "../firebase/firebase";
import { withRouter } from "../WithRouter"; 

class AuthHandler extends React.Component {

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.startSetExpenses().then(() => {
          if (window.location.pathname === '/') {
            this.props.navigate('/dashboard'); 
          }
          console.log('log in');
        });
      } else {
        this.props.navigate('/'); 
        console.log('log out');
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    return this.props.children;
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetExpenses: () => dispatch(startSetExpenses())
});

export default withRouter(connect(null, mapDispatchToProps)(AuthHandler));

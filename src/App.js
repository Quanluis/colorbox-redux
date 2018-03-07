import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import {changeColor, handleOnClick} from './store'


class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Color Box
        </h1>
        <div style = {{backgroundColor: this.props.color}}className = 'box'></div>
        <input onClick = {(e) => this.props.changeColor(e.target.value)} value = {this.props.color} className = 'picker' type="color" id = "colorPicker"/>
       
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    color: state.color
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeColor: color => dispatch(changeColor(color))
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
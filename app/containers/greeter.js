//Greeter,js
import React, {Component} from 'react'
import config from '../config.json';
import styles from '../styles/Greeter.css';//导入

class Greeter extends Component{
  render() {
    return (
      <div style={root}>
        {config.greetText}
      </div>
    );
  }
}


var root={
	backgroundColor: '#E2F65D',
	padding: '10px',
  border: '3px solid #832222'

} 

export default Greeter

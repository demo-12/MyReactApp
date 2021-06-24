import React, { Component } from 'react'
import LeftMenu from './components/leftMenu';
import Header from './components/Header';
export default class App extends Component {
      render() {
        return (
          <div>
            <Header/>
            <LeftMenu/>
            
          </div>
        );
      }
    }
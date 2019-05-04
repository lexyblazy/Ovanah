import React, { Component } from 'react';
import { connect } from 'react-redux';
class Login extends Component {
  state={
    
  }
  render() {
    return (
      <div class="row container">
        <form class="col s8">
          <div class="row">
            <div class="input-field col s12">
              <input
                id="username"
                placeholder="username"
                type="text"
                class="validate"
              />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="password"
                placeholder="password"
                type="text"
                class="validate"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect()(Login);

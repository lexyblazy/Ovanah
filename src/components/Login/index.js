import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRIMARY_COLOR } from '../../actions/constants';
import { login } from '../../actions';

class Login extends Component {
  state = {
    password: '',
  };
  handleChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { password } = this.state;
    dispatch(login(password));
    
  };

  render() {
    const { password } = this.state;
    const {
      Auth: { error },
    } = this.props;
    return (
      <div className="row container">
        <div className="col s8">
          <div className="row">
            <div className="row">
              <h5 className="center-align">Login: Default password is 12345</h5>
            </div>
            <div className="input-field col s12">
              <input
                style={{ borderBottomColor: PRIMARY_COLOR }}
                id="password"
                type="password"
                className="validate"
                value={password}
                onChange={this.handleChange}
              />
              <label htmlFor="password" style={{ color: PRIMARY_COLOR }}>
                Password
              </label>
            </div>
            <h5>{error && <span>{error}</span>}</h5>
          </div>
          <button
            onClick={this.handleSubmit}
            style={{ backgroundColor: PRIMARY_COLOR }}
            className="btn right"
            disabled={password.length < 1}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ Auth }) => ({ Auth });
export default connect(mapStateToProps)(Login);

import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import { fetchWeather } from "./actions";

class App extends Component {
  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch(fetchWeather());

    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        const { dispatch } = this.props;
        dispatch(fetchWeather(latitude, longitude));
      },
      err => {
        console.log(err);
      }
    );
  }
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default connect()(App);

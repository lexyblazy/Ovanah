import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { fetchWeather } from './actions';
import Card from './components/Card';
import { BASE_URL } from './actions/constants';

class App extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        const { dispatch } = this.props;
        dispatch(fetchWeather(latitude, longitude));
      },
      err => {
        console.log(err);
      },
    );
  }

  renderCards = () => {
    const {
      Weather: { payload = [] },
    } = this.props;
    return payload.map(p => {
    const imageSrc = `${BASE_URL}/static/img/weather/${p.weather_state_abbr}.svg`;
      return <Card imageSrc={imageSrc} data={p} key={p.id}/>;
    });
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <SearchBar />
          <div className="row">
          {this.renderCards()}
          
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ Weather }) => ({ Weather });

export default connect(mapStateToProps)(App);

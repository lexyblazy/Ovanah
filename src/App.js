import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { fetchWeather } from './actions';
import Card from './components/Card';
import { BASE_URL } from './actions/constants';
import Spinner from './components/Spinner';
import ListItem from './components/ListItem';
import Login from './components/Login';

class App extends Component {
  getUserGeolocation = () => {
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
  };

  renderForecast = () => {
    const {
      Weather: { payload = {} },
    } = this.props;
    const { consolidated_weather = [] } = payload;
    return consolidated_weather.map(p => {
      const imageSrc = `${BASE_URL}/static/img/weather/${
        p.weather_state_abbr
      }.svg`;
      return <Card imageSrc={imageSrc} data={p} key={p.id} />;
    });
  };

  renderCities = () => {
    const {
      Weather: { cities = [] },
    } = this.props;
    return cities.map(city => <ListItem city={city} key={city.woeid} />);
  };

  render() {
    const {
      Weather: {
        payload = {},
        fetchingCityData = false,
        multipleCities = false,
        noCityData = false,
      },
      Auth: { isAuthenticated = false },
    } = this.props;

    return (
      <div className="App">
        <NavBar />
        {isAuthenticated ? (
          <div className="container">
            {this.getUserGeolocation()}
            <SearchBar inactive={fetchingCityData} />
            {fetchingCityData && (
              <div class="row">
                <Spinner size="big" />
              </div>
            )}
            {multipleCities ? (
              this.renderCities()
            ) : (
              <>
                {payload.title && (
                  <div>
                    <h5 className="center-align card-title">
                      Forecast Data for : {payload.title}
                    </h5>
                    <br />
                  </div>
                )}
                <div className="row">{this.renderForecast()}</div>
              </>
            )}
            {noCityData && <div>No data found</div>}
          </div>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ Weather, Auth }) => ({ Weather, Auth });

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRIMARY_COLOR } from '../../actions/constants';
import { searchCity } from '../../actions';
import Spinner from '../Spinner';

class ListItem extends Component {
  state = {
    loading: false,
  };
  getCityWeatherData = ({ title }) => {
    const { dispatch } = this.props;
    this.setState({ loading: true });
    dispatch(searchCity(title));
  };
  componentWillMount() {
    this.setState({ loading: false });
  }
  render() {
    const { city } = this.props;
    const { loading } = this.state;
    return (
      <div className="row">
        <div className="col s9 m9">
          <div className="card">
            <div className="card-content">
              <span className="card-title">{city.title}</span>
              <p>Location Type: {city.location_type}</p>
            </div>
            <div className="card-action">
              {loading ? (
                <Spinner size="small" />
              ) : (
                <button
                  className="btn"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                  onClick={() => this.getCityWeatherData(city)}
                  disabled={loading}
                >
                  {' '}
                  Show forecast data
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ Weather }) => ({ Weather });

export default connect(mapStateToProps)(ListItem);

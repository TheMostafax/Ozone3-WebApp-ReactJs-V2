import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '200px'
    };

    return (
      <div className="w-full px-4 md:px-0">
        <Map
          google={this.props.google}
          zoom={18}
          style={mapStyles}
          initialCenter={{
            lat: 29.974390,  
            lng: 31.27430  
          }}  
        >
          <Marker position={{ lat: 29.974390, lng: 31.274300 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY_HERE'
})(MapContainer);
import React from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends React.Component {

    constructor() {
        super()
        this.state = {
        }
    }


    render() {

        const style = {
            width: '100%',
            height: '100%'
        }


        console.log(this.props.Lat+"the data received from RestProfile ")
        return (    
            <div>
                <button onClick={this.props.mapClose}>Close Map</button>
                <Map
                    google={this.props.google}
                    style={style}
                    initialCenter={{
                        lat: this.props.Lat,
                        lng: this.props.Lng
                    }}
                    zoom={14}>
                    <Marker onClick={this.onMarkerClick} name={'Current location'} />
                    <InfoWindow onClose={this.onInfoWindowClose}>
                    </InfoWindow>
                </Map>
            </div>
        )
    }

}

//export default GoogleMap;
export default GoogleApiWrapper({
    apiKey: ("AIzaSyBc3bsKQXVsZ-P-MRqPQyIiW1xwi_HEGZw")
})(GoogleMap)


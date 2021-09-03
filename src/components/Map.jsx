import { GoogleMap, Marker } from "react-google-maps"

const Map = (props) => {
    return(
        <div>
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
    
    <MyMapComponent isMarkerShown />// Map with a Marker
    <MyMapComponent isMarkerShown={false} />// Just only Map
    </div>
    )
}
export default Map


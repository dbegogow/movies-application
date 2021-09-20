import { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { mapProps } from './interfaces/mapProps.module';
import MapClick from './MapClick';
import { coordinateDTO } from './interfaces/coordinates.module';

const defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 17]
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps) {
    const [coordinates, setCoordinates] = useState<coordinateDTO[]>(props.coordinates);

    return (
        <MapContainer
            center={[42.697435, 23.323332]}
            zoom={14}
            style={{ height: props.height }}
        >
            <TileLayer
                attribution="Movies"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClick
                setCoordinates={coordinates => {
                    setCoordinates([coordinates]);
                    props.handleMapClick(coordinates);
                }}
            />
            {
                coordinates.map((coordinate, index) =>
                    <Marker key={index} position={[coordinate.lat, coordinate.lng]} />)
            }
        </MapContainer>
    );
};

Map.defaultProps = {
    height: '500px'
};
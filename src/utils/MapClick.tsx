import { useMapEvent } from 'react-leaflet';
import { mapClickProps } from './mapClickProps.module';

export default function MapClick(props: mapClickProps) {
    useMapEvent('click', eventArgs => {
        props.setCoordinates({ lat: eventArgs.latlng.lat, lng: eventArgs.latlng.lng })
    })
    return null;
}
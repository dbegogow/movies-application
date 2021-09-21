import { mapFieldProps } from './interfaces/mapFieldProps.module';
import Map from '../utils/Map';
import { coordinateDTO } from '../utils/interfaces/coordinates.module';
import { useFormikContext } from 'formik';

export default function MapField(props: mapFieldProps) {
    const { values } = useFormikContext<any>();

    function handleMapClick(coordinates: coordinateDTO) {
        values[props.latField] = coordinates.lat;
        values[props.lngField] = coordinates.lng;
    }

    return (
        <Map
            coordinates={props.coordinates}
            handleMapClick={handleMapClick}
        />
    );
}

MapField.defaultProps = {
    coordinates: []
};
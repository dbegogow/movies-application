import { coordinateDTO } from '../../utils/interfaces/coordinates.module';

export interface mapFieldProps {
    coordinates: coordinateDTO[];
    latField: string;
    lngField: string;
};
import { coordinateDTO } from '../utils/coordinates.module';

export interface mapFieldProps {
    coordinates: coordinateDTO[];
    latField: string;
    lngField: string;
};
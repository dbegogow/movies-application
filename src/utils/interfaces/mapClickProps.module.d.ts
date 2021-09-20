import { coordinateDTO } from './coordinates.module';

export interface mapClickProps {
    setCoordinates(coordinates: coordinateDTO): void;
}
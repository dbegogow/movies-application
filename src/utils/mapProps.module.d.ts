import { coordinateDTO } from "./coordinates.module";

export interface mapProps {
    height: string;
    coordinates: coordinateDTO[];
    handleMapClick(coordinates: coordinateDTO): void;
};
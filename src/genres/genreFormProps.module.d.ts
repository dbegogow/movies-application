import { FormikHelpers } from "formik";
import { genreCreationDTO } from "./genres.module";

export interface genreFormProps {
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
};
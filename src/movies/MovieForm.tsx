import { Form, Formik } from "formik";
import * as Yup from 'yup'
import Button from '../utils/Button';
import { Link } from 'react-router-dom';
import TextField from '../forms/TextField';
import ImageField from '../forms/ImageField';
import DateField from '../forms/DateField';
import CheckboxField from '../forms/CheckboxField';
import { useState } from "react";
import { movieFormProps } from "./movieFormProps.module";
import { multipleSelectorModel } from "../forms/multipleSelector.module";
import MultipleSelector from "../forms/MultipleSelector";

export default function MovieForm(props: movieFormProps) {

    const [selectedGenres, setSelectedGenres] = useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenres] = useState(mapToModel(props.nonSelectedGenres));

    const [selectedMovieTheaters, setSelectedMovieTheaters] = useState(mapToModel(props.selectedMovieTheaters));
    const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState(mapToModel(props.nonSelectedMovieTheaters));

    function mapToModel(items: { id: number, name: string }[]): multipleSelectorModel[] {
        return items.map(item => {
            return { key: item.id, value: item.name }
        })
    }

    return (
        <Formik
            initialValues={props.model}
            onSubmit={(values, actions) => {
                values.genresIds = selectedGenres.map(item => item.key);
                values.movieTheatersIds = selectedMovieTheaters.map(item => item.key);
                props.onSubmit(values, actions);
            }}
            validationSchema={Yup.object({
                title: Yup
                    .string()
                    .required('This field is required')
                    .firstLetterUppercase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField
                        displayName="Title"
                        field="title"
                    />
                    <CheckboxField
                        displayName="In Theaters"
                        field="inTheaters"
                    />
                    <TextField
                        displayName="Trailer"
                        field="trailer"
                    />
                    <DateField
                        displayName="Release Date"
                        field="releaseDate"
                    />
                    <ImageField
                        displayName="Poster"
                        field="poster"
                        imageURL={props.model.posterURL}
                    />

                    <MultipleSelector
                        displayName="Genres"
                        nonSelected={nonSelectedGenres}
                        selected={selectedGenres}
                        onChange={(selected, nonSelected) => {
                            setSelectedGenres(selected);
                            setNonSelectedGenres(nonSelected);
                        }}
                    />

                    <MultipleSelector
                        displayName="Movie Theaters"
                        nonSelected={nonSelectedMovieTheaters}
                        selected={selectedMovieTheaters}
                        onChange={(selected, nonSelected) => {
                            setSelectedMovieTheaters(selected);
                            setNonSelectedMovieTheaters(nonSelected);
                        }}
                    />

                    <Button
                        disabled={formikProps.isSubmitting}
                        type='submit'
                    >
                        Save Changes
                    </Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}
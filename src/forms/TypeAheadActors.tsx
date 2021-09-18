import { Typeahead } from 'react-bootstrap-typeahead';
import { typeAheadActorsProps } from './typeAheadActorsProps.module';
import { actorMovieDTO } from '../actors/actors.module';

export default function TypeAheadActors(props: typeAheadActorsProps) {
    const actors: actorMovieDTO[] = [
        {
            id: 1,
            name: 'Felipe',
            character: '',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/800px-Tom_Holland_by_Gage_Skidmore.jpg'
        },
        {
            id: 2,
            name: 'Fernando',
            character: '',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/330px-Dwayne_Johnson_2%2C_2013.jpg'
        },
        {
            id: 3,
            name: 'Jessica',
            character: '',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/330px-Meryl_Streep_December_2018.jpg'
        }
    ];

    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                onChange={actor => {
                    console.log(actor);
                }}
                options={actors}
                labelKey={actor => actor.name}
                filterBy={['name']}
                placeholder="Write the name of the actor..."
                minLength={1}
            />
        </div>
    );
};
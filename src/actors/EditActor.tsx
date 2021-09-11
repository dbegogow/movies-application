import ActorForm from './ActorForm';

export default function EditActor() {
    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm
                model={{ name: '', dateOfBirth: undefined }}
                onSubmit={values => console.log(values)}
            />
        </>
    );
}
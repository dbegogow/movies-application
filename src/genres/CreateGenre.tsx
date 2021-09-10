import { useHistory } from "react-router";
import Button from "../utils/Button";

export default function CreateGenre() {
    const history = useHistory();

    return (
        <>
            <h3>Create Genre</h3>
            <Button onClick={() => {
                // ... saving in the database
                history.push('/genres');
            }}>Save Changes</Button>
        </>
    );
}
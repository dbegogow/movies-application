import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { indexEntityProps } from './interfaces/indexEntityProps.module';
import customConfirm from './customConfirm';
import Button from './Button';
import RecordsPerPageSelect from './RecordsPerPageSelect';
import Pagination from './Pagination';
import GenericList from './GenericList';

export default function IndexEntity<T>(props: indexEntityProps<T>) {
    const [entities, setEntities] = useState<T[]>();
    const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadData();
    }, [page, recordsPerPage]);

    function loadData() {
        axios
            .get(props.url, {
                params: { page, recordsPerPage }
            })
            .then((response: AxiosResponse<T[]>) => {
                const totalAmountOfRecords = parseInt(response.headers['totalamountofrecords'], 10);

                setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));

                setEntities(response.data);
            });
    }

    async function deleteEntity(id: number) {
        try {
            await axios.delete(`${props.url}/${id}`);

            loadData();
        } catch (error: any) {
            if (error && error.response) {
                console.error(error.response.data);
            }
        }
    }

    const buttons = (editUrl: string, id: number) =>
        <>
            <Link
                className="btn btn-success"
                to={editUrl}
            >
                Edit
            </Link>
            <Button
                onClick={() => customConfirm(() => deleteEntity(id))}
                className="btn btn-danger"
            >
                Delete
            </Button>
        </>

    return (
        <>
            <h3>{props.title}</h3>
            <Link
                className="btn btn-primary"
                to={props.createUrl}
            >
                Create {props.entityName}
            </Link>

            <RecordsPerPageSelect
                onChange={amountOfRecords => {
                    setPage(1);
                    setRecordsPerPage(amountOfRecords);
                }}
            />

            <Pagination
                currentPage={page}
                totalAmountOfPages={totalAmountOfPages}
                onChange={newPage => setPage(newPage)}
            />

            <GenericList list={entities}>
                <table className="table table-striped">
                    {props.children(entities!, buttons)}
                </table>
            </GenericList>
        </>
    );
}
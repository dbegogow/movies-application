import Swal from 'sweetalert2';

export default function customConfirm(
    onConfirm: any,
    title: string = "Are you sure?",
    confirmButtonText: string = "Delete"
) {
    Swal.fire({
        title,
        confirmButtonText,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085D6',
        cancelButtonColor: '#D33'
    }).then(result => {
        if (result.isConfirmed) {
            onConfirm();
        }
    });
}
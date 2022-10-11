import Swal from 'sweetalert2'

export function formatDate(date) {
    // Format date from string '2022-08-10T05:00:00.000Z' to dd/mm/yyyy
    return date.split('T')[0].split('-').reverse().join('/');
}

export function swalAlert(type, message, title) {
    Swal.fire({
        title: title,
        text: message,
        icon: type,
        confirmButtonText: 'Ok'
    }) 
}

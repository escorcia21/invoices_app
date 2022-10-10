export function formatDate(date) {
    // Format date from string '2022-08-10T05:00:00.000Z' to dd/mm/yyyy
    return date.split('T')[0].split('-').reverse().join('/');
}

export function verifyField(field) {
    // Verify if field is empty
    return field === '' || field === null || field === undefined;
}
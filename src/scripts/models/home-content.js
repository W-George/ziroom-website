const getData = () => {
    return $.ajax({
        url: '/api/list/ajax-get-data',
        success: (result) => {
            return result;
        }
    })
}

export default {
    getData
}
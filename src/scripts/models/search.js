const getData = (query = '0,0') => {
    return $.ajax({
        url: '/v7/setting/suggestion.json',
        data:{
            city_code:'110000',
            query:query
        },
        success: (result) => {
            return result;
        }
    })
}

export default {
    getData
}
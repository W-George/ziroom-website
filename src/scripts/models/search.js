const getData = () => {
    return $.ajax({
        url: '/v7/setting/suggestion.json?city_code=110000&query=0,0',
        success: (result) => {
            return result;
        }
    })
}

export default {
    getData
}
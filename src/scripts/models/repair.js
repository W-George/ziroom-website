const list = (code) => {
    return $.ajax({
        url: '/maintainance/product/productList.jhtml',
        type:'post',
        data:'categoryCode='+code,
        success: (result) => {
            return result
        }
    })
}

export default {
    list
}
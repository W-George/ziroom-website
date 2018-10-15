const list = () => {
    return $.ajax({
      url: '/v7/room/detail.json?city_code=110000&id=60793779',
      success: (result) => {
        return result
      }
    })
  }
   
export default {
list
}
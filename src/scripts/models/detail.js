const list = () => {
    return $.ajax({
<<<<<<< HEAD
      url: '/v7/room/detail.json?city_code=110000&id=60793779',
      success: (result) => {  
        return result;
=======
      url: '/api/v7/room/detail.json?city_code=110000&id=60793779',
      success: (result) => {
        return result
>>>>>>> master
      }
    })
  }
   
export default {
list
}
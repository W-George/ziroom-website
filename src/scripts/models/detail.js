const list = () => {
    return $.ajax({
<<<<<<< HEAD
      url: '/api/v7/room/detail.json?city_code=110000&id=60793779',
      success: (result) => {
        return result
=======
      url: '/v7/room/detail.json?city_code=110000&id=60793779',
      success: (result) => {  
        return result;
>>>>>>> 968f5d1bfd0b3cafdcda7f03fbe3a3297304d896
      }
    })
  }
   
export default {
list
}
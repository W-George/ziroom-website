const list = () => {
  const url=location.href.split('?')[1].split('/')[0].split('=')[1]
  console.log(url)
    return $.ajax({
      url: '/api/v7/room/detail.json?city_code=110000&id='+url,
      success: (result) => {
        return result
      }
    })
  } 
export default {
list
}
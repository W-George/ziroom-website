const data = () =>{
    return $.ajax({
        url:'/v7/room/list.json?city_code=110000&page=1&type=1&price=&face=&rface=&hface=&feature=&around=&leasetype=&tag=&version=&area=&subway_code=&subway_station_code=&district_code=&bizcircle_code=&clng=&clat=&suggestion_type=&suggestion_value=&keywords=&sort=',
        success: (result) =>{
            // console.log(result)
           return result;
        }
    })
}

<<<<<<< HEAD


const loadmore = (pageNo) => {
    return $.ajax({
        url:'/v7/room/list.json?city_code=110000&page=+ pageNo +&type=1&price=&face=&rface=&hface=&feature=&around=&leasetype=&tag=&version=&area=&subway_code=&subway_station_code=&district_code=&bizcircle_code=&clng=&clat=&suggestion_type=&suggestion_value=&keywords=&sort=',
      success: (result) => {
        return result
      }
    })
  }
=======
// 刷新加载数据
const load = (pageNo) =>{
    return $.ajax({
        url:'/v7/room/list.json?city_code=110000&page='+ pageNo +'&type=1&price=&face=&rface=&hface=&feature=&around=&leasetype=&tag=&version=&area=&subway_code=&subway_station_code=&district_code=&bizcircle_code=&clng=&clat=&suggestion_type=&suggestion_value=&keywords=&sort=',
        success: (result) =>{
           return result;
        }
    })
}

>>>>>>> master
export default {
    data,
    load
}
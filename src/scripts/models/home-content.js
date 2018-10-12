const getBanner = () => {
    let t = new Date().getTime();
    console.log(t);
    return $.ajax({
        url: '/h5/mtop.damai.wireless.configure.msite.list/1.0/?jsv=2.4.16&appKey=12574478&t=1539265353658&sign=0b0f5d9115392653549288774ee220&type=originaljson&dataType=json&v=1.0&H5Request=true&AntiCreep=true&AntiFlood=true&api=mtop.damai.wireless.configure.msite.list&data=%7B%22cityId%22%3A%220%22%2C%22dmChannel%22%3A%22b%40damai_h5%22%7D',
        success: (result) => {
            console.log(result);
        }
    })
}

export default {
    getBanner
}
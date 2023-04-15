export function getCurrentTime() {
    const cur_time = new Date()
    var curr_hour = cur_time.getHours()
    var curr_min = cur_time.getMinutes()
    var curr_sec = cur_time.getSeconds()
    return [curr_hour, curr_min, curr_sec]
}
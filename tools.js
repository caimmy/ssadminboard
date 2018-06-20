/**
 * some utils tool for client logic
 */


 /**
  * 将时间戳转换为字符串
  */
 function timestamp2str(tmstamp) {
    var date = new date(tmstamp);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y+M+D+h+m+s;
 }
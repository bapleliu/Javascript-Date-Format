/*====================================+
+Javascript Date Format 时间格式 化     +
======================================+
+@author 方治刚                        +
======================================+
+@dae：2016-12-02                     +
======================================+
+@email：zhigang.vip@outlook.com      +
=====================================+*/

function $(id) {
    return document.getElementById(id);
}

function text(id, value) {
    return $(id).innerHTML = value;
}

//
window.onload = function () {
    //获取当前系统时间
    var todate = moment().format('YYYY-MM-DD HH:mm:ss');
    text("demo-1", "当前时间:" + todate);

    //获取今天星期几
    var week = moment().format('d');
    text("demo-2", "获取今天星期:" + week);

    //转换当前时间的Unix时间戳
    var unixDate = moment().format('x');
    text("demo-3", "Unix时间戳:" + unixDate);

    //Unix时间戳 转换当前时间
    text("unix", unixDate);
    var commonTime = moment(parseInt(unixDate)).format('YYYY-MM-DD HH:mm:ss');
    text("demo-4", "Unix时间戳 转换当前时间:" + commonTime);

    //时间转换UTC时间
    text("utc", todate + ',' + "YYYYMMDD")
    var utcDate = moment(todate + ', YYYYMMDD').format();
    text("demo-5", "时间转换UTC时间:" + utcDate);

    //UTC 转化为一般时间格式
    var utcTodate = moment(utcDate).format("YYYY-MM-DD HH:mm:ss");
    text("demo-6", "UTC转化为一般时间格式:" + utcTodate);

    //相对当前日期是2年前
    var fromNows = moment("20141202", "YYYYMMDD").fromNow();
    text("demo-7", "相对当前日期是2年前:" + fromNows);

    //7天后的日期
    var days = moment().add('days', 7).format('YYYY-MM-DD HH:mm:ss');
    text("demo-8", "7天后的日期:" + days);

    //9小时后的时间
    var hours = moment().add('hours', 9).format('YYYY-MM-DD HH:mm:ss');
    text("demo-9", "9小时后的时间:" + hours);

    //本月的前五天
    var DD = moment(5, "DD").format('YYYY-MM-DD HH:mm:ss');
    text("demo-10", "本月的前五天:" + DD);

    //今年的第4个月
    var MM = moment(4, "MM").format('YYYY-MM-DD HH:mm:ss');
    text("demo-11", "今年的第4个月:" + MM);

    //创建当天的15点时间
    var hh = moment("15", "hh").format('YYYY-MM-DD HH:mm:ss');
    text("demo-12", "创建当天的15点时间:" + hh);


    //table 隔行换色
    var trs = document.getElementsByTagName('tr');

    for (var i = 0; i < trs.length; i++) {
        if (i % 2 == 0) {
            trs[i].style.background = "#d7d7d7";
        } else {
            trs[i].style.background = "#cccc";
        }
    };

    //table 的光棒效果
    for (i = 1; i < trs.length; i++) { // 0 is start  
        var srcBgColor = null;
        trs[i].onmouseover = function () {
            srcBgColor = this.style.backgroundColor;
            this.style.backgroundColor = 'aqua';
        };
        trs[i].onmouseout = function () {
            this.style.backgroundColor = srcBgColor;
        };
    }
}

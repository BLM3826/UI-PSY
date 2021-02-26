window.onscroll = function() {
    list()
};
var lft = document.getElementById("mylist");
var sticky = lft.parentElement.offsetTop;

function list() {
    if (window.pageYOffset > sticky) {
        lft.classList.add("sticky");
    } else {
        lft.classList.remove("sticky");
    }
}

function show_msg() {
    alert("We won't try to steal your data.")
}

function GetCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}

function SetCookie(name, value) {
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;
    document.cookie = name + "=" + escape(value) +
        ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
        ((path == null) ? "" : ("; path=" + path)) +
        ((domain == null) ? "" : ("; domain=" + domain)) +
        ((secure == true) ? "; secure" : "");
}

function DeleteCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = GetCookie(name);
    document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
var expDays = 30;
var exp = new Date();
exp.setTime(exp.getTime() + (expDays * 24 * 60 * 60 * 1000));

function amt() {
    var count = GetCookie('count')
    if (count == null) {
        SetCookie('count', '1')
        return 1
    } else {
        var newcount = parseInt(count) + 1;
        DeleteCookie('count')
        SetCookie('count', newcount, exp)
        return count
    }
}

function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1)
        endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}

var vis = "Number of visits today: <b>" + amt() + "</b>";
document.getElementById('visit').innerHTML = vis;




var dat = new Date();
var weekd = dat.getDay();
var day = dat.getDate();
var month = dat.getMonth() + 1;
var year = dat.getFullYear();

function setbgnday() {
    function findDay() {
        var dname;
        switch (weekd) { //change this to see all the bg images
            case 0:
                dname = "Sun, ";
                document.body.style.backgroundImage = "url('assets/sunbg.jpg')";
                break;
            case 1:
                dname = "Mon, ";
                document.body.style.backgroundImage = "url('assets/monbg.jpg')";
                break;
            case 2:
                dname = "Tue, ";
                document.body.style.backgroundImage = "url('assets/tuebg.png')";
                break;
            case 3:
                dname = "Wed, ";
                document.body.style.backgroundImage = "url('assets/wedbg.jpg')";
                var wed = document.getElementById("wedclr");
                wed.style.color = "purple";
                wed.onmouseover = function() {
                    wed.style.color = "black";
                }
                wed.onmouseout = function() {
                    wed.style.color = "purple";
                }

                break;
            case 4:
                dname = "Thur, ";
                document.body.style.backgroundImage = "url('assets/thurbg.png')";
                break;
            case 5:
                dname = "Fri, ";
                document.body.style.backgroundImage = "url('assets/fribg.jfif')";
                break;
            default:
                dname = "Sat, ";
                break;
        }
        return dname
    }
    var todat = findDay() + day + "/" + month + "/" + year;
    return todat;
}
document.getElementById("todate").innerHTML = setbgnday();
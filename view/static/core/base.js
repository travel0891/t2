var outer = {};

outer.toLogin = function() {
    var html = "<a class=\"btn\" href=\"javascript:;\">已完成支付</a><a class=\"btn\" href=\"javascript:void(0);\">支付遇到问题</a>";
    $("#message").css("text-align", "center");
    $("#message").html(html);
};
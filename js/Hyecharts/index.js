// 监控区域模块页面制作
// 立即执行函数
(function () {
  $(".monitor .tabs").on("click", "a", function () {
    $(this).addClass("active").siblings("a").removeClass("active");
    // 选取对应索引号的content
    $(".monitor .content")
      .eq($(this).index())
      .show()
      .siblings(".content")
      .hide();
  });
  // 1 先克隆marquee里面所有的行
  $(".marquee-view .marquee").each(function () {
    var rows = $(this).children().clone();
    $(this).append(rows);
  });
})();
// var newScript = document.createElement("script");
// newScript.setAttribute("type","text/javascript");
// newScript.setAttribute("src","./monitor.js");
// document.body.appendChild(newScript);

// import './monitor'
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

// 点位分布模块
(function () {
  // 1 实例化对象
  var myChart = echarts.init(document.querySelector(".inner .pie"));
  // 2 指定配置项和数据
  var option = {
    // 提示框组件
    tooltip: {
      target: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    series: [
      {
        //图表名称
        name: "点位模式",
        //图表类型
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        // area面积模式展示 radius半径模式展示
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" },
        ],
        // 修饰饼形图文字相关的样式
        label: {
          fontSize: 10,
        },
        labelLine: {
          length: 6,
          length2: 8,
        },
      },
    ],
  };
  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
  // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

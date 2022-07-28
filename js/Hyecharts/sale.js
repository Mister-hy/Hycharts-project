// 销售统计模块
(function () {
  // (1)准备数据
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34],
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
    ],
  };
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line"));
  // 2. 指定配置和数据
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis",
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd",
      },
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      // show:true
      borderColor: "#012f4a",
    },
    toolbox: {},
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      // 去除刻度
      axisTick: { show: false },
    },
    // 修饰刻度标签的颜色
    axisLabel: {
      color: "#4c9bfd",
    },
    // 去除x坐标轴的颜色
    axisLine: { show: false },
    yAxis: {
      type: "value",
      axisTick: { show: false },
      axisLabel: { color: "#4c9bfd" },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a",
        },
      },
    },
    series: [
      {
        name: "预售销售额",
        type: "line",
        stack: "总量",
        data: data.year[0],
        smooth: true,
      },
      {
        name: "实际销售额",
        type: "line",
        stack: "总量",
        data: data.year[1],
        smooth: true,
      },
    ],
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);
  // 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
  // 4.tab切换效果 点击切换效果
  $(".sales .caption").on("click", "a", function () {
    index = $(this).index() - 1;
    // console.log(index);
    $(this)
      .addClass("active")
      .siblings("a")
      .removeClass("active");
    // 拿到当前a 的自定义属性值
    // console.log(this.dataset.type);
    // 根据拿到的值 去找数据
    // console.log(data);
    var arr = data[this.dataset.type];
    //  console.log(arr);
    // 根据拿到的数据重新渲染 series里面的data值
    option.series[0].data = arr[0];
    option.series[1].data = arr[1];
    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
  });
  // 5.tab栏自动切换效果
  //  console.log( $('.sales .caption a'));
  var as = $(".sales .caption a");
  var index = 0;
  var timer = setInterval(() => {
    index++;
    if (index >= 4) index = 0;
    as.eq(index).click();
  }, 1000);
  // 鼠标经过sales 关闭定时器 离开开启定时器
  $(".sales").hover(function () {
    clearInterval(timer);
    timer = setInterval(() => {
      index++;
      if (index >= 4) index = 0;
      as.eq(index).click();
    }, 1000);
  });
})();

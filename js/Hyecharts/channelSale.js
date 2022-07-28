//销售渠道模块 雷达图
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".radar"));
  // 2.指定配置
  var option = {
    tooltip: {
      show: true,
      // 控制提示框组件的显示位置
      position: ["60%", "10%"],
    },
    legend: {
      data: ["Allocated Budget", "Actual Spending"],
    },
    radar: {
      indicator: [
        { name: "机场", max: 100 },
        { name: "商场", max: 100 },
        { name: "火车站", max: 100 },
        { name: "汽车站", max: 100 },
        { name: "地铁", max: 100 },
      ],
      // 修改雷达图的大小
      radius: "65%",
      shape: "circle",
      // 分割的圆圈个数
      splitNumber: 4,
      name: {
        // 修饰雷达图文字的颜色
        textStyle: {
          color: "#4c9bfd",
        },
      },
      // 分割的圆圈线条样式
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.5)",
        },
      },
      splitArea: { show: false },
      axisLine: {
        // 坐标轴的线修改成白色半透明
        lineStyle: {
          color: "rgba(255,255,255,0.5)",
        },
      },
    },
    series: [
      {
        name: "北京",
        type: "radar",
        data: [[90, 19, 56, 11, 34]],
        lineStyle: {
          normal: {
            color: "#fff",
            width: 1,
            opacity: 0.5,
          },
        },
        // 设置图像标记(拐点)
        symbol: "circle",
        // 设置小圆点大小
        symbolSize: 5,
        // 设置小圆点颜色
        itemStyle: {
          color: "#fff",
        },
        // 让小圆点显示数据
        label: {
          show: true,
          fontSize: 10,
        },
        // 修饰我们区域填充的北京颜色
        areaStyle: {
          color: "rgba(238,197,102,0.6)",
        },
      },
    ],
  };
  // 3.把配置和数据给对象
  myChart.setOption(option);
  // 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
//季度销售  饼形图 半圆形 设置方式
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".gauge"));
  // 2. 指定数据和配置
  var option = {
    series: [
      {
        name: "销售进度",
        type: "pie",
        radius: ["130%", "150%"],
        // 移动位置 套住50%文字
        center: ["48%", "80%"],
        //是否启用防止标签重叠策略
        //  avoidLabelOverlap: false,
        labelLine: { normal: { show: false } },
        // 饼形图的起始角度位180 注意不是旋转角度
        startAngle:180,
        // 鼠标经过不需要放大偏移图像
        hoverOffset:0, 
        data: [
          {
            value: 100,
            itemStyle: {
              // 颜色渐变#00c9e0->#005fc1
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                { offset: 1, color: "#005fc1" }, // 1 结束颜色
              ]),
              // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            },
          },
          {
            value: 100,
            itemStyle: {
              color: "#12274d",
            },
          },
          {
            value: 200,
            itemStyle: {
              color: "transparent",
            },
          },
        ],
      },
    ],
  };
  // 3. 把数据和配置给实例对象
  myChart.setOption(option);
  // 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

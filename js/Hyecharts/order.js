//  订单量
// 立即执行函数
(function () {
  $(document).ready(function () {
    let data = {
      Year: {
        orders: "30,321,988",
        amount: "99882",
      },
      Season: {
        orders: "301,987",
        amount: "9834",
      },
      Month: {
        orders: "1,987",
        amount: "3834",
      },
      Day: {
        orders: "987",
        amount: "834",
      },
    };
    const $h4Order = $(".order .data  h4:eq(0)");
    const $h4Amount = $(".order .data  h4:eq(1)");
    // console.log('order',$h4Order.html);
    // console.log('h4Amount',$h4Amount.html);
    let _index = 1;
    $(".order .filter").on("click", "a", function () {
      // console.log($(this).index());
      _index = $(this).index();
      tabs();
    });
    setInterval(() => {
      tabs();
      _index = _index + 1;
      if (_index >= 4) {
        _index = 0;
      }
    }, 1000);
    function tabs() {
      $(".order .filter a")
        .eq(_index)
        .addClass("active")
        .siblings()
        .removeClass("active");
      // $(this).index().show() 指的是jquery对象 使用的是链式调用
      // .get获取的dom元素 可以使用原生js的属性和方法
      // 获取标签自定义的属性值  dataset获取dom元素上的data-自定义元素
      const _attr = $(".order .filter a").get(_index).dataset.type;
      const _data = data[_attr];
      $h4Order.html(_data.orders);
      $h4Amount.html(_data.amount);
    }
  });
})();

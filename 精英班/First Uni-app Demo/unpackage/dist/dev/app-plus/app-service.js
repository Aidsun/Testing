if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$1 = {
    data() {
      return {
        title: "Hello World!"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "top" }, " 视频栏 "),
      vue.createElementVNode("view", { class: "bottom" }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("img", {
            src: "/static/shouye-zhihui.png",
            alt: "首页-未点击"
          })
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("img", {
            src: "/static/dianpu.png",
            alt: "店铺-未点击"
          })
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("img", {
            src: "/static/shequhuodong.png",
            alt: "社区活动-未点击"
          })
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("img", {
            src: "/static/xiaoxi-zhihui.png",
            alt: "消息-未点击"
          })
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("img", {
            src: "/static/gerenzhongxin-zhihui.png",
            alt: "个人中心-未点击"
          })
        ])
      ]),
      vue.createElementVNode("view", null, [
        vue.createElementVNode("scroll-view", {
          "scroll-x": "",
          "scroll-with-animation": ""
        }, [
          vue.createElementVNode("view", { class: "items" }, "New1"),
          vue.createElementVNode("view", { class: "items" }, "New2"),
          vue.createElementVNode("view", { class: "items" }, "New3"),
          vue.createElementVNode("view", { class: "items" }, "New4"),
          vue.createElementVNode("view", { class: "items" }, "New5"),
          vue.createElementVNode("view", { class: "items" }, "New6"),
          vue.createElementVNode("view", { class: "items" }, "New7"),
          vue.createElementVNode("view", { class: "items" }, "New8")
        ])
      ]),
      vue.createElementVNode("view", null, [
        vue.createElementVNode("swiper", {
          circular: "",
          "indicator-dots": "",
          autoplay: "",
          interval: "3000",
          duration: "1000"
        }, [
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("view", { class: "swiper-item" }, [
              vue.createElementVNode("image", {
                src: "/static/pic1.jpg",
                mode: ""
              })
            ])
          ]),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("view", { class: "swiper-item" }, [
              vue.createElementVNode("image", {
                src: "/static/pic2.jpg",
                mode: ""
              })
            ])
          ]),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("view", { class: "swiper-item" }, [
              vue.createElementVNode("image", {
                src: "/static/pic3.jpg",
                mode: ""
              })
            ])
          ]),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("view", { class: "swiper-item" }, [
              vue.createElementVNode("image", {
                src: "/static/pic4.jpg",
                mode: ""
              })
            ])
          ]),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("view", { class: "swiper-item" }, [
              vue.createElementVNode("image", {
                src: "/static/pic5.jpg",
                mode: ""
              })
            ])
          ])
        ])
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/前端4班/精英班/First Uni-app Demo/pages/index/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/前端4班/精英班/First Uni-app Demo/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);

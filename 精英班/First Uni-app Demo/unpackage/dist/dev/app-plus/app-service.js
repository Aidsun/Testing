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
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$8 = {
    __name: "login",
    setup(__props) {
      let user = vue.reactive({
        "username": "",
        "password": ""
      });
      const _login = () => {
        uni.getStorage({
          key: "user",
          success: function(res) {
            let _user = res.data;
            if (user.username == "" || user.password == "") {
              uni.showToast({
                title: "账号密码不能为空格",
                icon: "error"
              });
            } else if (user.username !== _user.username || user.password !== _user.password) {
              uni.showToast({
                title: "账号或密码错误",
                icon: "error"
              });
            } else {
              uni.showToast({
                title: "登录成功",
                icon: "success"
              });
              uni.switchTab({
                url: "/pages/dianpu/dianpu"
              });
            }
          },
          fail: (err) => {
            uni.showToast({
              title: "账号不存在",
              icon: "error"
            });
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { id: "box" }, [
          vue.createElementVNode("view", { id: "Login_form" }, [
            vue.createElementVNode("view", { id: "name" }, [
              vue.createElementVNode("label", { for: "#" }, "账户："),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  placeholder: "请输入您的账户或邮箱",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(user).username = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, vue.unref(user).username]
              ])
            ]),
            vue.createElementVNode("view", { id: "password" }, [
              vue.createElementVNode("label", { for: "#" }, "密码："),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "password",
                  placeholder: "请输入您的密码",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(user).password = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, vue.unref(user).password]
              ])
            ])
          ]),
          vue.createElementVNode("view", { id: "Transform" }, [
            vue.createElementVNode("navigator", {
              url: "#",
              "open-type": "switchTab"
            }, [
              vue.createElementVNode("button", {
                type: "default",
                onClick: _login
              }, "登录")
            ]),
            vue.createElementVNode("navigator", { url: "/pages/enroll/enroll" }, [
              vue.createElementVNode("button", { type: "default" }, "注册")
            ])
          ])
        ]);
      };
    }
  };
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "E:/前端4班/精英班/First Uni-app Demo/pages/login/login.vue"]]);
  const _sfc_main$7 = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        // 内容区域是否通栏
        type: Boolean,
        default: false
      },
      isShadow: {
        // 是否开启阴影
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: vue.normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
      },
      [
        vue.createCommentVNode(" 封面 "),
        vue.renderSlot(_ctx.$slots, "cover", {}, () => [
          $props.cover ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            vue.createElementVNode("image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.renderSlot(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            vue.createCommentVNode(" 卡片标题 "),
            vue.createElementVNode("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                vue.createElementVNode("image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "uni-card__header-content" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  vue.toDisplayString($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  vue.toDisplayString($props.subTitle),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.createElementVNode("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-card__header-extra-text" },
                vue.toDisplayString($props.extra),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.createCommentVNode(" 卡片内容 "),
        vue.createElementVNode(
          "view",
          {
            class: "uni-card__content",
            style: vue.normalizeStyle({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          vue.renderSlot(_ctx.$slots, "actions", {}, void 0, true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$4], ["__scopeId", "data-v-ae4bee67"], ["__file", "E:/前端4班/精英班/First Uni-app Demo/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _sfc_main$6 = {
    data() {
      return {
        eventImages: [
          "../../static/image/event1.webp",
          "../../static/image/event2.png",
          "../../static/image/event3.png",
          "../../static/image/event4.png",
          "../../static/image/event5.webp"
        ],
        cardList: [
          {
            id: 1,
            title: "周嘉俊夺下LOL总冠军！",
            extra: "腾讯新闻",
            sub_title: "12小时前",
            // thumbnail: '缩略图',
            cover: "../../static/image/winer.jpg",
            content: "2023年英雄联盟总决赛由赣州师专毕业生周嘉俊获得，全校欢庆7天！",
            is_shadow: false,
            border: true
          },
          {
            id: 2,
            title: "周嘉俊的天赋竟是这样练成的？",
            extra: "澎湃新闻",
            sub_title: "4分钟前",
            // thumbnail: '缩略图',
            cover: "../../static/image/练习抓拍.jpg",
            content: "",
            is_shadow: false,
            border: true
          },
          {
            id: 5,
            title: "LOL总冠军也会有这样的一面",
            extra: "拉狗快讯",
            sub_title: "3分钟",
            thumbnail: "../../static/image/药品.webp",
            // cover: "../../static/image/恋爱史.jpg",
            content: "周嘉俊大学时期每个星期去两次医院，这是为什么……",
            is_shadow: false,
            border: true
          },
          {
            id: 3,
            title: "周嘉俊小学时期是学霸被狗仔扒出",
            extra: "澎湃新闻",
            sub_title: "8小时前",
            // thumbnail: '缩略图',
            cover: "../../static/image/学霸.jpg",
            content: "",
            is_shadow: false,
            border: true
          },
          {
            id: 4,
            title: "电竞大神周嘉俊的大学青春恋爱史",
            extra: "搜狐新闻",
            sub_title: "2小时前",
            // thumbnail: '缩略图',
            cover: "../../static/image/恋爱史.jpg",
            content: "",
            is_shadow: false,
            border: true
          }
        ]
      };
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { id: "box" }, [
      vue.createElementVNode("view", { class: "Events" }, [
        vue.createElementVNode("swiper", {
          autoplay: true,
          interval: 3e3,
          duration: 1e3,
          circular: "true"
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.eventImages, (img) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", { key: img }, [
                vue.createElementVNode("image", {
                  src: img,
                  mode: "scaleToFill"
                }, null, 8, ["src"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createElementVNode("view", { class: "content" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.cardList, (card) => {
            return vue.openBlock(), vue.createBlock(_component_uni_card, {
              key: card.id,
              title: card.title,
              extra: card.extra,
              "sub-title": card.sub_title,
              thumbnail: card.thumbnail,
              cover: card.cover,
              "is-shadow": card.is_shadow,
              border: card.border
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "text",
                  { class: "uni-body" },
                  vue.toDisplayString(card.content),
                  1
                  /* TEXT */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["title", "extra", "sub-title", "thumbnail", "cover", "is-shadow", "border"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesShouyeShouye = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$3], ["__file", "E:/前端4班/精英班/First Uni-app Demo/pages/shouye/shouye.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("h3", null, "这是消息界面")
    ]);
  }
  const PagesXiaoxiXiaoxi = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$2], ["__file", "E:/前端4班/精英班/First Uni-app Demo/pages/xiaoxi/xiaoxi.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {};
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "head" }, [
          vue.createElementVNode("h1", null, "生鲜市场")
        ])
      ])
    ]);
  }
  const PagesDianpuDianpu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$1], ["__file", "E:/前端4班/精英班/First Uni-app Demo/pages/dianpu/dianpu.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("h3", null, "这是个人中心界面"),
      vue.createElementVNode("navigator", { url: "/pages/login/login" }, [
        vue.createElementVNode("button", { type: "default" }, "跳转到登录页面")
      ]),
      vue.createElementVNode("navigator", { url: "/pages/enroll/enroll" }, [
        vue.createElementVNode("button", { type: "default" }, "跳转到注册页面")
      ])
    ]);
  }
  const PagesGerenzhongxinGerenzhongxin = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__file", "E:/前端4班/精英班/First Uni-app Demo/pages/gerenzhongxin/gerenzhongxin.vue"]]);
  const _sfc_main$2 = {
    __name: "shequhuodong",
    setup(__props) {
      let list = vue.ref([]);
      uni.request({
        url: "https://mock.presstime.cn/mock/654cc94b484bd4c55e4cdaa9/example_copy/Aidsun_552",
        success: (res) => {
          formatAppLog("log", "at pages/shequhuodong/shequhuodong.vue:52", res.data.data.lbt);
          let _data = res.data.data.lbt;
          list.value = _data;
        },
        fail(err) {
          formatAppLog("log", "at pages/shequhuodong/shequhuodong.vue:57", "无网络连接！");
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { id: "swiper" }, [
              vue.createElementVNode("swiper", {
                "indicator-dots": true,
                autoplay: true,
                interval: 3e3,
                duration: 1e3
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(list), (img) => {
                    return vue.openBlock(), vue.createElementBlock("swiper-item", { key: img }, [
                      vue.createElementVNode("img", {
                        src: img.img,
                        mode: "scaleToFill"
                      }, null, 8, ["src"])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            vue.createCommentVNode(" 列表部分 "),
            vue.createElementVNode("view", { class: "_list" }, [
              vue.createElementVNode("ul", { class: "list_wrap" }, [
                vue.createElementVNode("li", null, [
                  vue.createElementVNode("img", {
                    src: "/static/image/苹果汁.png",
                    alt: ""
                  }),
                  vue.createElementVNode("label", null, "饮料")
                ]),
                vue.createElementVNode("li", null, [
                  vue.createElementVNode("img", {
                    src: "/static/image/菠菜.png",
                    alt: ""
                  }),
                  vue.createElementVNode("label", null, "蔬菜")
                ]),
                vue.createElementVNode("li", null, [
                  vue.createElementVNode("img", {
                    src: "/static/image/烤肉.png",
                    alt: ""
                  }),
                  vue.createElementVNode("label", null, "肉类")
                ]),
                vue.createElementVNode("li", null, [
                  vue.createElementVNode("img", {
                    src: "/static/image/零食.png",
                    alt: ""
                  }),
                  vue.createElementVNode("label", null, "零食")
                ]),
                vue.createElementVNode("li", null, [
                  vue.createElementVNode("img", {
                    src: "/static/image/苹果.png",
                    alt: ""
                  }),
                  vue.createElementVNode("label", null, "水果")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "messages" }, [
              vue.createElementVNode("view", { class: "message left" }, [
                vue.createElementVNode("img", { src: "https://tse4-mm.cn.bing.net/th/id/OIP-C.WaON72rYgJf0_ua-LdTuDQHaFj?pid=ImgDet&rs=1" }),
                vue.createElementVNode("p", null, "赣南新鲜水果低价清仓大甩卖"),
                vue.createElementVNode("p", null, [
                  vue.createTextVNode("￥56 "),
                  vue.createElementVNode("span", null, "已卖出400+件")
                ])
              ]),
              vue.createElementVNode("view", { class: "message right" })
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesShequhuodongShequhuodong = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "E:/前端4班/精英班/First Uni-app Demo/pages/shequhuodong/shequhuodong.vue"]]);
  const _sfc_main$1 = {
    __name: "enroll",
    setup(__props) {
      let canvasW = vue.ref(100);
      let canvasH = vue.ref(50);
      let code = vue.ref("");
      const clearCode = () => {
        const randomNum = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1) + min);
        };
        const randomColor = (min, max) => {
          let r = randomNum(min, max);
          let g = randomNum(min, max);
          let b = randomNum(min, max);
          return `rgb(${r},${g},${b})`;
        };
        const ctx = uni.createCanvasContext("captcha");
        ctx.fillStyle = randomColor(10, 100);
        ctx.fillRect(0, 0, canvasW.value, canvasH.value);
        let codeArr = [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z"
        ];
        code.value = "";
        for (let i = 0; i < 4; i++) {
          let c = codeArr[randomNum(0, codeArr.length - 1)];
          let _fontSize = randomNum(18, 32);
          let _fontDeg = randomNum(-30, 30);
          ctx.font = _fontSize + "px Arial";
          ctx.textBaseline = "top";
          ctx.fillStyle = randomColor(110, 200);
          ctx.save();
          ctx.translate(20 * i + 9, 25);
          ctx.rotate(_fontDeg * Math.PI / 180);
          ctx.fillText(c, 5, -10);
          ctx.restore();
          code.value += c;
        }
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.moveTo(randomNum(0, canvasW.value), randomNum(0, canvasH.value));
          ctx.lineTo(randomNum(0, canvasW.value), randomNum(0, canvasH.value));
          ctx.strokeStyle = randomColor(180, 230);
          ctx.closePath();
          ctx.stroke();
        }
        for (let i = 0; i < 10; i++) {
          ctx.beginPath();
          ctx.arc(randomNum(0, canvasW.value), randomNum(0, canvasW.value), randomNum(1, 3), 0, 2 * Math.PI);
          ctx.fillStyle = randomColor(150, 222);
          ctx.fill();
        }
        ctx.draw();
      };
      vue.onMounted(() => {
        clearCode();
      });
      const user = vue.reactive({
        "username": "",
        "password": ""
      });
      let iptValue = vue.ref("");
      const _register = () => {
        formatAppLog("log", "at pages/enroll/enroll.vue:145", code.value);
        if (iptValue.value != code.value) {
          uni.showToast({
            title: "验证码错误！",
            icon: "error"
          });
          clearCode();
          iptValue.value = "";
        } else if (iptValue.value.length <= 0) {
          uni.showToast({
            title: "请输入验证码！",
            icon: "error"
          });
          clearCode();
          iptValue.value = "";
        } else {
          if (user.username == "" || user.password == "") {
            uni.showToast({
              title: "账号密码不能为空格",
              icon: "error"
            });
          } else {
            uni.setStorage({
              key: "user",
              data: user,
              success: function() {
                uni.showToast({
                  title: "注册成功",
                  icon: "success"
                });
                uni.switchTab({
                  url: "/pages/login/login"
                });
              }
            });
          }
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { id: "box" }, [
          vue.createElementVNode("view", { id: "enroll_form" }, [
            vue.createElementVNode("view", { id: "name" }, [
              vue.createElementVNode("label", { for: "#" }, "手机号："),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  placeholder: "请输入您的联系方式",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => user.username = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, user.username]
              ])
            ]),
            vue.createElementVNode("view", { id: "password" }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("label", { for: "#" }, "密码："),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    id: "newpassword",
                    type: "password",
                    placeholder: "请输入您的密码",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => user.password = $event)
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, user.password]
                ])
              ]),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("label", { for: "#" }, "确认密码："),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    id: "repeatpassword",
                    type: "password",
                    placeholder: "请再次输入您的密码",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => user.password = $event)
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, user.password]
                ])
              ])
            ]),
            vue.createElementVNode("view", { id: "yzm" }, [
              vue.createCommentVNode(" 输入框 "),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  id: "ipt",
                  placeholder: "请输入验证码",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(iptValue) ? iptValue.value = $event : iptValue = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, vue.unref(iptValue)]
              ]),
              vue.createCommentVNode(" 验证码画布 "),
              vue.createElementVNode("view", null, [
                vue.createElementVNode(
                  "canvas",
                  {
                    "canvas-id": "captcha",
                    style: vue.normalizeStyle({ width: vue.unref(canvasW) + "px", height: vue.unref(canvasH) + "px" })
                  },
                  null,
                  4
                  /* STYLE */
                ),
                vue.createElementVNode("a", {
                  href: "javascript:;",
                  onClick: clearCode
                }, "看不清？换一张")
              ])
            ])
          ]),
          vue.createElementVNode("view", { id: "Transform" }, [
            vue.createElementVNode("navigator", { url: "/pages/login/login" }, [
              vue.createElementVNode("button", {
                type: "default",
                onClick: _register
              }, "注册")
            ])
          ])
        ]);
      };
    }
  };
  const PagesEnrollEnroll = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "E:/前端4班/精英班/First Uni-app Demo/pages/enroll/enroll.vue"]]);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/shouye/shouye", PagesShouyeShouye);
  __definePage("pages/xiaoxi/xiaoxi", PagesXiaoxiXiaoxi);
  __definePage("pages/dianpu/dianpu", PagesDianpuDianpu);
  __definePage("pages/gerenzhongxin/gerenzhongxin", PagesGerenzhongxinGerenzhongxin);
  __definePage("pages/shequhuodong/shequhuodong", PagesShequhuodongShequhuodong);
  __definePage("pages/enroll/enroll", PagesEnrollEnroll);
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
})(Vue, uni.VueShared);

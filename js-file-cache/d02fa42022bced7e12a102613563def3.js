"use strict";

function _classCallCheck(e, n) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
var _createClass = cc11001100_hook("_createClass", function () {
  function e(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var t = cc11001100_hook("t", 0, "var-init"); t < n.length; t++) {
      var a = cc11001100_hook("a", n[t], "var-init");
      a.enumerable = cc11001100_hook("a.enumerable", a.enumerable || !1, "assign"), a.configurable = cc11001100_hook("a.configurable", !0, "assign"), "value" in a && (a.writable = cc11001100_hook("a.writable", !0, "assign")), Object.defineProperty(e, a.key, a);
    }
  }
  return function (n, t, a) {
    return t && e(n.prototype, t), a && e(n, a), n;
  };
}(), "var-init");
!function () {
  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    var n = cc11001100_hook("n", new Date(), "var-init");
    document.cookie = cc11001100_hook("document.cookie", e + "=" + escape("1") + ";max-age=0;expires=" + n.toGMTString() + ";domain=.csdn.net;path=/", "assign");
  }
  function n() {
    void 0, t("adblock", {
      step: cc11001100_hook("step", "install", "object-key-init")
    }), function () {
      var e = cc11001100_hook("e", new Date(), "var-init");
      e.setDate(e.getDate() + 7), document.cookie = cc11001100_hook("document.cookie", "c_adb=1; expires=" + e.toGMTString() + "; domain=csdn.net; path=/", "assign");
    }(), "function" == typeof window.csdn.insertcallbackBlock && window.csdn.insertcallbackBlock();
  }
  function t(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", window.location.protocol + "//statistic.csdn.net/", "var-init");
    $.get(t + e, n);
  }
  var a = cc11001100_hook("a", new Image(), "var-init");
  a.src = cc11001100_hook("a.src", "https://g.csdnimg.cn/ads/ads.gif", "assign"), a.onload = cc11001100_hook("a.onload", function () {
    void 0, e("c_adb");
  }, "assign"), a.onerror = cc11001100_hook("a.onerror", function () {
    n();
  }, "assign");
}(), function () {
  function e() {
    var e = cc11001100_hook("e", document.querySelector('meta[name="csdnFooter"]'), "var-init");
    if (e) {
      var n = cc11001100_hook("n", JSON.parse(e.getAttribute("content")), "var-init");
      return Object.assign({
        el: cc11001100_hook("el", document.querySelector("body"), "object-key-init"),
        type: cc11001100_hook("type", 1, "object-key-init")
      }, n);
    }
  }
  var n = cc11001100_hook("n", "http" === location.protocol.substr(0, 4) ? "" : "https:", "var-init"),
    t = cc11001100_hook("t", n + "//g.csdnimg.cn/common/csdn-footer/csdn-footer.css", "var-init"),
    a = cc11001100_hook("a", n + "//g.csdnimg.cn/common/csdn-footer/images", "var-init"),
    i = cc11001100_hook("i", new Date().getFullYear(), "var-init");
  if (window.csdn = cc11001100_hook("window.csdn", window.csdn || {}, "assign"), window.csdn.csdnFooter = cc11001100_hook("window.csdn.csdnFooter", window.csdn.csdnFooter || {}, "assign"), !csdn.trackad) {
    var l = cc11001100_hook("l", document.createElement("script"), "var-init");
    l.type = cc11001100_hook("l.type", "text/javascript", "assign"), l.async = cc11001100_hook("l.async", !0, "assign"), l.src = cc11001100_hook("l.src", "https://g.csdnimg.cn/asdf/1.1.3/trackad.js", "assign");
    var r = cc11001100_hook("r", document.getElementsByTagName("script")[0], "var-init");
    r.parentNode.insertBefore(l, r);
  }
  var o = cc11001100_hook("o", function () {
    function e() {
      var n = cc11001100_hook("n", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
        a = cc11001100_hook("a", n.el, "var-init"),
        i = cc11001100_hook("i", void 0 === a ? document.querySelector("body") : a, "var-init"),
        l = cc11001100_hook("l", n.type, "var-init"),
        r = cc11001100_hook("r", void 0 === l ? 1 : l, "var-init");
      _classCallCheck(this, e), this.el = cc11001100_hook("this.el", this.queryEl(i), "assign"), this.setType(r), this.importCss(t), this.render();
    }
    return _createClass(e, [{
      key: cc11001100_hook("key", "render", "object-key-init"),
      value: function () {
        3 === this.type ? this.renderVerticalFooter() : this.renderHorizontalFooter();
      }
    }, {
      key: cc11001100_hook("key", "renderVerticalFooter", "object-key-init"),
      value: function () {
        var e = cc11001100_hook("e", '\n        <div id="csdn-copyright-footer" class="side' + (this.isDark() ? " dark dark1" : "") + '">\n          <div class="copyright-footer-contact">\n            <div class="work-time">联系我们（工作时间：8:30-22:00）</div>\n            <div class="work-time">400-660-0108<a class="link" href="mailto:webmaster@csdn.net" target="_blank">kefu@csdn.net</a><a class="link" href="https://csdn.s2.udesk.cn/im_client/?web_plugin_id=29181" target="_blank">在线客服</a></div>\n          </div>\n          <ul class="copyright-footer-middle">\n            <li><a href="//www.csdn.net/company/index.html#about" target="_blank">关于我们</a></li>\n            <li class="line"></li>\n            <li><a href="//www.csdn.net/company/index.html#recruit" target="_blank">招贤纳士</a></li>\n            <li class="line"></li>\n            <li><a href="//marketing.csdn.net/questions/Q2202181741262323995" target="_blank">商务合作</a></li>\n            <li class="line"></li>\n            <li><a href="//marketing.csdn.net/questions/Q2202181748074189855" target="_blank">寻求报道</a></li>\n          </ul>\n          <ul class="copyright-footer-info">\n            <li><a href="http://beian.miit.gov.cn/publish/query/indexFirst.action" rel="noreferrer" target="_blank">京ICP备19004658号</a></li>\n            <li><a href="https://csdnimg.cn/cdn/content-toolbar/csdn-ICP.png" target="_blank">经营性网站备案信息</a></li>\n            <li><img src="' + a + '/badge.png" alt=""><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502030143" rel="noreferrer" target="_blank">公安备案号11010502030143</a></li>\n            <li><a href="https://csdnimg.cn/release/live_fe/culture_license.png" rel="noreferrer" target="_blank">京网文〔2020〕1039-165号</a></li>\n            <li><a href="https://img-home.csdnimg.cn/images/20210414021142.jpg" target="_blank">营业执照</a></li>\n            <li><a href="http://www.bjjubao.org/" target="_blank">北京互联网违法和不良信息举报中心</a></li>\n            <li><a href="https://download.csdn.net/tutelage/home" target="_blank">家长监护</a></li>\n            <li><a href="http://www.12377.cn/" target="_blank">中国互联网举报中心</a></li>\n            <li><a href="http://www.cyberpolice.cn/" target="_blank">网络110报警服务</a></li>\n            <li><a href="https://chrome.google.com/webstore/detail/csdn%E5%BC%80%E5%8F%91%E8%80%85%E5%8A%A9%E6%89%8B/kfkdboecolemdjodhmhmcibjocfopejo?hl=zh-CN" target="_blank">Chrome商店下载</a></li>\n            <li><a href="https://blog.csdn.net/blogdevteam/article/details/126135357" target="_blank">账号管理规范</a></li>\n            <li><a href="https://www.csdn.net/company/index.html#statement" target="_blank">版权与免责声明</a></li>\n            <li><a href="https://blog.csdn.net/blogdevteam/article/details/90369522" target="_blank">版权申诉</a></li>\n            <li><a href="https://img-home.csdnimg.cn/images/20220705052819.png" target="_blank">出版物许可证</a></li>\n            <li class="compact">©1999-' + i + "北京创新乐知网络技术有限公司</li>\n          </ul>\n        </div>\n      ", "var-init");
        $(this.el).append(e);
      }
    }, {
      key: cc11001100_hook("key", "renderHorizontalFooter", "object-key-init"),
      value: function () {
        var e = cc11001100_hook("e", '\n        <div id="copyright-box" class="' + (this.isDark() ? "dark" : "") + '">\n          <div id="csdn-copyright-footer" class="column' + (2 === this.type ? " small" : "") + (this.isDark() ? " dark" : "") + '">\n            <ul class="footer-column-t">\n            <li>\n              <a href="//www.csdn.net/company/index.html#about" target="_blank">关于我们</a>\n            </li>\n            <li>\n              <a href="//www.csdn.net/company/index.html#recruit" target="_blank">招贤纳士</a>\n            </li>\n            <li><a href="//marketing.csdn.net/questions/Q2202181741262323995" target="_blank">商务合作</a></li>\n            <li><a href="//marketing.csdn.net/questions/Q2202181748074189855" target="_blank">寻求报道</a></li>\n            <li>\n              <img src="' + a + '/tel.png" alt="">\n              <span>400-660-0108</span>\n            </li>\n            <li>\n              <img src="' + a + '/email.png" alt="">\n              <a href="mailto:webmaster@csdn.net" target="_blank">kefu@csdn.net</a>\n            </li>\n            <li>\n              <img src="' + a + '/cs.png" alt="">\n              <a href="https://csdn.s2.udesk.cn/im_client/?web_plugin_id=29181" target="_blank">在线客服</a>\n            </li>\n            <li>\n              工作时间&nbsp;8:30-22:00</a>\n            </li>\n          </ul>\n            <ul class="footer-column-b">\n            <li><img src="' + a + '/badge.png" alt=""><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502030143" rel="noreferrer" target="_blank">公安备案号11010502030143</a></li>\n            <li><a href="http://beian.miit.gov.cn/publish/query/indexFirst.action" rel="noreferrer" target="_blank">京ICP备19004658号</a></li>\n            <li><a href="https://csdnimg.cn/release/live_fe/culture_license.png" rel="noreferrer" target="_blank">京网文〔2020〕1039-165号</a></li>\n            <li><a href="https://csdnimg.cn/cdn/content-toolbar/csdn-ICP.png" target="_blank">经营性网站备案信息</a></li>\n            <li><a href="http://www.bjjubao.org/" target="_blank">北京互联网违法和不良信息举报中心</a></li>\n            <li><a href="https://download.csdn.net/tutelage/home" target="_blank">家长监护</a></li>\n            <li><a href="http://www.cyberpolice.cn/" target="_blank">网络110报警服务</a></li>\n            <li><a href="http://www.12377.cn/" target="_blank">中国互联网举报中心</a></li>\n            <li><a href="https://chrome.google.com/webstore/detail/csdn%E5%BC%80%E5%8F%91%E8%80%85%E5%8A%A9%E6%89%8B/kfkdboecolemdjodhmhmcibjocfopejo?hl=zh-CN" target="_blank">Chrome商店下载</a></li>\n            <li><a href="https://blog.csdn.net/blogdevteam/article/details/126135357" target="_blank">账号管理规范</a></li>\n            <li><a href="https://www.csdn.net/company/index.html#statement" target="_blank">版权与免责声明</a></li>\n            <li><a href="https://blog.csdn.net/blogdevteam/article/details/90369522" target="_blank">版权申诉</a></li>\n            <li><a href="https://img-home.csdnimg.cn/images/20220705052819.png" target="_blank">出版物许可证</a></li>\n            <li><a href="https://img-home.csdnimg.cn/images/20210414021142.jpg" target="_blank">营业执照</a></li>\n            <li>©1999-' + i + "北京创新乐知网络技术有限公司</li>\n          </ul>\n          </div>\n        </div>\n      ", "var-init");
        $(this.el).append(e);
      }
    }, {
      key: cc11001100_hook("key", "queryEl", "object-key-init"),
      value: function (e) {
        if ("string" == typeof e) {
          var n = cc11001100_hook("n", document.querySelector(e), "var-init");
          return n || void 0, n;
        }
        return e;
      }
    }, {
      key: cc11001100_hook("key", "setType", "object-key-init"),
      value: function (e) {
        1 == e || 2 == e || 3 == e ? this.type = cc11001100_hook("this.type", Number(e), "assign") : void 0;
      }
    }, {
      key: cc11001100_hook("key", "isDark", "object-key-init"),
      value: function () {
        var e = cc11001100_hook("e", document.querySelector('meta[name="toolbar"]'), "var-init"),
          n = cc11001100_hook("n", e && JSON.parse(e.getAttribute("content")).type, "var-init");
        return window.csdn.toolbarIsBlack || "1" === n;
      }
    }, {
      key: cc11001100_hook("key", "importCss", "object-key-init"),
      value: function (e) {
        var n = cc11001100_hook("n", document.createElement("link"), "var-init");
        n.rel = cc11001100_hook("n.rel", "stylesheet", "assign"), n.type = cc11001100_hook("n.type", "text/css", "assign"), n.href = cc11001100_hook("n.href", e, "assign"), document.getElementsByTagName("head")[0].appendChild(n);
      }
    }]), e;
  }(), "var-init");
  $(function () {
    var n = cc11001100_hook("n", e(), "var-init");
    new o(n || window.csdn.csdnFooter.options);
  });
}();
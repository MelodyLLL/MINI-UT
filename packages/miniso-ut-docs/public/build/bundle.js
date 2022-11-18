var app = (function () {
  'use strict'
  function n() {}
  function t(n) {
    return n()
  }
  function s() {
    return Object.create(null)
  }
  function e(n) {
    n.forEach(t)
  }
  function a(n) {
    return 'function' == typeof n
  }
  function r(n, t) {
    return n != n
      ? t == t
      : n !== t || (n && 'object' == typeof n) || 'function' == typeof n
  }
  function l(n, t) {
    n.appendChild(t)
  }
  function o(n, t, s) {
    n.insertBefore(t, s || null)
  }
  function c(n) {
    n.parentNode.removeChild(n)
  }
  function d(n) {
    return document.createElement(n)
  }
  function i() {
    return (n = ' '), document.createTextNode(n)
    var n
  }
  function p(n, t, s) {
    null == s
      ? n.removeAttribute(t)
      : n.getAttribute(t) !== s && n.setAttribute(t, s)
  }
  let u
  function h(n) {
    u = n
  }
  function f(n) {
    ;(function () {
      if (!u)
        throw new Error('Function called outside component initialization')
      return u
    })().$$.on_mount.push(n)
  }
  const m = [],
    g = [],
    $ = [],
    v = [],
    j = Promise.resolve()
  let x = !1
  function _(n) {
    $.push(n)
  }
  const y = new Set()
  let w = 0
  function b() {
    const n = u
    do {
      for (; w < m.length; ) {
        const n = m[w]
        w++, h(n), k(n.$$)
      }
      for (h(null), m.length = 0, w = 0; g.length; ) g.pop()()
      for (let n = 0; n < $.length; n += 1) {
        const t = $[n]
        y.has(t) || (y.add(t), t())
      }
      $.length = 0
    } while (m.length)
    for (; v.length; ) v.pop()()
    ;(x = !1), y.clear(), h(n)
  }
  function k(n) {
    if (null !== n.fragment) {
      n.update(), e(n.before_update)
      const t = n.dirty
      ;(n.dirty = [-1]),
        n.fragment && n.fragment.p(n.ctx, t),
        n.after_update.forEach(_)
    }
  }
  const A = new Set()
  function C(n, t) {
    n && n.i && (A.delete(n), n.i(t))
  }
  function q(n, t, s, e) {
    if (n && n.o) {
      if (A.has(n)) return
      A.add(n),
        undefined.c.push(() => {
          A.delete(n), e && (s && n.d(1), e())
        }),
        n.o(t)
    } else e && e()
  }
  function D(n) {
    n && n.c()
  }
  function E(n, s, r, l) {
    const { fragment: o, after_update: c } = n.$$
    o && o.m(s, r),
      l ||
        _(() => {
          const s = n.$$.on_mount.map(t).filter(a)
          n.$$.on_destroy ? n.$$.on_destroy.push(...s) : e(s),
            (n.$$.on_mount = [])
        }),
      c.forEach(_)
  }
  function S(n, t) {
    const s = n.$$
    null !== s.fragment &&
      (e(s.on_destroy),
      s.fragment && s.fragment.d(t),
      (s.on_destroy = s.fragment = null),
      (s.ctx = []))
  }
  function M(n, t) {
    ;-1 === n.$$.dirty[0] &&
      (m.push(n), x || ((x = !0), j.then(b)), n.$$.dirty.fill(0)),
      (n.$$.dirty[(t / 31) | 0] |= 1 << t % 31)
  }
  function N(t, a, r, l, o, d, i, p = [-1]) {
    const f = u
    h(t)
    const m = (t.$$ = {
      fragment: null,
      ctx: [],
      props: d,
      update: n,
      not_equal: o,
      bound: s(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(a.context || (f ? f.$$.context : [])),
      callbacks: s(),
      dirty: p,
      skip_bound: !1,
      root: a.target || f.$$.root
    })
    i && i(m.root)
    let g = !1
    if (
      ((m.ctx = r
        ? r(t, a.props || {}, (n, s, ...e) => {
            const a = e.length ? e[0] : s
            return (
              m.ctx &&
                o(m.ctx[n], (m.ctx[n] = a)) &&
                (!m.skip_bound && m.bound[n] && m.bound[n](a), g && M(t, n)),
              s
            )
          })
        : []),
      m.update(),
      (g = !0),
      e(m.before_update),
      (m.fragment = !!l && l(m.ctx)),
      a.target)
    ) {
      if (a.hydrate) {
        const n = (function (n) {
          return Array.from(n.childNodes)
        })(a.target)
        m.fragment && m.fragment.l(n), n.forEach(c)
      } else m.fragment && m.fragment.c()
      a.intro && C(t.$$.fragment),
        E(t, a.target, a.anchor, a.customElement),
        b()
    }
    h(f)
  }
  class I {
    $destroy() {
      S(this, 1), (this.$destroy = n)
    }
    $on(t, s) {
      if (!a(s)) return n
      const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = [])
      return (
        e.push(s),
        () => {
          const n = e.indexOf(s)
          ;-1 !== n && e.splice(n, 1)
        }
      )
    }
    $set(n) {
      var t
      this.$$set &&
        ((t = n), 0 !== Object.keys(t).length) &&
        ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1))
    }
  }
  function T(t) {
    let s
    return {
      c() {
        ;(s = d('header')), p(s, 'class', 'red svelte-h6jsc2')
      },
      m(n, t) {
        o(n, s, t)
      },
      p: n,
      i: n,
      o: n,
      d(n) {
        n && c(s)
      }
    }
  }
  class O extends I {
    constructor(n) {
      super(), N(this, n, null, T, r, {})
    }
  }
  function B(t) {
    let s
    return {
      c() {
        ;(s = d('footer')),
          (s.innerHTML =
            '<div class="copyright svelte-89spop">Copyright 2022 Melody</div>'),
          p(s, 'class', 'svelte-89spop')
      },
      m(n, t) {
        o(n, s, t)
      },
      p: n,
      i: n,
      o: n,
      d(n) {
        n && c(s)
      }
    }
  }
  class H extends I {
    constructor(n) {
      super(), N(this, n, null, B, r, {})
    }
  }
  function L(t) {
    let s
    return {
      c() {
        ;(s = d('div')),
          p(s, 'id', 'markdown_container'),
          p(s, 'class', 'markdown_container_cls')
      },
      m(n, t) {
        o(n, s, t)
      },
      p: n,
      i: n,
      o: n,
      d(n) {
        n && c(s)
      }
    }
  }
  function z(n) {
    return (
      f(() => {
        const n = new DOMParser().parseFromString(
          '<h1>Divider 分隔符</h1>\n<hr />\n<p>分割内容提示符</p>\n<h2>使用指南</h2>\n<p>在 Taro 文件中引入组件</p>\n\n            <div class="md_code_wrapper">\n              <div class="md_code_inner"><pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-title class_">AtDivider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;taro-ui&#x27;</span>\n</code></pre>\n\n          </div>\n        </div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p>\n\n            <div class="md_code_wrapper">\n              <div class="md_code_inner"><pre class="hljs"><code><span class="hljs-keyword">@import</span> <span class="hljs-string">&quot;~taro-ui/dist/style/components/divider.scss&quot;</span>;\n<span class="hljs-keyword">@import</span> <span class="hljs-string">&quot;~taro-ui/dist/style/components/icon.scss&quot;</span>;\n</code></pre>\n\n          </div>\n        </div><h2>一般用法</h2>\n\n            <div class="md_code_wrapper">\n              <div class="md_code_inner"><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">AtDivider</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&#x27;分割线&#x27;</span> /&gt;</span>\n</code></pre>\n\n          </div>\n        </div><h2>自定义颜色</h2>\n\n            <div class="md_code_wrapper">\n              <div class="md_code_inner"><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">AtDivider</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&#x27;没有更多了&#x27;</span> <span class="hljs-attr">fontColor</span>=<span class="hljs-string">&#x27;#ed3f14&#x27;</span> <span class="hljs-attr">lineColor</span>=<span class="hljs-string">&#x27;#ed3f14&#x27;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">AtDivider</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&#x27;没有更多了&#x27;</span> <span class="hljs-attr">fontColor</span>=<span class="hljs-string">&#x27;#ff9900&#x27;</span> <span class="hljs-attr">lineColor</span>=<span class="hljs-string">&#x27;#ff9900&#x27;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">AtDivider</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&#x27;没有更多了&#x27;</span> <span class="hljs-attr">fontColor</span>=<span class="hljs-string">&#x27;#2d8cf0&#x27;</span> <span class="hljs-attr">lineColor</span>=<span class="hljs-string">&#x27;#2d8cf0&#x27;</span> /&gt;</span>\n</code></pre>\n\n          </div>\n        </div><h2>自定义内容</h2>\n<p>说明：只有当 content 为空时，才能嵌套子组件</p>\n\n            <div class="md_code_wrapper">\n              <div class="md_code_inner"><pre class="hljs"><code>/* import { AtDivider,AtIcon } from &#x27;taro-ui&#x27; */\n<span class="hljs-tag">&lt;<span class="hljs-name">AtDivider</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">AtIcon</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&#x27;check-circle&#x27;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">AtIcon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">AtDivider</span>&gt;</span>\n</code></pre>\n\n          </div>\n        </div><h2>参数</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>分隔符文字</td>\n<td>String</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>height</td>\n<td>分隔符高度，会自动转 rem,rpx</td>\n<td>String or Number</td>\n<td>-</td>\n<td>112</td>\n</tr>\n<tr>\n<td>fontColor</td>\n<td>文字颜色</td>\n<td>String</td>\n<td>-</td>\n<td>#6190E8</td>\n</tr>\n<tr>\n<td>fontSize</td>\n<td>文字大小，会自动转 rem,rpx</td>\n<td>String or Number</td>\n<td>-</td>\n<td>32</td>\n</tr>\n<tr>\n<td>lineColor</td>\n<td>分割线颜色</td>\n<td>String</td>\n<td>-</td>\n<td>#CCC</td>\n</tr>\n</tbody>\n</table>\n',
          'text/html'
        )
        document
          .getElementById('markdown_container')
          .appendChild(n.documentElement.childNodes[1])
      }),
      []
    )
  }
  class F extends I {
    constructor(n) {
      super(), N(this, n, z, L, r, {})
    }
  }
  function P(t) {
    let s, e, a, r, u, h, f, m, g
    return (
      (r = new F({})),
      (h = new H({})),
      {
        c() {
          ;(s = d('main')),
            (e = d('div')),
            (a = d('div')),
            D(r.$$.fragment),
            (u = i()),
            D(h.$$.fragment),
            (f = i()),
            (m = d('div')),
            (m.innerHTML =
              '<iframe title="h5" src="http://0.0.0.0:10086/#/pages/basic/button/index"></iframe> \n    <div class="iphone-frame"></div>'),
            p(a, 'class', 'docs_wrapper'),
            p(e, 'class', 'main_wrapper svelte-1g8wy8j'),
            p(m, 'class', 'demo-frame'),
            p(s, 'class', 'svelte-1g8wy8j')
        },
        m(n, t) {
          o(n, s, t),
            l(s, e),
            l(e, a),
            E(r, a, null),
            l(e, u),
            E(h, e, null),
            l(s, f),
            l(s, m),
            (g = !0)
        },
        p: n,
        i(n) {
          g || (C(r.$$.fragment, n), C(h.$$.fragment, n), (g = !0))
        },
        o(n) {
          q(r.$$.fragment, n), q(h.$$.fragment, n), (g = !1)
        },
        d(n) {
          n && c(s), S(r), S(h)
        }
      }
    )
  }
  class U extends I {
    constructor(n) {
      super(), N(this, n, null, P, r, {})
    }
  }
  function G(t) {
    let s
    return {
      c() {
        ;(s = d('div')),
          (s.innerHTML =
            '<div class="tab svelte-1sgksqf"><div class="tab_inner flex svelte-1sgksqf"><div class="svelte-1sgksqf">工具库</div> \n      <div class="svelte-1sgksqf">UI库</div> \n      <div class="svelte-1sgksqf">关于</div></div></div> \n  <div class="inner svelte-1sgksqf"></div>'),
          p(s, 'class', 'siderBar svelte-1sgksqf')
      },
      m(n, t) {
        o(n, s, t)
      },
      p: n,
      i: n,
      o: n,
      d(n) {
        n && c(s)
      }
    }
  }
  class J extends I {
    constructor(n) {
      super(), N(this, n, null, G, r, {})
    }
  }
  function K(t) {
    let s, e, a, r, u, h, f, m
    return (
      (e = new O({})),
      (u = new U({})),
      (f = new J({})),
      {
        c() {
          ;(s = d('div')),
            D(e.$$.fragment),
            (a = i()),
            (r = d('div')),
            D(u.$$.fragment),
            (h = i()),
            D(f.$$.fragment),
            p(r, 'class', 'content'),
            p(s, 'class', 'wrapper')
        },
        m(n, t) {
          o(n, s, t),
            E(e, s, null),
            l(s, a),
            l(s, r),
            E(u, r, null),
            l(r, h),
            E(f, r, null),
            (m = !0)
        },
        p: n,
        i(n) {
          m ||
            (C(e.$$.fragment, n),
            C(u.$$.fragment, n),
            C(f.$$.fragment, n),
            (m = !0))
        },
        o(n) {
          q(e.$$.fragment, n),
            q(u.$$.fragment, n),
            q(f.$$.fragment, n),
            (m = !1)
        },
        d(n) {
          n && c(s), S(e), S(u), S(f)
        }
      }
    )
  }
  return new (class extends I {
    constructor(n) {
      super(), N(this, n, null, K, r, {})
    }
  })({ target: document.body, props: { name: 'world' } })
})()
//# sourceMappingURL=bundle.js.map

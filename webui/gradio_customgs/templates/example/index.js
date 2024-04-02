const {
  SvelteComponent: u,
  append: c,
  attr: d,
  detach: g,
  element: v,
  init: o,
  insert: r,
  noop: f,
  safe_not_equal: y,
  set_data: m,
  text: b,
  toggle_class: _
} = window.__gradio__svelte__internal;
function w(a) {
  let e, n = (
    /*value*/
    (a[0] ? (
      /*value*/
      a[0]
    ) : "") + ""
  ), s;
  return {
    c() {
      e = v("div"), s = b(n), d(e, "class", "svelte-1gecy8w"), _(
        e,
        "table",
        /*type*/
        a[1] === "table"
      ), _(
        e,
        "gallery",
        /*type*/
        a[1] === "gallery"
      ), _(
        e,
        "selected",
        /*selected*/
        a[2]
      );
    },
    m(t, l) {
      r(t, e, l), c(e, s);
    },
    p(t, [l]) {
      l & /*value*/
      1 && n !== (n = /*value*/
      (t[0] ? (
        /*value*/
        t[0]
      ) : "") + "") && m(s, n), l & /*type*/
      2 && _(
        e,
        "table",
        /*type*/
        t[1] === "table"
      ), l & /*type*/
      2 && _(
        e,
        "gallery",
        /*type*/
        t[1] === "gallery"
      ), l & /*selected*/
      4 && _(
        e,
        "selected",
        /*selected*/
        t[2]
      );
    },
    i: f,
    o: f,
    d(t) {
      t && g(e);
    }
  };
}
function h(a, e, n) {
  let { value: s } = e, { type: t } = e, { selected: l = !1 } = e;
  return a.$$set = (i) => {
    "value" in i && n(0, s = i.value), "type" in i && n(1, t = i.type), "selected" in i && n(2, l = i.selected);
  }, [s, t, l];
}
class E extends u {
  constructor(e) {
    super(), o(this, e, h, w, y, { value: 0, type: 1, selected: 2 });
  }
}
export {
  E as default
};

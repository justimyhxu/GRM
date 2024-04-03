const {
  SvelteComponent: Ml,
  assign: Rl,
  create_slot: Ul,
  detach: Fl,
  element: Gl,
  get_all_dirty_from_scope: jl,
  get_slot_changes: ql,
  get_spread_update: zl,
  init: Vl,
  insert: Xl,
  safe_not_equal: Wl,
  set_dynamic_element_data: Kr,
  set_style: he,
  toggle_class: je,
  transition_in: po,
  transition_out: go,
  update_slot_base: Zl
} = window.__gradio__svelte__internal;
function xl(e) {
  let t, n, r;
  const i = (
    /*#slots*/
    e[18].default
  ), o = Ul(
    i,
    e,
    /*$$scope*/
    e[17],
    null
  );
  let l = [
    { "data-testid": (
      /*test_id*/
      e[7]
    ) },
    { id: (
      /*elem_id*/
      e[2]
    ) },
    {
      class: n = "block " + /*elem_classes*/
      e[3].join(" ") + " svelte-1t38q2d"
    }
  ], a = {};
  for (let s = 0; s < l.length; s += 1)
    a = Rl(a, l[s]);
  return {
    c() {
      t = Gl(
        /*tag*/
        e[14]
      ), o && o.c(), Kr(
        /*tag*/
        e[14]
      )(t, a), je(
        t,
        "hidden",
        /*visible*/
        e[10] === !1
      ), je(
        t,
        "padded",
        /*padding*/
        e[6]
      ), je(
        t,
        "border_focus",
        /*border_mode*/
        e[5] === "focus"
      ), je(t, "hide-container", !/*explicit_call*/
      e[8] && !/*container*/
      e[9]), he(
        t,
        "height",
        /*get_dimension*/
        e[15](
          /*height*/
          e[0]
        )
      ), he(t, "width", typeof /*width*/
      e[1] == "number" ? `calc(min(${/*width*/
      e[1]}px, 100%))` : (
        /*get_dimension*/
        e[15](
          /*width*/
          e[1]
        )
      )), he(
        t,
        "border-style",
        /*variant*/
        e[4]
      ), he(
        t,
        "overflow",
        /*allow_overflow*/
        e[11] ? "visible" : "hidden"
      ), he(
        t,
        "flex-grow",
        /*scale*/
        e[12]
      ), he(t, "min-width", `calc(min(${/*min_width*/
      e[13]}px, 100%))`), he(t, "border-width", "var(--block-border-width)");
    },
    m(s, u) {
      Xl(s, t, u), o && o.m(t, null), r = !0;
    },
    p(s, u) {
      o && o.p && (!r || u & /*$$scope*/
      131072) && Zl(
        o,
        i,
        s,
        /*$$scope*/
        s[17],
        r ? ql(
          i,
          /*$$scope*/
          s[17],
          u,
          null
        ) : jl(
          /*$$scope*/
          s[17]
        ),
        null
      ), Kr(
        /*tag*/
        s[14]
      )(t, a = zl(l, [
        (!r || u & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          s[7]
        ) },
        (!r || u & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          s[2]
        ) },
        (!r || u & /*elem_classes*/
        8 && n !== (n = "block " + /*elem_classes*/
        s[3].join(" ") + " svelte-1t38q2d")) && { class: n }
      ])), je(
        t,
        "hidden",
        /*visible*/
        s[10] === !1
      ), je(
        t,
        "padded",
        /*padding*/
        s[6]
      ), je(
        t,
        "border_focus",
        /*border_mode*/
        s[5] === "focus"
      ), je(t, "hide-container", !/*explicit_call*/
      s[8] && !/*container*/
      s[9]), u & /*height*/
      1 && he(
        t,
        "height",
        /*get_dimension*/
        s[15](
          /*height*/
          s[0]
        )
      ), u & /*width*/
      2 && he(t, "width", typeof /*width*/
      s[1] == "number" ? `calc(min(${/*width*/
      s[1]}px, 100%))` : (
        /*get_dimension*/
        s[15](
          /*width*/
          s[1]
        )
      )), u & /*variant*/
      16 && he(
        t,
        "border-style",
        /*variant*/
        s[4]
      ), u & /*allow_overflow*/
      2048 && he(
        t,
        "overflow",
        /*allow_overflow*/
        s[11] ? "visible" : "hidden"
      ), u & /*scale*/
      4096 && he(
        t,
        "flex-grow",
        /*scale*/
        s[12]
      ), u & /*min_width*/
      8192 && he(t, "min-width", `calc(min(${/*min_width*/
      s[13]}px, 100%))`);
    },
    i(s) {
      r || (po(o, s), r = !0);
    },
    o(s) {
      go(o, s), r = !1;
    },
    d(s) {
      s && Fl(t), o && o.d(s);
    }
  };
}
function Jl(e) {
  let t, n = (
    /*tag*/
    e[14] && xl(e)
  );
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), t = !0;
    },
    p(r, [i]) {
      /*tag*/
      r[14] && n.p(r, i);
    },
    i(r) {
      t || (po(n, r), t = !0);
    },
    o(r) {
      go(n, r), t = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Ql(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { height: o = void 0 } = t, { width: l = void 0 } = t, { elem_id: a = "" } = t, { elem_classes: s = [] } = t, { variant: u = "solid" } = t, { border_mode: f = "base" } = t, { padding: c = !0 } = t, { type: _ = "normal" } = t, { test_id: h = void 0 } = t, { explicit_call: d = !1 } = t, { container: p = !0 } = t, { visible: w = !0 } = t, { allow_overflow: v = !0 } = t, { scale: E = null } = t, { min_width: b = 0 } = t, S = _ === "fieldset" ? "fieldset" : "div";
  const H = (g) => {
    if (g !== void 0) {
      if (typeof g == "number")
        return g + "px";
      if (typeof g == "string")
        return g;
    }
  };
  return e.$$set = (g) => {
    "height" in g && n(0, o = g.height), "width" in g && n(1, l = g.width), "elem_id" in g && n(2, a = g.elem_id), "elem_classes" in g && n(3, s = g.elem_classes), "variant" in g && n(4, u = g.variant), "border_mode" in g && n(5, f = g.border_mode), "padding" in g && n(6, c = g.padding), "type" in g && n(16, _ = g.type), "test_id" in g && n(7, h = g.test_id), "explicit_call" in g && n(8, d = g.explicit_call), "container" in g && n(9, p = g.container), "visible" in g && n(10, w = g.visible), "allow_overflow" in g && n(11, v = g.allow_overflow), "scale" in g && n(12, E = g.scale), "min_width" in g && n(13, b = g.min_width), "$$scope" in g && n(17, i = g.$$scope);
  }, [
    o,
    l,
    a,
    s,
    u,
    f,
    c,
    h,
    d,
    p,
    w,
    v,
    E,
    b,
    S,
    H,
    _,
    i,
    r
  ];
}
class bo extends Ml {
  constructor(t) {
    super(), Vl(this, t, Ql, Jl, Wl, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: Yl,
  append: qn,
  attr: on,
  create_component: Kl,
  destroy_component: $l,
  detach: es,
  element: $r,
  init: ts,
  insert: ns,
  mount_component: rs,
  safe_not_equal: is,
  set_data: os,
  space: ls,
  text: ss,
  toggle_class: qe,
  transition_in: as,
  transition_out: us
} = window.__gradio__svelte__internal;
function fs(e) {
  let t, n, r, i, o, l;
  return r = new /*Icon*/
  e[1]({}), {
    c() {
      t = $r("label"), n = $r("span"), Kl(r.$$.fragment), i = ls(), o = ss(
        /*label*/
        e[0]
      ), on(n, "class", "svelte-9gxdi0"), on(t, "for", ""), on(t, "data-testid", "block-label"), on(t, "class", "svelte-9gxdi0"), qe(t, "hide", !/*show_label*/
      e[2]), qe(t, "sr-only", !/*show_label*/
      e[2]), qe(
        t,
        "float",
        /*float*/
        e[4]
      ), qe(
        t,
        "hide-label",
        /*disable*/
        e[3]
      );
    },
    m(a, s) {
      ns(a, t, s), qn(t, n), rs(r, n, null), qn(t, i), qn(t, o), l = !0;
    },
    p(a, [s]) {
      (!l || s & /*label*/
      1) && os(
        o,
        /*label*/
        a[0]
      ), (!l || s & /*show_label*/
      4) && qe(t, "hide", !/*show_label*/
      a[2]), (!l || s & /*show_label*/
      4) && qe(t, "sr-only", !/*show_label*/
      a[2]), (!l || s & /*float*/
      16) && qe(
        t,
        "float",
        /*float*/
        a[4]
      ), (!l || s & /*disable*/
      8) && qe(
        t,
        "hide-label",
        /*disable*/
        a[3]
      );
    },
    i(a) {
      l || (as(r.$$.fragment, a), l = !0);
    },
    o(a) {
      us(r.$$.fragment, a), l = !1;
    },
    d(a) {
      a && es(t), $l(r);
    }
  };
}
function cs(e, t, n) {
  let { label: r = null } = t, { Icon: i } = t, { show_label: o = !0 } = t, { disable: l = !1 } = t, { float: a = !0 } = t;
  return e.$$set = (s) => {
    "label" in s && n(0, r = s.label), "Icon" in s && n(1, i = s.Icon), "show_label" in s && n(2, o = s.show_label), "disable" in s && n(3, l = s.disable), "float" in s && n(4, a = s.float);
  }, [r, i, o, l, a];
}
class Fr extends Yl {
  constructor(t) {
    super(), ts(this, t, cs, fs, is, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: _s,
  append: gr,
  attr: Ue,
  bubble: hs,
  create_component: ds,
  destroy_component: ms,
  detach: wo,
  element: br,
  init: ps,
  insert: vo,
  listen: gs,
  mount_component: bs,
  safe_not_equal: ws,
  set_data: vs,
  set_style: ln,
  space: ys,
  text: Es,
  toggle_class: ge,
  transition_in: Ss,
  transition_out: ks
} = window.__gradio__svelte__internal;
function ei(e) {
  let t, n;
  return {
    c() {
      t = br("span"), n = Es(
        /*label*/
        e[1]
      ), Ue(t, "class", "svelte-lpi64a");
    },
    m(r, i) {
      vo(r, t, i), gr(t, n);
    },
    p(r, i) {
      i & /*label*/
      2 && vs(
        n,
        /*label*/
        r[1]
      );
    },
    d(r) {
      r && wo(t);
    }
  };
}
function Ts(e) {
  let t, n, r, i, o, l, a, s = (
    /*show_label*/
    e[2] && ei(e)
  );
  return i = new /*Icon*/
  e[0]({}), {
    c() {
      t = br("button"), s && s.c(), n = ys(), r = br("div"), ds(i.$$.fragment), Ue(r, "class", "svelte-lpi64a"), ge(
        r,
        "small",
        /*size*/
        e[4] === "small"
      ), ge(
        r,
        "large",
        /*size*/
        e[4] === "large"
      ), t.disabled = /*disabled*/
      e[7], Ue(
        t,
        "aria-label",
        /*label*/
        e[1]
      ), Ue(
        t,
        "aria-haspopup",
        /*hasPopup*/
        e[8]
      ), Ue(
        t,
        "title",
        /*label*/
        e[1]
      ), Ue(t, "class", "svelte-lpi64a"), ge(
        t,
        "pending",
        /*pending*/
        e[3]
      ), ge(
        t,
        "padded",
        /*padded*/
        e[5]
      ), ge(
        t,
        "highlight",
        /*highlight*/
        e[6]
      ), ge(
        t,
        "transparent",
        /*transparent*/
        e[9]
      ), ln(t, "color", !/*disabled*/
      e[7] && /*_color*/
      e[11] ? (
        /*_color*/
        e[11]
      ) : "var(--block-label-text-color)"), ln(t, "--bg-color", /*disabled*/
      e[7] ? "auto" : (
        /*background*/
        e[10]
      ));
    },
    m(u, f) {
      vo(u, t, f), s && s.m(t, null), gr(t, n), gr(t, r), bs(i, r, null), o = !0, l || (a = gs(
        t,
        "click",
        /*click_handler*/
        e[13]
      ), l = !0);
    },
    p(u, [f]) {
      /*show_label*/
      u[2] ? s ? s.p(u, f) : (s = ei(u), s.c(), s.m(t, n)) : s && (s.d(1), s = null), (!o || f & /*size*/
      16) && ge(
        r,
        "small",
        /*size*/
        u[4] === "small"
      ), (!o || f & /*size*/
      16) && ge(
        r,
        "large",
        /*size*/
        u[4] === "large"
      ), (!o || f & /*disabled*/
      128) && (t.disabled = /*disabled*/
      u[7]), (!o || f & /*label*/
      2) && Ue(
        t,
        "aria-label",
        /*label*/
        u[1]
      ), (!o || f & /*hasPopup*/
      256) && Ue(
        t,
        "aria-haspopup",
        /*hasPopup*/
        u[8]
      ), (!o || f & /*label*/
      2) && Ue(
        t,
        "title",
        /*label*/
        u[1]
      ), (!o || f & /*pending*/
      8) && ge(
        t,
        "pending",
        /*pending*/
        u[3]
      ), (!o || f & /*padded*/
      32) && ge(
        t,
        "padded",
        /*padded*/
        u[5]
      ), (!o || f & /*highlight*/
      64) && ge(
        t,
        "highlight",
        /*highlight*/
        u[6]
      ), (!o || f & /*transparent*/
      512) && ge(
        t,
        "transparent",
        /*transparent*/
        u[9]
      ), f & /*disabled, _color*/
      2176 && ln(t, "color", !/*disabled*/
      u[7] && /*_color*/
      u[11] ? (
        /*_color*/
        u[11]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && ln(t, "--bg-color", /*disabled*/
      u[7] ? "auto" : (
        /*background*/
        u[10]
      ));
    },
    i(u) {
      o || (Ss(i.$$.fragment, u), o = !0);
    },
    o(u) {
      ks(i.$$.fragment, u), o = !1;
    },
    d(u) {
      u && wo(t), s && s.d(), ms(i), l = !1, a();
    }
  };
}
function As(e, t, n) {
  let r, { Icon: i } = t, { label: o = "" } = t, { show_label: l = !1 } = t, { pending: a = !1 } = t, { size: s = "small" } = t, { padded: u = !0 } = t, { highlight: f = !1 } = t, { disabled: c = !1 } = t, { hasPopup: _ = !1 } = t, { color: h = "var(--block-label-text-color)" } = t, { transparent: d = !1 } = t, { background: p = "var(--background-fill-primary)" } = t;
  function w(v) {
    hs.call(this, e, v);
  }
  return e.$$set = (v) => {
    "Icon" in v && n(0, i = v.Icon), "label" in v && n(1, o = v.label), "show_label" in v && n(2, l = v.show_label), "pending" in v && n(3, a = v.pending), "size" in v && n(4, s = v.size), "padded" in v && n(5, u = v.padded), "highlight" in v && n(6, f = v.highlight), "disabled" in v && n(7, c = v.disabled), "hasPopup" in v && n(8, _ = v.hasPopup), "color" in v && n(12, h = v.color), "transparent" in v && n(9, d = v.transparent), "background" in v && n(10, p = v.background);
  }, e.$$.update = () => {
    e.$$.dirty & /*highlight, color*/
    4160 && n(11, r = f ? "var(--color-accent)" : h);
  }, [
    i,
    o,
    l,
    a,
    s,
    u,
    f,
    c,
    _,
    d,
    p,
    r,
    h,
    w
  ];
}
class Pt extends _s {
  constructor(t) {
    super(), ps(this, t, As, Ts, ws, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 12,
      transparent: 9,
      background: 10
    });
  }
}
const {
  SvelteComponent: Bs,
  append: Cs,
  attr: zn,
  binding_callbacks: Hs,
  create_slot: Ns,
  detach: Ps,
  element: ti,
  get_all_dirty_from_scope: Is,
  get_slot_changes: Ls,
  init: Os,
  insert: Ds,
  safe_not_equal: Ms,
  toggle_class: ze,
  transition_in: Rs,
  transition_out: Us,
  update_slot_base: Fs
} = window.__gradio__svelte__internal;
function Gs(e) {
  let t, n, r;
  const i = (
    /*#slots*/
    e[5].default
  ), o = Ns(
    i,
    e,
    /*$$scope*/
    e[4],
    null
  );
  return {
    c() {
      t = ti("div"), n = ti("div"), o && o.c(), zn(n, "class", "icon svelte-3w3rth"), zn(t, "class", "empty svelte-3w3rth"), zn(t, "aria-label", "Empty value"), ze(
        t,
        "small",
        /*size*/
        e[0] === "small"
      ), ze(
        t,
        "large",
        /*size*/
        e[0] === "large"
      ), ze(
        t,
        "unpadded_box",
        /*unpadded_box*/
        e[1]
      ), ze(
        t,
        "small_parent",
        /*parent_height*/
        e[3]
      );
    },
    m(l, a) {
      Ds(l, t, a), Cs(t, n), o && o.m(n, null), e[6](t), r = !0;
    },
    p(l, [a]) {
      o && o.p && (!r || a & /*$$scope*/
      16) && Fs(
        o,
        i,
        l,
        /*$$scope*/
        l[4],
        r ? Ls(
          i,
          /*$$scope*/
          l[4],
          a,
          null
        ) : Is(
          /*$$scope*/
          l[4]
        ),
        null
      ), (!r || a & /*size*/
      1) && ze(
        t,
        "small",
        /*size*/
        l[0] === "small"
      ), (!r || a & /*size*/
      1) && ze(
        t,
        "large",
        /*size*/
        l[0] === "large"
      ), (!r || a & /*unpadded_box*/
      2) && ze(
        t,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), (!r || a & /*parent_height*/
      8) && ze(
        t,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    i(l) {
      r || (Rs(o, l), r = !0);
    },
    o(l) {
      Us(o, l), r = !1;
    },
    d(l) {
      l && Ps(t), o && o.d(l), e[6](null);
    }
  };
}
function js(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], o = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = o(n)) : (i === "call" || i === "optionalCall") && (n = o((...l) => n.call(t, ...l)), t = void 0);
  }
  return n;
}
function qs(e, t, n) {
  let r, { $$slots: i = {}, $$scope: o } = t, { size: l = "small" } = t, { unpadded_box: a = !1 } = t, s;
  function u(c) {
    if (!c)
      return !1;
    const { height: _ } = c.getBoundingClientRect(), { height: h } = js([
      c,
      "access",
      (d) => d.parentElement,
      "optionalAccess",
      (d) => d.getBoundingClientRect,
      "call",
      (d) => d()
    ]) || { height: _ };
    return _ > h + 2;
  }
  function f(c) {
    Hs[c ? "unshift" : "push"](() => {
      s = c, n(2, s);
    });
  }
  return e.$$set = (c) => {
    "size" in c && n(0, l = c.size), "unpadded_box" in c && n(1, a = c.unpadded_box), "$$scope" in c && n(4, o = c.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*el*/
    4 && n(3, r = u(s));
  }, [l, a, s, r, o, i, f];
}
class zs extends Bs {
  constructor(t) {
    super(), Os(this, t, qs, Gs, Ms, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Vs,
  append: Vn,
  attr: Ae,
  detach: Xs,
  init: Ws,
  insert: Zs,
  noop: Xn,
  safe_not_equal: xs,
  set_style: Pe,
  svg_element: sn
} = window.__gradio__svelte__internal;
function Js(e) {
  let t, n, r, i;
  return {
    c() {
      t = sn("svg"), n = sn("g"), r = sn("path"), i = sn("path"), Ae(r, "d", "M18,6L6.087,17.913"), Pe(r, "fill", "none"), Pe(r, "fill-rule", "nonzero"), Pe(r, "stroke-width", "2px"), Ae(n, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Ae(i, "d", "M4.364,4.364L19.636,19.636"), Pe(i, "fill", "none"), Pe(i, "fill-rule", "nonzero"), Pe(i, "stroke-width", "2px"), Ae(t, "width", "100%"), Ae(t, "height", "100%"), Ae(t, "viewBox", "0 0 24 24"), Ae(t, "version", "1.1"), Ae(t, "xmlns", "http://www.w3.org/2000/svg"), Ae(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ae(t, "xml:space", "preserve"), Ae(t, "stroke", "currentColor"), Pe(t, "fill-rule", "evenodd"), Pe(t, "clip-rule", "evenodd"), Pe(t, "stroke-linecap", "round"), Pe(t, "stroke-linejoin", "round");
    },
    m(o, l) {
      Zs(o, t, l), Vn(t, n), Vn(n, r), Vn(t, i);
    },
    p: Xn,
    i: Xn,
    o: Xn,
    d(o) {
      o && Xs(t);
    }
  };
}
class Qs extends Vs {
  constructor(t) {
    super(), Ws(this, t, null, Js, xs, {});
  }
}
const {
  SvelteComponent: Ys,
  append: Ks,
  attr: bt,
  detach: $s,
  init: ea,
  insert: ta,
  noop: Wn,
  safe_not_equal: na,
  svg_element: ni
} = window.__gradio__svelte__internal;
function ra(e) {
  let t, n;
  return {
    c() {
      t = ni("svg"), n = ni("path"), bt(n, "fill", "currentColor"), bt(n, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), bt(t, "xmlns", "http://www.w3.org/2000/svg"), bt(t, "width", "100%"), bt(t, "height", "100%"), bt(t, "viewBox", "0 0 32 32");
    },
    m(r, i) {
      ta(r, t, i), Ks(t, n);
    },
    p: Wn,
    i: Wn,
    o: Wn,
    d(r) {
      r && $s(t);
    }
  };
}
class yo extends Ys {
  constructor(t) {
    super(), ea(this, t, null, ra, na, {});
  }
}
const {
  SvelteComponent: ia,
  append: oa,
  attr: Be,
  detach: la,
  init: sa,
  insert: aa,
  noop: Zn,
  safe_not_equal: ua,
  svg_element: ri
} = window.__gradio__svelte__internal;
function fa(e) {
  let t, n;
  return {
    c() {
      t = ri("svg"), n = ri("path"), Be(n, "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"), Be(t, "xmlns", "http://www.w3.org/2000/svg"), Be(t, "width", "100%"), Be(t, "height", "100%"), Be(t, "viewBox", "0 0 24 24"), Be(t, "fill", "none"), Be(t, "stroke", "currentColor"), Be(t, "stroke-width", "1.5"), Be(t, "stroke-linecap", "round"), Be(t, "stroke-linejoin", "round"), Be(t, "class", "feather feather-edit-2");
    },
    m(r, i) {
      aa(r, t, i), oa(t, n);
    },
    p: Zn,
    i: Zn,
    o: Zn,
    d(r) {
      r && la(t);
    }
  };
}
class ca extends ia {
  constructor(t) {
    super(), sa(this, t, null, fa, ua, {});
  }
}
const {
  SvelteComponent: _a,
  append: ii,
  attr: be,
  detach: ha,
  init: da,
  insert: ma,
  noop: xn,
  safe_not_equal: pa,
  svg_element: Jn
} = window.__gradio__svelte__internal;
function ga(e) {
  let t, n, r;
  return {
    c() {
      t = Jn("svg"), n = Jn("path"), r = Jn("polyline"), be(n, "d", "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"), be(r, "points", "13 2 13 9 20 9"), be(t, "xmlns", "http://www.w3.org/2000/svg"), be(t, "width", "100%"), be(t, "height", "100%"), be(t, "viewBox", "0 0 24 24"), be(t, "fill", "none"), be(t, "stroke", "currentColor"), be(t, "stroke-width", "1.5"), be(t, "stroke-linecap", "round"), be(t, "stroke-linejoin", "round"), be(t, "class", "feather feather-file");
    },
    m(i, o) {
      ma(i, t, o), ii(t, n), ii(t, r);
    },
    p: xn,
    i: xn,
    o: xn,
    d(i) {
      i && ha(t);
    }
  };
}
let Cn = class extends _a {
  constructor(t) {
    super(), da(this, t, null, ga, pa, {});
  }
};
const {
  SvelteComponent: ba,
  append: wa,
  attr: wt,
  detach: va,
  init: ya,
  insert: Ea,
  noop: Qn,
  safe_not_equal: Sa,
  svg_element: oi
} = window.__gradio__svelte__internal;
function ka(e) {
  let t, n;
  return {
    c() {
      t = oi("svg"), n = oi("path"), wt(n, "fill", "currentColor"), wt(n, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a3.99 3.99 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2h3.5Zm2.245 2.096L16 4.25c0-.052-.002-.103-.005-.154ZM13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5ZM15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3h-5Zm0 11a2.985 2.985 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A2.985 2.985 0 0 1 20 23h-5Zm5-7a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"), wt(t, "xmlns", "http://www.w3.org/2000/svg"), wt(t, "width", "100%"), wt(t, "height", "100%"), wt(t, "viewBox", "0 0 24 24");
    },
    m(r, i) {
      Ea(r, t, i), wa(t, n);
    },
    p: Qn,
    i: Qn,
    o: Qn,
    d(r) {
      r && va(t);
    }
  };
}
class Ta extends ba {
  constructor(t) {
    super(), ya(this, t, null, ka, Sa, {});
  }
}
const {
  SvelteComponent: Aa,
  append: li,
  attr: we,
  detach: Ba,
  init: Ca,
  insert: Ha,
  noop: Yn,
  safe_not_equal: Na,
  svg_element: Kn
} = window.__gradio__svelte__internal;
function Pa(e) {
  let t, n, r;
  return {
    c() {
      t = Kn("svg"), n = Kn("polyline"), r = Kn("path"), we(n, "points", "1 4 1 10 7 10"), we(r, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), we(t, "xmlns", "http://www.w3.org/2000/svg"), we(t, "width", "100%"), we(t, "height", "100%"), we(t, "viewBox", "0 0 24 24"), we(t, "fill", "none"), we(t, "stroke", "currentColor"), we(t, "stroke-width", "2"), we(t, "stroke-linecap", "round"), we(t, "stroke-linejoin", "round"), we(t, "class", "feather feather-rotate-ccw");
    },
    m(i, o) {
      Ha(i, t, o), li(t, n), li(t, r);
    },
    p: Yn,
    i: Yn,
    o: Yn,
    d(i) {
      i && Ba(t);
    }
  };
}
class Eo extends Aa {
  constructor(t) {
    super(), Ca(this, t, null, Pa, Na, {});
  }
}
const {
  SvelteComponent: Ia,
  append: $n,
  attr: K,
  detach: La,
  init: Oa,
  insert: Da,
  noop: er,
  safe_not_equal: Ma,
  svg_element: an
} = window.__gradio__svelte__internal;
function Ra(e) {
  let t, n, r, i;
  return {
    c() {
      t = an("svg"), n = an("path"), r = an("polyline"), i = an("line"), K(n, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), K(r, "points", "17 8 12 3 7 8"), K(i, "x1", "12"), K(i, "y1", "3"), K(i, "x2", "12"), K(i, "y2", "15"), K(t, "xmlns", "http://www.w3.org/2000/svg"), K(t, "width", "90%"), K(t, "height", "90%"), K(t, "viewBox", "0 0 24 24"), K(t, "fill", "none"), K(t, "stroke", "currentColor"), K(t, "stroke-width", "2"), K(t, "stroke-linecap", "round"), K(t, "stroke-linejoin", "round"), K(t, "class", "feather feather-upload");
    },
    m(o, l) {
      Da(o, t, l), $n(t, n), $n(t, r), $n(t, i);
    },
    p: er,
    i: er,
    o: er,
    d(o) {
      o && La(t);
    }
  };
}
let Ua = class extends Ia {
  constructor(t) {
    super(), Oa(this, t, null, Ra, Ma, {});
  }
};
const Fa = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], si = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
Fa.reduce(
  (e, { color: t, primary: n, secondary: r }) => ({
    ...e,
    [t]: {
      primary: si[t][n],
      secondary: si[t][r]
    }
  }),
  {}
);
const {
  SvelteComponent: Ga,
  append: rt,
  attr: wr,
  check_outros: ja,
  create_component: So,
  destroy_component: ko,
  detach: hn,
  element: vr,
  group_outros: qa,
  init: za,
  insert: dn,
  mount_component: To,
  safe_not_equal: Va,
  set_data: yr,
  space: Er,
  text: Rt,
  toggle_class: ai,
  transition_in: gn,
  transition_out: bn
} = window.__gradio__svelte__internal;
function Xa(e) {
  let t, n;
  return t = new Ua({}), {
    c() {
      So(t.$$.fragment);
    },
    m(r, i) {
      To(t, r, i), n = !0;
    },
    i(r) {
      n || (gn(t.$$.fragment, r), n = !0);
    },
    o(r) {
      bn(t.$$.fragment, r), n = !1;
    },
    d(r) {
      ko(t, r);
    }
  };
}
function Wa(e) {
  let t, n;
  return t = new Ta({}), {
    c() {
      So(t.$$.fragment);
    },
    m(r, i) {
      To(t, r, i), n = !0;
    },
    i(r) {
      n || (gn(t.$$.fragment, r), n = !0);
    },
    o(r) {
      bn(t.$$.fragment, r), n = !1;
    },
    d(r) {
      ko(t, r);
    }
  };
}
function ui(e) {
  let t, n, r = (
    /*i18n*/
    e[1]("common.or") + ""
  ), i, o, l, a = (
    /*message*/
    (e[2] || /*i18n*/
    e[1]("upload_text.click_to_upload")) + ""
  ), s;
  return {
    c() {
      t = vr("span"), n = Rt("- "), i = Rt(r), o = Rt(" -"), l = Er(), s = Rt(a), wr(t, "class", "or svelte-kzcjhc");
    },
    m(u, f) {
      dn(u, t, f), rt(t, n), rt(t, i), rt(t, o), dn(u, l, f), dn(u, s, f);
    },
    p(u, f) {
      f & /*i18n*/
      2 && r !== (r = /*i18n*/
      u[1]("common.or") + "") && yr(i, r), f & /*message, i18n*/
      6 && a !== (a = /*message*/
      (u[2] || /*i18n*/
      u[1]("upload_text.click_to_upload")) + "") && yr(s, a);
    },
    d(u) {
      u && (hn(t), hn(l), hn(s));
    }
  };
}
function Za(e) {
  let t, n, r, i, o, l = (
    /*i18n*/
    e[1](
      /*defs*/
      e[5][
        /*type*/
        e[0]
      ] || /*defs*/
      e[5].file
    ) + ""
  ), a, s, u;
  const f = [Wa, Xa], c = [];
  function _(d, p) {
    return (
      /*type*/
      d[0] === "clipboard" ? 0 : 1
    );
  }
  r = _(e), i = c[r] = f[r](e);
  let h = (
    /*mode*/
    e[3] !== "short" && ui(e)
  );
  return {
    c() {
      t = vr("div"), n = vr("span"), i.c(), o = Er(), a = Rt(l), s = Er(), h && h.c(), wr(n, "class", "icon-wrap svelte-kzcjhc"), ai(
        n,
        "hovered",
        /*hovered*/
        e[4]
      ), wr(t, "class", "wrap svelte-kzcjhc");
    },
    m(d, p) {
      dn(d, t, p), rt(t, n), c[r].m(n, null), rt(t, o), rt(t, a), rt(t, s), h && h.m(t, null), u = !0;
    },
    p(d, [p]) {
      let w = r;
      r = _(d), r !== w && (qa(), bn(c[w], 1, 1, () => {
        c[w] = null;
      }), ja(), i = c[r], i || (i = c[r] = f[r](d), i.c()), gn(i, 1), i.m(n, null)), (!u || p & /*hovered*/
      16) && ai(
        n,
        "hovered",
        /*hovered*/
        d[4]
      ), (!u || p & /*i18n, type*/
      3) && l !== (l = /*i18n*/
      d[1](
        /*defs*/
        d[5][
          /*type*/
          d[0]
        ] || /*defs*/
        d[5].file
      ) + "") && yr(a, l), /*mode*/
      d[3] !== "short" ? h ? h.p(d, p) : (h = ui(d), h.c(), h.m(t, null)) : h && (h.d(1), h = null);
    },
    i(d) {
      u || (gn(i), u = !0);
    },
    o(d) {
      bn(i), u = !1;
    },
    d(d) {
      d && hn(t), c[r].d(), h && h.d();
    }
  };
}
function xa(e, t, n) {
  let { type: r = "file" } = t, { i18n: i } = t, { message: o = void 0 } = t, { mode: l = "full" } = t, { hovered: a = !1 } = t;
  const s = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return e.$$set = (u) => {
    "type" in u && n(0, r = u.type), "i18n" in u && n(1, i = u.i18n), "message" in u && n(2, o = u.message), "mode" in u && n(3, l = u.mode), "hovered" in u && n(4, a = u.hovered);
  }, [r, i, o, l, a, s];
}
class Ja extends Ga {
  constructor(t) {
    super(), za(this, t, xa, Za, Va, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
var fi = Object.prototype.hasOwnProperty;
function ci(e, t, n) {
  for (n of e.keys())
    if (Ft(n, t))
      return n;
}
function Ft(e, t) {
  var n, r, i;
  if (e === t)
    return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date)
      return e.getTime() === t.getTime();
    if (n === RegExp)
      return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length)
        for (; r-- && Ft(e[r], t[r]); )
          ;
      return r === -1;
    }
    if (n === Set) {
      if (e.size !== t.size)
        return !1;
      for (r of e)
        if (i = r, i && typeof i == "object" && (i = ci(t, i), !i) || !t.has(i))
          return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size)
        return !1;
      for (r of e)
        if (i = r[0], i && typeof i == "object" && (i = ci(t, i), !i) || !Ft(r[1], t.get(i)))
          return !1;
      return !0;
    }
    if (n === ArrayBuffer)
      e = new Uint8Array(e), t = new Uint8Array(t);
    else if (n === DataView) {
      if ((r = e.byteLength) === t.byteLength)
        for (; r-- && e.getInt8(r) === t.getInt8(r); )
          ;
      return r === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((r = e.byteLength) === t.byteLength)
        for (; r-- && e[r] === t[r]; )
          ;
      return r === -1;
    }
    if (!n || typeof e == "object") {
      r = 0;
      for (n in e)
        if (fi.call(e, n) && ++r && !fi.call(t, n) || !(n in t) || !Ft(e[n], t[n]))
          return !1;
      return Object.keys(t).length === r;
    }
  }
  return e !== e && t !== t;
}
const {
  SvelteComponent: Qa,
  add_flush_callback: Ao,
  append: un,
  attr: Qe,
  bind: wn,
  binding_callbacks: Gt,
  check_outros: jt,
  construct_svelte_component: vn,
  create_component: lt,
  destroy_component: st,
  detach: qt,
  element: tr,
  empty: Gr,
  group_outros: zt,
  init: Ya,
  insert: Vt,
  mount_component: at,
  noop: Ka,
  safe_not_equal: $a,
  space: Sr,
  transition_in: ne,
  transition_out: me
} = window.__gradio__svelte__internal;
function _i(e) {
  let t, n, r, i, o, l, a, s, u, f, c = !/*use_3dgs*/
  e[8] && hi(e);
  o = new Pt({
    props: {
      Icon: yo,
      label: (
        /*i18n*/
        e[4]("common.download")
      )
    }
  });
  const _ = [tu, eu], h = [];
  function d(p, w) {
    return (
      /*use_3dgs*/
      p[8] ? 0 : 1
    );
  }
  return s = d(e), u = h[s] = _[s](e), {
    c() {
      t = tr("div"), n = tr("div"), c && c.c(), r = Sr(), i = tr("a"), lt(o.$$.fragment), a = Sr(), u.c(), Qe(
        i,
        "href",
        /*resolved_url*/
        e[12]
      ), Qe(i, "target", window.__is_colab__ ? "_blank" : null), Qe(i, "download", l = window.__is_colab__ ? null : (
        /*value*/
        e[0].orig_name || /*value*/
        e[0].path
      )), Qe(n, "class", "buttons svelte-14rtuon"), Qe(t, "class", "model3D svelte-14rtuon");
    },
    m(p, w) {
      Vt(p, t, w), un(t, n), c && c.m(n, null), un(n, r), un(n, i), at(o, i, null), un(t, a), h[s].m(t, null), f = !0;
    },
    p(p, w) {
      /*use_3dgs*/
      p[8] ? c && (zt(), me(c, 1, 1, () => {
        c = null;
      }), jt()) : c ? (c.p(p, w), w & /*use_3dgs*/
      256 && ne(c, 1)) : (c = hi(p), c.c(), ne(c, 1), c.m(n, r));
      const v = {};
      w & /*i18n*/
      16 && (v.label = /*i18n*/
      p[4]("common.download")), o.$set(v), (!f || w & /*resolved_url*/
      4096) && Qe(
        i,
        "href",
        /*resolved_url*/
        p[12]
      ), (!f || w & /*value*/
      1 && l !== (l = window.__is_colab__ ? null : (
        /*value*/
        p[0].orig_name || /*value*/
        p[0].path
      ))) && Qe(i, "download", l);
      let E = s;
      s = d(p), s === E ? h[s].p(p, w) : (zt(), me(h[E], 1, 1, () => {
        h[E] = null;
      }), jt(), u = h[s], u ? u.p(p, w) : (u = h[s] = _[s](p), u.c()), ne(u, 1), u.m(t, null));
    },
    i(p) {
      f || (ne(c), ne(o.$$.fragment, p), ne(u), f = !0);
    },
    o(p) {
      me(c), me(o.$$.fragment, p), me(u), f = !1;
    },
    d(p) {
      p && qt(t), c && c.d(), st(o), h[s].d();
    }
  };
}
function hi(e) {
  let t, n;
  return t = new Pt({ props: { Icon: Eo, label: "Undo" } }), t.$on(
    "click",
    /*click_handler*/
    e[15]
  ), {
    c() {
      lt(t.$$.fragment);
    },
    m(r, i) {
      at(t, r, i), n = !0;
    },
    p: Ka,
    i(r) {
      n || (ne(t.$$.fragment, r), n = !0);
    },
    o(r) {
      me(t.$$.fragment, r), n = !1;
    },
    d(r) {
      st(t, r);
    }
  };
}
function eu(e) {
  let t, n, r, i;
  function o(s) {
    e[18](s);
  }
  var l = (
    /*Canvas3DComponent*/
    e[11]
  );
  function a(s, u) {
    let f = {
      value: (
        /*value*/
        s[0]
      ),
      clear_color: (
        /*clear_color*/
        s[1]
      ),
      camera_position: (
        /*camera_position*/
        s[7]
      ),
      zoom_speed: (
        /*zoom_speed*/
        s[5]
      ),
      pan_speed: (
        /*pan_speed*/
        s[6]
      )
    };
    return (
      /*resolved_url*/
      s[12] !== void 0 && (f.resolved_url = /*resolved_url*/
      s[12]), { props: f }
    );
  }
  return l && (t = vn(l, a(e)), e[17](t), Gt.push(() => wn(t, "resolved_url", o))), {
    c() {
      t && lt(t.$$.fragment), r = Gr();
    },
    m(s, u) {
      t && at(t, s, u), Vt(s, r, u), i = !0;
    },
    p(s, u) {
      if (u & /*Canvas3DComponent*/
      2048 && l !== (l = /*Canvas3DComponent*/
      s[11])) {
        if (t) {
          zt();
          const f = t;
          me(f.$$.fragment, 1, 0, () => {
            st(f, 1);
          }), jt();
        }
        l ? (t = vn(l, a(s)), s[17](t), Gt.push(() => wn(t, "resolved_url", o)), lt(t.$$.fragment), ne(t.$$.fragment, 1), at(t, r.parentNode, r)) : t = null;
      } else if (l) {
        const f = {};
        u & /*value*/
        1 && (f.value = /*value*/
        s[0]), u & /*clear_color*/
        2 && (f.clear_color = /*clear_color*/
        s[1]), u & /*camera_position*/
        128 && (f.camera_position = /*camera_position*/
        s[7]), u & /*zoom_speed*/
        32 && (f.zoom_speed = /*zoom_speed*/
        s[5]), u & /*pan_speed*/
        64 && (f.pan_speed = /*pan_speed*/
        s[6]), !n && u & /*resolved_url*/
        4096 && (n = !0, f.resolved_url = /*resolved_url*/
        s[12], Ao(() => n = !1)), t.$set(f);
      }
    },
    i(s) {
      i || (t && ne(t.$$.fragment, s), i = !0);
    },
    o(s) {
      t && me(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && qt(r), e[17](null), t && st(t, s);
    }
  };
}
function tu(e) {
  let t, n, r, i;
  function o(s) {
    e[16](s);
  }
  var l = (
    /*Canvas3DGSComponent*/
    e[10]
  );
  function a(s, u) {
    let f = {
      value: (
        /*value*/
        s[0]
      ),
      zoom_speed: (
        /*zoom_speed*/
        s[5]
      ),
      pan_speed: (
        /*pan_speed*/
        s[6]
      )
    };
    return (
      /*resolved_url*/
      s[12] !== void 0 && (f.resolved_url = /*resolved_url*/
      s[12]), { props: f }
    );
  }
  return l && (t = vn(l, a(e)), Gt.push(() => wn(t, "resolved_url", o))), {
    c() {
      t && lt(t.$$.fragment), r = Gr();
    },
    m(s, u) {
      t && at(t, s, u), Vt(s, r, u), i = !0;
    },
    p(s, u) {
      if (u & /*Canvas3DGSComponent*/
      1024 && l !== (l = /*Canvas3DGSComponent*/
      s[10])) {
        if (t) {
          zt();
          const f = t;
          me(f.$$.fragment, 1, 0, () => {
            st(f, 1);
          }), jt();
        }
        l ? (t = vn(l, a(s)), Gt.push(() => wn(t, "resolved_url", o)), lt(t.$$.fragment), ne(t.$$.fragment, 1), at(t, r.parentNode, r)) : t = null;
      } else if (l) {
        const f = {};
        u & /*value*/
        1 && (f.value = /*value*/
        s[0]), u & /*zoom_speed*/
        32 && (f.zoom_speed = /*zoom_speed*/
        s[5]), u & /*pan_speed*/
        64 && (f.pan_speed = /*pan_speed*/
        s[6]), !n && u & /*resolved_url*/
        4096 && (n = !0, f.resolved_url = /*resolved_url*/
        s[12], Ao(() => n = !1)), t.$set(f);
      }
    },
    i(s) {
      i || (t && ne(t.$$.fragment, s), i = !0);
    },
    o(s) {
      t && me(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && qt(r), t && st(t, s);
    }
  };
}
function nu(e) {
  let t, n, r, i;
  t = new Fr({
    props: {
      show_label: (
        /*show_label*/
        e[3]
      ),
      Icon: Cn,
      label: (
        /*label*/
        e[2] || /*i18n*/
        e[4]("3D_model.3d_model")
      )
    }
  });
  let o = (
    /*value*/
    e[0] && _i(e)
  );
  return {
    c() {
      lt(t.$$.fragment), n = Sr(), o && o.c(), r = Gr();
    },
    m(l, a) {
      at(t, l, a), Vt(l, n, a), o && o.m(l, a), Vt(l, r, a), i = !0;
    },
    p(l, [a]) {
      const s = {};
      a & /*show_label*/
      8 && (s.show_label = /*show_label*/
      l[3]), a & /*label, i18n*/
      20 && (s.label = /*label*/
      l[2] || /*i18n*/
      l[4]("3D_model.3d_model")), t.$set(s), /*value*/
      l[0] ? o ? (o.p(l, a), a & /*value*/
      1 && ne(o, 1)) : (o = _i(l), o.c(), ne(o, 1), o.m(r.parentNode, r)) : o && (zt(), me(o, 1, 1, () => {
        o = null;
      }), jt());
    },
    i(l) {
      i || (ne(t.$$.fragment, l), ne(o), i = !0);
    },
    o(l) {
      me(t.$$.fragment, l), me(o), i = !1;
    },
    d(l) {
      l && (qt(n), qt(r)), st(t, l), o && o.d(l);
    }
  };
}
function di(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], o = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = o(n)) : (i === "call" || i === "optionalCall") && (n = o((...l) => n.call(t, ...l)), t = void 0);
  }
  return n;
}
async function ru() {
  return (await import("./Canvas3D-60a8d213.js")).default;
}
async function iu() {
  return (await import("./Canvas3DGS-0fbc0d9a.js")).default;
}
function ou(e, t, n) {
  let { value: r } = t, { clear_color: i = [0, 0, 0, 0] } = t, { label: o = "" } = t, { show_label: l } = t, { i18n: a } = t, { zoom_speed: s = 1 } = t, { pan_speed: u = 1 } = t, { camera_position: f = [null, null, null] } = t, c = { camera_position: f, zoom_speed: s, pan_speed: u }, _ = !1, h, d, p;
  function w() {
    di([
      p,
      "optionalAccess",
      (g) => g.reset_camera_position,
      "call",
      (g) => g(f, s, u)
    ]);
  }
  let v;
  const E = () => w();
  function b(g) {
    v = g, n(12, v);
  }
  function S(g) {
    Gt[g ? "unshift" : "push"](() => {
      p = g, n(9, p);
    });
  }
  function H(g) {
    v = g, n(12, v);
  }
  return e.$$set = (g) => {
    "value" in g && n(0, r = g.value), "clear_color" in g && n(1, i = g.clear_color), "label" in g && n(2, o = g.label), "show_label" in g && n(3, l = g.show_label), "i18n" in g && n(4, a = g.i18n), "zoom_speed" in g && n(5, s = g.zoom_speed), "pan_speed" in g && n(6, u = g.pan_speed), "camera_position" in g && n(7, f = g.camera_position);
  }, e.$$.update = () => {
    e.$$.dirty & /*value, use_3dgs*/
    257 && r && (n(8, _ = r.path.endsWith(".splat") || r.path.endsWith(".ply")), _ ? iu().then((g) => {
      n(10, h = g);
    }) : ru().then((g) => {
      n(11, d = g);
    })), e.$$.dirty & /*current_settings, camera_position, zoom_speed, pan_speed, canvas3d*/
    17120 && (!Ft(c.camera_position, f) || c.zoom_speed !== s || c.pan_speed !== u) && (di([
      p,
      "optionalAccess",
      (g) => g.reset_camera_position,
      "call",
      (g) => g(f, s, u)
    ]), n(14, c = { camera_position: f, zoom_speed: s, pan_speed: u }));
  }, [
    r,
    i,
    o,
    l,
    a,
    s,
    u,
    f,
    _,
    p,
    h,
    d,
    v,
    w,
    c,
    E,
    b,
    S,
    H
  ];
}
class lu extends Qa {
  constructor(t) {
    super(), Ya(this, t, ou, nu, $a, {
      value: 0,
      clear_color: 1,
      label: 2,
      show_label: 3,
      i18n: 4,
      zoom_speed: 5,
      pan_speed: 6,
      camera_position: 7
    });
  }
}
var nr = new Intl.Collator(0, { numeric: 1 }).compare;
function mi(e, t, n) {
  return e = e.split("."), t = t.split("."), nr(e[0], t[0]) || nr(e[1], t[1]) || (t[2] = t.slice(2).join("."), n = /[.-]/.test(e[2] = e.slice(2).join(".")), n == /[.-]/.test(t[2]) ? nr(e[2], t[2]) : n ? -1 : 1);
}
function Bo(e, t, n) {
  return t.startsWith("http://") || t.startsWith("https://") ? n ? e : t : e + t;
}
function rr(e) {
  if (e.startsWith("http")) {
    const { protocol: t, host: n } = new URL(e);
    return n.endsWith("hf.space") ? {
      ws_protocol: "wss",
      host: n,
      http_protocol: t
    } : {
      ws_protocol: t === "https:" ? "wss" : "ws",
      http_protocol: t,
      host: n
    };
  } else if (e.startsWith("file:"))
    return {
      ws_protocol: "ws",
      http_protocol: "http:",
      host: "lite.local"
      // Special fake hostname only used for this case. This matches the hostname allowed in `is_self_host()` in `js/wasm/network/host.ts`.
    };
  return {
    ws_protocol: "wss",
    http_protocol: "https:",
    host: e
  };
}
const Co = /^[^\/]*\/[^\/]*$/, su = /.*hf\.space\/{0,1}$/;
async function au(e, t) {
  const n = {};
  t && (n.Authorization = `Bearer ${t}`);
  const r = e.trim();
  if (Co.test(r))
    try {
      const i = await fetch(
        `https://huggingface.co/api/spaces/${r}/host`,
        { headers: n }
      );
      if (i.status !== 200)
        throw new Error("Space metadata could not be loaded.");
      const o = (await i.json()).host;
      return {
        space_id: e,
        ...rr(o)
      };
    } catch (i) {
      throw new Error("Space metadata could not be loaded." + i.message);
    }
  if (su.test(r)) {
    const { ws_protocol: i, http_protocol: o, host: l } = rr(r);
    return {
      space_id: l.replace(".hf.space", ""),
      ws_protocol: i,
      http_protocol: o,
      host: l
    };
  }
  return {
    space_id: !1,
    ...rr(r)
  };
}
function uu(e) {
  let t = {};
  return e.forEach(({ api_name: n }, r) => {
    n && (t[n] = r);
  }), t;
}
const fu = /^(?=[^]*\b[dD]iscussions{0,1}\b)(?=[^]*\b[dD]isabled\b)[^]*$/;
async function pi(e) {
  try {
    const n = (await fetch(
      `https://huggingface.co/api/spaces/${e}/discussions`,
      {
        method: "HEAD"
      }
    )).headers.get("x-error-message");
    return !(n && fu.test(n));
  } catch {
    return !1;
  }
}
function cu(e, t, n, r) {
  if (t.length === 0) {
    if (n === "replace")
      return r;
    if (n === "append")
      return e + r;
    throw new Error(`Unsupported action: ${n}`);
  }
  let i = e;
  for (let l = 0; l < t.length - 1; l++)
    i = i[t[l]];
  const o = t[t.length - 1];
  switch (n) {
    case "replace":
      i[o] = r;
      break;
    case "append":
      i[o] += r;
      break;
    case "add":
      Array.isArray(i) ? i.splice(Number(o), 0, r) : i[o] = r;
      break;
    case "delete":
      Array.isArray(i) ? i.splice(Number(o), 1) : delete i[o];
      break;
    default:
      throw new Error(`Unknown action: ${n}`);
  }
  return e;
}
function _u(e, t) {
  return t.forEach(([n, r, i]) => {
    e = cu(e, r, n, i);
  }), e;
}
async function hu(e, t, n, r = pu) {
  let i = (Array.isArray(e) ? e : [e]).map(
    (o) => o.blob
  );
  return await Promise.all(
    await r(t, i, void 0, n).then(
      async (o) => {
        if (o.error)
          throw new Error(o.error);
        return o.files ? o.files.map((l, a) => new jr({
          ...e[a],
          path: l,
          url: t + "/file=" + l
        })) : [];
      }
    )
  );
}
async function du(e, t) {
  return e.map(
    (n, r) => new jr({
      path: n.name,
      orig_name: n.name,
      blob: n,
      size: n.size,
      mime_type: n.type,
      is_stream: t
    })
  );
}
class jr {
  constructor({
    path: t,
    url: n,
    orig_name: r,
    size: i,
    blob: o,
    is_stream: l,
    mime_type: a,
    alt_text: s
  }) {
    this.meta = { _type: "gradio.FileData" }, this.path = t, this.url = n, this.orig_name = r, this.size = i, this.blob = n ? void 0 : o, this.is_stream = l, this.mime_type = a, this.alt_text = s;
  }
}
const Ho = "This application is too busy. Keep trying!", Ye = "Connection errored out.";
let No;
function mu(e, t) {
  return { post_data: n, upload_files: r, client: i, handle_blob: o };
  async function n(l, a, s) {
    const u = { "Content-Type": "application/json" };
    s && (u.Authorization = `Bearer ${s}`);
    try {
      var f = await e(l, {
        method: "POST",
        body: JSON.stringify(a),
        headers: u
      });
    } catch {
      return [{ error: Ye }, 500];
    }
    let c, _;
    try {
      c = await f.json(), _ = f.status;
    } catch (h) {
      c = { error: `Could not parse server response: ${h}` }, _ = 500;
    }
    return [c, _];
  }
  async function r(l, a, s, u) {
    const f = {};
    s && (f.Authorization = `Bearer ${s}`);
    const c = 1e3, _ = [];
    for (let d = 0; d < a.length; d += c) {
      const p = a.slice(d, d + c), w = new FormData();
      p.forEach((E) => {
        w.append("files", E);
      });
      try {
        const E = u ? `${l}/upload?upload_id=${u}` : `${l}/upload`;
        var h = await e(E, {
          method: "POST",
          body: w,
          headers: f
        });
      } catch {
        return { error: Ye };
      }
      const v = await h.json();
      _.push(...v);
    }
    return { files: _ };
  }
  async function i(l, a = {}) {
    return new Promise(async (s) => {
      const { status_callback: u, hf_token: f } = a, c = {
        predict: Re,
        submit: fe,
        view_api: xe,
        component_server: gt
      };
      if ((typeof window > "u" || !("WebSocket" in window)) && !global.Websocket) {
        const A = await import("./wrapper-6f348d45-19fa94bf.js");
        No = (await import("./__vite-browser-external-2447137e.js")).Blob, global.WebSocket = A.WebSocket;
      }
      const { ws_protocol: _, http_protocol: h, host: d, space_id: p } = await au(l, f), w = Math.random().toString(36).substring(2), v = {};
      let E = !1, b = {}, S = {}, H = null;
      const g = {}, Z = /* @__PURE__ */ new Set();
      let P, T = {}, k = !1;
      f && p && (k = await bu(p, f));
      async function ke(A) {
        if (P = A, window.location.protocol === "https:" && (P.root = P.root.replace("http://", "https://")), T = uu((A == null ? void 0 : A.dependencies) || []), P.auth_required)
          return {
            config: P,
            ...c
          };
        try {
          ue = await xe(P);
        } catch (W) {
          console.error(`Could not get api details: ${W.message}`);
        }
        return {
          config: P,
          ...c
        };
      }
      let ue;
      async function Te(A) {
        if (u && u(A), A.status === "running")
          try {
            P = await vi(
              e,
              `${h}//${d}`,
              f
            );
            const W = await ke(P);
            s(W);
          } catch (W) {
            console.error(W), u && u({
              status: "error",
              message: "Could not load this space.",
              load_status: "error",
              detail: "NOT_FOUND"
            });
          }
      }
      try {
        P = await vi(
          e,
          `${h}//${d}`,
          f
        );
        const A = await ke(P);
        s(A);
      } catch (A) {
        console.error(A), p ? Tr(
          p,
          Co.test(p) ? "space_name" : "subdomain",
          Te
        ) : u && u({
          status: "error",
          message: "Could not load this space.",
          load_status: "error",
          detail: "NOT_FOUND"
        });
      }
      function Re(A, W, J) {
        let m = !1, y = !1, M;
        if (typeof A == "number")
          M = P.dependencies[A];
        else {
          const D = A.replace(/^\//, "");
          M = P.dependencies[T[D]];
        }
        if (M.types.continuous)
          throw new Error(
            "Cannot call predict on this function as it may run forever. Use submit instead"
          );
        return new Promise((D, re) => {
          const ce = fe(A, W, J);
          let N;
          ce.on("data", (pe) => {
            y && (ce.destroy(), D(pe)), m = !0, N = pe;
          }).on("status", (pe) => {
            pe.stage === "error" && re(pe), pe.stage === "complete" && (y = !0, m && (ce.destroy(), D(N)));
          });
        });
      }
      function fe(A, W, J, m = null) {
        let y, M;
        if (typeof A == "number")
          y = A, M = ue.unnamed_endpoints[y];
        else {
          const q = A.replace(/^\//, "");
          y = T[q], M = ue.named_endpoints[A.trim()];
        }
        if (typeof y != "number")
          throw new Error(
            "There is no endpoint matching that name of fn_index matching that number."
          );
        let D, re, ce = P.protocol ?? "ws";
        const N = typeof A == "number" ? "/predict" : A;
        let pe, ie = null, _e = !1;
        const Dt = {};
        let Ge = "";
        typeof window < "u" && (Ge = new URLSearchParams(window.location.search).toString()), o(`${P.root}`, W, M, f).then(
          (q) => {
            if (pe = {
              data: q || [],
              event_data: J,
              fn_index: y,
              trigger_id: m
            }, wu(y, P))
              R({
                type: "status",
                endpoint: N,
                stage: "pending",
                queue: !1,
                fn_index: y,
                time: /* @__PURE__ */ new Date()
              }), n(
                `${P.root}/run${N.startsWith("/") ? N : `/${N}`}${Ge ? "?" + Ge : ""}`,
                {
                  ...pe,
                  session_hash: w
                },
                f
              ).then(([V, j]) => {
                const Q = V.data;
                j == 200 ? (R({
                  type: "data",
                  endpoint: N,
                  fn_index: y,
                  data: Q,
                  time: /* @__PURE__ */ new Date()
                }), R({
                  type: "status",
                  endpoint: N,
                  fn_index: y,
                  stage: "complete",
                  eta: V.average_duration,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                })) : R({
                  type: "status",
                  stage: "error",
                  endpoint: N,
                  fn_index: y,
                  message: V.error,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                });
              }).catch((V) => {
                R({
                  type: "status",
                  stage: "error",
                  message: V.message,
                  endpoint: N,
                  fn_index: y,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                });
              });
            else if (ce == "ws") {
              R({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: N,
                fn_index: y,
                time: /* @__PURE__ */ new Date()
              });
              let V = new URL(`${_}://${Bo(
                d,
                P.path,
                !0
              )}
							/queue/join${Ge ? "?" + Ge : ""}`);
              k && V.searchParams.set("__sign", k), D = new WebSocket(V), D.onclose = (j) => {
                j.wasClean || R({
                  type: "status",
                  stage: "error",
                  broken: !0,
                  message: Ye,
                  queue: !0,
                  endpoint: N,
                  fn_index: y,
                  time: /* @__PURE__ */ new Date()
                });
              }, D.onmessage = function(j) {
                const Q = JSON.parse(j.data), { type: x, status: F, data: G } = ir(
                  Q,
                  v[y]
                );
                if (x === "update" && F && !_e)
                  R({
                    type: "status",
                    endpoint: N,
                    fn_index: y,
                    time: /* @__PURE__ */ new Date(),
                    ...F
                  }), F.stage === "error" && D.close();
                else if (x === "hash") {
                  D.send(JSON.stringify({ fn_index: y, session_hash: w }));
                  return;
                } else
                  x === "data" ? D.send(JSON.stringify({ ...pe, session_hash: w })) : x === "complete" ? _e = F : x === "log" ? R({
                    type: "log",
                    log: G.log,
                    level: G.level,
                    endpoint: N,
                    fn_index: y
                  }) : x === "generating" && R({
                    type: "status",
                    time: /* @__PURE__ */ new Date(),
                    ...F,
                    stage: F == null ? void 0 : F.stage,
                    queue: !0,
                    endpoint: N,
                    fn_index: y
                  });
                G && (R({
                  type: "data",
                  time: /* @__PURE__ */ new Date(),
                  data: G.data,
                  endpoint: N,
                  fn_index: y
                }), _e && (R({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ..._e,
                  stage: F == null ? void 0 : F.stage,
                  queue: !0,
                  endpoint: N,
                  fn_index: y
                }), D.close()));
              }, mi(P.version || "2.0.0", "3.6") < 0 && addEventListener(
                "open",
                () => D.send(JSON.stringify({ hash: w }))
              );
            } else if (ce == "sse") {
              R({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: N,
                fn_index: y,
                time: /* @__PURE__ */ new Date()
              });
              var Y = new URLSearchParams({
                fn_index: y.toString(),
                session_hash: w
              }).toString();
              let V = new URL(
                `${P.root}/queue/join?${Ge ? Ge + "&" : ""}${Y}`
              );
              re = t(V), re.onmessage = async function(j) {
                const Q = JSON.parse(j.data), { type: x, status: F, data: G } = ir(
                  Q,
                  v[y]
                );
                if (x === "update" && F && !_e)
                  R({
                    type: "status",
                    endpoint: N,
                    fn_index: y,
                    time: /* @__PURE__ */ new Date(),
                    ...F
                  }), F.stage === "error" && re.close();
                else if (x === "data") {
                  ie = Q.event_id;
                  let [Je, Dl] = await n(
                    `${P.root}/queue/data`,
                    {
                      ...pe,
                      session_hash: w,
                      event_id: ie
                    },
                    f
                  );
                  Dl !== 200 && (R({
                    type: "status",
                    stage: "error",
                    message: Ye,
                    queue: !0,
                    endpoint: N,
                    fn_index: y,
                    time: /* @__PURE__ */ new Date()
                  }), re.close());
                } else
                  x === "complete" ? _e = F : x === "log" ? R({
                    type: "log",
                    log: G.log,
                    level: G.level,
                    endpoint: N,
                    fn_index: y
                  }) : x === "generating" && R({
                    type: "status",
                    time: /* @__PURE__ */ new Date(),
                    ...F,
                    stage: F == null ? void 0 : F.stage,
                    queue: !0,
                    endpoint: N,
                    fn_index: y
                  });
                G && (R({
                  type: "data",
                  time: /* @__PURE__ */ new Date(),
                  data: G.data,
                  endpoint: N,
                  fn_index: y
                }), _e && (R({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ..._e,
                  stage: F == null ? void 0 : F.stage,
                  queue: !0,
                  endpoint: N,
                  fn_index: y
                }), re.close()));
              };
            } else
              (ce == "sse_v1" || ce == "sse_v2" || ce == "sse_v2.1") && (R({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: N,
                fn_index: y,
                time: /* @__PURE__ */ new Date()
              }), n(
                `${P.root}/queue/join?${Ge}`,
                {
                  ...pe,
                  session_hash: w
                },
                f
              ).then(([V, j]) => {
                if (j === 503)
                  R({
                    type: "status",
                    stage: "error",
                    message: Ho,
                    queue: !0,
                    endpoint: N,
                    fn_index: y,
                    time: /* @__PURE__ */ new Date()
                  });
                else if (j !== 200)
                  R({
                    type: "status",
                    stage: "error",
                    message: Ye,
                    queue: !0,
                    endpoint: N,
                    fn_index: y,
                    time: /* @__PURE__ */ new Date()
                  });
                else {
                  ie = V.event_id;
                  let Q = async function(x) {
                    try {
                      const { type: F, status: G, data: Je } = ir(
                        x,
                        v[y]
                      );
                      if (F == "heartbeat")
                        return;
                      if (F === "update" && G && !_e)
                        R({
                          type: "status",
                          endpoint: N,
                          fn_index: y,
                          time: /* @__PURE__ */ new Date(),
                          ...G
                        });
                      else if (F === "complete")
                        _e = G;
                      else if (F == "unexpected_error")
                        console.error("Unexpected error", G == null ? void 0 : G.message), R({
                          type: "status",
                          stage: "error",
                          message: (G == null ? void 0 : G.message) || "An Unexpected Error Occurred!",
                          queue: !0,
                          endpoint: N,
                          fn_index: y,
                          time: /* @__PURE__ */ new Date()
                        });
                      else if (F === "log") {
                        R({
                          type: "log",
                          log: Je.log,
                          level: Je.level,
                          endpoint: N,
                          fn_index: y
                        });
                        return;
                      } else
                        F === "generating" && (R({
                          type: "status",
                          time: /* @__PURE__ */ new Date(),
                          ...G,
                          stage: G == null ? void 0 : G.stage,
                          queue: !0,
                          endpoint: N,
                          fn_index: y
                        }), Je && (ce === "sse_v2" || ce === "sse_v2.1") && Ol(ie, Je));
                      Je && (R({
                        type: "data",
                        time: /* @__PURE__ */ new Date(),
                        data: Je.data,
                        endpoint: N,
                        fn_index: y
                      }), _e && R({
                        type: "status",
                        time: /* @__PURE__ */ new Date(),
                        ..._e,
                        stage: G == null ? void 0 : G.stage,
                        queue: !0,
                        endpoint: N,
                        fn_index: y
                      })), ((G == null ? void 0 : G.stage) === "complete" || (G == null ? void 0 : G.stage) === "error") && (g[ie] && delete g[ie], ie in S && delete S[ie]);
                    } catch (F) {
                      console.error("Unexpected client exception", F), R({
                        type: "status",
                        stage: "error",
                        message: "An Unexpected Error Occurred!",
                        queue: !0,
                        endpoint: N,
                        fn_index: y,
                        time: /* @__PURE__ */ new Date()
                      }), Ze();
                    }
                  };
                  ie in b && (b[ie].forEach(
                    (x) => Q(x)
                  ), delete b[ie]), g[ie] = Q, Z.add(ie), E || pt();
                }
              }));
          }
        );
        function Ol(q, Y) {
          !S[q] ? (S[q] = [], Y.data.forEach((j, Q) => {
            S[q][Q] = j;
          })) : Y.data.forEach((j, Q) => {
            let x = _u(
              S[q][Q],
              j
            );
            S[q][Q] = x, Y.data[Q] = x;
          });
        }
        function R(q) {
          const V = Dt[q.type] || [];
          V == null || V.forEach((j) => j(q));
        }
        function Fn(q, Y) {
          const V = Dt, j = V[q] || [];
          return V[q] = j, j == null || j.push(Y), { on: Fn, off: rn, cancel: Gn, destroy: jn };
        }
        function rn(q, Y) {
          const V = Dt;
          let j = V[q] || [];
          return j = j == null ? void 0 : j.filter((Q) => Q !== Y), V[q] = j, { on: Fn, off: rn, cancel: Gn, destroy: jn };
        }
        async function Gn() {
          const q = {
            stage: "complete",
            queue: !1,
            time: /* @__PURE__ */ new Date()
          };
          _e = q, R({
            ...q,
            type: "status",
            endpoint: N,
            fn_index: y
          });
          let Y = {};
          ce === "ws" ? (D && D.readyState === 0 ? D.addEventListener("open", () => {
            D.close();
          }) : D.close(), Y = { fn_index: y, session_hash: w }) : (re.close(), Y = { event_id: ie });
          try {
            await e(`${P.root}/reset`, {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify(Y)
            });
          } catch {
            console.warn(
              "The `/reset` endpoint could not be called. Subsequent endpoint results may be unreliable."
            );
          }
        }
        function jn() {
          for (const q in Dt)
            Dt[q].forEach((Y) => {
              rn(q, Y);
            });
        }
        return {
          on: Fn,
          off: rn,
          cancel: Gn,
          destroy: jn
        };
      }
      function pt() {
        E = !0;
        let A = new URLSearchParams({
          session_hash: w
        }).toString(), W = new URL(`${P.root}/queue/data?${A}`);
        H = t(W), H.onmessage = async function(J) {
          let m = JSON.parse(J.data);
          const y = m.event_id;
          if (!y)
            await Promise.all(
              Object.keys(g).map(
                (M) => g[M](m)
              )
            );
          else if (g[y]) {
            m.msg === "process_completed" && (Z.delete(y), Z.size === 0 && Ze());
            let M = g[y];
            window.setTimeout(M, 0, m);
          } else
            b[y] || (b[y] = []), b[y].push(m);
        }, H.onerror = async function(J) {
          await Promise.all(
            Object.keys(g).map(
              (m) => g[m]({
                msg: "unexpected_error",
                message: Ye
              })
            )
          ), Ze();
        };
      }
      function Ze() {
        E = !1, H == null || H.close();
      }
      async function gt(A, W, J) {
        var m;
        const y = { "Content-Type": "application/json" };
        f && (y.Authorization = `Bearer ${f}`);
        let M, D = P.components.find(
          (N) => N.id === A
        );
        (m = D == null ? void 0 : D.props) != null && m.root_url ? M = D.props.root_url : M = P.root;
        const re = await e(
          `${M}/component_server/`,
          {
            method: "POST",
            body: JSON.stringify({
              data: J,
              component_id: A,
              fn_name: W,
              session_hash: w
            }),
            headers: y
          }
        );
        if (!re.ok)
          throw new Error(
            "Could not connect to component server: " + re.statusText
          );
        return await re.json();
      }
      async function xe(A) {
        if (ue)
          return ue;
        const W = { "Content-Type": "application/json" };
        f && (W.Authorization = `Bearer ${f}`);
        let J;
        if (mi(A.version || "2.0.0", "3.30") < 0 ? J = await e(
          "https://gradio-space-api-fetcher-v2.hf.space/api",
          {
            method: "POST",
            body: JSON.stringify({
              serialize: !1,
              config: JSON.stringify(A)
            }),
            headers: W
          }
        ) : J = await e(`${A.root}/info`, {
          headers: W
        }), !J.ok)
          throw new Error(Ye);
        let m = await J.json();
        return "api" in m && (m = m.api), m.named_endpoints["/predict"] && !m.unnamed_endpoints[0] && (m.unnamed_endpoints[0] = m.named_endpoints["/predict"]), gu(m, A, T);
      }
    });
  }
  async function o(l, a, s, u) {
    const f = await kr(
      a,
      void 0,
      [],
      !0,
      s
    );
    return Promise.all(
      f.map(async ({ path: c, blob: _, type: h }) => {
        if (_) {
          const d = (await r(l, [_], u)).files[0];
          return { path: c, file_url: d, type: h, name: _ == null ? void 0 : _.name };
        }
        return { path: c, type: h };
      })
    ).then((c) => (c.forEach(({ path: _, file_url: h, type: d, name: p }) => {
      if (d === "Gallery")
        wi(a, h, _);
      else if (h) {
        const w = new jr({ path: h, orig_name: p });
        wi(a, w, _);
      }
    }), a));
  }
}
const { post_data: J_, upload_files: pu, client: Q_, handle_blob: Y_ } = mu(
  fetch,
  (...e) => new EventSource(...e)
);
function gi(e, t, n, r) {
  switch (e.type) {
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "number":
      return "number";
  }
  if (n === "JSONSerializable" || n === "StringSerializable")
    return "any";
  if (n === "ListStringSerializable")
    return "string[]";
  if (t === "Image")
    return r === "parameter" ? "Blob | File | Buffer" : "string";
  if (n === "FileSerializable")
    return (e == null ? void 0 : e.type) === "array" ? r === "parameter" ? "(Blob | File | Buffer)[]" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}[]" : r === "parameter" ? "Blob | File | Buffer" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}";
  if (n === "GallerySerializable")
    return r === "parameter" ? "[(Blob | File | Buffer), (string | null)][]" : "[{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}, (string | null))][]";
}
function bi(e, t) {
  return t === "GallerySerializable" ? "array of [file, label] tuples" : t === "ListStringSerializable" ? "array of strings" : t === "FileSerializable" ? "array of files or single file" : e.description;
}
function gu(e, t, n) {
  const r = {
    named_endpoints: {},
    unnamed_endpoints: {}
  };
  for (const i in e) {
    const o = e[i];
    for (const l in o) {
      const a = t.dependencies[l] ? l : n[l.replace("/", "")], s = o[l];
      r[i][l] = {}, r[i][l].parameters = {}, r[i][l].returns = {}, r[i][l].type = t.dependencies[a].types, r[i][l].parameters = s.parameters.map(
        ({ label: u, component: f, type: c, serializer: _ }) => ({
          label: u,
          component: f,
          type: gi(c, f, _, "parameter"),
          description: bi(c, _)
        })
      ), r[i][l].returns = s.returns.map(
        ({ label: u, component: f, type: c, serializer: _ }) => ({
          label: u,
          component: f,
          type: gi(c, f, _, "return"),
          description: bi(c, _)
        })
      );
    }
  }
  return r;
}
async function bu(e, t) {
  try {
    return (await (await fetch(`https://huggingface.co/api/spaces/${e}/jwt`, {
      headers: {
        Authorization: `Bearer ${t}`
      }
    })).json()).token || !1;
  } catch (n) {
    return console.error(n), !1;
  }
}
function wi(e, t, n) {
  for (; n.length > 1; )
    e = e[n.shift()];
  e[n.shift()] = t;
}
async function kr(e, t = void 0, n = [], r = !1, i = void 0) {
  if (Array.isArray(e)) {
    let o = [];
    return await Promise.all(
      e.map(async (l, a) => {
        var s;
        let u = n.slice();
        u.push(a);
        const f = await kr(
          e[a],
          r ? ((s = i == null ? void 0 : i.parameters[a]) == null ? void 0 : s.component) || void 0 : t,
          u,
          !1,
          i
        );
        o = o.concat(f);
      })
    ), o;
  } else {
    if (globalThis.Buffer && e instanceof globalThis.Buffer)
      return [
        {
          path: n,
          blob: t === "Image" ? !1 : new No([e]),
          type: t
        }
      ];
    if (typeof e == "object") {
      let o = [];
      for (let l in e)
        if (e.hasOwnProperty(l)) {
          let a = n.slice();
          a.push(l), o = o.concat(
            await kr(
              e[l],
              void 0,
              a,
              !1,
              i
            )
          );
        }
      return o;
    }
  }
  return [];
}
function wu(e, t) {
  var n, r, i, o;
  return !(((r = (n = t == null ? void 0 : t.dependencies) == null ? void 0 : n[e]) == null ? void 0 : r.queue) === null ? t.enable_queue : (o = (i = t == null ? void 0 : t.dependencies) == null ? void 0 : i[e]) != null && o.queue) || !1;
}
async function vi(e, t, n) {
  const r = {};
  if (n && (r.Authorization = `Bearer ${n}`), typeof window < "u" && window.gradio_config && location.origin !== "http://localhost:9876" && !window.gradio_config.dev_mode) {
    const i = window.gradio_config.root, o = window.gradio_config;
    return o.root = Bo(t, o.root, !1), { ...o, path: i };
  } else if (t) {
    let i = await e(`${t}/config`, {
      headers: r
    });
    if (i.status === 200) {
      const o = await i.json();
      return o.path = o.path ?? "", o.root = t, o;
    }
    throw new Error("Could not get config.");
  }
  throw new Error("No config or app endpoint found");
}
async function Tr(e, t, n) {
  let r = t === "subdomain" ? `https://huggingface.co/api/spaces/by-subdomain/${e}` : `https://huggingface.co/api/spaces/${e}`, i, o;
  try {
    if (i = await fetch(r), o = i.status, o !== 200)
      throw new Error();
    i = await i.json();
  } catch {
    n({
      status: "error",
      load_status: "error",
      message: "Could not get space status",
      detail: "NOT_FOUND"
    });
    return;
  }
  if (!i || o !== 200)
    return;
  const {
    runtime: { stage: l },
    id: a
  } = i;
  switch (l) {
    case "STOPPED":
    case "SLEEPING":
      n({
        status: "sleeping",
        load_status: "pending",
        message: "Space is asleep. Waking it up...",
        detail: l
      }), setTimeout(() => {
        Tr(e, t, n);
      }, 1e3);
      break;
    case "PAUSED":
      n({
        status: "paused",
        load_status: "error",
        message: "This space has been paused by the author. If you would like to try this demo, consider duplicating the space.",
        detail: l,
        discussions_enabled: await pi(a)
      });
      break;
    case "RUNNING":
    case "RUNNING_BUILDING":
      n({
        status: "running",
        load_status: "complete",
        message: "",
        detail: l
      });
      break;
    case "BUILDING":
      n({
        status: "building",
        load_status: "pending",
        message: "Space is building...",
        detail: l
      }), setTimeout(() => {
        Tr(e, t, n);
      }, 1e3);
      break;
    default:
      n({
        status: "space_error",
        load_status: "error",
        message: "This space is experiencing an issue.",
        detail: l,
        discussions_enabled: await pi(a)
      });
      break;
  }
}
function ir(e, t) {
  switch (e.msg) {
    case "send_data":
      return { type: "data" };
    case "send_hash":
      return { type: "hash" };
    case "queue_full":
      return {
        type: "update",
        status: {
          queue: !0,
          message: Ho,
          stage: "error",
          code: e.code,
          success: e.success
        }
      };
    case "heartbeat":
      return {
        type: "heartbeat"
      };
    case "unexpected_error":
      return {
        type: "unexpected_error",
        status: {
          queue: !0,
          message: e.message,
          stage: "error",
          success: !1
        }
      };
    case "estimation":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: t || "pending",
          code: e.code,
          size: e.queue_size,
          position: e.rank,
          eta: e.rank_eta,
          success: e.success
        }
      };
    case "progress":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: e.code,
          progress_data: e.progress_data,
          success: e.success
        }
      };
    case "log":
      return { type: "log", data: e };
    case "process_generating":
      return {
        type: "generating",
        status: {
          queue: !0,
          message: e.success ? null : e.output.error,
          stage: e.success ? "generating" : "error",
          code: e.code,
          progress_data: e.progress_data,
          eta: e.average_duration
        },
        data: e.success ? e.output : null
      };
    case "process_completed":
      return "error" in e.output ? {
        type: "update",
        status: {
          queue: !0,
          message: e.output.error,
          stage: "error",
          code: e.code,
          success: e.success
        }
      } : {
        type: "complete",
        status: {
          queue: !0,
          message: e.success ? void 0 : e.output.error,
          stage: e.success ? "complete" : "error",
          code: e.code,
          progress_data: e.progress_data
        },
        data: e.success ? e.output : null
      };
    case "process_starts":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: e.code,
          size: e.rank,
          position: 0,
          success: e.success,
          eta: e.eta
        }
      };
  }
  return { type: "none", status: { stage: "error", queue: !0 } };
}
function ot() {
}
function vu(e) {
  return e();
}
function yu(e) {
  e.forEach(vu);
}
function Eu(e) {
  return typeof e == "function";
}
function Su(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ku(e, ...t) {
  if (e == null) {
    for (const r of t)
      r(void 0);
    return ot;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Po = typeof window < "u";
let yi = Po ? () => window.performance.now() : () => Date.now(), Io = Po ? (e) => requestAnimationFrame(e) : ot;
const kt = /* @__PURE__ */ new Set();
function Lo(e) {
  kt.forEach((t) => {
    t.c(e) || (kt.delete(t), t.f());
  }), kt.size !== 0 && Io(Lo);
}
function Tu(e) {
  let t;
  return kt.size === 0 && Io(Lo), {
    promise: new Promise((n) => {
      kt.add(t = { c: e, f: n });
    }),
    abort() {
      kt.delete(t);
    }
  };
}
const vt = [];
function Au(e, t) {
  return {
    subscribe: Yt(e, t).subscribe
  };
}
function Yt(e, t = ot) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (Su(e, a) && (e = a, n)) {
      const s = !vt.length;
      for (const u of r)
        u[1](), vt.push(u, e);
      if (s) {
        for (let u = 0; u < vt.length; u += 2)
          vt[u][0](vt[u + 1]);
        vt.length = 0;
      }
    }
  }
  function o(a) {
    i(a(e));
  }
  function l(a, s = ot) {
    const u = [a, s];
    return r.add(u), r.size === 1 && (n = t(i, o) || ot), a(e), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: o, subscribe: l };
}
function It(e, t, n) {
  const r = !Array.isArray(e), i = r ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const o = t.length < 2;
  return Au(n, (l, a) => {
    let s = !1;
    const u = [];
    let f = 0, c = ot;
    const _ = () => {
      if (f)
        return;
      c();
      const d = t(r ? u[0] : u, l, a);
      o ? l(d) : c = Eu(d) ? d : ot;
    }, h = i.map(
      (d, p) => ku(
        d,
        (w) => {
          u[p] = w, f &= ~(1 << p), s && _();
        },
        () => {
          f |= 1 << p;
        }
      )
    );
    return s = !0, _(), function() {
      yu(h), c(), s = !1;
    };
  });
}
function Ei(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Ar(e, t, n, r) {
  if (typeof n == "number" || Ei(n)) {
    const i = r - n, o = (n - t) / (e.dt || 1 / 60), l = e.opts.stiffness * i, a = e.opts.damping * o, s = (l - a) * e.inv_mass, u = (o + s) * e.dt;
    return Math.abs(u) < e.opts.precision && Math.abs(i) < e.opts.precision ? r : (e.settled = !1, Ei(n) ? new Date(n.getTime() + u) : n + u);
  } else {
    if (Array.isArray(n))
      return n.map(
        (i, o) => Ar(e, t[o], n[o], r[o])
      );
    if (typeof n == "object") {
      const i = {};
      for (const o in n)
        i[o] = Ar(e, t[o], n[o], r[o]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function Si(e, t = {}) {
  const n = Yt(e), { stiffness: r = 0.15, damping: i = 0.8, precision: o = 0.01 } = t;
  let l, a, s, u = e, f = e, c = 1, _ = 0, h = !1;
  function d(w, v = {}) {
    f = w;
    const E = s = {};
    return e == null || v.hard || p.stiffness >= 1 && p.damping >= 1 ? (h = !0, l = yi(), u = w, n.set(e = f), Promise.resolve()) : (v.soft && (_ = 1 / ((v.soft === !0 ? 0.5 : +v.soft) * 60), c = 0), a || (l = yi(), h = !1, a = Tu((b) => {
      if (h)
        return h = !1, a = null, !1;
      c = Math.min(c + _, 1);
      const S = {
        inv_mass: c,
        opts: p,
        settled: !0,
        dt: (b - l) * 60 / 1e3
      }, H = Ar(S, u, e, f);
      return l = b, u = e, n.set(e = H), S.settled && (a = null), !S.settled;
    })), new Promise((b) => {
      a.promise.then(() => {
        E === s && b();
      });
    }));
  }
  const p = {
    set: d,
    update: (w, v) => d(w(f, e), v),
    subscribe: n.subscribe,
    stiffness: r,
    damping: i,
    precision: o
  };
  return p;
}
var K_ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Cu = function(t) {
  return Hu(t) && !Nu(t);
};
function Hu(e) {
  return !!e && typeof e == "object";
}
function Nu(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Lu(e);
}
var Pu = typeof Symbol == "function" && Symbol.for, Iu = Pu ? Symbol.for("react.element") : 60103;
function Lu(e) {
  return e.$$typeof === Iu;
}
function Ou(e) {
  return Array.isArray(e) ? [] : {};
}
function Xt(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Tt(Ou(e), e, t) : e;
}
function Du(e, t, n) {
  return e.concat(t).map(function(r) {
    return Xt(r, n);
  });
}
function Mu(e, t) {
  if (!t.customMerge)
    return Tt;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : Tt;
}
function Ru(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function ki(e) {
  return Object.keys(e).concat(Ru(e));
}
function Oo(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Uu(e, t) {
  return Oo(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Fu(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && ki(e).forEach(function(i) {
    r[i] = Xt(e[i], n);
  }), ki(t).forEach(function(i) {
    Uu(e, i) || (Oo(e, i) && n.isMergeableObject(t[i]) ? r[i] = Mu(i, n)(e[i], t[i], n) : r[i] = Xt(t[i], n));
  }), r;
}
function Tt(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Du, n.isMergeableObject = n.isMergeableObject || Cu, n.cloneUnlessOtherwiseSpecified = Xt;
  var r = Array.isArray(t), i = Array.isArray(e), o = r === i;
  return o ? r ? n.arrayMerge(e, t, n) : Fu(e, t, n) : Xt(t, n);
}
Tt.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return Tt(r, i, n);
  }, {});
};
var Gu = Tt, ju = Gu;
const qu = /* @__PURE__ */ Bu(ju);
var Br = function(e, t) {
  return Br = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Br(e, t);
};
function Hn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Br(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var U = function() {
  return U = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, U.apply(this, arguments);
};
function or(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var I;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(I || (I = {}));
var z;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(z || (z = {}));
var At;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(At || (At = {}));
function Ti(e) {
  return e.type === z.literal;
}
function zu(e) {
  return e.type === z.argument;
}
function Do(e) {
  return e.type === z.number;
}
function Mo(e) {
  return e.type === z.date;
}
function Ro(e) {
  return e.type === z.time;
}
function Uo(e) {
  return e.type === z.select;
}
function Fo(e) {
  return e.type === z.plural;
}
function Vu(e) {
  return e.type === z.pound;
}
function Go(e) {
  return e.type === z.tag;
}
function jo(e) {
  return !!(e && typeof e == "object" && e.type === At.number);
}
function Cr(e) {
  return !!(e && typeof e == "object" && e.type === At.dateTime);
}
var qo = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Xu = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Wu(e) {
  var t = {};
  return e.replace(Xu, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = r === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = r === 4 ? "short" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = r < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var Zu = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function xu(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Zu).filter(function(_) {
    return _.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var o = i[r], l = o.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var a = l[0], s = l.slice(1), u = 0, f = s; u < f.length; u++) {
      var c = f[u];
      if (c.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: a, options: s });
  }
  return n;
}
function Ju(e) {
  return e.replace(/^(.*?)-/, "");
}
var Ai = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, zo = /^(@+)?(\+|#+)?[rs]?$/g, Qu = /(\*)(0+)|(#+)(0+)|(0+)/g, Vo = /^(0+)$/;
function Bi(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(zo, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Xo(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function Yu(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Vo.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Ci(e) {
  var t = {}, n = Xo(e);
  return n || t;
}
function Ku(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = Ju(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = U(U(U({}, t), { notation: "scientific" }), i.options.reduce(function(s, u) {
          return U(U({}, s), Ci(u));
        }, {}));
        continue;
      case "engineering":
        t = U(U(U({}, t), { notation: "engineering" }), i.options.reduce(function(s, u) {
          return U(U({}, s), Ci(u));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(i.options[0]);
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(Qu, function(s, u, f, c, _, h) {
          if (u)
            t.minimumIntegerDigits = f.length;
          else {
            if (c && _)
              throw new Error("We currently do not support maximum integer digits");
            if (h)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Vo.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Ai.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Ai, function(s, u, f, c, _, h) {
        return f === "*" ? t.minimumFractionDigits = u.length : c && c[0] === "#" ? t.maximumFractionDigits = c.length : _ && h ? (t.minimumFractionDigits = _.length, t.maximumFractionDigits = _.length + h.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var o = i.options[0];
      o === "w" ? t = U(U({}, t), { trailingZeroDisplay: "stripIfInteger" }) : o && (t = U(U({}, t), Bi(o)));
      continue;
    }
    if (zo.test(i.stem)) {
      t = U(U({}, t), Bi(i.stem));
      continue;
    }
    var l = Xo(i.stem);
    l && (t = U(U({}, t), l));
    var a = Yu(i.stem);
    a && (t = U(U({}, t), a));
  }
  return t;
}
var fn = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function $u(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var o = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        o++, r++;
      var l = 1 + (o & 1), a = o < 2 ? 1 : 3 + (o >> 1), s = "a", u = ef(t);
      for ((u == "H" || u == "k") && (a = 0); a-- > 0; )
        n += s;
      for (; l-- > 0; )
        n = u + n;
    } else
      i === "J" ? n += "H" : n += i;
  }
  return n;
}
function ef(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = e.language, r;
  n !== "root" && (r = e.maximize().region);
  var i = fn[r || ""] || fn[n || ""] || fn["".concat(n, "-001")] || fn["001"];
  return i[0];
}
var lr, tf = new RegExp("^".concat(qo.source, "*")), nf = new RegExp("".concat(qo.source, "*$"));
function L(e, t) {
  return { start: e, end: t };
}
var rf = !!String.prototype.startsWith, of = !!String.fromCodePoint, lf = !!Object.fromEntries, sf = !!String.prototype.codePointAt, af = !!String.prototype.trimStart, uf = !!String.prototype.trimEnd, ff = !!Number.isSafeInteger, cf = ff ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Hr = !0;
try {
  var _f = Zo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Hr = ((lr = _f.exec("a")) === null || lr === void 0 ? void 0 : lr[0]) === "a";
} catch {
  Hr = !1;
}
var Hi = rf ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Nr = of ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, o = 0, l; i > o; ) {
      if (l = t[o++], l > 1114111)
        throw RangeError(l + " is not a valid code point");
      r += l < 65536 ? String.fromCharCode(l) : String.fromCharCode(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
    }
    return r;
  }
), Ni = (
  // native
  lf ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var o = i[r], l = o[0], a = o[1];
        n[l] = a;
      }
      return n;
    }
  )
), Wo = sf ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), o;
      return i < 55296 || i > 56319 || n + 1 === r || (o = t.charCodeAt(n + 1)) < 56320 || o > 57343 ? i : (i - 55296 << 10) + (o - 56320) + 65536;
    }
  }
), hf = af ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(tf, "");
  }
), df = uf ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(nf, "");
  }
);
function Zo(e, t) {
  return new RegExp(e, t);
}
var Pr;
if (Hr) {
  var Pi = Zo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Pr = function(t, n) {
    var r;
    Pi.lastIndex = n;
    var i = Pi.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Pr = function(t, n) {
    for (var r = []; ; ) {
      var i = Wo(t, n);
      if (i === void 0 || xo(i) || bf(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Nr.apply(void 0, r);
  };
var mf = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var o = this.char();
        if (o === 123) {
          var l = this.parseArgument(t, r);
          if (l.err)
            return l;
          i.push(l.val);
        } else {
          if (o === 125 && t > 0)
            break;
          if (o === 35 && (n === "plural" || n === "selectordinal")) {
            var a = this.clonePosition();
            this.bump(), i.push({
              type: z.pound,
              location: L(a, this.clonePosition())
            });
          } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(I.UNMATCHED_CLOSING_TAG, L(this.clonePosition(), this.clonePosition()));
          } else if (o === 60 && !this.ignoreTag && Ir(this.peek() || 0)) {
            var l = this.parseTag(t, n);
            if (l.err)
              return l;
            i.push(l.val);
          } else {
            var l = this.parseLiteral(t, n);
            if (l.err)
              return l;
            i.push(l.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: z.literal,
            value: "<".concat(i, "/>"),
            location: L(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var o = this.parseMessage(t + 1, n, !0);
        if (o.err)
          return o;
        var l = o.val, a = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Ir(this.char()))
            return this.error(I.INVALID_TAG, L(a, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(I.UNMATCHED_CLOSING_TAG, L(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: z.tag,
              value: i,
              children: l,
              location: L(r, this.clonePosition())
            },
            err: null
          } : this.error(I.INVALID_TAG, L(a, this.clonePosition())));
        } else
          return this.error(I.UNCLOSED_TAG, L(r, this.clonePosition()));
      } else
        return this.error(I.INVALID_TAG, L(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && gf(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var o = this.tryParseQuote(n);
        if (o) {
          i += o;
          continue;
        }
        var l = this.tryParseUnquoted(t, n);
        if (l) {
          i += l;
          continue;
        }
        var a = this.tryParseLeftAngleBracket();
        if (a) {
          i += a;
          continue;
        }
        break;
      }
      var s = L(r, this.clonePosition());
      return {
        val: { type: z.literal, value: i, location: s },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !pf(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return Nr.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), Nr(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(I.EXPECT_ARGUMENT_CLOSING_BRACE, L(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(I.EMPTY_ARGUMENT, L(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(I.MALFORMED_ARGUMENT, L(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(I.EXPECT_ARGUMENT_CLOSING_BRACE, L(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: z.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: L(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(I.EXPECT_ARGUMENT_CLOSING_BRACE, L(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(I.MALFORMED_ARGUMENT, L(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Pr(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var o = this.clonePosition(), l = L(t, o);
      return { value: r, location: l };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var o, l = this.clonePosition(), a = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (a) {
        case "":
          return this.error(I.EXPECT_ARGUMENT_TYPE, L(l, s));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var f = this.clonePosition(), c = this.parseSimpleArgStyleIfPossible();
            if (c.err)
              return c;
            var _ = df(c.val);
            if (_.length === 0)
              return this.error(I.EXPECT_ARGUMENT_STYLE, L(this.clonePosition(), this.clonePosition()));
            var h = L(f, this.clonePosition());
            u = { style: _, styleLocation: h };
          }
          var d = this.tryParseArgumentClose(i);
          if (d.err)
            return d;
          var p = L(i, this.clonePosition());
          if (u && Hi(u == null ? void 0 : u.style, "::", 0)) {
            var w = hf(u.style.slice(2));
            if (a === "number") {
              var c = this.parseNumberSkeletonFromString(w, u.styleLocation);
              return c.err ? c : {
                val: { type: z.number, value: r, location: p, style: c.val },
                err: null
              };
            } else {
              if (w.length === 0)
                return this.error(I.EXPECT_DATE_TIME_SKELETON, p);
              var v = w;
              this.locale && (v = $u(w, this.locale));
              var _ = {
                type: At.dateTime,
                pattern: v,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Wu(v) : {}
              }, E = a === "date" ? z.date : z.time;
              return {
                val: { type: E, value: r, location: p, style: _ },
                err: null
              };
            }
          }
          return {
            val: {
              type: a === "number" ? z.number : a === "date" ? z.date : z.time,
              value: r,
              location: p,
              style: (o = u == null ? void 0 : u.style) !== null && o !== void 0 ? o : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var b = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(I.EXPECT_SELECT_ARGUMENT_OPTIONS, L(b, U({}, b)));
          this.bumpSpace();
          var S = this.parseIdentifierIfPossible(), H = 0;
          if (a !== "select" && S.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(I.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, L(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var c = this.tryParseDecimalInteger(I.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, I.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (c.err)
              return c;
            this.bumpSpace(), S = this.parseIdentifierIfPossible(), H = c.val;
          }
          var g = this.tryParsePluralOrSelectOptions(t, a, n, S);
          if (g.err)
            return g;
          var d = this.tryParseArgumentClose(i);
          if (d.err)
            return d;
          var Z = L(i, this.clonePosition());
          return a === "select" ? {
            val: {
              type: z.select,
              value: r,
              options: Ni(g.val),
              location: Z
            },
            err: null
          } : {
            val: {
              type: z.plural,
              value: r,
              options: Ni(g.val),
              offset: H,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: Z
            },
            err: null
          };
        }
        default:
          return this.error(I.INVALID_ARGUMENT_TYPE, L(l, s));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(I.EXPECT_ARGUMENT_CLOSING_BRACE, L(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(I.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, L(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var r = [];
      try {
        r = xu(t);
      } catch {
        return this.error(I.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: At.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Ku(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var o, l = !1, a = [], s = /* @__PURE__ */ new Set(), u = i.value, f = i.location; ; ) {
        if (u.length === 0) {
          var c = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var _ = this.tryParseDecimalInteger(I.EXPECT_PLURAL_ARGUMENT_SELECTOR, I.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (_.err)
              return _;
            f = L(c, this.clonePosition()), u = this.message.slice(c.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(n === "select" ? I.DUPLICATE_SELECT_ARGUMENT_SELECTOR : I.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        u === "other" && (l = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? I.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : I.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, L(this.clonePosition(), this.clonePosition()));
        var d = this.parseMessage(t + 1, n, r);
        if (d.err)
          return d;
        var p = this.tryParseArgumentClose(h);
        if (p.err)
          return p;
        a.push([
          u,
          {
            value: d.val,
            location: L(h, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), o = this.parseIdentifierIfPossible(), u = o.value, f = o.location;
      }
      return a.length === 0 ? this.error(n === "select" ? I.EXPECT_SELECT_ARGUMENT_SELECTOR : I.EXPECT_PLURAL_ARGUMENT_SELECTOR, L(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(I.MISSING_OTHER_CLAUSE, L(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var o = !1, l = 0; !this.isEOF(); ) {
        var a = this.char();
        if (a >= 48 && a <= 57)
          o = !0, l = l * 10 + (a - 48), this.bump();
        else
          break;
      }
      var s = L(i, this.clonePosition());
      return o ? (l *= r, cf(l) ? { val: l, err: null } : this.error(n, s)) : this.error(t, s);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var n = Wo(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (Hi(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), r = this.message.indexOf(t, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && xo(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Ir(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function pf(e) {
  return Ir(e) || e === 47;
}
function gf(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function xo(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function bf(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Lr(e) {
  e.forEach(function(t) {
    if (delete t.location, Uo(t) || Fo(t))
      for (var n in t.options)
        delete t.options[n].location, Lr(t.options[n].value);
    else
      Do(t) && jo(t.style) || (Mo(t) || Ro(t)) && Cr(t.style) ? delete t.style.location : Go(t) && Lr(t.children);
  });
}
function wf(e, t) {
  t === void 0 && (t = {}), t = U({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new mf(e, t).parse();
  if (n.err) {
    var r = SyntaxError(I[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Lr(n.val), n.val;
}
function sr(e, t) {
  var n = t && t.cache ? t.cache : Tf, r = t && t.serializer ? t.serializer : kf, i = t && t.strategy ? t.strategy : yf;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function vf(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Jo(e, t, n, r) {
  var i = vf(r) ? r : n(r), o = t.get(i);
  return typeof o > "u" && (o = e.call(this, r), t.set(i, o)), o;
}
function Qo(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), o = t.get(i);
  return typeof o > "u" && (o = e.apply(this, r), t.set(i, o)), o;
}
function qr(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function yf(e, t) {
  var n = e.length === 1 ? Jo : Qo;
  return qr(e, this, n, t.cache.create(), t.serializer);
}
function Ef(e, t) {
  return qr(e, this, Qo, t.cache.create(), t.serializer);
}
function Sf(e, t) {
  return qr(e, this, Jo, t.cache.create(), t.serializer);
}
var kf = function() {
  return JSON.stringify(arguments);
};
function zr() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
zr.prototype.get = function(e) {
  return this.cache[e];
};
zr.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Tf = {
  create: function() {
    return new zr();
  }
}, ar = {
  variadic: Ef,
  monadic: Sf
}, Bt;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Bt || (Bt = {}));
var Nn = (
  /** @class */
  function(e) {
    Hn(t, e);
    function t(n, r, i) {
      var o = e.call(this, n) || this;
      return o.code = r, o.originalMessage = i, o;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Ii = (
  /** @class */
  function(e) {
    Hn(t, e);
    function t(n, r, i, o) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Bt.INVALID_VALUE, o) || this;
    }
    return t;
  }(Nn)
), Af = (
  /** @class */
  function(e) {
    Hn(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Bt.INVALID_VALUE, i) || this;
    }
    return t;
  }(Nn)
), Bf = (
  /** @class */
  function(e) {
    Hn(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Bt.MISSING_VALUE, r) || this;
    }
    return t;
  }(Nn)
), te;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(te || (te = {}));
function Cf(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== te.literal || n.type !== te.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function Hf(e) {
  return typeof e == "function";
}
function mn(e, t, n, r, i, o, l) {
  if (e.length === 1 && Ti(e[0]))
    return [
      {
        type: te.literal,
        value: e[0].value
      }
    ];
  for (var a = [], s = 0, u = e; s < u.length; s++) {
    var f = u[s];
    if (Ti(f)) {
      a.push({
        type: te.literal,
        value: f.value
      });
      continue;
    }
    if (Vu(f)) {
      typeof o == "number" && a.push({
        type: te.literal,
        value: n.getNumberFormat(t).format(o)
      });
      continue;
    }
    var c = f.value;
    if (!(i && c in i))
      throw new Bf(c, l);
    var _ = i[c];
    if (zu(f)) {
      (!_ || typeof _ == "string" || typeof _ == "number") && (_ = typeof _ == "string" || typeof _ == "number" ? String(_) : ""), a.push({
        type: typeof _ == "string" ? te.literal : te.object,
        value: _
      });
      continue;
    }
    if (Mo(f)) {
      var h = typeof f.style == "string" ? r.date[f.style] : Cr(f.style) ? f.style.parsedOptions : void 0;
      a.push({
        type: te.literal,
        value: n.getDateTimeFormat(t, h).format(_)
      });
      continue;
    }
    if (Ro(f)) {
      var h = typeof f.style == "string" ? r.time[f.style] : Cr(f.style) ? f.style.parsedOptions : r.time.medium;
      a.push({
        type: te.literal,
        value: n.getDateTimeFormat(t, h).format(_)
      });
      continue;
    }
    if (Do(f)) {
      var h = typeof f.style == "string" ? r.number[f.style] : jo(f.style) ? f.style.parsedOptions : void 0;
      h && h.scale && (_ = _ * (h.scale || 1)), a.push({
        type: te.literal,
        value: n.getNumberFormat(t, h).format(_)
      });
      continue;
    }
    if (Go(f)) {
      var d = f.children, p = f.value, w = i[p];
      if (!Hf(w))
        throw new Af(p, "function", l);
      var v = mn(d, t, n, r, i, o), E = w(v.map(function(H) {
        return H.value;
      }));
      Array.isArray(E) || (E = [E]), a.push.apply(a, E.map(function(H) {
        return {
          type: typeof H == "string" ? te.literal : te.object,
          value: H
        };
      }));
    }
    if (Uo(f)) {
      var b = f.options[_] || f.options.other;
      if (!b)
        throw new Ii(f.value, _, Object.keys(f.options), l);
      a.push.apply(a, mn(b.value, t, n, r, i));
      continue;
    }
    if (Fo(f)) {
      var b = f.options["=".concat(_)];
      if (!b) {
        if (!Intl.PluralRules)
          throw new Nn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Bt.MISSING_INTL_API, l);
        var S = n.getPluralRules(t, { type: f.pluralType }).select(_ - (f.offset || 0));
        b = f.options[S] || f.options.other;
      }
      if (!b)
        throw new Ii(f.value, _, Object.keys(f.options), l);
      a.push.apply(a, mn(b.value, t, n, r, i, _ - (f.offset || 0)));
      continue;
    }
  }
  return Cf(a);
}
function Nf(e, t) {
  return t ? U(U(U({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = U(U({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function Pf(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = Nf(e[r], t[r]), n;
  }, U({}, e)) : e;
}
function ur(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function If(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: sr(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, or([void 0], n, !1)))();
    }, {
      cache: ur(e.number),
      strategy: ar.variadic
    }),
    getDateTimeFormat: sr(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, or([void 0], n, !1)))();
    }, {
      cache: ur(e.dateTime),
      strategy: ar.variadic
    }),
    getPluralRules: sr(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, or([void 0], n, !1)))();
    }, {
      cache: ur(e.pluralRules),
      strategy: ar.variadic
    })
  };
}
var Lf = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      var o = this;
      if (n === void 0 && (n = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var a = o.formatToParts(l);
        if (a.length === 1)
          return a[0].value;
        var s = a.reduce(function(u, f) {
          return !u.length || f.type !== te.literal || typeof u[u.length - 1] != "string" ? u.push(f.value) : u[u.length - 1] += f.value, u;
        }, []);
        return s.length <= 1 ? s[0] || "" : s;
      }, this.formatToParts = function(l) {
        return mn(o.ast, o.locales, o.formatters, o.formats, l, void 0, o.message);
      }, this.resolvedOptions = function() {
        return {
          locale: o.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return o.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = e.__parse(t, {
          ignoreTag: i == null ? void 0 : i.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Pf(e.formats, r), this.formatters = i && i.formatters || If(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      var n = Intl.NumberFormat.supportedLocalesOf(t);
      return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
    }, e.__parse = wf, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
);
function Of(e, t) {
  if (t == null)
    return;
  if (t in e)
    return e[t];
  const n = t.split(".");
  let r = e;
  for (let i = 0; i < n.length; i++)
    if (typeof r == "object") {
      if (i > 0) {
        const o = n.slice(i, n.length).join(".");
        if (o in r) {
          r = r[o];
          break;
        }
      }
      r = r[n[i]];
    } else
      r = void 0;
  return r;
}
const Ve = {}, Df = (e, t, n) => n && (t in Ve || (Ve[t] = {}), e in Ve[t] || (Ve[t][e] = n), n), Yo = (e, t) => {
  if (t == null)
    return;
  if (t in Ve && e in Ve[t])
    return Ve[t][e];
  const n = Pn(t);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], o = Rf(i, e);
    if (o)
      return Df(e, t, o);
  }
};
let Vr;
const Kt = Yt({});
function Mf(e) {
  return Vr[e] || null;
}
function Ko(e) {
  return e in Vr;
}
function Rf(e, t) {
  if (!Ko(e))
    return null;
  const n = Mf(e);
  return Of(n, t);
}
function Uf(e) {
  if (e == null)
    return;
  const t = Pn(e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Ko(r))
      return r;
  }
}
function Ff(e, ...t) {
  delete Ve[e], Kt.update((n) => (n[e] = qu.all([n[e] || {}, ...t]), n));
}
It(
  [Kt],
  ([e]) => Object.keys(e)
);
Kt.subscribe((e) => Vr = e);
const pn = {};
function Gf(e, t) {
  pn[e].delete(t), pn[e].size === 0 && delete pn[e];
}
function $o(e) {
  return pn[e];
}
function jf(e) {
  return Pn(e).map((t) => {
    const n = $o(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function Or(e) {
  return e == null ? !1 : Pn(e).some(
    (t) => {
      var n;
      return (n = $o(t)) == null ? void 0 : n.size;
    }
  );
}
function qf(e, t) {
  return Promise.all(
    t.map((r) => (Gf(e, r), r().then((i) => i.default || i)))
  ).then((r) => Ff(e, ...r));
}
const Mt = {};
function el(e) {
  if (!Or(e))
    return e in Mt ? Mt[e] : Promise.resolve();
  const t = jf(e);
  return Mt[e] = Promise.all(
    t.map(
      ([n, r]) => qf(n, r)
    )
  ).then(() => {
    if (Or(e))
      return el(e);
    delete Mt[e];
  }), Mt[e];
}
const zf = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
}, Vf = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: zf,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Xf = Vf;
function Ct() {
  return Xf;
}
const fr = Yt(!1);
var Wf = Object.defineProperty, Zf = Object.defineProperties, xf = Object.getOwnPropertyDescriptors, Li = Object.getOwnPropertySymbols, Jf = Object.prototype.hasOwnProperty, Qf = Object.prototype.propertyIsEnumerable, Oi = (e, t, n) => t in e ? Wf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Yf = (e, t) => {
  for (var n in t || (t = {}))
    Jf.call(t, n) && Oi(e, n, t[n]);
  if (Li)
    for (var n of Li(t))
      Qf.call(t, n) && Oi(e, n, t[n]);
  return e;
}, Kf = (e, t) => Zf(e, xf(t));
let Dr;
const yn = Yt(null);
function Di(e) {
  return e.split("-").map((t, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Pn(e, t = Ct().fallbackLocale) {
  const n = Di(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...Di(t)])] : n;
}
function mt() {
  return Dr ?? void 0;
}
yn.subscribe((e) => {
  Dr = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const $f = (e) => {
  if (e && Uf(e) && Or(e)) {
    const { loadingDelay: t } = Ct();
    let n;
    return typeof window < "u" && mt() != null && t ? n = window.setTimeout(
      () => fr.set(!0),
      t
    ) : fr.set(!0), el(e).then(() => {
      yn.set(e);
    }).finally(() => {
      clearTimeout(n), fr.set(!1);
    });
  }
  return yn.set(e);
}, $t = Kf(Yf({}, yn), {
  set: $f
}), In = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in t ? t[i] : t[i] = e(r);
  };
};
var ec = Object.defineProperty, En = Object.getOwnPropertySymbols, tl = Object.prototype.hasOwnProperty, nl = Object.prototype.propertyIsEnumerable, Mi = (e, t, n) => t in e ? ec(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Xr = (e, t) => {
  for (var n in t || (t = {}))
    tl.call(t, n) && Mi(e, n, t[n]);
  if (En)
    for (var n of En(t))
      nl.call(t, n) && Mi(e, n, t[n]);
  return e;
}, Lt = (e, t) => {
  var n = {};
  for (var r in e)
    tl.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && En)
    for (var r of En(e))
      t.indexOf(r) < 0 && nl.call(e, r) && (n[r] = e[r]);
  return n;
};
const Wt = (e, t) => {
  const { formats: n } = Ct();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, tc = In(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Lt(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Wt("number", r)), new Intl.NumberFormat(n, i);
  }
), nc = In(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Lt(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Wt("date", r) : Object.keys(i).length === 0 && (i = Wt("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), rc = In(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Lt(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Wt("time", r) : Object.keys(i).length === 0 && (i = Wt("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), ic = (e = {}) => {
  var t = e, {
    locale: n = mt()
  } = t, r = Lt(t, [
    "locale"
  ]);
  return tc(Xr({ locale: n }, r));
}, oc = (e = {}) => {
  var t = e, {
    locale: n = mt()
  } = t, r = Lt(t, [
    "locale"
  ]);
  return nc(Xr({ locale: n }, r));
}, lc = (e = {}) => {
  var t = e, {
    locale: n = mt()
  } = t, r = Lt(t, [
    "locale"
  ]);
  return rc(Xr({ locale: n }, r));
}, sc = In(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = mt()) => new Lf(e, t, Ct().formats, {
    ignoreTag: Ct().ignoreTag
  })
), ac = (e, t = {}) => {
  var n, r, i, o;
  let l = t;
  typeof e == "object" && (l = e, e = l.id);
  const {
    values: a,
    locale: s = mt(),
    default: u
  } = l;
  if (s == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let f = Yo(e, s);
  if (!f)
    f = (o = (i = (r = (n = Ct()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: s, id: e, defaultValue: u })) != null ? i : u) != null ? o : e;
  else if (typeof f != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof f}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), f;
  if (!a)
    return f;
  let c = f;
  try {
    c = sc(f, s).format(a);
  } catch (_) {
    _ instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      _.message
    );
  }
  return c;
}, uc = (e, t) => lc(t).format(e), fc = (e, t) => oc(t).format(e), cc = (e, t) => ic(t).format(e), _c = (e, t = mt()) => Yo(e, t);
It([$t, Kt], () => ac);
It([$t], () => uc);
It([$t], () => fc);
It([$t], () => cc);
It([$t, Kt], () => _c);
const {
  SvelteComponent: hc,
  append: le,
  attr: tt,
  detach: rl,
  element: nt,
  init: dc,
  insert: il,
  noop: Ri,
  safe_not_equal: mc,
  set_data: Sn,
  set_style: cr,
  space: Mr,
  text: Et,
  toggle_class: Ui
} = window.__gradio__svelte__internal, { onMount: pc, createEventDispatcher: gc, getContext: bc } = window.__gradio__svelte__internal;
function Fi(e) {
  let t, n, r, i, o = Ut(
    /*file_to_display*/
    e[2]
  ) + "", l, a, s, u, f = (
    /*file_to_display*/
    e[2].orig_name + ""
  ), c;
  return {
    c() {
      t = nt("div"), n = nt("span"), r = nt("div"), i = nt("progress"), l = Et(o), s = Mr(), u = nt("span"), c = Et(f), cr(i, "visibility", "hidden"), cr(i, "height", "0"), cr(i, "width", "0"), i.value = a = Ut(
        /*file_to_display*/
        e[2]
      ), tt(i, "max", "100"), tt(i, "class", "svelte-cr2edf"), tt(r, "class", "progress-bar svelte-cr2edf"), tt(u, "class", "file-name svelte-cr2edf"), tt(t, "class", "file svelte-cr2edf");
    },
    m(_, h) {
      il(_, t, h), le(t, n), le(n, r), le(r, i), le(i, l), le(t, s), le(t, u), le(u, c);
    },
    p(_, h) {
      h & /*file_to_display*/
      4 && o !== (o = Ut(
        /*file_to_display*/
        _[2]
      ) + "") && Sn(l, o), h & /*file_to_display*/
      4 && a !== (a = Ut(
        /*file_to_display*/
        _[2]
      )) && (i.value = a), h & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      _[2].orig_name + "") && Sn(c, f);
    },
    d(_) {
      _ && rl(t);
    }
  };
}
function wc(e) {
  let t, n, r, i = (
    /*files_with_progress*/
    e[0].length + ""
  ), o, l, a = (
    /*files_with_progress*/
    e[0].length > 1 ? "files" : "file"
  ), s, u, f, c = (
    /*file_to_display*/
    e[2] && Fi(e)
  );
  return {
    c() {
      t = nt("div"), n = nt("span"), r = Et("Uploading "), o = Et(i), l = Mr(), s = Et(a), u = Et("..."), f = Mr(), c && c.c(), tt(n, "class", "uploading svelte-cr2edf"), tt(t, "class", "wrap svelte-cr2edf"), Ui(
        t,
        "progress",
        /*progress*/
        e[1]
      );
    },
    m(_, h) {
      il(_, t, h), le(t, n), le(n, r), le(n, o), le(n, l), le(n, s), le(n, u), le(t, f), c && c.m(t, null);
    },
    p(_, [h]) {
      h & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && Sn(o, i), h & /*files_with_progress*/
      1 && a !== (a = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && Sn(s, a), /*file_to_display*/
      _[2] ? c ? c.p(_, h) : (c = Fi(_), c.c(), c.m(t, null)) : c && (c.d(1), c = null), h & /*progress*/
      2 && Ui(
        t,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: Ri,
    o: Ri,
    d(_) {
      _ && rl(t), c && c.d();
    }
  };
}
function Ut(e) {
  return e.progress * 100 / (e.size || 0) || 0;
}
function vc(e) {
  let t = 0;
  return e.forEach((n) => {
    t += Ut(n);
  }), document.documentElement.style.setProperty("--upload-progress-width", (t / e.length).toFixed(2) + "%"), t / e.length;
}
function yc(e, t, n) {
  let { upload_id: r } = t, { root: i } = t, { files: o } = t, l, a = !1, s, u, f = o.map((d) => ({ ...d, progress: 0 }));
  const c = gc();
  function _(d, p) {
    n(0, f = f.map((w) => (w.orig_name === d && (w.progress += p), w)));
  }
  const h = bc("EventSource_factory");
  return pc(() => {
    l = h(new URL(`${i}/upload_progress?upload_id=${r}`)), l.onmessage = async function(d) {
      const p = JSON.parse(d.data);
      a || n(1, a = !0), p.msg === "done" ? (l.close(), c("done")) : (n(6, s = p), _(p.orig_name, p.chunk_size));
    };
  }), e.$$set = (d) => {
    "upload_id" in d && n(3, r = d.upload_id), "root" in d && n(4, i = d.root), "files" in d && n(5, o = d.files);
  }, e.$$.update = () => {
    e.$$.dirty & /*files_with_progress*/
    1 && vc(f), e.$$.dirty & /*current_file_upload, files_with_progress*/
    65 && n(2, u = s || f[0]);
  }, [
    f,
    a,
    u,
    r,
    i,
    o,
    s
  ];
}
class Ec extends hc {
  constructor(t) {
    super(), dc(this, t, yc, wc, mc, { upload_id: 3, root: 4, files: 5 });
  }
}
const {
  SvelteComponent: Sc,
  append: Gi,
  attr: $,
  binding_callbacks: kc,
  bubble: Ke,
  check_outros: ol,
  create_component: Tc,
  create_slot: ll,
  destroy_component: Ac,
  detach: Ln,
  element: Rr,
  empty: sl,
  get_all_dirty_from_scope: al,
  get_slot_changes: ul,
  group_outros: fl,
  init: Bc,
  insert: On,
  listen: de,
  mount_component: Cc,
  prevent_default: $e,
  run_all: Hc,
  safe_not_equal: Nc,
  set_style: cl,
  space: Pc,
  stop_propagation: et,
  toggle_class: ee,
  transition_in: We,
  transition_out: ut,
  update_slot_base: _l
} = window.__gradio__svelte__internal, { createEventDispatcher: Ic, tick: Lc, getContext: Oc } = window.__gradio__svelte__internal;
function Dc(e) {
  let t, n, r, i, o, l, a, s, u, f;
  const c = (
    /*#slots*/
    e[22].default
  ), _ = ll(
    c,
    e,
    /*$$scope*/
    e[21],
    null
  );
  return {
    c() {
      t = Rr("button"), _ && _.c(), n = Pc(), r = Rr("input"), $(r, "aria-label", "file upload"), $(r, "data-testid", "file-upload"), $(r, "type", "file"), $(
        r,
        "accept",
        /*accept_file_types*/
        e[12]
      ), r.multiple = i = /*file_count*/
      e[5] === "multiple" || void 0, $(r, "webkitdirectory", o = /*file_count*/
      e[5] === "directory" || void 0), $(r, "mozdirectory", l = /*file_count*/
      e[5] === "directory" || void 0), $(r, "class", "svelte-1aq8tno"), $(t, "tabindex", a = /*hidden*/
      e[7] ? -1 : 0), $(t, "class", "svelte-1aq8tno"), ee(
        t,
        "hidden",
        /*hidden*/
        e[7]
      ), ee(
        t,
        "center",
        /*center*/
        e[3]
      ), ee(
        t,
        "boundedheight",
        /*boundedheight*/
        e[2]
      ), ee(
        t,
        "flex",
        /*flex*/
        e[4]
      ), cl(t, "height", "100%");
    },
    m(h, d) {
      On(h, t, d), _ && _.m(t, null), Gi(t, n), Gi(t, r), e[30](r), s = !0, u || (f = [
        de(
          r,
          "change",
          /*load_files_from_upload*/
          e[15]
        ),
        de(t, "drag", et($e(
          /*drag_handler*/
          e[23]
        ))),
        de(t, "dragstart", et($e(
          /*dragstart_handler*/
          e[24]
        ))),
        de(t, "dragend", et($e(
          /*dragend_handler*/
          e[25]
        ))),
        de(t, "dragover", et($e(
          /*dragover_handler*/
          e[26]
        ))),
        de(t, "dragenter", et($e(
          /*dragenter_handler*/
          e[27]
        ))),
        de(t, "dragleave", et($e(
          /*dragleave_handler*/
          e[28]
        ))),
        de(t, "drop", et($e(
          /*drop_handler*/
          e[29]
        ))),
        de(
          t,
          "click",
          /*open_file_upload*/
          e[9]
        ),
        de(
          t,
          "drop",
          /*loadFilesFromDrop*/
          e[16]
        ),
        de(
          t,
          "dragenter",
          /*updateDragging*/
          e[14]
        ),
        de(
          t,
          "dragleave",
          /*updateDragging*/
          e[14]
        )
      ], u = !0);
    },
    p(h, d) {
      _ && _.p && (!s || d[0] & /*$$scope*/
      2097152) && _l(
        _,
        c,
        h,
        /*$$scope*/
        h[21],
        s ? ul(
          c,
          /*$$scope*/
          h[21],
          d,
          null
        ) : al(
          /*$$scope*/
          h[21]
        ),
        null
      ), (!s || d[0] & /*accept_file_types*/
      4096) && $(
        r,
        "accept",
        /*accept_file_types*/
        h[12]
      ), (!s || d[0] & /*file_count*/
      32 && i !== (i = /*file_count*/
      h[5] === "multiple" || void 0)) && (r.multiple = i), (!s || d[0] & /*file_count*/
      32 && o !== (o = /*file_count*/
      h[5] === "directory" || void 0)) && $(r, "webkitdirectory", o), (!s || d[0] & /*file_count*/
      32 && l !== (l = /*file_count*/
      h[5] === "directory" || void 0)) && $(r, "mozdirectory", l), (!s || d[0] & /*hidden*/
      128 && a !== (a = /*hidden*/
      h[7] ? -1 : 0)) && $(t, "tabindex", a), (!s || d[0] & /*hidden*/
      128) && ee(
        t,
        "hidden",
        /*hidden*/
        h[7]
      ), (!s || d[0] & /*center*/
      8) && ee(
        t,
        "center",
        /*center*/
        h[3]
      ), (!s || d[0] & /*boundedheight*/
      4) && ee(
        t,
        "boundedheight",
        /*boundedheight*/
        h[2]
      ), (!s || d[0] & /*flex*/
      16) && ee(
        t,
        "flex",
        /*flex*/
        h[4]
      );
    },
    i(h) {
      s || (We(_, h), s = !0);
    },
    o(h) {
      ut(_, h), s = !1;
    },
    d(h) {
      h && Ln(t), _ && _.d(h), e[30](null), u = !1, Hc(f);
    }
  };
}
function Mc(e) {
  let t, n, r = !/*hidden*/
  e[7] && ji(e);
  return {
    c() {
      r && r.c(), t = sl();
    },
    m(i, o) {
      r && r.m(i, o), On(i, t, o), n = !0;
    },
    p(i, o) {
      /*hidden*/
      i[7] ? r && (fl(), ut(r, 1, 1, () => {
        r = null;
      }), ol()) : r ? (r.p(i, o), o[0] & /*hidden*/
      128 && We(r, 1)) : (r = ji(i), r.c(), We(r, 1), r.m(t.parentNode, t));
    },
    i(i) {
      n || (We(r), n = !0);
    },
    o(i) {
      ut(r), n = !1;
    },
    d(i) {
      i && Ln(t), r && r.d(i);
    }
  };
}
function Rc(e) {
  let t, n, r, i, o;
  const l = (
    /*#slots*/
    e[22].default
  ), a = ll(
    l,
    e,
    /*$$scope*/
    e[21],
    null
  );
  return {
    c() {
      t = Rr("button"), a && a.c(), $(t, "tabindex", n = /*hidden*/
      e[7] ? -1 : 0), $(t, "class", "svelte-1aq8tno"), ee(
        t,
        "hidden",
        /*hidden*/
        e[7]
      ), ee(
        t,
        "center",
        /*center*/
        e[3]
      ), ee(
        t,
        "boundedheight",
        /*boundedheight*/
        e[2]
      ), ee(
        t,
        "flex",
        /*flex*/
        e[4]
      ), cl(t, "height", "100%");
    },
    m(s, u) {
      On(s, t, u), a && a.m(t, null), r = !0, i || (o = de(
        t,
        "click",
        /*paste_clipboard*/
        e[8]
      ), i = !0);
    },
    p(s, u) {
      a && a.p && (!r || u[0] & /*$$scope*/
      2097152) && _l(
        a,
        l,
        s,
        /*$$scope*/
        s[21],
        r ? ul(
          l,
          /*$$scope*/
          s[21],
          u,
          null
        ) : al(
          /*$$scope*/
          s[21]
        ),
        null
      ), (!r || u[0] & /*hidden*/
      128 && n !== (n = /*hidden*/
      s[7] ? -1 : 0)) && $(t, "tabindex", n), (!r || u[0] & /*hidden*/
      128) && ee(
        t,
        "hidden",
        /*hidden*/
        s[7]
      ), (!r || u[0] & /*center*/
      8) && ee(
        t,
        "center",
        /*center*/
        s[3]
      ), (!r || u[0] & /*boundedheight*/
      4) && ee(
        t,
        "boundedheight",
        /*boundedheight*/
        s[2]
      ), (!r || u[0] & /*flex*/
      16) && ee(
        t,
        "flex",
        /*flex*/
        s[4]
      );
    },
    i(s) {
      r || (We(a, s), r = !0);
    },
    o(s) {
      ut(a, s), r = !1;
    },
    d(s) {
      s && Ln(t), a && a.d(s), i = !1, o();
    }
  };
}
function ji(e) {
  let t, n;
  return t = new Ec({
    props: {
      root: (
        /*root*/
        e[6]
      ),
      upload_id: (
        /*upload_id*/
        e[10]
      ),
      files: (
        /*file_data*/
        e[11]
      )
    }
  }), {
    c() {
      Tc(t.$$.fragment);
    },
    m(r, i) {
      Cc(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & /*root*/
      64 && (o.root = /*root*/
      r[6]), i[0] & /*upload_id*/
      1024 && (o.upload_id = /*upload_id*/
      r[10]), i[0] & /*file_data*/
      2048 && (o.files = /*file_data*/
      r[11]), t.$set(o);
    },
    i(r) {
      n || (We(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ut(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Ac(t, r);
    }
  };
}
function Uc(e) {
  let t, n, r, i;
  const o = [Rc, Mc, Dc], l = [];
  function a(s, u) {
    return (
      /*filetype*/
      s[0] === "clipboard" ? 0 : (
        /*uploading*/
        s[1] ? 1 : 2
      )
    );
  }
  return t = a(e), n = l[t] = o[t](e), {
    c() {
      n.c(), r = sl();
    },
    m(s, u) {
      l[t].m(s, u), On(s, r, u), i = !0;
    },
    p(s, u) {
      let f = t;
      t = a(s), t === f ? l[t].p(s, u) : (fl(), ut(l[f], 1, 1, () => {
        l[f] = null;
      }), ol(), n = l[t], n ? n.p(s, u) : (n = l[t] = o[t](s), n.c()), We(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      i || (We(n), i = !0);
    },
    o(s) {
      ut(n), i = !1;
    },
    d(s) {
      s && Ln(r), l[t].d(s);
    }
  };
}
function qi(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], o = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = o(n)) : (i === "call" || i === "optionalCall") && (n = o((...l) => n.call(t, ...l)), t = void 0);
  }
  return n;
}
function Fc(e, t, n) {
  if (!e || e === "*" || e === "file/*" || Array.isArray(e) && e.some((i) => i === "*" || i === "file/*"))
    return !0;
  let r;
  if (typeof e == "string")
    r = e.split(",").map((i) => i.trim());
  else if (Array.isArray(e))
    r = e;
  else
    return !1;
  return r.includes(t) || r.some((i) => {
    const [o] = i.split("/").map((l) => l.trim());
    return i.endsWith("/*") && n.startsWith(o + "/");
  });
}
function Gc(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { filetype: o = null } = t, { dragging: l = !1 } = t, { boundedheight: a = !0 } = t, { center: s = !0 } = t, { flex: u = !0 } = t, { file_count: f = "single" } = t, { disable_click: c = !1 } = t, { root: _ } = t, { hidden: h = !1 } = t, { format: d = "file" } = t, { uploading: p = !1 } = t, w, v, E;
  const b = Oc("upload_files");
  let S;
  const H = Ic(), g = ["image", "video", "audio", "text", "file"], Z = (m) => m.startsWith(".") || m.endsWith("/*") ? m : g.includes(m) ? m + "/*" : "." + m;
  function P() {
    n(17, l = !l);
  }
  function T() {
    navigator.clipboard.read().then(async (m) => {
      for (let y = 0; y < m.length; y++) {
        const M = m[y].types.find((D) => D.startsWith("image/"));
        if (M) {
          m[y].getType(M).then(async (D) => {
            const re = new File([D], `clipboard.${M.replace("image/", "")}`);
            await ue([re]);
          });
          break;
        }
      }
    });
  }
  function k() {
    c || (n(13, S.value = "", S), S.click());
  }
  async function ke(m) {
    await Lc(), n(10, w = Math.random().toString(36).substring(2, 15)), n(1, p = !0);
    const y = await hu(m, _, w, b);
    return H("load", f === "single" ? qi([y, "optionalAccess", (M) => M[0]]) : y), n(1, p = !1), y || [];
  }
  async function ue(m) {
    if (!m.length)
      return;
    let y = m.map((M) => new File([M], M.name));
    return n(11, v = await du(y)), await ke(v);
  }
  async function Te(m) {
    const y = m.target;
    if (y.files)
      if (d != "blob")
        await ue(Array.from(y.files));
      else {
        if (f === "single") {
          H("load", y.files[0]);
          return;
        }
        H("load", y.files);
      }
  }
  async function Re(m) {
    if (n(17, l = !1), !qi([m, "access", (M) => M.dataTransfer, "optionalAccess", (M) => M.files]))
      return;
    const y = Array.from(m.dataTransfer.files).filter((M) => {
      const D = "." + M.name.split(".").pop();
      return D && Fc(E, D, M.type) || (D && Array.isArray(o) ? o.includes(D) : D === o) ? !0 : (H("error", `Invalid file type only ${o} allowed.`), !1);
    });
    await ue(y);
  }
  function fe(m) {
    Ke.call(this, e, m);
  }
  function pt(m) {
    Ke.call(this, e, m);
  }
  function Ze(m) {
    Ke.call(this, e, m);
  }
  function gt(m) {
    Ke.call(this, e, m);
  }
  function xe(m) {
    Ke.call(this, e, m);
  }
  function A(m) {
    Ke.call(this, e, m);
  }
  function W(m) {
    Ke.call(this, e, m);
  }
  function J(m) {
    kc[m ? "unshift" : "push"](() => {
      S = m, n(13, S);
    });
  }
  return e.$$set = (m) => {
    "filetype" in m && n(0, o = m.filetype), "dragging" in m && n(17, l = m.dragging), "boundedheight" in m && n(2, a = m.boundedheight), "center" in m && n(3, s = m.center), "flex" in m && n(4, u = m.flex), "file_count" in m && n(5, f = m.file_count), "disable_click" in m && n(18, c = m.disable_click), "root" in m && n(6, _ = m.root), "hidden" in m && n(7, h = m.hidden), "format" in m && n(19, d = m.format), "uploading" in m && n(1, p = m.uploading), "$$scope" in m && n(21, i = m.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*filetype*/
    1 && (o == null ? n(12, E = null) : typeof o == "string" ? n(12, E = Z(o)) : (n(0, o = o.map(Z)), n(12, E = o.join(", "))));
  }, [
    o,
    p,
    a,
    s,
    u,
    f,
    _,
    h,
    T,
    k,
    w,
    v,
    E,
    S,
    P,
    Te,
    Re,
    l,
    c,
    d,
    ue,
    i,
    r,
    fe,
    pt,
    Ze,
    gt,
    xe,
    A,
    W,
    J
  ];
}
class jc extends Sc {
  constructor(t) {
    super(), Bc(
      this,
      t,
      Gc,
      Uc,
      Nc,
      {
        filetype: 0,
        dragging: 17,
        boundedheight: 2,
        center: 3,
        flex: 4,
        file_count: 5,
        disable_click: 18,
        root: 6,
        hidden: 7,
        format: 19,
        uploading: 1,
        paste_clipboard: 8,
        open_file_upload: 9,
        load_files: 20
      },
      null,
      [-1, -1]
    );
  }
  get paste_clipboard() {
    return this.$$.ctx[8];
  }
  get open_file_upload() {
    return this.$$.ctx[9];
  }
  get load_files() {
    return this.$$.ctx[20];
  }
}
const { setContext: $_, getContext: qc } = window.__gradio__svelte__internal, zc = "WORKER_PROXY_CONTEXT_KEY";
function hl() {
  return qc(zc);
}
function Vc(e) {
  return e.host === window.location.host || e.host === "localhost:7860" || e.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  e.host === "lite.local";
}
function dl(e, t) {
  const n = t.toLowerCase();
  for (const [r, i] of Object.entries(e))
    if (r.toLowerCase() === n)
      return i;
}
function ml(e) {
  if (e == null)
    return !1;
  const t = new URL(e, window.location.href);
  return !(!Vc(t) || t.protocol !== "http:" && t.protocol !== "https:");
}
async function eh(e) {
  if (e == null || !ml(e))
    return e;
  const t = hl();
  if (t == null)
    return e;
  const r = new URL(e, window.location.href).pathname;
  return t.httpRequest({
    method: "GET",
    path: r,
    headers: {},
    query_string: ""
  }).then((i) => {
    if (i.status !== 200)
      throw new Error(`Failed to get file ${r} from the Wasm worker.`);
    const o = new Blob([i.body], {
      type: dl(i.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: Xc,
  assign: kn,
  check_outros: pl,
  compute_rest_props: zi,
  create_slot: Wr,
  detach: Dn,
  element: gl,
  empty: bl,
  exclude_internal_props: Wc,
  get_all_dirty_from_scope: Zr,
  get_slot_changes: xr,
  get_spread_update: wl,
  group_outros: vl,
  init: Zc,
  insert: Mn,
  listen: yl,
  prevent_default: xc,
  safe_not_equal: Jc,
  set_attributes: Tn,
  transition_in: ft,
  transition_out: ct,
  update_slot_base: Jr
} = window.__gradio__svelte__internal, { createEventDispatcher: Qc } = window.__gradio__svelte__internal;
function Yc(e) {
  let t, n, r, i, o;
  const l = (
    /*#slots*/
    e[8].default
  ), a = Wr(
    l,
    e,
    /*$$scope*/
    e[7],
    null
  );
  let s = [
    { href: (
      /*href*/
      e[0]
    ) },
    {
      target: n = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      e[1]
    ) },
    /*$$restProps*/
    e[6]
  ], u = {};
  for (let f = 0; f < s.length; f += 1)
    u = kn(u, s[f]);
  return {
    c() {
      t = gl("a"), a && a.c(), Tn(t, u);
    },
    m(f, c) {
      Mn(f, t, c), a && a.m(t, null), r = !0, i || (o = yl(
        t,
        "click",
        /*dispatch*/
        e[3].bind(null, "click")
      ), i = !0);
    },
    p(f, c) {
      a && a.p && (!r || c & /*$$scope*/
      128) && Jr(
        a,
        l,
        f,
        /*$$scope*/
        f[7],
        r ? xr(
          l,
          /*$$scope*/
          f[7],
          c,
          null
        ) : Zr(
          /*$$scope*/
          f[7]
        ),
        null
      ), Tn(t, u = wl(s, [
        (!r || c & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) },
        { target: n },
        { rel: "noopener noreferrer" },
        (!r || c & /*download*/
        2) && { download: (
          /*download*/
          f[1]
        ) },
        c & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ]));
    },
    i(f) {
      r || (ft(a, f), r = !0);
    },
    o(f) {
      ct(a, f), r = !1;
    },
    d(f) {
      f && Dn(t), a && a.d(f), i = !1, o();
    }
  };
}
function Kc(e) {
  let t, n, r, i;
  const o = [e0, $c], l = [];
  function a(s, u) {
    return (
      /*is_downloading*/
      s[2] ? 0 : 1
    );
  }
  return t = a(e), n = l[t] = o[t](e), {
    c() {
      n.c(), r = bl();
    },
    m(s, u) {
      l[t].m(s, u), Mn(s, r, u), i = !0;
    },
    p(s, u) {
      let f = t;
      t = a(s), t === f ? l[t].p(s, u) : (vl(), ct(l[f], 1, 1, () => {
        l[f] = null;
      }), pl(), n = l[t], n ? n.p(s, u) : (n = l[t] = o[t](s), n.c()), ft(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      i || (ft(n), i = !0);
    },
    o(s) {
      ct(n), i = !1;
    },
    d(s) {
      s && Dn(r), l[t].d(s);
    }
  };
}
function $c(e) {
  let t, n, r, i;
  const o = (
    /*#slots*/
    e[8].default
  ), l = Wr(
    o,
    e,
    /*$$scope*/
    e[7],
    null
  );
  let a = [
    /*$$restProps*/
    e[6],
    { href: (
      /*href*/
      e[0]
    ) }
  ], s = {};
  for (let u = 0; u < a.length; u += 1)
    s = kn(s, a[u]);
  return {
    c() {
      t = gl("a"), l && l.c(), Tn(t, s);
    },
    m(u, f) {
      Mn(u, t, f), l && l.m(t, null), n = !0, r || (i = yl(t, "click", xc(
        /*wasm_click_handler*/
        e[5]
      )), r = !0);
    },
    p(u, f) {
      l && l.p && (!n || f & /*$$scope*/
      128) && Jr(
        l,
        o,
        u,
        /*$$scope*/
        u[7],
        n ? xr(
          o,
          /*$$scope*/
          u[7],
          f,
          null
        ) : Zr(
          /*$$scope*/
          u[7]
        ),
        null
      ), Tn(t, s = wl(a, [
        f & /*$$restProps*/
        64 && /*$$restProps*/
        u[6],
        (!n || f & /*href*/
        1) && { href: (
          /*href*/
          u[0]
        ) }
      ]));
    },
    i(u) {
      n || (ft(l, u), n = !0);
    },
    o(u) {
      ct(l, u), n = !1;
    },
    d(u) {
      u && Dn(t), l && l.d(u), r = !1, i();
    }
  };
}
function e0(e) {
  let t;
  const n = (
    /*#slots*/
    e[8].default
  ), r = Wr(
    n,
    e,
    /*$$scope*/
    e[7],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, o) {
      r && r.m(i, o), t = !0;
    },
    p(i, o) {
      r && r.p && (!t || o & /*$$scope*/
      128) && Jr(
        r,
        n,
        i,
        /*$$scope*/
        i[7],
        t ? xr(
          n,
          /*$$scope*/
          i[7],
          o,
          null
        ) : Zr(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      t || (ft(r, i), t = !0);
    },
    o(i) {
      ct(r, i), t = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function t0(e) {
  let t, n, r, i, o;
  const l = [Kc, Yc], a = [];
  function s(u, f) {
    return f & /*href*/
    1 && (t = null), t == null && (t = !!/*worker_proxy*/
    (u[4] && ml(
      /*href*/
      u[0]
    ))), t ? 0 : 1;
  }
  return n = s(e, -1), r = a[n] = l[n](e), {
    c() {
      r.c(), i = bl();
    },
    m(u, f) {
      a[n].m(u, f), Mn(u, i, f), o = !0;
    },
    p(u, [f]) {
      let c = n;
      n = s(u, f), n === c ? a[n].p(u, f) : (vl(), ct(a[c], 1, 1, () => {
        a[c] = null;
      }), pl(), r = a[n], r ? r.p(u, f) : (r = a[n] = l[n](u), r.c()), ft(r, 1), r.m(i.parentNode, i));
    },
    i(u) {
      o || (ft(r), o = !0);
    },
    o(u) {
      ct(r), o = !1;
    },
    d(u) {
      u && Dn(i), a[n].d(u);
    }
  };
}
function n0(e, t, n) {
  const r = ["href", "download"];
  let i = zi(t, r), { $$slots: o = {}, $$scope: l } = t, { href: a = void 0 } = t, { download: s } = t;
  const u = Qc();
  let f = !1;
  const c = hl();
  async function _() {
    if (f)
      return;
    if (u("click"), a == null)
      throw new Error("href is not defined.");
    if (c == null)
      throw new Error("Wasm worker proxy is not available.");
    const d = new URL(a, window.location.href).pathname;
    n(2, f = !0), c.httpRequest({
      method: "GET",
      path: d,
      headers: {},
      query_string: ""
    }).then((p) => {
      if (p.status !== 200)
        throw new Error(`Failed to get file ${d} from the Wasm worker.`);
      const w = new Blob(
        [p.body],
        {
          type: dl(p.headers, "content-type")
        }
      ), v = URL.createObjectURL(w), E = document.createElement("a");
      E.href = v, E.download = s, E.click(), URL.revokeObjectURL(v);
    }).finally(() => {
      n(2, f = !1);
    });
  }
  return e.$$set = (h) => {
    t = kn(kn({}, t), Wc(h)), n(6, i = zi(t, r)), "href" in h && n(0, a = h.href), "download" in h && n(1, s = h.download), "$$scope" in h && n(7, l = h.$$scope);
  }, [
    a,
    s,
    f,
    u,
    c,
    _,
    i,
    l,
    o
  ];
}
class r0 extends Xc {
  constructor(t) {
    super(), Zc(this, t, n0, t0, Jc, { href: 0, download: 1 });
  }
}
const {
  SvelteComponent: i0,
  append: _r,
  attr: o0,
  check_outros: hr,
  create_component: en,
  destroy_component: tn,
  detach: l0,
  element: s0,
  group_outros: dr,
  init: a0,
  insert: u0,
  mount_component: nn,
  safe_not_equal: f0,
  set_style: Vi,
  space: mr,
  toggle_class: Xi,
  transition_in: oe,
  transition_out: Ne
} = window.__gradio__svelte__internal, { createEventDispatcher: c0 } = window.__gradio__svelte__internal;
function Wi(e) {
  let t, n;
  return t = new Pt({
    props: {
      Icon: ca,
      label: (
        /*i18n*/
        e[4]("common.edit")
      )
    }
  }), t.$on(
    "click",
    /*click_handler*/
    e[6]
  ), {
    c() {
      en(t.$$.fragment);
    },
    m(r, i) {
      nn(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*i18n*/
      16 && (o.label = /*i18n*/
      r[4]("common.edit")), t.$set(o);
    },
    i(r) {
      n || (oe(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ne(t.$$.fragment, r), n = !1;
    },
    d(r) {
      tn(t, r);
    }
  };
}
function Zi(e) {
  let t, n;
  return t = new Pt({
    props: {
      Icon: Eo,
      label: (
        /*i18n*/
        e[4]("common.undo")
      )
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    e[7]
  ), {
    c() {
      en(t.$$.fragment);
    },
    m(r, i) {
      nn(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*i18n*/
      16 && (o.label = /*i18n*/
      r[4]("common.undo")), t.$set(o);
    },
    i(r) {
      n || (oe(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ne(t.$$.fragment, r), n = !1;
    },
    d(r) {
      tn(t, r);
    }
  };
}
function xi(e) {
  let t, n;
  return t = new r0({
    props: {
      href: (
        /*download*/
        e[2]
      ),
      download: !0,
      $$slots: { default: [_0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      en(t.$$.fragment);
    },
    m(r, i) {
      nn(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*download*/
      4 && (o.href = /*download*/
      r[2]), i & /*$$scope, i18n*/
      528 && (o.$$scope = { dirty: i, ctx: r }), t.$set(o);
    },
    i(r) {
      n || (oe(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ne(t.$$.fragment, r), n = !1;
    },
    d(r) {
      tn(t, r);
    }
  };
}
function _0(e) {
  let t, n;
  return t = new Pt({
    props: {
      Icon: yo,
      label: (
        /*i18n*/
        e[4]("common.download")
      )
    }
  }), {
    c() {
      en(t.$$.fragment);
    },
    m(r, i) {
      nn(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*i18n*/
      16 && (o.label = /*i18n*/
      r[4]("common.download")), t.$set(o);
    },
    i(r) {
      n || (oe(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ne(t.$$.fragment, r), n = !1;
    },
    d(r) {
      tn(t, r);
    }
  };
}
function h0(e) {
  let t, n, r, i, o, l, a = (
    /*editable*/
    e[0] && Wi(e)
  ), s = (
    /*undoable*/
    e[1] && Zi(e)
  ), u = (
    /*download*/
    e[2] && xi(e)
  );
  return o = new Pt({
    props: {
      Icon: Qs,
      label: (
        /*i18n*/
        e[4]("common.clear")
      )
    }
  }), o.$on(
    "click",
    /*click_handler_2*/
    e[8]
  ), {
    c() {
      t = s0("div"), a && a.c(), n = mr(), s && s.c(), r = mr(), u && u.c(), i = mr(), en(o.$$.fragment), o0(t, "class", "svelte-1wj0ocy"), Xi(t, "not-absolute", !/*absolute*/
      e[3]), Vi(
        t,
        "position",
        /*absolute*/
        e[3] ? "absolute" : "static"
      );
    },
    m(f, c) {
      u0(f, t, c), a && a.m(t, null), _r(t, n), s && s.m(t, null), _r(t, r), u && u.m(t, null), _r(t, i), nn(o, t, null), l = !0;
    },
    p(f, [c]) {
      /*editable*/
      f[0] ? a ? (a.p(f, c), c & /*editable*/
      1 && oe(a, 1)) : (a = Wi(f), a.c(), oe(a, 1), a.m(t, n)) : a && (dr(), Ne(a, 1, 1, () => {
        a = null;
      }), hr()), /*undoable*/
      f[1] ? s ? (s.p(f, c), c & /*undoable*/
      2 && oe(s, 1)) : (s = Zi(f), s.c(), oe(s, 1), s.m(t, r)) : s && (dr(), Ne(s, 1, 1, () => {
        s = null;
      }), hr()), /*download*/
      f[2] ? u ? (u.p(f, c), c & /*download*/
      4 && oe(u, 1)) : (u = xi(f), u.c(), oe(u, 1), u.m(t, i)) : u && (dr(), Ne(u, 1, 1, () => {
        u = null;
      }), hr());
      const _ = {};
      c & /*i18n*/
      16 && (_.label = /*i18n*/
      f[4]("common.clear")), o.$set(_), (!l || c & /*absolute*/
      8) && Xi(t, "not-absolute", !/*absolute*/
      f[3]), c & /*absolute*/
      8 && Vi(
        t,
        "position",
        /*absolute*/
        f[3] ? "absolute" : "static"
      );
    },
    i(f) {
      l || (oe(a), oe(s), oe(u), oe(o.$$.fragment, f), l = !0);
    },
    o(f) {
      Ne(a), Ne(s), Ne(u), Ne(o.$$.fragment, f), l = !1;
    },
    d(f) {
      f && l0(t), a && a.d(), s && s.d(), u && u.d(), tn(o);
    }
  };
}
function d0(e, t, n) {
  let { editable: r = !1 } = t, { undoable: i = !1 } = t, { download: o = null } = t, { absolute: l = !0 } = t, { i18n: a } = t;
  const s = c0(), u = () => s("edit"), f = () => s("undo"), c = (_) => {
    s("clear"), _.stopPropagation();
  };
  return e.$$set = (_) => {
    "editable" in _ && n(0, r = _.editable), "undoable" in _ && n(1, i = _.undoable), "download" in _ && n(2, o = _.download), "absolute" in _ && n(3, l = _.absolute), "i18n" in _ && n(4, a = _.i18n);
  }, [
    r,
    i,
    o,
    l,
    a,
    s,
    u,
    f,
    c
  ];
}
class m0 extends i0 {
  constructor(t) {
    super(), a0(this, t, d0, h0, f0, {
      editable: 0,
      undoable: 1,
      download: 2,
      absolute: 3,
      i18n: 4
    });
  }
}
const {
  SvelteComponent: p0,
  add_flush_callback: g0,
  append: b0,
  attr: w0,
  bind: v0,
  binding_callbacks: El,
  check_outros: Rn,
  construct_svelte_component: An,
  create_component: _t,
  create_slot: y0,
  destroy_component: ht,
  detach: Zt,
  element: E0,
  empty: Qr,
  get_all_dirty_from_scope: S0,
  get_slot_changes: k0,
  group_outros: Un,
  init: T0,
  insert: xt,
  mount_component: dt,
  safe_not_equal: A0,
  space: Sl,
  transition_in: ye,
  transition_out: Ee,
  update_slot_base: B0
} = window.__gradio__svelte__internal, { createEventDispatcher: C0, tick: Ji } = window.__gradio__svelte__internal;
function H0(e) {
  let t, n, r, i, o, l;
  n = new m0({
    props: {
      undoable: !/*use_3dgs*/
      e[9],
      i18n: (
        /*i18n*/
        e[5]
      ),
      absolute: !0
    }
  }), n.$on(
    "clear",
    /*handle_clear*/
    e[15]
  ), n.$on(
    "undo",
    /*handle_undo*/
    e[16]
  );
  const a = [I0, P0], s = [];
  function u(f, c) {
    return (
      /*use_3dgs*/
      f[9] ? 0 : 1
    );
  }
  return i = u(e), o = s[i] = a[i](e), {
    c() {
      t = E0("div"), _t(n.$$.fragment), r = Sl(), o.c(), w0(t, "class", "input-model svelte-1oz8ks8");
    },
    m(f, c) {
      xt(f, t, c), dt(n, t, null), b0(t, r), s[i].m(t, null), l = !0;
    },
    p(f, c) {
      const _ = {};
      c & /*use_3dgs*/
      512 && (_.undoable = !/*use_3dgs*/
      f[9]), c & /*i18n*/
      32 && (_.i18n = /*i18n*/
      f[5]), n.$set(_);
      let h = i;
      i = u(f), i === h ? s[i].p(f, c) : (Un(), Ee(s[h], 1, 1, () => {
        s[h] = null;
      }), Rn(), o = s[i], o ? o.p(f, c) : (o = s[i] = a[i](f), o.c()), ye(o, 1), o.m(t, null));
    },
    i(f) {
      l || (ye(n.$$.fragment, f), ye(o), l = !0);
    },
    o(f) {
      Ee(n.$$.fragment, f), Ee(o), l = !1;
    },
    d(f) {
      f && Zt(t), ht(n), s[i].d();
    }
  };
}
function N0(e) {
  let t, n, r;
  function i(l) {
    e[18](l);
  }
  let o = {
    root: (
      /*root*/
      e[4]
    ),
    filetype: [".stl", ".obj", ".gltf", ".glb", "model/obj", ".splat", ".ply"],
    $$slots: { default: [L0] },
    $$scope: { ctx: e }
  };
  return (
    /*dragging*/
    e[10] !== void 0 && (o.dragging = /*dragging*/
    e[10]), t = new jc({ props: o }), El.push(() => v0(t, "dragging", i)), t.$on(
      "load",
      /*handle_upload*/
      e[14]
    ), {
      c() {
        _t(t.$$.fragment);
      },
      m(l, a) {
        dt(t, l, a), r = !0;
      },
      p(l, a) {
        const s = {};
        a & /*root*/
        16 && (s.root = /*root*/
        l[4]), a & /*$$scope*/
        1048576 && (s.$$scope = { dirty: a, ctx: l }), !n && a & /*dragging*/
        1024 && (n = !0, s.dragging = /*dragging*/
        l[10], g0(() => n = !1)), t.$set(s);
      },
      i(l) {
        r || (ye(t.$$.fragment, l), r = !0);
      },
      o(l) {
        Ee(t.$$.fragment, l), r = !1;
      },
      d(l) {
        ht(t, l);
      }
    }
  );
}
function P0(e) {
  let t, n, r;
  var i = (
    /*Canvas3DComponent*/
    e[12]
  );
  function o(l, a) {
    return { props: {
      value: (
        /*value*/
        l[0]
      ),
      clear_color: (
        /*clear_color*/
        l[1]
      ),
      camera_position: (
        /*camera_position*/
        l[8]
      ),
      zoom_speed: (
        /*zoom_speed*/
        l[6]
      ),
      pan_speed: (
        /*pan_speed*/
        l[7]
      )
    } };
  }
  return i && (t = An(i, o(e)), e[19](t)), {
    c() {
      t && _t(t.$$.fragment), n = Qr();
    },
    m(l, a) {
      t && dt(t, l, a), xt(l, n, a), r = !0;
    },
    p(l, a) {
      if (a & /*Canvas3DComponent*/
      4096 && i !== (i = /*Canvas3DComponent*/
      l[12])) {
        if (t) {
          Un();
          const s = t;
          Ee(s.$$.fragment, 1, 0, () => {
            ht(s, 1);
          }), Rn();
        }
        i ? (t = An(i, o(l)), l[19](t), _t(t.$$.fragment), ye(t.$$.fragment, 1), dt(t, n.parentNode, n)) : t = null;
      } else if (i) {
        const s = {};
        a & /*value*/
        1 && (s.value = /*value*/
        l[0]), a & /*clear_color*/
        2 && (s.clear_color = /*clear_color*/
        l[1]), a & /*camera_position*/
        256 && (s.camera_position = /*camera_position*/
        l[8]), a & /*zoom_speed*/
        64 && (s.zoom_speed = /*zoom_speed*/
        l[6]), a & /*pan_speed*/
        128 && (s.pan_speed = /*pan_speed*/
        l[7]), t.$set(s);
      }
    },
    i(l) {
      r || (t && ye(t.$$.fragment, l), r = !0);
    },
    o(l) {
      t && Ee(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && Zt(n), e[19](null), t && ht(t, l);
    }
  };
}
function I0(e) {
  let t, n, r;
  var i = (
    /*Canvas3DGSComponent*/
    e[11]
  );
  function o(l, a) {
    return {
      props: {
        value: (
          /*value*/
          l[0]
        ),
        zoom_speed: (
          /*zoom_speed*/
          l[6]
        ),
        pan_speed: (
          /*pan_speed*/
          l[7]
        )
      }
    };
  }
  return i && (t = An(i, o(e))), {
    c() {
      t && _t(t.$$.fragment), n = Qr();
    },
    m(l, a) {
      t && dt(t, l, a), xt(l, n, a), r = !0;
    },
    p(l, a) {
      if (a & /*Canvas3DGSComponent*/
      2048 && i !== (i = /*Canvas3DGSComponent*/
      l[11])) {
        if (t) {
          Un();
          const s = t;
          Ee(s.$$.fragment, 1, 0, () => {
            ht(s, 1);
          }), Rn();
        }
        i ? (t = An(i, o(l)), _t(t.$$.fragment), ye(t.$$.fragment, 1), dt(t, n.parentNode, n)) : t = null;
      } else if (i) {
        const s = {};
        a & /*value*/
        1 && (s.value = /*value*/
        l[0]), a & /*zoom_speed*/
        64 && (s.zoom_speed = /*zoom_speed*/
        l[6]), a & /*pan_speed*/
        128 && (s.pan_speed = /*pan_speed*/
        l[7]), t.$set(s);
      }
    },
    i(l) {
      r || (t && ye(t.$$.fragment, l), r = !0);
    },
    o(l) {
      t && Ee(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && Zt(n), t && ht(t, l);
    }
  };
}
function L0(e) {
  let t;
  const n = (
    /*#slots*/
    e[17].default
  ), r = y0(
    n,
    e,
    /*$$scope*/
    e[20],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, o) {
      r && r.m(i, o), t = !0;
    },
    p(i, o) {
      r && r.p && (!t || o & /*$$scope*/
      1048576) && B0(
        r,
        n,
        i,
        /*$$scope*/
        i[20],
        t ? k0(
          n,
          /*$$scope*/
          i[20],
          o,
          null
        ) : S0(
          /*$$scope*/
          i[20]
        ),
        null
      );
    },
    i(i) {
      t || (ye(r, i), t = !0);
    },
    o(i) {
      Ee(r, i), t = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function O0(e) {
  let t, n, r, i, o, l;
  t = new Fr({
    props: {
      show_label: (
        /*show_label*/
        e[3]
      ),
      Icon: Cn,
      label: (
        /*label*/
        e[2] || "3D Model"
      )
    }
  });
  const a = [N0, H0], s = [];
  function u(f, c) {
    return (
      /*value*/
      f[0] === null ? 0 : 1
    );
  }
  return r = u(e), i = s[r] = a[r](e), {
    c() {
      _t(t.$$.fragment), n = Sl(), i.c(), o = Qr();
    },
    m(f, c) {
      dt(t, f, c), xt(f, n, c), s[r].m(f, c), xt(f, o, c), l = !0;
    },
    p(f, [c]) {
      const _ = {};
      c & /*show_label*/
      8 && (_.show_label = /*show_label*/
      f[3]), c & /*label*/
      4 && (_.label = /*label*/
      f[2] || "3D Model"), t.$set(_);
      let h = r;
      r = u(f), r === h ? s[r].p(f, c) : (Un(), Ee(s[h], 1, 1, () => {
        s[h] = null;
      }), Rn(), i = s[r], i ? i.p(f, c) : (i = s[r] = a[r](f), i.c()), ye(i, 1), i.m(o.parentNode, o));
    },
    i(f) {
      l || (ye(t.$$.fragment, f), ye(i), l = !0);
    },
    o(f) {
      Ee(t.$$.fragment, f), Ee(i), l = !1;
    },
    d(f) {
      f && (Zt(n), Zt(o)), ht(t, f), s[r].d(f);
    }
  };
}
function D0(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], o = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = o(n)) : (i === "call" || i === "optionalCall") && (n = o((...l) => n.call(t, ...l)), t = void 0);
  }
  return n;
}
async function M0() {
  return (await import("./Canvas3D-60a8d213.js")).default;
}
async function R0() {
  return (await import("./Canvas3DGS-0fbc0d9a.js")).default;
}
function U0(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { value: o } = t, { clear_color: l = [0, 0, 0, 0] } = t, { label: a = "" } = t, { show_label: s } = t, { root: u } = t, { i18n: f } = t, { zoom_speed: c = 1 } = t, { pan_speed: _ = 1 } = t, { camera_position: h = [null, null, null] } = t;
  async function d({ detail: T }) {
    n(0, o = T), await Ji(), H("change", o), H("load", o);
  }
  async function p() {
    n(0, o = null), await Ji(), H("clear"), H("change");
  }
  let w = !1, v, E, b;
  async function S() {
    D0([
      b,
      "optionalAccess",
      (T) => T.reset_camera_position,
      "call",
      (T) => T(h, c, _)
    ]);
  }
  const H = C0();
  let g = !1;
  function Z(T) {
    g = T, n(10, g);
  }
  function P(T) {
    El[T ? "unshift" : "push"](() => {
      b = T, n(13, b);
    });
  }
  return e.$$set = (T) => {
    "value" in T && n(0, o = T.value), "clear_color" in T && n(1, l = T.clear_color), "label" in T && n(2, a = T.label), "show_label" in T && n(3, s = T.show_label), "root" in T && n(4, u = T.root), "i18n" in T && n(5, f = T.i18n), "zoom_speed" in T && n(6, c = T.zoom_speed), "pan_speed" in T && n(7, _ = T.pan_speed), "camera_position" in T && n(8, h = T.camera_position), "$$scope" in T && n(20, i = T.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*value, use_3dgs*/
    513 && o && (n(9, w = o.path.endsWith(".splat") || o.path.endsWith(".ply")), w ? R0().then((T) => {
      n(11, v = T);
    }) : M0().then((T) => {
      n(12, E = T);
    })), e.$$.dirty & /*dragging*/
    1024 && H("drag", g);
  }, [
    o,
    l,
    a,
    s,
    u,
    f,
    c,
    _,
    h,
    w,
    g,
    v,
    E,
    b,
    d,
    p,
    S,
    r,
    Z,
    P,
    i
  ];
}
class F0 extends p0 {
  constructor(t) {
    super(), T0(this, t, U0, O0, A0, {
      value: 0,
      clear_color: 1,
      label: 2,
      show_label: 3,
      root: 4,
      i18n: 5,
      zoom_speed: 6,
      pan_speed: 7,
      camera_position: 8
    });
  }
}
function St(e) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; e > 1e3 && n < t.length - 1; )
    e /= 1e3, n++;
  let r = t[n];
  return (Number.isInteger(e) ? e : e.toFixed(1)) + r;
}
const {
  SvelteComponent: G0,
  append: Ce,
  attr: O,
  component_subscribe: Qi,
  detach: j0,
  element: q0,
  init: z0,
  insert: V0,
  noop: Yi,
  safe_not_equal: X0,
  set_style: cn,
  svg_element: He,
  toggle_class: Ki
} = window.__gradio__svelte__internal, { onMount: W0 } = window.__gradio__svelte__internal;
function Z0(e) {
  let t, n, r, i, o, l, a, s, u, f, c, _;
  return {
    c() {
      t = q0("div"), n = He("svg"), r = He("g"), i = He("path"), o = He("path"), l = He("path"), a = He("path"), s = He("g"), u = He("path"), f = He("path"), c = He("path"), _ = He("path"), O(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), O(i, "fill", "#FF7C00"), O(i, "fill-opacity", "0.4"), O(i, "class", "svelte-43sxxs"), O(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), O(o, "fill", "#FF7C00"), O(o, "class", "svelte-43sxxs"), O(l, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), O(l, "fill", "#FF7C00"), O(l, "fill-opacity", "0.4"), O(l, "class", "svelte-43sxxs"), O(a, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), O(a, "fill", "#FF7C00"), O(a, "class", "svelte-43sxxs"), cn(r, "transform", "translate(" + /*$top*/
      e[1][0] + "px, " + /*$top*/
      e[1][1] + "px)"), O(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), O(u, "fill", "#FF7C00"), O(u, "fill-opacity", "0.4"), O(u, "class", "svelte-43sxxs"), O(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), O(f, "fill", "#FF7C00"), O(f, "class", "svelte-43sxxs"), O(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), O(c, "fill", "#FF7C00"), O(c, "fill-opacity", "0.4"), O(c, "class", "svelte-43sxxs"), O(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), O(_, "fill", "#FF7C00"), O(_, "class", "svelte-43sxxs"), cn(s, "transform", "translate(" + /*$bottom*/
      e[2][0] + "px, " + /*$bottom*/
      e[2][1] + "px)"), O(n, "viewBox", "-1200 -1200 3000 3000"), O(n, "fill", "none"), O(n, "xmlns", "http://www.w3.org/2000/svg"), O(n, "class", "svelte-43sxxs"), O(t, "class", "svelte-43sxxs"), Ki(
        t,
        "margin",
        /*margin*/
        e[0]
      );
    },
    m(h, d) {
      V0(h, t, d), Ce(t, n), Ce(n, r), Ce(r, i), Ce(r, o), Ce(r, l), Ce(r, a), Ce(n, s), Ce(s, u), Ce(s, f), Ce(s, c), Ce(s, _);
    },
    p(h, [d]) {
      d & /*$top*/
      2 && cn(r, "transform", "translate(" + /*$top*/
      h[1][0] + "px, " + /*$top*/
      h[1][1] + "px)"), d & /*$bottom*/
      4 && cn(s, "transform", "translate(" + /*$bottom*/
      h[2][0] + "px, " + /*$bottom*/
      h[2][1] + "px)"), d & /*margin*/
      1 && Ki(
        t,
        "margin",
        /*margin*/
        h[0]
      );
    },
    i: Yi,
    o: Yi,
    d(h) {
      h && j0(t);
    }
  };
}
function x0(e, t, n) {
  let r, i, { margin: o = !0 } = t;
  const l = Si([0, 0]);
  Qi(e, l, (_) => n(1, r = _));
  const a = Si([0, 0]);
  Qi(e, a, (_) => n(2, i = _));
  let s;
  async function u() {
    await Promise.all([l.set([125, 140]), a.set([-125, -140])]), await Promise.all([l.set([-125, 140]), a.set([125, -140])]), await Promise.all([l.set([-125, 0]), a.set([125, -0])]), await Promise.all([l.set([125, 0]), a.set([-125, 0])]);
  }
  async function f() {
    await u(), s || f();
  }
  async function c() {
    await Promise.all([l.set([125, 0]), a.set([-125, 0])]), f();
  }
  return W0(() => (c(), () => s = !0)), e.$$set = (_) => {
    "margin" in _ && n(0, o = _.margin);
  }, [o, r, i, l, a];
}
class J0 extends G0 {
  constructor(t) {
    super(), z0(this, t, x0, Z0, X0, { margin: 0 });
  }
}
const {
  SvelteComponent: Q0,
  append: it,
  attr: Ie,
  binding_callbacks: $i,
  check_outros: kl,
  create_component: Y0,
  create_slot: K0,
  destroy_component: $0,
  destroy_each: Tl,
  detach: B,
  element: Fe,
  empty: Ot,
  ensure_array_like: Bn,
  get_all_dirty_from_scope: e_,
  get_slot_changes: t_,
  group_outros: Al,
  init: n_,
  insert: C,
  mount_component: r_,
  noop: Ur,
  safe_not_equal: i_,
  set_data: Se,
  set_style: Xe,
  space: Le,
  text: X,
  toggle_class: ve,
  transition_in: Ht,
  transition_out: Nt,
  update_slot_base: o_
} = window.__gradio__svelte__internal, { tick: l_ } = window.__gradio__svelte__internal, { onDestroy: s_ } = window.__gradio__svelte__internal, a_ = (e) => ({}), eo = (e) => ({});
function to(e, t, n) {
  const r = e.slice();
  return r[38] = t[n], r[40] = n, r;
}
function no(e, t, n) {
  const r = e.slice();
  return r[38] = t[n], r;
}
function u_(e) {
  let t, n = (
    /*i18n*/
    e[1]("common.error") + ""
  ), r, i, o;
  const l = (
    /*#slots*/
    e[29].error
  ), a = K0(
    l,
    e,
    /*$$scope*/
    e[28],
    eo
  );
  return {
    c() {
      t = Fe("span"), r = X(n), i = Le(), a && a.c(), Ie(t, "class", "error svelte-1yserjw");
    },
    m(s, u) {
      C(s, t, u), it(t, r), C(s, i, u), a && a.m(s, u), o = !0;
    },
    p(s, u) {
      (!o || u[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      s[1]("common.error") + "") && Se(r, n), a && a.p && (!o || u[0] & /*$$scope*/
      268435456) && o_(
        a,
        l,
        s,
        /*$$scope*/
        s[28],
        o ? t_(
          l,
          /*$$scope*/
          s[28],
          u,
          a_
        ) : e_(
          /*$$scope*/
          s[28]
        ),
        eo
      );
    },
    i(s) {
      o || (Ht(a, s), o = !0);
    },
    o(s) {
      Nt(a, s), o = !1;
    },
    d(s) {
      s && (B(t), B(i)), a && a.d(s);
    }
  };
}
function f_(e) {
  let t, n, r, i, o, l, a, s, u, f = (
    /*variant*/
    e[8] === "default" && /*show_eta_bar*/
    e[18] && /*show_progress*/
    e[6] === "full" && ro(e)
  );
  function c(b, S) {
    if (
      /*progress*/
      b[7]
    )
      return h_;
    if (
      /*queue_position*/
      b[2] !== null && /*queue_size*/
      b[3] !== void 0 && /*queue_position*/
      b[2] >= 0
    )
      return __;
    if (
      /*queue_position*/
      b[2] === 0
    )
      return c_;
  }
  let _ = c(e), h = _ && _(e), d = (
    /*timer*/
    e[5] && lo(e)
  );
  const p = [g_, p_], w = [];
  function v(b, S) {
    return (
      /*last_progress_level*/
      b[15] != null ? 0 : (
        /*show_progress*/
        b[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = v(e)) && (l = w[o] = p[o](e));
  let E = !/*timer*/
  e[5] && ho(e);
  return {
    c() {
      f && f.c(), t = Le(), n = Fe("div"), h && h.c(), r = Le(), d && d.c(), i = Le(), l && l.c(), a = Le(), E && E.c(), s = Ot(), Ie(n, "class", "progress-text svelte-1yserjw"), ve(
        n,
        "meta-text-center",
        /*variant*/
        e[8] === "center"
      ), ve(
        n,
        "meta-text",
        /*variant*/
        e[8] === "default"
      );
    },
    m(b, S) {
      f && f.m(b, S), C(b, t, S), C(b, n, S), h && h.m(n, null), it(n, r), d && d.m(n, null), C(b, i, S), ~o && w[o].m(b, S), C(b, a, S), E && E.m(b, S), C(b, s, S), u = !0;
    },
    p(b, S) {
      /*variant*/
      b[8] === "default" && /*show_eta_bar*/
      b[18] && /*show_progress*/
      b[6] === "full" ? f ? f.p(b, S) : (f = ro(b), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), _ === (_ = c(b)) && h ? h.p(b, S) : (h && h.d(1), h = _ && _(b), h && (h.c(), h.m(n, r))), /*timer*/
      b[5] ? d ? d.p(b, S) : (d = lo(b), d.c(), d.m(n, null)) : d && (d.d(1), d = null), (!u || S[0] & /*variant*/
      256) && ve(
        n,
        "meta-text-center",
        /*variant*/
        b[8] === "center"
      ), (!u || S[0] & /*variant*/
      256) && ve(
        n,
        "meta-text",
        /*variant*/
        b[8] === "default"
      );
      let H = o;
      o = v(b), o === H ? ~o && w[o].p(b, S) : (l && (Al(), Nt(w[H], 1, 1, () => {
        w[H] = null;
      }), kl()), ~o ? (l = w[o], l ? l.p(b, S) : (l = w[o] = p[o](b), l.c()), Ht(l, 1), l.m(a.parentNode, a)) : l = null), /*timer*/
      b[5] ? E && (E.d(1), E = null) : E ? E.p(b, S) : (E = ho(b), E.c(), E.m(s.parentNode, s));
    },
    i(b) {
      u || (Ht(l), u = !0);
    },
    o(b) {
      Nt(l), u = !1;
    },
    d(b) {
      b && (B(t), B(n), B(i), B(a), B(s)), f && f.d(b), h && h.d(), d && d.d(), ~o && w[o].d(b), E && E.d(b);
    }
  };
}
function ro(e) {
  let t, n = `translateX(${/*eta_level*/
  (e[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = Fe("div"), Ie(t, "class", "eta-bar svelte-1yserjw"), Xe(t, "transform", n);
    },
    m(r, i) {
      C(r, t, i);
    },
    p(r, i) {
      i[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (r[17] || 0) * 100 - 100}%)`) && Xe(t, "transform", n);
    },
    d(r) {
      r && B(t);
    }
  };
}
function c_(e) {
  let t;
  return {
    c() {
      t = X("processing |");
    },
    m(n, r) {
      C(n, t, r);
    },
    p: Ur,
    d(n) {
      n && B(t);
    }
  };
}
function __(e) {
  let t, n = (
    /*queue_position*/
    e[2] + 1 + ""
  ), r, i, o, l;
  return {
    c() {
      t = X("queue: "), r = X(n), i = X("/"), o = X(
        /*queue_size*/
        e[3]
      ), l = X(" |");
    },
    m(a, s) {
      C(a, t, s), C(a, r, s), C(a, i, s), C(a, o, s), C(a, l, s);
    },
    p(a, s) {
      s[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      a[2] + 1 + "") && Se(r, n), s[0] & /*queue_size*/
      8 && Se(
        o,
        /*queue_size*/
        a[3]
      );
    },
    d(a) {
      a && (B(t), B(r), B(i), B(o), B(l));
    }
  };
}
function h_(e) {
  let t, n = Bn(
    /*progress*/
    e[7]
  ), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = oo(no(e, n, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      t = Ot();
    },
    m(i, o) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(i, o);
      C(i, t, o);
    },
    p(i, o) {
      if (o[0] & /*progress*/
      128) {
        n = Bn(
          /*progress*/
          i[7]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const a = no(i, n, l);
          r[l] ? r[l].p(a, o) : (r[l] = oo(a), r[l].c(), r[l].m(t.parentNode, t));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = n.length;
      }
    },
    d(i) {
      i && B(t), Tl(r, i);
    }
  };
}
function io(e) {
  let t, n = (
    /*p*/
    e[38].unit + ""
  ), r, i, o = " ", l;
  function a(f, c) {
    return (
      /*p*/
      f[38].length != null ? m_ : d_
    );
  }
  let s = a(e), u = s(e);
  return {
    c() {
      u.c(), t = Le(), r = X(n), i = X(" | "), l = X(o);
    },
    m(f, c) {
      u.m(f, c), C(f, t, c), C(f, r, c), C(f, i, c), C(f, l, c);
    },
    p(f, c) {
      s === (s = a(f)) && u ? u.p(f, c) : (u.d(1), u = s(f), u && (u.c(), u.m(t.parentNode, t))), c[0] & /*progress*/
      128 && n !== (n = /*p*/
      f[38].unit + "") && Se(r, n);
    },
    d(f) {
      f && (B(t), B(r), B(i), B(l)), u.d(f);
    }
  };
}
function d_(e) {
  let t = St(
    /*p*/
    e[38].index || 0
  ) + "", n;
  return {
    c() {
      n = X(t);
    },
    m(r, i) {
      C(r, n, i);
    },
    p(r, i) {
      i[0] & /*progress*/
      128 && t !== (t = St(
        /*p*/
        r[38].index || 0
      ) + "") && Se(n, t);
    },
    d(r) {
      r && B(n);
    }
  };
}
function m_(e) {
  let t = St(
    /*p*/
    e[38].index || 0
  ) + "", n, r, i = St(
    /*p*/
    e[38].length
  ) + "", o;
  return {
    c() {
      n = X(t), r = X("/"), o = X(i);
    },
    m(l, a) {
      C(l, n, a), C(l, r, a), C(l, o, a);
    },
    p(l, a) {
      a[0] & /*progress*/
      128 && t !== (t = St(
        /*p*/
        l[38].index || 0
      ) + "") && Se(n, t), a[0] & /*progress*/
      128 && i !== (i = St(
        /*p*/
        l[38].length
      ) + "") && Se(o, i);
    },
    d(l) {
      l && (B(n), B(r), B(o));
    }
  };
}
function oo(e) {
  let t, n = (
    /*p*/
    e[38].index != null && io(e)
  );
  return {
    c() {
      n && n.c(), t = Ot();
    },
    m(r, i) {
      n && n.m(r, i), C(r, t, i);
    },
    p(r, i) {
      /*p*/
      r[38].index != null ? n ? n.p(r, i) : (n = io(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(r) {
      r && B(t), n && n.d(r);
    }
  };
}
function lo(e) {
  let t, n = (
    /*eta*/
    e[0] ? `/${/*formatted_eta*/
    e[19]}` : ""
  ), r, i;
  return {
    c() {
      t = X(
        /*formatted_timer*/
        e[20]
      ), r = X(n), i = X("s");
    },
    m(o, l) {
      C(o, t, l), C(o, r, l), C(o, i, l);
    },
    p(o, l) {
      l[0] & /*formatted_timer*/
      1048576 && Se(
        t,
        /*formatted_timer*/
        o[20]
      ), l[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && Se(r, n);
    },
    d(o) {
      o && (B(t), B(r), B(i));
    }
  };
}
function p_(e) {
  let t, n;
  return t = new J0({
    props: { margin: (
      /*variant*/
      e[8] === "default"
    ) }
  }), {
    c() {
      Y0(t.$$.fragment);
    },
    m(r, i) {
      r_(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & /*variant*/
      256 && (o.margin = /*variant*/
      r[8] === "default"), t.$set(o);
    },
    i(r) {
      n || (Ht(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Nt(t.$$.fragment, r), n = !1;
    },
    d(r) {
      $0(t, r);
    }
  };
}
function g_(e) {
  let t, n, r, i, o, l = `${/*last_progress_level*/
  e[15] * 100}%`, a = (
    /*progress*/
    e[7] != null && so(e)
  );
  return {
    c() {
      t = Fe("div"), n = Fe("div"), a && a.c(), r = Le(), i = Fe("div"), o = Fe("div"), Ie(n, "class", "progress-level-inner svelte-1yserjw"), Ie(o, "class", "progress-bar svelte-1yserjw"), Xe(o, "width", l), Ie(i, "class", "progress-bar-wrap svelte-1yserjw"), Ie(t, "class", "progress-level svelte-1yserjw");
    },
    m(s, u) {
      C(s, t, u), it(t, n), a && a.m(n, null), it(t, r), it(t, i), it(i, o), e[30](o);
    },
    p(s, u) {
      /*progress*/
      s[7] != null ? a ? a.p(s, u) : (a = so(s), a.c(), a.m(n, null)) : a && (a.d(1), a = null), u[0] & /*last_progress_level*/
      32768 && l !== (l = `${/*last_progress_level*/
      s[15] * 100}%`) && Xe(o, "width", l);
    },
    i: Ur,
    o: Ur,
    d(s) {
      s && B(t), a && a.d(), e[30](null);
    }
  };
}
function so(e) {
  let t, n = Bn(
    /*progress*/
    e[7]
  ), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = _o(to(e, n, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      t = Ot();
    },
    m(i, o) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(i, o);
      C(i, t, o);
    },
    p(i, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        n = Bn(
          /*progress*/
          i[7]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const a = to(i, n, l);
          r[l] ? r[l].p(a, o) : (r[l] = _o(a), r[l].c(), r[l].m(t.parentNode, t));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = n.length;
      }
    },
    d(i) {
      i && B(t), Tl(r, i);
    }
  };
}
function ao(e) {
  let t, n, r, i, o = (
    /*i*/
    e[40] !== 0 && b_()
  ), l = (
    /*p*/
    e[38].desc != null && uo(e)
  ), a = (
    /*p*/
    e[38].desc != null && /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null && fo()
  ), s = (
    /*progress_level*/
    e[14] != null && co(e)
  );
  return {
    c() {
      o && o.c(), t = Le(), l && l.c(), n = Le(), a && a.c(), r = Le(), s && s.c(), i = Ot();
    },
    m(u, f) {
      o && o.m(u, f), C(u, t, f), l && l.m(u, f), C(u, n, f), a && a.m(u, f), C(u, r, f), s && s.m(u, f), C(u, i, f);
    },
    p(u, f) {
      /*p*/
      u[38].desc != null ? l ? l.p(u, f) : (l = uo(u), l.c(), l.m(n.parentNode, n)) : l && (l.d(1), l = null), /*p*/
      u[38].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[40]
      ] != null ? a || (a = fo(), a.c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null), /*progress_level*/
      u[14] != null ? s ? s.p(u, f) : (s = co(u), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    d(u) {
      u && (B(t), B(n), B(r), B(i)), o && o.d(u), l && l.d(u), a && a.d(u), s && s.d(u);
    }
  };
}
function b_(e) {
  let t;
  return {
    c() {
      t = X(" /");
    },
    m(n, r) {
      C(n, t, r);
    },
    d(n) {
      n && B(t);
    }
  };
}
function uo(e) {
  let t = (
    /*p*/
    e[38].desc + ""
  ), n;
  return {
    c() {
      n = X(t);
    },
    m(r, i) {
      C(r, n, i);
    },
    p(r, i) {
      i[0] & /*progress*/
      128 && t !== (t = /*p*/
      r[38].desc + "") && Se(n, t);
    },
    d(r) {
      r && B(n);
    }
  };
}
function fo(e) {
  let t;
  return {
    c() {
      t = X("-");
    },
    m(n, r) {
      C(n, t, r);
    },
    d(n) {
      n && B(t);
    }
  };
}
function co(e) {
  let t = (100 * /*progress_level*/
  (e[14][
    /*i*/
    e[40]
  ] || 0)).toFixed(1) + "", n, r;
  return {
    c() {
      n = X(t), r = X("%");
    },
    m(i, o) {
      C(i, n, o), C(i, r, o);
    },
    p(i, o) {
      o[0] & /*progress_level*/
      16384 && t !== (t = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[40]
      ] || 0)).toFixed(1) + "") && Se(n, t);
    },
    d(i) {
      i && (B(n), B(r));
    }
  };
}
function _o(e) {
  let t, n = (
    /*p*/
    (e[38].desc != null || /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null) && ao(e)
  );
  return {
    c() {
      n && n.c(), t = Ot();
    },
    m(r, i) {
      n && n.m(r, i), C(r, t, i);
    },
    p(r, i) {
      /*p*/
      r[38].desc != null || /*progress_level*/
      r[14] && /*progress_level*/
      r[14][
        /*i*/
        r[40]
      ] != null ? n ? n.p(r, i) : (n = ao(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(r) {
      r && B(t), n && n.d(r);
    }
  };
}
function ho(e) {
  let t, n;
  return {
    c() {
      t = Fe("p"), n = X(
        /*loading_text*/
        e[9]
      ), Ie(t, "class", "loading svelte-1yserjw");
    },
    m(r, i) {
      C(r, t, i), it(t, n);
    },
    p(r, i) {
      i[0] & /*loading_text*/
      512 && Se(
        n,
        /*loading_text*/
        r[9]
      );
    },
    d(r) {
      r && B(t);
    }
  };
}
function w_(e) {
  let t, n, r, i, o;
  const l = [f_, u_], a = [];
  function s(u, f) {
    return (
      /*status*/
      u[4] === "pending" ? 0 : (
        /*status*/
        u[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = s(e)) && (r = a[n] = l[n](e)), {
    c() {
      t = Fe("div"), r && r.c(), Ie(t, "class", i = "wrap " + /*variant*/
      e[8] + " " + /*show_progress*/
      e[6] + " svelte-1yserjw"), ve(t, "hide", !/*status*/
      e[4] || /*status*/
      e[4] === "complete" || /*show_progress*/
      e[6] === "hidden"), ve(
        t,
        "translucent",
        /*variant*/
        e[8] === "center" && /*status*/
        (e[4] === "pending" || /*status*/
        e[4] === "error") || /*translucent*/
        e[11] || /*show_progress*/
        e[6] === "minimal"
      ), ve(
        t,
        "generating",
        /*status*/
        e[4] === "generating"
      ), ve(
        t,
        "border",
        /*border*/
        e[12]
      ), Xe(
        t,
        "position",
        /*absolute*/
        e[10] ? "absolute" : "static"
      ), Xe(
        t,
        "padding",
        /*absolute*/
        e[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, f) {
      C(u, t, f), ~n && a[n].m(t, null), e[31](t), o = !0;
    },
    p(u, f) {
      let c = n;
      n = s(u), n === c ? ~n && a[n].p(u, f) : (r && (Al(), Nt(a[c], 1, 1, () => {
        a[c] = null;
      }), kl()), ~n ? (r = a[n], r ? r.p(u, f) : (r = a[n] = l[n](u), r.c()), Ht(r, 1), r.m(t, null)) : r = null), (!o || f[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-1yserjw")) && Ie(t, "class", i), (!o || f[0] & /*variant, show_progress, status, show_progress*/
      336) && ve(t, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden"), (!o || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && ve(
        t,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!o || f[0] & /*variant, show_progress, status*/
      336) && ve(
        t,
        "generating",
        /*status*/
        u[4] === "generating"
      ), (!o || f[0] & /*variant, show_progress, border*/
      4416) && ve(
        t,
        "border",
        /*border*/
        u[12]
      ), f[0] & /*absolute*/
      1024 && Xe(
        t,
        "position",
        /*absolute*/
        u[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && Xe(
        t,
        "padding",
        /*absolute*/
        u[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      o || (Ht(r), o = !0);
    },
    o(u) {
      Nt(r), o = !1;
    },
    d(u) {
      u && B(t), ~n && a[n].d(), e[31](null);
    }
  };
}
let _n = [], pr = !1;
async function v_(e, t = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
    if (_n.push(e), !pr)
      pr = !0;
    else
      return;
    await l_(), requestAnimationFrame(() => {
      let n = [0, 0];
      for (let r = 0; r < _n.length; r++) {
        const o = _n[r].getBoundingClientRect();
        (r === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = r);
      }
      window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), pr = !1, _n = [];
    });
  }
}
function y_(e, t, n) {
  let r, { $$slots: i = {}, $$scope: o } = t, { i18n: l } = t, { eta: a = null } = t, { queue_position: s } = t, { queue_size: u } = t, { status: f } = t, { scroll_to_output: c = !1 } = t, { timer: _ = !0 } = t, { show_progress: h = "full" } = t, { message: d = null } = t, { progress: p = null } = t, { variant: w = "default" } = t, { loading_text: v = "Loading..." } = t, { absolute: E = !0 } = t, { translucent: b = !1 } = t, { border: S = !1 } = t, { autoscroll: H } = t, g, Z = !1, P = 0, T = 0, k = null, ke = null, ue = 0, Te = null, Re, fe = null, pt = !0;
  const Ze = () => {
    n(0, a = n(26, k = n(19, A = null))), n(24, P = performance.now()), n(25, T = 0), Z = !0, gt();
  };
  function gt() {
    requestAnimationFrame(() => {
      n(25, T = (performance.now() - P) / 1e3), Z && gt();
    });
  }
  function xe() {
    n(25, T = 0), n(0, a = n(26, k = n(19, A = null))), Z && (Z = !1);
  }
  s_(() => {
    Z && xe();
  });
  let A = null;
  function W(m) {
    $i[m ? "unshift" : "push"](() => {
      fe = m, n(16, fe), n(7, p), n(14, Te), n(15, Re);
    });
  }
  function J(m) {
    $i[m ? "unshift" : "push"](() => {
      g = m, n(13, g);
    });
  }
  return e.$$set = (m) => {
    "i18n" in m && n(1, l = m.i18n), "eta" in m && n(0, a = m.eta), "queue_position" in m && n(2, s = m.queue_position), "queue_size" in m && n(3, u = m.queue_size), "status" in m && n(4, f = m.status), "scroll_to_output" in m && n(21, c = m.scroll_to_output), "timer" in m && n(5, _ = m.timer), "show_progress" in m && n(6, h = m.show_progress), "message" in m && n(22, d = m.message), "progress" in m && n(7, p = m.progress), "variant" in m && n(8, w = m.variant), "loading_text" in m && n(9, v = m.loading_text), "absolute" in m && n(10, E = m.absolute), "translucent" in m && n(11, b = m.translucent), "border" in m && n(12, S = m.border), "autoscroll" in m && n(23, H = m.autoscroll), "$$scope" in m && n(28, o = m.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    218103809 && (a === null && n(0, a = k), a != null && k !== a && (n(27, ke = (performance.now() - P) / 1e3 + a), n(19, A = ke.toFixed(1)), n(26, k = a))), e.$$.dirty[0] & /*eta_from_start, timer_diff*/
    167772160 && n(17, ue = ke === null || ke <= 0 || !T ? null : Math.min(T / ke, 1)), e.$$.dirty[0] & /*progress*/
    128 && p != null && n(18, pt = !1), e.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (p != null ? n(14, Te = p.map((m) => {
      if (m.index != null && m.length != null)
        return m.index / m.length;
      if (m.progress != null)
        return m.progress;
    })) : n(14, Te = null), Te ? (n(15, Re = Te[Te.length - 1]), fe && (Re === 0 ? n(16, fe.style.transition = "0", fe) : n(16, fe.style.transition = "150ms", fe))) : n(15, Re = void 0)), e.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? Ze() : xe()), e.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    10493968 && g && c && (f === "pending" || f === "complete") && v_(g, H), e.$$.dirty[0] & /*status, message*/
    4194320, e.$$.dirty[0] & /*timer_diff*/
    33554432 && n(20, r = T.toFixed(1));
  }, [
    a,
    l,
    s,
    u,
    f,
    _,
    h,
    p,
    w,
    v,
    E,
    b,
    S,
    g,
    Te,
    Re,
    fe,
    ue,
    pt,
    A,
    r,
    c,
    d,
    H,
    P,
    T,
    k,
    ke,
    o,
    i,
    W,
    J
  ];
}
class Bl extends Q0 {
  constructor(t) {
    super(), n_(
      this,
      t,
      y_,
      w_,
      i_,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 21,
        timer: 5,
        show_progress: 6,
        message: 22,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 23
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: E_,
  append: S_,
  attr: k_,
  detach: T_,
  element: A_,
  init: B_,
  insert: C_,
  noop: mo,
  safe_not_equal: H_,
  set_data: N_,
  text: P_,
  toggle_class: yt
} = window.__gradio__svelte__internal;
function I_(e) {
  let t, n = (
    /*value*/
    (e[0] ? (
      /*value*/
      e[0]
    ) : "") + ""
  ), r;
  return {
    c() {
      t = A_("div"), r = P_(n), k_(t, "class", "svelte-1gecy8w"), yt(
        t,
        "table",
        /*type*/
        e[1] === "table"
      ), yt(
        t,
        "gallery",
        /*type*/
        e[1] === "gallery"
      ), yt(
        t,
        "selected",
        /*selected*/
        e[2]
      );
    },
    m(i, o) {
      C_(i, t, o), S_(t, r);
    },
    p(i, [o]) {
      o & /*value*/
      1 && n !== (n = /*value*/
      (i[0] ? (
        /*value*/
        i[0]
      ) : "") + "") && N_(r, n), o & /*type*/
      2 && yt(
        t,
        "table",
        /*type*/
        i[1] === "table"
      ), o & /*type*/
      2 && yt(
        t,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), o & /*selected*/
      4 && yt(
        t,
        "selected",
        /*selected*/
        i[2]
      );
    },
    i: mo,
    o: mo,
    d(i) {
      i && T_(t);
    }
  };
}
function L_(e, t, n) {
  let { value: r } = t, { type: i } = t, { selected: o = !1 } = t;
  return e.$$set = (l) => {
    "value" in l && n(0, r = l.value), "type" in l && n(1, i = l.type), "selected" in l && n(2, o = l.selected);
  }, [r, i, o];
}
class th extends E_ {
  constructor(t) {
    super(), B_(this, t, L_, I_, H_, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: O_,
  assign: Cl,
  check_outros: Hl,
  create_component: Oe,
  destroy_component: De,
  detach: Jt,
  empty: Nl,
  get_spread_object: Pl,
  get_spread_update: Il,
  group_outros: Ll,
  init: D_,
  insert: Qt,
  mount_component: Me,
  safe_not_equal: M_,
  space: Yr,
  transition_in: se,
  transition_out: ae
} = window.__gradio__svelte__internal;
function R_(e) {
  let t, n;
  return t = new bo({
    props: {
      visible: (
        /*visible*/
        e[3]
      ),
      variant: (
        /*value*/
        e[0] === null ? "dashed" : "solid"
      ),
      border_mode: (
        /*dragging*/
        e[17] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        e[1]
      ),
      elem_classes: (
        /*elem_classes*/
        e[2]
      ),
      container: (
        /*container*/
        e[9]
      ),
      scale: (
        /*scale*/
        e[10]
      ),
      min_width: (
        /*min_width*/
        e[11]
      ),
      height: (
        /*height*/
        e[13]
      ),
      $$slots: { default: [G_] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Oe(t.$$.fragment);
    },
    m(r, i) {
      Me(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*visible*/
      8 && (o.visible = /*visible*/
      r[3]), i & /*value*/
      1 && (o.variant = /*value*/
      r[0] === null ? "dashed" : "solid"), i & /*dragging*/
      131072 && (o.border_mode = /*dragging*/
      r[17] ? "focus" : "base"), i & /*elem_id*/
      2 && (o.elem_id = /*elem_id*/
      r[1]), i & /*elem_classes*/
      4 && (o.elem_classes = /*elem_classes*/
      r[2]), i & /*container*/
      512 && (o.container = /*container*/
      r[9]), i & /*scale*/
      1024 && (o.scale = /*scale*/
      r[10]), i & /*min_width*/
      2048 && (o.min_width = /*min_width*/
      r[11]), i & /*height*/
      8192 && (o.height = /*height*/
      r[13]), i & /*$$scope, label, show_label, root, clear_color, value, camera_position, zoom_speed, gradio, dragging, loading_status*/
      8573425 && (o.$$scope = { dirty: i, ctx: r }), t.$set(o);
    },
    i(r) {
      n || (se(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      De(t, r);
    }
  };
}
function U_(e) {
  let t, n;
  return t = new bo({
    props: {
      visible: (
        /*visible*/
        e[3]
      ),
      variant: (
        /*value*/
        e[0] === null ? "dashed" : "solid"
      ),
      border_mode: (
        /*dragging*/
        e[17] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        e[1]
      ),
      elem_classes: (
        /*elem_classes*/
        e[2]
      ),
      container: (
        /*container*/
        e[9]
      ),
      scale: (
        /*scale*/
        e[10]
      ),
      min_width: (
        /*min_width*/
        e[11]
      ),
      height: (
        /*height*/
        e[13]
      ),
      $$slots: { default: [V_] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Oe(t.$$.fragment);
    },
    m(r, i) {
      Me(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*visible*/
      8 && (o.visible = /*visible*/
      r[3]), i & /*value*/
      1 && (o.variant = /*value*/
      r[0] === null ? "dashed" : "solid"), i & /*dragging*/
      131072 && (o.border_mode = /*dragging*/
      r[17] ? "focus" : "base"), i & /*elem_id*/
      2 && (o.elem_id = /*elem_id*/
      r[1]), i & /*elem_classes*/
      4 && (o.elem_classes = /*elem_classes*/
      r[2]), i & /*container*/
      512 && (o.container = /*container*/
      r[9]), i & /*scale*/
      1024 && (o.scale = /*scale*/
      r[10]), i & /*min_width*/
      2048 && (o.min_width = /*min_width*/
      r[11]), i & /*height*/
      8192 && (o.height = /*height*/
      r[13]), i & /*$$scope, value, gradio, clear_color, label, show_label, camera_position, zoom_speed, loading_status*/
      8442337 && (o.$$scope = { dirty: i, ctx: r }), t.$set(o);
    },
    i(r) {
      n || (se(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      De(t, r);
    }
  };
}
function F_(e) {
  let t, n;
  return t = new Ja({
    props: {
      i18n: (
        /*gradio*/
        e[12].i18n
      ),
      type: "file"
    }
  }), {
    c() {
      Oe(t.$$.fragment);
    },
    m(r, i) {
      Me(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*gradio*/
      4096 && (o.i18n = /*gradio*/
      r[12].i18n), t.$set(o);
    },
    i(r) {
      n || (se(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      De(t, r);
    }
  };
}
function G_(e) {
  let t, n, r, i;
  const o = [
    {
      autoscroll: (
        /*gradio*/
        e[12].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      e[12].i18n
    ) },
    /*loading_status*/
    e[6]
  ];
  let l = {};
  for (let a = 0; a < o.length; a += 1)
    l = Cl(l, o[a]);
  return t = new Bl({ props: l }), r = new F0({
    props: {
      label: (
        /*label*/
        e[7]
      ),
      show_label: (
        /*show_label*/
        e[8]
      ),
      root: (
        /*root*/
        e[4]
      ),
      clear_color: (
        /*clear_color*/
        e[5]
      ),
      value: (
        /*value*/
        e[0]
      ),
      camera_position: (
        /*camera_position*/
        e[15]
      ),
      zoom_speed: (
        /*zoom_speed*/
        e[14]
      ),
      i18n: (
        /*gradio*/
        e[12].i18n
      ),
      $$slots: { default: [F_] },
      $$scope: { ctx: e }
    }
  }), r.$on(
    "change",
    /*change_handler*/
    e[18]
  ), r.$on(
    "drag",
    /*drag_handler*/
    e[19]
  ), r.$on(
    "change",
    /*change_handler_1*/
    e[20]
  ), r.$on(
    "clear",
    /*clear_handler*/
    e[21]
  ), r.$on(
    "load",
    /*load_handler*/
    e[22]
  ), {
    c() {
      Oe(t.$$.fragment), n = Yr(), Oe(r.$$.fragment);
    },
    m(a, s) {
      Me(t, a, s), Qt(a, n, s), Me(r, a, s), i = !0;
    },
    p(a, s) {
      const u = s & /*gradio, loading_status*/
      4160 ? Il(o, [
        s & /*gradio*/
        4096 && {
          autoscroll: (
            /*gradio*/
            a[12].autoscroll
          )
        },
        s & /*gradio*/
        4096 && { i18n: (
          /*gradio*/
          a[12].i18n
        ) },
        s & /*loading_status*/
        64 && Pl(
          /*loading_status*/
          a[6]
        )
      ]) : {};
      t.$set(u);
      const f = {};
      s & /*label*/
      128 && (f.label = /*label*/
      a[7]), s & /*show_label*/
      256 && (f.show_label = /*show_label*/
      a[8]), s & /*root*/
      16 && (f.root = /*root*/
      a[4]), s & /*clear_color*/
      32 && (f.clear_color = /*clear_color*/
      a[5]), s & /*value*/
      1 && (f.value = /*value*/
      a[0]), s & /*camera_position*/
      32768 && (f.camera_position = /*camera_position*/
      a[15]), s & /*zoom_speed*/
      16384 && (f.zoom_speed = /*zoom_speed*/
      a[14]), s & /*gradio*/
      4096 && (f.i18n = /*gradio*/
      a[12].i18n), s & /*$$scope, gradio*/
      8392704 && (f.$$scope = { dirty: s, ctx: a }), r.$set(f);
    },
    i(a) {
      i || (se(t.$$.fragment, a), se(r.$$.fragment, a), i = !0);
    },
    o(a) {
      ae(t.$$.fragment, a), ae(r.$$.fragment, a), i = !1;
    },
    d(a) {
      a && Jt(n), De(t, a), De(r, a);
    }
  };
}
function j_(e) {
  let t, n, r, i;
  return t = new Fr({
    props: {
      show_label: (
        /*show_label*/
        e[8]
      ),
      Icon: Cn,
      label: (
        /*label*/
        e[7] || "3D Model"
      )
    }
  }), r = new zs({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [z_] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Oe(t.$$.fragment), n = Yr(), Oe(r.$$.fragment);
    },
    m(o, l) {
      Me(t, o, l), Qt(o, n, l), Me(r, o, l), i = !0;
    },
    p(o, l) {
      const a = {};
      l & /*show_label*/
      256 && (a.show_label = /*show_label*/
      o[8]), l & /*label*/
      128 && (a.label = /*label*/
      o[7] || "3D Model"), t.$set(a);
      const s = {};
      l & /*$$scope*/
      8388608 && (s.$$scope = { dirty: l, ctx: o }), r.$set(s);
    },
    i(o) {
      i || (se(t.$$.fragment, o), se(r.$$.fragment, o), i = !0);
    },
    o(o) {
      ae(t.$$.fragment, o), ae(r.$$.fragment, o), i = !1;
    },
    d(o) {
      o && Jt(n), De(t, o), De(r, o);
    }
  };
}
function q_(e) {
  let t, n;
  return t = new lu({
    props: {
      value: (
        /*value*/
        e[0]
      ),
      i18n: (
        /*gradio*/
        e[12].i18n
      ),
      clear_color: (
        /*clear_color*/
        e[5]
      ),
      label: (
        /*label*/
        e[7]
      ),
      show_label: (
        /*show_label*/
        e[8]
      ),
      camera_position: (
        /*camera_position*/
        e[15]
      ),
      zoom_speed: (
        /*zoom_speed*/
        e[14]
      )
    }
  }), {
    c() {
      Oe(t.$$.fragment);
    },
    m(r, i) {
      Me(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*value*/
      1 && (o.value = /*value*/
      r[0]), i & /*gradio*/
      4096 && (o.i18n = /*gradio*/
      r[12].i18n), i & /*clear_color*/
      32 && (o.clear_color = /*clear_color*/
      r[5]), i & /*label*/
      128 && (o.label = /*label*/
      r[7]), i & /*show_label*/
      256 && (o.show_label = /*show_label*/
      r[8]), i & /*camera_position*/
      32768 && (o.camera_position = /*camera_position*/
      r[15]), i & /*zoom_speed*/
      16384 && (o.zoom_speed = /*zoom_speed*/
      r[14]), t.$set(o);
    },
    i(r) {
      n || (se(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      De(t, r);
    }
  };
}
function z_(e) {
  let t, n;
  return t = new Cn({}), {
    c() {
      Oe(t.$$.fragment);
    },
    m(r, i) {
      Me(t, r, i), n = !0;
    },
    i(r) {
      n || (se(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      De(t, r);
    }
  };
}
function V_(e) {
  let t, n, r, i, o, l;
  const a = [
    {
      autoscroll: (
        /*gradio*/
        e[12].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      e[12].i18n
    ) },
    /*loading_status*/
    e[6]
  ];
  let s = {};
  for (let _ = 0; _ < a.length; _ += 1)
    s = Cl(s, a[_]);
  t = new Bl({ props: s });
  const u = [q_, j_], f = [];
  function c(_, h) {
    return (
      /*value*/
      _[0] ? 0 : 1
    );
  }
  return r = c(e), i = f[r] = u[r](e), {
    c() {
      Oe(t.$$.fragment), n = Yr(), i.c(), o = Nl();
    },
    m(_, h) {
      Me(t, _, h), Qt(_, n, h), f[r].m(_, h), Qt(_, o, h), l = !0;
    },
    p(_, h) {
      const d = h & /*gradio, loading_status*/
      4160 ? Il(a, [
        h & /*gradio*/
        4096 && {
          autoscroll: (
            /*gradio*/
            _[12].autoscroll
          )
        },
        h & /*gradio*/
        4096 && { i18n: (
          /*gradio*/
          _[12].i18n
        ) },
        h & /*loading_status*/
        64 && Pl(
          /*loading_status*/
          _[6]
        )
      ]) : {};
      t.$set(d);
      let p = r;
      r = c(_), r === p ? f[r].p(_, h) : (Ll(), ae(f[p], 1, 1, () => {
        f[p] = null;
      }), Hl(), i = f[r], i ? i.p(_, h) : (i = f[r] = u[r](_), i.c()), se(i, 1), i.m(o.parentNode, o));
    },
    i(_) {
      l || (se(t.$$.fragment, _), se(i), l = !0);
    },
    o(_) {
      ae(t.$$.fragment, _), ae(i), l = !1;
    },
    d(_) {
      _ && (Jt(n), Jt(o)), De(t, _), f[r].d(_);
    }
  };
}
function X_(e) {
  let t, n, r, i;
  const o = [U_, R_], l = [];
  function a(s, u) {
    return (
      /*interactive*/
      s[16] ? 1 : 0
    );
  }
  return t = a(e), n = l[t] = o[t](e), {
    c() {
      n.c(), r = Nl();
    },
    m(s, u) {
      l[t].m(s, u), Qt(s, r, u), i = !0;
    },
    p(s, [u]) {
      let f = t;
      t = a(s), t === f ? l[t].p(s, u) : (Ll(), ae(l[f], 1, 1, () => {
        l[f] = null;
      }), Hl(), n = l[t], n ? n.p(s, u) : (n = l[t] = o[t](s), n.c()), se(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      i || (se(n), i = !0);
    },
    o(s) {
      ae(n), i = !1;
    },
    d(s) {
      s && Jt(r), l[t].d(s);
    }
  };
}
function W_(e, t, n) {
  let { elem_id: r = "" } = t, { elem_classes: i = [] } = t, { visible: o = !0 } = t, { value: l = null } = t, { root: a } = t, { clear_color: s } = t, { loading_status: u } = t, { label: f } = t, { show_label: c } = t, { container: _ = !0 } = t, { scale: h = null } = t, { min_width: d = void 0 } = t, { gradio: p } = t, { height: w = void 0 } = t, { zoom_speed: v = 1 } = t, { camera_position: E = [null, null, null] } = t, { interactive: b } = t, S = !1;
  const H = ({ detail: k }) => n(0, l = k), g = ({ detail: k }) => n(17, S = k), Z = ({ detail: k }) => p.dispatch("change", k), P = () => {
    n(0, l = null), p.dispatch("clear");
  }, T = ({ detail: k }) => {
    n(0, l = k), p.dispatch("upload");
  };
  return e.$$set = (k) => {
    "elem_id" in k && n(1, r = k.elem_id), "elem_classes" in k && n(2, i = k.elem_classes), "visible" in k && n(3, o = k.visible), "value" in k && n(0, l = k.value), "root" in k && n(4, a = k.root), "clear_color" in k && n(5, s = k.clear_color), "loading_status" in k && n(6, u = k.loading_status), "label" in k && n(7, f = k.label), "show_label" in k && n(8, c = k.show_label), "container" in k && n(9, _ = k.container), "scale" in k && n(10, h = k.scale), "min_width" in k && n(11, d = k.min_width), "gradio" in k && n(12, p = k.gradio), "height" in k && n(13, w = k.height), "zoom_speed" in k && n(14, v = k.zoom_speed), "camera_position" in k && n(15, E = k.camera_position), "interactive" in k && n(16, b = k.interactive);
  }, [
    l,
    r,
    i,
    o,
    a,
    s,
    u,
    f,
    c,
    _,
    h,
    d,
    p,
    w,
    v,
    E,
    b,
    S,
    H,
    g,
    Z,
    P,
    T
  ];
}
class nh extends O_ {
  constructor(t) {
    super(), D_(this, t, W_, X_, M_, {
      elem_id: 1,
      elem_classes: 2,
      visible: 3,
      value: 0,
      root: 4,
      clear_color: 5,
      loading_status: 6,
      label: 7,
      show_label: 8,
      container: 9,
      scale: 10,
      min_width: 11,
      gradio: 12,
      height: 13,
      zoom_speed: 14,
      camera_position: 15,
      interactive: 16
    });
  }
}
export {
  th as E,
  nh as I,
  F0 as M,
  lu as a,
  K_ as c,
  Bu as g,
  eh as r
};

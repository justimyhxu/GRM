const {
  SvelteComponent: Ml,
  assign: Dl,
  create_slot: Rl,
  detach: Ul,
  element: Fl,
  get_all_dirty_from_scope: Gl,
  get_slot_changes: ql,
  get_spread_update: jl,
  init: zl,
  insert: Vl,
  safe_not_equal: Xl,
  set_dynamic_element_data: Kr,
  set_style: ue,
  toggle_class: qe,
  transition_in: po,
  transition_out: go,
  update_slot_base: xl
} = window.__gradio__svelte__internal;
function Wl(e) {
  let t, n, r;
  const i = (
    /*#slots*/
    e[18].default
  ), o = Rl(
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
    a = Dl(a, l[s]);
  return {
    c() {
      t = Fl(
        /*tag*/
        e[14]
      ), o && o.c(), Kr(
        /*tag*/
        e[14]
      )(t, a), qe(
        t,
        "hidden",
        /*visible*/
        e[10] === !1
      ), qe(
        t,
        "padded",
        /*padding*/
        e[6]
      ), qe(
        t,
        "border_focus",
        /*border_mode*/
        e[5] === "focus"
      ), qe(t, "hide-container", !/*explicit_call*/
      e[8] && !/*container*/
      e[9]), ue(
        t,
        "height",
        /*get_dimension*/
        e[15](
          /*height*/
          e[0]
        )
      ), ue(t, "width", typeof /*width*/
      e[1] == "number" ? `calc(min(${/*width*/
      e[1]}px, 100%))` : (
        /*get_dimension*/
        e[15](
          /*width*/
          e[1]
        )
      )), ue(
        t,
        "border-style",
        /*variant*/
        e[4]
      ), ue(
        t,
        "overflow",
        /*allow_overflow*/
        e[11] ? "visible" : "hidden"
      ), ue(
        t,
        "flex-grow",
        /*scale*/
        e[12]
      ), ue(t, "min-width", `calc(min(${/*min_width*/
      e[13]}px, 100%))`), ue(t, "border-width", "var(--block-border-width)");
    },
    m(s, u) {
      Vl(s, t, u), o && o.m(t, null), r = !0;
    },
    p(s, u) {
      o && o.p && (!r || u & /*$$scope*/
      131072) && xl(
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
        ) : Gl(
          /*$$scope*/
          s[17]
        ),
        null
      ), Kr(
        /*tag*/
        s[14]
      )(t, a = jl(l, [
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
      ])), qe(
        t,
        "hidden",
        /*visible*/
        s[10] === !1
      ), qe(
        t,
        "padded",
        /*padding*/
        s[6]
      ), qe(
        t,
        "border_focus",
        /*border_mode*/
        s[5] === "focus"
      ), qe(t, "hide-container", !/*explicit_call*/
      s[8] && !/*container*/
      s[9]), u & /*height*/
      1 && ue(
        t,
        "height",
        /*get_dimension*/
        s[15](
          /*height*/
          s[0]
        )
      ), u & /*width*/
      2 && ue(t, "width", typeof /*width*/
      s[1] == "number" ? `calc(min(${/*width*/
      s[1]}px, 100%))` : (
        /*get_dimension*/
        s[15](
          /*width*/
          s[1]
        )
      )), u & /*variant*/
      16 && ue(
        t,
        "border-style",
        /*variant*/
        s[4]
      ), u & /*allow_overflow*/
      2048 && ue(
        t,
        "overflow",
        /*allow_overflow*/
        s[11] ? "visible" : "hidden"
      ), u & /*scale*/
      4096 && ue(
        t,
        "flex-grow",
        /*scale*/
        s[12]
      ), u & /*min_width*/
      8192 && ue(t, "min-width", `calc(min(${/*min_width*/
      s[13]}px, 100%))`);
    },
    i(s) {
      r || (po(o, s), r = !0);
    },
    o(s) {
      go(o, s), r = !1;
    },
    d(s) {
      s && Ul(t), o && o.d(s);
    }
  };
}
function Zl(e) {
  let t, n = (
    /*tag*/
    e[14] && Wl(e)
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
function Jl(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { height: o = void 0 } = t, { width: l = void 0 } = t, { elem_id: a = "" } = t, { elem_classes: s = [] } = t, { variant: u = "solid" } = t, { border_mode: f = "base" } = t, { padding: c = !0 } = t, { type: _ = "normal" } = t, { test_id: h = void 0 } = t, { explicit_call: d = !1 } = t, { container: m = !0 } = t, { visible: v = !0 } = t, { allow_overflow: y = !0 } = t, { scale: k = null } = t, { min_width: b = 0 } = t, p = _ === "fieldset" ? "fieldset" : "div";
  const P = (S) => {
    if (S !== void 0) {
      if (typeof S == "number")
        return S + "px";
      if (typeof S == "string")
        return S;
    }
  };
  return e.$$set = (S) => {
    "height" in S && n(0, o = S.height), "width" in S && n(1, l = S.width), "elem_id" in S && n(2, a = S.elem_id), "elem_classes" in S && n(3, s = S.elem_classes), "variant" in S && n(4, u = S.variant), "border_mode" in S && n(5, f = S.border_mode), "padding" in S && n(6, c = S.padding), "type" in S && n(16, _ = S.type), "test_id" in S && n(7, h = S.test_id), "explicit_call" in S && n(8, d = S.explicit_call), "container" in S && n(9, m = S.container), "visible" in S && n(10, v = S.visible), "allow_overflow" in S && n(11, y = S.allow_overflow), "scale" in S && n(12, k = S.scale), "min_width" in S && n(13, b = S.min_width), "$$scope" in S && n(17, i = S.$$scope);
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
    m,
    v,
    y,
    k,
    b,
    p,
    P,
    _,
    i,
    r
  ];
}
class bo extends Ml {
  constructor(t) {
    super(), zl(this, t, Jl, Zl, Xl, {
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
  SvelteComponent: Ql,
  append: jn,
  attr: tn,
  create_component: Yl,
  destroy_component: Kl,
  detach: $l,
  element: $r,
  init: es,
  insert: ts,
  mount_component: ns,
  safe_not_equal: rs,
  set_data: is,
  space: os,
  text: ls,
  toggle_class: je,
  transition_in: ss,
  transition_out: as
} = window.__gradio__svelte__internal;
function us(e) {
  let t, n, r, i, o, l;
  return r = new /*Icon*/
  e[1]({}), {
    c() {
      t = $r("label"), n = $r("span"), Yl(r.$$.fragment), i = os(), o = ls(
        /*label*/
        e[0]
      ), tn(n, "class", "svelte-9gxdi0"), tn(t, "for", ""), tn(t, "data-testid", "block-label"), tn(t, "class", "svelte-9gxdi0"), je(t, "hide", !/*show_label*/
      e[2]), je(t, "sr-only", !/*show_label*/
      e[2]), je(
        t,
        "float",
        /*float*/
        e[4]
      ), je(
        t,
        "hide-label",
        /*disable*/
        e[3]
      );
    },
    m(a, s) {
      ts(a, t, s), jn(t, n), ns(r, n, null), jn(t, i), jn(t, o), l = !0;
    },
    p(a, [s]) {
      (!l || s & /*label*/
      1) && is(
        o,
        /*label*/
        a[0]
      ), (!l || s & /*show_label*/
      4) && je(t, "hide", !/*show_label*/
      a[2]), (!l || s & /*show_label*/
      4) && je(t, "sr-only", !/*show_label*/
      a[2]), (!l || s & /*float*/
      16) && je(
        t,
        "float",
        /*float*/
        a[4]
      ), (!l || s & /*disable*/
      8) && je(
        t,
        "hide-label",
        /*disable*/
        a[3]
      );
    },
    i(a) {
      l || (ss(r.$$.fragment, a), l = !0);
    },
    o(a) {
      as(r.$$.fragment, a), l = !1;
    },
    d(a) {
      a && $l(t), Kl(r);
    }
  };
}
function fs(e, t, n) {
  let { label: r = null } = t, { Icon: i } = t, { show_label: o = !0 } = t, { disable: l = !1 } = t, { float: a = !0 } = t;
  return e.$$set = (s) => {
    "label" in s && n(0, r = s.label), "Icon" in s && n(1, i = s.Icon), "show_label" in s && n(2, o = s.show_label), "disable" in s && n(3, l = s.disable), "float" in s && n(4, a = s.float);
  }, [r, i, o, l, a];
}
class Fr extends Ql {
  constructor(t) {
    super(), es(this, t, fs, us, rs, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: cs,
  append: gr,
  attr: Ue,
  bubble: _s,
  create_component: hs,
  destroy_component: ds,
  detach: vo,
  element: br,
  init: ms,
  insert: wo,
  listen: ps,
  mount_component: gs,
  safe_not_equal: bs,
  set_data: vs,
  set_style: nn,
  space: ws,
  text: ys,
  toggle_class: he,
  transition_in: Es,
  transition_out: Ss
} = window.__gradio__svelte__internal;
function ei(e) {
  let t, n;
  return {
    c() {
      t = br("span"), n = ys(
        /*label*/
        e[1]
      ), Ue(t, "class", "svelte-lpi64a");
    },
    m(r, i) {
      wo(r, t, i), gr(t, n);
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
      r && vo(t);
    }
  };
}
function ks(e) {
  let t, n, r, i, o, l, a, s = (
    /*show_label*/
    e[2] && ei(e)
  );
  return i = new /*Icon*/
  e[0]({}), {
    c() {
      t = br("button"), s && s.c(), n = ws(), r = br("div"), hs(i.$$.fragment), Ue(r, "class", "svelte-lpi64a"), he(
        r,
        "small",
        /*size*/
        e[4] === "small"
      ), he(
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
      ), Ue(t, "class", "svelte-lpi64a"), he(
        t,
        "pending",
        /*pending*/
        e[3]
      ), he(
        t,
        "padded",
        /*padded*/
        e[5]
      ), he(
        t,
        "highlight",
        /*highlight*/
        e[6]
      ), he(
        t,
        "transparent",
        /*transparent*/
        e[9]
      ), nn(t, "color", !/*disabled*/
      e[7] && /*_color*/
      e[11] ? (
        /*_color*/
        e[11]
      ) : "var(--block-label-text-color)"), nn(t, "--bg-color", /*disabled*/
      e[7] ? "auto" : (
        /*background*/
        e[10]
      ));
    },
    m(u, f) {
      wo(u, t, f), s && s.m(t, null), gr(t, n), gr(t, r), gs(i, r, null), o = !0, l || (a = ps(
        t,
        "click",
        /*click_handler*/
        e[13]
      ), l = !0);
    },
    p(u, [f]) {
      /*show_label*/
      u[2] ? s ? s.p(u, f) : (s = ei(u), s.c(), s.m(t, n)) : s && (s.d(1), s = null), (!o || f & /*size*/
      16) && he(
        r,
        "small",
        /*size*/
        u[4] === "small"
      ), (!o || f & /*size*/
      16) && he(
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
      8) && he(
        t,
        "pending",
        /*pending*/
        u[3]
      ), (!o || f & /*padded*/
      32) && he(
        t,
        "padded",
        /*padded*/
        u[5]
      ), (!o || f & /*highlight*/
      64) && he(
        t,
        "highlight",
        /*highlight*/
        u[6]
      ), (!o || f & /*transparent*/
      512) && he(
        t,
        "transparent",
        /*transparent*/
        u[9]
      ), f & /*disabled, _color*/
      2176 && nn(t, "color", !/*disabled*/
      u[7] && /*_color*/
      u[11] ? (
        /*_color*/
        u[11]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && nn(t, "--bg-color", /*disabled*/
      u[7] ? "auto" : (
        /*background*/
        u[10]
      ));
    },
    i(u) {
      o || (Es(i.$$.fragment, u), o = !0);
    },
    o(u) {
      Ss(i.$$.fragment, u), o = !1;
    },
    d(u) {
      u && vo(t), s && s.d(), ds(i), l = !1, a();
    }
  };
}
function Ts(e, t, n) {
  let r, { Icon: i } = t, { label: o = "" } = t, { show_label: l = !1 } = t, { pending: a = !1 } = t, { size: s = "small" } = t, { padded: u = !0 } = t, { highlight: f = !1 } = t, { disabled: c = !1 } = t, { hasPopup: _ = !1 } = t, { color: h = "var(--block-label-text-color)" } = t, { transparent: d = !1 } = t, { background: m = "var(--background-fill-primary)" } = t;
  function v(y) {
    _s.call(this, e, y);
  }
  return e.$$set = (y) => {
    "Icon" in y && n(0, i = y.Icon), "label" in y && n(1, o = y.label), "show_label" in y && n(2, l = y.show_label), "pending" in y && n(3, a = y.pending), "size" in y && n(4, s = y.size), "padded" in y && n(5, u = y.padded), "highlight" in y && n(6, f = y.highlight), "disabled" in y && n(7, c = y.disabled), "hasPopup" in y && n(8, _ = y.hasPopup), "color" in y && n(12, h = y.color), "transparent" in y && n(9, d = y.transparent), "background" in y && n(10, m = y.background);
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
    m,
    r,
    h,
    v
  ];
}
class Tt extends cs {
  constructor(t) {
    super(), ms(this, t, Ts, ks, bs, {
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
  SvelteComponent: As,
  append: Bs,
  attr: zn,
  binding_callbacks: Cs,
  create_slot: Hs,
  detach: Ns,
  element: ti,
  get_all_dirty_from_scope: Ps,
  get_slot_changes: Is,
  init: Ls,
  insert: Os,
  safe_not_equal: Ms,
  toggle_class: ze,
  transition_in: Ds,
  transition_out: Rs,
  update_slot_base: Us
} = window.__gradio__svelte__internal;
function Fs(e) {
  let t, n, r;
  const i = (
    /*#slots*/
    e[5].default
  ), o = Hs(
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
      Os(l, t, a), Bs(t, n), o && o.m(n, null), e[6](t), r = !0;
    },
    p(l, [a]) {
      o && o.p && (!r || a & /*$$scope*/
      16) && Us(
        o,
        i,
        l,
        /*$$scope*/
        l[4],
        r ? Is(
          i,
          /*$$scope*/
          l[4],
          a,
          null
        ) : Ps(
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
      r || (Ds(o, l), r = !0);
    },
    o(l) {
      Rs(o, l), r = !1;
    },
    d(l) {
      l && Ns(t), o && o.d(l), e[6](null);
    }
  };
}
function Gs(e) {
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
    const { height: _ } = c.getBoundingClientRect(), { height: h } = Gs([
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
    Cs[c ? "unshift" : "push"](() => {
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
class js extends As {
  constructor(t) {
    super(), Ls(this, t, qs, Fs, Ms, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: zs,
  append: Vn,
  attr: ke,
  detach: Vs,
  init: Xs,
  insert: xs,
  noop: Xn,
  safe_not_equal: Ws,
  set_style: Pe,
  svg_element: rn
} = window.__gradio__svelte__internal;
function Zs(e) {
  let t, n, r, i;
  return {
    c() {
      t = rn("svg"), n = rn("g"), r = rn("path"), i = rn("path"), ke(r, "d", "M18,6L6.087,17.913"), Pe(r, "fill", "none"), Pe(r, "fill-rule", "nonzero"), Pe(r, "stroke-width", "2px"), ke(n, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), ke(i, "d", "M4.364,4.364L19.636,19.636"), Pe(i, "fill", "none"), Pe(i, "fill-rule", "nonzero"), Pe(i, "stroke-width", "2px"), ke(t, "width", "100%"), ke(t, "height", "100%"), ke(t, "viewBox", "0 0 24 24"), ke(t, "version", "1.1"), ke(t, "xmlns", "http://www.w3.org/2000/svg"), ke(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ke(t, "xml:space", "preserve"), ke(t, "stroke", "currentColor"), Pe(t, "fill-rule", "evenodd"), Pe(t, "clip-rule", "evenodd"), Pe(t, "stroke-linecap", "round"), Pe(t, "stroke-linejoin", "round");
    },
    m(o, l) {
      xs(o, t, l), Vn(t, n), Vn(n, r), Vn(t, i);
    },
    p: Xn,
    i: Xn,
    o: Xn,
    d(o) {
      o && Vs(t);
    }
  };
}
class Js extends zs {
  constructor(t) {
    super(), Xs(this, t, null, Zs, Ws, {});
  }
}
const {
  SvelteComponent: Qs,
  append: Ys,
  attr: bt,
  detach: Ks,
  init: $s,
  insert: ea,
  noop: xn,
  safe_not_equal: ta,
  svg_element: ni
} = window.__gradio__svelte__internal;
function na(e) {
  let t, n;
  return {
    c() {
      t = ni("svg"), n = ni("path"), bt(n, "fill", "currentColor"), bt(n, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), bt(t, "xmlns", "http://www.w3.org/2000/svg"), bt(t, "width", "100%"), bt(t, "height", "100%"), bt(t, "viewBox", "0 0 32 32");
    },
    m(r, i) {
      ea(r, t, i), Ys(t, n);
    },
    p: xn,
    i: xn,
    o: xn,
    d(r) {
      r && Ks(t);
    }
  };
}
class yo extends Qs {
  constructor(t) {
    super(), $s(this, t, null, na, ta, {});
  }
}
const {
  SvelteComponent: ra,
  append: ia,
  attr: Te,
  detach: oa,
  init: la,
  insert: sa,
  noop: Wn,
  safe_not_equal: aa,
  svg_element: ri
} = window.__gradio__svelte__internal;
function ua(e) {
  let t, n;
  return {
    c() {
      t = ri("svg"), n = ri("path"), Te(n, "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"), Te(t, "xmlns", "http://www.w3.org/2000/svg"), Te(t, "width", "100%"), Te(t, "height", "100%"), Te(t, "viewBox", "0 0 24 24"), Te(t, "fill", "none"), Te(t, "stroke", "currentColor"), Te(t, "stroke-width", "1.5"), Te(t, "stroke-linecap", "round"), Te(t, "stroke-linejoin", "round"), Te(t, "class", "feather feather-edit-2");
    },
    m(r, i) {
      sa(r, t, i), ia(t, n);
    },
    p: Wn,
    i: Wn,
    o: Wn,
    d(r) {
      r && oa(t);
    }
  };
}
class fa extends ra {
  constructor(t) {
    super(), la(this, t, null, ua, aa, {});
  }
}
const {
  SvelteComponent: ca,
  append: ii,
  attr: de,
  detach: _a,
  init: ha,
  insert: da,
  noop: Zn,
  safe_not_equal: ma,
  svg_element: Jn
} = window.__gradio__svelte__internal;
function pa(e) {
  let t, n, r;
  return {
    c() {
      t = Jn("svg"), n = Jn("path"), r = Jn("polyline"), de(n, "d", "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"), de(r, "points", "13 2 13 9 20 9"), de(t, "xmlns", "http://www.w3.org/2000/svg"), de(t, "width", "100%"), de(t, "height", "100%"), de(t, "viewBox", "0 0 24 24"), de(t, "fill", "none"), de(t, "stroke", "currentColor"), de(t, "stroke-width", "1.5"), de(t, "stroke-linecap", "round"), de(t, "stroke-linejoin", "round"), de(t, "class", "feather feather-file");
    },
    m(i, o) {
      da(i, t, o), ii(t, n), ii(t, r);
    },
    p: Zn,
    i: Zn,
    o: Zn,
    d(i) {
      i && _a(t);
    }
  };
}
let An = class extends ca {
  constructor(t) {
    super(), ha(this, t, null, pa, ma, {});
  }
};
const {
  SvelteComponent: ga,
  append: ba,
  attr: vt,
  detach: va,
  init: wa,
  insert: ya,
  noop: Qn,
  safe_not_equal: Ea,
  svg_element: oi
} = window.__gradio__svelte__internal;
function Sa(e) {
  let t, n;
  return {
    c() {
      t = oi("svg"), n = oi("path"), vt(n, "fill", "currentColor"), vt(n, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a3.99 3.99 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2h3.5Zm2.245 2.096L16 4.25c0-.052-.002-.103-.005-.154ZM13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5ZM15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3h-5Zm0 11a2.985 2.985 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A2.985 2.985 0 0 1 20 23h-5Zm5-7a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"), vt(t, "xmlns", "http://www.w3.org/2000/svg"), vt(t, "width", "100%"), vt(t, "height", "100%"), vt(t, "viewBox", "0 0 24 24");
    },
    m(r, i) {
      ya(r, t, i), ba(t, n);
    },
    p: Qn,
    i: Qn,
    o: Qn,
    d(r) {
      r && va(t);
    }
  };
}
class ka extends ga {
  constructor(t) {
    super(), wa(this, t, null, Sa, Ea, {});
  }
}
const {
  SvelteComponent: Ta,
  append: li,
  attr: me,
  detach: Aa,
  init: Ba,
  insert: Ca,
  noop: Yn,
  safe_not_equal: Ha,
  svg_element: Kn
} = window.__gradio__svelte__internal;
function Na(e) {
  let t, n, r;
  return {
    c() {
      t = Kn("svg"), n = Kn("polyline"), r = Kn("path"), me(n, "points", "1 4 1 10 7 10"), me(r, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), me(t, "xmlns", "http://www.w3.org/2000/svg"), me(t, "width", "100%"), me(t, "height", "100%"), me(t, "viewBox", "0 0 24 24"), me(t, "fill", "none"), me(t, "stroke", "currentColor"), me(t, "stroke-width", "2"), me(t, "stroke-linecap", "round"), me(t, "stroke-linejoin", "round"), me(t, "class", "feather feather-rotate-ccw");
    },
    m(i, o) {
      Ca(i, t, o), li(t, n), li(t, r);
    },
    p: Yn,
    i: Yn,
    o: Yn,
    d(i) {
      i && Aa(t);
    }
  };
}
class Eo extends Ta {
  constructor(t) {
    super(), Ba(this, t, null, Na, Ha, {});
  }
}
const {
  SvelteComponent: Pa,
  append: $n,
  attr: K,
  detach: Ia,
  init: La,
  insert: Oa,
  noop: er,
  safe_not_equal: Ma,
  svg_element: on
} = window.__gradio__svelte__internal;
function Da(e) {
  let t, n, r, i;
  return {
    c() {
      t = on("svg"), n = on("path"), r = on("polyline"), i = on("line"), K(n, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), K(r, "points", "17 8 12 3 7 8"), K(i, "x1", "12"), K(i, "y1", "3"), K(i, "x2", "12"), K(i, "y2", "15"), K(t, "xmlns", "http://www.w3.org/2000/svg"), K(t, "width", "90%"), K(t, "height", "90%"), K(t, "viewBox", "0 0 24 24"), K(t, "fill", "none"), K(t, "stroke", "currentColor"), K(t, "stroke-width", "2"), K(t, "stroke-linecap", "round"), K(t, "stroke-linejoin", "round"), K(t, "class", "feather feather-upload");
    },
    m(o, l) {
      Oa(o, t, l), $n(t, n), $n(t, r), $n(t, i);
    },
    p: er,
    i: er,
    o: er,
    d(o) {
      o && Ia(t);
    }
  };
}
let Ra = class extends Pa {
  constructor(t) {
    super(), La(this, t, null, Da, Ma, {});
  }
};
const Ua = [
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
Ua.reduce(
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
  SvelteComponent: Fa,
  append: rt,
  attr: vr,
  check_outros: Ga,
  create_component: So,
  destroy_component: ko,
  detach: fn,
  element: wr,
  group_outros: qa,
  init: ja,
  insert: cn,
  mount_component: To,
  safe_not_equal: za,
  set_data: yr,
  space: Er,
  text: Rt,
  toggle_class: ai,
  transition_in: dn,
  transition_out: mn
} = window.__gradio__svelte__internal;
function Va(e) {
  let t, n;
  return t = new Ra({}), {
    c() {
      So(t.$$.fragment);
    },
    m(r, i) {
      To(t, r, i), n = !0;
    },
    i(r) {
      n || (dn(t.$$.fragment, r), n = !0);
    },
    o(r) {
      mn(t.$$.fragment, r), n = !1;
    },
    d(r) {
      ko(t, r);
    }
  };
}
function Xa(e) {
  let t, n;
  return t = new ka({}), {
    c() {
      So(t.$$.fragment);
    },
    m(r, i) {
      To(t, r, i), n = !0;
    },
    i(r) {
      n || (dn(t.$$.fragment, r), n = !0);
    },
    o(r) {
      mn(t.$$.fragment, r), n = !1;
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
      t = wr("span"), n = Rt("- "), i = Rt(r), o = Rt(" -"), l = Er(), s = Rt(a), vr(t, "class", "or svelte-kzcjhc");
    },
    m(u, f) {
      cn(u, t, f), rt(t, n), rt(t, i), rt(t, o), cn(u, l, f), cn(u, s, f);
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
      u && (fn(t), fn(l), fn(s));
    }
  };
}
function xa(e) {
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
  const f = [Xa, Va], c = [];
  function _(d, m) {
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
      t = wr("div"), n = wr("span"), i.c(), o = Er(), a = Rt(l), s = Er(), h && h.c(), vr(n, "class", "icon-wrap svelte-kzcjhc"), ai(
        n,
        "hovered",
        /*hovered*/
        e[4]
      ), vr(t, "class", "wrap svelte-kzcjhc");
    },
    m(d, m) {
      cn(d, t, m), rt(t, n), c[r].m(n, null), rt(t, o), rt(t, a), rt(t, s), h && h.m(t, null), u = !0;
    },
    p(d, [m]) {
      let v = r;
      r = _(d), r !== v && (qa(), mn(c[v], 1, 1, () => {
        c[v] = null;
      }), Ga(), i = c[r], i || (i = c[r] = f[r](d), i.c()), dn(i, 1), i.m(n, null)), (!u || m & /*hovered*/
      16) && ai(
        n,
        "hovered",
        /*hovered*/
        d[4]
      ), (!u || m & /*i18n, type*/
      3) && l !== (l = /*i18n*/
      d[1](
        /*defs*/
        d[5][
          /*type*/
          d[0]
        ] || /*defs*/
        d[5].file
      ) + "") && yr(a, l), /*mode*/
      d[3] !== "short" ? h ? h.p(d, m) : (h = ui(d), h.c(), h.m(t, null)) : h && (h.d(1), h = null);
    },
    i(d) {
      u || (dn(i), u = !0);
    },
    o(d) {
      mn(i), u = !1;
    },
    d(d) {
      d && fn(t), c[r].d(), h && h.d();
    }
  };
}
function Wa(e, t, n) {
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
class Za extends Fa {
  constructor(t) {
    super(), ja(this, t, Wa, xa, za, {
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
  SvelteComponent: Ja,
  add_flush_callback: Ao,
  append: ln,
  attr: Qe,
  bind: pn,
  binding_callbacks: gn,
  check_outros: Bn,
  construct_svelte_component: bn,
  create_component: lt,
  destroy_component: st,
  detach: Gt,
  element: tr,
  empty: Gr,
  group_outros: Cn,
  init: Qa,
  insert: qt,
  mount_component: at,
  safe_not_equal: Ya,
  space: Sr,
  transition_in: ge,
  transition_out: He
} = window.__gradio__svelte__internal;
function _i(e) {
  let t, n, r, i, o, l, a, s, u, f, c;
  r = new Tt({ props: { Icon: Eo, label: "Undo" } }), r.$on(
    "click",
    /*click_handler*/
    e[14]
  ), l = new Tt({
    props: {
      Icon: yo,
      label: (
        /*i18n*/
        e[4]("common.download")
      )
    }
  });
  const _ = [$a, Ka], h = [];
  function d(m, v) {
    return (
      /*use_3dgs*/
      m[9] ? 0 : 1
    );
  }
  return u = d(e), f = h[u] = _[u](e), {
    c() {
      t = tr("div"), n = tr("div"), lt(r.$$.fragment), i = Sr(), o = tr("a"), lt(l.$$.fragment), s = Sr(), f.c(), Qe(
        o,
        "href",
        /*resolved_url*/
        e[11]
      ), Qe(o, "target", window.__is_colab__ ? "_blank" : null), Qe(o, "download", a = window.__is_colab__ ? null : (
        /*value*/
        e[0].orig_name || /*value*/
        e[0].path
      )), Qe(n, "class", "buttons svelte-14rtuon"), Qe(t, "class", "model3D svelte-14rtuon");
    },
    m(m, v) {
      qt(m, t, v), ln(t, n), at(r, n, null), ln(n, i), ln(n, o), at(l, o, null), ln(t, s), h[u].m(t, null), c = !0;
    },
    p(m, v) {
      const y = {};
      v & /*i18n*/
      16 && (y.label = /*i18n*/
      m[4]("common.download")), l.$set(y), (!c || v & /*resolved_url*/
      2048) && Qe(
        o,
        "href",
        /*resolved_url*/
        m[11]
      ), (!c || v & /*value*/
      1 && a !== (a = window.__is_colab__ ? null : (
        /*value*/
        m[0].orig_name || /*value*/
        m[0].path
      ))) && Qe(o, "download", a);
      let k = u;
      u = d(m), u === k ? h[u].p(m, v) : (Cn(), He(h[k], 1, 1, () => {
        h[k] = null;
      }), Bn(), f = h[u], f ? f.p(m, v) : (f = h[u] = _[u](m), f.c()), ge(f, 1), f.m(t, null));
    },
    i(m) {
      c || (ge(r.$$.fragment, m), ge(l.$$.fragment, m), ge(f), c = !0);
    },
    o(m) {
      He(r.$$.fragment, m), He(l.$$.fragment, m), He(f), c = !1;
    },
    d(m) {
      m && Gt(t), st(r), st(l), h[u].d();
    }
  };
}
function Ka(e) {
  let t, n, r, i;
  function o(s) {
    e[16](s);
  }
  var l = (
    /*canvas3d*/
    e[8]
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
      s[11] !== void 0 && (f.resolved_url = /*resolved_url*/
      s[11]), { props: f }
    );
  }
  return l && (t = bn(l, a(e)), gn.push(() => pn(t, "resolved_url", o))), {
    c() {
      t && lt(t.$$.fragment), r = Gr();
    },
    m(s, u) {
      t && at(t, s, u), qt(s, r, u), i = !0;
    },
    p(s, u) {
      if (u & /*canvas3d*/
      256 && l !== (l = /*canvas3d*/
      s[8])) {
        if (t) {
          Cn();
          const f = t;
          He(f.$$.fragment, 1, 0, () => {
            st(f, 1);
          }), Bn();
        }
        l ? (t = bn(l, a(s)), gn.push(() => pn(t, "resolved_url", o)), lt(t.$$.fragment), ge(t.$$.fragment, 1), at(t, r.parentNode, r)) : t = null;
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
        2048 && (n = !0, f.resolved_url = /*resolved_url*/
        s[11], Ao(() => n = !1)), t.$set(f);
      }
    },
    i(s) {
      i || (t && ge(t.$$.fragment, s), i = !0);
    },
    o(s) {
      t && He(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && Gt(r), t && st(t, s);
    }
  };
}
function $a(e) {
  let t, n, r, i;
  function o(s) {
    e[15](s);
  }
  var l = (
    /*canvas3dgs*/
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
      s[11] !== void 0 && (f.resolved_url = /*resolved_url*/
      s[11]), { props: f }
    );
  }
  return l && (t = bn(l, a(e)), gn.push(() => pn(t, "resolved_url", o))), {
    c() {
      t && lt(t.$$.fragment), r = Gr();
    },
    m(s, u) {
      t && at(t, s, u), qt(s, r, u), i = !0;
    },
    p(s, u) {
      if (u & /*canvas3dgs*/
      1024 && l !== (l = /*canvas3dgs*/
      s[10])) {
        if (t) {
          Cn();
          const f = t;
          He(f.$$.fragment, 1, 0, () => {
            st(f, 1);
          }), Bn();
        }
        l ? (t = bn(l, a(s)), gn.push(() => pn(t, "resolved_url", o)), lt(t.$$.fragment), ge(t.$$.fragment, 1), at(t, r.parentNode, r)) : t = null;
      } else if (l) {
        const f = {};
        u & /*value*/
        1 && (f.value = /*value*/
        s[0]), u & /*zoom_speed*/
        32 && (f.zoom_speed = /*zoom_speed*/
        s[5]), u & /*pan_speed*/
        64 && (f.pan_speed = /*pan_speed*/
        s[6]), !n && u & /*resolved_url*/
        2048 && (n = !0, f.resolved_url = /*resolved_url*/
        s[11], Ao(() => n = !1)), t.$set(f);
      }
    },
    i(s) {
      i || (t && ge(t.$$.fragment, s), i = !0);
    },
    o(s) {
      t && He(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && Gt(r), t && st(t, s);
    }
  };
}
function eu(e) {
  let t, n, r, i;
  t = new Fr({
    props: {
      show_label: (
        /*show_label*/
        e[3]
      ),
      Icon: An,
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
      at(t, l, a), qt(l, n, a), o && o.m(l, a), qt(l, r, a), i = !0;
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
      1 && ge(o, 1)) : (o = _i(l), o.c(), ge(o, 1), o.m(r.parentNode, r)) : o && (Cn(), He(o, 1, 1, () => {
        o = null;
      }), Bn());
    },
    i(l) {
      i || (ge(t.$$.fragment, l), ge(o), i = !0);
    },
    o(l) {
      He(t.$$.fragment, l), He(o), i = !1;
    },
    d(l) {
      l && (Gt(n), Gt(r)), st(t, l), o && o.d(l);
    }
  };
}
function hi(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], o = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = o(n)) : (i === "call" || i === "optionalCall") && (n = o((...l) => n.call(t, ...l)), t = void 0);
  }
  return n;
}
async function tu() {
  return (await import("./Canvas3D-e42d3d6b.js")).default;
}
async function nu() {
  return (await import("./Canvas3DGS-f5539f54.js")).default;
}
function ru(e, t, n) {
  let { value: r } = t, { clear_color: i = [0, 0, 0, 0] } = t, { label: o = "" } = t, { show_label: l } = t, { i18n: a } = t, { zoom_speed: s = 1 } = t, { pan_speed: u = 1 } = t, { camera_position: f = [null, null, null] } = t, c = { camera_position: f, zoom_speed: s, pan_speed: u }, _, h, d = !1, m;
  function v() {
    h.reset_camera_position(f, s, u);
  }
  const y = () => v();
  function k(p) {
    m = p, n(11, m);
  }
  function b(p) {
    m = p, n(11, m);
  }
  return e.$$set = (p) => {
    "value" in p && n(0, r = p.value), "clear_color" in p && n(1, i = p.clear_color), "label" in p && n(2, o = p.label), "show_label" in p && n(3, l = p.show_label), "i18n" in p && n(4, a = p.i18n), "zoom_speed" in p && n(5, s = p.zoom_speed), "pan_speed" in p && n(6, u = p.pan_speed), "camera_position" in p && n(7, f = p.camera_position);
  }, e.$$.update = () => {
    e.$$.dirty & /*value, use_3dgs*/
    513 && r && (n(9, d = hi([
      r,
      "optionalAccess",
      (p) => p.path,
      "access",
      (p) => p.endsWith,
      "call",
      (p) => p(".splat")
    ]) || hi([
      r,
      "optionalAccess",
      (p) => p.path,
      "access",
      (p) => p.endsWith,
      "call",
      (p) => p(".ply")
    ])), d ? nu().then((p) => {
      n(10, _ = p);
    }) : tu().then((p) => {
      n(8, h = p);
    })), e.$$.dirty & /*current_settings, camera_position, zoom_speed, pan_speed, canvas3d*/
    8672 && (!Ft(c.camera_position, f) || c.zoom_speed !== s || c.pan_speed !== u) && (h.reset_camera_position(f, s, u), n(13, c = { camera_position: f, zoom_speed: s, pan_speed: u }));
  }, [
    r,
    i,
    o,
    l,
    a,
    s,
    u,
    f,
    h,
    d,
    _,
    m,
    v,
    c,
    y,
    k,
    b
  ];
}
class iu extends Ja {
  constructor(t) {
    super(), Qa(this, t, ru, eu, Ya, {
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
function di(e, t, n) {
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
const Co = /^[^\/]*\/[^\/]*$/, ou = /.*hf\.space\/{0,1}$/;
async function lu(e, t) {
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
  if (ou.test(r)) {
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
function su(e) {
  let t = {};
  return e.forEach(({ api_name: n }, r) => {
    n && (t[n] = r);
  }), t;
}
const au = /^(?=[^]*\b[dD]iscussions{0,1}\b)(?=[^]*\b[dD]isabled\b)[^]*$/;
async function mi(e) {
  try {
    const n = (await fetch(
      `https://huggingface.co/api/spaces/${e}/discussions`,
      {
        method: "HEAD"
      }
    )).headers.get("x-error-message");
    return !(n && au.test(n));
  } catch {
    return !1;
  }
}
function uu(e, t, n, r) {
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
function fu(e, t) {
  return t.forEach(([n, r, i]) => {
    e = uu(e, r, n, i);
  }), e;
}
async function cu(e, t, n, r = du) {
  let i = (Array.isArray(e) ? e : [e]).map(
    (o) => o.blob
  );
  return await Promise.all(
    await r(t, i, void 0, n).then(
      async (o) => {
        if (o.error)
          throw new Error(o.error);
        return o.files ? o.files.map((l, a) => new qr({
          ...e[a],
          path: l,
          url: t + "/file=" + l
        })) : [];
      }
    )
  );
}
async function _u(e, t) {
  return e.map(
    (n, r) => new qr({
      path: n.name,
      orig_name: n.name,
      blob: n,
      size: n.size,
      mime_type: n.type,
      is_stream: t
    })
  );
}
class qr {
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
    this.path = t, this.url = n, this.orig_name = r, this.size = i, this.blob = n ? void 0 : o, this.is_stream = l, this.mime_type = a, this.alt_text = s;
  }
}
const Ho = "This application is too busy. Keep trying!", Ye = "Connection errored out.";
let No;
function hu(e, t) {
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
      const m = a.slice(d, d + c), v = new FormData();
      m.forEach((k) => {
        v.append("files", k);
      });
      try {
        const k = u ? `${l}/upload?upload_id=${u}` : `${l}/upload`;
        var h = await e(k, {
          method: "POST",
          body: v,
          headers: f
        });
      } catch {
        return { error: Ye };
      }
      const y = await h.json();
      _.push(...y);
    }
    return { files: _ };
  }
  async function i(l, a = {}) {
    return new Promise(async (s) => {
      const { status_callback: u, hf_token: f } = a, c = {
        predict: Re,
        submit: se,
        view_api: Ze,
        component_server: gt
      };
      if ((typeof window > "u" || !("WebSocket" in window)) && !global.Websocket) {
        const B = await import("./wrapper-6f348d45-f837cf34.js");
        No = (await import("./__vite-browser-external-2447137e.js")).Blob, global.WebSocket = B.WebSocket;
      }
      const { ws_protocol: _, http_protocol: h, host: d, space_id: m } = await lu(l, f), v = Math.random().toString(36).substring(2), y = {};
      let k = !1, b = {}, p = {}, P = null;
      const S = {}, A = /* @__PURE__ */ new Set();
      let I, Q = {}, T = !1;
      f && m && (T = await pu(m, f));
      async function ye(B) {
        if (I = B, window.location.protocol === "https:" && (I.root = I.root.replace("http://", "https://")), Q = su((B == null ? void 0 : B.dependencies) || []), I.auth_required)
          return {
            config: I,
            ...c
          };
        try {
          Ne = await Ze(I);
        } catch (w) {
          console.error(`Could not get api details: ${w.message}`);
        }
        return {
          config: I,
          ...c
        };
      }
      let Ne;
      async function Ee(B) {
        if (u && u(B), B.status === "running")
          try {
            I = await vi(
              e,
              `${h}//${d}`,
              f
            );
            const w = await ye(I);
            s(w);
          } catch (w) {
            console.error(w), u && u({
              status: "error",
              message: "Could not load this space.",
              load_status: "error",
              detail: "NOT_FOUND"
            });
          }
      }
      try {
        I = await vi(
          e,
          `${h}//${d}`,
          f
        );
        const B = await ye(I);
        s(B);
      } catch (B) {
        console.error(B), m ? Tr(
          m,
          Co.test(m) ? "space_name" : "subdomain",
          Ee
        ) : u && u({
          status: "error",
          message: "Could not load this space.",
          load_status: "error",
          detail: "NOT_FOUND"
        });
      }
      function Re(B, w, M) {
        let g = !1, E = !1, Z;
        if (typeof B == "number")
          Z = I.dependencies[B];
        else {
          const x = B.replace(/^\//, "");
          Z = I.dependencies[Q[x]];
        }
        if (Z.types.continuous)
          throw new Error(
            "Cannot call predict on this function as it may run forever. Use submit instead"
          );
        return new Promise((x, ce) => {
          const Se = se(B, w, M);
          let N;
          Se.on("data", (_e) => {
            E && (Se.destroy(), x(_e)), g = !0, N = _e;
          }).on("status", (_e) => {
            _e.stage === "error" && ce(_e), _e.stage === "complete" && (E = !0, g && (Se.destroy(), x(N)));
          });
        });
      }
      function se(B, w, M, g = null) {
        let E, Z;
        if (typeof B == "number")
          E = B, Z = Ne.unnamed_endpoints[E];
        else {
          const j = B.replace(/^\//, "");
          E = Q[j], Z = Ne.named_endpoints[B.trim()];
        }
        if (typeof E != "number")
          throw new Error(
            "There is no endpoint matching that name of fn_index matching that number."
          );
        let x, ce, Se = I.protocol ?? "ws";
        const N = typeof B == "number" ? "/predict" : B;
        let _e, ne = null, ae = !1;
        const Mt = {};
        let Ge = "";
        typeof window < "u" && (Ge = new URLSearchParams(window.location.search).toString()), o(`${I.root}`, w, Z, f).then(
          (j) => {
            if (_e = {
              data: j || [],
              event_data: M,
              fn_index: E,
              trigger_id: g
            }, gu(E, I))
              R({
                type: "status",
                endpoint: N,
                stage: "pending",
                queue: !1,
                fn_index: E,
                time: /* @__PURE__ */ new Date()
              }), n(
                `${I.root}/run${N.startsWith("/") ? N : `/${N}`}${Ge ? "?" + Ge : ""}`,
                {
                  ..._e,
                  session_hash: v
                },
                f
              ).then(([V, q]) => {
                const J = V.data;
                q == 200 ? (R({
                  type: "data",
                  endpoint: N,
                  fn_index: E,
                  data: J,
                  time: /* @__PURE__ */ new Date()
                }), R({
                  type: "status",
                  endpoint: N,
                  fn_index: E,
                  stage: "complete",
                  eta: V.average_duration,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                })) : R({
                  type: "status",
                  stage: "error",
                  endpoint: N,
                  fn_index: E,
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
                  fn_index: E,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                });
              });
            else if (Se == "ws") {
              R({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: N,
                fn_index: E,
                time: /* @__PURE__ */ new Date()
              });
              let V = new URL(`${_}://${Bo(
                d,
                I.path,
                !0
              )}
							/queue/join${Ge ? "?" + Ge : ""}`);
              T && V.searchParams.set("__sign", T), x = new WebSocket(V), x.onclose = (q) => {
                q.wasClean || R({
                  type: "status",
                  stage: "error",
                  broken: !0,
                  message: Ye,
                  queue: !0,
                  endpoint: N,
                  fn_index: E,
                  time: /* @__PURE__ */ new Date()
                });
              }, x.onmessage = function(q) {
                const J = JSON.parse(q.data), { type: W, status: F, data: G } = ir(
                  J,
                  y[E]
                );
                if (W === "update" && F && !ae)
                  R({
                    type: "status",
                    endpoint: N,
                    fn_index: E,
                    time: /* @__PURE__ */ new Date(),
                    ...F
                  }), F.stage === "error" && x.close();
                else if (W === "hash") {
                  x.send(JSON.stringify({ fn_index: E, session_hash: v }));
                  return;
                } else
                  W === "data" ? x.send(JSON.stringify({ ..._e, session_hash: v })) : W === "complete" ? ae = F : W === "log" ? R({
                    type: "log",
                    log: G.log,
                    level: G.level,
                    endpoint: N,
                    fn_index: E
                  }) : W === "generating" && R({
                    type: "status",
                    time: /* @__PURE__ */ new Date(),
                    ...F,
                    stage: F == null ? void 0 : F.stage,
                    queue: !0,
                    endpoint: N,
                    fn_index: E
                  });
                G && (R({
                  type: "data",
                  time: /* @__PURE__ */ new Date(),
                  data: G.data,
                  endpoint: N,
                  fn_index: E
                }), ae && (R({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...ae,
                  stage: F == null ? void 0 : F.stage,
                  queue: !0,
                  endpoint: N,
                  fn_index: E
                }), x.close()));
              }, di(I.version || "2.0.0", "3.6") < 0 && addEventListener(
                "open",
                () => x.send(JSON.stringify({ hash: v }))
              );
            } else if (Se == "sse") {
              R({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: N,
                fn_index: E,
                time: /* @__PURE__ */ new Date()
              });
              var Y = new URLSearchParams({
                fn_index: E.toString(),
                session_hash: v
              }).toString();
              let V = new URL(
                `${I.root}/queue/join?${Ge ? Ge + "&" : ""}${Y}`
              );
              ce = t(V), ce.onmessage = async function(q) {
                const J = JSON.parse(q.data), { type: W, status: F, data: G } = ir(
                  J,
                  y[E]
                );
                if (W === "update" && F && !ae)
                  R({
                    type: "status",
                    endpoint: N,
                    fn_index: E,
                    time: /* @__PURE__ */ new Date(),
                    ...F
                  }), F.stage === "error" && ce.close();
                else if (W === "data") {
                  ne = J.event_id;
                  let [Je, Ol] = await n(
                    `${I.root}/queue/data`,
                    {
                      ..._e,
                      session_hash: v,
                      event_id: ne
                    },
                    f
                  );
                  Ol !== 200 && (R({
                    type: "status",
                    stage: "error",
                    message: Ye,
                    queue: !0,
                    endpoint: N,
                    fn_index: E,
                    time: /* @__PURE__ */ new Date()
                  }), ce.close());
                } else
                  W === "complete" ? ae = F : W === "log" ? R({
                    type: "log",
                    log: G.log,
                    level: G.level,
                    endpoint: N,
                    fn_index: E
                  }) : W === "generating" && R({
                    type: "status",
                    time: /* @__PURE__ */ new Date(),
                    ...F,
                    stage: F == null ? void 0 : F.stage,
                    queue: !0,
                    endpoint: N,
                    fn_index: E
                  });
                G && (R({
                  type: "data",
                  time: /* @__PURE__ */ new Date(),
                  data: G.data,
                  endpoint: N,
                  fn_index: E
                }), ae && (R({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...ae,
                  stage: F == null ? void 0 : F.stage,
                  queue: !0,
                  endpoint: N,
                  fn_index: E
                }), ce.close()));
              };
            } else
              (Se == "sse_v1" || Se == "sse_v2") && (R({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: N,
                fn_index: E,
                time: /* @__PURE__ */ new Date()
              }), n(
                `${I.root}/queue/join?${Ge}`,
                {
                  ..._e,
                  session_hash: v
                },
                f
              ).then(([V, q]) => {
                if (q === 503)
                  R({
                    type: "status",
                    stage: "error",
                    message: Ho,
                    queue: !0,
                    endpoint: N,
                    fn_index: E,
                    time: /* @__PURE__ */ new Date()
                  });
                else if (q !== 200)
                  R({
                    type: "status",
                    stage: "error",
                    message: Ye,
                    queue: !0,
                    endpoint: N,
                    fn_index: E,
                    time: /* @__PURE__ */ new Date()
                  });
                else {
                  ne = V.event_id;
                  let J = async function(W) {
                    try {
                      const { type: F, status: G, data: Je } = ir(
                        W,
                        y[E]
                      );
                      if (F == "heartbeat")
                        return;
                      if (F === "update" && G && !ae)
                        R({
                          type: "status",
                          endpoint: N,
                          fn_index: E,
                          time: /* @__PURE__ */ new Date(),
                          ...G
                        });
                      else if (F === "complete")
                        ae = G;
                      else if (F == "unexpected_error")
                        console.error("Unexpected error", G == null ? void 0 : G.message), R({
                          type: "status",
                          stage: "error",
                          message: (G == null ? void 0 : G.message) || "An Unexpected Error Occurred!",
                          queue: !0,
                          endpoint: N,
                          fn_index: E,
                          time: /* @__PURE__ */ new Date()
                        });
                      else if (F === "log") {
                        R({
                          type: "log",
                          log: Je.log,
                          level: Je.level,
                          endpoint: N,
                          fn_index: E
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
                          fn_index: E
                        }), Je && Se === "sse_v2" && Ll(ne, Je));
                      Je && (R({
                        type: "data",
                        time: /* @__PURE__ */ new Date(),
                        data: Je.data,
                        endpoint: N,
                        fn_index: E
                      }), ae && R({
                        type: "status",
                        time: /* @__PURE__ */ new Date(),
                        ...ae,
                        stage: G == null ? void 0 : G.stage,
                        queue: !0,
                        endpoint: N,
                        fn_index: E
                      })), ((G == null ? void 0 : G.stage) === "complete" || (G == null ? void 0 : G.stage) === "error") && (S[ne] && delete S[ne], ne in p && delete p[ne]);
                    } catch (F) {
                      console.error("Unexpected client exception", F), R({
                        type: "status",
                        stage: "error",
                        message: "An Unexpected Error Occurred!",
                        queue: !0,
                        endpoint: N,
                        fn_index: E,
                        time: /* @__PURE__ */ new Date()
                      }), We();
                    }
                  };
                  ne in b && (b[ne].forEach(
                    (W) => J(W)
                  ), delete b[ne]), S[ne] = J, A.add(ne), k || pt();
                }
              }));
          }
        );
        function Ll(j, Y) {
          !p[j] ? (p[j] = [], Y.data.forEach((q, J) => {
            p[j][J] = q;
          })) : Y.data.forEach((q, J) => {
            let W = fu(
              p[j][J],
              q
            );
            p[j][J] = W, Y.data[J] = W;
          });
        }
        function R(j) {
          const V = Mt[j.type] || [];
          V == null || V.forEach((q) => q(j));
        }
        function Fn(j, Y) {
          const V = Mt, q = V[j] || [];
          return V[j] = q, q == null || q.push(Y), { on: Fn, off: en, cancel: Gn, destroy: qn };
        }
        function en(j, Y) {
          const V = Mt;
          let q = V[j] || [];
          return q = q == null ? void 0 : q.filter((J) => J !== Y), V[j] = q, { on: Fn, off: en, cancel: Gn, destroy: qn };
        }
        async function Gn() {
          const j = {
            stage: "complete",
            queue: !1,
            time: /* @__PURE__ */ new Date()
          };
          ae = j, R({
            ...j,
            type: "status",
            endpoint: N,
            fn_index: E
          });
          let Y = {};
          Se === "ws" ? (x && x.readyState === 0 ? x.addEventListener("open", () => {
            x.close();
          }) : x.close(), Y = { fn_index: E, session_hash: v }) : (ce.close(), Y = { event_id: ne });
          try {
            await e(`${I.root}/reset`, {
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
        function qn() {
          for (const j in Mt)
            Mt[j].forEach((Y) => {
              en(j, Y);
            });
        }
        return {
          on: Fn,
          off: en,
          cancel: Gn,
          destroy: qn
        };
      }
      function pt() {
        k = !0;
        let B = new URLSearchParams({
          session_hash: v
        }).toString(), w = new URL(`${I.root}/queue/data?${B}`);
        P = t(w), P.onmessage = async function(M) {
          let g = JSON.parse(M.data);
          const E = g.event_id;
          if (!E)
            await Promise.all(
              Object.keys(S).map(
                (Z) => S[Z](g)
              )
            );
          else if (S[E]) {
            g.msg === "process_completed" && (A.delete(E), A.size === 0 && We());
            let Z = S[E];
            window.setTimeout(Z, 0, g);
          } else
            b[E] || (b[E] = []), b[E].push(g);
        }, P.onerror = async function(M) {
          await Promise.all(
            Object.keys(S).map(
              (g) => S[g]({
                msg: "unexpected_error",
                message: Ye
              })
            )
          ), We();
        };
      }
      function We() {
        k = !1, P == null || P.close();
      }
      async function gt(B, w, M) {
        var g;
        const E = { "Content-Type": "application/json" };
        f && (E.Authorization = `Bearer ${f}`);
        let Z, x = I.components.find(
          (N) => N.id === B
        );
        (g = x == null ? void 0 : x.props) != null && g.root_url ? Z = x.props.root_url : Z = I.root;
        const ce = await e(
          `${Z}/component_server/`,
          {
            method: "POST",
            body: JSON.stringify({
              data: M,
              component_id: B,
              fn_name: w,
              session_hash: v
            }),
            headers: E
          }
        );
        if (!ce.ok)
          throw new Error(
            "Could not connect to component server: " + ce.statusText
          );
        return await ce.json();
      }
      async function Ze(B) {
        if (Ne)
          return Ne;
        const w = { "Content-Type": "application/json" };
        f && (w.Authorization = `Bearer ${f}`);
        let M;
        if (di(B.version || "2.0.0", "3.30") < 0 ? M = await e(
          "https://gradio-space-api-fetcher-v2.hf.space/api",
          {
            method: "POST",
            body: JSON.stringify({
              serialize: !1,
              config: JSON.stringify(B)
            }),
            headers: w
          }
        ) : M = await e(`${B.root}/info`, {
          headers: w
        }), !M.ok)
          throw new Error(Ye);
        let g = await M.json();
        return "api" in g && (g = g.api), g.named_endpoints["/predict"] && !g.unnamed_endpoints[0] && (g.unnamed_endpoints[0] = g.named_endpoints["/predict"]), mu(g, B, Q);
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
    ).then((c) => (c.forEach(({ path: _, file_url: h, type: d, name: m }) => {
      if (d === "Gallery")
        bi(a, h, _);
      else if (h) {
        const v = new qr({ path: h, orig_name: m });
        bi(a, v, _);
      }
    }), a));
  }
}
const { post_data: W_, upload_files: du, client: Z_, handle_blob: J_ } = hu(
  fetch,
  (...e) => new EventSource(...e)
);
function pi(e, t, n, r) {
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
function gi(e, t) {
  return t === "GallerySerializable" ? "array of [file, label] tuples" : t === "ListStringSerializable" ? "array of strings" : t === "FileSerializable" ? "array of files or single file" : e.description;
}
function mu(e, t, n) {
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
          type: pi(c, f, _, "parameter"),
          description: gi(c, _)
        })
      ), r[i][l].returns = s.returns.map(
        ({ label: u, component: f, type: c, serializer: _ }) => ({
          label: u,
          component: f,
          type: pi(c, f, _, "return"),
          description: gi(c, _)
        })
      );
    }
  }
  return r;
}
async function pu(e, t) {
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
function bi(e, t, n) {
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
function gu(e, t) {
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
        discussions_enabled: await mi(a)
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
        discussions_enabled: await mi(a)
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
function bu(e) {
  return e();
}
function vu(e) {
  e.forEach(bu);
}
function wu(e) {
  return typeof e == "function";
}
function yu(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Eu(e, ...t) {
  if (e == null) {
    for (const r of t)
      r(void 0);
    return ot;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Po = typeof window < "u";
let wi = Po ? () => window.performance.now() : () => Date.now(), Io = Po ? (e) => requestAnimationFrame(e) : ot;
const kt = /* @__PURE__ */ new Set();
function Lo(e) {
  kt.forEach((t) => {
    t.c(e) || (kt.delete(t), t.f());
  }), kt.size !== 0 && Io(Lo);
}
function Su(e) {
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
const wt = [];
function ku(e, t) {
  return {
    subscribe: Zt(e, t).subscribe
  };
}
function Zt(e, t = ot) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (yu(e, a) && (e = a, n)) {
      const s = !wt.length;
      for (const u of r)
        u[1](), wt.push(u, e);
      if (s) {
        for (let u = 0; u < wt.length; u += 2)
          wt[u][0](wt[u + 1]);
        wt.length = 0;
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
  return ku(n, (l, a) => {
    let s = !1;
    const u = [];
    let f = 0, c = ot;
    const _ = () => {
      if (f)
        return;
      c();
      const d = t(r ? u[0] : u, l, a);
      o ? l(d) : c = wu(d) ? d : ot;
    }, h = i.map(
      (d, m) => Eu(
        d,
        (v) => {
          u[m] = v, f &= ~(1 << m), s && _();
        },
        () => {
          f |= 1 << m;
        }
      )
    );
    return s = !0, _(), function() {
      vu(h), c(), s = !1;
    };
  });
}
function yi(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Ar(e, t, n, r) {
  if (typeof n == "number" || yi(n)) {
    const i = r - n, o = (n - t) / (e.dt || 1 / 60), l = e.opts.stiffness * i, a = e.opts.damping * o, s = (l - a) * e.inv_mass, u = (o + s) * e.dt;
    return Math.abs(u) < e.opts.precision && Math.abs(i) < e.opts.precision ? r : (e.settled = !1, yi(n) ? new Date(n.getTime() + u) : n + u);
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
function Ei(e, t = {}) {
  const n = Zt(e), { stiffness: r = 0.15, damping: i = 0.8, precision: o = 0.01 } = t;
  let l, a, s, u = e, f = e, c = 1, _ = 0, h = !1;
  function d(v, y = {}) {
    f = v;
    const k = s = {};
    return e == null || y.hard || m.stiffness >= 1 && m.damping >= 1 ? (h = !0, l = wi(), u = v, n.set(e = f), Promise.resolve()) : (y.soft && (_ = 1 / ((y.soft === !0 ? 0.5 : +y.soft) * 60), c = 0), a || (l = wi(), h = !1, a = Su((b) => {
      if (h)
        return h = !1, a = null, !1;
      c = Math.min(c + _, 1);
      const p = {
        inv_mass: c,
        opts: m,
        settled: !0,
        dt: (b - l) * 60 / 1e3
      }, P = Ar(p, u, e, f);
      return l = b, u = e, n.set(e = P), p.settled && (a = null), !p.settled;
    })), new Promise((b) => {
      a.promise.then(() => {
        k === s && b();
      });
    }));
  }
  const m = {
    set: d,
    update: (v, y) => d(v(f, e), y),
    subscribe: n.subscribe,
    stiffness: r,
    damping: i,
    precision: o
  };
  return m;
}
var Q_ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Tu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Au = function(t) {
  return Bu(t) && !Cu(t);
};
function Bu(e) {
  return !!e && typeof e == "object";
}
function Cu(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Pu(e);
}
var Hu = typeof Symbol == "function" && Symbol.for, Nu = Hu ? Symbol.for("react.element") : 60103;
function Pu(e) {
  return e.$$typeof === Nu;
}
function Iu(e) {
  return Array.isArray(e) ? [] : {};
}
function jt(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? At(Iu(e), e, t) : e;
}
function Lu(e, t, n) {
  return e.concat(t).map(function(r) {
    return jt(r, n);
  });
}
function Ou(e, t) {
  if (!t.customMerge)
    return At;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : At;
}
function Mu(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function Si(e) {
  return Object.keys(e).concat(Mu(e));
}
function Oo(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Du(e, t) {
  return Oo(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Ru(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && Si(e).forEach(function(i) {
    r[i] = jt(e[i], n);
  }), Si(t).forEach(function(i) {
    Du(e, i) || (Oo(e, i) && n.isMergeableObject(t[i]) ? r[i] = Ou(i, n)(e[i], t[i], n) : r[i] = jt(t[i], n));
  }), r;
}
function At(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Lu, n.isMergeableObject = n.isMergeableObject || Au, n.cloneUnlessOtherwiseSpecified = jt;
  var r = Array.isArray(t), i = Array.isArray(e), o = r === i;
  return o ? r ? n.arrayMerge(e, t, n) : Ru(e, t, n) : jt(t, n);
}
At.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return At(r, i, n);
  }, {});
};
var Uu = At, Fu = Uu;
const Gu = /* @__PURE__ */ Tu(Fu);
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
var L;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(L || (L = {}));
var z;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(z || (z = {}));
var Bt;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Bt || (Bt = {}));
function ki(e) {
  return e.type === z.literal;
}
function qu(e) {
  return e.type === z.argument;
}
function Mo(e) {
  return e.type === z.number;
}
function Do(e) {
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
function ju(e) {
  return e.type === z.pound;
}
function Go(e) {
  return e.type === z.tag;
}
function qo(e) {
  return !!(e && typeof e == "object" && e.type === Bt.number);
}
function Cr(e) {
  return !!(e && typeof e == "object" && e.type === Bt.dateTime);
}
var jo = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, zu = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Vu(e) {
  var t = {};
  return e.replace(zu, function(n) {
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
var Xu = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function xu(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Xu).filter(function(_) {
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
function Wu(e) {
  return e.replace(/^(.*?)-/, "");
}
var Ti = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, zo = /^(@+)?(\+|#+)?[rs]?$/g, Zu = /(\*)(0+)|(#+)(0+)|(0+)/g, Vo = /^(0+)$/;
function Ai(e) {
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
function Ju(e) {
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
function Bi(e) {
  var t = {}, n = Xo(e);
  return n || t;
}
function Qu(e) {
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
        t.style = "unit", t.unit = Wu(i.options[0]);
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
          return U(U({}, s), Bi(u));
        }, {}));
        continue;
      case "engineering":
        t = U(U(U({}, t), { notation: "engineering" }), i.options.reduce(function(s, u) {
          return U(U({}, s), Bi(u));
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
        i.options[0].replace(Zu, function(s, u, f, c, _, h) {
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
    if (Ti.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Ti, function(s, u, f, c, _, h) {
        return f === "*" ? t.minimumFractionDigits = u.length : c && c[0] === "#" ? t.maximumFractionDigits = c.length : _ && h ? (t.minimumFractionDigits = _.length, t.maximumFractionDigits = _.length + h.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var o = i.options[0];
      o === "w" ? t = U(U({}, t), { trailingZeroDisplay: "stripIfInteger" }) : o && (t = U(U({}, t), Ai(o)));
      continue;
    }
    if (zo.test(i.stem)) {
      t = U(U({}, t), Ai(i.stem));
      continue;
    }
    var l = Xo(i.stem);
    l && (t = U(U({}, t), l));
    var a = Ju(i.stem);
    a && (t = U(U({}, t), a));
  }
  return t;
}
var sn = {
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
function Yu(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var o = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        o++, r++;
      var l = 1 + (o & 1), a = o < 2 ? 1 : 3 + (o >> 1), s = "a", u = Ku(t);
      for ((u == "H" || u == "k") && (a = 0); a-- > 0; )
        n += s;
      for (; l-- > 0; )
        n = u + n;
    } else
      i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Ku(e) {
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
  var i = sn[r || ""] || sn[n || ""] || sn["".concat(n, "-001")] || sn["001"];
  return i[0];
}
var lr, $u = new RegExp("^".concat(jo.source, "*")), ef = new RegExp("".concat(jo.source, "*$"));
function O(e, t) {
  return { start: e, end: t };
}
var tf = !!String.prototype.startsWith, nf = !!String.fromCodePoint, rf = !!Object.fromEntries, of = !!String.prototype.codePointAt, lf = !!String.prototype.trimStart, sf = !!String.prototype.trimEnd, af = !!Number.isSafeInteger, uf = af ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Hr = !0;
try {
  var ff = Wo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Hr = ((lr = ff.exec("a")) === null || lr === void 0 ? void 0 : lr[0]) === "a";
} catch {
  Hr = !1;
}
var Ci = tf ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Nr = nf ? String.fromCodePoint : (
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
), Hi = (
  // native
  rf ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var o = i[r], l = o[0], a = o[1];
        n[l] = a;
      }
      return n;
    }
  )
), xo = of ? (
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
), cf = lf ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace($u, "");
  }
), _f = sf ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(ef, "");
  }
);
function Wo(e, t) {
  return new RegExp(e, t);
}
var Pr;
if (Hr) {
  var Ni = Wo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Pr = function(t, n) {
    var r;
    Ni.lastIndex = n;
    var i = Ni.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Pr = function(t, n) {
    for (var r = []; ; ) {
      var i = xo(t, n);
      if (i === void 0 || Zo(i) || pf(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Nr.apply(void 0, r);
  };
var hf = (
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
              location: O(a, this.clonePosition())
            });
          } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(L.UNMATCHED_CLOSING_TAG, O(this.clonePosition(), this.clonePosition()));
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
            location: O(r, this.clonePosition())
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
            return this.error(L.INVALID_TAG, O(a, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(L.UNMATCHED_CLOSING_TAG, O(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: z.tag,
              value: i,
              children: l,
              location: O(r, this.clonePosition())
            },
            err: null
          } : this.error(L.INVALID_TAG, O(a, this.clonePosition())));
        } else
          return this.error(L.UNCLOSED_TAG, O(r, this.clonePosition()));
      } else
        return this.error(L.INVALID_TAG, O(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && mf(this.char()); )
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
      var s = O(r, this.clonePosition());
      return {
        val: { type: z.literal, value: i, location: s },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !df(this.peek() || 0)) ? (this.bump(), "<") : null;
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
        return this.error(L.EXPECT_ARGUMENT_CLOSING_BRACE, O(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(L.EMPTY_ARGUMENT, O(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(L.MALFORMED_ARGUMENT, O(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(L.EXPECT_ARGUMENT_CLOSING_BRACE, O(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: z.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: O(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(L.EXPECT_ARGUMENT_CLOSING_BRACE, O(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(L.MALFORMED_ARGUMENT, O(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Pr(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var o = this.clonePosition(), l = O(t, o);
      return { value: r, location: l };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var o, l = this.clonePosition(), a = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (a) {
        case "":
          return this.error(L.EXPECT_ARGUMENT_TYPE, O(l, s));
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
            var _ = _f(c.val);
            if (_.length === 0)
              return this.error(L.EXPECT_ARGUMENT_STYLE, O(this.clonePosition(), this.clonePosition()));
            var h = O(f, this.clonePosition());
            u = { style: _, styleLocation: h };
          }
          var d = this.tryParseArgumentClose(i);
          if (d.err)
            return d;
          var m = O(i, this.clonePosition());
          if (u && Ci(u == null ? void 0 : u.style, "::", 0)) {
            var v = cf(u.style.slice(2));
            if (a === "number") {
              var c = this.parseNumberSkeletonFromString(v, u.styleLocation);
              return c.err ? c : {
                val: { type: z.number, value: r, location: m, style: c.val },
                err: null
              };
            } else {
              if (v.length === 0)
                return this.error(L.EXPECT_DATE_TIME_SKELETON, m);
              var y = v;
              this.locale && (y = Yu(v, this.locale));
              var _ = {
                type: Bt.dateTime,
                pattern: y,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Vu(y) : {}
              }, k = a === "date" ? z.date : z.time;
              return {
                val: { type: k, value: r, location: m, style: _ },
                err: null
              };
            }
          }
          return {
            val: {
              type: a === "number" ? z.number : a === "date" ? z.date : z.time,
              value: r,
              location: m,
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
            return this.error(L.EXPECT_SELECT_ARGUMENT_OPTIONS, O(b, U({}, b)));
          this.bumpSpace();
          var p = this.parseIdentifierIfPossible(), P = 0;
          if (a !== "select" && p.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(L.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, O(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var c = this.tryParseDecimalInteger(L.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, L.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (c.err)
              return c;
            this.bumpSpace(), p = this.parseIdentifierIfPossible(), P = c.val;
          }
          var S = this.tryParsePluralOrSelectOptions(t, a, n, p);
          if (S.err)
            return S;
          var d = this.tryParseArgumentClose(i);
          if (d.err)
            return d;
          var A = O(i, this.clonePosition());
          return a === "select" ? {
            val: {
              type: z.select,
              value: r,
              options: Hi(S.val),
              location: A
            },
            err: null
          } : {
            val: {
              type: z.plural,
              value: r,
              options: Hi(S.val),
              offset: P,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: A
            },
            err: null
          };
        }
        default:
          return this.error(L.INVALID_ARGUMENT_TYPE, O(l, s));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(L.EXPECT_ARGUMENT_CLOSING_BRACE, O(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(L.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, O(i, this.clonePosition()));
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
        return this.error(L.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Bt.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Qu(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var o, l = !1, a = [], s = /* @__PURE__ */ new Set(), u = i.value, f = i.location; ; ) {
        if (u.length === 0) {
          var c = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var _ = this.tryParseDecimalInteger(L.EXPECT_PLURAL_ARGUMENT_SELECTOR, L.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (_.err)
              return _;
            f = O(c, this.clonePosition()), u = this.message.slice(c.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(n === "select" ? L.DUPLICATE_SELECT_ARGUMENT_SELECTOR : L.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        u === "other" && (l = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? L.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : L.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, O(this.clonePosition(), this.clonePosition()));
        var d = this.parseMessage(t + 1, n, r);
        if (d.err)
          return d;
        var m = this.tryParseArgumentClose(h);
        if (m.err)
          return m;
        a.push([
          u,
          {
            value: d.val,
            location: O(h, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), o = this.parseIdentifierIfPossible(), u = o.value, f = o.location;
      }
      return a.length === 0 ? this.error(n === "select" ? L.EXPECT_SELECT_ARGUMENT_SELECTOR : L.EXPECT_PLURAL_ARGUMENT_SELECTOR, O(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(L.MISSING_OTHER_CLAUSE, O(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
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
      var s = O(i, this.clonePosition());
      return o ? (l *= r, uf(l) ? { val: l, err: null } : this.error(n, s)) : this.error(t, s);
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
      var n = xo(this.message, t);
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
      if (Ci(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && Zo(this.char()); )
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
function df(e) {
  return Ir(e) || e === 47;
}
function mf(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Zo(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function pf(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Lr(e) {
  e.forEach(function(t) {
    if (delete t.location, Uo(t) || Fo(t))
      for (var n in t.options)
        delete t.options[n].location, Lr(t.options[n].value);
    else
      Mo(t) && qo(t.style) || (Do(t) || Ro(t)) && Cr(t.style) ? delete t.style.location : Go(t) && Lr(t.children);
  });
}
function gf(e, t) {
  t === void 0 && (t = {}), t = U({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new hf(e, t).parse();
  if (n.err) {
    var r = SyntaxError(L[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Lr(n.val), n.val;
}
function sr(e, t) {
  var n = t && t.cache ? t.cache : Sf, r = t && t.serializer ? t.serializer : Ef, i = t && t.strategy ? t.strategy : vf;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function bf(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Jo(e, t, n, r) {
  var i = bf(r) ? r : n(r), o = t.get(i);
  return typeof o > "u" && (o = e.call(this, r), t.set(i, o)), o;
}
function Qo(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), o = t.get(i);
  return typeof o > "u" && (o = e.apply(this, r), t.set(i, o)), o;
}
function jr(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function vf(e, t) {
  var n = e.length === 1 ? Jo : Qo;
  return jr(e, this, n, t.cache.create(), t.serializer);
}
function wf(e, t) {
  return jr(e, this, Qo, t.cache.create(), t.serializer);
}
function yf(e, t) {
  return jr(e, this, Jo, t.cache.create(), t.serializer);
}
var Ef = function() {
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
var Sf = {
  create: function() {
    return new zr();
  }
}, ar = {
  variadic: wf,
  monadic: yf
}, Ct;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Ct || (Ct = {}));
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
), Pi = (
  /** @class */
  function(e) {
    Hn(t, e);
    function t(n, r, i, o) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Ct.INVALID_VALUE, o) || this;
    }
    return t;
  }(Nn)
), kf = (
  /** @class */
  function(e) {
    Hn(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Ct.INVALID_VALUE, i) || this;
    }
    return t;
  }(Nn)
), Tf = (
  /** @class */
  function(e) {
    Hn(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Ct.MISSING_VALUE, r) || this;
    }
    return t;
  }(Nn)
), te;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(te || (te = {}));
function Af(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== te.literal || n.type !== te.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function Bf(e) {
  return typeof e == "function";
}
function _n(e, t, n, r, i, o, l) {
  if (e.length === 1 && ki(e[0]))
    return [
      {
        type: te.literal,
        value: e[0].value
      }
    ];
  for (var a = [], s = 0, u = e; s < u.length; s++) {
    var f = u[s];
    if (ki(f)) {
      a.push({
        type: te.literal,
        value: f.value
      });
      continue;
    }
    if (ju(f)) {
      typeof o == "number" && a.push({
        type: te.literal,
        value: n.getNumberFormat(t).format(o)
      });
      continue;
    }
    var c = f.value;
    if (!(i && c in i))
      throw new Tf(c, l);
    var _ = i[c];
    if (qu(f)) {
      (!_ || typeof _ == "string" || typeof _ == "number") && (_ = typeof _ == "string" || typeof _ == "number" ? String(_) : ""), a.push({
        type: typeof _ == "string" ? te.literal : te.object,
        value: _
      });
      continue;
    }
    if (Do(f)) {
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
    if (Mo(f)) {
      var h = typeof f.style == "string" ? r.number[f.style] : qo(f.style) ? f.style.parsedOptions : void 0;
      h && h.scale && (_ = _ * (h.scale || 1)), a.push({
        type: te.literal,
        value: n.getNumberFormat(t, h).format(_)
      });
      continue;
    }
    if (Go(f)) {
      var d = f.children, m = f.value, v = i[m];
      if (!Bf(v))
        throw new kf(m, "function", l);
      var y = _n(d, t, n, r, i, o), k = v(y.map(function(P) {
        return P.value;
      }));
      Array.isArray(k) || (k = [k]), a.push.apply(a, k.map(function(P) {
        return {
          type: typeof P == "string" ? te.literal : te.object,
          value: P
        };
      }));
    }
    if (Uo(f)) {
      var b = f.options[_] || f.options.other;
      if (!b)
        throw new Pi(f.value, _, Object.keys(f.options), l);
      a.push.apply(a, _n(b.value, t, n, r, i));
      continue;
    }
    if (Fo(f)) {
      var b = f.options["=".concat(_)];
      if (!b) {
        if (!Intl.PluralRules)
          throw new Nn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Ct.MISSING_INTL_API, l);
        var p = n.getPluralRules(t, { type: f.pluralType }).select(_ - (f.offset || 0));
        b = f.options[p] || f.options.other;
      }
      if (!b)
        throw new Pi(f.value, _, Object.keys(f.options), l);
      a.push.apply(a, _n(b.value, t, n, r, i, _ - (f.offset || 0)));
      continue;
    }
  }
  return Af(a);
}
function Cf(e, t) {
  return t ? U(U(U({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = U(U({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function Hf(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = Cf(e[r], t[r]), n;
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
function Nf(e) {
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
var Pf = (
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
        return _n(o.ast, o.locales, o.formatters, o.formats, l, void 0, o.message);
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
      this.formats = Hf(e.formats, r), this.formatters = i && i.formatters || Nf(this.formatterCache);
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
    }, e.__parse = gf, e.formats = {
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
function If(e, t) {
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
const Ve = {}, Lf = (e, t, n) => n && (t in Ve || (Ve[t] = {}), e in Ve[t] || (Ve[t][e] = n), n), Yo = (e, t) => {
  if (t == null)
    return;
  if (t in Ve && e in Ve[t])
    return Ve[t][e];
  const n = Pn(t);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], o = Mf(i, e);
    if (o)
      return Lf(e, t, o);
  }
};
let Vr;
const Jt = Zt({});
function Of(e) {
  return Vr[e] || null;
}
function Ko(e) {
  return e in Vr;
}
function Mf(e, t) {
  if (!Ko(e))
    return null;
  const n = Of(e);
  return If(n, t);
}
function Df(e) {
  if (e == null)
    return;
  const t = Pn(e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Ko(r))
      return r;
  }
}
function Rf(e, ...t) {
  delete Ve[e], Jt.update((n) => (n[e] = Gu.all([n[e] || {}, ...t]), n));
}
It(
  [Jt],
  ([e]) => Object.keys(e)
);
Jt.subscribe((e) => Vr = e);
const hn = {};
function Uf(e, t) {
  hn[e].delete(t), hn[e].size === 0 && delete hn[e];
}
function $o(e) {
  return hn[e];
}
function Ff(e) {
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
function Gf(e, t) {
  return Promise.all(
    t.map((r) => (Uf(e, r), r().then((i) => i.default || i)))
  ).then((r) => Rf(e, ...r));
}
const Dt = {};
function el(e) {
  if (!Or(e))
    return e in Dt ? Dt[e] : Promise.resolve();
  const t = Ff(e);
  return Dt[e] = Promise.all(
    t.map(
      ([n, r]) => Gf(n, r)
    )
  ).then(() => {
    if (Or(e))
      return el(e);
    delete Dt[e];
  }), Dt[e];
}
const qf = {
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
}, jf = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: qf,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, zf = jf;
function Ht() {
  return zf;
}
const fr = Zt(!1);
var Vf = Object.defineProperty, Xf = Object.defineProperties, xf = Object.getOwnPropertyDescriptors, Ii = Object.getOwnPropertySymbols, Wf = Object.prototype.hasOwnProperty, Zf = Object.prototype.propertyIsEnumerable, Li = (e, t, n) => t in e ? Vf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Jf = (e, t) => {
  for (var n in t || (t = {}))
    Wf.call(t, n) && Li(e, n, t[n]);
  if (Ii)
    for (var n of Ii(t))
      Zf.call(t, n) && Li(e, n, t[n]);
  return e;
}, Qf = (e, t) => Xf(e, xf(t));
let Mr;
const vn = Zt(null);
function Oi(e) {
  return e.split("-").map((t, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Pn(e, t = Ht().fallbackLocale) {
  const n = Oi(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...Oi(t)])] : n;
}
function mt() {
  return Mr ?? void 0;
}
vn.subscribe((e) => {
  Mr = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const Yf = (e) => {
  if (e && Df(e) && Or(e)) {
    const { loadingDelay: t } = Ht();
    let n;
    return typeof window < "u" && mt() != null && t ? n = window.setTimeout(
      () => fr.set(!0),
      t
    ) : fr.set(!0), el(e).then(() => {
      vn.set(e);
    }).finally(() => {
      clearTimeout(n), fr.set(!1);
    });
  }
  return vn.set(e);
}, Qt = Qf(Jf({}, vn), {
  set: Yf
}), In = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in t ? t[i] : t[i] = e(r);
  };
};
var Kf = Object.defineProperty, wn = Object.getOwnPropertySymbols, tl = Object.prototype.hasOwnProperty, nl = Object.prototype.propertyIsEnumerable, Mi = (e, t, n) => t in e ? Kf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Xr = (e, t) => {
  for (var n in t || (t = {}))
    tl.call(t, n) && Mi(e, n, t[n]);
  if (wn)
    for (var n of wn(t))
      nl.call(t, n) && Mi(e, n, t[n]);
  return e;
}, Lt = (e, t) => {
  var n = {};
  for (var r in e)
    tl.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && wn)
    for (var r of wn(e))
      t.indexOf(r) < 0 && nl.call(e, r) && (n[r] = e[r]);
  return n;
};
const zt = (e, t) => {
  const { formats: n } = Ht();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, $f = In(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Lt(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = zt("number", r)), new Intl.NumberFormat(n, i);
  }
), ec = In(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Lt(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = zt("date", r) : Object.keys(i).length === 0 && (i = zt("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), tc = In(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Lt(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = zt("time", r) : Object.keys(i).length === 0 && (i = zt("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), nc = (e = {}) => {
  var t = e, {
    locale: n = mt()
  } = t, r = Lt(t, [
    "locale"
  ]);
  return $f(Xr({ locale: n }, r));
}, rc = (e = {}) => {
  var t = e, {
    locale: n = mt()
  } = t, r = Lt(t, [
    "locale"
  ]);
  return ec(Xr({ locale: n }, r));
}, ic = (e = {}) => {
  var t = e, {
    locale: n = mt()
  } = t, r = Lt(t, [
    "locale"
  ]);
  return tc(Xr({ locale: n }, r));
}, oc = In(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = mt()) => new Pf(e, t, Ht().formats, {
    ignoreTag: Ht().ignoreTag
  })
), lc = (e, t = {}) => {
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
    f = (o = (i = (r = (n = Ht()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: s, id: e, defaultValue: u })) != null ? i : u) != null ? o : e;
  else if (typeof f != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof f}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), f;
  if (!a)
    return f;
  let c = f;
  try {
    c = oc(f, s).format(a);
  } catch (_) {
    _ instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      _.message
    );
  }
  return c;
}, sc = (e, t) => ic(t).format(e), ac = (e, t) => rc(t).format(e), uc = (e, t) => nc(t).format(e), fc = (e, t = mt()) => Yo(e, t);
It([Qt, Jt], () => lc);
It([Qt], () => sc);
It([Qt], () => ac);
It([Qt], () => uc);
It([Qt, Jt], () => fc);
const {
  SvelteComponent: cc,
  append: ie,
  attr: tt,
  detach: rl,
  element: nt,
  init: _c,
  insert: il,
  noop: Di,
  safe_not_equal: hc,
  set_data: yn,
  set_style: cr,
  space: Dr,
  text: Et,
  toggle_class: Ri
} = window.__gradio__svelte__internal, { onMount: dc, createEventDispatcher: mc, getContext: pc } = window.__gradio__svelte__internal;
function Ui(e) {
  let t, n, r, i, o = Ut(
    /*file_to_display*/
    e[2]
  ) + "", l, a, s, u, f = (
    /*file_to_display*/
    e[2].orig_name + ""
  ), c;
  return {
    c() {
      t = nt("div"), n = nt("span"), r = nt("div"), i = nt("progress"), l = Et(o), s = Dr(), u = nt("span"), c = Et(f), cr(i, "visibility", "hidden"), cr(i, "height", "0"), cr(i, "width", "0"), i.value = a = Ut(
        /*file_to_display*/
        e[2]
      ), tt(i, "max", "100"), tt(i, "class", "svelte-cr2edf"), tt(r, "class", "progress-bar svelte-cr2edf"), tt(u, "class", "file-name svelte-cr2edf"), tt(t, "class", "file svelte-cr2edf");
    },
    m(_, h) {
      il(_, t, h), ie(t, n), ie(n, r), ie(r, i), ie(i, l), ie(t, s), ie(t, u), ie(u, c);
    },
    p(_, h) {
      h & /*file_to_display*/
      4 && o !== (o = Ut(
        /*file_to_display*/
        _[2]
      ) + "") && yn(l, o), h & /*file_to_display*/
      4 && a !== (a = Ut(
        /*file_to_display*/
        _[2]
      )) && (i.value = a), h & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      _[2].orig_name + "") && yn(c, f);
    },
    d(_) {
      _ && rl(t);
    }
  };
}
function gc(e) {
  let t, n, r, i = (
    /*files_with_progress*/
    e[0].length + ""
  ), o, l, a = (
    /*files_with_progress*/
    e[0].length > 1 ? "files" : "file"
  ), s, u, f, c = (
    /*file_to_display*/
    e[2] && Ui(e)
  );
  return {
    c() {
      t = nt("div"), n = nt("span"), r = Et("Uploading "), o = Et(i), l = Dr(), s = Et(a), u = Et("..."), f = Dr(), c && c.c(), tt(n, "class", "uploading svelte-cr2edf"), tt(t, "class", "wrap svelte-cr2edf"), Ri(
        t,
        "progress",
        /*progress*/
        e[1]
      );
    },
    m(_, h) {
      il(_, t, h), ie(t, n), ie(n, r), ie(n, o), ie(n, l), ie(n, s), ie(n, u), ie(t, f), c && c.m(t, null);
    },
    p(_, [h]) {
      h & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && yn(o, i), h & /*files_with_progress*/
      1 && a !== (a = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && yn(s, a), /*file_to_display*/
      _[2] ? c ? c.p(_, h) : (c = Ui(_), c.c(), c.m(t, null)) : c && (c.d(1), c = null), h & /*progress*/
      2 && Ri(
        t,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: Di,
    o: Di,
    d(_) {
      _ && rl(t), c && c.d();
    }
  };
}
function Ut(e) {
  return e.progress * 100 / (e.size || 0) || 0;
}
function bc(e) {
  let t = 0;
  return e.forEach((n) => {
    t += Ut(n);
  }), document.documentElement.style.setProperty("--upload-progress-width", (t / e.length).toFixed(2) + "%"), t / e.length;
}
function vc(e, t, n) {
  let { upload_id: r } = t, { root: i } = t, { files: o } = t, l, a = !1, s, u, f = o.map((d) => ({ ...d, progress: 0 }));
  const c = mc();
  function _(d, m) {
    n(0, f = f.map((v) => (v.orig_name === d && (v.progress += m), v)));
  }
  const h = pc("EventSource_factory");
  return dc(() => {
    l = h(new URL(`${i}/upload_progress?upload_id=${r}`)), l.onmessage = async function(d) {
      const m = JSON.parse(d.data);
      a || n(1, a = !0), m.msg === "done" ? (l.close(), c("done")) : (n(6, s = m), _(m.orig_name, m.chunk_size));
    };
  }), e.$$set = (d) => {
    "upload_id" in d && n(3, r = d.upload_id), "root" in d && n(4, i = d.root), "files" in d && n(5, o = d.files);
  }, e.$$.update = () => {
    e.$$.dirty & /*files_with_progress*/
    1 && bc(f), e.$$.dirty & /*current_file_upload, files_with_progress*/
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
class wc extends cc {
  constructor(t) {
    super(), _c(this, t, vc, gc, hc, { upload_id: 3, root: 4, files: 5 });
  }
}
const {
  SvelteComponent: yc,
  append: Fi,
  attr: $,
  binding_callbacks: Ec,
  bubble: Ke,
  check_outros: ol,
  create_component: Sc,
  create_slot: ll,
  destroy_component: kc,
  detach: Ln,
  element: Rr,
  empty: sl,
  get_all_dirty_from_scope: al,
  get_slot_changes: ul,
  group_outros: fl,
  init: Tc,
  insert: On,
  listen: fe,
  mount_component: Ac,
  prevent_default: $e,
  run_all: Bc,
  safe_not_equal: Cc,
  set_style: cl,
  space: Hc,
  stop_propagation: et,
  toggle_class: ee,
  transition_in: xe,
  transition_out: ut,
  update_slot_base: _l
} = window.__gradio__svelte__internal, { createEventDispatcher: Nc, tick: Pc, getContext: Ic } = window.__gradio__svelte__internal;
function Lc(e) {
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
      t = Rr("button"), _ && _.c(), n = Hc(), r = Rr("input"), $(r, "aria-label", "file upload"), $(r, "data-testid", "file-upload"), $(r, "type", "file"), $(
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
      On(h, t, d), _ && _.m(t, null), Fi(t, n), Fi(t, r), e[30](r), s = !0, u || (f = [
        fe(
          r,
          "change",
          /*load_files_from_upload*/
          e[15]
        ),
        fe(t, "drag", et($e(
          /*drag_handler*/
          e[23]
        ))),
        fe(t, "dragstart", et($e(
          /*dragstart_handler*/
          e[24]
        ))),
        fe(t, "dragend", et($e(
          /*dragend_handler*/
          e[25]
        ))),
        fe(t, "dragover", et($e(
          /*dragover_handler*/
          e[26]
        ))),
        fe(t, "dragenter", et($e(
          /*dragenter_handler*/
          e[27]
        ))),
        fe(t, "dragleave", et($e(
          /*dragleave_handler*/
          e[28]
        ))),
        fe(t, "drop", et($e(
          /*drop_handler*/
          e[29]
        ))),
        fe(
          t,
          "click",
          /*open_file_upload*/
          e[9]
        ),
        fe(
          t,
          "drop",
          /*loadFilesFromDrop*/
          e[16]
        ),
        fe(
          t,
          "dragenter",
          /*updateDragging*/
          e[14]
        ),
        fe(
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
      s || (xe(_, h), s = !0);
    },
    o(h) {
      ut(_, h), s = !1;
    },
    d(h) {
      h && Ln(t), _ && _.d(h), e[30](null), u = !1, Bc(f);
    }
  };
}
function Oc(e) {
  let t, n, r = !/*hidden*/
  e[7] && Gi(e);
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
      128 && xe(r, 1)) : (r = Gi(i), r.c(), xe(r, 1), r.m(t.parentNode, t));
    },
    i(i) {
      n || (xe(r), n = !0);
    },
    o(i) {
      ut(r), n = !1;
    },
    d(i) {
      i && Ln(t), r && r.d(i);
    }
  };
}
function Mc(e) {
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
      On(s, t, u), a && a.m(t, null), r = !0, i || (o = fe(
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
      r || (xe(a, s), r = !0);
    },
    o(s) {
      ut(a, s), r = !1;
    },
    d(s) {
      s && Ln(t), a && a.d(s), i = !1, o();
    }
  };
}
function Gi(e) {
  let t, n;
  return t = new wc({
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
      Sc(t.$$.fragment);
    },
    m(r, i) {
      Ac(t, r, i), n = !0;
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
      n || (xe(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ut(t.$$.fragment, r), n = !1;
    },
    d(r) {
      kc(t, r);
    }
  };
}
function Dc(e) {
  let t, n, r, i;
  const o = [Mc, Oc, Lc], l = [];
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
      }), ol(), n = l[t], n ? n.p(s, u) : (n = l[t] = o[t](s), n.c()), xe(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      i || (xe(n), i = !0);
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
function Rc(e, t, n) {
  if (!e || e === "*" || e === "file/*")
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
function Uc(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { filetype: o = null } = t, { dragging: l = !1 } = t, { boundedheight: a = !0 } = t, { center: s = !0 } = t, { flex: u = !0 } = t, { file_count: f = "single" } = t, { disable_click: c = !1 } = t, { root: _ } = t, { hidden: h = !1 } = t, { format: d = "file" } = t, { uploading: m = !1 } = t, v, y, k;
  const b = Ic("upload_files");
  let p;
  const P = Nc();
  function S() {
    n(17, l = !l);
  }
  function A() {
    navigator.clipboard.read().then(async (w) => {
      for (let M = 0; M < w.length; M++) {
        const g = w[M].types.find((E) => E.startsWith("image/"));
        if (g) {
          w[M].getType(g).then(async (E) => {
            const Z = new File([E], `clipboard.${g.replace("image/", "")}`);
            await T([Z]);
          });
          break;
        }
      }
    });
  }
  function I() {
    c || (n(13, p.value = "", p), p.click());
  }
  async function Q(w) {
    await Pc(), n(10, v = Math.random().toString(36).substring(2, 15)), n(1, m = !0);
    const M = await cu(w, _, v, b);
    return P("load", f === "single" ? qi([M, "optionalAccess", (g) => g[0]]) : M), n(1, m = !1), M || [];
  }
  async function T(w) {
    if (!w.length)
      return;
    let M = w.map((g) => new File([g], g.name));
    return n(11, y = await _u(M)), await Q(y);
  }
  async function ye(w) {
    const M = w.target;
    if (M.files)
      if (d != "blob")
        await T(Array.from(M.files));
      else {
        if (f === "single") {
          P("load", M.files[0]);
          return;
        }
        P("load", M.files);
      }
  }
  async function Ne(w) {
    if (n(17, l = !1), !qi([w, "access", (g) => g.dataTransfer, "optionalAccess", (g) => g.files]))
      return;
    const M = Array.from(w.dataTransfer.files).filter((g) => {
      const E = "." + g.name.split(".").pop();
      return E && Rc(o, E, g.type) || (E && Array.isArray(o) ? o.includes(E) : E === o) ? !0 : (P("error", `Invalid file type only ${o} allowed.`), !1);
    });
    await T(M);
  }
  function Ee(w) {
    Ke.call(this, e, w);
  }
  function Re(w) {
    Ke.call(this, e, w);
  }
  function se(w) {
    Ke.call(this, e, w);
  }
  function pt(w) {
    Ke.call(this, e, w);
  }
  function We(w) {
    Ke.call(this, e, w);
  }
  function gt(w) {
    Ke.call(this, e, w);
  }
  function Ze(w) {
    Ke.call(this, e, w);
  }
  function B(w) {
    Ec[w ? "unshift" : "push"](() => {
      p = w, n(13, p);
    });
  }
  return e.$$set = (w) => {
    "filetype" in w && n(0, o = w.filetype), "dragging" in w && n(17, l = w.dragging), "boundedheight" in w && n(2, a = w.boundedheight), "center" in w && n(3, s = w.center), "flex" in w && n(4, u = w.flex), "file_count" in w && n(5, f = w.file_count), "disable_click" in w && n(18, c = w.disable_click), "root" in w && n(6, _ = w.root), "hidden" in w && n(7, h = w.hidden), "format" in w && n(19, d = w.format), "uploading" in w && n(1, m = w.uploading), "$$scope" in w && n(21, i = w.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*filetype*/
    1 && (o == null || typeof o == "string" ? n(12, k = o) : (n(0, o = o.map((w) => w.startsWith(".") ? w : w + "/*")), n(12, k = o.join(", "))));
  }, [
    o,
    m,
    a,
    s,
    u,
    f,
    _,
    h,
    A,
    I,
    v,
    y,
    k,
    p,
    S,
    ye,
    Ne,
    l,
    c,
    d,
    T,
    i,
    r,
    Ee,
    Re,
    se,
    pt,
    We,
    gt,
    Ze,
    B
  ];
}
class Fc extends yc {
  constructor(t) {
    super(), Tc(
      this,
      t,
      Uc,
      Dc,
      Cc,
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
const { setContext: Y_, getContext: Gc } = window.__gradio__svelte__internal, qc = "WORKER_PROXY_CONTEXT_KEY";
function hl() {
  return Gc(qc);
}
function jc(e) {
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
  const t = new URL(e);
  return !(!jc(t) || t.protocol !== "http:" && t.protocol !== "https:");
}
async function K_(e) {
  if (e == null || !ml(e))
    return e;
  const t = hl();
  if (t == null)
    return e;
  const r = new URL(e).pathname;
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
  SvelteComponent: zc,
  assign: En,
  check_outros: pl,
  compute_rest_props: ji,
  create_slot: xr,
  detach: Mn,
  element: gl,
  empty: bl,
  exclude_internal_props: Vc,
  get_all_dirty_from_scope: Wr,
  get_slot_changes: Zr,
  get_spread_update: vl,
  group_outros: wl,
  init: Xc,
  insert: Dn,
  listen: yl,
  prevent_default: xc,
  safe_not_equal: Wc,
  set_attributes: Sn,
  transition_in: ft,
  transition_out: ct,
  update_slot_base: Jr
} = window.__gradio__svelte__internal, { createEventDispatcher: Zc } = window.__gradio__svelte__internal;
function Jc(e) {
  let t, n, r, i, o;
  const l = (
    /*#slots*/
    e[8].default
  ), a = xr(
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
    u = En(u, s[f]);
  return {
    c() {
      t = gl("a"), a && a.c(), Sn(t, u);
    },
    m(f, c) {
      Dn(f, t, c), a && a.m(t, null), r = !0, i || (o = yl(
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
        r ? Zr(
          l,
          /*$$scope*/
          f[7],
          c,
          null
        ) : Wr(
          /*$$scope*/
          f[7]
        ),
        null
      ), Sn(t, u = vl(s, [
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
      f && Mn(t), a && a.d(f), i = !1, o();
    }
  };
}
function Qc(e) {
  let t, n, r, i;
  const o = [Kc, Yc], l = [];
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
      l[t].m(s, u), Dn(s, r, u), i = !0;
    },
    p(s, u) {
      let f = t;
      t = a(s), t === f ? l[t].p(s, u) : (wl(), ct(l[f], 1, 1, () => {
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
      s && Mn(r), l[t].d(s);
    }
  };
}
function Yc(e) {
  let t, n, r, i;
  const o = (
    /*#slots*/
    e[8].default
  ), l = xr(
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
    s = En(s, a[u]);
  return {
    c() {
      t = gl("a"), l && l.c(), Sn(t, s);
    },
    m(u, f) {
      Dn(u, t, f), l && l.m(t, null), n = !0, r || (i = yl(t, "click", xc(
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
        n ? Zr(
          o,
          /*$$scope*/
          u[7],
          f,
          null
        ) : Wr(
          /*$$scope*/
          u[7]
        ),
        null
      ), Sn(t, s = vl(a, [
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
      u && Mn(t), l && l.d(u), r = !1, i();
    }
  };
}
function Kc(e) {
  let t;
  const n = (
    /*#slots*/
    e[8].default
  ), r = xr(
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
        t ? Zr(
          n,
          /*$$scope*/
          i[7],
          o,
          null
        ) : Wr(
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
function $c(e) {
  let t, n, r, i, o;
  const l = [Qc, Jc], a = [];
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
      a[n].m(u, f), Dn(u, i, f), o = !0;
    },
    p(u, [f]) {
      let c = n;
      n = s(u, f), n === c ? a[n].p(u, f) : (wl(), ct(a[c], 1, 1, () => {
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
      u && Mn(i), a[n].d(u);
    }
  };
}
function e0(e, t, n) {
  const r = ["href", "download"];
  let i = ji(t, r), { $$slots: o = {}, $$scope: l } = t, { href: a = void 0 } = t, { download: s } = t;
  const u = Zc();
  let f = !1;
  const c = hl();
  async function _() {
    if (f)
      return;
    if (u("click"), a == null)
      throw new Error("href is not defined.");
    if (c == null)
      throw new Error("Wasm worker proxy is not available.");
    const d = new URL(a).pathname;
    n(2, f = !0), c.httpRequest({
      method: "GET",
      path: d,
      headers: {},
      query_string: ""
    }).then((m) => {
      if (m.status !== 200)
        throw new Error(`Failed to get file ${d} from the Wasm worker.`);
      const v = new Blob(
        [m.body],
        {
          type: dl(m.headers, "content-type")
        }
      ), y = URL.createObjectURL(v), k = document.createElement("a");
      k.href = y, k.download = s, k.click(), URL.revokeObjectURL(y);
    }).finally(() => {
      n(2, f = !1);
    });
  }
  return e.$$set = (h) => {
    t = En(En({}, t), Vc(h)), n(6, i = ji(t, r)), "href" in h && n(0, a = h.href), "download" in h && n(1, s = h.download), "$$scope" in h && n(7, l = h.$$scope);
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
class t0 extends zc {
  constructor(t) {
    super(), Xc(this, t, e0, $c, Wc, { href: 0, download: 1 });
  }
}
const {
  SvelteComponent: n0,
  append: _r,
  attr: r0,
  check_outros: hr,
  create_component: Yt,
  destroy_component: Kt,
  detach: i0,
  element: o0,
  group_outros: dr,
  init: l0,
  insert: s0,
  mount_component: $t,
  safe_not_equal: a0,
  set_style: zi,
  space: mr,
  toggle_class: Vi,
  transition_in: re,
  transition_out: Ce
} = window.__gradio__svelte__internal, { createEventDispatcher: u0 } = window.__gradio__svelte__internal;
function Xi(e) {
  let t, n;
  return t = new Tt({
    props: {
      Icon: fa,
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
      Yt(t.$$.fragment);
    },
    m(r, i) {
      $t(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*i18n*/
      16 && (o.label = /*i18n*/
      r[4]("common.edit")), t.$set(o);
    },
    i(r) {
      n || (re(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ce(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Kt(t, r);
    }
  };
}
function xi(e) {
  let t, n;
  return t = new Tt({
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
      Yt(t.$$.fragment);
    },
    m(r, i) {
      $t(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*i18n*/
      16 && (o.label = /*i18n*/
      r[4]("common.undo")), t.$set(o);
    },
    i(r) {
      n || (re(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ce(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Kt(t, r);
    }
  };
}
function Wi(e) {
  let t, n;
  return t = new t0({
    props: {
      href: (
        /*download*/
        e[2]
      ),
      download: !0,
      $$slots: { default: [f0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Yt(t.$$.fragment);
    },
    m(r, i) {
      $t(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*download*/
      4 && (o.href = /*download*/
      r[2]), i & /*$$scope, i18n*/
      528 && (o.$$scope = { dirty: i, ctx: r }), t.$set(o);
    },
    i(r) {
      n || (re(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ce(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Kt(t, r);
    }
  };
}
function f0(e) {
  let t, n;
  return t = new Tt({
    props: {
      Icon: yo,
      label: (
        /*i18n*/
        e[4]("common.download")
      )
    }
  }), {
    c() {
      Yt(t.$$.fragment);
    },
    m(r, i) {
      $t(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*i18n*/
      16 && (o.label = /*i18n*/
      r[4]("common.download")), t.$set(o);
    },
    i(r) {
      n || (re(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ce(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Kt(t, r);
    }
  };
}
function c0(e) {
  let t, n, r, i, o, l, a = (
    /*editable*/
    e[0] && Xi(e)
  ), s = (
    /*undoable*/
    e[1] && xi(e)
  ), u = (
    /*download*/
    e[2] && Wi(e)
  );
  return o = new Tt({
    props: {
      Icon: Js,
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
      t = o0("div"), a && a.c(), n = mr(), s && s.c(), r = mr(), u && u.c(), i = mr(), Yt(o.$$.fragment), r0(t, "class", "svelte-1wj0ocy"), Vi(t, "not-absolute", !/*absolute*/
      e[3]), zi(
        t,
        "position",
        /*absolute*/
        e[3] ? "absolute" : "static"
      );
    },
    m(f, c) {
      s0(f, t, c), a && a.m(t, null), _r(t, n), s && s.m(t, null), _r(t, r), u && u.m(t, null), _r(t, i), $t(o, t, null), l = !0;
    },
    p(f, [c]) {
      /*editable*/
      f[0] ? a ? (a.p(f, c), c & /*editable*/
      1 && re(a, 1)) : (a = Xi(f), a.c(), re(a, 1), a.m(t, n)) : a && (dr(), Ce(a, 1, 1, () => {
        a = null;
      }), hr()), /*undoable*/
      f[1] ? s ? (s.p(f, c), c & /*undoable*/
      2 && re(s, 1)) : (s = xi(f), s.c(), re(s, 1), s.m(t, r)) : s && (dr(), Ce(s, 1, 1, () => {
        s = null;
      }), hr()), /*download*/
      f[2] ? u ? (u.p(f, c), c & /*download*/
      4 && re(u, 1)) : (u = Wi(f), u.c(), re(u, 1), u.m(t, i)) : u && (dr(), Ce(u, 1, 1, () => {
        u = null;
      }), hr());
      const _ = {};
      c & /*i18n*/
      16 && (_.label = /*i18n*/
      f[4]("common.clear")), o.$set(_), (!l || c & /*absolute*/
      8) && Vi(t, "not-absolute", !/*absolute*/
      f[3]), c & /*absolute*/
      8 && zi(
        t,
        "position",
        /*absolute*/
        f[3] ? "absolute" : "static"
      );
    },
    i(f) {
      l || (re(a), re(s), re(u), re(o.$$.fragment, f), l = !0);
    },
    o(f) {
      Ce(a), Ce(s), Ce(u), Ce(o.$$.fragment, f), l = !1;
    },
    d(f) {
      f && i0(t), a && a.d(), s && s.d(), u && u.d(), Kt(o);
    }
  };
}
function _0(e, t, n) {
  let { editable: r = !1 } = t, { undoable: i = !1 } = t, { download: o = null } = t, { absolute: l = !0 } = t, { i18n: a } = t;
  const s = u0(), u = () => s("edit"), f = () => s("undo"), c = (_) => {
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
class h0 extends n0 {
  constructor(t) {
    super(), l0(this, t, _0, c0, a0, {
      editable: 0,
      undoable: 1,
      download: 2,
      absolute: 3,
      i18n: 4
    });
  }
}
const {
  SvelteComponent: d0,
  add_flush_callback: m0,
  append: p0,
  attr: g0,
  bind: b0,
  binding_callbacks: v0,
  check_outros: Rn,
  construct_svelte_component: kn,
  create_component: _t,
  create_slot: w0,
  destroy_component: ht,
  detach: Vt,
  element: y0,
  empty: Qr,
  get_all_dirty_from_scope: E0,
  get_slot_changes: S0,
  group_outros: Un,
  init: k0,
  insert: Xt,
  mount_component: dt,
  safe_not_equal: T0,
  space: El,
  transition_in: be,
  transition_out: ve,
  update_slot_base: A0
} = window.__gradio__svelte__internal, { createEventDispatcher: B0, tick: Zi } = window.__gradio__svelte__internal;
function C0(e) {
  let t, n, r, i, o, l;
  n = new h0({
    props: {
      undoable: !0,
      i18n: (
        /*i18n*/
        e[5]
      ),
      absolute: !0
    }
  }), n.$on(
    "clear",
    /*handle_clear*/
    e[14]
  ), n.$on(
    "undo",
    /*handle_undo*/
    e[15]
  );
  const a = [P0, N0], s = [];
  function u(f, c) {
    return (
      /*use_3dgs*/
      f[9] ? 0 : 1
    );
  }
  return i = u(e), o = s[i] = a[i](e), {
    c() {
      t = y0("div"), _t(n.$$.fragment), r = El(), o.c(), g0(t, "class", "input-model svelte-1oz8ks8");
    },
    m(f, c) {
      Xt(f, t, c), dt(n, t, null), p0(t, r), s[i].m(t, null), l = !0;
    },
    p(f, c) {
      const _ = {};
      c & /*i18n*/
      32 && (_.i18n = /*i18n*/
      f[5]), n.$set(_);
      let h = i;
      i = u(f), i === h ? s[i].p(f, c) : (Un(), ve(s[h], 1, 1, () => {
        s[h] = null;
      }), Rn(), o = s[i], o ? o.p(f, c) : (o = s[i] = a[i](f), o.c()), be(o, 1), o.m(t, null));
    },
    i(f) {
      l || (be(n.$$.fragment, f), be(o), l = !0);
    },
    o(f) {
      ve(n.$$.fragment, f), ve(o), l = !1;
    },
    d(f) {
      f && Vt(t), ht(n), s[i].d();
    }
  };
}
function H0(e) {
  let t, n, r;
  function i(l) {
    e[17](l);
  }
  let o = {
    root: (
      /*root*/
      e[4]
    ),
    filetype: [".glb"],
    $$slots: { default: [I0] },
    $$scope: { ctx: e }
  };
  return (
    /*dragging*/
    e[10] !== void 0 && (o.dragging = /*dragging*/
    e[10]), t = new Fc({ props: o }), v0.push(() => b0(t, "dragging", i)), t.$on(
      "load",
      /*handle_upload*/
      e[13]
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
        262144 && (s.$$scope = { dirty: a, ctx: l }), !n && a & /*dragging*/
        1024 && (n = !0, s.dragging = /*dragging*/
        l[10], m0(() => n = !1)), t.$set(s);
      },
      i(l) {
        r || (be(t.$$.fragment, l), r = !0);
      },
      o(l) {
        ve(t.$$.fragment, l), r = !1;
      },
      d(l) {
        ht(t, l);
      }
    }
  );
}
function N0(e) {
  let t, n, r;
  var i = (
    /*canvas3d*/
    e[11]
  );
  function o(l, a) {
    return {
      props: {
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
      }
    };
  }
  return i && (t = kn(i, o(e))), {
    c() {
      t && _t(t.$$.fragment), n = Qr();
    },
    m(l, a) {
      t && dt(t, l, a), Xt(l, n, a), r = !0;
    },
    p(l, a) {
      if (a & /*canvas3d*/
      2048 && i !== (i = /*canvas3d*/
      l[11])) {
        if (t) {
          Un();
          const s = t;
          ve(s.$$.fragment, 1, 0, () => {
            ht(s, 1);
          }), Rn();
        }
        i ? (t = kn(i, o(l)), _t(t.$$.fragment), be(t.$$.fragment, 1), dt(t, n.parentNode, n)) : t = null;
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
      r || (t && be(t.$$.fragment, l), r = !0);
    },
    o(l) {
      t && ve(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && Vt(n), t && ht(t, l);
    }
  };
}
function P0(e) {
  let t, n, r;
  var i = (
    /*canvas3dgs*/
    e[12]
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
  return i && (t = kn(i, o(e))), {
    c() {
      t && _t(t.$$.fragment), n = Qr();
    },
    m(l, a) {
      t && dt(t, l, a), Xt(l, n, a), r = !0;
    },
    p(l, a) {
      if (a & /*canvas3dgs*/
      4096 && i !== (i = /*canvas3dgs*/
      l[12])) {
        if (t) {
          Un();
          const s = t;
          ve(s.$$.fragment, 1, 0, () => {
            ht(s, 1);
          }), Rn();
        }
        i ? (t = kn(i, o(l)), _t(t.$$.fragment), be(t.$$.fragment, 1), dt(t, n.parentNode, n)) : t = null;
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
      r || (t && be(t.$$.fragment, l), r = !0);
    },
    o(l) {
      t && ve(t.$$.fragment, l), r = !1;
    },
    d(l) {
      l && Vt(n), t && ht(t, l);
    }
  };
}
function I0(e) {
  let t;
  const n = (
    /*#slots*/
    e[16].default
  ), r = w0(
    n,
    e,
    /*$$scope*/
    e[18],
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
      262144) && A0(
        r,
        n,
        i,
        /*$$scope*/
        i[18],
        t ? S0(
          n,
          /*$$scope*/
          i[18],
          o,
          null
        ) : E0(
          /*$$scope*/
          i[18]
        ),
        null
      );
    },
    i(i) {
      t || (be(r, i), t = !0);
    },
    o(i) {
      ve(r, i), t = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function L0(e) {
  let t, n, r, i, o, l;
  t = new Fr({
    props: {
      show_label: (
        /*show_label*/
        e[3]
      ),
      Icon: An,
      label: (
        /*label*/
        e[2] || "3D Model"
      )
    }
  });
  const a = [H0, C0], s = [];
  function u(f, c) {
    return (
      /*value*/
      f[0] === null ? 0 : 1
    );
  }
  return r = u(e), i = s[r] = a[r](e), {
    c() {
      _t(t.$$.fragment), n = El(), i.c(), o = Qr();
    },
    m(f, c) {
      dt(t, f, c), Xt(f, n, c), s[r].m(f, c), Xt(f, o, c), l = !0;
    },
    p(f, [c]) {
      const _ = {};
      c & /*show_label*/
      8 && (_.show_label = /*show_label*/
      f[3]), c & /*label*/
      4 && (_.label = /*label*/
      f[2] || "3D Model"), t.$set(_);
      let h = r;
      r = u(f), r === h ? s[r].p(f, c) : (Un(), ve(s[h], 1, 1, () => {
        s[h] = null;
      }), Rn(), i = s[r], i ? i.p(f, c) : (i = s[r] = a[r](f), i.c()), be(i, 1), i.m(o.parentNode, o));
    },
    i(f) {
      l || (be(t.$$.fragment, f), be(i), l = !0);
    },
    o(f) {
      ve(t.$$.fragment, f), ve(i), l = !1;
    },
    d(f) {
      f && (Vt(n), Vt(o)), ht(t, f), s[r].d(f);
    }
  };
}
function Ji(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], o = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = o(n)) : (i === "call" || i === "optionalCall") && (n = o((...l) => n.call(t, ...l)), t = void 0);
  }
  return n;
}
async function O0() {
  return (await import("./Canvas3D-e42d3d6b.js")).default;
}
async function M0() {
  return (await import("./Canvas3DGS-f5539f54.js")).default;
}
function D0(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { value: o } = t, { clear_color: l = [0, 0, 0, 0] } = t, { label: a = "" } = t, { show_label: s } = t, { root: u } = t, { i18n: f } = t, { zoom_speed: c = 1 } = t, { pan_speed: _ = 1 } = t, { camera_position: h = [null, null, null] } = t;
  async function d({ detail: A }) {
    n(0, o = A), await Zi(), p("change", o), p("load", o);
  }
  async function m() {
    n(0, o = null), await Zi(), p("clear"), p("change");
  }
  let v, y, k = !1;
  async function b() {
    v.reset_camera_position(h, c, _);
  }
  const p = B0();
  let P = !1;
  function S(A) {
    P = A, n(10, P);
  }
  return e.$$set = (A) => {
    "value" in A && n(0, o = A.value), "clear_color" in A && n(1, l = A.clear_color), "label" in A && n(2, a = A.label), "show_label" in A && n(3, s = A.show_label), "root" in A && n(4, u = A.root), "i18n" in A && n(5, f = A.i18n), "zoom_speed" in A && n(6, c = A.zoom_speed), "pan_speed" in A && n(7, _ = A.pan_speed), "camera_position" in A && n(8, h = A.camera_position), "$$scope" in A && n(18, i = A.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*dragging*/
    1024 && p("drag", P), e.$$.dirty & /*value, use_3dgs*/
    513 && o && (n(9, k = Ji([
      o,
      "optionalAccess",
      (A) => A.path,
      "access",
      (A) => A.endsWith,
      "call",
      (A) => A(".splat")
    ]) || Ji([
      o,
      "optionalAccess",
      (A) => A.path,
      "access",
      (A) => A.endsWith,
      "call",
      (A) => A(".ply")
    ])), k ? M0().then((A) => {
      n(12, y = A);
    }) : O0().then((A) => {
      n(11, v = A);
    }));
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
    k,
    P,
    v,
    y,
    d,
    m,
    b,
    r,
    S,
    i
  ];
}
class R0 extends d0 {
  constructor(t) {
    super(), k0(this, t, D0, L0, T0, {
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
  SvelteComponent: U0,
  append: Ae,
  attr: D,
  component_subscribe: Qi,
  detach: F0,
  element: G0,
  init: q0,
  insert: j0,
  noop: Yi,
  safe_not_equal: z0,
  set_style: an,
  svg_element: Be,
  toggle_class: Ki
} = window.__gradio__svelte__internal, { onMount: V0 } = window.__gradio__svelte__internal;
function X0(e) {
  let t, n, r, i, o, l, a, s, u, f, c, _;
  return {
    c() {
      t = G0("div"), n = Be("svg"), r = Be("g"), i = Be("path"), o = Be("path"), l = Be("path"), a = Be("path"), s = Be("g"), u = Be("path"), f = Be("path"), c = Be("path"), _ = Be("path"), D(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), D(i, "fill", "#FF7C00"), D(i, "fill-opacity", "0.4"), D(i, "class", "svelte-43sxxs"), D(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), D(o, "fill", "#FF7C00"), D(o, "class", "svelte-43sxxs"), D(l, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), D(l, "fill", "#FF7C00"), D(l, "fill-opacity", "0.4"), D(l, "class", "svelte-43sxxs"), D(a, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), D(a, "fill", "#FF7C00"), D(a, "class", "svelte-43sxxs"), an(r, "transform", "translate(" + /*$top*/
      e[1][0] + "px, " + /*$top*/
      e[1][1] + "px)"), D(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), D(u, "fill", "#FF7C00"), D(u, "fill-opacity", "0.4"), D(u, "class", "svelte-43sxxs"), D(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), D(f, "fill", "#FF7C00"), D(f, "class", "svelte-43sxxs"), D(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), D(c, "fill", "#FF7C00"), D(c, "fill-opacity", "0.4"), D(c, "class", "svelte-43sxxs"), D(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), D(_, "fill", "#FF7C00"), D(_, "class", "svelte-43sxxs"), an(s, "transform", "translate(" + /*$bottom*/
      e[2][0] + "px, " + /*$bottom*/
      e[2][1] + "px)"), D(n, "viewBox", "-1200 -1200 3000 3000"), D(n, "fill", "none"), D(n, "xmlns", "http://www.w3.org/2000/svg"), D(n, "class", "svelte-43sxxs"), D(t, "class", "svelte-43sxxs"), Ki(
        t,
        "margin",
        /*margin*/
        e[0]
      );
    },
    m(h, d) {
      j0(h, t, d), Ae(t, n), Ae(n, r), Ae(r, i), Ae(r, o), Ae(r, l), Ae(r, a), Ae(n, s), Ae(s, u), Ae(s, f), Ae(s, c), Ae(s, _);
    },
    p(h, [d]) {
      d & /*$top*/
      2 && an(r, "transform", "translate(" + /*$top*/
      h[1][0] + "px, " + /*$top*/
      h[1][1] + "px)"), d & /*$bottom*/
      4 && an(s, "transform", "translate(" + /*$bottom*/
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
      h && F0(t);
    }
  };
}
function x0(e, t, n) {
  let r, i, { margin: o = !0 } = t;
  const l = Ei([0, 0]);
  Qi(e, l, (_) => n(1, r = _));
  const a = Ei([0, 0]);
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
  return V0(() => (c(), () => s = !0)), e.$$set = (_) => {
    "margin" in _ && n(0, o = _.margin);
  }, [o, r, i, l, a];
}
class W0 extends U0 {
  constructor(t) {
    super(), q0(this, t, x0, X0, z0, { margin: 0 });
  }
}
const {
  SvelteComponent: Z0,
  append: it,
  attr: Ie,
  binding_callbacks: $i,
  check_outros: Sl,
  create_component: J0,
  create_slot: Q0,
  destroy_component: Y0,
  destroy_each: kl,
  detach: C,
  element: Fe,
  empty: Ot,
  ensure_array_like: Tn,
  get_all_dirty_from_scope: K0,
  get_slot_changes: $0,
  group_outros: Tl,
  init: e_,
  insert: H,
  mount_component: t_,
  noop: Ur,
  safe_not_equal: n_,
  set_data: we,
  set_style: Xe,
  space: Le,
  text: X,
  toggle_class: pe,
  transition_in: Nt,
  transition_out: Pt,
  update_slot_base: r_
} = window.__gradio__svelte__internal, { tick: i_ } = window.__gradio__svelte__internal, { onDestroy: o_ } = window.__gradio__svelte__internal, l_ = (e) => ({}), eo = (e) => ({});
function to(e, t, n) {
  const r = e.slice();
  return r[38] = t[n], r[40] = n, r;
}
function no(e, t, n) {
  const r = e.slice();
  return r[38] = t[n], r;
}
function s_(e) {
  let t, n = (
    /*i18n*/
    e[1]("common.error") + ""
  ), r, i, o;
  const l = (
    /*#slots*/
    e[29].error
  ), a = Q0(
    l,
    e,
    /*$$scope*/
    e[28],
    eo
  );
  return {
    c() {
      t = Fe("span"), r = X(n), i = Le(), a && a.c(), Ie(t, "class", "error svelte-1txqlrd");
    },
    m(s, u) {
      H(s, t, u), it(t, r), H(s, i, u), a && a.m(s, u), o = !0;
    },
    p(s, u) {
      (!o || u[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      s[1]("common.error") + "") && we(r, n), a && a.p && (!o || u[0] & /*$$scope*/
      268435456) && r_(
        a,
        l,
        s,
        /*$$scope*/
        s[28],
        o ? $0(
          l,
          /*$$scope*/
          s[28],
          u,
          l_
        ) : K0(
          /*$$scope*/
          s[28]
        ),
        eo
      );
    },
    i(s) {
      o || (Nt(a, s), o = !0);
    },
    o(s) {
      Pt(a, s), o = !1;
    },
    d(s) {
      s && (C(t), C(i)), a && a.d(s);
    }
  };
}
function a_(e) {
  let t, n, r, i, o, l, a, s, u, f = (
    /*variant*/
    e[8] === "default" && /*show_eta_bar*/
    e[18] && /*show_progress*/
    e[6] === "full" && ro(e)
  );
  function c(b, p) {
    if (
      /*progress*/
      b[7]
    )
      return c_;
    if (
      /*queue_position*/
      b[2] !== null && /*queue_size*/
      b[3] !== void 0 && /*queue_position*/
      b[2] >= 0
    )
      return f_;
    if (
      /*queue_position*/
      b[2] === 0
    )
      return u_;
  }
  let _ = c(e), h = _ && _(e), d = (
    /*timer*/
    e[5] && lo(e)
  );
  const m = [m_, d_], v = [];
  function y(b, p) {
    return (
      /*last_progress_level*/
      b[15] != null ? 0 : (
        /*show_progress*/
        b[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = y(e)) && (l = v[o] = m[o](e));
  let k = !/*timer*/
  e[5] && ho(e);
  return {
    c() {
      f && f.c(), t = Le(), n = Fe("div"), h && h.c(), r = Le(), d && d.c(), i = Le(), l && l.c(), a = Le(), k && k.c(), s = Ot(), Ie(n, "class", "progress-text svelte-1txqlrd"), pe(
        n,
        "meta-text-center",
        /*variant*/
        e[8] === "center"
      ), pe(
        n,
        "meta-text",
        /*variant*/
        e[8] === "default"
      );
    },
    m(b, p) {
      f && f.m(b, p), H(b, t, p), H(b, n, p), h && h.m(n, null), it(n, r), d && d.m(n, null), H(b, i, p), ~o && v[o].m(b, p), H(b, a, p), k && k.m(b, p), H(b, s, p), u = !0;
    },
    p(b, p) {
      /*variant*/
      b[8] === "default" && /*show_eta_bar*/
      b[18] && /*show_progress*/
      b[6] === "full" ? f ? f.p(b, p) : (f = ro(b), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), _ === (_ = c(b)) && h ? h.p(b, p) : (h && h.d(1), h = _ && _(b), h && (h.c(), h.m(n, r))), /*timer*/
      b[5] ? d ? d.p(b, p) : (d = lo(b), d.c(), d.m(n, null)) : d && (d.d(1), d = null), (!u || p[0] & /*variant*/
      256) && pe(
        n,
        "meta-text-center",
        /*variant*/
        b[8] === "center"
      ), (!u || p[0] & /*variant*/
      256) && pe(
        n,
        "meta-text",
        /*variant*/
        b[8] === "default"
      );
      let P = o;
      o = y(b), o === P ? ~o && v[o].p(b, p) : (l && (Tl(), Pt(v[P], 1, 1, () => {
        v[P] = null;
      }), Sl()), ~o ? (l = v[o], l ? l.p(b, p) : (l = v[o] = m[o](b), l.c()), Nt(l, 1), l.m(a.parentNode, a)) : l = null), /*timer*/
      b[5] ? k && (k.d(1), k = null) : k ? k.p(b, p) : (k = ho(b), k.c(), k.m(s.parentNode, s));
    },
    i(b) {
      u || (Nt(l), u = !0);
    },
    o(b) {
      Pt(l), u = !1;
    },
    d(b) {
      b && (C(t), C(n), C(i), C(a), C(s)), f && f.d(b), h && h.d(), d && d.d(), ~o && v[o].d(b), k && k.d(b);
    }
  };
}
function ro(e) {
  let t, n = `translateX(${/*eta_level*/
  (e[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = Fe("div"), Ie(t, "class", "eta-bar svelte-1txqlrd"), Xe(t, "transform", n);
    },
    m(r, i) {
      H(r, t, i);
    },
    p(r, i) {
      i[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (r[17] || 0) * 100 - 100}%)`) && Xe(t, "transform", n);
    },
    d(r) {
      r && C(t);
    }
  };
}
function u_(e) {
  let t;
  return {
    c() {
      t = X("processing |");
    },
    m(n, r) {
      H(n, t, r);
    },
    p: Ur,
    d(n) {
      n && C(t);
    }
  };
}
function f_(e) {
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
      H(a, t, s), H(a, r, s), H(a, i, s), H(a, o, s), H(a, l, s);
    },
    p(a, s) {
      s[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      a[2] + 1 + "") && we(r, n), s[0] & /*queue_size*/
      8 && we(
        o,
        /*queue_size*/
        a[3]
      );
    },
    d(a) {
      a && (C(t), C(r), C(i), C(o), C(l));
    }
  };
}
function c_(e) {
  let t, n = Tn(
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
      H(i, t, o);
    },
    p(i, o) {
      if (o[0] & /*progress*/
      128) {
        n = Tn(
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
      i && C(t), kl(r, i);
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
      f[38].length != null ? h_ : __
    );
  }
  let s = a(e), u = s(e);
  return {
    c() {
      u.c(), t = Le(), r = X(n), i = X(" | "), l = X(o);
    },
    m(f, c) {
      u.m(f, c), H(f, t, c), H(f, r, c), H(f, i, c), H(f, l, c);
    },
    p(f, c) {
      s === (s = a(f)) && u ? u.p(f, c) : (u.d(1), u = s(f), u && (u.c(), u.m(t.parentNode, t))), c[0] & /*progress*/
      128 && n !== (n = /*p*/
      f[38].unit + "") && we(r, n);
    },
    d(f) {
      f && (C(t), C(r), C(i), C(l)), u.d(f);
    }
  };
}
function __(e) {
  let t = St(
    /*p*/
    e[38].index || 0
  ) + "", n;
  return {
    c() {
      n = X(t);
    },
    m(r, i) {
      H(r, n, i);
    },
    p(r, i) {
      i[0] & /*progress*/
      128 && t !== (t = St(
        /*p*/
        r[38].index || 0
      ) + "") && we(n, t);
    },
    d(r) {
      r && C(n);
    }
  };
}
function h_(e) {
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
      H(l, n, a), H(l, r, a), H(l, o, a);
    },
    p(l, a) {
      a[0] & /*progress*/
      128 && t !== (t = St(
        /*p*/
        l[38].index || 0
      ) + "") && we(n, t), a[0] & /*progress*/
      128 && i !== (i = St(
        /*p*/
        l[38].length
      ) + "") && we(o, i);
    },
    d(l) {
      l && (C(n), C(r), C(o));
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
      n && n.m(r, i), H(r, t, i);
    },
    p(r, i) {
      /*p*/
      r[38].index != null ? n ? n.p(r, i) : (n = io(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(r) {
      r && C(t), n && n.d(r);
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
      H(o, t, l), H(o, r, l), H(o, i, l);
    },
    p(o, l) {
      l[0] & /*formatted_timer*/
      1048576 && we(
        t,
        /*formatted_timer*/
        o[20]
      ), l[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && we(r, n);
    },
    d(o) {
      o && (C(t), C(r), C(i));
    }
  };
}
function d_(e) {
  let t, n;
  return t = new W0({
    props: { margin: (
      /*variant*/
      e[8] === "default"
    ) }
  }), {
    c() {
      J0(t.$$.fragment);
    },
    m(r, i) {
      t_(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & /*variant*/
      256 && (o.margin = /*variant*/
      r[8] === "default"), t.$set(o);
    },
    i(r) {
      n || (Nt(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Pt(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Y0(t, r);
    }
  };
}
function m_(e) {
  let t, n, r, i, o, l = `${/*last_progress_level*/
  e[15] * 100}%`, a = (
    /*progress*/
    e[7] != null && so(e)
  );
  return {
    c() {
      t = Fe("div"), n = Fe("div"), a && a.c(), r = Le(), i = Fe("div"), o = Fe("div"), Ie(n, "class", "progress-level-inner svelte-1txqlrd"), Ie(o, "class", "progress-bar svelte-1txqlrd"), Xe(o, "width", l), Ie(i, "class", "progress-bar-wrap svelte-1txqlrd"), Ie(t, "class", "progress-level svelte-1txqlrd");
    },
    m(s, u) {
      H(s, t, u), it(t, n), a && a.m(n, null), it(t, r), it(t, i), it(i, o), e[30](o);
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
      s && C(t), a && a.d(), e[30](null);
    }
  };
}
function so(e) {
  let t, n = Tn(
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
      H(i, t, o);
    },
    p(i, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        n = Tn(
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
      i && C(t), kl(r, i);
    }
  };
}
function ao(e) {
  let t, n, r, i, o = (
    /*i*/
    e[40] !== 0 && p_()
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
      o && o.m(u, f), H(u, t, f), l && l.m(u, f), H(u, n, f), a && a.m(u, f), H(u, r, f), s && s.m(u, f), H(u, i, f);
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
      u && (C(t), C(n), C(r), C(i)), o && o.d(u), l && l.d(u), a && a.d(u), s && s.d(u);
    }
  };
}
function p_(e) {
  let t;
  return {
    c() {
      t = X(" /");
    },
    m(n, r) {
      H(n, t, r);
    },
    d(n) {
      n && C(t);
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
      H(r, n, i);
    },
    p(r, i) {
      i[0] & /*progress*/
      128 && t !== (t = /*p*/
      r[38].desc + "") && we(n, t);
    },
    d(r) {
      r && C(n);
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
      H(n, t, r);
    },
    d(n) {
      n && C(t);
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
      H(i, n, o), H(i, r, o);
    },
    p(i, o) {
      o[0] & /*progress_level*/
      16384 && t !== (t = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[40]
      ] || 0)).toFixed(1) + "") && we(n, t);
    },
    d(i) {
      i && (C(n), C(r));
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
      n && n.m(r, i), H(r, t, i);
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
      r && C(t), n && n.d(r);
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
      ), Ie(t, "class", "loading svelte-1txqlrd");
    },
    m(r, i) {
      H(r, t, i), it(t, n);
    },
    p(r, i) {
      i[0] & /*loading_text*/
      512 && we(
        n,
        /*loading_text*/
        r[9]
      );
    },
    d(r) {
      r && C(t);
    }
  };
}
function g_(e) {
  let t, n, r, i, o;
  const l = [a_, s_], a = [];
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
      e[6] + " svelte-1txqlrd"), pe(t, "hide", !/*status*/
      e[4] || /*status*/
      e[4] === "complete" || /*show_progress*/
      e[6] === "hidden"), pe(
        t,
        "translucent",
        /*variant*/
        e[8] === "center" && /*status*/
        (e[4] === "pending" || /*status*/
        e[4] === "error") || /*translucent*/
        e[11] || /*show_progress*/
        e[6] === "minimal"
      ), pe(
        t,
        "generating",
        /*status*/
        e[4] === "generating"
      ), pe(
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
      H(u, t, f), ~n && a[n].m(t, null), e[31](t), o = !0;
    },
    p(u, f) {
      let c = n;
      n = s(u), n === c ? ~n && a[n].p(u, f) : (r && (Tl(), Pt(a[c], 1, 1, () => {
        a[c] = null;
      }), Sl()), ~n ? (r = a[n], r ? r.p(u, f) : (r = a[n] = l[n](u), r.c()), Nt(r, 1), r.m(t, null)) : r = null), (!o || f[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-1txqlrd")) && Ie(t, "class", i), (!o || f[0] & /*variant, show_progress, status, show_progress*/
      336) && pe(t, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden"), (!o || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && pe(
        t,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!o || f[0] & /*variant, show_progress, status*/
      336) && pe(
        t,
        "generating",
        /*status*/
        u[4] === "generating"
      ), (!o || f[0] & /*variant, show_progress, border*/
      4416) && pe(
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
      o || (Nt(r), o = !0);
    },
    o(u) {
      Pt(r), o = !1;
    },
    d(u) {
      u && C(t), ~n && a[n].d(), e[31](null);
    }
  };
}
let un = [], pr = !1;
async function b_(e, t = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
    if (un.push(e), !pr)
      pr = !0;
    else
      return;
    await i_(), requestAnimationFrame(() => {
      let n = [0, 0];
      for (let r = 0; r < un.length; r++) {
        const o = un[r].getBoundingClientRect();
        (r === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = r);
      }
      window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), pr = !1, un = [];
    });
  }
}
function v_(e, t, n) {
  let r, { $$slots: i = {}, $$scope: o } = t, { i18n: l } = t, { eta: a = null } = t, { queue_position: s } = t, { queue_size: u } = t, { status: f } = t, { scroll_to_output: c = !1 } = t, { timer: _ = !0 } = t, { show_progress: h = "full" } = t, { message: d = null } = t, { progress: m = null } = t, { variant: v = "default" } = t, { loading_text: y = "Loading..." } = t, { absolute: k = !0 } = t, { translucent: b = !1 } = t, { border: p = !1 } = t, { autoscroll: P } = t, S, A = !1, I = 0, Q = 0, T = null, ye = null, Ne = 0, Ee = null, Re, se = null, pt = !0;
  const We = () => {
    n(0, a = n(26, T = n(19, B = null))), n(24, I = performance.now()), n(25, Q = 0), A = !0, gt();
  };
  function gt() {
    requestAnimationFrame(() => {
      n(25, Q = (performance.now() - I) / 1e3), A && gt();
    });
  }
  function Ze() {
    n(25, Q = 0), n(0, a = n(26, T = n(19, B = null))), A && (A = !1);
  }
  o_(() => {
    A && Ze();
  });
  let B = null;
  function w(g) {
    $i[g ? "unshift" : "push"](() => {
      se = g, n(16, se), n(7, m), n(14, Ee), n(15, Re);
    });
  }
  function M(g) {
    $i[g ? "unshift" : "push"](() => {
      S = g, n(13, S);
    });
  }
  return e.$$set = (g) => {
    "i18n" in g && n(1, l = g.i18n), "eta" in g && n(0, a = g.eta), "queue_position" in g && n(2, s = g.queue_position), "queue_size" in g && n(3, u = g.queue_size), "status" in g && n(4, f = g.status), "scroll_to_output" in g && n(21, c = g.scroll_to_output), "timer" in g && n(5, _ = g.timer), "show_progress" in g && n(6, h = g.show_progress), "message" in g && n(22, d = g.message), "progress" in g && n(7, m = g.progress), "variant" in g && n(8, v = g.variant), "loading_text" in g && n(9, y = g.loading_text), "absolute" in g && n(10, k = g.absolute), "translucent" in g && n(11, b = g.translucent), "border" in g && n(12, p = g.border), "autoscroll" in g && n(23, P = g.autoscroll), "$$scope" in g && n(28, o = g.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    218103809 && (a === null && n(0, a = T), a != null && T !== a && (n(27, ye = (performance.now() - I) / 1e3 + a), n(19, B = ye.toFixed(1)), n(26, T = a))), e.$$.dirty[0] & /*eta_from_start, timer_diff*/
    167772160 && n(17, Ne = ye === null || ye <= 0 || !Q ? null : Math.min(Q / ye, 1)), e.$$.dirty[0] & /*progress*/
    128 && m != null && n(18, pt = !1), e.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (m != null ? n(14, Ee = m.map((g) => {
      if (g.index != null && g.length != null)
        return g.index / g.length;
      if (g.progress != null)
        return g.progress;
    })) : n(14, Ee = null), Ee ? (n(15, Re = Ee[Ee.length - 1]), se && (Re === 0 ? n(16, se.style.transition = "0", se) : n(16, se.style.transition = "150ms", se))) : n(15, Re = void 0)), e.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? We() : Ze()), e.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    10493968 && S && c && (f === "pending" || f === "complete") && b_(S, P), e.$$.dirty[0] & /*status, message*/
    4194320, e.$$.dirty[0] & /*timer_diff*/
    33554432 && n(20, r = Q.toFixed(1));
  }, [
    a,
    l,
    s,
    u,
    f,
    _,
    h,
    m,
    v,
    y,
    k,
    b,
    p,
    S,
    Ee,
    Re,
    se,
    Ne,
    pt,
    B,
    r,
    c,
    d,
    P,
    I,
    Q,
    T,
    ye,
    o,
    i,
    w,
    M
  ];
}
class Al extends Z0 {
  constructor(t) {
    super(), e_(
      this,
      t,
      v_,
      g_,
      n_,
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
  SvelteComponent: w_,
  append: y_,
  attr: E_,
  detach: S_,
  element: k_,
  init: T_,
  insert: A_,
  noop: mo,
  safe_not_equal: B_,
  set_data: C_,
  text: H_,
  toggle_class: yt
} = window.__gradio__svelte__internal;
function N_(e) {
  let t, n = (
    /*value*/
    (e[0] ? (
      /*value*/
      e[0]
    ) : "") + ""
  ), r;
  return {
    c() {
      t = k_("div"), r = H_(n), E_(t, "class", "svelte-1gecy8w"), yt(
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
      A_(i, t, o), y_(t, r);
    },
    p(i, [o]) {
      o & /*value*/
      1 && n !== (n = /*value*/
      (i[0] ? (
        /*value*/
        i[0]
      ) : "") + "") && C_(r, n), o & /*type*/
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
      i && S_(t);
    }
  };
}
function P_(e, t, n) {
  let { value: r } = t, { type: i } = t, { selected: o = !1 } = t;
  return e.$$set = (l) => {
    "value" in l && n(0, r = l.value), "type" in l && n(1, i = l.type), "selected" in l && n(2, o = l.selected);
  }, [r, i, o];
}
class $_ extends w_ {
  constructor(t) {
    super(), T_(this, t, P_, N_, B_, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: I_,
  assign: Bl,
  check_outros: Cl,
  create_component: Oe,
  destroy_component: Me,
  detach: xt,
  empty: Hl,
  get_spread_object: Nl,
  get_spread_update: Pl,
  group_outros: Il,
  init: L_,
  insert: Wt,
  mount_component: De,
  safe_not_equal: O_,
  space: Yr,
  transition_in: oe,
  transition_out: le
} = window.__gradio__svelte__internal;
function M_(e) {
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
      $$slots: { default: [U_] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Oe(t.$$.fragment);
    },
    m(r, i) {
      De(t, r, i), n = !0;
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
      n || (oe(t.$$.fragment, r), n = !0);
    },
    o(r) {
      le(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Me(t, r);
    }
  };
}
function D_(e) {
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
      $$slots: { default: [j_] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Oe(t.$$.fragment);
    },
    m(r, i) {
      De(t, r, i), n = !0;
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
      n || (oe(t.$$.fragment, r), n = !0);
    },
    o(r) {
      le(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Me(t, r);
    }
  };
}
function R_(e) {
  let t, n;
  return t = new Za({
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
      De(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*gradio*/
      4096 && (o.i18n = /*gradio*/
      r[12].i18n), t.$set(o);
    },
    i(r) {
      n || (oe(t.$$.fragment, r), n = !0);
    },
    o(r) {
      le(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Me(t, r);
    }
  };
}
function U_(e) {
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
    l = Bl(l, o[a]);
  return t = new Al({ props: l }), r = new R0({
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
      $$slots: { default: [R_] },
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
      De(t, a, s), Wt(a, n, s), De(r, a, s), i = !0;
    },
    p(a, s) {
      const u = s & /*gradio, loading_status*/
      4160 ? Pl(o, [
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
        64 && Nl(
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
      i || (oe(t.$$.fragment, a), oe(r.$$.fragment, a), i = !0);
    },
    o(a) {
      le(t.$$.fragment, a), le(r.$$.fragment, a), i = !1;
    },
    d(a) {
      a && xt(n), Me(t, a), Me(r, a);
    }
  };
}
function F_(e) {
  let t, n, r, i;
  return t = new Fr({
    props: {
      show_label: (
        /*show_label*/
        e[8]
      ),
      Icon: An,
      label: (
        /*label*/
        e[7] || "3D Model"
      )
    }
  }), r = new js({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [q_] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Oe(t.$$.fragment), n = Yr(), Oe(r.$$.fragment);
    },
    m(o, l) {
      De(t, o, l), Wt(o, n, l), De(r, o, l), i = !0;
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
      i || (oe(t.$$.fragment, o), oe(r.$$.fragment, o), i = !0);
    },
    o(o) {
      le(t.$$.fragment, o), le(r.$$.fragment, o), i = !1;
    },
    d(o) {
      o && xt(n), Me(t, o), Me(r, o);
    }
  };
}
function G_(e) {
  let t, n;
  return t = new iu({
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
      De(t, r, i), n = !0;
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
      n || (oe(t.$$.fragment, r), n = !0);
    },
    o(r) {
      le(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Me(t, r);
    }
  };
}
function q_(e) {
  let t, n;
  return t = new An({}), {
    c() {
      Oe(t.$$.fragment);
    },
    m(r, i) {
      De(t, r, i), n = !0;
    },
    i(r) {
      n || (oe(t.$$.fragment, r), n = !0);
    },
    o(r) {
      le(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Me(t, r);
    }
  };
}
function j_(e) {
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
    s = Bl(s, a[_]);
  t = new Al({ props: s });
  const u = [G_, F_], f = [];
  function c(_, h) {
    return (
      /*value*/
      _[0] ? 0 : 1
    );
  }
  return r = c(e), i = f[r] = u[r](e), {
    c() {
      Oe(t.$$.fragment), n = Yr(), i.c(), o = Hl();
    },
    m(_, h) {
      De(t, _, h), Wt(_, n, h), f[r].m(_, h), Wt(_, o, h), l = !0;
    },
    p(_, h) {
      const d = h & /*gradio, loading_status*/
      4160 ? Pl(a, [
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
        64 && Nl(
          /*loading_status*/
          _[6]
        )
      ]) : {};
      t.$set(d);
      let m = r;
      r = c(_), r === m ? f[r].p(_, h) : (Il(), le(f[m], 1, 1, () => {
        f[m] = null;
      }), Cl(), i = f[r], i ? i.p(_, h) : (i = f[r] = u[r](_), i.c()), oe(i, 1), i.m(o.parentNode, o));
    },
    i(_) {
      l || (oe(t.$$.fragment, _), oe(i), l = !0);
    },
    o(_) {
      le(t.$$.fragment, _), le(i), l = !1;
    },
    d(_) {
      _ && (xt(n), xt(o)), Me(t, _), f[r].d(_);
    }
  };
}
function z_(e) {
  let t, n, r, i;
  const o = [D_, M_], l = [];
  function a(s, u) {
    return (
      /*interactive*/
      s[16] ? 1 : 0
    );
  }
  return t = a(e), n = l[t] = o[t](e), {
    c() {
      n.c(), r = Hl();
    },
    m(s, u) {
      l[t].m(s, u), Wt(s, r, u), i = !0;
    },
    p(s, [u]) {
      let f = t;
      t = a(s), t === f ? l[t].p(s, u) : (Il(), le(l[f], 1, 1, () => {
        l[f] = null;
      }), Cl(), n = l[t], n ? n.p(s, u) : (n = l[t] = o[t](s), n.c()), oe(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      i || (oe(n), i = !0);
    },
    o(s) {
      le(n), i = !1;
    },
    d(s) {
      s && xt(r), l[t].d(s);
    }
  };
}
function V_(e, t, n) {
  let { elem_id: r = "" } = t, { elem_classes: i = [] } = t, { visible: o = !0 } = t, { value: l = null } = t, { root: a } = t, { clear_color: s } = t, { loading_status: u } = t, { label: f } = t, { show_label: c } = t, { container: _ = !0 } = t, { scale: h = null } = t, { min_width: d = void 0 } = t, { gradio: m } = t, { height: v = void 0 } = t, { zoom_speed: y = 1 } = t, { camera_position: k = [null, null, null] } = t, { interactive: b } = t, p = !1;
  const P = ({ detail: T }) => n(0, l = T), S = ({ detail: T }) => n(17, p = T), A = ({ detail: T }) => m.dispatch("change", T), I = () => {
    n(0, l = null), m.dispatch("clear");
  }, Q = ({ detail: T }) => {
    n(0, l = T), m.dispatch("upload");
  };
  return e.$$set = (T) => {
    "elem_id" in T && n(1, r = T.elem_id), "elem_classes" in T && n(2, i = T.elem_classes), "visible" in T && n(3, o = T.visible), "value" in T && n(0, l = T.value), "root" in T && n(4, a = T.root), "clear_color" in T && n(5, s = T.clear_color), "loading_status" in T && n(6, u = T.loading_status), "label" in T && n(7, f = T.label), "show_label" in T && n(8, c = T.show_label), "container" in T && n(9, _ = T.container), "scale" in T && n(10, h = T.scale), "min_width" in T && n(11, d = T.min_width), "gradio" in T && n(12, m = T.gradio), "height" in T && n(13, v = T.height), "zoom_speed" in T && n(14, y = T.zoom_speed), "camera_position" in T && n(15, k = T.camera_position), "interactive" in T && n(16, b = T.interactive);
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
    m,
    v,
    y,
    k,
    b,
    p,
    P,
    S,
    A,
    I,
    Q
  ];
}
class eh extends I_ {
  constructor(t) {
    super(), L_(this, t, V_, z_, O_, {
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
  $_ as E,
  eh as I,
  R0 as M,
  iu as a,
  Q_ as c,
  Tu as g,
  K_ as r
};

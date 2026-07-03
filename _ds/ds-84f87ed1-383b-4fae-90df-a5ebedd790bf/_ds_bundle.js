/* @ds-bundle: {"format":3,"namespace":"Ds_84f87e","components":[{"name":"BinPin","sourcePath":"components/app/BinPin.jsx"},{"name":"BottomSheet","sourcePath":"components/app/BottomSheet.jsx"},{"name":"FilterBar","sourcePath":"components/app/FilterBar.jsx"},{"name":"BIN_TYPES","sourcePath":"components/app/FilterChip.jsx"},{"name":"FilterChip","sourcePath":"components/app/FilterChip.jsx"},{"name":"PaginationDots","sourcePath":"components/app/PaginationDots.jsx"},{"name":"PlaceRow","sourcePath":"components/app/PlaceRow.jsx"},{"name":"SearchField","sourcePath":"components/app/SearchField.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioButton","sourcePath":"components/forms/RadioButton.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Avatar","sourcePath":"components/foundations/Avatar.jsx"},{"name":"FeaturedIcon","sourcePath":"components/foundations/FeaturedIcon.jsx"},{"name":"Icon","sourcePath":"components/foundations/Icon.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Divider","sourcePath":"components/surfaces/Divider.jsx"}],"sourceHashes":{"components/app/BinPin.jsx":"967318578763","components/app/BottomSheet.jsx":"053376ae9d5e","components/app/FilterBar.jsx":"6010ac72cb1f","components/app/FilterChip.jsx":"2a174349004f","components/app/PaginationDots.jsx":"8dc5da33c501","components/app/PlaceRow.jsx":"df5a974f5d4f","components/app/SearchField.jsx":"d362f2941112","components/buttons/Button.jsx":"6f5654bedb6c","components/buttons/IconButton.jsx":"401fcc44f48e","components/feedback/Badge.jsx":"76f649d07f85","components/feedback/Banner.jsx":"e9393fe5e24e","components/feedback/EmptyState.jsx":"25e9bc581411","components/feedback/Tag.jsx":"8bbf14f11a7d","components/feedback/Toast.jsx":"d329f9cb6d58","components/feedback/Tooltip.jsx":"8a845fcebe2f","components/forms/Checkbox.jsx":"311823b5d394","components/forms/Input.jsx":"9bf9d6790817","components/forms/RadioButton.jsx":"cb46cf263db9","components/forms/Select.jsx":"9532a6d3e4c9","components/forms/Toggle.jsx":"ad30d96d7bff","components/foundations/Avatar.jsx":"0a574d8abbc6","components/foundations/FeaturedIcon.jsx":"a5b5da20cbfd","components/foundations/Icon.jsx":"e20368f2d82a","components/navigation/Tabs.jsx":"5267cf9d81cd","components/surfaces/Card.jsx":"d6431d124fd5","components/surfaces/Divider.jsx":"d711872b846a","ui_kits/trash-finder/parts.jsx":"dd8c59c1e7e4","ui_kits/trash-finder/screens.jsx":"ae3f9badd042"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds_84f87e = window.Ds_84f87e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/app/BottomSheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BottomSheet — a sheet that rises from the bottom of the screen with a drag
 * handle and rounded top corners. Tapping a map pin raises it. Presentational:
 * drive `open` from the parent. Parent must be `position: relative`.
 */
function BottomSheet({
  open = true,
  onClose,
  showScrim = false,
  handle = true,
  children,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, showScrim && /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--bg-overlay)",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "opacity 240ms ease",
      zIndex: 20
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    role: "dialog",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 21,
      background: "var(--bg-primary)",
      borderTopLeftRadius: "var(--radius-sheet)",
      borderTopRightRadius: "var(--radius-sheet)",
      boxShadow: "var(--shadow-sheet)",
      transform: open ? "translateY(0)" : "translateY(100%)",
      transition: "transform 320ms cubic-bezier(.2,.85,.25,1)",
      paddingBottom: "max(16px, env(safe-area-inset-bottom))",
      ...style
    }
  }, rest), handle && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "10px 0 4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 5,
      borderRadius: "var(--radius-full)",
      background: "var(--gray-300)"
    }
  })), children));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/app/PaginationDots.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PaginationDots — the progress dots on the onboarding carousel. The active
 * dot stretches into a brand-colored pill.
 */
function PaginationDots({
  count = 3,
  index = 0,
  onDot,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, rest), Array.from({
    length: count
  }).map((_, i) => {
    const active = i === index;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      onClick: () => onDot && onDot(i),
      style: {
        width: active ? 22 : 8,
        height: 8,
        borderRadius: "var(--radius-full)",
        background: active ? "var(--brand-600)" : "var(--gray-300)",
        cursor: onDot ? "pointer" : "default",
        transition: "width 220ms ease, background 220ms ease"
      }
    });
  }));
}
Object.assign(__ds_scope, { PaginationDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/PaginationDots.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tooltip — wraps a child and shows a small dark label on hover/focus.
 * `placement` positions the bubble.
 */
function Tooltip({
  label,
  placement = "top",
  children,
  className,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && label && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 40,
      whiteSpace: "nowrap",
      background: "var(--gray-900)",
      color: "var(--color-white)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-medium)",
      padding: "6px 10px",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      pointerEvents: "none"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 16,
  md: 20
};

/**
 * RadioButton — single-select control with optional label + supporting text.
 */
function RadioButton({
  checked = false,
  onChange,
  size = "md",
  label,
  supportingText,
  name,
  value,
  disabled = false,
  id,
  className,
  style,
  ...rest
}) {
  const box = SIZES[size] || SIZES.md;
  const dot = Math.round(box / 2.5);
  const rb = /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "radio",
    id: id,
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(value ?? true),
    style: {
      width: box,
      height: box,
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-full)",
      border: `1px solid ${checked ? "var(--brand-600)" : "var(--gray-300)"}`,
      background: checked ? "var(--brand-50)" : "var(--bg-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      padding: 0,
      transition: "background 120ms ease, border-color 120ms ease"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: dot,
      height: dot,
      borderRadius: "var(--radius-full)",
      background: "var(--brand-600)"
    }
  }));
  if (!label && !supportingText) {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: style
    }, rest), rb);
  }
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: id,
    className: className,
    style: {
      display: "flex",
      gap: 8,
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 2
    }
  }, rb), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-medium)",
      fontSize: size === "md" ? "var(--text-md)" : "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, label), supportingText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size === "md" ? "var(--text-md)" : "var(--text-sm)",
      color: "var(--text-tertiary)"
    }
  }, supportingText)));
}
Object.assign(__ds_scope, { RadioButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    w: 36,
    h: 20,
    knob: 16
  },
  md: {
    w: 44,
    h: 24,
    knob: 20
  }
};

/**
 * Toggle — Untitled UI switch. Optional label + supporting text.
 */
function Toggle({
  checked = false,
  onChange,
  size = "md",
  label,
  supportingText,
  disabled = false,
  id,
  className,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const pad = (s.h - s.knob) / 2;
  const sw = /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    id: id,
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: "relative",
      width: s.w,
      height: s.h,
      flexShrink: 0,
      border: "none",
      borderRadius: "var(--radius-full)",
      background: checked ? "var(--brand-600)" : "var(--gray-200)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background 160ms ease",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: pad,
      left: checked ? s.w - s.knob - pad : pad,
      width: s.knob,
      height: s.knob,
      borderRadius: "var(--radius-full)",
      background: "var(--color-white)",
      boxShadow: "var(--shadow-sm)",
      transition: "left 160ms cubic-bezier(.2,.8,.2,1)"
    }
  }));
  if (!label && !supportingText) {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: style
    }, rest), sw);
  }
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: id,
    className: className,
    style: {
      display: "flex",
      gap: size === "md" ? 12 : 8,
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), sw, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-medium)",
      fontSize: size === "md" ? "var(--text-md)" : "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, label), supportingText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size === "md" ? "var(--text-md)" : "var(--text-sm)",
      color: "var(--text-tertiary)"
    }
  }, supportingText)));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/foundations/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56
};

/**
 * Avatar — circular user/place image with initials fallback and optional
 * online dot.
 */
function Avatar({
  src,
  initials,
  size = "md",
  online,
  className,
  style,
  ...rest
}) {
  const d = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      position: "relative",
      display: "inline-flex",
      width: d,
      height: d,
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: d,
      height: d,
      borderRadius: "var(--radius-full)",
      overflow: "hidden",
      background: "var(--brand-100)",
      color: "var(--brand-700)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "var(--fw-semibold)",
      fontSize: d * 0.4,
      boxShadow: "inset 0 0 0 1px rgba(16,24,40,0.08)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || ""), online != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: Math.max(8, d * 0.26),
      height: Math.max(8, d * 0.26),
      borderRadius: "var(--radius-full)",
      background: online ? "var(--success-500)" : "var(--gray-300)",
      border: "1.5px solid var(--color-white)"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/foundations/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — thin wrapper over Lucide (CDN). Renders a 2px-stroke line icon
 * matching the Untitled UI icon style. `name` is a Lucide kebab-case id
 * (e.g. "trash-2", "recycle", "navigation").
 *
 * Requires the Lucide UMD script to be loaded on the page:
 *   <script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.js"></script>
 * If Lucide is absent the icon renders as empty space (graceful).
 */
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = `<i data-lucide="${name}"></i>`;
    const L = typeof window !== "undefined" ? window.lucide : null;
    if (L && L.createIcons) {
      try {
        L.createIcons({
          attrs: {
            width: size,
            height: size,
            "stroke-width": strokeWidth
          },
          root: el
        });
      } catch (e) {
        L.createIcons({
          attrs: {
            width: size,
            height: size,
            "stroke-width": strokeWidth
          }
        });
      }
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: className,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flexShrink: 0,
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/Icon.jsx", error: String((e && e.message) || e) }); }

// components/app/FilterChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Shared bin-type definitions (label, colors, icon). */
const BIN_TYPES = {
  general: {
    label: "일반",
    color: "var(--bin-general)",
    soft: "var(--bin-general-soft)",
    text: "var(--bin-general-text)",
    icon: "trash-2"
  },
  recycle: {
    label: "재활용",
    color: "var(--bin-recycle)",
    soft: "var(--bin-recycle-soft)",
    text: "var(--bin-recycle-text)",
    icon: "recycle"
  },
  mixed: {
    label: "혼합",
    color: "var(--bin-mixed)",
    soft: "var(--bin-mixed-soft)",
    text: "var(--bin-mixed-text)",
    icon: "layers"
  },
  cigarette: {
    label: "담배꽁초",
    color: "var(--bin-cigarette)",
    soft: "var(--bin-cigarette-soft)",
    text: "var(--bin-cigarette-text)",
    icon: "cigarette"
  }
};

/**
 * FilterChip — a pill that toggles a bin type on/off. Selected state fills
 * with the type's soft color + colored border so it reads instantly over
 * a busy map; unselected is a plain white pill.
 */
function FilterChip({
  type,
  label,
  selected = false,
  count,
  showIcon = true,
  onClick,
  className,
  style,
  ...rest
}) {
  const t = BIN_TYPES[type] || {
    color: "var(--gray-500)",
    soft: "var(--gray-100)",
    text: "var(--gray-700)",
    icon: "circle",
    label: label
  };
  const text = label ?? t.label;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": selected,
    className: className,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 40,
      padding: "0 14px",
      borderRadius: "var(--radius-chip)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--lh-sm)",
      whiteSpace: "nowrap",
      cursor: "pointer",
      background: selected ? t.soft : "var(--bg-primary)",
      color: selected ? t.text : "var(--gray-700)",
      border: `1.5px solid ${selected ? t.color : "var(--gray-300)"}`,
      boxShadow: selected ? "none" : "var(--shadow-xs)",
      transition: "background 120ms ease, border-color 120ms ease, color 120ms ease",
      ...style
    }
  }, rest), showIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 16,
    color: selected ? t.color : "var(--gray-400)"
  }), text, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--text-xs)",
      color: selected ? t.text : "var(--gray-500)",
      opacity: 0.9
    }
  }, count));
}
Object.assign(__ds_scope, { BIN_TYPES, FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/app/BinPin.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BinPin — the map marker. A rounded 3D teardrop pin filled with the bin
 * type's color, a white inner disc holding the type icon, a drop shadow for
 * lift, and a soft ground shadow. Designed to stay legible over busy map
 * tiles (yellow roads, green parks). Selected pins enlarge and gain a halo.
 */
function BinPin({
  type = "general",
  selected = false,
  onClick,
  className,
  style,
  ...rest
}) {
  const t = __ds_scope.BIN_TYPES[type] || __ds_scope.BIN_TYPES.general;
  const head = selected ? 46 : 38;
  const disc = selected ? 30 : 24;
  const iconSize = selected ? 18 : 15;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    onClick: onClick,
    style: {
      position: "relative",
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: onClick ? "pointer" : "default",
      // leave room for halo + ground shadow
      padding: selected ? 10 : 4,
      transition: "transform 160ms cubic-bezier(.2,.8,.2,1)",
      ...style
    }
  }, rest), selected && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: "50%",
      transform: "translateX(-50%)",
      width: head + 22,
      height: head + 22,
      borderRadius: "var(--radius-full)",
      background: t.color,
      opacity: 0.16
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: head,
      height: head,
      background: t.color,
      borderRadius: "50% 50% 50% 0",
      transform: "rotate(-45deg)",
      border: "2px solid var(--color-white)",
      boxShadow: "var(--shadow-pin)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: disc,
      height: disc,
      borderRadius: "var(--radius-full)",
      background: "var(--color-white)",
      transform: "rotate(45deg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: iconSize,
    color: t.color,
    strokeWidth: 2.25
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 1,
      width: selected ? 16 : 12,
      height: selected ? 5 : 4,
      borderRadius: "var(--radius-full)",
      background: "rgba(16,24,40,0.28)",
      filter: "blur(1px)"
    }
  }));
}
Object.assign(__ds_scope, { BinPin });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/BinPin.jsx", error: String((e && e.message) || e) }); }

// components/app/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchField — the rounded search input that floats at the top of the map.
 * Elevated white pill with a leading search glyph and optional trailing slot.
 */
function SearchField({
  value,
  placeholder = "주소 · 장소 검색",
  onChange,
  onFocus,
  leadingIcon = "search",
  trailing,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 48,
      padding: "0 14px",
      background: "var(--bg-primary)",
      border: "1px solid var(--border-secondary)",
      borderRadius: "var(--radius-full)",
      boxShadow: "var(--shadow-md)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: 20,
    color: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: onFocus,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      color: "var(--text-primary)",
      minWidth: 0
    }
  }), trailing);
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padY: 8,
    padX: 14,
    font: "var(--text-sm)",
    lh: "var(--lh-sm)",
    icon: 20,
    gap: 6,
    onlyPad: 8
  },
  md: {
    padY: 10,
    padX: 16,
    font: "var(--text-sm)",
    lh: "var(--lh-sm)",
    icon: 20,
    gap: 6,
    onlyPad: 10
  },
  lg: {
    padY: 10,
    padX: 18,
    font: "var(--text-md)",
    lh: "var(--lh-md)",
    icon: 20,
    gap: 8,
    onlyPad: 12
  },
  xl: {
    padY: 12,
    padX: 20,
    font: "var(--text-md)",
    lh: "var(--lh-md)",
    icon: 20,
    gap: 8,
    onlyPad: 14
  }
};

/* returns { bg, fg, border, shadow } per state for a hierarchy */
function palette(hierarchy, destructive, state) {
  const D = destructive;
  const map = {
    primary: {
      base: {
        bg: D ? "var(--error-600)" : "var(--brand-600)",
        fg: "#fff",
        border: "transparent",
        shadow: "var(--shadow-xs)"
      },
      hover: {
        bg: D ? "var(--error-700)" : "var(--brand-700)"
      },
      active: {
        bg: D ? "var(--error-800)" : "var(--brand-800)"
      }
    },
    "secondary-gray": {
      base: {
        bg: "var(--bg-primary)",
        fg: D ? "var(--error-700)" : "var(--gray-700)",
        border: D ? "var(--error-300)" : "var(--gray-300)",
        shadow: "var(--shadow-xs)"
      },
      hover: {
        bg: "var(--gray-50)"
      },
      active: {
        bg: "var(--gray-100)"
      }
    },
    "secondary-color": {
      base: {
        bg: "var(--brand-50)",
        fg: "var(--brand-700)",
        border: "var(--brand-300)",
        shadow: "var(--shadow-xs)"
      },
      hover: {
        bg: "var(--brand-100)"
      },
      active: {
        bg: "var(--brand-100)"
      }
    },
    tertiary: {
      base: {
        bg: "transparent",
        fg: D ? "var(--error-700)" : "var(--gray-600)",
        border: "transparent",
        shadow: "none"
      },
      hover: {
        bg: "var(--gray-50)"
      },
      active: {
        bg: "var(--gray-100)"
      }
    },
    link: {
      base: {
        bg: "transparent",
        fg: D ? "var(--error-700)" : "var(--brand-700)",
        border: "transparent",
        shadow: "none",
        noPad: true
      },
      hover: {
        fg: D ? "var(--error-800)" : "var(--brand-800)"
      },
      active: {}
    }
  };
  const h = map[hierarchy] || map.primary;
  return {
    ...h.base,
    ...(state === "hover" ? h.hover : state === "active" ? h.active : {})
  };
}

/**
 * Button — Untitled UI button. Hierarchies, sizes, optional icons, destructive.
 */
function Button({
  children,
  hierarchy = "primary",
  size = "md",
  iconLeading,
  iconTrailing,
  iconOnly,
  destructive = false,
  disabled = false,
  fullWidth = false,
  className,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const state = disabled ? "base" : active ? "active" : hover ? "hover" : "base";
  const p = palette(hierarchy, destructive, state);
  const isLink = hierarchy === "link";
  const onlyIcon = iconOnly != null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: className,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      padding: isLink ? 0 : onlyIcon ? s.onlyPad : `${s.padY}px ${s.padX}px`,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: s.font,
      lineHeight: s.lh,
      color: p.fg,
      background: p.bg,
      border: `1px solid ${p.border}`,
      borderRadius: isLink ? 0 : "var(--radius-md)",
      boxShadow: p.shadow,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background 120ms ease, color 120ms ease, box-shadow 120ms ease",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), onlyIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconOnly,
    size: s.icon
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, iconLeading && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeading,
    size: s.icon
  }), children, iconTrailing && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconTrailing,
    size: s.icon
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    box: 36,
    icon: 18
  },
  md: {
    box: 40,
    icon: 20
  },
  lg: {
    box: 48,
    icon: 24
  }
};
function palette(variant, state) {
  const map = {
    white: {
      base: {
        bg: "var(--bg-primary)",
        fg: "var(--gray-700)",
        border: "var(--border-secondary)",
        shadow: "var(--shadow-md)"
      },
      hover: {
        bg: "var(--gray-50)"
      },
      active: {
        bg: "var(--gray-100)"
      }
    },
    brand: {
      base: {
        bg: "var(--brand-600)",
        fg: "#fff",
        border: "transparent",
        shadow: "var(--shadow-md)"
      },
      hover: {
        bg: "var(--brand-700)"
      },
      active: {
        bg: "var(--brand-800)"
      }
    },
    ghost: {
      base: {
        bg: "transparent",
        fg: "var(--gray-600)",
        border: "transparent",
        shadow: "none"
      },
      hover: {
        bg: "var(--gray-100)"
      },
      active: {
        bg: "var(--gray-200)"
      }
    }
  };
  const v = map[variant] || map.white;
  return {
    ...v.base,
    ...(state === "hover" ? v.hover : state === "active" ? v.active : {})
  };
}

/**
 * IconButton — circular icon control. Used for map FABs (내 위치, +/-),
 * sheet close, and other glyph-only affordances.
 */
function IconButton({
  name,
  variant = "white",
  size = "md",
  shape = "circle",
  disabled = false,
  className,
  style,
  onClick,
  "aria-label": ariaLabel,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const state = disabled ? "base" : active ? "active" : hover ? "hover" : "base";
  const p = palette(variant, state);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    className: className,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.box,
      height: s.box,
      background: p.bg,
      color: p.fg,
      border: `1px solid ${p.border}`,
      borderRadius: shape === "circle" ? "var(--radius-full)" : "var(--radius-lg)",
      boxShadow: p.shadow,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background 120ms ease",
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/app/FilterBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FilterBar — a horizontally-scrolling row of bin-type FilterChips, with an
 * optional leading filter button. Sits directly under the search field.
 */
function FilterBar({
  filters = [{
    type: "general",
    selected: true
  }, {
    type: "recycle",
    selected: true
  }, {
    type: "mixed",
    selected: false
  }, {
    type: "cigarette",
    selected: false
  }],
  onToggle,
  showFilterButton = true,
  onFilterButton,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      overflowX: "auto",
      scrollbarWidth: "none",
      WebkitOverflowScrolling: "touch",
      padding: "2px 2px",
      ...style
    }
  }, rest), showFilterButton && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "sliders-horizontal",
    variant: "white",
    size: "md",
    "aria-label": "\uD544\uD130",
    onClick: onFilterButton,
    style: {
      flexShrink: 0
    }
  }), filters.map(f => /*#__PURE__*/React.createElement(__ds_scope.FilterChip, {
    key: f.type,
    type: f.type,
    selected: f.selected,
    count: f.count,
    onClick: () => onToggle && onToggle(f.type),
    style: {
      flexShrink: 0
    }
  })));
}
Object.assign(__ds_scope, { FilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    font: "var(--text-xs)",
    pad: "2px 8px",
    icon: 12,
    gap: 4
  },
  md: {
    font: "var(--text-sm)",
    pad: "2px 10px",
    icon: 12,
    gap: 5
  },
  lg: {
    font: "var(--text-sm)",
    pad: "4px 12px",
    icon: 14,
    gap: 6
  }
};
const COLORS = {
  gray: {
    bg: "var(--gray-100)",
    fg: "var(--gray-700)",
    dot: "var(--gray-500)"
  },
  brand: {
    bg: "var(--brand-50)",
    fg: "var(--brand-700)",
    dot: "var(--brand-500)"
  },
  success: {
    bg: "var(--success-50)",
    fg: "var(--success-700)",
    dot: "var(--success-500)"
  },
  warning: {
    bg: "var(--warning-50)",
    fg: "var(--warning-700)",
    dot: "var(--warning-600)"
  },
  error: {
    bg: "var(--error-50)",
    fg: "var(--error-700)",
    dot: "var(--error-500)"
  },
  blue: {
    bg: "var(--blue-50)",
    fg: "var(--blue-700)",
    dot: "var(--blue-500)"
  }
};

/**
 * Badge — small pill label with optional leading dot or icon.
 */
function Badge({
  children,
  color = "gray",
  size = "md",
  dot = false,
  icon,
  className,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const c = COLORS[color] || COLORS.gray;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      padding: s.pad,
      borderRadius: "var(--radius-full)",
      background: c.bg,
      color: c.fg,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: s.font,
      lineHeight: 1.5,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--radius-full)",
      background: c.dot
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  info: {
    bg: "var(--blue-50)",
    border: "var(--blue-200)",
    fg: "var(--blue-700)",
    icon: "info",
    iconColor: "var(--blue-600)"
  },
  brand: {
    bg: "var(--brand-50)",
    border: "var(--brand-200)",
    fg: "var(--brand-700)",
    icon: "info",
    iconColor: "var(--brand-600)"
  },
  success: {
    bg: "var(--success-50)",
    border: "var(--success-200)",
    fg: "var(--success-700)",
    icon: "check-circle",
    iconColor: "var(--success-600)"
  },
  warning: {
    bg: "var(--warning-50)",
    border: "var(--warning-200)",
    fg: "var(--warning-700)",
    icon: "alert-triangle",
    iconColor: "var(--warning-600)"
  },
  error: {
    bg: "var(--error-50)",
    border: "var(--error-200)",
    fg: "var(--error-700)",
    icon: "alert-circle",
    iconColor: "var(--error-600)"
  }
};

/**
 * Banner — an inline alert/message. Use for permission prompts, offline
 * notices, empty-filter hints.
 */
function Banner({
  variant = "info",
  title,
  children,
  icon,
  onClose,
  action,
  className,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "flex",
      gap: 12,
      padding: "12px 14px",
      background: v.bg,
      border: `1px solid ${v.border}`,
      borderRadius: "var(--radius-xl)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || v.icon,
    size: 20,
    color: v.iconColor,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-sm)",
      color: v.fg
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: v.fg,
      opacity: 0.9,
      marginTop: title ? 2 : 0,
      lineHeight: 1.5
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uB2EB\uAE30",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      color: v.fg,
      cursor: "pointer",
      padding: 0,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a bordered token, optionally removable. Use for applied filters or
 * selected attributes.
 */
function Tag({
  children,
  icon,
  onRemove,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 8px",
      borderRadius: "var(--radius-sm)",
      background: "var(--bg-primary)",
      border: "1px solid var(--border-primary)",
      color: "var(--text-secondary)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--lh-sm)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    color: "var(--gray-400)"
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uC0AD\uC81C",
    onClick: onRemove,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      border: "none",
      background: "transparent",
      color: "var(--gray-400)",
      cursor: "pointer",
      padding: 0,
      borderRadius: "var(--radius-xs)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12,
    strokeWidth: 2.5
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON = {
  neutral: ["bell", "var(--gray-500)"],
  success: ["check-circle", "var(--success-600)"],
  error: ["alert-circle", "var(--error-600)"],
  info: ["info", "var(--blue-600)"]
};

/**
 * Toast — a floating notification card. Presentational; manage mount/timeout
 * from the parent.
 */
function Toast({
  variant = "neutral",
  title,
  children,
  onClose,
  className,
  style,
  ...rest
}) {
  const [icon, color] = ICON[variant] || ICON.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      width: 360,
      maxWidth: "calc(100vw - 32px)",
      padding: "14px 16px",
      background: "var(--bg-primary)",
      border: "1px solid var(--border-secondary)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-lg)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: color,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-tertiary)",
      marginTop: title ? 2 : 0,
      lineHeight: 1.5
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uB2EB\uAE30",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      color: "var(--gray-400)",
      cursor: "pointer",
      padding: 0,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 16,
  md: 20
};

/**
 * Checkbox — Untitled UI checkbox with optional label + supporting text.
 */
function Checkbox({
  checked = false,
  onChange,
  size = "md",
  label,
  supportingText,
  disabled = false,
  id,
  className,
  style,
  ...rest
}) {
  const box = SIZES[size] || SIZES.md;
  const cb = /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "checkbox",
    id: id,
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: box,
      height: box,
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${checked ? "var(--brand-600)" : "var(--gray-300)"}`,
      background: checked ? "var(--brand-50)" : "var(--bg-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      padding: 0,
      transition: "background 120ms ease, border-color 120ms ease"
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: box - 6,
    color: "var(--brand-600)",
    strokeWidth: 2.5
  }));
  if (!label && !supportingText) {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: style
    }, rest), cb);
  }
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: id,
    className: className,
    style: {
      display: "flex",
      gap: 8,
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 2
    }
  }, cb), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-medium)",
      fontSize: size === "md" ? "var(--text-md)" : "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, label), supportingText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size === "md" ? "var(--text-md)" : "var(--text-sm)",
      color: "var(--text-tertiary)"
    }
  }, supportingText)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — Untitled UI text field with optional label, leading icon, hint,
 * and error state.
 */
function Input({
  label,
  hint,
  placeholder,
  value,
  onChange,
  leadingIcon,
  error = false,
  disabled = false,
  type = "text",
  id,
  className,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--border-error)" : focus ? "var(--brand-300)" : "var(--border-primary)";
  const ring = error ? "var(--ring-error)" : "var(--ring-brand)";
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 14px",
      background: disabled ? "var(--bg-disabled)" : "var(--bg-primary)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? `var(--shadow-xs), ${ring}` : "var(--shadow-xs)",
      transition: "box-shadow 120ms ease, border-color 120ms ease"
    }
  }, leadingIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: 20,
    color: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      color: "var(--text-primary)"
    }
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: error ? "var(--text-error)" : "var(--text-tertiary)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — a dropdown select. Lightweight: a trigger button that toggles a
 * menu of options. `options` is [{ value, label }].
 */
function Select({
  options = [],
  value,
  onChange,
  placeholder = "선택",
  label,
  disabled = false,
  className,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const selected = options.find(o => o.value === value);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    },
    ref: ref
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      padding: "10px 14px",
      background: "var(--bg-primary)",
      border: `1px solid ${open ? "var(--brand-300)" : "var(--border-primary)"}`,
      borderRadius: "var(--radius-md)",
      boxShadow: open ? "var(--shadow-xs), var(--ring-brand)" : "var(--shadow-xs)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      color: selected ? "var(--text-primary)" : "var(--text-quaternary)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, selected ? selected.label : placeholder, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--gray-400)",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform 150ms ease"
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      left: 0,
      right: 0,
      background: "var(--bg-primary)",
      border: "1px solid var(--border-secondary)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      padding: 4,
      zIndex: 30,
      maxHeight: 240,
      overflowY: "auto"
    }
  }, options.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      onClick: () => {
        onChange && onChange(o.value);
        setOpen(false);
      },
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        padding: "9px 10px",
        border: "none",
        background: on ? "var(--bg-secondary)" : "transparent",
        borderRadius: "var(--radius-sm)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-md)",
        color: "var(--text-primary)",
        cursor: "pointer",
        textAlign: "left"
      }
    }, o.label, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 18,
      color: "var(--brand-600)"
    }));
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/foundations/FeaturedIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    box: 32,
    icon: 16,
    radius: 8
  },
  md: {
    box: 40,
    icon: 20,
    radius: 10
  },
  lg: {
    box: 48,
    icon: 24,
    radius: 12
  },
  xl: {
    box: 56,
    icon: 28,
    radius: 12
  }
};

/* color -> { solid bg/fg, light bg/fg } */
const COLORS = {
  brand: {
    lightBg: "var(--brand-100)",
    lightFg: "var(--brand-600)",
    solidBg: "var(--brand-600)"
  },
  gray: {
    lightBg: "var(--gray-100)",
    lightFg: "var(--gray-600)",
    solidBg: "var(--gray-600)"
  },
  success: {
    lightBg: "var(--success-100)",
    lightFg: "var(--success-600)",
    solidBg: "var(--success-600)"
  },
  warning: {
    lightBg: "var(--warning-100)",
    lightFg: "var(--warning-600)",
    solidBg: "var(--warning-600)"
  },
  error: {
    lightBg: "var(--error-100)",
    lightFg: "var(--error-600)",
    solidBg: "var(--error-600)"
  },
  blue: {
    lightBg: "var(--blue-100)",
    lightFg: "var(--blue-600)",
    solidBg: "var(--blue-600)"
  }
};

/**
 * FeaturedIcon — an icon inside a colored container. Untitled UI's
 * "featured icon" used in onboarding, empty states, and sheet headers.
 */
function FeaturedIcon({
  name,
  size = "md",
  color = "brand",
  theme = "light",
  // "light" | "solid" | "outline"
  shape = "rounded",
  // "rounded" | "circle"
  className,
  style,
  children,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const c = COLORS[color] || COLORS.brand;
  let bg, fg, boxShadow, border;
  if (theme === "solid") {
    bg = c.solidBg;
    fg = "var(--color-white)";
  } else if (theme === "outline") {
    bg = "var(--bg-primary)";
    fg = c.lightFg;
    boxShadow = "var(--shadow-xs)";
    border = "1px solid var(--border-secondary)";
  } else {
    bg = c.lightBg;
    fg = c.lightFg;
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.box,
      height: s.box,
      flexShrink: 0,
      borderRadius: shape === "circle" ? "var(--radius-full)" : s.radius,
      background: bg,
      color: fg,
      boxShadow,
      border,
      ...style
    }
  }, rest), children || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { FeaturedIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/FeaturedIcon.jsx", error: String((e && e.message) || e) }); }

// components/app/PlaceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TYPE_COLOR = {
  general: "brand",
  recycle: "success",
  mixed: "blue",
  cigarette: "warning"
};

/**
 * PlaceRow — a single bin in a list: type icon, name, address, and the
 * walking distance + time. Tappable. Used in the nearby-list and search
 * results; the bottom sheet uses the same data, laid out larger.
 */
function PlaceRow({
  type = "general",
  name,
  address,
  distanceM,
  walkMin,
  selected = false,
  onClick,
  className,
  style,
  ...rest
}) {
  const t = __ds_scope.BIN_TYPES[type] || __ds_scope.BIN_TYPES.general;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: className,
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      textAlign: "left",
      padding: "12px 16px",
      background: selected ? "var(--bg-secondary)" : "transparent",
      border: "none",
      cursor: "pointer",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.FeaturedIcon, {
    name: t.icon,
    color: TYPE_COLOR[type],
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-md)",
      color: "var(--text-primary)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-tertiary)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginTop: 2
    }
  }, address)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      flexShrink: 0,
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)"
    }
  }, distanceM != null ? `${distanceM}m` : ""), walkMin != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      fontSize: "var(--text-xs)",
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "footprints",
    size: 13,
    color: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tnum"
  }, "\uB3C4\uBCF4 ", walkMin, "\uBD84"))));
}
Object.assign(__ds_scope, { PlaceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/PlaceRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EmptyState — centered icon + title + text + optional action. Use for
 * "검색 결과 없음" or "이 유형은 주변에 없어요".
 */
function EmptyState({
  icon = "search",
  color = "gray",
  title,
  children,
  action,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: 6,
      padding: "32px 24px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.FeaturedIcon, {
    name: icon,
    color: color,
    size: "lg",
    theme: "light",
    style: {
      marginBottom: 10
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-lg)",
      color: "var(--text-primary)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-tertiary)",
      lineHeight: 1.55,
      maxWidth: 300
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — Untitled UI tabs. Two styles: "segmented" (pill group on gray track,
 * good for the A/B sheet switch) and "underline" (text tabs with a brand
 * underline). `items` is [{ value, label }].
 */
function Tabs({
  items = [],
  value,
  onChange,
  variant = "segmented",
  fullWidth = false,
  className,
  style,
  ...rest
}) {
  if (variant === "underline") {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: className,
      role: "tablist",
      style: {
        display: "flex",
        gap: 4,
        borderBottom: "1px solid var(--border-secondary)",
        ...style
      }
    }, rest), items.map(it => {
      const on = it.value === value;
      return /*#__PURE__*/React.createElement("button", {
        key: it.value,
        role: "tab",
        "aria-selected": on,
        onClick: () => onChange && onChange(it.value),
        style: {
          flex: fullWidth ? 1 : undefined,
          border: "none",
          background: "transparent",
          padding: "10px 4px",
          marginBottom: -1,
          borderBottom: `2px solid ${on ? "var(--brand-600)" : "transparent"}`,
          fontFamily: "var(--font-sans)",
          fontWeight: "var(--fw-semibold)",
          fontSize: "var(--text-sm)",
          color: on ? "var(--brand-700)" : "var(--text-tertiary)",
          cursor: "pointer"
        }
      }, it.label);
    }));
  }

  // segmented
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: 4,
      padding: 4,
      background: "var(--gray-100)",
      borderRadius: "var(--radius-lg)",
      width: fullWidth ? "100%" : undefined,
      ...style
    }
  }, rest), items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it.value),
      style: {
        flex: fullWidth ? 1 : undefined,
        border: "none",
        background: on ? "var(--bg-primary)" : "transparent",
        boxShadow: on ? "var(--shadow-sm)" : "none",
        padding: "8px 14px",
        borderRadius: "var(--radius-sm)",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--text-sm)",
        color: on ? "var(--brand-700)" : "var(--text-tertiary)",
        cursor: "pointer",
        transition: "background 120ms ease, color 120ms ease"
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a white surface container. Use for grouped content (sheet sections,
 * onboarding stat callouts, settings groups).
 */
function Card({
  children,
  padding = 16,
  elevated = false,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      background: "var(--bg-primary)",
      border: "1px solid var(--border-secondary)",
      borderRadius: "var(--radius-card)",
      boxShadow: elevated ? "var(--shadow-lg)" : "var(--shadow-sm)",
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — a hairline separator. Horizontal by default; pass a `label` to
 * render centered text between two rules.
 */
function Divider({
  orientation = "horizontal",
  label,
  className,
  style,
  ...rest
}) {
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: {
        display: "inline-block",
        width: 1,
        alignSelf: "stretch",
        background: "var(--border-secondary)",
        ...style
      }
    }, rest));
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: className,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-secondary)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-tertiary)",
        whiteSpace: "nowrap"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-secondary)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: className,
    style: {
      border: "none",
      height: 1,
      background: "var(--border-secondary)",
      margin: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Divider.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trash-finder/parts.jsx
try { (() => {
/* 쓰레기통 찾기 — interactive UI kit app.
   Consumes the design-system bundle via window.Ds_84f87e.
   Exposes window.TrashApp for index.html to mount. */

const {
  Button,
  IconButton,
  FilterBar,
  BinPin,
  SearchField,
  BottomSheet,
  PlaceRow,
  PaginationDots,
  FeaturedIcon,
  Icon,
  Badge,
  Divider,
  Card,
  BIN_TYPES
} = window.Ds_84f87e;

/* ----------------------------------------------------------------
   Stylized map background (CSS only — stands in for Kakao Map tiles)
   Muted palette so the colored pins stay the brightest thing on screen.
---------------------------------------------------------------- */
function MapBackground() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      background: "#eef1f4"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -40,
      top: 120,
      width: 220,
      height: 240,
      background: "#e3efe0",
      borderRadius: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -60,
      bottom: 60,
      width: 240,
      height: 200,
      background: "#e3efe0",
      borderRadius: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 430,
      height: 70,
      background: "#dbeafe",
      transform: "rotate(-4deg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "46%",
      top: 0,
      bottom: 0,
      width: 26,
      background: "#fdf3d6"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "38%",
      height: 22,
      background: "#fdf3d6"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "70%",
      height: 16,
      background: "#fdf6e3"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "22%",
      top: 0,
      bottom: 0,
      width: 8,
      background: "#f6f8fa"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "74%",
      top: 0,
      bottom: 0,
      width: 8,
      background: "#f6f8fa"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "55%",
      height: 8,
      background: "#f6f8fa"
    }
  }), [[60, 40], [300, 60], [120, 260], [280, 300], [40, 520], [300, 560]].map(([x, y], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      left: x,
      top: y,
      width: 64,
      height: 48,
      background: "#f7f9fb",
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px #eceff3"
    }
  })));
}

/* Current-location dot */
function HereDot({
  left,
  top
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left,
      top,
      transform: "translate(-50%,-50%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "var(--map-here-halo)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: "var(--map-here)",
      border: "3px solid #fff",
      boxShadow: "var(--shadow-sm)"
    }
  })));
}

/* ----------------------------------------------------------------
   Sample data
---------------------------------------------------------------- */
const BINS = [{
  id: 1,
  type: "recycle",
  name: "역삼역 3번 출구",
  address: "서울 강남구 역삼동 822",
  distanceM: 85,
  walkMin: 2,
  x: "30%",
  y: "46%",
  hours: "24시간",
  status: "운영 중"
}, {
  id: 2,
  type: "general",
  name: "강남대로 버스정류장",
  address: "서울 강남구 강남대로 390",
  distanceM: 210,
  walkMin: 3,
  x: "62%",
  y: "30%",
  hours: "24시간",
  status: "운영 중"
}, {
  id: 3,
  type: "mixed",
  name: "역삼 1동 주민센터 앞",
  address: "서울 강남구 테헤란로 8길",
  distanceM: 340,
  walkMin: 5,
  x: "78%",
  y: "62%",
  hours: "06–22시",
  status: "운영 중"
}, {
  id: 4,
  type: "cigarette",
  name: "GS25 역삼점 흡연구역",
  address: "서울 강남구 봉은사로 102",
  distanceM: 150,
  walkMin: 2,
  x: "20%",
  y: "70%",
  hours: "24시간",
  status: "운영 중"
}, {
  id: 5,
  type: "general",
  name: "역삼근린공원 입구",
  address: "서울 강남구 역삼동 689",
  distanceM: 420,
  walkMin: 6,
  x: "44%",
  y: "78%",
  hours: "24시간",
  status: "운영 중"
}];
const TYPE_FI = {
  general: "brand",
  recycle: "success",
  mixed: "blue",
  cigarette: "warning"
};

/* ----------------------------------------------------------------
   Status bar (faux iOS)
---------------------------------------------------------------- */
function StatusBar({
  dark
}) {
  const c = dark ? "#fff" : "var(--gray-900)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 22px",
      flexShrink: 0,
      color: c,
      fontWeight: 600,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 16,
    color: c
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 16,
    color: c
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 18,
    color: c
  })));
}
window.TrashApp = {
  MapBackground,
  HereDot,
  StatusBar,
  BINS,
  TYPE_FI,
  BIN_TYPES
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trash-finder/parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trash-finder/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 쓰레기통 찾기 — screens. Exposes window.TrashScreens. */
const {
  Button,
  IconButton,
  FilterBar,
  BinPin,
  SearchField,
  BottomSheet,
  PlaceRow,
  PaginationDots,
  FeaturedIcon,
  Icon,
  Badge,
  Divider,
  Card,
  BIN_TYPES
} = window.Ds_84f87e;
const {
  MapBackground,
  HereDot,
  StatusBar,
  BINS,
  TYPE_FI
} = window.TrashApp;

/* =================================================================
   ONBOARDING
================================================================= */
const ONBOARD = [{
  key: "hook",
  fi: {
    name: "trash-2",
    color: "brand"
  },
  title: "버리고 싶은데,\n쓰레기통이 안 보이죠?",
  body: "길에서 쓰레기를 들고 헤매던 경험, 누구나 있어요. 가장 가까운 쓰레기통을 지도에서 바로 찾아드릴게요."
}, {
  key: "data",
  fi: {
    name: "trending-down",
    color: "warning"
  },
  title: "거리의 쓰레기통,\n이렇게 변해왔어요",
  body: "서울시 가로휴지통 설치정보 기준",
  data: true
}, {
  key: "value",
  fi: {
    name: "navigation",
    color: "success"
  },
  title: "내 주변 쓰레기통을\n한눈에",
  body: "유형별로 골라 보고, 도보 거리와 예상 시간까지. 길 안내까지 한 번에 연결돼요."
}];
function DataViz() {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      width: "100%",
      marginTop: 8
    },
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      fontWeight: 500
    }
  }, "2020\u20132022 \xB7 \uCD95\uC18C"), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: "var(--warning-700)"
    }
  }, "\u22121,200\uAC1C")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      borderRadius: 999,
      background: "var(--gray-100)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "80%",
      height: "100%",
      borderRadius: 999,
      background: "var(--warning-500)"
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      fontWeight: 500
    }
  }, "2023\u20132024 \xB7 \uC7AC\uC124\uCE58"), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: "var(--success-700)"
    }
  }, "+1,500\uAC1C")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      borderRadius: 999,
      background: "var(--gray-100)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: 999,
      background: "var(--success-500)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-tertiary)",
      lineHeight: 1.5
    }
  }, "\uD55C\uB3D9\uC548 \uC904\uC5C8\uB2E4\uAC00 \uB2E4\uC2DC \uB298\uACE0 \uC788\uC5B4\uC694. \uADF8\uB798\uB3C4 \u201C\uC9C0\uAE08 \uB0B4 \uC55E\u201D\uC5D0 \uC5B4\uB514 \uC788\uB294\uC9C0\uB294 \uC5EC\uC804\uD788 \uCC3E\uAE30 \uC5B4\uB835\uC8E0.")));
}
function Onboarding({
  onDone
}) {
  const [i, setI] = React.useState(0);
  const s = ONBOARD[i];
  const last = i === ONBOARD.length - 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: "var(--bg-primary)"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "4px 16px",
      height: 40
    }
  }, !last && /*#__PURE__*/React.createElement(Button, {
    hierarchy: "link",
    onClick: onDone
  }, "\uAC74\uB108\uB6F0\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 28px",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(FeaturedIcon, {
    name: s.fi.name,
    color: s.fi.color,
    size: "xl",
    shape: "rounded"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      lineHeight: 1.28,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)",
      whiteSpace: "pre-line",
      margin: 0
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-tertiary)",
      margin: 0
    }
  }, s.body), s.data && /*#__PURE__*/React.createElement(DataViz, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 28px",
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(PaginationDots, {
    count: ONBOARD.length,
    index: i,
    onDot: setI
  })), /*#__PURE__*/React.createElement(Button, {
    hierarchy: "primary",
    size: "xl",
    fullWidth: true,
    iconTrailing: last ? "arrow-right" : undefined,
    onClick: () => last ? onDone() : setI(i + 1)
  }, last ? "쓰레기통 찾기 시작" : "다음")));
}

/* =================================================================
   BIN DETAIL (shared sheet body)
================================================================= */
function MetaCell({
  icon,
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontSize: 12.5,
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14,
    color: "var(--gray-400)"
  }), " ", label), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, value));
}
function BinDetail({
  bin,
  onClose
}) {
  const t = BIN_TYPES[bin.type];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 20px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(FeaturedIcon, {
    name: t.icon,
    color: TYPE_FI[bin.type],
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      marginBottom: 4,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, bin.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: TYPE_FI[bin.type] === "warning" ? "warning" : TYPE_FI[bin.type] === "success" ? "success" : TYPE_FI[bin.type] === "blue" ? "blue" : "brand"
  }, t.label), /*#__PURE__*/React.createElement(Badge, {
    color: "success",
    dot: true
  }, bin.status))), /*#__PURE__*/React.createElement(IconButton, {
    name: "x",
    variant: "ghost",
    size: "sm",
    "aria-label": "\uB2EB\uAE30",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 12,
      color: "var(--text-secondary)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, bin.address)), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(MetaCell, {
    icon: "footprints",
    label: "\uB3C4\uBCF4 \uAC70\uB9AC",
    value: `${bin.distanceM}m`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "var(--border-secondary)"
    }
  }), /*#__PURE__*/React.createElement(MetaCell, {
    icon: "clock",
    label: "\uC608\uC0C1 \uC2DC\uAC04",
    value: `${bin.walkMin}분`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "var(--border-secondary)"
    }
  }), /*#__PURE__*/React.createElement(MetaCell, {
    icon: "calendar-clock",
    label: "\uC6B4\uC601",
    value: bin.hours
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    hierarchy: "primary",
    size: "lg",
    iconLeading: "navigation",
    fullWidth: true
  }, "\uAE38 \uC548\uB0B4"), /*#__PURE__*/React.createElement(Button, {
    hierarchy: "secondary-gray",
    size: "lg",
    iconOnly: "share-2",
    "aria-label": "\uACF5\uC720"
  }), /*#__PURE__*/React.createElement(Button, {
    hierarchy: "secondary-gray",
    size: "lg",
    iconOnly: "bookmark",
    "aria-label": "\uC800\uC7A5"
  })));
}

/* =================================================================
   MAP SCREEN  (variant: "detail" | "list")
================================================================= */
function MapScreen({
  variant
}) {
  const [filters, setFilters] = React.useState([{
    type: "general",
    selected: true,
    count: 2
  }, {
    type: "recycle",
    selected: true,
    count: 1
  }, {
    type: "mixed",
    selected: true,
    count: 1
  }, {
    type: "cigarette",
    selected: true,
    count: 1
  }]);
  const [active, setActive] = React.useState(null);
  const on = type => filters.find(f => f.type === type)?.selected;
  const toggle = type => setFilters(fs => fs.map(f => f.type === type ? {
    ...f,
    selected: !f.selected
  } : f));
  const visible = BINS.filter(b => on(b.type));
  const activeBin = BINS.find(b => b.id === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      overflow: "hidden",
      background: "#eef1f4"
    }
  }, /*#__PURE__*/React.createElement(MapBackground, null), /*#__PURE__*/React.createElement(HereDot, {
    left: "50%",
    top: "52%"
  }), visible.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    style: {
      position: "absolute",
      left: b.x,
      top: b.y,
      transform: "translate(-50%,-100%)",
      zIndex: active === b.id ? 5 : 2
    }
  }, /*#__PURE__*/React.createElement(BinPin, {
    type: b.type,
    selected: active === b.id,
    onClick: () => setActive(b.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 8,
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(SearchField, {
    trailing: /*#__PURE__*/React.createElement(Icon, {
      name: "sliders-horizontal",
      size: 20,
      color: "var(--gray-400)"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(FilterBar, {
    filters: filters,
    onToggle: toggle,
    showFilterButton: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 16,
      bottom: variant === "list" ? 320 : active ? 360 : 132,
      zIndex: 9,
      transition: "bottom 280ms ease"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "locate-fixed",
    variant: "white",
    size: "lg",
    "aria-label": "\uB0B4 \uC704\uCE58"
  })), variant === "detail" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BottomSheet, {
    open: !active
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "2px 20px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 700
    }
  }, "\uB0B4 \uC8FC\uBCC0 ", /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      color: "var(--brand-700)"
    }
  }, visible.length), "\uACF3"), /*#__PURE__*/React.createElement(Button, {
    hierarchy: "link"
  }, "\uB9AC\uC2A4\uD2B8 \uC804\uCCB4\uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, visible.slice(0, 2).map((b, idx) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: b.id
  }, idx > 0 && /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(PlaceRow, _extends({}, b, {
    onClick: () => setActive(b.id),
    style: {
      paddingLeft: 0,
      paddingRight: 0
    }
  }))))))), /*#__PURE__*/React.createElement(BottomSheet, {
    open: !!active,
    showScrim: true,
    onClose: () => setActive(null)
  }, activeBin && /*#__PURE__*/React.createElement(BinDetail, {
    bin: activeBin,
    onClose: () => setActive(null)
  }))), variant === "list" && /*#__PURE__*/React.createElement(BottomSheet, {
    open: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "2px 0 0"
    }
  }, activeBin ? /*#__PURE__*/React.createElement(BinDetail, {
    bin: activeBin,
    onClose: () => setActive(null)
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 700
    }
  }, "\uAC00\uAE4C\uC6B4 \uC21C ", /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      color: "var(--brand-700)"
    }
  }, visible.length), "\uACF3"), /*#__PURE__*/React.createElement(Badge, {
    color: "gray",
    icon: "footprints"
  }, "\uB3C4\uBCF4 \uAE30\uC900")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 232,
      overflowY: "auto"
    }
  }, [...visible].sort((a, b) => a.distanceM - b.distanceM).map((b, idx) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: b.id
  }, idx > 0 && /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(PlaceRow, _extends({}, b, {
    onClick: () => setActive(b.id)
  })))))))));
}
window.TrashScreens = {
  Onboarding,
  MapScreen
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trash-finder/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BinPin = __ds_scope.BinPin;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.BIN_TYPES = __ds_scope.BIN_TYPES;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.PaginationDots = __ds_scope.PaginationDots;

__ds_ns.PlaceRow = __ds_scope.PlaceRow;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioButton = __ds_scope.RadioButton;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.FeaturedIcon = __ds_scope.FeaturedIcon;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

})();

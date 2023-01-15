import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
/* empty css                                                   */const app = "";
const header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "header.svelte-h10enp{position:absolute;top:0;left:0;width:100%;background-color:rgba(0, 0, 0, 0.1);z-index:100}nav.svelte-h10enp{display:flex;justify-content:end;align-items:center;height:3rem;padding-right:3rem}ul.svelte-h10enp{display:flex}li.svelte-h10enp{list-style-type:none;margin:0 0.5rem}a.svelte-h10enp{color:#fff;text-decoration:none}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<header id="${"top"}" class="${"svelte-h10enp"}"><nav class="${"svelte-h10enp"}"><ul class="${"svelte-h10enp"}"><li class="${"svelte-h10enp"}"><a href="${"#tickets"}" class="${"svelte-h10enp"}">Tickets</a></li>
			<li class="${"svelte-h10enp"}"><a href="${"#lineup"}" class="${"svelte-h10enp"}">Line-Up</a></li>
			<li class="${"svelte-h10enp"}"><a href="${"#about"}" class="${"svelte-h10enp"}">Info</a></li>
			<li class="${"svelte-h10enp"}"><a href="${"#contact"}" class="${"svelte-h10enp"}">Contact</a></li></ul></nav>
</header>`;
});
const css$2 = {
  code: "svg.svelte-c8tyih{stroke:currentColor;fill:currentColor;stroke-width:0;width:100%;height:auto;max-height:100%}",
  map: null
};
const IconBase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = null } = $$props;
  let { viewBox } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  $$result.css.add(css$2);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("viewBox", viewBox, 0)} class="${"svelte-c8tyih"}">${title ? `<title>${escape(title)}</title>` : ``}${slots.default ? slots.default({}) : ``}</svg>`;
});
const FaFacebookSquare = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 448 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"}"></path>`;
    }
  })}`;
});
const FaGithub = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 496 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}"></path>`;
    }
  })}`;
});
const footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-lvwhwv{display:flex;flex-direction:column;align-items:center;text-align:center;color:#fff;background-color:#414a4f;padding:60px 0}.social.svelte-lvwhwv{display:flex;justify-content:center;align-items:center}.icon.svelte-lvwhwv{width:3rem;height:3rem;margin:1rem}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-lvwhwv"}"><div class="${"social svelte-lvwhwv"}"><a class="${"icon svelte-lvwhwv"}" href="${"https://facebook.com"}" target="${"_blank"}" rel="${"noopener noreferrer"}">${validate_component(FaFacebookSquare, "FaFacebookSquare").$$render($$result, {}, {}, {})}</a>
		<a class="${"icon svelte-lvwhwv"}" href="${"https://github.com/agentgoodbee?tab=repositories"}" target="${"_blank"}" rel="${"noopener noreferrer"}">${validate_component(FaGithub, "FaGithub").$$render($$result, {}, {}, {})}</a></div>
</footer>`;
});
const topButton_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back-to-top.svelte-1rmwws3{position:fixed;bottom:20px;right:30px;z-index:99;font-size:18px;border:none;outline:none;background-color:rgb(244, 104, 34);color:white;cursor:pointer;padding:15px;border-radius:4px;opacity:1;transition:opacity 0.5s, visibility 0.5s}.back-to-top.hidden.svelte-1rmwws3{opacity:0;visibility:hidden}",
  map: null
};
const Top_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 20 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css);
  return `

<div class="${["back-to-top svelte-1rmwws3", "hidden"].join(" ").trim()}">Top</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-6mjde4_START -->${$$result.title = `<title>Dubstetten 23</title>`, ""}<meta name="${"description"}" content="${"The Dubest Festival in Austria"}"><!-- HEAD_svelte-6mjde4_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
${validate_component(Top_button, "TopButton").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};

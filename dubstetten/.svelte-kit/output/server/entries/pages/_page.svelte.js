import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
/* empty css                                                   */const hero_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "#hero.svelte-17x639r{width:100vw;height:100vh;background-repeat:no-repeat;background-size:cover;display:grid;grid-template-rows:1fr;grid-template-columns:1fr;justify-items:center;align-items:center;position:relative}.wrapper.svelte-17x639r{display:grid;grid-template-columns:1fr;justify-content:center;z-index:1;color:#ffffff}h1.svelte-17x639r{text-align:center;font:80px own}h2.svelte-17x639r{text-align:center;font:30px own}h3.svelte-17x639r{text-align:center;margin-top:30%;font:40px own}.bg-color.svelte-17x639r{position:absolute;top:0;left:0;bottom:0;right:0;background-color:#414a4f;opacity:0.35}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section id="${"hero"}" class="${"svelte-17x639r"}"><div class="${"bg-color svelte-17x639r"}"></div>
		<div class="${"wrapper svelte-17x639r"}"><h2 class="${"svelte-17x639r"}">nature - music -family</h2>
			<h1 class="${"svelte-17x639r"}">Dubstetten</h1>
			<h3 class="${"svelte-17x639r"}">21. &amp; 22. July 2023</h3></div>
</section>`;
});
const tickets_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "#tickets.svelte-9tsn5m{background-color:rgb(201, 201, 201)}.free-tickets.svelte-9tsn5m{color:darkgreen;font-weight:bold}.total-tickets.svelte-9tsn5m{color:darkslategray}",
  map: null
};
const Tickets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section id="${"tickets"}" class="${"svelte-9tsn5m"}"><h3 class="${"title"}">Tickets</h3>
	<p>What the Bot say: Sure! Here&#39;s a revised version of the text with a focus on a dub event: &quot;Hey
		there Dub Fans! Are you ready to experience the best in Dub music? We&#39;ve got a fantastic lineup
		of artists and DJs at our upcoming Dub event, and you won&#39;t want to miss out. From heavy bass to
		smooth grooves, our Dub event will have you dancing all night long. And with our discounted
		ticket prices, it&#39;s the perfect opportunity to bring your friends and make some new ones on the
		dance floor. Don&#39;t wait too long to get your tickets - they&#39;re sure to go fast. We can&#39;t wait to
		welcome you to our Dub event and bring the vibes together. See you on the dance floor!&quot;
	</p>
	<hr>
	${``}
</section>`;
});
const lineup_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#lineup.svelte-c1wk9l{background-color:#f7f7f7}.lineup-list.svelte-c1wk9l{display:flex;height:40vwpx;grid-template-columns:1fr 1fr 1fr}img.svelte-c1wk9l{width:10rem;margin:0 1rem;border-radius:10%}",
  map: null
};
const Lineup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="${"lineup"}" class="${"svelte-c1wk9l"}"><h3 class="${"title"}">Line-Up</h3>
	<p>&quot;Get ready for an unforgettable night of heavy bass and smooth grooves! Our Dub event will
		feature a diverse lineup of some of the most exciting and talented Dub artists and DJs in the
		scene. Don&#39;t miss out on this incredible opportunity to see these amazing artists in one night,
		and be prepared for an unforgettable night of dub music!&quot;
	</p>
	<hr>

	<div class="${"lineup-list svelte-c1wk9l"}"><a href="${"https://lionsdensound.bandcamp.com/"}"><img src="${"img/lions_den_icon.jpeg"}" class="${"svelte-c1wk9l"}"></a>
		<a href="${"https://wickedandbonny.bandcamp.com/"}"><img src="${"img/wckd-nd-bnny.png"}" class="${"svelte-c1wk9l"}"></a>
		<a href="${"https://wickedandbonny.bandcamp.com/"}"><img src="${"img/danubian_icon.jpeg"}" class="${"svelte-c1wk9l"}"></a></div>
</section>`;
});
const about_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#about.svelte-1uszhgh.svelte-1uszhgh{background-color:#fff}.impressions-mobile.svelte-1uszhgh.svelte-1uszhgh{display:none}.impressions-desktop.svelte-1uszhgh.svelte-1uszhgh{width:80vw;display:grid;grid-template-columns:1fr 2fr;grid-template-rows:3fr 2fr;grid-gap:1rem}.impressions-desktop.svelte-1uszhgh>div.svelte-1uszhgh{background-size:cover;background-position:center;min-height:22rem}@media(max-width: 360px){.impressions-desktop.svelte-1uszhgh.svelte-1uszhgh{display:none}.impressions-mobile.svelte-1uszhgh.svelte-1uszhgh{width:80vw;display:grid;grid-template-columns:1fr;grid-template-rows:3fr 2fr;grid-gap:1rem}.impressions-mobile.svelte-1uszhgh>div.svelte-1uszhgh{background-size:cover;background-position:center;min-height:22rem}}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section id="${"about"}" class="${"svelte-1uszhgh"}"><h3 class="${"title"}">About Dubstetten</h3>
	<p>Dubstetten is a family festival organised from the BELE association in cooperation with the
		Danubian Dub Soundsystem crew.
	</p>
	<hr>
	<div class="${"impressions-desktop svelte-1uszhgh"}"><div style="${"background-image: url(img/dub_2.jpg);"}" class="${"svelte-1uszhgh"}"></div>
		<div style="${"background-image: url(img/dub_1.jpg);"}" class="${"svelte-1uszhgh"}"></div>
		<div style="${"background-image: url(img/dub_3.jpg);"}" class="${"svelte-1uszhgh"}"></div>
		<div style="${"background-image: url(img/dub_4.jpg);"}" class="${"svelte-1uszhgh"}"></div></div>
	<div class="${"impressions-mobile svelte-1uszhgh"}"><div style="${"background-image: url(img/dub_2.jpg);"}" class="${"svelte-1uszhgh"}"></div>
		<div style="${"background-image: url(img/dub_1.jpg);"}" class="${"svelte-1uszhgh"}"></div>
		<div style="${"background-image: url(img/dub_3.jpg);"}" class="${"svelte-1uszhgh"}"></div>
		<div style="${"background-image: url(img/dub_4.jpg);"}" class="${"svelte-1uszhgh"}"></div></div>
</section>`;
});
const reviews_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#reviews.svelte-qiqh5h{background-color:#f7f7f7}.quote.svelte-qiqh5h{font-style:italic}.author.svelte-qiqh5h{text-align:right}",
  map: null
};
const Reviews = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section id="${"reviews"}" class="${"svelte-qiqh5h"}"><h3 class="${"title"}">What others say:</h3>

	<p class="${"quote svelte-qiqh5h"}">Lovely people with a lot of nature.</p>
	<p class="${"author svelte-qiqh5h"}">— max mustermen</p>

	<p class="${"quote svelte-qiqh5h"}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum
		ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.
	</p>
	<p class="${"author svelte-qiqh5h"}">— George Smith</p>

	<p class="${"quote svelte-qiqh5h"}">Donec commodo dolor augue, vitae faucibus tortor tincidunt in. Aliquam vitae leo quis mi
		pulvinar ornare. Integer eu iaculis metus.
	</p>
	<p class="${"author svelte-qiqh5h"}">— Kevin Blake</p>
</section>`;
});
const Open_map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<iframe src="${"https://www.openstreetmap.org/export/embed.html?bbox=14.990222454071047%2C48.320101460128775%2C14.992684721946718%2C48.32113771199181&layer=mapnik&marker=48.32061958869159%2C14.99145358800888"}" width="${"100%"}" height="${"350px"}" frameborder="${"0"}" scrolling="${"no"}" marginheight="${"0"}" marginwidth="${"0"}" style="${"border: 1px solid black"}">loding=&quot;lazy&quot;
</iframe>
<br>
<small><a href="${"https://www.openstreetmap.org/?mlat=48.32062&mlon=14.99145#map=19/48.32062/14.99145"}">Größere Karte anzeigen</a></small>`;
});
const contact_svelte_svelte_type_style_lang = "";
const css = {
  code: ".logos.svelte-29sl9.svelte-29sl9{display:flex;justify-content:center;align-items:center;margin:2rem 0}.logos.svelte-29sl9 img.svelte-29sl9{width:10rem;margin:0 1rem;border-radius:50%}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="${"contact"}" class="${"contact"}"><h3 class="${"title"}">Contact</h3>
	<p>Verein BELE</p>
	<p>Wo auch immer</p>
	<hr>
	<div class="${"logos svelte-29sl9"}"><a href="${"https://eichhornhof.at/index.html"}"><img src="${"img/eichhorn_icon.png"}" alt="${"Eichhornhof Icon"}" class="${"svelte-29sl9"}"></a>
		<a href="${"https://www.soundsystem.world/soundsystems/danubian-dub-soundsystem/"}"><img src="${"img/danubian_icon.jpeg"}" alt="${"Danubian Icon"}" class="${"svelte-29sl9"}"></a></div>

	${validate_component(Open_map, "OpenMap").$$render($$result, {}, {}, {})}
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(Tickets, "Tickets").$$render($$result, {}, {}, {})}
${validate_component(Lineup, "Lineup").$$render($$result, {}, {}, {})}
${validate_component(About, "About").$$render($$result, {}, {}, {})}
${validate_component(Reviews, "Reviews").$$render($$result, {}, {}, {})}
${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

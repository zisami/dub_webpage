export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","font/Aladin-Regular.ttf","img/danubian_icon.jpeg","img/dub_1.jpg","img/dub_2.jpg","img/dub_3.jpg","img/dub_4.jpg","img/dubstetten.svg","img/dubstetten_hero.svg","img/eichhorn_icon.png","img/hero.jpeg","img/lions_den_icon.jpeg","img/wckd-nd-bnny.png","img/wicked-and-bonny-logo.png"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".jpeg":"image/jpeg",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-4bfa42aa.js","imports":["_app/immutable/start-4bfa42aa.js","_app/immutable/chunks/index-43148f52.js","_app/immutable/chunks/singletons-87c66db2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

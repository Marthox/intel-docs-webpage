import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_wkNaxSgS.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/en/blogs/_blog_.astro.mjs');
const _page2 = () => import('./pages/en/_page_.astro.mjs');
const _page3 = () => import('./pages/en.astro.mjs');
const _page4 = () => import('./pages/fr/blogs/_blog_.astro.mjs');
const _page5 = () => import('./pages/fr/_page_.astro.mjs');
const _page6 = () => import('./pages/fr.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/en/blogs/[blog].astro", _page1],
    ["src/pages/en/[page].astro", _page2],
    ["src/pages/en/index.astro", _page3],
    ["src/pages/fr/blogs/[blog].astro", _page4],
    ["src/pages/fr/[page].astro", _page5],
    ["src/pages/fr/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "aa9e0bf0-5205-4260-8a09-d5862223f958"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

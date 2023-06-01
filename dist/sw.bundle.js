/*! For license information please see sw.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}},550:()=>{try{self["workbox:expiration:6.5.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},552:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},419:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},253:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{n(552);class e extends Error{constructor(e,t){super(((e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n})(e,t)),this.name=e,this.details=t}}const t={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[t.prefix,e,t.suffix].filter((e=>e&&e.length>0)).join("-"),s=e=>e||r(t.precache);function a(e,t){const n=t();return e.waitUntil(n),n}function i(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:n,url:r}=t;if(!r)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!n){const e=new URL(r,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(r,location.href),a=new URL(r,location.href);return s.searchParams.set("__WB_REVISION__",n),{cacheKey:s.href,url:a.href}}n(977);class o{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;n?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return n}}}class c{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const n=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return n?new Request(n,{headers:e.headers}):e},this._precacheController=e}}let h;function l(e,t){const n=new URL(e);for(const e of t)n.searchParams.delete(e);return n.href}class u{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const f=new Set;function d(e){return"string"==typeof e?new Request(e):e}n(419);class p{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new u,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:n}=this;let r=d(t);if("navigate"===r.mode&&n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const s=this.hasCallback("fetchDidFail")?r.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))r=await e({request:r.clone(),event:n})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const a=r.clone();try{let e;e=await fetch(r,"navigate"===r.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:n,request:a,response:e});return e}catch(e){throw s&&await this.runCallbacks("fetchDidFail",{error:e,event:n,originalRequest:s.clone(),request:a.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=d(e);let n;const{cacheName:r,matchOptions:s}=this._strategy,a=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},s),{cacheName:r});n=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await e({cacheName:r,matchOptions:s,cachedResponse:n,request:a,event:this.event})||void 0;return n}async cachePut(t,n){const r=d(t);await(0,new Promise((e=>setTimeout(e,0))));const s=await this.getCacheKey(r,"write");if(!n)throw new e("cache-put-with-no-response",{url:(a=s.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const i=await this._ensureResponseSafeToCache(n);if(!i)return!1;const{cacheName:o,matchOptions:c}=this._strategy,h=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),p=u?await async function(e,t,n,r){const s=l(t.url,n);if(t.url===s)return e.match(t,r);const a=Object.assign(Object.assign({},r),{ignoreSearch:!0}),i=await e.keys(t,a);for(const t of i)if(s===l(t.url,n))return e.match(t,r)}(h,s.clone(),["__WB_REVISION__"],c):null;try{await h.put(s,u?i.clone():i)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of f)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:p,newResponse:i.clone(),request:s,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let r=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=d(await e({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[n]=r}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const n=this._pluginStateMap.get(t),r=r=>{const s=Object.assign(Object.assign({},r),{state:n});return t[e](s)};yield r}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&200!==t.status&&(t=void 0),t}}class g{constructor(e={}){this.cacheName=e.cacheName||r(t.runtime),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n="string"==typeof e.request?new Request(e.request):e.request,r="params"in e?e.params:void 0,s=new p(this,{event:t,request:n,params:r}),a=this._getResponse(s,n,t);return[a,this._awaitComplete(a,s,n,t)]}async _getResponse(t,n,r){let s;await t.runCallbacks("handlerWillStart",{event:r,request:n});try{if(s=await this._handle(n,t),!s||"error"===s.type)throw new e("no-response",{url:n.url})}catch(e){if(e instanceof Error)for(const a of t.iterateCallbacks("handlerDidError"))if(s=await a({error:e,event:r,request:n}),s)break;if(!s)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))s=await e({event:r,request:n,response:s});return s}async _awaitComplete(e,t,n,r){let s,a;try{s=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:r,request:n,response:s}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:r,request:n,response:s,error:a}),t.destroy(),a)throw a}}class y extends g{constructor(e={}){e.cacheName=s(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(y.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,n){let r;const s=n.params||{};if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=s.integrity,a=t.integrity,i=!a||a===e;r=await n.fetch(new Request(t,{integrity:"no-cors"!==t.mode?a||e:void 0})),e&&i&&"no-cors"!==t.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await n.cachePut(t,r.clone()))}return r}async _handleInstall(t,n){this._useDefaultCacheabilityPluginIfNeeded();const r=await n.fetch(t);if(!await n.cachePut(t,r.clone()))throw new e("bad-precaching-response",{url:t.url,status:r.status});return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,r]of this.plugins.entries())r!==y.copyRedirectedCacheableResponsesPlugin&&(r===y.defaultPrecacheCacheabilityPlugin&&(e=n),r.cacheWillUpdate&&t++);0===t?this.plugins.push(y.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}y.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},y.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await async function(t,n){let r=null;if(t.url&&(r=new URL(t.url).origin),r!==self.location.origin)throw new e("cross-origin-copy-response",{origin:r});const s=t.clone(),a={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=n?n(a):a,o=function(){if(void 0===h){const e=new Response("");if("body"in e)try{new Response(e.body),h=!0}catch(e){h=!1}h=!1}return h}()?s.body:await s.blob();return new Response(o,i)}(t):t};class w{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new y({cacheName:s(e),plugins:[...t,new c({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const n=[];for(const r of t){"string"==typeof r?n.push(r):r&&void 0===r.revision&&n.push(r.url);const{cacheKey:t,url:s}=i(r),a="string"!=typeof r&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:t});if("string"!=typeof r&&r.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==r.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(t,r.integrity)}if(this._urlsToCacheKeys.set(s,t),this._urlsToCacheModes.set(s,a),n.length>0){const e=`Workbox is precaching URLs without revision info: ${n.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return a(e,(async()=>{const t=new o;this.strategy.plugins.push(t);for(const[t,n]of this._urlsToCacheKeys){const r=this._cacheKeysToIntegrities.get(n),s=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:r,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:n},request:a,event:e}))}const{updatedURLs:n,notUpdatedURLs:r}=t;return{updatedURLs:n,notUpdatedURLs:r}}))}activate(e){return a(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),r=[];for(const s of t)n.has(s.url)||(await e.delete(s),r.push(s.url));return{deletedURLs:r}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n)return(await self.caches.open(this.strategy.cacheName)).match(n)}createHandlerBoundToURL(t){const n=this.getCacheKeyForURL(t);if(!n)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:n},e.params),this.strategy.handle(e))}}let m;const v=()=>(m||(m=new w),m);n(253);class _ extends Error{constructor(e,t){super(((e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n})(e,t)),this.name=e,this.details=t}}n(80);const b=e=>e&&"object"==typeof e?e:{handle:e};class x{constructor(e,t,n="GET"){this.handler=b(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=b(e)}}class R extends x{constructor(e,t,n){super((({url:t})=>{const n=e.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)}),t,n)}}class C{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,n=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const n=new Request(...t);return this.handleRequest({request:n,event:e})})));e.waitUntil(n),e.ports&&e.ports[0]&&n.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return;const r=n.origin===location.origin,{params:s,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:n});let i=a&&a.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let c;try{c=i.handle({url:n,request:e,event:t,params:s})}catch(e){c=Promise.reject(e)}const h=a&&a.catchHandler;return c instanceof Promise&&(this._catchHandler||h)&&(c=c.catch((async r=>{if(h)try{return await h.handle({url:n,request:e,event:t,params:s})}catch(e){e instanceof Error&&(r=e)}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw r}))),c}findMatchingRoute({url:e,sameOrigin:t,request:n,event:r}){const s=this._routes.get(n.method)||[];for(const a of s){let s;const i=a.match({url:e,sameOrigin:t,request:n,event:r});if(i)return s=i,(Array.isArray(s)&&0===s.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(s=void 0),{route:a,params:s}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,b(e))}setCatchHandler(e){this._catchHandler=b(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new _("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new _("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let E;function L(e,t,n){let r;if("string"==typeof e){const s=new URL(e,location.href);r=new x((({url:e})=>e.href===s.href),t,n)}else if(e instanceof RegExp)r=new R(e,t,n);else if("function"==typeof e)r=new x(e,t,n);else{if(!(e instanceof x))throw new _("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}return(E||(E=new C,E.addFetchListener(),E.addCacheListener()),E).registerRoute(r),r}class k extends x{constructor(e,t){super((({request:n})=>{const r=e.getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:n="index.html",cleanURLs:r=!0,urlManipulation:s}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some((e=>e.test(n)))&&e.searchParams.delete(n);return e}(a,t);if(yield i.href,n&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=n,yield e.href}if(r){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(s){const e=s({url:a});for(const t of e)yield t.href}}(n.url,t)){const t=r.get(s);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}n(913);class q extends Error{constructor(e,t){super(((e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n})(e,t)),this.name=e,this.details=t}}const D={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},N=e=>{return e||(t=D.runtime,[D.prefix,t,D.suffix].filter((e=>e&&e.length>0)).join("-"));var t};function U(e,t){const n=new URL(e);for(const e of t)n.searchParams.delete(e);return n.href}class O{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const S=new Set;function T(e){return"string"==typeof e?new Request(e):e}n(873);class P{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new O,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=T(e);if("navigate"===n.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const r=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:t})}catch(e){if(e instanceof Error)throw new q("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const s=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const n of this.iterateCallbacks("fetchDidSucceed"))e=await n({event:t,request:s,response:e});return e}catch(e){throw r&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:r.clone(),request:s.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=T(e);let n;const{cacheName:r,matchOptions:s}=this._strategy,a=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},s),{cacheName:r});n=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await e({cacheName:r,matchOptions:s,cachedResponse:n,request:a,event:this.event})||void 0;return n}async cachePut(e,t){const n=T(e);await(0,new Promise((e=>setTimeout(e,0))));const r=await this.getCacheKey(n,"write");if(!t)throw new q("cache-put-with-no-response",{url:(s=r.url,new URL(String(s),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var s;const a=await this._ensureResponseSafeToCache(t);if(!a)return!1;const{cacheName:i,matchOptions:o}=this._strategy,c=await self.caches.open(i),h=this.hasCallback("cacheDidUpdate"),l=h?await async function(e,t,n,r){const s=U(t.url,n);if(t.url===s)return e.match(t,r);const a=Object.assign(Object.assign({},r),{ignoreSearch:!0}),i=await e.keys(t,a);for(const t of i)if(s===U(t.url,n))return e.match(t,r)}(c,r.clone(),["__WB_REVISION__"],o):null;try{await c.put(r,h?a.clone():a)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of S)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:i,oldResponse:l,newResponse:a.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let r=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=T(await e({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[n]=r}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const n=this._pluginStateMap.get(t),r=r=>{const s=Object.assign(Object.assign({},r),{state:n});return t[e](s)};yield r}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&200!==t.status&&(t=void 0),t}}class K{constructor(e={}){this.cacheName=N(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n="string"==typeof e.request?new Request(e.request):e.request,r="params"in e?e.params:void 0,s=new P(this,{event:t,request:n,params:r}),a=this._getResponse(s,n,t);return[a,this._awaitComplete(a,s,n,t)]}async _getResponse(e,t,n){let r;await e.runCallbacks("handlerWillStart",{event:n,request:t});try{if(r=await this._handle(t,e),!r||"error"===r.type)throw new q("no-response",{url:t.url})}catch(s){if(s instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(r=await a({error:s,event:n,request:t}),r)break;if(!r)throw s}for(const s of e.iterateCallbacks("handlerWillRespond"))r=await s({event:n,request:t,response:r});return r}async _awaitComplete(e,t,n,r){let s,a;try{s=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:r,request:n,response:s}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:r,request:n,response:s,error:a}),t.destroy(),a)throw a}}const I={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};function M(e){e.then((()=>{}))}const j=(e,t)=>t.some((t=>e instanceof t));let A,W;const B=new WeakMap,F=new WeakMap,H=new WeakMap,$=new WeakMap,G=new WeakMap;let V={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return F.get(e);if("objectStoreNames"===t)return e.objectStoreNames||H.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Q(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function J(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(W||(W=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Y(this),e),Q(B.get(this))}:function(...e){return Q(t.apply(Y(this),e))}:function(e,...n){const r=t.call(Y(this),e,...n);return H.set(r,e.sort?e.sort():[e]),Q(r)}:(e instanceof IDBTransaction&&function(e){if(F.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)}));F.set(e,t)}(e),j(e,A||(A=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,V):e);var t}function Q(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{t(Q(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&B.set(t,e)})).catch((()=>{})),G.set(t,e),t}(e);if($.has(e))return $.get(e);const t=J(e);return t!==e&&($.set(e,t),G.set(t,e)),t}const Y=e=>G.get(e),z=["get","getKey","getAll","getAllKeys","count"],X=["put","add","delete","clear"],Z=new Map;function ee(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Z.get(t))return Z.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=X.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!z.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,s?"readwrite":"readonly");let i=a.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[n](...t),s&&a.done]))[0]};return Z.set(t,a),a}var te;te=V,V={...te,get:(e,t,n)=>ee(e,t)||te.get(e,t,n),has:(e,t)=>!!ee(e,t)||te.has(e,t)},n(550);const ne="cache-entries",re=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class se{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(ne,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);t&&n.addEventListener("blocked",(e=>t(e.oldVersion,e))),Q(n).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const n={url:e=re(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},r=(await this.getDb()).transaction(ne,"readwrite",{durability:"relaxed"});await r.store.put(n),await r.done}async getTimestamp(e){const t=await this.getDb(),n=await t.get(ne,this._getId(e));return null==n?void 0:n.timestamp}async expireEntries(e,t){const n=await this.getDb();let r=await n.transaction(ne).store.index("timestamp").openCursor(null,"prev");const s=[];let a=0;for(;r;){const n=r.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&a>=t?s.push(r.value):a++),r=await r.continue()}const i=[];for(const e of s)await n.delete(ne,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+re(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const i=indexedDB.open(e,t),o=Q(i);return r&&i.addEventListener("upgradeneeded",(e=>{r(Q(i.result),e.oldVersion,e.newVersion,Q(i.transaction),e)})),n&&i.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),o.then((e=>{a&&e.addEventListener("close",(()=>a())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class ae{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new se(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),n=await self.caches.open(this._cacheName);for(const e of t)await n.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,M(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),n=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<n}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class ie{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:n,cachedResponse:r})=>{if(!r)return null;const s=this._isResponseDateFresh(r),a=this._getCacheExpiration(n);M(a.expireEntries());const i=a.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return s?r:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const n=this._getCacheExpiration(e);await n.updateTimestamp(t.url),await n.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),S.add(t))}_getCacheExpiration(e){if(e===N())throw new q("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new ae(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),n=new Date(t).getTime();return isNaN(n)?null:n}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}function oe(e){return oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(e)}function ce(){ce=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",i=s.asyncIterator||"@@asyncIterator",o=s.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function h(e,t,n,s){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),o=new E(s||[]);return r(i,"_invoke",{value:b(e,n,o)}),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=h;var u={};function f(){}function d(){}function p(){}var g={};c(g,a,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(L([])));w&&w!==t&&n.call(w,a)&&(g=w);var m=p.prototype=f.prototype=Object.create(g);function v(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function s(r,a,i,o){var c=l(e[r],e,a);if("throw"!==c.type){var h=c.arg,u=h.value;return u&&"object"==oe(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){s("next",e,i,o)}),(function(e){s("throw",e,i,o)})):t.resolve(u).then((function(e){h.value=e,i(h)}),(function(e){return s("throw",e,i,o)}))}o(c.arg)}var a;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){s(e,n,t,r)}))}return a=a?a.then(r,r):r()}})}function b(e,t,n){var r="suspendedStart";return function(s,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===s)throw a;return{value:void 0,done:!0}}for(n.method=s,n.arg=a;;){var i=n.delegate;if(i){var o=x(i,n);if(o){if(o===u)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),u;var s=l(r,e.iterator,t.arg);if("throw"===s.type)return t.method="throw",t.arg=s.arg,t.delegate=null,u;var a=s.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,s=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return s.next=s}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=p,r(m,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:d,configurable:!0}),d.displayName=c(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,o,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},v(_.prototype),c(_.prototype,i,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,s,a){void 0===a&&(a=Promise);var i=new _(h(t,n,r,s),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},v(m),c(m,o,"Generator"),c(m,a,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var o=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(o&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var a=s;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var s=r.arg;C(n)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}function he(e,t,n,r,s,a,i){try{var o=e[a](i),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,s)}var le;le=[{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'./sw.bundle.js.LICENSE.txt'},{'revision':null,'url':'1e59d2330b4c6deb84b3.ttf?v=4.7.0'},{'revision':null,'url':'20fd1704ea223900efa9.woff2?v=4.7.0'},{'revision':null,'url':'8b43027f47b20503057d.eot'},{'revision':null,'url':'8b43027f47b20503057d.eot?v=4.7.0'},{'revision':'e79089c989f6c56b09bf274e94cfc09a','url':'app.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app.bundle.js.LICENSE.txt'},{'revision':'3a2a6e33e98ad1e040b62db517e59019','url':'app.webmanifest'},{'revision':null,'url':'bd6b63650298f334a08b.jpg'},{'revision':null,'url':'c1e38fd9e0e74ba58f7a.svg?v=4.7.0'},{'revision':null,'url':'f691f37e57f04c152e23.woff?v=4.7.0'},{'revision':'da812066089fca259b907ac5a742a194','url':'icons/128x128.png'},{'revision':'f1a261d7d05cc1f5c835365a963370f9','url':'icons/144x144.png'},{'revision':'a6952679f72e53193a5a558111679327','url':'icons/152x152.png'},{'revision':'94ad28fd691c3961d7556325afda6404','url':'icons/192x192.png'},{'revision':'10a92ee1639abed67a9063aad9fb5138','url':'icons/384x384.png'},{'revision':'6d6a2fc777ed3d9e1147ec4255eb0c55','url':'icons/512x512.png'},{'revision':'6a60f3a85cb97a0b12172e50b0e9e643','url':'icons/72x72.png'},{'revision':'4a702ba126df61903ae49a18025e7e75','url':'icons/96x96.png'},{'revision':'49f78cae81de4f48caf1c2fe0271c828','url':'images/heros/hero-image_2.jpg'},{'revision':'0b6844a167456b1c3910697bbea6b2b9','url':'images/logos/RestoEat 2 260x60.svg'},{'revision':'a4a5f10473b893ff6d182f7c0b0a4715','url':'images/logos/RestoEat 260x60.svg'},{'revision':'3eebc0f4b3ef93d440aca58f210983c2','url':'images/logos/favicon.svg'},{'revision':'5c1b9b89854350184481c7cbec328acb','url':'index.html'}],v().precache(le),function(e){const t=v();L(new k(t,undefined))}(),L(/^https:\/\/use.fontawesome.com\/b070c8f1df.js/,new class extends K{async _handle(e,t){let n,r=await t.cacheMatch(e);if(r);else try{r=await t.fetchAndCachePut(e)}catch(e){e instanceof Error&&(n=e)}if(!r)throw new q("no-response",{url:e.url,error:n});return r}}({plugins:[new ie({maxAgeSeconds:2592e3})]})),L(/^https:\/\/restaurant-api.dicoding.dev/,new class extends K{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(I)}async _handle(e,t){const n=t.fetchAndCachePut(e).catch((()=>{}));t.waitUntil(n);let r,s=await t.cacheMatch(e);if(s);else try{s=await n}catch(e){e instanceof Error&&(r=e)}if(!s)throw new q("no-response",{url:e.url,error:r});return s}}({cacheName:"dicoding-restaurant-api",plugins:[new ie({maxAgeSeconds:86400})]})),self.addEventListener("install",(function(){console.log("Service Worker: Installed"),self.skipWaiting()})),self.addEventListener("push",(function(e){console.log("Service Worker: Pushed");var t=e.data.json(),n={title:t.title,options:{body:t.options.body,icon:t.options.icon,image:t.options.image}};e.waitUntil(self.ServiceWorkerRegistration.showNotificaion(n.title,n.options))})),self.addEventListener("notificationclick",(function(e){e.notification.close();var t=function(){var e,t=(e=ce().mark((function e(){return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Notification has been clicked"),e.next=3,self.clients.openWindow("https://www.dicoding.com");case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function i(e){he(a,r,s,i,o,"next",e)}function o(e){he(a,r,s,i,o,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();e.waitUntil(t())}))})()})();
//# sourceMappingURL=sw.bundle.js.map
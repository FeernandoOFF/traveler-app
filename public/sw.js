if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const c=e=>n(e,t),o={module:{uri:t},exports:r,require:c};s[t]=Promise.all(a.map((e=>o[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1lHof9ayru0hXR5GJs7KQ/_buildManifest.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/1lHof9ayru0hXR5GJs7KQ/_middlewareManifest.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/1lHof9ayru0hXR5GJs7KQ/_ssgManifest.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/0b7b90cd.993ee57f6000ce1b.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/175-d91d90ca230cbd92.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/45-1677649f2652b98b.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/550.919f1c85fe4cb74c.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/748-d29557e1dcfd6c95.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/framework-6e1522ff39bfc9e8.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/main-3cc066b7c5dd6645.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/pages/_app-2856651689653b8b.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/pages/_error-a3f18418a2205cb8.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/pages/explore-55a0e9cbf24ac025.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/pages/favorites-4130dd1deb9b2a8d.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/pages/index-d70be695b0e46e4f.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/chunks/webpack-5283b5bfee505913.js",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/css/4577c77e19ae16a3.css",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/css/4d3a70f413151fc9.css",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/media/layers.ef6db872.png",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/media/marker-icon-2x.93fdb12c.png",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/_next/static/media/marker-shadow.612e3b52.png",revision:"1lHof9ayru0hXR5GJs7KQ"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"362a23feaa5d23f3d9da08d9774dde5a"},{url:"/icon-256x256.png",revision:"2fb414f6c8f76aac7046d99e0aafe0de"},{url:"/icon-384x384.png",revision:"aa0586e6ea9ed22b094f9729836d98ad"},{url:"/icon-512x512.png",revision:"f5124f61ed98d77a07a2fa27f1aebdf4"},{url:"/manifest.json",revision:"06d5b937b75c2efe6cf54eff2075b874"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

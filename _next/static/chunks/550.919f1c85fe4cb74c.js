(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[550],{49647:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(1413),o=t(67294),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]},name:"heart",theme:"outlined"},i=t(47833),c=function(n,e){return o.createElement(i.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:e,icon:u}))};c.displayName="HeartOutlined";var a=o.forwardRef(c)},52408:function(n,e,t){!function(n){"use strict";function e(e,t){var o=n.DomUtil.create("div",e,document.body),i=r(c(o),t),a=u(o,"width"),l=u(o,"height"),s=u(o,"margin-left"),f=u(o,"margin-top");return o.parentNode.removeChild(o),{Url:i[0],RetinaUrl:i[1],Size:[a,l],Anchor:[-s,-f]}}function t(e){var t=n.DomUtil.create("div",e,document.body),r=u(t,"margin-left"),o=u(t,"margin-top");return t.parentNode.removeChild(t),{Anchor:[r,o]}}function r(n,e){for(var t=/url\(['"]?([^"']*?)['"]?\)/gi,r=[],u=t.exec(n);u;)r.push(e?o(u[1]):u[1]),u=t.exec(n);return r}function o(n){return n.substr(n.lastIndexOf("/")+1)}function u(n,e){return parseInt(i(n,e),10)}function i(e,t){return n.DomUtil.getStyle(e,t)||n.DomUtil.getStyle(e,a(t))}function c(n){var e=i(n,"background-image");return e&&"none"!==e?e:i(n,"cursor")}function a(n){return n.replace(/-(\w)/g,(function(n,e){return e.toUpperCase()}))}n.Icon.Default.mergeOptions({iconUrl:null,iconRetinaUrl:null,shadowUrl:null,iconSize:null,iconAnchor:null,popupAnchor:null,tooltipAnchor:null,shadowSize:null,classNamePrefix:"leaflet-default-icon-"}),n.Icon.Default.include({_needsInit:!0,_getIconUrl:function(e){var t=this.options.imagePath||n.Icon.Default.imagePath||"";return this._needsInit&&this._initializeOptions(t),t+n.Icon.prototype._getIconUrl.call(this,e)},_initializeOptions:function(n){this._setOptions("icon",e,n),this._setOptions("shadow",e,n),this._setOptions("popup",t),this._setOptions("tooltip",t),this._needsInit=!1},_setOptions:function(n,e,t){var r=this.options,o=e(r.classNamePrefix+n,t);for(var u in o)r[n+u]=r[n+u]||o[u]}})}(t(45243))},70550:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return _}});var r=t(85893),o=t(67294);const u=(0,o.createContext)(null),i=u.Provider;function c(){const n=(0,o.useContext)(u);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}var a=t(45243);function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function s(n){let{children:e,className:t,id:r,placeholder:u,style:c,whenCreated:s,...f}=n;const p=(0,o.useRef)(null),d=function(n,e){const[t,r]=(0,o.useState)(null);return(0,o.useEffect)((()=>{if(null!==n.current&&null===t){const t=new a.Map(n.current,e);null!=e.center&&null!=e.zoom?t.setView(e.center,e.zoom):null!=e.bounds&&t.fitBounds(e.bounds,e.boundsOptions),null!=e.whenReady&&t.whenReady(e.whenReady),r(t)}}),[n,t,e]),t}(p,f),h=(0,o.useRef)(!1);(0,o.useEffect)((()=>{null!=d&&!1===h.current&&null!=s&&(h.current=!0,s(d))}),[d,s]),(0,o.useEffect)((()=>()=>{null==d||d.remove()}),[d]);const[m]=(0,o.useState)({className:t,id:r,style:c}),v=(0,o.useMemo)((()=>d?{__version:1,map:d}:null),[d]),g=v?o.createElement(i,{value:v},e):u??null;return o.createElement("div",l({},m,{ref:p}),g)}var f=t(73935);function p(n,e){return null==e?function(e,t){return(0,o.useRef)(n(e,t))}:function(t,r){const u=(0,o.useRef)(n(t,r)),i=(0,o.useRef)(t),{instance:c}=u.current;return(0,o.useEffect)((function(){i.current!==t&&(e(c,t,i.current),i.current=t)}),[c,t,r]),u}}function d(n,e){const t=(0,o.useRef)(e);(0,o.useEffect)((function(){e!==t.current&&null!=n.attributionControl&&(null!=t.current&&n.attributionControl.removeAttribution(t.current),null!=e&&n.attributionControl.addAttribution(e)),t.current=e}),[n,e])}function h(n,e){const t=(0,o.useRef)();(0,o.useEffect)((function(){return null!=e&&n.instance.on(e),t.current=e,function(){null!=t.current&&n.instance.off(t.current),t.current=null}}),[n,e])}function m(n,e){const t=n.pane??e.pane;return t?{...n,pane:t}:n}function v(n){return function(e){const t=c(),r=n(m(e,t),t);return d(t.map,e.attribution),h(r.current,e.eventHandlers),function(n,e){(0,o.useEffect)((function(){return(e.layerContainer??e.map).addLayer(n.instance),function(){var t;null==(t=e.layerContainer)||t.removeLayer(n.instance),e.map.removeLayer(n.instance)}}),[e,n])}(r.current,t),r}}const g=function(n){function e(e,t){const{instance:r}=n(e).current;return(0,o.useImperativeHandle)(t,(()=>r)),null}return(0,o.forwardRef)(e)}(v(p((function(n,e){let{url:t,...r}=n;return{instance:new a.TileLayer(t,m(r,e)),context:e}}),(function(n,e,t){const{opacity:r,zIndex:o}=e;null!=r&&r!==t.opacity&&n.setOpacity(r),null!=o&&o!==t.zIndex&&n.setZIndex(o)}))));const y=function(n,e){return function(n){function e(e,t){const{instance:r,context:u}=n(e).current;return(0,o.useImperativeHandle)(t,(()=>r)),null==e.children?null:o.createElement(i,{value:u},e.children)}return(0,o.forwardRef)(e)}(v(p(n,e)))}((function(n,e){let{position:t,...r}=n;const o=new a.Marker(t,r);return{instance:o,context:{...e,overlayContainer:o}}}),(function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())})),x=function(n,e){return function(n){function e(e,t){const[r,u]=(0,o.useState)(!1),{instance:i}=n(e,u).current;(0,o.useImperativeHandle)(t,(()=>i)),(0,o.useEffect)((function(){r&&i.update()}),[i,r,e.children]);const c=i._contentNode;return c?(0,f.createPortal)(e.children,c):null}return(0,o.forwardRef)(e)}(function(n,e){return function(t,r){const o=c(),u=n(m(t,o),o);return d(o.map,t.attribution),h(u.current,t.eventHandlers),e(u.current,o,t,r),u}}(p(n),e))}((function(n,e){return{instance:new a.Popup(n,e.overlayContainer),context:e}}),(function(n,e,t,r){const{onClose:u,onOpen:i,position:c}=t;(0,o.useEffect)((function(){const{instance:t}=n;function o(n){n.popup===t&&(t.update(),r(!0),null==i||i())}function a(n){n.popup===t&&(r(!1),null==u||u())}return e.map.on({popupopen:o,popupclose:a}),null==e.overlayContainer?(null!=c&&t.setLatLng(c),t.openOn(e.map)):e.overlayContainer.bindPopup(t),function(){var n;e.map.off({popupopen:o,popupclose:a}),null==(n=e.overlayContainer)||n.unbindPopup(),e.map.removeLayer(t)}}),[n,e,r,u,i,c])}));t(65729),t(17329),t(52408);var b=t(29473),w=t(49647),I=t(46921);function _(n){var e=n.center,t=n.filter,u=(0,I.r)(),i=u.favorites,c=u.handleFavorite,a=(0,o.useState)(null),l=a[0],f=a[1],p=(0,o.useState)(null),d=(p[0],p[1]),h=(0,o.useState)([]),m=h[0],v=h[1],_=(0,o.useCallback)((function(){d(l.getBounds());var n=l.getBounds(),e=n._northEast,r=n._southWest;(0,b.ph)(e,r,t).then((function(n){v(n)}))}),[l]);return(0,o.useEffect)((function(){if(null===l||void 0===l?void 0:l.on){l.on("moveend",_);var n=l.getBounds(),e=n._northEast,r=n._southWest;return(0,b.ph)(e,r,t).then((function(n){v(n)})),function(){l.off("move",_)}}}),[l,_]),(0,r.jsx)("div",{children:(0,r.jsxs)(s,{center:e,whenCreated:f,zoom:16,style:{height:"100vh",width:"100vw",zIndex:0},scrollWheelZoom:!0,children:[(0,r.jsx)(g,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=".concat("pk.eyJ1IjoiZmVlcm5hbmRvb2ZmIiwiYSI6ImNreXhnZHZucTBna20yenRibjYzNXB5amUifQ.wAErxzVmzKE75rk2PAYb3Q")}),null===m||void 0===m?void 0:m.map((function(n){var e=null===i||void 0===i?void 0:i.find((function(e){return e.place_id===n.properties.place_id}));return(0,r.jsx)(y,{position:[n.geometry.coordinates[1],n.geometry.coordinates[0]],children:(0,r.jsx)(x,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:n.properties.name}),(0,r.jsx)(w.Z,{onClick:function(){return c(n.properties)},className:"".concat(e?"bg-red-400 text-white":"bg-white text-red-400 "," absolute bottom-0 right-0 w-[30px] h-[30px] flex items-center justify-center  rounded-full text-xs shadow-md shadow-red-100")})]})})},n.properties.place_id)}))]})})}},17329:function(){},65729:function(){}}]);
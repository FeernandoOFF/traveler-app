(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{52408:function(n,e,t){!function(n){"use strict";function e(e,t){var o=n.DomUtil.create("div",e,document.body),i=r(c(o),t),l=u(o,"width"),a=u(o,"height"),s=u(o,"margin-left"),f=u(o,"margin-top");return o.parentNode.removeChild(o),{Url:i[0],RetinaUrl:i[1],Size:[l,a],Anchor:[-s,-f]}}function t(e){var t=n.DomUtil.create("div",e,document.body),r=u(t,"margin-left"),o=u(t,"margin-top");return t.parentNode.removeChild(t),{Anchor:[r,o]}}function r(n,e){for(var t=/url\(['"]?([^"']*?)['"]?\)/gi,r=[],u=t.exec(n);u;)r.push(e?o(u[1]):u[1]),u=t.exec(n);return r}function o(n){return n.substr(n.lastIndexOf("/")+1)}function u(n,e){return parseInt(i(n,e),10)}function i(e,t){return n.DomUtil.getStyle(e,t)||n.DomUtil.getStyle(e,l(t))}function c(n){var e=i(n,"background-image");return e&&"none"!==e?e:i(n,"cursor")}function l(n){return n.replace(/-(\w)/g,(function(n,e){return e.toUpperCase()}))}n.Icon.Default.mergeOptions({iconUrl:null,iconRetinaUrl:null,shadowUrl:null,iconSize:null,iconAnchor:null,popupAnchor:null,tooltipAnchor:null,shadowSize:null,classNamePrefix:"leaflet-default-icon-"}),n.Icon.Default.include({_needsInit:!0,_getIconUrl:function(e){var t=this.options.imagePath||n.Icon.Default.imagePath||"";return this._needsInit&&this._initializeOptions(t),t+n.Icon.prototype._getIconUrl.call(this,e)},_initializeOptions:function(n){this._setOptions("icon",e,n),this._setOptions("shadow",e,n),this._setOptions("popup",t),this._setOptions("tooltip",t),this._needsInit=!1},_setOptions:function(n,e,t){var r=this.options,o=e(r.classNamePrefix+n,t);for(var u in o)r[n+u]=r[n+u]||o[u]}})}(t(45243))},56289:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return w}});var r=t(85893),o=t(67294);const u=(0,o.createContext)(null),i=u.Provider;function c(){const n=(0,o.useContext)(u);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}var l=t(45243);function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function s(n){let{children:e,className:t,id:r,placeholder:u,style:c,whenCreated:s,...f}=n;const p=(0,o.useRef)(null),d=function(n,e){const[t,r]=(0,o.useState)(null);return(0,o.useEffect)((()=>{if(null!==n.current&&null===t){const t=new l.Map(n.current,e);null!=e.center&&null!=e.zoom?t.setView(e.center,e.zoom):null!=e.bounds&&t.fitBounds(e.bounds,e.boundsOptions),null!=e.whenReady&&t.whenReady(e.whenReady),r(t)}}),[n,t,e]),t}(p,f),h=(0,o.useRef)(!1);(0,o.useEffect)((()=>{null!=d&&!1===h.current&&null!=s&&(h.current=!0,s(d))}),[d,s]),(0,o.useEffect)((()=>()=>{null==d||d.remove()}),[d]);const[m]=(0,o.useState)({className:t,id:r,style:c}),v=(0,o.useMemo)((()=>d?{__version:1,map:d}:null),[d]),g=v?o.createElement(i,{value:v},e):u??null;return o.createElement("div",a({},m,{ref:p}),g)}var f=t(73935);function p(n,e){return null==e?function(e,t){return(0,o.useRef)(n(e,t))}:function(t,r){const u=(0,o.useRef)(n(t,r)),i=(0,o.useRef)(t),{instance:c}=u.current;return(0,o.useEffect)((function(){i.current!==t&&(e(c,t,i.current),i.current=t)}),[c,t,r]),u}}function d(n,e){const t=(0,o.useRef)(e);(0,o.useEffect)((function(){e!==t.current&&null!=n.attributionControl&&(null!=t.current&&n.attributionControl.removeAttribution(t.current),null!=e&&n.attributionControl.addAttribution(e)),t.current=e}),[n,e])}function h(n,e){const t=(0,o.useRef)();(0,o.useEffect)((function(){return null!=e&&n.instance.on(e),t.current=e,function(){null!=t.current&&n.instance.off(t.current),t.current=null}}),[n,e])}function m(n,e){const t=n.pane??e.pane;return t?{...n,pane:t}:n}function v(n){return function(e){const t=c(),r=n(m(e,t),t);return d(t.map,e.attribution),h(r.current,e.eventHandlers),function(n,e){(0,o.useEffect)((function(){return(e.layerContainer??e.map).addLayer(n.instance),function(){var t;null==(t=e.layerContainer)||t.removeLayer(n.instance),e.map.removeLayer(n.instance)}}),[e,n])}(r.current,t),r}}const g=function(n){function e(e,t){const{instance:r}=n(e).current;return(0,o.useImperativeHandle)(t,(()=>r)),null}return(0,o.forwardRef)(e)}(v(p((function(n,e){let{url:t,...r}=n;return{instance:new l.TileLayer(t,m(r,e)),context:e}}),(function(n,e,t){const{opacity:r,zIndex:o}=e;null!=r&&r!==t.opacity&&n.setOpacity(r),null!=o&&o!==t.zIndex&&n.setZIndex(o)}))));const y=function(n,e){return function(n){function e(e,t){const{instance:r,context:u}=n(e).current;return(0,o.useImperativeHandle)(t,(()=>r)),null==e.children?null:o.createElement(i,{value:u},e.children)}return(0,o.forwardRef)(e)}(v(p(n,e)))}((function(n,e){let{position:t,...r}=n;const o=new l.Marker(t,r);return{instance:o,context:{...e,overlayContainer:o}}}),(function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())})),b=function(n,e){return function(n){function e(e,t){const[r,u]=(0,o.useState)(!1),{instance:i}=n(e,u).current;(0,o.useImperativeHandle)(t,(()=>i)),(0,o.useEffect)((function(){r&&i.update()}),[i,r,e.children]);const c=i._contentNode;return c?(0,f.createPortal)(e.children,c):null}return(0,o.forwardRef)(e)}(function(n,e){return function(t,r){const o=c(),u=n(m(t,o),o);return d(o.map,t.attribution),h(u.current,t.eventHandlers),e(u.current,o,t,r),u}}(p(n),e))}((function(n,e){return{instance:new l.Popup(n,e.overlayContainer),context:e}}),(function(n,e,t,r){const{onClose:u,onOpen:i,position:c}=t;(0,o.useEffect)((function(){const{instance:t}=n;function o(n){n.popup===t&&(t.update(),r(!0),null==i||i())}function l(n){n.popup===t&&(r(!1),null==u||u())}return e.map.on({popupopen:o,popupclose:l}),null==e.overlayContainer?(null!=c&&t.setLatLng(c),t.openOn(e.map)):e.overlayContainer.bindPopup(t),function(){var n;e.map.off({popupopen:o,popupclose:l}),null==(n=e.overlayContainer)||n.unbindPopup(),e.map.removeLayer(t)}}),[n,e,r,u,i,c])}));t(65729),t(17329),t(52408);var x=t(34155);function w(){return(0,r.jsxs)(s,{center:[40.8054,-74.0241],zoom:14,scrollWheelZoom:!1,style:{height:"100vh",width:"100vw"},children:[(0,r.jsx)(g,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=".concat(x.env.NEXT_PUBLIC_MAPBOX)}),(0,r.jsx)(y,{position:[40.8054,-74.0241],draggable:!0,animate:!0,children:(0,r.jsx)(b,{children:"Hey ! you found me"})})]})}},17329:function(){},65729:function(){}}]);
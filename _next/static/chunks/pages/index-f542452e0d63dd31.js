(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{33685:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(61878)}])},474:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return n},API:function(){return i}});var r=s(85893),a=(s(67294),s(69285),s(29473),s(5152));function n(){var e=(0,a.default)((function(){return Promise.all([s.e(269),s.e(289)]).then(s.bind(s,56289))}),{loadableGenerated:{webpack:function(){return[56289]},modules:["explore.jsx -> ../components/MapExplore"]},ssr:!1});return(0,r.jsx)("div",{children:(0,r.jsx)(e,{})})}var i="AIzaSyDqP5bHVCYXLH0zuVsbNQpS0ZWVNbW-hRs"},61878:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d},Header:function(){return u},SearchComponent:function(){return x},CategoriesComponent:function(){return m},ResultsComponent:function(){return h},StarRating:function(){return g}});var r=s(85893),a=s(62816),n=s(9529),i=s(71511),l=s(1803),o=s(9008),c=s(67294);s(69285),s(29473);function d(){return(0,r.jsxs)("div",{className:"bg-gray-100",children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Traveler App | FeernandoOFF"}),(0,r.jsx)("meta",{name:"description",content:"If your gonna travel around the world or your city you absoloutley neet this Traveler's app to know where your going"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:" min-h-[100vh] w-11/12 mx-auto",children:[(0,r.jsx)(u,{}),(0,r.jsx)(x,{}),(0,r.jsx)(m,{}),(0,r.jsx)(h,{})]})]})}var u=function(){return(0,r.jsx)("header",{className:"py-6",children:(0,r.jsxs)("nav",{className:"flex justify-between mx-auto items-center",children:[(0,r.jsxs)("div",{className:"left flex justify-between items-center",children:[(0,r.jsx)(i.Z,{className:"flex items-center justify-center shadow-md cursor-pointer",style:{backgroundColor:"#ff8348"},icon:(0,r.jsx)(a.P1s,{})}),(0,r.jsx)("p",{className:"ml-4 font-semibold",children:"Hi, Jennifer!"})]}),(0,r.jsx)("div",{className:"right",children:(0,r.jsx)(l.E.div,{whileTap:{scale:1.14,backgroundColor:"#F12222",color:"#fff"},className:"p-3 flex items-center rounded-full bg-white text-red-400 shadow-md shadow-red-100 cursor-pointer",children:(0,r.jsx)(a.FeJ,{})})})]})})},x=function(){return(0,r.jsxs)("div",{className:"mt-[3vh]",children:[(0,r.jsxs)("h5",{className:"font-bold text-3xl",children:["Where do",(0,r.jsx)("br",{})," you want to go?"]}),(0,r.jsxs)(l.E.div,{className:"relative my-[5vh] ",whileFocus:{backgroundColor:"red"},children:[(0,r.jsx)("input",{type:"text",className:" mx-auto px-3 py-4 rounded-xl shadow-sm border-none outline-none bg-white text-gray-800 w-full ",placeholder:"Search for places"}),(0,r.jsx)(l.E.div,{whileHover:{transform:"rotateY(360deg)",transition:{duration:.6}},className:"absolute right-3 top-2 flex justify-center items-center p-3 rounded-full bg-white shadow-sm shadow-yellow-500 text-yellow-600 font-semibold",children:(0,r.jsx)(a.l62,{className:""})})]})]})},m=function(){var e=(0,c.useState)("hotels"),t=e[0],s=e[1];return(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsx)("h5",{className:"subtitle",children:"Categories"}),(0,r.jsxs)("div",{className:"categories_list flex justify-start flex-nowrap overflow-x-scroll",children:[(0,r.jsx)(f,{value:"hotels",setCategories:s,categories:t}),(0,r.jsx)(f,{value:"restaurants",setCategories:s,categories:t}),(0,r.jsx)(f,{value:"attractions",setCategories:s,categories:t})]})]})},h=function(){var e=(0,c.useState)(0),t=e[0],s=e[1],i=(0,r.jsxs)("div",{children:[(0,r.jsx)(g,{className:"my-2 text-gray-700 font-semibold ".concat(0==t&&"text-blue-400"),setStars:s,stars:t,value:0,children:"All"}),(0,r.jsx)(g,{setStars:s,stars:t,value:3}),(0,r.jsx)(g,{setStars:s,stars:t,value:4}),(0,r.jsx)(g,{setStars:s,stars:t,value:4.5})]});return(0,r.jsxs)("div",{className:"mt-[5vh]",children:[(0,r.jsxs)("div",{className:"flex justify-between px-2 items-center",children:[(0,r.jsx)("h5",{className:"subtitle",children:"Top trips"}),(0,r.jsx)("div",{className:"mr-4",children:(0,r.jsx)(n.Z,{content:i,title:"Rating",placement:"left",trigger:"click",children:(0,r.jsx)(a._iA,{className:"text-lg "})})})]}),(0,r.jsxs)("div",{className:"topTrip_container flex flex-wrap w-full justify-between ",children:[p(),p(),p(),p()]})]})};function f(e){var t=e.value,s=e.setCategories,a=e.categories;return(0,r.jsxs)(l.E.div,{onClick:function(){return s(t)},initial:{opacity:0},animate:{opacity:1},className:"\n    categories_item lg:min-w-[200px] min-w-[150px] min-h-[40px] p-3 rounded-xl bg-white flex items-center mx-4 my-4\n    ".concat(a==t&&"bg-gray-300 shadow-lg"),children:[(0,r.jsx)("div",{className:"image h-[35px] w-[35px] bg-gray-200 rounded-lg "}),(0,r.jsx)("p",{className:"font-medium lg:ml-4 lg:text-base ml-2 capitalize",children:t})]})}function p(){return(0,r.jsxs)(l.E.div,{initial:{opacity:0},transition:{duration:.6,delay:.3},whileInView:{opacity:1},className:"topTrip_item bg-gray-50 rounded-lg p-2 w-[48%] lg:min-w-[300px] lg:max-w-[200px] my-8 shadow-md",children:[(0,r.jsxs)("div",{className:"topTrip_image min-w-full min-h-[140px] bg-gray-400 rounded-md relative shadow-lg",children:[(0,r.jsx)("p",{className:"right-2 top-2 p-1 inline-block rounded-md bg-white text-xs absolute bg-clip-padding text-gray-500 opacity-80",style:{backdropFilter:"blur(100px)",backgroundColor:"rgb(255 255 255 / 56%)"},children:"$120"}),(0,r.jsx)("img",{className:"max-w-[100%] rounded-md",src:"https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",alt:"Background"})]}),(0,r.jsx)("div",{className:"topTrip_info py-3",children:(0,r.jsxs)("div",{className:"left relative mt-3",children:[(0,r.jsx)("h6",{className:"font-semibold text-sm ",children:"Banijr Kanal "}),(0,r.jsx)("span",{className:"text-gray-400 font-normal text-xs",children:"Camp"}),(0,r.jsx)(a.F8D,{className:"absolute bottom-0 right-0 p-2 bg-white rounded-full text-xs text-red-400 shadow-md shadow-red-100"})]})})]})}function g(e){var t=e.setStars,s=e.stars,a=e.value,n=e.children;return(0,r.jsx)("p",{className:"my-2 text-gray-700 font-semibold ".concat(s==a&&"text-blue-400"),onClick:function(e){var s=e.target;return t(s.dataset.value)},"data-value":a,children:n||" Above ".concat(a," stars")})}},29473:function(e,t,s){"use strict";var r=s(35666),a=s.n(r),n=s(9669),i=s.n(n),l=s(474);function o(e,t,s,r,a,n,i){try{var l=e[n](i),o=l.value}catch(c){return void s(c)}l.done?t(o):Promise.resolve(o).then(r,a)}var c;c=a().mark((function e(t,s){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,r={method:"get",url:"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=".concat(l.API),headers:{}},e.next=5,i()(r);case 5:return n=e.sent,console.log(n),e.abrupt("return",[]);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))}},function(e){e.O(0,[774,892,22,888,179],(function(){return t=33685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
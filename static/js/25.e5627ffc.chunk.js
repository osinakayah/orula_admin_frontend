(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{236:function(e,a,t){"use strict";var r=t(1),l=t.n(r);a.a=l.a.createContext(null)},240:function(e,a,t){"use strict";var r=t(4),l=t(9),c=t(228),s=t.n(c),m=t(1),n=t.n(m),i=t(229),o=["xl","lg","md","sm","xs"],d=n.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.className,m=e.as,d=void 0===m?"div":m,E=Object(l.a)(e,["bsPrefix","className","as"]),f=Object(i.b)(t,"col"),N=[],u=[];return o.forEach(function(e){var a,t,r,l=E[e];if(delete E[e],null!=l&&"object"===typeof l){var c=l.span;a=void 0===c||c,t=l.offset,r=l.order}else a=l;var s="xs"!==e?"-"+e:"";null!=a&&N.push(!0===a?""+f+s:""+f+s+"-"+a),null!=r&&u.push("order"+s+"-"+r),null!=t&&u.push("offset"+s+"-"+t)}),N.length||N.push(f),n.a.createElement(d,Object(r.a)({},E,{ref:a,className:s.a.apply(void 0,[c].concat(N,u))}))});d.displayName="Col",a.a=d},245:function(e,a,t){"use strict";var r=t(4),l=t(9),c=t(12),s=t(228),m=t.n(s),n=t(1),i=t.n(n),o=t(229),d=function(e){function a(){return e.apply(this,arguments)||this}return Object(c.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.bsPrefix,t=e.noGutters,c=e.as,s=void 0===c?"div":c,n=e.className,o=Object(l.a)(e,["bsPrefix","noGutters","as","className"]);return i.a.createElement(s,Object(r.a)({},o,{className:m()(n,a,t&&"no-gutters")}))},a}(i.a.Component);d.defaultProps={noGutters:!1},a.a=Object(o.a)(d,"row")},249:function(e,a,t){"use strict";var r=t(4),l=t(9),c=t(228),s=t.n(c),m=t(1),n=t.n(m),i=t(229),o=t(237),d=function(e){return n.a.forwardRef(function(a,t){return n.a.createElement("div",Object(r.a)({},a,{ref:t,className:s()(a.className,e)}))})},E=t(236),f=n.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.className,m=e.variant,o=e.as,d=void 0===o?"img":o,E=Object(l.a)(e,["bsPrefix","className","variant","as"]),f=Object(i.b)(t,"card-img");return n.a.createElement(d,Object(r.a)({ref:a,className:s()(m?f+"-"+m:f,c)},E))});f.displayName="CardImg",f.defaultProps={variant:null};var N=f,u=d("h5"),b=d("h6"),v=Object(o.a)("card-body"),h=n.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.className,o=e.bg,d=e.text,f=e.border,N=e.body,u=e.children,b=e.as,h=void 0===b?"div":b,p=Object(l.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(i.b)(t,"card"),g=Object(m.useMemo)(function(){return{cardHeaderBsPrefix:x+"-header"}},[x]);return n.a.createElement(E.a.Provider,{value:g},n.a.createElement(h,Object(r.a)({ref:a},p,{className:s()(c,x,o&&"bg-"+o,d&&"text-"+d,f&&"border-"+f)}),N?n.a.createElement(v,null,u):u))});h.displayName="Card",h.defaultProps={body:!1},h.Img=N,h.Title=Object(o.a)("card-title",{Component:u}),h.Subtitle=Object(o.a)("card-subtitle",{Component:b}),h.Body=v,h.Link=Object(o.a)("card-link",{Component:"a"}),h.Text=Object(o.a)("card-text",{Component:"p"}),h.Header=Object(o.a)("card-header"),h.Footer=Object(o.a)("card-footer"),h.ImgOverlay=Object(o.a)("card-img-overlay");a.a=h},348:function(e,a,t){"use strict";t.r(a);var r=t(30),l=t(31),c=t(33),s=t(32),m=t(34),n=t(1),i=t.n(n),o=t(245),d=t(240),E=t(249),f=(t(94),t(66)),N=t(232),u=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(f.a,null,i.a.createElement(o.a,null,i.a.createElement(d.a,{md:12,xl:12},i.a.createElement("h6",{className:"mb-4 f-w-600 text-c-red"},"REQUESTS MADE")),i.a.createElement(d.a,{md:6,xl:4},i.a.createElement(E.a,null,i.a.createElement(E.a.Body,null,i.a.createElement("h6",{className:"mb-4"},"Today"),i.a.createElement("div",{className:"row d-flex align-items-center"},i.a.createElement("div",{className:"col-8"},i.a.createElement("h4",{className:"f-w-300 d-flex align-items-center m-b-0"},i.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," \u20a6110,000")),i.a.createElement("div",{className:"col-4 text-right"},i.a.createElement("p",{className:"m-b-0"},i.a.createElement("i",{className:"feather icon-box f-22 text-c-green"}),"26"))),i.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},i.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}))))),i.a.createElement(d.a,{md:6,xl:4},i.a.createElement(E.a,null,i.a.createElement(E.a.Body,null,i.a.createElement("h6",{className:"mb-4"},"Month-Till-Date"),i.a.createElement("div",{className:"row d-flex align-items-center"},i.a.createElement("div",{className:"col-8"},i.a.createElement("h4",{className:"f-w-300 d-flex align-items-center m-b-0"},i.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," \u20a62,942,050")),i.a.createElement("div",{className:"col-4 text-right"},i.a.createElement("p",{className:"m-b-0"},i.a.createElement("i",{className:"feather icon-box f-22 text-c-green"}),"136"))),i.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},i.a.createElement("div",{className:"progress-bar progress-c-theme2",role:"progressbar",style:{width:"100%"},"aria-valuenow":"35","aria-valuemin":"0","aria-valuemax":"100"}))))),i.a.createElement(d.a,{xl:4},i.a.createElement(E.a,null,i.a.createElement(E.a.Body,null,i.a.createElement("h6",{className:"mb-4"},"Year-Till-Date"),i.a.createElement("div",{className:"row d-flex align-items-center"},i.a.createElement("div",{className:"col-8"},i.a.createElement("h4",{className:"f-w-300 d-flex align-items-center m-b-0"},i.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," \u20a619,638,320")),i.a.createElement("div",{className:"col-4 text-right"},i.a.createElement("p",{className:"m-b-0"},i.a.createElement("i",{className:"feather icon-box f-22 text-c-green"}),"670"))),i.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},i.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"100%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"}))))),i.a.createElement(d.a,{md:12,xl:12},i.a.createElement("h6",{className:"mb-4 f-w-600 text-c-red"},"DELIVERIES DONE")),i.a.createElement(d.a,{md:6,xl:4},i.a.createElement(E.a,null,i.a.createElement(E.a.Body,null,i.a.createElement("h6",{className:"mb-4"},"Today"),i.a.createElement("div",{className:"row d-flex align-items-center"},i.a.createElement("div",{className:"col-8"},i.a.createElement("h4",{className:"f-w-300 d-flex align-items-center m-b-0"},i.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," \u20a6110,000")),i.a.createElement("div",{className:"col-4 text-right"},i.a.createElement("p",{className:"m-b-0"},i.a.createElement("i",{className:"feather icon-wind f-22 text-c-green"}),"26"))),i.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},i.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}))))),i.a.createElement(d.a,{md:6,xl:4},i.a.createElement(E.a,null,i.a.createElement(E.a.Body,null,i.a.createElement("h6",{className:"mb-4"},"Month-Till-Date"),i.a.createElement("div",{className:"row d-flex align-items-center"},i.a.createElement("div",{className:"col-8"},i.a.createElement("h4",{className:"f-w-300 d-flex align-items-center m-b-0"},i.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," \u20a62,942,050")),i.a.createElement("div",{className:"col-4 text-right"},i.a.createElement("p",{className:"m-b-0"},i.a.createElement("i",{className:"feather icon-wind f-22 text-c-green"}),"136"))),i.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},i.a.createElement("div",{className:"progress-bar progress-c-theme2",role:"progressbar",style:{width:"100%"},"aria-valuenow":"35","aria-valuemin":"0","aria-valuemax":"100"}))))),i.a.createElement(d.a,{xl:4},i.a.createElement(E.a,null,i.a.createElement(E.a.Body,null,i.a.createElement("h6",{className:"mb-4"},"Year-Till-Date"),i.a.createElement("div",{className:"row d-flex align-items-center"},i.a.createElement("div",{className:"col-8"},i.a.createElement("h4",{className:"f-w-300 d-flex align-items-center m-b-0"},i.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," \u20a619,638,320")),i.a.createElement("div",{className:"col-4 text-right"},i.a.createElement("p",{className:"m-b-0"},i.a.createElement("i",{className:"feather icon-wind f-22 text-c-green"}),"670"))),i.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},i.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"100%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"}))))),i.a.createElement(d.a,{md:12,xl:12},i.a.createElement("h6",{className:"mb-4 f-w-600 text-c-red"},"RECOVERIES")),i.a.createElement(d.a,{md:6,xl:4},i.a.createElement(E.a,null,i.a.createElement(E.a.Body,null,i.a.createElement("h6",{className:"mb-4"},"Year-Till-Date"),i.a.createElement("div",{className:"row d-flex align-items-center"},i.a.createElement("div",{className:"col-8"},i.a.createElement("h4",{className:"f-w-300 d-flex align-items-center m-b-0"},i.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," \u20a619,638,320")),i.a.createElement("div",{className:"col-4 text-right"},i.a.createElement("p",{className:"m-b-0"},i.a.createElement("i",{className:"feather icon-wind f-22 text-c-green"}),"670"))),i.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},i.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"100%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"}))))),i.a.createElement(d.a,{md:6,xl:4},i.a.createElement(E.a,null,i.a.createElement(E.a.Body,null,i.a.createElement("h6",{className:"mb-4"},"Year-Till-Date"),i.a.createElement("div",{className:"row d-flex align-items-center"},i.a.createElement("div",{className:"col-8"},i.a.createElement("h4",{className:"f-w-300 d-flex align-items-center m-b-0"},i.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," \u20a619,638,320")),i.a.createElement("div",{className:"col-4 text-right"},i.a.createElement("p",{className:"m-b-0"},i.a.createElement("i",{className:"feather icon-wind f-22 text-c-green"}),"670"))),i.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},i.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"100%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"}))))),i.a.createElement(d.a,{md:6,xl:4},i.a.createElement(E.a,{className:"card-event"},i.a.createElement(E.a.Body,null,i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("div",{className:"col"},i.a.createElement("h6",{className:"m-0"},"Pending Recoveries"))),i.a.createElement("h2",{className:"mt-2 f-w-300"},"45",i.a.createElement("sub",{className:"text-muted f-14"},"Recoveries")),i.a.createElement("a",{href:N.a.BLANK_LINK,className:"label theme-bg2 text-white f-12"},"View All Recoveries"),i.a.createElement("i",{className:"fa fa-bolt text-c-purple f-50"})))),i.a.createElement(d.a,{md:6,xl:4},i.a.createElement(E.a,null,i.a.createElement(E.a.Body,{className:"border-bottom"},i.a.createElement("div",{className:"row d-flex align-items-center"},i.a.createElement("div",{className:"col-auto"},i.a.createElement("i",{className:"feather icon-zap f-30 text-c-green"})),i.a.createElement("div",{className:"col"},i.a.createElement("h3",{className:"f-w-300"},"235"),i.a.createElement("span",{className:"d-block text-uppercase"},"total Senders")))),i.a.createElement(E.a.Body,null,i.a.createElement("div",{className:"row d-flex align-items-center"},i.a.createElement("div",{className:"col-auto"},i.a.createElement("i",{className:"feather icon-map-pin f-30 text-c-blue"})),i.a.createElement("div",{className:"col"},i.a.createElement("h3",{className:"f-w-300"},"200"),i.a.createElement("span",{className:"d-block text-uppercase"},"total Dispatchers"))))))))}}]),a}(i.a.Component);a.default=u}}]);
//# sourceMappingURL=25.e5627ffc.chunk.js.map
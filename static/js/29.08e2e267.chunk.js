(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{213:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(11),i=a(14),o=a(12),l=a(13),s=a(0),c=a.n(s),d=a(82),m=a(74),u=a(24),p=a(59),h=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(m.a,null,c.a.createElement(p.a,{title:"Update Settings",isOption:!0},c.a.createElement("p",null,'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')))))}}]),t}(s.Component);t.default=h},59:function(e,t,a){"use strict";var n=a(19),r=a(10),i=a(11),o=a(14),l=a(12),s=a(13),c=a(0),d=a.n(c),m=a(115),u=a(68),p=a(71),h=a(62),f=a.n(h),E=a(24),b=a(58),g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={isOption:a.props.isOption,anotherOption:a.props.anotherOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},a.cardReloadHandler=function(){a.setState({loadCard:!0}),setInterval(function(){a.setState({loadCard:!1})},3e3)},a.cardRemoveHandler=function(){a.setState({cardRemove:!0})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t,a,r,i,o=this,l=[];return this.state.isOption&&(a=d.a.createElement("div",{className:"card-header-right"},d.a.createElement(m.a,{alignRight:!0,className:"btn-group card-option"},d.a.createElement(m.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},d.a.createElement("i",{className:"feather icon-more-horizontal"})),d.a.createElement(m.a.Menu,{as:"ul",className:"list-unstyled card-option"},d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:function(){o.setState(function(e){return{fullCard:!e.fullCard}})}},d.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),d.a.createElement("a",{href:b.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:function(){o.setState(function(e){return{collapseCard:!e.collapseCard}})}},d.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),d.a.createElement("a",{href:b.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},d.a.createElement("i",{className:"feather icon-refresh-cw"}),d.a.createElement("a",{href:b.a.BLANK_LINK}," Reload ")),d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},d.a.createElement("i",{className:"feather icon-trash"}),d.a.createElement("a",{href:b.a.BLANK_LINK}," Remove ")))))),this.state.anotherOption&&(a=d.a.createElement("div",{className:"card-header-right"},d.a.createElement(m.a,{alignRight:!0,className:"btn-group card-option"},d.a.createElement(m.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},d.a.createElement("i",{className:"feather icon-more-horizontal"})),d.a.createElement(m.a.Menu,{as:"ul",className:"list-unstyled card-option"},d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:function(){o.setState(function(e){return{fullCard:!e.fullCard}})}},d.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),d.a.createElement("a",{href:b.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:function(){o.setState(function(e){return{collapseCard:!e.collapseCard}})}},d.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),d.a.createElement("a",{href:b.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},d.a.createElement("i",{className:"feather icon-refresh-cw"}),d.a.createElement("a",{href:b.a.BLANK_LINK}," Reload ")))))),r=d.a.createElement(u.a.Header,null,d.a.createElement(u.a.Title,{as:"h5"},this.props.title),a),this.state.fullCard&&(l=[].concat(Object(n.a)(l),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(l=[].concat(Object(n.a)(l),["card-load"]),t=d.a.createElement("div",{className:"card-loader"},d.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(l=[].concat(Object(n.a)(l),["d-none"])),this.props.cardClass&&(l=[].concat(Object(n.a)(l),[this.props.cardClass])),i=d.a.createElement(u.a,{className:l.join(" "),style:e},r,d.a.createElement(p.a,{in:!this.state.collapseCard},d.a.createElement("div",null,d.a.createElement(u.a.Body,null,this.props.children))),t),d.a.createElement(E.a,null,i)}}]),t}(c.Component);t.a=f()(g)},68:function(e,t,a){"use strict";var n=a(7),r=a(8),i=a(9),o=a(55),l=a.n(o),s=a(0),c=a.n(s),d=a(56),m=a(61),u=function(e){return c.a.forwardRef(function(t,a){return c.a.createElement("div",Object(n.a)({},t,{ref:a,className:l()(t.className,e)}))})},p=a(60),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,i=e.variant,o=e.as,s=Object(r.a)(e,["bsPrefix","className","variant","as"]),d=i?t+"-"+i:t;return c.a.createElement(o,Object(n.a)({className:l()(d,a)},s))},t}(c.a.Component);h.defaultProps={as:"img",variant:null};var f=Object(d.a)(h,"card-img"),E=Object(m.a)("card-body"),b=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}return Object(i.a)(t,e),t.getDerivedStateFromProps=function(e){return{cardContext:{cardHeaderBsPrefix:e.bsPrefix+"-header"}}},t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,i=e.as,o=e.bg,s=e.text,d=e.border,m=e.body,u=e.children,h=Object(r.a)(e,["bsPrefix","className","as","bg","text","border","body","children"]),f=l()(a,t,o&&"bg-"+o,s&&"text-"+s,d&&"border-"+d);return c.a.createElement(p.a.Provider,{value:this.state.cardContext},c.a.createElement(i,Object(n.a)({className:f},h),m?c.a.createElement(E,null,u):u))},t}(c.a.Component);b.defaultProps={as:"div",body:!1};var g=u("h5"),N=u("h6"),O=Object(d.a)(b,"card");O.Img=f,O.Title=Object(m.a)("card-title",{Component:g}),O.Subtitle=Object(m.a)("card-subtitle",{Component:N}),O.Body=E,O.Link=Object(m.a)("card-link",{Component:"a"}),O.Text=Object(m.a)("card-text",{Component:"p"}),O.Header=Object(m.a)("card-header"),O.Footer=Object(m.a)("card-footer"),O.ImgOverlay=Object(m.a)("card-img-overlay");t.a=O},71:function(e,t,a){"use strict";var n,r=a(7),i=a(8),o=a(9),l=a(55),s=a.n(l),c=a(69),d=a.n(c),m=a(0),u=a.n(m),p=a(66),h=a.n(p),f=a(63),E=a.n(f),b=a(67),g=a(65),N={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var O=((n={})[f.EXITED]="collapse",n[f.EXITING]="collapsing",n[f.ENTERING]="collapsing",n[f.ENTERED]="collapse show",n),C={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],n=N[e];return a+parseInt(d()(t,n[0]),10)+parseInt(d()(t,n[1]),10)}},v=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var a=t.getDimension();e.style[a]=t._getScrollDimensionValue(e,a)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var a=t.getDimension();e.style[a]=t.props.getDimensionValue(a,e)+"px",Object(b.a)(e)},t.handleExiting=function(e){e.style[t.getDimension()]="0"},t}Object(o.a)(t,e);var a=t.prototype;return a.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},a._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},a.render=function(){var e=this,t=this.props,a=t.onEnter,n=t.onEntering,o=t.onEntered,l=t.onExit,c=t.onExiting,d=t.className,m=t.children,p=Object(i.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete p.dimension,delete p.getDimensionValue;var f=Object(g.a)(this.handleEnter,a),b=Object(g.a)(this.handleEntering,n),N=Object(g.a)(this.handleEntered,o),C=Object(g.a)(this.handleExit,l),v=Object(g.a)(this.handleExiting,c);return u.a.createElement(E.a,Object(r.a)({addEndListener:h.a},p,{"aria-expanded":p.role?p.in:null,onEnter:f,onEntering:b,onEntered:N,onExit:C,onExiting:v}),function(t,a){return u.a.cloneElement(m,Object(r.a)({},a,{className:s()(d,m.props.className,O[t],"width"===e.getDimension()&&"width")}))})},t}(u.a.Component);v.defaultProps=C,t.a=v}}]);
//# sourceMappingURL=29.08e2e267.chunk.js.map
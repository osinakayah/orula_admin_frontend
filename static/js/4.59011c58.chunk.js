(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{232:function(e,a,t){"use strict";var l=t(1),r=t.n(l).a.createContext({controlId:void 0});a.a=r},234:function(e,a,t){"use strict";var l=t(49),r=t(31),c=t(32),s=t(34),n=t(33),m=t(35),i=t(1),o=t.n(i),d=t(290),f=t(250),E=t(408),N=t(236),b=t.n(N),u=t(67),h=t(233),p=function(e){function a(){var e,t;Object(r.a)(this,a);for(var l=arguments.length,c=new Array(l),m=0;m<l;m++)c[m]=arguments[m];return(t=Object(s.a)(this,(e=Object(n.a)(a)).call.apply(e,[this].concat(c)))).state={isOption:t.props.isOption,anotherOption:t.props.anotherOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},t.cardReloadHandler=function(){t.setState({loadCard:!0}),setInterval(function(){t.setState({loadCard:!1})},6e3)},t.cardRemoveHandler=function(){t.setState({cardRemove:!0})},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e,a,t,r,c,s=this,n=[];return this.state.isOption&&(t=o.a.createElement("div",{className:"card-header-right"},o.a.createElement(d.a,{alignRight:!0,className:"btn-group card-option"},o.a.createElement(d.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},o.a.createElement("i",{className:"feather icon-more-horizontal"})),o.a.createElement(d.a.Menu,{as:"ul",className:"list-unstyled card-option"},o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){s.setState(function(e){return{fullCard:!e.fullCard}})}},o.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),o.a.createElement("a",{href:h.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){s.setState(function(e){return{collapseCard:!e.collapseCard}})}},o.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),o.a.createElement("a",{href:h.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},o.a.createElement("i",{className:"feather icon-refresh-cw"}),o.a.createElement("a",{href:h.a.BLANK_LINK}," Reload ")),o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},o.a.createElement("i",{className:"feather icon-trash"}),o.a.createElement("a",{href:h.a.BLANK_LINK}," Remove ")))))),this.state.anotherOption&&(t=o.a.createElement("div",{className:"card-header-right"},o.a.createElement(d.a,{alignRight:!0,className:"btn-group card-option"},o.a.createElement(d.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},o.a.createElement("i",{className:"feather icon-more-horizontal"})),o.a.createElement(d.a.Menu,{as:"ul",className:"list-unstyled card-option"},o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){s.setState(function(e){return{fullCard:!e.fullCard}})}},o.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),o.a.createElement("a",{href:h.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){s.setState(function(e){return{collapseCard:!e.collapseCard}})}},o.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),o.a.createElement("a",{href:h.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},o.a.createElement("i",{className:"feather icon-refresh-cw"}),o.a.createElement("a",{href:h.a.BLANK_LINK}," Reload ")))))),r=o.a.createElement(f.a.Header,null,o.a.createElement(f.a.Title,{as:"h5"},this.props.title),t),this.state.fullCard&&(n=[].concat(Object(l.a)(n),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(n=[].concat(Object(l.a)(n),["card-load"]),a=o.a.createElement("div",{className:"card-loader"},o.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(n=[].concat(Object(l.a)(n),["d-none"])),this.props.cardClass&&(n=[].concat(Object(l.a)(n),[this.props.cardClass])),c=o.a.createElement(f.a,{className:n.join(" "),style:e},r,o.a.createElement(E.a,{in:!this.state.collapseCard},o.a.createElement("div",null,o.a.createElement(f.a.Body,null,this.props.children))),a,void 0),o.a.createElement(u.a,null,c)}}]),a}(i.Component);a.a=b()(p)},239:function(e,a,t){"use strict";var l=function(){};e.exports=l},240:function(e,a,t){"use strict";var l=t(4),r=t(10),c=t(229),s=t.n(c),n=t(1),m=t.n(n),i=t(12),o=t.n(i),d={type:o.a.string.isRequired,as:o.a.elementType},f=m.a.forwardRef(function(e,a){var t=e.as,c=void 0===t?"div":t,n=e.className,i=e.type,o=Object(r.a)(e,["as","className","type"]);return m.a.createElement(c,Object(l.a)({},o,{ref:a,className:s()(n,i&&i+"-feedback")}))});f.displayName="Feedback",f.propTypes=d,f.defaultProps={type:"valid"},a.a=f},244:function(e,a,t){"use strict";var l=t(4),r=t(10),c=t(229),s=t.n(c),n=t(1),m=t.n(n),i=(t(239),t(240)),o=t(232),d=t(230),f=m.a.forwardRef(function(e,a){var t,c,i=e.bsPrefix,f=e.type,E=e.size,N=e.id,b=e.className,u=e.isValid,h=e.isInvalid,p=e.plaintext,v=e.readOnly,x=e.as,g=void 0===x?"input":x,w=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),y=Object(n.useContext)(o.a).controlId;if(i=Object(d.b)(i,"form-control"),p)(c={})[i+"-plaintext"]=!0,t=c;else if("file"===f){var O;(O={})[i+"-file"]=!0,t=O}else{var C;(C={})[i]=!0,C[i+"-"+E]=E,t=C}return m.a.createElement(g,Object(l.a)({},w,{type:f,ref:a,readOnly:v,id:N||y,className:s()(b,t,u&&"is-valid",h&&"is-invalid")}))});f.displayName="FormControl",f.Feedback=i.a,a.a=f},276:function(e,a,t){"use strict";var l=t(4),r=t(10),c=t(229),s=t.n(c),n=t(1),m=t.n(n),i=t(238),o=t(230),d=t(232),f=m.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.className,i=e.children,f=e.controlId,E=e.as,N=void 0===E?"div":E,b=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(o.b)(t,"form-group");var u=Object(n.useMemo)(function(){return{controlId:f}},[f]);return m.a.createElement(d.a.Provider,{value:u},m.a.createElement(N,Object(l.a)({},b,{ref:a,className:s()(c,t)}),i))});f.displayName="FormGroup";var E=f,N=t(244),b=t(240),u=m.a.forwardRef(function(e,a){var t=e.id,c=e.bsPrefix,i=e.className,f=e.isValid,E=e.isInvalid,N=e.isStatic,b=Object(r.a)(e,["id","bsPrefix","className","isValid","isInvalid","isStatic"]);c=Object(o.b)(c,"form-check-input");var u=Object(n.useContext)(d.a),h=u.controlId,p=u.custom;return m.a.createElement("input",Object(l.a)({},b,{ref:a,id:t||h,className:s()(i,!p&&c,p&&"custom-control-input",f&&"is-valid",E&&"is-invalid",N&&"position-static")}))});u.displayName="FormCheckInput",u.defaultProps={type:"checkbox"};var h=u,p=m.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.className,i=e.htmlFor,f=Object(r.a)(e,["bsPrefix","className","htmlFor"]);t=Object(o.b)(t,"form-check-label");var E=Object(n.useContext)(d.a),N=E.controlId,b=E.custom;return m.a.createElement("label",Object(l.a)({},f,{ref:a,htmlFor:i||N,className:s()(c,!b&&t,b&&"custom-control-label")}))});p.displayName="FormCheckLabel",p.defaultProps={type:"checkbox"};var v=p,x=m.a.forwardRef(function(e,a){var t=e.id,c=e.bsPrefix,i=e.inline,f=e.disabled,E=e.isValid,N=e.isInvalid,u=e.feedback,p=e.className,x=e.style,g=e.title,w=e.type,y=e.label,O=e.children,C=e.custom,j=Object(r.a)(e,["id","bsPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom"]);c=Object(o.b)(c,"form-check");var I=Object(n.useContext)(d.a).controlId,k=Object(n.useMemo)(function(){return{controlId:t||I,custom:C}},[I,C,t]),P=null!=y&&!1!==y&&!O,L=m.a.createElement(h,Object(l.a)({},j,{type:w,ref:a,isValid:E,isInvalid:N,isStatic:!P,disabled:f}));return m.a.createElement(d.a.Provider,{value:k},m.a.createElement("div",{style:x,className:s()(p,!C&&c,C&&"custom-control custom-"+w,i&&(C?"custom-control":c)+"-inline")},O||m.a.createElement(m.a.Fragment,null,L,P&&m.a.createElement(v,{title:g},y),(E||N)&&m.a.createElement(b.a,{type:E?"valid":"invalid"},u))))});x.displayName="FormCheck",x.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},x.Input=h,x.Label=v;var g=x,w=(t(239),t(241)),y=m.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.column,i=e.srOnly,f=e.className,E=e.htmlFor,N=Object(r.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),b=Object(n.useContext)(d.a).controlId;t=Object(o.b)(t,"form-label");var u=s()(f,t,i&&"sr-only",c&&"col-form-label");return E=E||b,c?m.a.createElement(w.a,Object(l.a)({as:"label",className:u,htmlFor:E},N)):m.a.createElement("label",Object(l.a)({ref:a,className:u,htmlFor:E},N))});y.displayName="FormLabel",y.defaultProps={column:!1,srOnly:!1};var O=y,C=m.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.className,n=e.as,i=void 0===n?"small":n,d=Object(r.a)(e,["bsPrefix","className","as"]);return t=Object(o.b)(t,"form-text"),m.a.createElement(i,Object(l.a)({},d,{ref:a,className:s()(c,t)}))});C.displayName="FormText";var j=C,I=m.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.inline,n=e.className,i=e.validated,d=e.as,f=void 0===d?"form":d,E=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(o.b)(t,"form"),m.a.createElement(f,Object(l.a)({},E,{ref:a,className:s()(n,i&&"was-validated",c&&t+"-inline")}))});I.displayName="Form",I.defaultProps={inline:!1},I.Row=Object(i.a)("form-row"),I.Group=E,I.Control=N.a,I.Check=g,I.Label=O,I.Text=j;a.a=I},321:function(e,a,t){"use strict";var l=t(31),r=t(32),c=t(34),s=t(33),n=t(70),m=t(35),i=t(1),o=t.n(i),d=t(412),f=t(417),E=t(413),N=t(414),b=t(415),u=t(246),h=t(241),p=t(276),v=t(244),x=t(286),g=t(420),w=t(411),y=t(67),O=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,m=new Array(r),i=0;i<r;i++)m[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(m)))).state={modal:!1},t.toggle=t.toggle.bind(Object(n.a)(t)),t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=o.a.createElement(u.a,null,o.a.createElement(h.a,null,o.a.createElement(u.a,null,o.a.createElement(h.a,{md:6,className:"mb-4"},o.a.createElement("h6",{className:"mb-4"},o.a.createElement("i",{className:"feather icon-user text-c-green f-20 m-r-5"})," Dispatcher's Info"),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Name:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"Daniel Abayomi"))),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Phone:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"09031822660"))),o.a.createElement("div",{className:"row d-flex align-items-center"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Email:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"daniel@orula.com.ng"))),o.a.createElement("hr",null),o.a.createElement("div",{className:"row d-flex align-items-center"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Home Address:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"56, Adekunle Street, off Borno way, Yaba Lagos."))),o.a.createElement("div",{className:"progress m-t-50",style:{height:"3px"}},o.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}))),o.a.createElement(h.a,{md:6,className:"mb-4"},o.a.createElement("h6",{className:"mb-4"},o.a.createElement("i",{className:"feather icon-user text-c-green f-20 m-r-5"})," Additional Info"),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Date Of Birth:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"10/10/1981"))),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Nationality:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"Nigerian"))),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"State of Origin:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"Lagos"))),o.a.createElement("hr",null),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Language:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"English"))),o.a.createElement("div",{className:"row d-flex align-items-center"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"State of Origin:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"Lagos"))),o.a.createElement("div",{className:"progress m-t-30",style:{height:"3px"}},o.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}))),o.a.createElement(h.a,{md:6},o.a.createElement("h6",{className:"mb-4"},o.a.createElement("i",{className:"feather icon-users text-c-green f-20 m-r-5"})," Guarantor's Info"),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Name:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"Samuel Oladele"))),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Phone:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"09031822677"))),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Valid ID No.:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"011711334899654"))),o.a.createElement("div",{className:"row d-flex align-items-center"},o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement(d.a,{color:"warning",type:"button",size:"sm"},"View Upload"))),o.a.createElement("div",{className:"progress m-t-50",style:{height:"3px"}},o.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}))),o.a.createElement(h.a,{md:6},o.a.createElement("h6",{className:"mb-4"},o.a.createElement("i",{className:"feather icon-briefcase text-c-green f-20 m-r-5"})," Bank Info"),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Name:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"Daniel Abayomi"))),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Bank Name:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"Gurantee Trust Bank"))),o.a.createElement("div",{className:"row d-flex align-items-center"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Account No:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"0117899654"))))))),a=o.a.createElement(u.a,null,o.a.createElement(h.a,{md:6},o.a.createElement("h6",{className:"mb-4"},o.a.createElement("i",{className:"feather icon-map text-c-green f-20 m-r-5"})," Vehicle Info"),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Vehicle Type:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"Bike"))),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Vehicle Name:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"Toyota Corolla 08"))),o.a.createElement("div",{className:"row d-flex align-items-center"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Plate Number:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"ABJ087SMK"))),o.a.createElement("hr",null),o.a.createElement("div",{className:"row d-flex align-items-center mb-2"},o.a.createElement("div",{className:"col-4 text-right"},o.a.createElement("h6",{className:"f-w-300 m-b-0"},"Branch:")),o.a.createElement("div",{className:"col-8 text-left"},o.a.createElement("p",{className:"m-b-0"},"Abuja")))),o.a.createElement(h.a,{md:6},o.a.createElement(p.a.Group,{controlId:"formBasicEmail"},o.a.createElement(p.a.Label,null,"Valid Nigerian Driver\u2019s License"),o.a.createElement(p.a.Control,{type:"text",placeholder:"Enter license number"})),o.a.createElement(p.a.Group,{controlId:"formBasicEmail"},o.a.createElement(p.a.Label,null,"Amac Reg Number"),o.a.createElement(p.a.Control,{type:"text",placeholder:"Enter amac number"}))),o.a.createElement(h.a,{md:6},o.a.createElement(p.a.Group,{controlId:"formBasicEmail"},o.a.createElement(p.a.Label,null,"VIO Paper Number"),o.a.createElement(p.a.Control,{type:"text",placeholder:"Enter vio registration"})),o.a.createElement(p.a.Group,{controlId:"formBasicEmail"},o.a.createElement(p.a.Label,null,"Vehicle Registration Number"),o.a.createElement(p.a.Control,{type:"text",placeholder:"Enter vehicle registration"}))),o.a.createElement(h.a,{md:6},o.a.createElement(p.a.Group,{controlId:"formBasicEmail"},o.a.createElement(p.a.Label,null,"Internal Notes"),o.a.createElement(v.a,{as:"textarea",placeholder:"Add additional information",rows:"3"}))));return o.a.createElement(y.a,null,o.a.createElement(x.a,{variant:"primary",size:"sm",onClick:this.toggle},"Verify"),o.a.createElement(f.a,{isOpen:this.state.modal,size:"lg"},o.a.createElement(p.a,{onSubmit:this.handleSubmit},o.a.createElement(E.a,null,"Verify A Dispatcher"),o.a.createElement(N.a,null,o.a.createElement("p",{className:"text-center",style:{color:"red"}},"Switch between tabs to navigate"),o.a.createElement(g.a,{defaultActiveKey:"personal",id:"uncontrolled-tab-example",onSelect:this.onTabDifferentTabSelected},o.a.createElement(w.a,{eventKey:"personal",title:"Personal Info"},e),o.a.createElement(w.a,{eventKey:"vehicle",title:"Vehicle Info"},a))),o.a.createElement(b.a,null,o.a.createElement("input",{type:"button",value:"Verify",color:"primary",className:"btn btn-primary btn-sm"}),o.a.createElement(d.a,{color:"danger",size:"sm",onClick:this.toggle},"Cancel")))))}}]),a}(o.a.Component);a.a=O}}]);
//# sourceMappingURL=4.59011c58.chunk.js.map
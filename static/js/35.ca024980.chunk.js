(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{214:function(e,a,t){"use strict";t.r(a);var r=t(10),n=t(11),l=t(14),c=t(12),o=t(13),u=t(0),i=t.n(u),y=t(82),m=t(74),h=t(68),s=t(24),b=t(92),d=t.n(b);var E=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=function(){for(var e=[],a=[],t=[],r=0;r<100;r++)e.push({x:r,y:Math.sin(r/10)}),a.push({x:r,y:.25*Math.sin(r/10)+.5}),t.push({x:r,y:.5*Math.cos(r/10)});return[{values:e,key:"Sine Wave",color:"#A389D4"},{values:t,key:"Cosine Wave",color:"#04a9f5"},{values:a,key:"Another sine wave",color:"#1de9b6",area:!0}]}();return i.a.createElement("div",null,i.a.createElement(d.a,{xAxis:{tickFormat:function(e){return e},axisLabel:"Time (ms)"},yAxis:{axisLabel:"Voltage (v)",tickFormat:function(e){return parseFloat(e).toFixed(2)}},type:"lineChart",datum:e,x:"x",y:"y",height:300,renderEnd:function(){console.log("renderEnd")}}))}}]),a}(i.a.Component),f=[{key:"Cumulative Return",values:[{label:"A",value:-29.765957771107,color:"#3ebfea"},{label:"B",value:10,color:"#04a9f5"},{label:"C",value:32.807804682612,color:"#ff8a65"},{label:"D",value:196.45946739256,color:"#1de9b6"},{label:"E",value:.25434030906893,color:"#4C5667"},{label:"F",value:-98.079782601442,color:"#69CEC6"},{label:"G",value:-13.925743130903,color:"#a389d4"},{label:"H",value:-5.1387322875705,color:"#FE8A7D"}]}],p=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,{tooltip:{enabled:!0},type:"discreteBarChart",datum:f,x:"label",y:"value",height:300,showValues:!0})}}]),a}(i.a.Component);function v(e,a){return Math.floor(Math.random()*(a-e+1)+e)}var k=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=function(){for(var e=[],a=[],t=[],r=35+35*Math.random(),n=0;n<r;n++)e.push({x:n,y:v(0,60)}),a.push({x:n,y:v(0,100)}),t.push({x:n,y:v(0,30)});return[{values:e,key:"Stream #0",color:"#A389D4"},{values:t,key:"Stream #1",color:"#04a9f5"},{values:a,key:"Stream #3",color:"#1de9b6",area:!0}]}();return i.a.createElement(d.a,{type:"multiBarChart",datum:e,x:"x",y:"y",height:300,showValues:!0,groupSpacing:.2})}}]),a}(i.a.Component),O=[{key:"One",y:29,color:"#ff8a65"},{key:"Two",y:0,color:"#f4c22b"},{key:"Three",y:32,color:"#04a9f5"},{key:"Four",y:196,color:"#3ebfea"},{key:"Five",y:2,color:"#4F5467"},{key:"Six",y:98,color:"#1de9b6"},{key:"Seven",y:13,color:"#a389d4"},{key:"Eight",y:5,color:"#FE8A7D"}],j=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,{id:"chart",height:300,type:"pieChart",datum:O,x:"key",y:"y"})}}]),a}(i.a.Component),x=[{key:"One",y:29,color:"#ff8a65"},{key:"Two",y:0,color:"#f4c22b"},{key:"Three",y:32,color:"#04a9f5"},{key:"Four",y:196,color:"#3ebfea"},{key:"Five",y:2,color:"#4F5467"},{key:"Six",y:98,color:"#1de9b6"},{key:"Seven",y:13,color:"#a389d4"},{key:"Eight",y:5,color:"#FE8A7D"}],C=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,{id:"chart",height:300,type:"pieChart",datum:x,x:"key",y:"y",donut:!0,labelType:"percent"})}}]),a}(i.a.Component),F=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(s.a,null,i.a.createElement(y.a,null,i.a.createElement(m.a,{md:6},i.a.createElement(h.a,null,i.a.createElement(h.a.Header,null,i.a.createElement(h.a.Title,{as:"h5"},"Line Chart")),i.a.createElement(h.a.Body,null,i.a.createElement(E,null)))),i.a.createElement(m.a,{md:6},i.a.createElement(h.a,null,i.a.createElement(h.a.Header,null,i.a.createElement(h.a.Title,{as:"h5"},"Discrete Bar Chart")),i.a.createElement(h.a.Body,null,i.a.createElement(p,null)))),i.a.createElement(m.a,{sm:12},i.a.createElement(h.a,null,i.a.createElement(h.a.Header,null,i.a.createElement(h.a.Title,{as:"h5"},"Stacked/Grouped Multi-Bar Chart")),i.a.createElement(h.a.Body,null,i.a.createElement(k,null)))),i.a.createElement(m.a,{md:6},i.a.createElement(h.a,null,i.a.createElement(h.a.Header,null,i.a.createElement(h.a.Title,{as:"h5"},"Pie Basic Chart")),i.a.createElement(h.a.Body,{className:"text-center"},i.a.createElement(j,null)))),i.a.createElement(m.a,{md:6},i.a.createElement(h.a,null,i.a.createElement(h.a.Header,null,i.a.createElement(h.a.Title,{as:"h5"},"Donut Chart")),i.a.createElement(h.a.Body,{className:"text-center"},i.a.createElement(C,null))))))}}]),a}(i.a.Component);a.default=F}}]);
//# sourceMappingURL=35.ca024980.chunk.js.map
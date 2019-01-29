(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t(34)},32:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=t(3),l=t(4),u=t(6),s=t(5),d=t(7),m=t(2),h=t(1),g=t(10),p=t.n(g),b=t(14);function f(){return(f=Object(b.a)(p.a.mark(function e(n){var t,r,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:new Headers({"Content-Type":"application/json"}),mode:"cors"},e.next=3,fetch(n,t);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var j=function(e){return f.apply(this,arguments)};function w(){var e=Object(m.a)(["place-self: center;"]);return w=function(){return e},e}function O(){var e=Object(m.a)([""]);return O=function(){return e},e}var v=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).className=e.className,t.placeholder=e.placeholder,t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:this.className},a.a.createElement(x,{placeholder:this.placeholder,type:"text"}),a.a.createElement("button",null,"Add Item"))}}]),n}(r.Component),y=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).className=e.className,t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("header",{className:this.className},a.a.createElement("h1",null,"To-Do List"),a.a.createElement("p",null,"Every big dish starts with one small bite"))}}]),n}(r.Component),E=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).className=e.className,t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("li",{className:this.className},a.a.createElement("span",null,this.props.todoTitle),a.a.createElement("button",null,"X"))}}]),n}(r.Component),k=Object(h.a)(E).withConfig({displayName:"Libcomponents__StyledTodoItem",componentId:"jpheih-0"})(["display:grid;grid-template-columns:auto 10%;grid-template-rows:10% auto 10%;padding:1rem;margin:1rem auto;background-color:white;span{grid-column:1;grid-row:2;}button{grid-column:2;grid-row:2;color:red;border:none;background:none;font-size:2rem;}"]),N=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).className=e.className,t.apiURI=e.apiURI,t.state={json:[]},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;j(this.apiURI).then(function(n){return e.setState({json:n})})}},{key:"render",value:function(){return this.state.json[0]?a.a.createElement("div",{className:this.className},a.a.createElement("h2",null,"Things to Do"),a.a.createElement("button",null,"Fold"),a.a.createElement("ul",null,this.state.json.map(function(e,n){return a.a.createElement(k,{key:e.id?e.id:n,todoTitle:e.title})}))):a.a.createElement(I,{className:this.className},"Loading...")}}]),n}(r.Component),x=Object(h.a)("input")(O()),I=Object(h.a)("div")(w());function C(){var e=Object(m.a)(["\n  border-bottom: 1px solid lightgray;\n  display: grid;\n  grid-template-columns: 90% 10%;\n  grid-template-rows: 10% 10% auto;\n\n  grid-column: 2 / 3;\n  grid-row: 4;\n  font-size: 2rem;\n\n  h2 {\n    grid-column: 1;\n    grid-row: 2;\n  }\n  & > button {\n    grid-column: 2;\n    grid-row: 2;\n    background: unset;\n    border: 1px solid ",";\n    font-size: 2rem;\n    color: ",";\n  }\n  ul {\n    grid-row: 3;\n    grid-column: 1 / 3;\n  }\n"]);return C=function(){return e},e}function T(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-columns: auto 20%;\n  grid-template-rows: 10% auto 10%;\n  column-gap: 1rem;\n\n  input {\n    grid-column: 1;\n    grid-row: 2;\n    font-size: 2rem;\n    padding-left: 2rem;\n    border: unset;\n    outline: 1px solid ",";\n  }\n  button {\n    grid-column: 2;\n    grid-row: 2;\n    background: unset;\n    background-color: ",";\n    border: unset;\n    outline: 1px solid ",";\n    font-size: 2rem;\n    color: white;\n  }\n\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n"]);return T=function(){return e},e}function R(){var e=Object(m.a)(["\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  * {\n    margin: 1rem auto;\n  }\n  border-bottom: 1px solid lightgray;\n"]);return R=function(){return e},e}function z(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-columns: 5% auto 5%;\n  grid-template-rows: 10% 15% 15% auto 10%;\n\n  background-color: ",";\n  box-shadow: 24px 24px ",";\n  position: absolute;\n  left: 20%;\n  top: 10%;\n  width: 60vw;\n  height: 80vh;\n  min-height: 64rem;\n  max-height: 80rem;\n"]);return z=function(){return e},e}var S={highlight:"#0aa",highlightReverse:"white",background:"lightcyan",boxShadow:"#888",alert:"#a00"},U=h.a.main(z(),S.background,S.boxShadow),D=Object(h.a)(y)(R()),L=Object(h.a)(v)(T(),S.highlight,S.highlight,S.highlightReverse),B=Object(h.a)(N)(C(),S.highlight,S.highlight),H=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(U,null,a.a.createElement(D,null),a.a.createElement(L,{placeholder:"Hello, world!"}),a.a.createElement(B,{apiURI:"http://crong.codesquad.kr:8080/todo"}))}}]),n}(r.Component);t(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.771a3290.chunk.js.map
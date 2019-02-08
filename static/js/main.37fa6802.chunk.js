(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,n){t.exports=n(36)},34:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(5),i=n.n(r),l=n(18),c=n(4),u=n.n(c),d=n(6),s=n(7),h=n(8),m=n(10),p=n(9),g=n(11),b=n(1),f=n(2),v=n(3),w={color:{highlight:"#0aa",highlightReverse:"white",background:"lightcyan",boxShadow:"#888",alert:"#a00"}};function O(){var t=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 5% auto 5%;\n  grid-template-rows: 10% 15% 15% auto 10%;\n\n  background-color: ",";\n  box-shadow: 24px 24px ",";\n  position: absolute;\n  left: 20%;\n  top: 10%;\n  width: 60vw;\n  height: 80vh;\n  min-height: 64rem;\n  max-height: 80rem;\n"]);return O=function(){return t},t}var j=v.a.main(O(),w.color.background,w.color.boxShadow);var k={Header:function(t){var e=t.className,n=t.children;return a.a.createElement("header",{className:e},n)},Input:function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(m.a)(this,Object(p.a)(e).call(this,t))).props=t,n.handleInputChange=n.handleInputChange.bind(Object(b.a)(Object(b.a)(n))),n.handleInputSubmit=n.handleInputSubmit.bind(Object(b.a)(Object(b.a)(n))),n.state={value:""},n}return Object(g.a)(e,t),Object(h.a)(e,[{key:"handleInputChange",value:function(t){this.setState({value:t.target.value})}},{key:"handleInputSubmit",value:function(t){t.preventDefault(),this.props.onSubmit(this.state.value),this.setState({value:""})}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.placeholder;return a.a.createElement("form",{className:e,onSubmit:this.handleInputSubmit},a.a.createElement("input",{placeholder:n,type:"text",onChange:this.handleInputChange,value:this.state.value}),a.a.createElement("input",{type:"submit",value:"Add Item"}))}}]),e}(a.a.Component),Item:function(t){var e=t.todoTitle,n=t.className,o=t.onClick;return a.a.createElement("li",{className:n},a.a.createElement("span",null,e),a.a.createElement("button",{onClick:o,type:"button"},"X"))},List:function(t){return{componentDidUpdate:function(t){this.props.todoData!==t.todoData&&this.render()},render:function(){var e=this;return this.props.todoData[0]?a.a.createElement("div",{className:this.props.className},a.a.createElement("h2",null,"Things to Do"),a.a.createElement("button",{type:"button",className:"foldBtn",onClick:this.props.onFoldClick},this.props.folded?"Unfold":"Fold"),a.a.createElement("ul",null,this.props.todoData.map(function(n){return a.a.createElement(t.ItemTemplate,{key:n.id,todoTitle:n.title,onClick:e.props.onDelClick(n.id)})}))):a.a.createElement("div",{css:"place-self: center;",className:this.props.className},"Loading...")}}}};function I(){var t=Object(f.a)(["\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  * {\n    margin: 1rem auto;\n  }\n  border-bottom: 1px solid lightgray;\n"]);return I=function(){return t},t}function y(){var t=Object(f.a)(["\n  display: grid;\n  grid-template-columns: auto 20%;\n  grid-template-rows: 10% auto 10%;\n  column-gap: 1rem;\n\n  input {\n    grid-column: 1;\n    grid-row: 2;\n    font-size: 2rem;\n    padding-left: 2rem;\n    border: unset;\n    outline: 1px solid ",";\n  }\n  input[type='submit'] {\n    grid-column: 2;\n    grid-row: 2;\n    background: unset;\n    background-color: ",";\n    border: unset;\n    outline: 1px solid ",";\n    font-size: 2rem;\n    color: white;\n  }\n\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n"]);return y=function(){return t},t}function D(){var t=Object(f.a)(["\n  display: grid;\n  grid-template-columns: auto 10%;\n  grid-template-rows: 10% auto 10%;\n  padding: 1rem;\n  margin: 1rem auto;\n  background-color: white;\n\n  span {\n    grid-column: 1;\n    grid-row: 2;\n  }\n  button {\n    grid-column: 2;\n    grid-row: 2;\n    color: red;\n    border: none;\n    background: none;\n    font-size: 2rem;\n  }\n"]);return D=function(){return t},t}function E(){var t=Object(f.a)(["\n  border-bottom: 1px solid lightgray;\n  display: grid;\n  grid-template-columns: 90% 10%;\n  grid-template-rows: 10% 10% auto;\n\n  grid-column: 2 / 3;\n  grid-row: 4;\n  font-size: 2rem;\n\n  h2 {\n    grid-column: 1;\n    grid-row: 2;\n  }\n  .foldBtn {\n    grid-column: 2;\n    grid-row: 2;\n    background: ",";\n    border: 1px solid ",";\n    font-size: 2rem;\n    text-align: center;\n    color: ",";\n  }\n  ul {\n    grid-row: 3;\n    grid-column: 1 / 3;\n\n    border-bottom: 1px dotted black;\n\n    ","\n  }\n"]);return E=function(){return t},t}var T={Main:j,Header:Object(v.a)(k.Header)(I()),Input:Object(v.a)(k.Input)(y(),w.color.highlight,w.color.highlight,w.color.highlightReverse),Item:Object(v.a)(k.Item)(D()),List:Object(v.a)(k.List)(E(),function(t){return t.folded?w.color.highlight:"unset"},function(t){return t.folded?"white":w.color.highlight},function(t){return t.folded?"white":w.color.highlight},function(t){return t.folded?"li {\n          height: 0;\n          overflow: hidden;\n          margin: 0;\n          padding: 0;\n        }\n        height: 1rem;\n        overflow: hidden;\n        margin: 0;\n        padding: 0;\n        ":""})};function x(){return(x=Object(d.a)(u.a.mark(function t(e){var n,o,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",mode:"cors"},t.next=3,fetch(e,n);case 3:return o=t.sent,t.next=6,o.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var S=function(t){return x.apply(this,arguments)},C=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(m.a)(this,Object(p.a)(e).call(this,t))).apiURI="http://crong.codesquad.kr:8080/todo",n.toggleFold=n.toggleFold.bind(Object(b.a)(Object(b.a)(n))),n.deleteTodoItem=n.deleteTodoItem.bind(Object(b.a)(Object(b.a)(n))),n.addTodoItem=n.addTodoItem.bind(Object(b.a)(Object(b.a)(n))),n.handleInputSubmit=n.handleInputSubmit.bind(Object(b.a)(Object(b.a)(n))),n.state={folded:{TodoList:!1},todoData:[]},n}return Object(g.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){this.getTodoData()}},{key:"getTodoData",value:function(){var t=Object(d.a)(u.a.mark(function t(){var e,n,o;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(t,e){return Object.assign(t,{id:"".concat(e).concat((new Date).valueOf())})},t.next=3,S(this.apiURI);case 3:return n=t.sent,o=n.map(e),this.setState({todoData:o}),t.abrupt("return",o);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"toggleFold",value:function(t){var e=this;return function(){return e.setState({folded:{TodoList:!e.state.folded[t]}})}}},{key:"deleteTodoItem",value:function(t){var e=this;return function(){return e.setState({todoData:e.state.todoData.filter(function(e){return e.id!==t})})}}},{key:"addTodoItem",value:function(t){var e={id:"".concat("".concat(Math.floor(999*Math.random()+1)).concat((new Date).valueOf())),title:t,status:"todo"},n=[].concat(Object(l.a)(this.state.todoData.map(function(t){return Object.assign({},t)})),[e]);this.setState({todoData:n})}},{key:"handleInputSubmit",value:function(t){this.addTodoItem(t)}},{key:"render",value:function(){var t=this.state,e=t.folded,n=t.todoData;return a.a.createElement(T.Main,null,a.a.createElement(T.Header,null,a.a.createElement("h1",null,"To-Do List"),a.a.createElement("p",null,"Every big dish starts with one small bite")),a.a.createElement(T.Input,{placeholder:"Hello, world!",onSubmit:this.handleInputSubmit}),a.a.createElement(T.List,{ItemTemplate:T.Item,folded:e.TodoList,todoData:n,onFoldClick:this.toggleFold("TodoList"),onDelClick:this.deleteTodoItem}))}}]),e}(a.a.Component);n(34),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.37fa6802.chunk.js.map
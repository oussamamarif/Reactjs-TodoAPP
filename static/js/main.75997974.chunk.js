(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o,s,c,i,a=n(1),d=n.n(a),r=n(13),l=n.n(r),h=(n(23),n(24),n(17)),u=n(4),j=n(5),p=n(8),b=n(7),f=(n(25),n(26),n(0)),m=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)("form",{onSubmit:this.props.handleSubmit,children:Object(f.jsxs)("div",{className:"input-icon",children:[Object(f.jsx)("i",{className:"fa fa-list-ol icon"}),Object(f.jsx)("input",{type:"text",placeholder:"Add a task",autoComplete:"off",value:this.props.newTodo,onChange:this.props.handleChange})]})})})}}]),n}(a.Component),O=(n(28),n(9)),x=n(18),v=n(2),g=n(3),k=g.a.div(o||(o=Object(v.a)(["\n  display: inline-block;\n  vertical-align: middle;\n"]))),w=g.a.svg(s||(s=Object(v.a)(["\n  fill: none;\n  stroke: white;\n  stroke-width: 2px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 15px;\n"]))),C=g.a.input.attrs({type:"checkbox"})(c||(c=Object(v.a)(["\n  // Hide checkbox visually but remain accessible to screen readers.\n  // Source: https://polished.js.org/docs/#hidevisually\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 100px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 100px;\n"]))),y=g.a.div(i||(i=Object(v.a)(["\n  display: inline-block;\n  position: relative;\n  width: ",";\n  height: ",";\n  background: ",";\n  border-radius: 3px;\n  transition: all 150ms;\n  ",":focus + & {\n    box-shadow: 0 0 0 3px ",";\n  }\n  "," {\n    visibility: ",";\n  }\n"])),(function(e){return e.size+"px"}),(function(e){return e.size+"px"}),(function(e){return e.checked?e.checkedColor:e.uncheckedColor}),C,(function(e){return e.hoverColor}),w,(function(e){return e.checked?"visible":"hidden"})),N=function(e){var t=e.className,n=e.checked,o=Object(x.a)(e,["className","checked"]);return Object(f.jsxs)(k,{className:t,children:[Object(f.jsx)(C,Object(O.a)({checked:n},o)),Object(f.jsx)(y,Object(O.a)(Object(O.a)({checked:n},o),{},{children:Object(f.jsx)(w,{viewBox:"0 0 24 24",children:Object(f.jsx)("polyline",{points:"20 6 9 17 4 12"})})}))]})},T=function(e){var t=e.todos,n=t.map((function(t,n){return Object(f.jsxs)("div",{className:"todoComponent d-flex w-75 mx-auto",children:[Object(f.jsx)("div",{className:"todoCompLeft",children:Object(f.jsx)("label",{children:Object(f.jsx)(N,{className:"checkbox-element",checked:t.isCompleted,size:20,checkedColor:"#2e3238",uncheckedColor:"#2e3238",hoverColor:"#343a40",onChange:function(t){return e.handleOnChange(t,n)}})})}),Object(f.jsxs)("div",{className:"todoCompRight d-flex justify-content-between flex-grow-1 px-3 ",children:[Object(f.jsx)("div",{className:"todoTitle",children:Object(f.jsx)("span",{style:{textDecoration:t.isCompleted?"line-through":"none"},children:t.title})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{onClick:function(){return e.handleOnedit(n)},class:"fa fa-pencil"}),Object(f.jsx)("i",{onClick:function(){return e.handleOnremove(n)},className:"fa fa-trash"})]})]})]},t.id)}));return Object(f.jsxs)("div",{className:"todoListItems w-full",children:[Object(f.jsx)("hr",{}),0===t.length&&Object(f.jsx)("h3",{className:"noTodos",children:" Let's Do somework"}),t.length>0&&n]})},S=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={todos:[],newTodo:""},e.handleChange=function(t){e.setState({newTodo:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.state.todos.length;""!==e.state.newTodo&&e.setState({newTodo:"",todos:[].concat(Object(h.a)(e.state.todos),[{id:n+=1,title:e.state.newTodo,isCompleted:!1}])})},e.toggleCompleted=function(t,n){var o=e.state.todos.filter((function(e){return e.id===n+1&&(e.isCompleted=t.target.checked),e}));e.setState({todos:o})},e.removeTodo=function(t){var n=e.state.todos;n.splice(t,1),e.setState({todos:n})},e.editTodo=function(t){var n=prompt("Enter a new task"),o=e.state.todos;o.filter((function(e){return e.id===t+1&&(e.title=n),e})),e.setState({todos:o})},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"todo-list container d-flex-column w-50 mt-5 pb-3",children:[Object(f.jsx)(m,{todos:this.state.todos,newTodo:this.state.newTodo,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),Object(f.jsx)(T,{todos:this.state.todos,handleOnChange:this.toggleCompleted,handleOnremove:this.removeTodo,handleOnedit:this.editTodo})]})}}]),n}(a.Component);var z=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(S,{})})};l.a.render(Object(f.jsx)(d.a.StrictMode,{children:Object(f.jsx)(z,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.75997974.chunk.js.map
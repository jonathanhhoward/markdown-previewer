(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),i=a.n(r),c=a(12),l=a(13),s=a(18),d=a(14),u=a(19),m=a(15),h=a.n(m),g=a(16),v=a.n(g),w=a(2),b=a.n(w),f=a(17),p=a.n(f),k=(a(25),"# Header\n## Sub header\n[Google](https://google.com)\ninline `code`\n~~~\nBlock code\n~~~\n* List item\n\n> Block quote\n\n![image](favicon.ico)\n__Bold text__\n");function E(e){return o.a.createElement(b.a,{border:"dark",className:"Card",id:"Editor"},o.a.createElement(b.a.Header,{className:"bg-dark text-info"},"Editor"),o.a.createElement(b.a.Body,{as:"textarea",className:"bg-light overflow-auto",id:"editor",onChange:e.onChange,value:e.text}))}function x(e){var t=h()(e.text,{breaks:!0}),a=v.a.sanitize(t);return o.a.createElement(b.a,{border:"dark",className:"Card",id:"Preview"},o.a.createElement(b.a.Header,{className:"bg-dark text-info"},"Preview"),o.a.createElement(b.a.Body,{className:"bg-light overflow-auto",id:"preview",dangerouslySetInnerHTML:{__html:a}}))}var C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState({input:e.target.value})},a.state={input:k},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{className:"bg-secondary m-0 vh-100"},o.a.createElement(E,{text:this.state.input,onChange:this.handleChange}),o.a.createElement(x,{text:this.state.input}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(C,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.1f5c40d9.chunk.js.map
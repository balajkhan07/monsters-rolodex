(this["webpackJsonpmonster-app"]=this["webpackJsonpmonster-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),i=n(4),l=n(6),u=n(5),m=n(7),h=(n(14),function(e){var t=e.monster;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://robohash.org/".concat(t.id,"?set=set3&size=180x180"),alt:t.name}),r.a.createElement("h2",null,t.name),r.a.createElement("p",null,t.email))}),p=(n(15),function(e){var t=e.monsters;return r.a.createElement("div",{className:"card-list"},t.map((function(e,t){return r.a.createElement(h,{key:t,monster:e})})))}),d=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search-box",type:"text",placeholder:t,onChange:n})}),f=(n(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={monsters:[],searchText:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchText,o=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{style:{marginBottom:"30px",marginTop:"0px",paddingTop:"100px"}},"Monsters Rolodex"),r.a.createElement(d,{handleChange:function(t){return e.setState({searchText:t.target.value})},placeholder:"Search Monsters"}),r.a.createElement(p,{monsters:o}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.445ae9d6.chunk.js.map
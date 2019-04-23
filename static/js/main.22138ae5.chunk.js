(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,n){e.exports=n(400)},400:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),c=n(150),i=n(3),o=n(11),l=n(28),u="GET_COUNTRIES",s="GET_COUNTRY",m="DELETE_COUNTRY",p="SEARCH_COUNTRIES",d="SET_CONTINENT";function h(){return{type:u}}function E(e){return{type:m,id:e}}function v(e){return{type:p,searchText:e}}function g(e){return{type:d,name:e}}var f=n(97),y={countries:f,selectedCountry:{},visibleCountries:f},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object.assign({},e,{countries:e.countries});case s:var n=e.countries.find(function(e){return e.id==t.id});return Object.assign({},e,{selectedCountry:n});case p:var a=e.countries.filter(function(e){return e.name.toLowerCase().includes(t.searchText.toLowerCase())});return Object.assign({},e,{visibleCountries:a});case m:var r=e.countries.filter(function(e){return e.id!=t.id}),c=e.visibleCountries.filter(function(e){return e.id!=t.id});return Object.assign({},e,{countries:r,visibleCountries:c});case d:var i=e.countries.filter(function(e){return e.continent===t.name});return Object.assign({},e,{visibleCountries:i})}return e},C=Object(l.b)({countriesReducer:b}),k=n(55),w=n(157),j=n.n(w),O=n(158),_=n.n(O),N=Object(k.createDevTools)(r.a.createElement(_.a,{toggleVisibilityKey:"ctrl-h",changePositionKey:"ctrl-q"},r.a.createElement(j.a,null))),T=Object(l.c)(C,N.instrument()),U=(n(398),n(399),n(54),function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-default"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Pa\u0144stwa.js")),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/countries"},"Countries")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/continents"},"Continents")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/contact"},"Contact")))))),r.a.createElement("div",{className:"container-fluid"},e.children))}),R=function(){return r.a.createElement("h1",null,"Witamy w aplikacji pa\u0144stwa.js")},x=function(){return r.a.createElement("h1",null,"Ulica: Route 66")},A=function(){return r.a.createElement("h1",null,"Error 404...podana strona nie istnieje")},F=n(29),D=n(30),I=n(32),M=n(31),P=n(33),L=function(e){return r.a.createElement("div",{className:"country-logo-wrapper"},r.a.createElement("img",{className:"country-logo",src:e.country.imageUrl,alt:"country flag"}))},S=function(e){return r.a.createElement("div",{className:"countries-list"},e.countries.map(function(t){return r.a.createElement("div",{className:"single-country",key:t.id},r.a.createElement(i.b,{className:"logo",to:"countries/country/"+t.id},r.a.createElement(L,{country:t})),r.a.createElement("button",{onClick:e.deleteCountry.bind(null,t.id)},"DELETE"))}))},W=function(e){function t(e){return Object(F.a)(this,t),Object(I.a)(this,Object(M.a)(t).call(this,e))}return Object(P.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(h()),this.props.dispatch(v(""))}},{key:"search",value:function(e){this.props.dispatch(v(e.target.value))}},{key:"deleteCountry",value:function(e){this.props.dispatch(E(e))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"search text-center"},r.a.createElement("input",{type:"text",onChange:this.search.bind(this)})),r.a.createElement(S,{countries:this.props.visibleCountries,deleteCountry:this.deleteCountry.bind(this)}))}}]),t}(a.Component),K=Object(o.connect)(function(e){return{countries:e.countriesReducer.countries,visibleCountries:e.countriesReducer.visibleCountries}})(W),z=function(e){return r.a.createElement("div",{className:"country-wrapper"},r.a.createElement("header",null,r.a.createElement("img",{className:"country-photo",src:e.country.imageUrl,alt:"country flag"})),r.a.createElement("div",{className:"country-info"},r.a.createElement("h1",null,e.country.name),r.a.createElement("h2",null,"Kontynent: ",e.country.continent),r.a.createElement("div",{className:"info"},r.a.createElement("div",null,r.a.createElement("span",null,e.country.populace),r.a.createElement("span",null,"Ludno\u015b\u0107[mln]")),r.a.createElement("div",null,r.a.createElement("span",null,e.country.capital),r.a.createElement("span",null,"Stolica")),r.a.createElement("div",null,r.a.createElement("span",null,e.country.currency),r.a.createElement("span",null,"Waluta")))))},B=function(e){function t(e){return Object(F.a)(this,t),Object(I.a)(this,Object(M.a)(t).call(this,e))}return Object(P.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e;this.props.dispatch((e=this.props.params.id,{type:s,id:e}))}},{key:"render",value:function(){return r.a.createElement(z,{country:this.props.selectedCountry})}}]),t}(a.Component),G=Object(o.connect)(function(e){return{selectedCountry:e.countriesReducer.selectedCountry}})(B),H=function(e){function t(e){return Object(F.a)(this,t),Object(I.a)(this,Object(M.a)(t).call(this,e))}return Object(P.a)(t,e),Object(D.a)(t,[{key:"chooseContinent",value:function(e){this.props.dispatch(g(e.target.value))}},{key:"deleteCountry",value:function(e){this.props.dispatch(E(e))}},{key:"componentDidMount",value:function(){this.props.dispatch(g("Europa"))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("select",{onChange:function(t){return e.chooseContinent(t)}},r.a.createElement("option",{value:"Europa"},"Europa"),r.a.createElement("option",{value:"Afryka"},"Afryka")),r.a.createElement(S,{countries:this.props.visibleCountries,deleteCountry:this.deleteCountry.bind(this)}))}}]),t}(a.Component),J=Object(o.connect)(function(e){return{visibleCountries:e.countriesReducer.visibleCountries}})(H),Y=r.a.createElement(i.c,{path:"/",component:U},r.a.createElement(i.a,{component:R}),r.a.createElement(i.c,{path:"countries"},r.a.createElement(i.a,{component:K}),r.a.createElement(i.c,{path:"country/:id",component:G})),r.a.createElement(i.c,{path:"continents",component:J}),r.a.createElement(i.c,{path:"contact",component:x}),r.a.createElement(i.c,{path:"*",component:A}));Object(c.render)(r.a.createElement(o.Provider,{store:T},r.a.createElement("div",null,r.a.createElement(i.d,{history:i.e,routes:Y}),r.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),T.dispatch(h())},54:function(e,t,n){},97:function(e){e.exports=[{name:"Polska",currency:"PLN",populace:"38.53",capital:"Warszawa",continent:"Europa",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.svg.png",id:1},{name:"Irlandia",currency:"EUR",populace:"4.59",capital:"Dublin",continent:"Europa",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1200px-Flag_of_Ireland.svg.png",id:2},{name:"Holandia",currency:"EUR",populace:"16.8",capital:"Amsterdam",continent:"Europa",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/900px-Flag_of_the_Netherlands.svg.png",id:3},{name:"Maroko",currency:"MAD",populace:"33.01",capital:"Rabat",continent:"Afryka",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/900px-Flag_of_Morocco.svg.png",id:4},{name:"Tunezja",currency:"TND",populace:"10.89",capital:"Tunis",continent:"Afryka",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.svg.png",id:5},{name:"Algieria",currency:"DZD",populace:"39.21",capital:"Algier",continent:"Afryka",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/900px-Flag_of_Algeria.svg.png",id:6}]}},[[159,1,2]]]);
//# sourceMappingURL=main.22138ae5.chunk.js.map
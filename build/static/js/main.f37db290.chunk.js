(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(70)},35:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);a(32),a(19),a(33),a(34),a(35);var n=a(0),r=a.n(n),c=a(27),s=a.n(c),l=a(2),o=a(1),m=a(11),u=a(3),i=a.n(u),d=r.a.createContext(),b=a(28),p=a.n(b),h=function(){var e=localStorage.getItem("tournament-fantasy-token");return p()(e)},E=function(e){return localStorage.setItem("tournament-fantasy-token",e),!0},g=function(){return localStorage.getItem("tournament-fantasy-token")},v=a(14),f=function(e){var t=e.component,a=Object(v.a)(e,["component"]),c=Object(n.useContext)(d).auth;return r.a.createElement(m.b,Object.assign({},a,{component:function(e){return c?r.a.createElement(t,e):r.a.createElement(m.a,{to:"/login"})}}))},N=function(e){var t=e.component,a=Object(v.a)(e,["component"]),c=Object(n.useContext)(d).auth;return r.a.createElement(m.b,Object.assign({},a,{component:function(e){return c?r.a.createElement(m.a,{to:"/me"}):r.a.createElement(t,e)}}))},w=function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"container bg-white mt-3 rounded"},r.a.createElement("h1",{class:"text-center p-3"},"Admin")),r.a.createElement("div",{className:"container bg-white list-group mt-2 rounded"},r.a.createElement(o.b,{to:"/admin/uploadteams",className:"list-group-item list-group-item-action "},"Upload Teams")))},x=a(4),j=a.n(x),y=a(7),O=function(e){var t=e.type,a=e.placeholder,n=e.value,c=e.error,s=e.onChange;return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:t,value:n,className:c?"form-control form-control-lg is-invalid":"form-control form-control-lg",placeholder:a,onChange:s}),r.a.createElement("div",{className:"invalid-feedback"},c))},k=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1],m=Object(n.useState)({}),u=Object(l.a)(m,2),d=u[0],b=u[1],p=Object(n.useState)(!1),g=Object(l.a)(p,2),v=g[0],f=g[1],N=function(){var t=Object(y.a)(j.a.mark(function t(a){var n,r,s;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={handle:c},f(!0),t.prev=3,t.next=6,i.a.patch("/api/users/handle",n);case 6:r=t.sent,f(!1),s=r.data.token,i.a.defaults.headers.common.Authorization="Bearer "+s,E(s),e.history.push("/me"),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),f(!1),b(t.t0.response.data);case 18:case"end":return t.stop()}},t,null,[[3,14]])}));return function(e){return t.apply(this,arguments)}}(),w=h().handle;return r.a.createElement("div",{className:"container auth-form-container"},r.a.createElement("div",{className:"row align-items-center justify-content-center auth-form-div"},r.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-6 bg-white rounded p-3"},r.a.createElement("p",{className:" text-muted text-center"},"Your current username is ",w),r.a.createElement("h1",{className:"display-4 text-center mt-0 mb-3"},"Username"),r.a.createElement("form",{noValidate:!0,className:"p-3",onSubmit:N},r.a.createElement(O,{type:"text",placeholder:"Pick a new username",value:c,error:d.handle,onChange:function(e){s(e.target.value),d.handle=""}}),v?r.a.createElement("button",{className:"btn btn-lg btn-success btn-block mb-2 mt-4",type:"button",disabled:!0},r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Changing Handle..."):r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-success btn-block mb-2 mt-4"},"Change")),r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,r.a.createElement(o.b,{to:"/me"},"Skip it"))))))},S=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1],m=Object(n.useState)({}),u=Object(l.a)(m,2),d=u[0],b=u[1],p=Object(n.useState)(!1),h=Object(l.a)(p,2),E=h[0],g=h[1],v=Object(n.useState)(!1),f=Object(l.a)(v,2),N=f[0],w=f[1],x=function(){var e=Object(y.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={password:c},g(!0),e.prev=3,e.next=6,i.a.patch("/api/users/password",a);case 6:g(!1),w(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),g(!1),b(e.t0.response.data);case 14:case"end":return e.stop()}},e,null,[[3,10]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container auth-form-container"},r.a.createElement("div",{className:"row align-items-center justify-content-center auth-form-div"},r.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-6 bg-white rounded p-3"},N?r.a.createElement("p",{className:" text-muted text-center"},"Your new password is still XXXXXXXX"):r.a.createElement("p",{className:" text-muted text-center"},"Your current password is er... XXXXXXXX"),N?r.a.createElement("h1",{className:"text-center mt-0 mb-3"},"Your password has been changed"):r.a.createElement("h1",{className:"display-4 text-center mt-0 mb-3"},"Password"),r.a.createElement("form",{noValidate:!0,className:"p-3",onSubmit:x},!N&&r.a.createElement(O,{type:"password",placeholder:"Pick a new password",value:c,error:d.password,onChange:function(e){s(e.target.value),d.password=""}}),!N&&(E?r.a.createElement("button",{className:"btn btn-lg btn-success btn-block mb-2 mt-4",type:"button",disabled:!0},r.a.createElement("span",{className:"spinner-border spinner-border-sm float-left",role:"status","aria-hidden":"true"}),"Changing Password..."):r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-success btn-block mb-2 mt-4"},"Change"))),!N&&r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,r.a.createElement(o.b,{to:"/me"},"Skip it"))),N&&r.a.createElement("button",{type:"button",onClick:function(){e.history.push("/me")},className:"btn btn-lg btn-success btn-block mb-2 "},"Done"))))},C=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1],m=Object(n.useState)({}),u=Object(l.a)(m,2),d=u[0],b=u[1],p=Object(n.useState)(!1),h=Object(l.a)(p,2),E=h[0],g=h[1],v=Object(n.useState)(!1),f=Object(l.a)(v,2),N=f[0],w=f[1],x=function(){var e=Object(y.a)(j.a.mark(function e(t){var a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={email:c},g(!0),e.prev=3,e.next=6,i.a.put("/api/users/email",a);case 6:n=e.sent,console.log(n.data),g(!1),w(!0),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),g(!1),b(e.t0.response.data);case 16:case"end":return e.stop()}},e,null,[[3,12]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container auth-form-container"},r.a.createElement("div",{className:"row align-items-center justify-content-center auth-form-div"},r.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-6 bg-white rounded p-3"},N?r.a.createElement("p",{className:" text-muted text-center"},"You can close this window"):r.a.createElement("p",{className:" text-muted text-center"},"We'll send you an email to reset your password"),N?r.a.createElement("h1",{className:"text-center mt-0 mb-3"},"Check your email"):r.a.createElement("h1",{className:"display-4 text-center mt-0 mb-3"},"Forgot?"),r.a.createElement("form",{noValidate:!0,className:"p-3",onSubmit:x},!N&&r.a.createElement(O,{type:"email",placeholder:"Your registered email",value:c,error:d.email,onChange:function(e){s(e.target.value),d.email=""}}),!N&&(E?r.a.createElement("button",{className:"btn btn-lg btn-success btn-block mb-2 mt-4",type:"button",disabled:!0},r.a.createElement("span",{className:"spinner-border spinner-border-sm float-left",role:"status","aria-hidden":"true"}),"Checking Email..."):r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-success btn-block mb-2 mt-4"},"Submit"))),!N&&r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,r.a.createElement(o.b,{to:"/me"},"Skip it"))),N&&r.a.createElement("button",{type:"button",onClick:function(){e.history.push("/")},className:"btn btn-lg btn-success btn-block mb-2 "},"Done"))))},X=function(){var e=Object(n.useContext)(d).auth,t=!1;e&&"admin"===h().role&&(t=!0);return r.a.createElement("nav",{className:"navbar navbar-default navbar-expand-md navbar-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{to:"/",className:"navbar-brand"},"Tournament Fantasy"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mainmenu"},r.a.createElement("span",{style:{color:"yellow"}},r.a.createElement("i",{class:"fas fa-bars"}))),r.a.createElement("div",{className:"collapse navbar-collapse",id:"mainmenu"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":"#mainmenu"},r.a.createElement(o.b,{to:"/squad",className:"nav-link text-warning"},"Squad")),r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":"#mainmenu"},r.a.createElement(o.b,{to:"/points",className:"nav-link text-warning"},"Points")),r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":"#mainmenu"},r.a.createElement(o.b,{to:"/subs",className:"nav-link text-warning"},"Subs")),r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":"#mainmenu"},r.a.createElement(o.b,{to:"/schedule",className:"nav-link text-warning"},"Schedule")),t&&r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":"#mainmenu"},r.a.createElement(o.b,{to:"/admin",className:"nav-link text-warning"},"Admin")),e&&r.a.createElement("span",{"data-toggle":"collapse","data-target":"#mainmenu"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("button",{className:"dropdown-toggle btn btn-success py-0  mt-2",id:"navbarDropdown","data-toggle":"dropdown"},"Actions"),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right"},r.a.createElement(o.b,{to:"/handle",className:"dropdown-item"},"Change Username"),r.a.createElement(o.b,{to:"/changepass",className:"dropdown-item"},"Change Password"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(o.b,{to:"/logout",className:"dropdown-item"},"Logout")),"``  "))))))},A=function(){var e=g();return e?(i.a.defaults.headers.common.Authorization="Bearer "+e,r.a.createElement(m.a,{to:"/me"})):r.a.createElement(m.a,{to:"/login"})},P=function(e){var t=Object(n.useContext)(d).setAuth,a=Object(n.useState)(""),c=Object(l.a)(a,2),s=c[0],m=c[1],u=Object(n.useState)(""),b=Object(l.a)(u,2),p=b[0],h=b[1],g=Object(n.useState)({}),v=Object(l.a)(g,2),f=v[0],N=v[1],w=Object(n.useState)(!1),x=Object(l.a)(w,2),k=x[0],S=x[1],C=function(){var a=Object(y.a)(j.a.mark(function a(n){var r,c,l;return j.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r={email:s,password:p},S(!0),a.prev=3,a.next=6,i.a.put("/api/users",r);case 6:c=a.sent,S(!1),l=c.data.token,i.a.defaults.headers.common.Authorization="Bearer "+l,E(l),t(!0),e.history.push("/me"),a.next=20;break;case 15:a.prev=15,a.t0=a.catch(3),console.log(a.t0.response.data),S(!1),N(a.t0.response.data);case 20:case"end":return a.stop()}},a,null,[[3,15]])}));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"container auth-form-container"},r.a.createElement("div",{className:"row align-items-center justify-content-center auth-form-div"},r.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-6 bg-white rounded p-3"},r.a.createElement("p",{className:" text-muted text-center"},"Welcome to Tournament Fantasy"),r.a.createElement("h1",{className:"display-4 text-center mt-0 mb-3"},"Login"),r.a.createElement("form",{noValidate:!0,className:"p-3",onSubmit:C},r.a.createElement(O,{type:"email",placeholder:"Enter your email",value:s,error:f.email,onChange:function(e){m(e.target.value),f.email=""}}),r.a.createElement(O,{type:"password",placeholder:"Enter password",value:p,error:f.password,onChange:function(e){h(e.target.value),f.password=""}}),k?r.a.createElement("button",{className:"btn btn-lg btn-success btn-block mb-2 mt-4",type:"button",disabled:!0},r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Logging in..."):r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-success btn-block mb-2 mt-4"},"Log in")),r.a.createElement("div",{className:"ml-3 d-lg-inline text-center text-lg-left"},r.a.createElement(o.b,{to:"/forgot"},"Forgot password")),r.a.createElement("div",{className:"d-lg-inline float-lg-right text-center text-lg-right mr-3"},r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(o.b,{to:"/register"},"Register here."))))))},D=function(){var e=Object(n.useContext)(d).setAuth;return delete i.a.defaults.headers.common.Authorization,localStorage.removeItem("tournament-fantasy-token"),e(!1),r.a.createElement(m.a,{to:"/login"})},R=function(){var e=h();return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello ",e.handle))},Y=function(e){return r.a.createElement("div",{className:"container auth-form-container"},r.a.createElement("div",{className:"row align-items-center justify-content-center auth-form-div"},r.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-6 bg-white rounded p-3"},r.a.createElement("h1",{className:"text-center mt-0 mb-3"},"Page not found"),r.a.createElement("button",{type:"button",onClick:function(){e.history.push("/")},className:"btn btn-lg btn-success btn-block mb-2 "},"Home"))))},B=function(e){var t=Object(n.useContext)(d).setAuth,a=Object(n.useState)(""),c=Object(l.a)(a,2),s=c[0],m=c[1],u=Object(n.useState)(""),b=Object(l.a)(u,2),p=b[0],h=b[1],g=Object(n.useState)({}),v=Object(l.a)(g,2),f=v[0],N=v[1],w=Object(n.useState)(!1),x=Object(l.a)(w,2),k=x[0],S=x[1],C=function(){var a=Object(y.a)(j.a.mark(function a(n){var r,c,l;return j.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r={email:s,password:p},S(!0),a.prev=3,a.next=6,i.a.post("/api/users",r);case 6:c=a.sent,S(!1),l=c.data.token,i.a.defaults.headers.common.Authorization="Bearer "+l,E(l),t(!0),e.history.push("/handle"),a.next=20;break;case 15:a.prev=15,a.t0=a.catch(3),console.log(a.t0.response.data),S(!1),N(a.t0.response.data);case 20:case"end":return a.stop()}},a,null,[[3,15]])}));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"container auth-form-container"},r.a.createElement("div",{className:"row align-items-center justify-content-center auth-form-div"},r.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-6 bg-white rounded p-3"},r.a.createElement("p",{className:" text-muted text-center"},"Get set for some fantasy fun"),r.a.createElement("h1",{className:"display-4 text-center mt-0 mb-3"},"Register"),r.a.createElement("form",{noValidate:!0,className:"p-3",onSubmit:C},r.a.createElement(O,{type:"email",placeholder:"Enter your email",value:s,error:f.email,onChange:function(e){m(e.target.value),f.email=""}}),r.a.createElement(O,{type:"password",placeholder:"Pick a password",value:p,error:f.password,onChange:function(e){h(e.target.value),f.password=""}}),k?r.a.createElement("button",{className:"btn btn-lg btn-success btn-block mb-2 mt-4",type:"button",disabled:!0},r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Registering..."):r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-success btn-block mb-2 mt-4"},"Register")),r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,"Already have an account? ",r.a.createElement(o.b,{to:"/login"},"Login here."))))))},z=function(e){var t=e.match.params.code,a=Object(n.useState)(""),c=Object(l.a)(a,2),s=c[0],m=c[1],u=Object(n.useState)({}),d=Object(l.a)(u,2),b=d[0],p=d[1],h=Object(n.useState)(!1),E=Object(l.a)(h,2),g=E[0],v=E[1],f=Object(n.useState)(!1),N=Object(l.a)(f,2),w=N[0],x=N[1],k=function(){var a=Object(y.a)(j.a.mark(function a(n){var r;return j.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r={code:t,password:s},v(!0),a.prev=3,a.next=6,i.a.post("/api/users/password",r);case 6:v(!1),x(!0),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),400===a.t0.response.status?(v(!1),p(a.t0.response.data)):e.history.push("/login");case 13:case"end":return a.stop()}},a,null,[[3,10]])}));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"container auth-form-container"},r.a.createElement("div",{className:"row align-items-center justify-content-center auth-form-div"},r.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-6 bg-white rounded p-3"},!w&&r.a.createElement("p",{className:" text-muted text-center"},"Your current password is er... ********"),w?r.a.createElement("h1",{className:"text-center mt-0 mb-3"},"Your password has been reset"):r.a.createElement("h1",{className:"display-4 text-center mt-0 mb-3"},"Reset Password"),r.a.createElement("form",{noValidate:!0,className:"p-3",onSubmit:k},!w&&r.a.createElement(O,{type:"password",placeholder:"Set a new password",value:s,error:b.password,onChange:function(e){m(e.target.value),b.password=""}}),!w&&(g?r.a.createElement("button",{className:"btn btn-lg btn-success btn-block mb-2 mt-4",type:"button",disabled:!0},r.a.createElement("span",{className:"spinner-border spinner-border-sm float-left",role:"status","aria-hidden":"true"}),"Resetting Password..."):r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-success btn-block mb-2 mt-4"},"Reset"))),!w&&r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,r.a.createElement(o.b,{to:"/login"},"Skip it"))),w&&r.a.createElement("button",{type:"button",onClick:function(){e.history.push("/login")},className:"btn btn-lg btn-success btn-block mb-2 "},"Login"))))},L=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Squad Rule"))},V=function(){return r.a.createElement("div",null)};var I=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){var e=g();e&&(i.a.defaults.headers.common.Authorization="Bearer "+e,c(!0))},[]),r.a.createElement(d.Provider,{value:{auth:a,setAuth:c}},r.a.createElement(o.a,null,r.a.createElement(X,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:A}),r.a.createElement(m.b,{exact:!0,path:"/squad",component:L}),r.a.createElement(N,{exact:!0,path:"/login",component:P}),r.a.createElement(N,{exact:!0,path:"/register",component:B}),r.a.createElement(N,{exact:!0,path:"/forgot",component:C}),r.a.createElement(N,{exact:!0,path:"/resetpass/:code",component:z}),r.a.createElement(f,{exact:!0,path:"/logout",component:D}),r.a.createElement(f,{exact:!0,path:"/changepass",component:S}),r.a.createElement(f,{exact:!0,path:"/handle",component:k}),r.a.createElement(f,{exact:!0,path:"/me",component:R}),r.a.createElement(f,{exact:!0,path:"/admin",component:w}),r.a.createElement(f,{exact:!0,path:"/admin/uploadTeams",component:V}),r.a.createElement(m.b,{component:Y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.f37db290.chunk.js.map
(this.webpackJsonpsnapflash=this.webpackJsonpsnapflash||[]).push([[0],{148:function(e,t,n){},149:function(e,t,n){},449:function(e,t,n){},450:function(e,t,n){},451:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),a=n.n(r),s=n(28),i=n.n(s),o=n(9),l=(n(148),n(13)),u=n(3),j=n.n(u),d=n(7),b=n(5),h=n(6),O="/api/users";function p(e){return x(O,"POST",e)}function f(e){return x("".concat(O,"/login"),"POST",e)}function x(e){return m.apply(this,arguments)}function m(){return(m=Object(d.a)(j.a.mark((function e(t){var n,c,r,a,s,i=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",c=i.length>2&&void 0!==i[2]?i[2]:null,r={method:n},c&&(r.headers={"Content-Type":"application/json"},r.body=JSON.stringify(c)),(a=y())&&(r.headers=r.headers||{},r.headers.Authorization="Bearer ".concat(a)),e.next=8,fetch(t,r);case 8:if(!(s=e.sent).ok){e.next=11;break}return e.abrupt("return",s.json());case 11:throw new Error("Bad Request");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t);case 3:return n=e.sent,localStorage.setItem("token",n),e.abrupt("return",C());case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Invalid Sign Up");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(e){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:return n=e.sent,localStorage.setItem("token",n),e.abrupt("return",C());case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Invalid Login");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function y(){var e=localStorage.getItem("token");return e?JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3?(localStorage.removeItem("token"),null):e:null}function C(){var e=y();return e?JSON.parse(atob(e.split(".")[1])).user:null}n(149);function D(e){return S.apply(this,arguments)}function S(){return(S=Object(d.a)(j.a.mark((function e(t){var n,c,r,a,s,i=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",c=i.length>2&&void 0!==i[2]?i[2]:null,r={method:n},c&&(r.headers={"Content-Type":"application/json"},r.body=JSON.stringify(c)),(a=y())&&(r.headers=r.headers||{},r.headers.Authorization="Bearer ".concat(a)),e.next=8,fetch(t,r);case 8:if(s=e.sent,console.log(s),!s.ok){e.next=12;break}return e.abrupt("return",s.json());case 12:throw new Error("Bad Request");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E="api/decks";function N(){return D(E)}function F(e){return D(E,"POST",e)}function I(e){return D("".concat(E,"/").concat(e._id),"PUT",e)}function T(e){return D("".concat(E,"/").concat(e._id),"DELETE")}var P=n(14),A=n(10),L=n(137),U=n(138),G=n(143),H=n(142),M=function(e){Object(G.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(L.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:"",confirm:"",error:""},e.handleChange=function(t){var n;e.setState((n={},Object(A.a)(n,t.target.name,t.target.value),Object(A.a)(n,"error",""),n))},e.handleSubmit=function(){var t=Object(d.a)(j.a.mark((function t(n){var c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,delete(c=Object(P.a)({},e.state)).error,delete c.confirm,t.next=7,v(c);case 7:r=t.sent,e.props.setUser(r),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e.setState({error:"Sign Up Failed - Try Again"});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(U.a)(n,[{key:"render",value:function(){var e=this.state.password!==this.state.confirm;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"form-container",children:Object(c.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(c.jsx)("label",{children:"Name"}),Object(c.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,required:!0}),Object(c.jsx)("label",{children:"Email"}),Object(c.jsx)("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,required:!0}),Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0}),Object(c.jsx)("label",{children:"Confirm"}),Object(c.jsx)("input",{type:"password",name:"confirm",value:this.state.confirm,onChange:this.handleChange,required:!0}),Object(c.jsx)("button",{type:"submit",disabled:e,children:"SIGN UP"})]})}),Object(c.jsxs)("p",{className:"error-message",children:["\xa0",this.state.error]})]})}}]),n}(r.Component);function R(e){var t=e.setUser,n=Object(r.useState)({email:"",password:""}),a=Object(b.a)(n,2),s=a[0],i=a[1],o=Object(r.useState)(""),l=Object(b.a)(o,2),u=l[0],h=l[1];function O(e){i(Object(P.a)(Object(P.a)({},s),{},Object(A.a)({},e.target.name,e.target.value))),h("")}function p(){return(p=Object(d.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,k(s);case 4:c=e.sent,t(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h("Log In Failed - Try Again");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"form-container",onSubmit:function(e){return p.apply(this,arguments)},children:Object(c.jsxs)("form",{autoComplete:"off",children:[Object(c.jsx)("label",{children:"Email"}),Object(c.jsx)("input",{type:"text",name:"email",value:s.email,onChange:O,required:!0}),Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{type:"password",name:"password",value:s.password,onChange:O,required:!0}),Object(c.jsx)("button",{type:"submit",children:"LOG IN"})]})}),Object(c.jsxs)("p",{className:"error-message",children:["\xa0",u]})]})}function q(e){var t=e.setUser,n=Object(r.useState)(!0),a=Object(b.a)(n,2),s=a[0],i=a[1];return Object(c.jsxs)("main",{children:[Object(c.jsx)("h1",{children:"AuthPage"}),s?Object(c.jsx)(R,{setUser:t}):Object(c.jsx)(M,{setUser:t}),Object(c.jsx)("button",{onClick:function(){return i(!s)},children:s?"SIGN UP":"LOG IN"})]})}n(150);function K(e){var t=e.card,n=e.cardKey,r=e.handleCardsInputChange,a=e.handleCardsDelete;function s(e){console.log(Object(A.a)({},e.target.name,e.target.value)),r(e,n)}return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{id:n,children:[Object(c.jsx)("label",{htmlFor:"",children:"Word:"}),Object(c.jsx)("textarea",{type:"text",onChange:s,name:"word",value:t.word}),Object(c.jsx)("label",{htmlFor:"",children:"Definition:"}),Object(c.jsx)("textarea",{type:"text",onChange:s,name:"definition",value:t.definition}),Object(c.jsx)("p",{onClick:function(e){a(n)},children:"DELETE"})]})})}function J(e){var t=e.handleAddDeck,n=Object(h.g)(),a=Object(r.useState)({name:"",description:""}),s=Object(b.a)(a,2),i=s[0],o=s[1],u=Object(r.useState)({word:"",definition:""}),O=Object(b.a)(u,2),p=O[0],f=O[1],x=Object(r.useState)([]),m=Object(b.a)(x,2),v=m[0],g=m[1],k=Object(r.useRef)(),w=Object(r.useRef)(),y=Object(r.useRef)(),C=Object(r.useState)(!1),D=Object(b.a)(C,2),S=D[0],E=D[1],N=Object(r.useState)(!0),F=Object(b.a)(N,2),I=F[0],T=F[1],L=Object(r.useState)(!1),U=Object(b.a)(L,2);U[0],U[1];function G(e){f(Object(P.a)(Object(P.a)({},p),{},Object(A.a)({},e.target.name,e.target.value)))}function H(e){console.log(Object(A.a)({},e.target.name,e.target.value)),o(Object(P.a)(Object(P.a)({},i),{},Object(A.a)({},e.target.name,e.target.value)))}function M(e,t){var n=Object(l.a)(v);n[t][e.target.name]=e.target.value,g(n)}function R(e){return q.apply(this,arguments)}function q(){return(q=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(!0);case 2:(n=Object(l.a)(v)).push(t),g(n),f({word:"",definition:""}),k.current.focus(),k.current.value="",w.current.value="",E(!0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){console.log("Hello?");var t=Object(l.a)(v);t.splice(e,1),console.log(t),g(t)}return Object(r.useEffect)((function(){var e=0,t=0;y.current.childNodes.forEach((function(n){"textarea"===n.localName&&(t+=1,n.value&&(e+=1)),"div"===n.localName&&n.childNodes.forEach((function(n){"textarea"===n.localName&&(t+=1,n.value&&(e+=1))}))})),E(e!==t)}),[v,i,p]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Make a New Deck Here"}),Object(c.jsxs)("form",{autocomplete:"off",ref:y,onSubmit:function(e){e.preventDefault();var c=Object(l.a)(v);c.push(p),t(i,c),n.push("/")},children:[Object(c.jsx)("label",{children:"Name:"}),Object(c.jsx)("textarea",{name:"name",type:"text",onChange:H}),Object(c.jsx)("label",{children:"Description:"}),Object(c.jsx)("textarea",{name:"description",type:"text",onChange:H}),v.map((function(e,t){return Object(c.jsx)(K,{card:e,handleCardsInputChange:M,cardKey:t,handleCardsDelete:J})})),I?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("label",{children:"Word:"}),Object(c.jsx)("textarea",{name:"word",type:"text",ref:k,onChange:G}),Object(c.jsx)("label",{children:"Definition:"}),Object(c.jsx)("textarea",{name:"definition",onKeyDown:function(e){9===e.which&&(e.preventDefault(),R(p))},type:"text",ref:w,onChange:G}),0===v.length?Object(c.jsx)(c.Fragment,{}):Object(c.jsx)("p",{onClick:function(){var e=Object(l.a)(v),t=e.splice(-1,1);console.log(k.current.value),k.current.value=t[0].word,w.current.value=t[0].definition,f(t[0]),g(e)},children:"DELETE"})]}):Object(c.jsx)(c.Fragment,{}),Object(c.jsx)("button",{disabled:S,children:"submit"})]}),Object(c.jsx)("button",{onClick:function(){return R(p)},children:"Add Card"})]})}function _(e){var t=e.deck,n=e.handleDeleteDeck;return console.log("HI IM ON THE DECK PAGE",t),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:t.name}),Object(c.jsx)("div",{children:t.description}),Object(c.jsx)(o.b,{to:{pathname:"/edit",state:{deck:t}},children:"UPDATE"}),Object(c.jsx)(o.b,{to:{pathname:"/list",state:{deck:t}},children:"List View"}),Object(c.jsx)(o.b,{to:{pathname:"/flip",state:{deck:t}},children:"Flip View"}),Object(c.jsx)("button",{onClick:function(e){n(t)},children:"DELETE"})]})}function B(e){var t=e.decks,n=e.handleDeleteDeck;console.log(typeof n);var r=t.map((function(e,t){return console.log("In the map function",e),Object(c.jsx)(_,{deck:e,handleDeleteDeck:n},e._id)}));return console.log("returned from map",r),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"DecksContainer"}),r]})}function V(e){var t=e.decks,n=e.handleDeleteDeck;return console.log(typeof n),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"My Decks"}),Object(c.jsx)(B,{decks:t,handleDeleteDeck:n})]})}n(449);function W(e){var t=e.card;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:t.word}),Object(c.jsx)("div",{children:t.definition})]})}function z(e){var t=e.deck.cards.map((function(e){return Object(c.jsx)(W,{card:e})}));return console.log(t),Object(c.jsx)(c.Fragment,{children:t})}function Q(){var e=Object(h.h)(),t=Object(h.h)().state.deck;return console.log(e),console.log(t),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"View Card List Page"}),t.name,":",t.description,Object(c.jsx)(z,{location:e,deck:t})]})}n(450);function X(e){var t=e.currentCard;return Object(c.jsx)("div",{className:"flex-ctr-ctr",children:Object(c.jsx)("div",{class:"flip-card",children:Object(c.jsxs)("div",{class:"flip-card-inner",children:[Object(c.jsxs)("div",{class:"flip-card-front",children:[Object(c.jsx)("div",{className:"card-index",children:"1"}),Object(c.jsx)("div",{className:"flex-ctr-ctr card-content",children:t.word})]}),Object(c.jsx)("div",{class:"flip-card-back",children:Object(c.jsx)("div",{className:"flex-ctr-ctr card-content",children:t.definition})})]})})})}function Y(e){var t=e.deck,n=Object(r.useState)(t.cards[0]),a=Object(b.a)(n,2),s=a[0],i=a[1];function o(e){var n=t.cards.length,c=s,r=t.cards.indexOf(c);console.log(c),"Previous"===e.target.innerHTML&&(console.log("boop left"),(r-=1)<0&&(console.log("GotoEndOFDeck"),r=n-1)),"Next"===e.target.innerHTML&&(console.log("boop Right"),r+=1,t.cards[n-1]._id===c._id&&(console.log("GotoStartOFDeck"),r=0)),console.log(r),i(t.cards[r])}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:Object(c.jsx)(X,{currentCard:s})}),Object(c.jsxs)("span",{children:[Object(c.jsx)("button",{onClick:o,children:"Previous"}),Object(c.jsx)("button",{onClick:o,children:"Next"})]})]})}function Z(){var e=Object(h.h)().state.deck;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"I am a PAGE"}),Object(c.jsxs)("h2",{children:["Name Of Deck: ",e.name]}),Object(c.jsxs)("h2",{children:["Description: ",e.description]}),Object(c.jsx)(Y,{deck:e})]})}function $(e){var t=e.user,n=e.setUser;return Object(c.jsxs)("nav",{children:[Object(c.jsx)(o.c,{exact:!0,activeStyle:{backgroundColor:"yellow"},to:"/",children:"MyDecks"}),"\xa0 | \xa0",Object(c.jsx)(o.c,{exact:!0,activeStyle:{backgroundColor:"yellow"},to:"/new",children:"NewDeck"}),"\xa0 | \xa0",Object(c.jsxs)("span",{children:["Welcome, ",t.name]}),"\xa0\xa0",Object(c.jsx)(o.b,{to:"",onClick:function(){localStorage.removeItem("token"),n(null)},children:"Log Out"})]})}function ee(e){var t=e.card,n=e.cardKey,r=e.handleCardsInputChange,a=e.handleCardsDelete;function s(e){console.log(Object(A.a)({},e.target.name,e.target.value)),r(e,n)}return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{id:n,children:[Object(c.jsx)("label",{htmlFor:"",children:"Word:"}),Object(c.jsx)("textarea",{type:"text",onChange:s,name:"word",value:t.word}),Object(c.jsx)("label",{htmlFor:"",children:"Definition:"}),Object(c.jsx)("textarea",{type:"text",onChange:s,name:"definition",value:t.definition}),Object(c.jsx)("p",{onClick:function(e){console.log("Poppa?"),a(n)},children:"DELETE"})]})})}function te(e){var t=e.handleUpdateDeck,n=(Object(h.g)(),Object(h.h)()),a=Object(r.useState)({name:"",description:""}),s=Object(b.a)(a,2),i=s[0],u=s[1],O=Object(r.useState)({word:"",definition:""}),p=Object(b.a)(O,2),f=p[0],x=p[1],m=Object(r.useState)([]),v=Object(b.a)(m,2),g=v[0],k=v[1],w=Object(h.h)().state.deck,y=Object(r.useRef)(),C=Object(r.useRef)(),D=Object(r.useRef)(),S=Object(r.useState)(!1),E=Object(b.a)(S,2),N=E[0],F=E[1],I=Object(r.useState)(!0),T=Object(b.a)(I,2),L=T[0],U=T[1];function G(e){u(Object(P.a)(Object(P.a)({},w),{},Object(A.a)({},e.target.name,e.target.value)))}function H(e){x(Object(P.a)(Object(P.a)({},f),{},Object(A.a)({},e.target.name,e.target.value)))}function M(e,t){var n=Object(l.a)(g);n[t][e.target.name]=e.target.value,k(n)}function R(e){return q.apply(this,arguments)}function q(){return(q=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(!0);case 2:(n=Object(l.a)(g)).push(t),k(n),x({word:"",definition:""}),y.current.focus(),y.current.value="",C.current.value="",F(!0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){console.log("Hello?");var t=Object(l.a)(g);t.splice(e,1),console.log(t),k(t)}return console.log("HELLO I AM ON THE UPDATE PAGE",w),Object(r.useEffect)((function(){var e=0,t=0;D.current.childNodes.forEach((function(n){"textarea"===n.localName&&(t+=1,n.value&&(e+=1)),"div"===n.localName&&n.childNodes.forEach((function(n){"textarea"===n.localName&&(t+=1,n.value&&(e+=1))}))})),F(e!==t)}),[g,i,f]),Object(r.useEffect)((function(){u({name:w.name,description:w.description});var e=Object(l.a)(w.cards),t=Object(l.a)(e),n=t.splice(-1,1);y.current.value=n[0].word,C.current.value=n[0].definition,k(t),x(n[0])}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Make a New Deck Here"}),Object(c.jsxs)("form",{autocomplete:"off",ref:D,onSubmit:function(e){e.preventDefault();var c=Object(l.a)(g);""===f.definition&&f.name,c.push(f),console.log(n),t(w,c,w._id)},children:[Object(c.jsx)("label",{children:"Name:"}),Object(c.jsx)("textarea",{name:"name",type:"text",defaultValue:i.name,onChange:G}),Object(c.jsx)("label",{children:"Description:"}),Object(c.jsx)("textarea",{name:"description",type:"text",defaultValue:i.description,onChange:G}),g.map((function(e,t){return Object(c.jsx)(ee,{card:e,handleCardsInputChange:M,cardKey:t,handleCardsDelete:K})})),L?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("label",{children:"Word:"}),Object(c.jsx)("textarea",{name:"word",type:"text",ref:y,onChange:H}),Object(c.jsx)("label",{children:"Definition:"}),Object(c.jsx)("textarea",{name:"definition",onKeyDown:function(e){9===e.which&&(e.preventDefault(),R(f))},type:"text",ref:C,onChange:H}),0===g.length?Object(c.jsx)(c.Fragment,{}):Object(c.jsx)("p",{onClick:function(){var e=Object(l.a)(g),t=e.splice(-1,1);console.log(y.current.value),y.current.value=t[0].word,C.current.value=t[0].definition,x(t[0]),k(e)},children:"DELETE"})]}):Object(c.jsx)(c.Fragment,{}),Object(c.jsx)("button",{disabled:N,children:"submit"})]}),Object(c.jsx)("button",{onClick:function(){return R(f)},children:"Add Card"}),Object(c.jsx)(o.b,{to:{pathname:"/list",state:{deck:w}},children:"Study"})]})}function ne(){var e=Object(r.useState)(C()),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)([]),i=Object(b.a)(s,2),o=i[0],u=i[1];function O(){return(O=Object(d.a)(j.a.mark((function e(t,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.cards=n,e.next=3,F(t);case 3:c=e.sent,u([].concat(Object(l.a)(o),[c]));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(d.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.cards=n,e.next=3,I(t);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:return e.next=4,N();case 4:n=e.sent,u(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsx)("main",{className:"App",children:n?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)($,{user:n,setUser:a}),Object(c.jsxs)(h.d,{children:[Object(c.jsx)(h.b,{path:"/new",children:Object(c.jsx)(J,{handleAddDeck:function(e,t){return O.apply(this,arguments)}})}),Object(c.jsx)(h.b,{path:"/decks",children:Object(c.jsx)(V,{decks:o,handleDeleteDeck:f})}),Object(c.jsx)(h.b,{path:"/list",children:Object(c.jsx)(Q,{})}),Object(c.jsx)(h.b,{path:"/flip",children:Object(c.jsx)(Z,{})}),Object(c.jsx)(h.b,{path:"/edit",children:Object(c.jsx)(te,{handleDeleteDeck:f,handleUpdateDeck:function(e,t){return p.apply(this,arguments)}})}),Object(c.jsx)(h.a,{to:"/decks"})]})]}):Object(c.jsx)(q,{setUser:a})})}i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(o.a,{children:Object(c.jsx)(ne,{})})}),document.getElementById("root"))}},[[451,1,2]]]);
//# sourceMappingURL=main.a79f4373.chunk.js.map
(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{134:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(15),r=a.n(o),i=a(14),s=a(53),d=a(82),l=a(12),j={logged:localStorage.getItem("logged"),uid:localStorage.getItem("uid"),token:localStorage.getItem("token")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOG_IN":return Object(l.a)(Object(l.a)({},t),{},{logged:!0,uid:e.payload.user.uid,token:e.payload.token});case"LOG_OUT":return{logged:!1,uid:null,token:null};default:return t}},b=a(10),O={data:{}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_DATA":return Object(l.a)(Object(l.a)({},t),{},{data:e.payload});case"SET_FAVORITE":var a=Object(l.a)(Object(l.a)({},t.data[e.payload]),{},{fav:!t.data[e.payload].fav}),n=Object(l.a)(Object(l.a)({},t.data),{},Object(b.a)({},e.payload,Object(l.a)({},a)));return Object(l.a)(Object(l.a)({},t),{},{data:n});case"SET_DONE":var c=Object(l.a)(Object(l.a)({},t.data[e.payload]),{},{done:!t.data[e.payload].done}),o=Object(l.a)(Object(l.a)({},t.data),{},Object(b.a)({},e.payload,Object(l.a)({},c)));return Object(l.a)(Object(l.a)({},t),{},{data:o});case"DELETE_TODO":var r=Object(l.a)({},t.data);return delete r[e.payload],Object(l.a)(Object(l.a)({},t),{},{data:r});default:return t}},p=Object(s.b)({account:u,todo:h}),x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,g=Object(s.d)(p,x(Object(s.a)(d.a)));window.store=g;var f=g,m=a(25),v=a(51),y=a(17),I=a(179),k=a(101),w=a(180),C=a(181),S=a(170),N=a(22),E=a(172),T=a(174),_=a(176),D=a(175),L=a(185),A=a(89),F=a.n(A),R=a(88),B=a.n(R),G=a(90),W=a.n(G),P=a(87),U=a.n(P),V=(a(73),a(85),a(49));a(121),a(137);V.a.initializeApp({apiKey:"AIzaSyD0qw6D7y6xBkdII_b9ZuXlbJn3-DoP_L4",authDomain:"react-todo-21de0.firebaseapp.com",projectId:"react-todo-21de0",storageBucket:"react-todo-21de0.appspot.com",messagingSenderId:"860332836225",appId:"1:860332836225:web:46298103de4e8c3554d480"});var z=new V.a.auth.GoogleAuthProvider;var J=V.a.firestore();var M=function(t){return{type:"SET_DATA",payload:t}},X=a(3),H=Object(S.a)((function(t){return{grow:Object(b.a)({flexGrow:1,marginBottom:"80px"},t.breakpoints.down("xs"),{justifyContent:"space-between",flexGrow:1}),title:Object(b.a)({display:"block",fontWeight:500},t.breakpoints.down("xs"),{display:"none"}),search:Object(b.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(N.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(N.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:t.spacing(3),width:"auto"},t.breakpoints.down("xs"),{width:"50%"}),searchIcon:{padding:t.spacing(0,1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)")}}}));function q(t){var e=t.toggleTheme,a=t.theme,n=t.searchInput,c=t.updateSearchInput,o=H(),r=Object(i.b)();return Object(X.jsx)("div",{className:o.grow,children:Object(X.jsx)(E.a,{position:"static",children:Object(X.jsxs)(T.a,{children:[Object(X.jsx)(D.a,{className:o.title,variant:"h6",noWrap:!0,children:"React Todo"}),Object(X.jsxs)("form",{className:o.search,children:[Object(X.jsx)("div",{className:o.searchIcon,children:Object(X.jsx)(U.a,{})}),Object(X.jsx)(L.a,{placeholder:"Search\u2026",input:n,onChange:c,classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"}})]}),Object(X.jsx)("div",{className:o.grow}),Object(X.jsxs)("div",{children:[Object(X.jsx)(_.a,{"aria-label":"change theme",color:"inherit",onClick:e,children:a?Object(X.jsx)(B.a,{}):Object(X.jsx)(F.a,{})}),Object(X.jsx)(_.a,{edge:"end","aria-label":"logout of account",color:"inherit",onClick:function(){V.a.auth().signOut().then((function(){console.log("Signout Succesfull")}),(function(t){console.log("Signout Failed")})),r({type:"LOG_OUT"}),r(M({})),localStorage.clear()},children:Object(X.jsx)(W.a,{})})]})]})})})}var K=a(91),Z=a(177),Q=a(182),Y=Object(S.a)((function(){return{form:{display:"flex",justifyContent:"space-between",marginBottom:"40px"},textField:{width:340},btn:{width:200}}}));function $(){var t=Y(),e=Object(i.c)((function(t){return t.account.uid})),a=Object(i.c)((function(t){return t.todo.data})),n=c.a.useState(""),o=Object(m.a)(n,2),r=o[0],s=o[1],d=Object(i.b)();return Object(X.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=Object(K.uuid)(),c=Object(b.a)({},n,{title:r,fav:!1,done:!1,id:n});J.collection("todos").doc(e).set(Object(l.a)({},c),{merge:!0}),d(M(Object(l.a)(Object(l.a)({},a),c)))},className:t.form,children:[Object(X.jsx)(Q.a,{className:t.textField,id:"outlined-basic",label:"Create a new note",variant:"outlined",onChange:function(t){s(t.target.value)}}),Object(X.jsx)(Z.a,{className:t.btn,size:"large",variant:"contained",color:"primary",type:"submit",children:"Create"})]})}var tt=a(183),et=a(184),at=a(178),nt=a(93),ct=a.n(nt),ot=a(94),rt=a.n(ot),it=a(95),st=a.n(it),dt=a(96),lt=a.n(dt),jt=Object(S.a)((function(t){return{root:{background:t.palette.primary.main,position:"fixed",bottom:0,left:0,right:0},icon:{color:t.palette.secondary.main},iconActive:{color:t.palette.common.white}}}));function ut(){var t=jt(),e=c.a.useState(0),a=Object(m.a)(e,2),n=a[0],o=a[1];return Object(X.jsx)(tt.a,{className:t.root,children:Object(X.jsxs)(et.a,{centered:!0,textColor:"secondary",indicatorColor:"secondary",value:n,children:[Object(X.jsx)(at.a,{onClick:function(){return o(0)},component:v.b,to:"./",icon:Object(X.jsx)(ct.a,{color:"inherit"})}),Object(X.jsx)(at.a,{onClick:function(){return o(1)},component:v.b,to:"./favorite",icon:Object(X.jsx)(rt.a,{color:"inherit"})}),Object(X.jsx)(at.a,{onClick:function(){return o(2)},component:v.b,to:"./done",icon:Object(X.jsx)(st.a,{color:"inherit"})}),Object(X.jsx)(at.a,{onClick:function(){return o(3)},component:v.b,to:"./undone",icon:Object(X.jsx)(lt.a,{color:"inherit"})})]})})}var bt=a(139),Ot=a(97),ht=a.n(Ot),pt=Object(S.a)((function(){return{root:{padding:"25px",width:400,height:200,margin:"0 auto",marginTop:"5%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},title:{marginBottom:"10px",textAlign:"center"},btn:{margin:"0 auto"}}}));function xt(){var t=Object(i.b)(),e=pt(),a=function(e){var a=e.user,n=e.token;a&&n&&t({type:"LOG_IN",payload:{user:a,token:n}})};return Object(X.jsxs)(bt.a,{elevation:1,className:e.root,children:[Object(X.jsx)(D.a,{className:e.title,variant:"h5",children:"Sing in with Google to use app:"}),Object(X.jsx)(ht.a,{className:e.btn,onClick:function(){return t=a,void V.a.auth().signInWithPopup(z).then((function(e){var a=e.credential.accessToken,n=e.user;localStorage.setItem("token",a),localStorage.setItem("uid",n.uid),localStorage.setItem("logged",!0),t({token:a,user:n})})).catch((function(t){return{errorCode:t.code,errorMessage:t.message}}));var t}})]})}var gt=Object(S.a)((function(){return{noItems:{marginBottom:"230px"}}}));function ft(t){var e=t.list,a=gt(),n=Object(i.c)((function(t){return t.todo.data}));return Object(X.jsx)(X.Fragment,{children:0===Object.keys(n).length?Object(X.jsx)(D.a,{className:a.noItems,variant:"h5",children:"It looks like you haven't added anything to your to-do list yet."}):e.map((function(t){return t}))})}var mt=a(98),vt=a.n(mt),yt=a(99),It=a.n(yt),kt=a(100),wt=a.n(kt),Ct=Object(S.a)((function(t){return{note:{padding:"13px 20px",borderRadius:"5px",display:"flex",justifyContent:"space-between",alignItems:"center","&+&":{marginTop:"20px"},"&:last-child":{marginBottom:"60px"}},doneNote:{textDecoration:"line-through",color:t.palette.primary.main}}}));function St(t){var e=t.children,a=t.todoId,n=Ct(),c=Object(i.c)((function(t){return t.account.uid})),o=Object(i.c)((function(t){return t.todo.data})),r=Object(i.b)(),s=o[a].fav,d=o[a].done;return Object(X.jsxs)(bt.a,{elevation:1,className:n.note,children:[Object(X.jsx)(D.a,{className:d?n.doneNote:"",variant:"h6",component:"p",children:e}),Object(X.jsxs)(tt.a,{children:[Object(X.jsx)(_.a,{onClick:function(){r(function(t){return{type:"SET_FAVORITE",payload:t}}(a)),J.collection("todos").doc(c).update(Object(b.a)({},a,Object(l.a)(Object(l.a)({},o[a]),{},{fav:!o[a].fav})))},children:Object(X.jsx)(vt.a,{style:s?{color:"red"}:{}})}),Object(X.jsx)(_.a,{onClick:function(){r(function(t){return{type:"SET_DONE",payload:t}}(a)),J.collection("todos").doc(c).update(Object(b.a)({},a,Object(l.a)(Object(l.a)({},o[a]),{},{done:!o[a].done})))},children:Object(X.jsx)(It.a,{style:d?{color:"green"}:{}})}),Object(X.jsx)(_.a,{onClick:function(){r(function(t){return{type:"DELETE_TODO",payload:t}}(a)),J.collection("todos").doc(c).update(Object(b.a)({},a,V.a.firestore.FieldValue.delete()))},children:Object(X.jsx)(wt.a,{})})]})]})}var Nt=Object(S.a)((function(t){return{notesHeader:Object(b.a)({display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"20px"},t.breakpoints.down("xs"),{display:"block"}),title:{fontWeight:500},subtitle:{fontWeight:300}}}));function Et(t){var e=t.children,a=t.num,n=Nt();return Object(X.jsxs)("div",{className:n.notesHeader,children:[Object(X.jsx)(D.a,{className:n.title,variant:"h4",children:e}),Object(X.jsxs)(D.a,{className:n.subtitle,variant:"h5",children:["number of records: ",a]})]})}function Tt(t){var e=t.searchInput,a=Object(i.c)((function(t){return t.todo.data})),n=[];for(var c in a)void 0!==e&&""!==e?a[c].title.toLowerCase().includes(e.toLowerCase())&&n.push(Object(X.jsx)(St,{todoId:c,children:a[c].title},c)):n.push(Object(X.jsx)(St,{todoId:c,children:a[c].title},c));return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Et,{num:n.length,children:"All todos"}),Object(X.jsx)(ft,{list:n})]})}function _t(t){var e=t.searchInput,a=Object(i.c)((function(t){return t.todo.data})),n=[];for(var c in a)void 0!==e&&""!==e?a[c].title.toLowerCase().includes(e.toLowerCase())&&a[c].fav&&n.push(Object(X.jsx)(St,{todoId:c,children:a[c].title},c)):a[c].fav&&n.push(Object(X.jsx)(St,{todoId:c,children:a[c].title},c));return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Et,{num:n.length,children:"Favorite todos"}),Object(X.jsx)(ft,{list:n})]})}function Dt(t){var e=t.searchInput,a=Object(i.c)((function(t){return t.todo.data})),n=[];for(var c in a)void 0!==e&&""!==e?a[c].title.toLowerCase().includes(e.toLowerCase())&&a[c].done&&n.push(Object(X.jsx)(St,{todoId:c,children:a[c].title},c)):a[c].done&&n.push(Object(X.jsx)(St,{todoId:c,children:a[c].title},c));return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Et,{num:n.length,children:"Done todos"}),Object(X.jsx)(ft,{list:n})]})}function Lt(t){var e=t.searchInput,a=Object(i.c)((function(t){return t.todo.data})),n=[];for(var c in a)void 0!==e&&""!==e?a[c].title.toLowerCase().includes(e.toLowerCase())&&!a[c].done&&n.push(Object(X.jsx)(St,{todoId:c,children:a[c].title},c)):a[c].done||n.push(Object(X.jsx)(St,{todoId:c,children:a[c].title},c));return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Et,{num:n.length,children:"Undone todos"}),Object(X.jsx)(ft,{list:n})]})}function At(){var t=c.a.useState("true"===localStorage.getItem("dark")),e=Object(m.a)(t,2),a=e[0],n=e[1],o=c.a.useState(""),r=Object(m.a)(o,2),s=r[0],d=r[1],l=Object(i.c)((function(t){return t.account.logged})),j=Object(i.c)((function(t){return t.account.uid})),u=Object(k.a)({palette:{primary:{main:"#64b5f6",light:"#9be7ff",dark:"#2286c3"},secondary:{main:"#1565c0",light:"#5e92f3",dark:"#003c8f"}}}),b=Object(k.a)({palette:{type:"dark",primary:{main:"#212121",light:"#484848",dark:"#000000"},secondary:{main:"#424242",light:"#6d6d6d",dark:"#1b1b1b"}}}),O=Object(i.b)();return c.a.useEffect((function(){j&&J.collection("todos").doc(j).get().then((function(t){t.exists?O(M(t.data())):J.collection("todos").doc(j).set({})})).catch((function(t){console.log("Error getting document:",t)}))}),[O,j]),Object(X.jsx)("div",{className:"App",children:Object(X.jsx)(I.a,{theme:a?b:u,children:Object(X.jsxs)(v.a,{children:[Object(X.jsx)(w.a,{}),l?Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(q,{toggleTheme:function(){n(!a),localStorage.setItem("dark",!a)},theme:a,searchInput:s,updateSearchInput:function(t){d(t.target.value)}}),Object(X.jsxs)(C.a,{maxWidth:"sm",children:[Object(X.jsx)($,{}),Object(X.jsxs)(y.c,{children:[Object(X.jsx)(y.a,{exact:!0,path:"/react-todo/",children:Object(X.jsx)(Tt,{searchInput:s})}),Object(X.jsx)(y.a,{exact:!0,path:"/react-todo/favorite",children:Object(X.jsx)(_t,{searchInput:s})}),Object(X.jsx)(y.a,{exact:!0,path:"/react-todo/done",children:Object(X.jsx)(Dt,{searchInput:s})}),Object(X.jsx)(y.a,{exact:!0,path:"/react-todo/undone",children:Object(X.jsx)(Lt,{searchInput:s})})]})]}),Object(X.jsx)(ut,{})]}):Object(X.jsx)(xt,{})]})})})}r.a.render(Object(X.jsx)(c.a.StrictMode,{children:Object(X.jsx)(i.a,{store:f,children:Object(X.jsx)(At,{})})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.3d9f2f2f.chunk.js.map
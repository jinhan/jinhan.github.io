(this["webpackJsonpjinhan.github.io"]=this["webpackJsonpjinhan.github.io"]||[]).push([[0],{70:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(51),r=n.n(a),s=(n(70),n(38)),o=n(49),j=n.n(o),l=n(52),h=n(21),b=n(112),d=n(110),x=n(113),f=n(114),u=n(100),O=n(1),m=Object(u.a)(b.a)((function(e){e.theme;return{color:"#808080","&:hover":{backgroundColor:"#fed8b1"},textTransform:"none",fontSize:"15px"}})),p=function(e){e.name;var t=e.email,n=(e.photoPath,e.description),i=e.linkedIn,c=e.github,a=e.googleScholar,r=e.cv;return Object(O.jsx)(d.a,{container:!0,spacing:3,children:Object(O.jsx)(d.a,{item:!0,container:!0,direction:"row",spacing:5,children:Object(O.jsxs)(d.a,{item:!0,xs:!0,alignItems:"left",children:[Object(O.jsx)(x.a,{fontWeight:"fontWeightBold",fontSize:"h4.fontSize",style:{marginTop:"5px"},children:"Jinhan Choi"}),Object(O.jsx)(f.a,{style:{whiteSpace:"pre-line",marginTop:"15px"},children:n}),Object(O.jsxs)(x.a,{marginTop:3,children:[Object(O.jsx)(x.a,{component:"span",children:Object(O.jsx)(m,{startIcon:Object(O.jsx)("i",{className:"fas fa-envelope"}),children:t})}),Object(O.jsx)(x.a,{component:"span",children:Object(O.jsx)(m,{onClick:function(){return window.open(r,"_blank")},startIcon:Object(O.jsx)("i",{className:"fas fa-file-alt"}),children:"CV"})}),Object(O.jsx)(x.a,{component:"span",marginLeft:2,children:Object(O.jsx)(m,{onClick:function(){return window.open(i,"_blank")},startIcon:Object(O.jsx)("i",{className:"fab fa-linkedin"}),children:"LinkedIn"})}),Object(O.jsx)(x.a,{component:"span",marginLeft:2,children:Object(O.jsx)(m,{onClick:function(){return window.open(c,"_blank")},startIcon:Object(O.jsx)("i",{className:"fab fa-github"}),children:"Github"})}),Object(O.jsx)(x.a,{component:"span",marginLeft:2,children:Object(O.jsx)(m,{onClick:function(){return window.open(a,"_blank")},startIcon:Object(O.jsx)("i",{className:"fas fa-graduation-cap"}),children:"Scholar"})})]})]})})})},g=n(108),w=n(81),k=Object(w.a)((function(e){return{teaserImg:{position:"absolute",backgroundPosition:"left","-webkit-transition":"all 2s","&:hover":{backgroundPosition:"right"}},figure:{position:"relative",height:"100%",width:"auto",margin:0,padding:0,overflow:"hidden"}}})),v=Object(u.a)(b.a)((function(e){e.theme;return{color:"#808080","&:hover":{backgroundColor:"#fed8b1"},textTransform:"none",fontSize:"15px"}})),C=function(e){return'<Box component="div">'+e.replace("Jinhan Choi","<strong>Jinhan Choi</strong>")+"</Box>"},I=function(e){e.id;var t=e.title,n=e.authors,i=e.source,c=e.teaser,a=e.path,r=e.award,s=k();return Object(O.jsxs)(d.a,{item:!0,container:!0,direction:"row",spacing:3,children:[Object(O.jsx)(d.a,{item:!0,xs:2,alignItems:"left",children:Object(O.jsx)("div",{className:s.figure,children:Object(O.jsx)("img",{src:c,style:{width:"100%",maxHeight:"110px"}})})}),Object(O.jsxs)(d.a,{container:!0,item:!0,xs:!0,alignItems:"left",direction:"column",spacing:.5,children:[Object(O.jsx)(d.a,{item:!0,xs:!0,children:Object(O.jsx)(x.a,{fontWeight:"fontWeightBold",children:t})}),Object(O.jsx)(d.a,{item:!0,xs:!0,children:Object(O.jsx)("div",{dangerouslySetInnerHTML:{__html:C(n)}})}),Object(O.jsx)(d.a,{item:!0,xs:!0,children:Object(O.jsx)(x.a,{fontStyle:"italic",children:i})}),r&&Object(O.jsx)(d.a,{item:!0,xs:!0,children:Object(O.jsx)(x.a,{children:Object(O.jsx)(g.a,{size:"small",color:"primary",label:r,icon:Object(O.jsx)("i",{className:"fas fa-award"}),style:{color:"white",fontWeight:"bold"}})})}),Object(O.jsx)(d.a,{item:!0,xs:!0,children:Object(O.jsx)(v,{size:"small",onClick:function(){return window.open(a,"_blank")},startIcon:Object(O.jsx)("i",{className:"fas fa-file-alt"}),children:"Paper"})})]})]})},S=function(e){return Object(O.jsxs)(d.a,{container:!0,spacing:3,children:[Object(O.jsx)(d.a,{item:!0,children:Object(O.jsx)(x.a,{fontWeight:"fontWeightBold",fontSize:"h5.fontSize",children:"Publications"})}),Object(O.jsx)(d.a,{item:!0,container:!0,spacing:3,children:e.projects&&e.projects.map((function(e,t){return Object(O.jsx)(I,Object(s.a)({},e),e.id)}))})]})},y=n(115),T=function(){var e=Object(i.useState)({}),t=Object(h.a)(e,2),n=t[0],c=t[1],a=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("assets/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){a()}),[]),Object(O.jsx)(y.a,{maxWidth:"md",children:Object(O.jsxs)(d.a,{container:!0,spacing:5,direction:"column",marginTop:1,children:[Object(O.jsx)(d.a,{item:!0,xs:!0,children:Object(O.jsx)(p,Object(s.a)({},n.about))}),Object(O.jsx)(d.a,{item:!0,xs:!0,children:Object(O.jsx)(S,{projects:n.projects})}),Object(O.jsx)(d.a,{item:!0,xs:!0,children:Object(O.jsxs)(f.a,{variant:"body1",align:"center",children:["\xa9 Jinhan Choi | Last Updated: ",n.updated]})})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))},L=n(57),N=n(111),W=Object(L.a)({palette:{primary:{main:"#FF8C00"}}});r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(N.a,{theme:W,children:Object(O.jsx)(T,{})})}),document.getElementById("root")),z()}},[[79,1,2]]]);
//# sourceMappingURL=main.515b2630.chunk.js.map
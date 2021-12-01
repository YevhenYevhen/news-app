(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{129:function(e,t,i){},148:function(e,t,i){"use strict";i.r(t);var r,a=i(0),n=i.n(a),l=i(26),o=i.n(l),c=i(75),s=i.n(c),u=i(92),d=i(207),m=i(23),p=i(13),f=i(213),b=i(212),h=i(192),j=Object(h.a)((function(){return{card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{minWidth:"400px",minHeight:"217px"},cardContent:{flexGrow:1,display:"flex",flexDirection:"column",height:"100%"},cardTitle:{textAlign:"left",fontFamily:"Montserrat, sans-serif",fontStyle:"normal",fontWeight:"normal",fontSize:"24px",lineHeight:"29px",color:"#363636",flexGrow:1},cardDate:{display:"flex",justifyContent:"left",lineHeight:1.5,fontSize:"medium",color:"rgb(189, 189, 189)"},cardDescription:{fontFamily:"Montserrat, sans-serif",fontStyle:"normal",fontWeight:"normal",fontSize:"16px",lineHeight:"150%",flexGrow:1,maxHeight:"96px",overflow:"hidden"},searchFieldTitle:{fontFamily:"Montserrat, sans-serif",fontStyle:"normal",fontWeight:"800",fontSize:"24px",lineHeight:"29px",color:"#363636",marginBottom:"10px"},searchFieldWrapper:{marginBottom:"40px"},searchFieldLine:{width:"100%",border:"1px solid #EAEAEA",marginBottom:"45px"},searchFieldInput:{maxWidth:"600px",margin:"25px",background:"#FFFFFF",border:"1px solid #EAEAEA",boxSizing:"border-box",boxShadow:"0px 8px 24px rgba(0, 0, 0, 0.05)",bordeRadius:"5px"},resultsCount:{fontFamily:"Montserrat, sans-serif",fontStyle:"normal",fontWeight:"600",fontSize:"16px",lineHeight:"20px",color:"#363636"},fullArticlePaper:{margin:"-90px 8% 50px",maxWidth:"1290px",minHeight:"1001px"},fullArticleSummary:{margin:"5% 10%",fontFamily:"Montserrat, sans-serif",fontStyle:"normal",fontWeight:"normal",fontSize:"18px",lineHeight:"150%",color:"#000000",paddingBottom:"50px"},fullArticleTitle:{padding:"30px 5px",fontFamily:"Montserrat, sans-serif",fontStyle:"normal",fontWeight:"normal",fontSize:"24px",lineHeight:"29px",color:"#363636"},fullArticleWrapper:{position:"absolute",minHeight:"1186px"},fullArticleHeader:{backgroundSize:"cover",backgroundPosition:"center",width:"100vw",height:"245px"},backButton:{position:"relative",marginTop:"35px",left:"10%",bottom:"45px",fontFamily:"Montserrat, sans-serif",fontStyle:"normal",fontWeight:"bold",fontSize:"16px"},readMoreButton:{fontFamily:"Montserrat, sans-serif",fontStyle:"normal",fontWeight:"bold",fontSize:"16px",marginLeft:"-19px"},buttonLink:{color:"#363636",textDecoration:"none",padding:"0 6px"},highlighted:{backgroundColor:"yellow"}}})),g=i(14),x=i(194),O=i(195),v=i(196),y=i(197),w=i(198),q=i(204),C=i(209),S=i(96),L=i.n(S),A=i(76),E=i.n(A),F=i(39),N=i(32),I="articlesReducer/SET_ARTICLES",M="articlesReducer/SET_FILTERED_ARTICLES",T="articlesReducer/SET_FULL_ARTICLE",R="articlesReducer/SET_QUERY",k={articles:[],filteredArticles:[],fullArticle:{},query:""},H=function(e){return{type:I,articles:e}},W=function(e){return{type:M,filteredArticles:e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(N.a)(Object(N.a)({},e),{},{articles:Object(g.a)(t.articles)});case M:return Object(N.a)(Object(N.a)({},e),{},{filteredArticles:Object(g.a)(t.filteredArticles)});case T:return Object(N.a)(Object(N.a)({},e),{},{fullArticle:t.fullArticle});case R:return Object(N.a)(Object(N.a)({},e),{},{query:t.query});default:return e}},P=["title","titleId"];function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},z.apply(this,arguments)}function D(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function U(e,t){var i=e.title,n=e.titleId,l=D(e,P);return a.createElement("svg",z({width:12,height:10,viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},l),i?a.createElement("title",{id:n},i):null,r||(r=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.66829 0.162658C6.45593 0.379657 6.45593 0.730251 6.66975 0.945773L9.09665 3.39845L9.15268 3.448C9.36701 3.61309 9.6729 3.59589 9.86756 3.39698C9.97375 3.28848 10.0268 3.1475 10.0268 3.00653C10.0268 2.86407 9.97375 2.72236 9.86611 2.61386L7.43993 0.161182L7.38388 0.111806C7.16946 -0.0527212 6.86296 -0.0355811 6.66829 0.162658ZM0.477064 4.45064C0.208215 4.48481 0 4.71782 0 4.99989C0 5.30546 0.244364 5.55346 0.545455 5.55346H10.1338L6.66982 9.05423L6.62082 9.11077C6.45747 9.32725 6.4737 9.63843 6.66836 9.83734C6.88073 10.0536 7.22618 10.0543 7.43927 9.83882L11.8393 5.39182L11.8878 5.33613C11.9616 5.23874 12 5.11983 12 4.99989C12 4.92829 11.9862 4.8567 11.9585 4.78879C11.8742 4.58139 11.6756 4.44632 11.4545 4.44632H0.545455L0.477064 4.45064Z",fill:"#363636"})))}var _,Z=a.forwardRef(U),Q=(i.p,i(1)),V=function(e){var t=e.article,i=e.date,r=e.description,n=e.title,l=Object(m.c)((function(e){return e.query})),o=j(),c=l.toLowerCase().split(" "),s=Object(m.b)(),u=function(e){s(function(e){return{type:T,fullArticle:e}}(e)),sessionStorage.setItem("scrollPosition",window.pageYOffset)};return Object(a.useEffect)((function(){!function(){var e=sessionStorage.getItem("scrollPosition");e&&(window.scrollTo(0,parseInt(e)),sessionStorage.removeItem("scrollPosition"))}()}),[]),Object(Q.jsx)(x.a,{item:!0,xs:12,sm:6,md:4,children:Object(Q.jsxs)(O.a,{className:o.card,children:[Object(Q.jsx)(v.a,{className:o.cardMedia,image:t.imageUrl,title:"Image Title"}),Object(Q.jsxs)(y.a,{className:o.cardContent,children:[Object(Q.jsxs)(w.a,{gutterBottom:!0,variant:"h5",className:o.cardDate,children:[Object(Q.jsx)(L.a,{fontSize:"small"}),i]}),Object(Q.jsx)(w.a,{className:o.cardTitle,gutterBottom:!0,variant:"h5",children:Object(Q.jsx)(E.a,{highlightClassName:o.highlighted,searchWords:Object(g.a)(c),autoEscape:!0,textToHighlight:n})}),Object(Q.jsx)(w.a,{className:o.cardDescription,gutterBottom:!0,variant:"subtitle1",align:"left",paragraph:!0,children:Object(Q.jsx)(E.a,{highlightClassName:o.highlighted,searchWords:Object(g.a)(c),autoEscape:!0,textToHighlight:r})}),Object(Q.jsx)(q.a,{children:Object(Q.jsxs)(C.a,{className:o.readMoreButton,onClick:function(){return u(t)},size:"small",color:"primary",children:[Object(Q.jsx)(F.b,{className:o.buttonLink,to:"/article/".concat(t.id),children:"Read more"}),Object(Q.jsx)(Z,{})]})})]})]})})},G=function(){var e=Object(m.c)((function(e){return e.filteredArticles})),t=Object(m.c)((function(e){return!!e.query.length})),i=j();return Object(Q.jsxs)(Q.Fragment,{children:[t&&Object(Q.jsxs)("h2",{className:i.resultsCount,children:["Results: ",e.length]}),Object(Q.jsx)("div",{className:i.searchFieldLine}),Object(Q.jsx)(b.a,{container:!0,spacing:2,children:e.map((function(e){var t=new Date(e.publishedAt).toDateString().substring(4).split("");t.splice(6,0,","),t=t.join("");var i=e.title.length>60?"".concat(e.title.substring(0,60),"..."):e.title,r=e.summary.length>100?"".concat(e.summary.substring(0,100),"..."):e.summary;return Object(Q.jsx)(V,{article:e,title:i,description:r,date:t},e.id)}))})]})},J=function(e,t,i){return e.filter((function(e){for(var r=0;r<i.length;r++)return e[t].toLowerCase().includes(i[r]);return!1}))},Y=i(208),K=i(210),X=["title","titleId"];function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},$.apply(this,arguments)}function ee(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function te(e,t){var i=e.title,r=e.titleId,n=ee(e,X);return a.createElement("svg",$({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},n),i?a.createElement("title",{id:r},i):null,_||(_=a.createElement("path",{d:"M15.7832 14.3911L20 18.6069L18.6069 20L14.3911 15.7832C12.8224 17.0407 10.8713 17.7246 8.86088 17.7218C3.96968 17.7218 0 13.7521 0 8.86088C0 3.96968 3.96968 0 8.86088 0C13.7521 0 17.7218 3.96968 17.7218 8.86088C17.7246 10.8713 17.0407 12.8224 15.7832 14.3911ZM13.8082 13.6605C15.0577 12.3756 15.7555 10.6532 15.7527 8.86088C15.7527 5.05267 12.6681 1.96909 8.86088 1.96909C5.05267 1.96909 1.96909 5.05267 1.96909 8.86088C1.96909 12.6681 5.05267 15.7527 8.86088 15.7527C10.6532 15.7555 12.3756 15.0577 13.6605 13.8082L13.8082 13.6605Z",fill:"#575757"})))}var ie,re=a.forwardRef(te),ae=(i.p,function(e){var t=e.handleQueryChange,i=e.query,r=j();return Object(Q.jsxs)("div",{className:r.searchFieldWrapper,children:[Object(Q.jsx)("h2",{className:r.searchFieldTitle,variant:"h5",children:"Filter by keywords"}),Object(Q.jsx)(Y.a,{onChange:function(e){return t(e)},value:i,id:"input-with-icon-textfield",fullWidth:!0,margin:"dense",variant:"outlined",className:r.searchFieldInput,InputProps:{startAdornment:Object(Q.jsx)(K.a,{position:"start",children:Object(Q.jsx)(re,{})})}})]})}),ne=function(){var e=Object(m.c)((function(e){return e.articles})),t=Object(m.c)((function(e){return e.query})),i=Object(m.b)();return Object(a.useEffect)((function(){var r=t.toLowerCase().split(" "),a=J(e,"title",r),n=J(e,"summary",r),l=Object(g.a)(new Set([].concat(Object(g.a)(a),Object(g.a)(n))));i(W(l))}),[t]),Object(Q.jsx)(ae,{handleQueryChange:function(e){i(function(e){return{type:R,query:e}}(e.target.value))},query:t})},le=function(){return Object(Q.jsxs)(f.a,{maxWidth:"xl",style:{padding:"0 5%"},children:[Object(Q.jsx)(ne,{}),Object(Q.jsx)(G,{})]})},oe=(i(129),i(98)),ce=i.n(oe),se=i(150),ue=["title","titleId"];function de(){return de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},de.apply(this,arguments)}function me(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function pe(e,t){var i=e.title,r=e.titleId,n=me(e,ue);return a.createElement("svg",de({width:12,height:10,viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},n),i?a.createElement("title",{id:r},i):null,ie||(ie=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33171 0.162658C5.54407 0.379657 5.54407 0.730251 5.33025 0.945773L2.90334 3.39845L2.84731 3.448C2.63299 3.61309 2.3271 3.59589 2.13243 3.39698C2.02625 3.28848 1.97316 3.1475 1.97316 3.00653C1.97316 2.86407 2.02625 2.72236 2.13389 2.61386L4.56007 0.161182L4.61612 0.111806C4.83054 -0.0527212 5.13704 -0.0355811 5.33171 0.162658ZM11.5229 4.45073C11.7918 4.48491 12 4.71792 12 4.99998C12 5.30555 11.7556 5.55355 11.4545 5.55355H1.86618L5.33018 9.05432L5.37918 9.11086C5.54253 9.32734 5.5263 9.63852 5.33164 9.83743C5.11927 10.0537 4.77382 10.0544 4.56073 9.83891L0.160727 5.39191L0.112206 5.33622C0.0383835 5.23883 0 5.11992 0 4.99998C0 4.92838 0.0138178 4.85679 0.0414543 4.78889C0.125817 4.58148 0.324364 4.44641 0.545454 4.44641H11.4545L11.5229 4.45073Z",fill:"#363636"})))}var fe=a.forwardRef(pe),be=(i.p,function(e){var t=e.fullArticle,i=j();return Object(Q.jsxs)("div",{className:i.fullArticleWrapper,children:[Object(Q.jsx)("header",{className:i.fullArticleHeader,style:{backgroundImage:"url(".concat(t.imageUrl,")")}}),Object(Q.jsxs)(se.a,{className:i.fullArticlePaper,elevation:3,children:[Object(Q.jsx)(w.a,{variant:"h5",align:"center",gutterBottom:!0,className:i.fullArticleTitle,children:t.title}),Object(Q.jsxs)(w.a,{component:"div",gutterBottom:!0,variant:"body1",className:i.fullArticleSummary,children:[Object(Q.jsx)("p",{children:t.summary}),Object(Q.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam numquam exercitationem deleniti a est unde cupiditate vel atque consectetur, dolor neque accusantium voluptatem optio sapiente delectus, et nulla iure excepturi."}),Object(Q.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi praesentium suscipit dignissimos! Voluptate architecto voluptates, ipsum incidunt velit id voluptatem at quisquam placeat repellendus, harum dolorem quaerat nulla magni! Sunt sed ab mollitia esse voluptatum, quibusdam doloribus itaque nihil distinctio dicta consequuntur in tempora facere odit delectus odio unde explicabo a cupiditate velit, accusamus eaque! Minima impedit velit repellat."}),Object(Q.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam numquam exercitationem deleniti a est unde cupiditate vel atque consectetur, dolor neque accusantium voluptatem optio sapiente delectus, et nulla iure excepturi."}),Object(Q.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam numquam exercitationem deleniti a est unde cupiditate vel atque consectetur, dolor neque accusantium voluptatem optio sapiente delectus, et nulla iure excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facilis nisi culpa nobis molestiae! Temporibus excepturi error nostrum dicta quas consequatur atque veritatis, magnam dolor ex nobis rem, unde vero! Eius assumenda maxime in veritatis? Fugit cum, exercitationem minima voluptatem dolore ipsa eveniet quod quam qui, sunt vel quos ipsam voluptates. Quos. Sapiente magni eligendi velit nihil sunt accusamus cumque modi rerum pariatur illum odit obcaecati corrupti unde officiis voluptate aspernatur cum qui veritatis, voluptatibus aliquam doloribus. Maiores repellat consequuntur aliquid corporis. Nam sapiente quod placeat necessitatibus quas dolore repellendus a saepe possimus eaque. Reiciendis et ex molestiae quod vero tenetur hic soluta amet molestias ipsum? Veniam labore non reiciendis ab voluptate. Consequuntur eligendi explicabo illo similique. Sit modi non in nisi dolorem voluptatum eligendi beatae optio officia, corporis autem iusto reiciendis repellat veritatis laborum, ratione vel, recusandae excepturi fuga dolorum dicta?"}),Object(Q.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi praesentium suscipit dignissimos! Voluptate architecto voluptates, ipsum incidunt velit id voluptatem at quisquam placeat repellendus, harum dolorem quaerat nulla magni! Sunt sed ab mollitia esse voluptatum, quibusdam doloribus itaque nihil distinctio dicta consequuntur in tempora facere odit delectus odio unde explicabo a cupiditate velit, accusamus eaque! Minima impedit velit repellat."}),Object(Q.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi praesentium suscipit dignissimos! Voluptate architecto voluptates, ipsum incidunt velit id voluptatem at quisquam placeat repellendus, harum dolorem quaerat nulla magni! Sunt sed ab mollitia esse voluptatum, quibusdam doloribus itaque nihil distinctio dicta consequuntur in tempora facere odit delectus odio unde explicabo a cupiditate velit, accusamus eaque! Minima impedit velit repellat."})]})]}),Object(Q.jsxs)(C.a,{className:i.backButton,children:[Object(Q.jsx)(fe,{}),Object(Q.jsx)(F.b,{className:i.buttonLink,to:"/homepage",children:"Back to homepage"})]})]})}),he=function(){Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]);var e=Object(m.c)((function(e){return e.fullArticle}));return Object(Q.jsx)(Q.Fragment,{children:e.title?Object(Q.jsx)(be,{fullArticle:e}):Object(Q.jsx)(p.a,{to:"/homepage"})})};var je=function(){var e=Object(m.b)();return Object(a.useEffect)((function(){var t=function(){var t=Object(u.a)(s.a.mark((function t(){var i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.a.get("https://api.spaceflightnewsapi.net/v3/articles?_limit=50").then((function(e){return e.data}));case 2:i=t.sent,e(H(i)),e(W(i));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(Q.jsxs)("div",{className:"app",children:[Object(Q.jsx)(d.a,{}),Object(Q.jsxs)(p.d,{children:[Object(Q.jsx)(p.b,{exact:!0,path:"/",element:Object(Q.jsx)(le,{})}),Object(Q.jsx)(p.b,{path:"/homepage",element:Object(Q.jsx)(le,{})}),Object(Q.jsx)(p.b,{path:"/article/:id",element:Object(Q.jsx)(he,{})})]})]})},ge=i(99),xe=Object(ge.a)(B);o.a.render(Object(Q.jsx)(n.a.StrictMode,{children:Object(Q.jsx)(F.a,{children:Object(Q.jsx)(m.a,{store:xe,children:Object(Q.jsx)(je,{})})})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.52c91165.chunk.js.map
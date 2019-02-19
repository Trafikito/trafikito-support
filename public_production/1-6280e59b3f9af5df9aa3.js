(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return h}),a.d(t,"useStaticQuery",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(162),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(212),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var p=a(50);a.d(t,"parsePath",function(){return p.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},d=function(e){r.a.useContext;var t=r.a.useContext(m);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},204:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(4),s=a.n(l),c=a(158),u=a.n(c),p=a(185),m=a.n(p),h=a(466),d=a.n(h),f=a(471),g=a.n(f),y=a(424),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e="Home";return this.props.post&&(e=y(this.props.post,"frontmatter.title")),o.a.createElement("div",{style:{backgroundColor:m.a[50]}},o.a.createElement("div",{style:{maxWidth:700,margin:"0 auto",padding:"0 8px"}},o.a.createElement("div",{style:{paddingBottom:16}},o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"}},o.a.createElement("div",{style:{padding:"24px 0 0"}},o.a.createElement(d.a,{separator:"›","arial-label":"Breadcrumb"},o.a.createElement(g.a,{color:"inherit",href:"https://trafikito.com"},"Trafikito"),o.a.createElement(g.a,{color:"inherit",href:"https://trafikito.com/support"},"Support"),o.a.createElement(u.a,{color:"textPrimary"},e))),o.a.createElement("div",{style:{padding:"6px 0 0",height:32,display:"flex",alignContent:"center",justifyContent:"center"}},o.a.createElement("a",{style:{margin:3},href:"https://www.youtube.com/channel/UCofioaADtesyD75204ngeoQ",target:"_blank"},o.a.createElement("img",{style:{width:32,height:32},src:"https://d4o5fxgxpjzlh.cloudfront.net/images/social/youtube.svg"})),o.a.createElement("a",{style:{margin:3},href:"https://www.instagram.com/trafikito/",target:"_blank"},o.a.createElement("img",{style:{width:32,height:32},src:"https://d4o5fxgxpjzlh.cloudfront.net/images/social/instagram.svg"})),o.a.createElement("a",{style:{margin:3},href:"https://twitter.com/trafikito",target:"_blank"},o.a.createElement("img",{style:{width:32,height:32},src:"https://d4o5fxgxpjzlh.cloudfront.net/images/social/twitter.svg"})),o.a.createElement("a",{style:{margin:3},href:"https://www.facebook.com/Trafikito/",target:"_blank"},o.a.createElement("img",{style:{width:32,height:32},src:"https://d4o5fxgxpjzlh.cloudfront.net/images/social/facebook.svg"})),o.a.createElement("a",{style:{margin:3},href:"https://www.linkedin.com/company/trafikito/",target:"_blank"},o.a.createElement("img",{style:{width:32,height:32},src:"https://d4o5fxgxpjzlh.cloudfront.net/images/social/linkedin.svg"}))))),o.a.createElement("div",{style:{padding:"12px 0",borderTop:"1px solid "+m.a[100],display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}},o.a.createElement(u.a,{component:"div",variant:"caption"},"Copyright © Trafikito.com All rights reserved."),o.a.createElement(d.a,{separator:"|","arial-label":"Footer links"},o.a.createElement(g.a,{href:"https://trafikito.com/tos?view=tos"},o.a.createElement(u.a,{variant:"caption"},"Terms of Service")),o.a.createElement(g.a,{href:"https://trafikito.com/tos?view=privacy"},o.a.createElement(u.a,{variant:"caption"},"Privacy Policy")),o.a.createElement(g.a,{href:"https://trafikito.com/servers"},o.a.createElement(u.a,{variant:"caption"},"Dashboard")),o.a.createElement(g.a,{href:"https://trafikito.com/user"},o.a.createElement(u.a,{variant:"caption"},"Your Account"))))))},t}(o.a.Component);v.propTypes={post:s.a.object},t.a=v},209:function(e,t,a){"use strict";var n=a(476),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(242),c=a.n(s),u=a(161);function p(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=p;var m="1025518380"},210:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(410),s=a.n(l),c=a(412),u=a.n(c),p=a(158),m=a.n(p),h=a(198),d=a.n(h),f=a(414),g=a.n(f),y=a(415),v=a.n(y),E=a(4),b=a.n(E),k=a(323),w=a.n(k),x=a(345),C=a.n(x),S=a(233),T=a.n(S),j=a(248),O=a.n(j),q=a(318),D=a.n(q),R=a(320),_=a.n(R),L=a(185),N=a.n(L),P=function(e){var t=e.icon,a=e.isActive,n=e.title,r=a?N.a[500]:null,i=a?"#FFFFFF":null;return o.a.createElement(O.a,{button:!0,style:{backgroundColor:r}},t?o.a.createElement(D.a,{style:{color:i}},t):null,o.a.createElement(_.a,{disableTypography:!1,primary:o.a.createElement("span",{style:{color:i}},n)}))};P.propTypes={icon:b.a.oneOfType([b.a.string,b.a.object]),isActive:b.a.bool.isRequired,title:b.a.string.isRequired};var A=P,M=a(348),I=a.n(M),B=a(356),F=a.n(B),W=a(355),G=a.n(W),H=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.isOpen,t=this.props.handleClose;return o.a.createElement(w.a,{open:e,onClose:t},o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"12px 3px"}},o.a.createElement("div",null,o.a.createElement(m.a,{align:"center",variant:"h5"},"Trafikito"),o.a.createElement(m.a,{align:"center",variant:"caption"},"MONITOR ANYTHING"))),o.a.createElement(C.a,null),o.a.createElement(T.a,null,o.a.createElement("a",{className:"lnu",href:"https://trafikito.com",onClick:t},o.a.createElement(A,{isActive:!1,icon:o.a.createElement(I.a,null),title:"Home"})),o.a.createElement("a",{className:"lnu",href:"https://trafikito.com/servers",onClick:t},o.a.createElement(A,{isActive:!1,icon:o.a.createElement(G.a,null),title:"Dashboard"})),o.a.createElement("a",{className:"lnu",href:"https://trafikito.com/user/account/update-details",onClick:t},o.a.createElement(A,{isActive:!1,icon:o.a.createElement(F.a,null),title:"My Account"})),o.a.createElement("a",{className:"lnu",href:"https://trafikito.com/price",onClick:t},o.a.createElement(A,{isActive:!1,title:"Price"})),o.a.createElement("a",{className:"lnu",href:"https://trafikito.com/who-built-this",onClick:t},o.a.createElement(A,{isActive:!1,title:"Who built this?"})),o.a.createElement("a",{className:"lnu",href:"https://trafikito.com/support",onClick:t},o.a.createElement(A,{isActive:!1,title:"Help & Support"}))))},t}(o.a.Component);H.propTypes={isOpen:b.a.bool.isRequired,handleClose:b.a.func.isRequired};var J=H,Q=a(357),z=a.n(Q),U=(a(238),a(359)),V=a.n(U),Y=a(53),X=a.n(Y),K=a(409),Z=a.n(K),$=(a(73),a(161)),ee=a(374),te=a.n(ee),ae=a(371),ne=a.n(ae),re=a(369),ie=a.n(re),oe=a(372),le=a.n(oe),se=a(367),ce=a.n(se),ue=a(360),pe=a.n(ue),me=(a(33),a(199)),he=a.n(me),de=a(178),fe=a.n(de),ge=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).timers=[],t.handleOnClick=function(){var e=setTimeout(function(){clearTimeout(e),t.timers.splice(t.timers.indexOf(e),1),t.props.onClick()},250);t.timers.push(e)},t}r()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.timers.length>0&&this.timers.forEach(function(e){return clearTimeout(e)})},a.render=function(){var e=Object.assign({},this.props);return delete e.iconButton,delete e.buttonBase,delete e.onClick,delete e.children,!0===this.props.iconButton?o.a.createElement(d.a,Object.assign({},e,{onClick:this.handleOnClick}),this.props.children):!0===this.props.buttonBase?o.a.createElement(fe.a,Object.assign({},e,{onClick:this.handleOnClick}),this.props.children):o.a.createElement(he.a,Object.assign({},e,{onClick:this.handleOnClick}),this.props.children)},t}(i.Component);ge.propTypes={children:b.a.node,iconButton:b.a.bool,buttonBase:b.a.bool,onClick:b.a.func};var ye=ge,ve=a(363),Ee=a(239),be=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={allData:null,query:""},a.resultsDiv=o.a.createRef(),a.loadData=a.loadData.bind(X()(X()(a))),a.getSearchResult=a.getSearchResult.bind(X()(X()(a))),a}r()(t,e);var a=t.prototype;return a.componentWillMount=function(){this.loadData()},a.getSearchResult=function(){var e=[];return this.state.allData&&(this.state.query?e=ve.go(this.state.query,this.state.allData,{key:"title",limit:100}):this.state.allData.forEach(function(t){e.length<=100&&e.push({obj:t})})),e},a.loadData=function(){var e=Ee.get("searchable-data"),t=null;try{t=JSON.parse(e)}catch(a){localStorage.removeItem("searchable-data"),console.error("#jlekjwkf Search failed because searchable data is invalid JSON.")}this.setState({allData:t})},a.render=function(){var e=this;if(!this.state.allData)return console.log("#kjrlkejge searchable JSON must be ready at local storage before rendering search results."),null;var t=this.getSearchResult(),a=[];return t&&t.length>0&&t.forEach(function(t){var n=e.state.query?ve.highlight(ve.single(e.state.query,t.obj.title)):t.obj.title;a.push(o.a.createElement($.Link,{to:"/"+t.obj.uri+".html",key:t.obj.uri,onClick:e.props.handleClose},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n},className:pe.a.result_row})))}),o.a.createElement(ce.a,{open:!0,disableBackdropClick:!0,PaperProps:{style:{margin:"6px 3px"}},maxWidth:"md",fullWidth:!0},o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:12}},o.a.createElement("div",{style:{flex:1}},o.a.createElement(ie.a,{className:pe.a.title},"Support site search")),o.a.createElement("div",{style:{margin:"0 12px"}},o.a.createElement(ye,{iconButton:!0,onClick:this.props.handleClose},o.a.createElement(ne.a,null)))),o.a.createElement(le.a,null,o.a.createElement(te.a,{autoFocus:!0,label:"Search",placeholder:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},onChange:function(t){e.setState({query:t.target.value}),e.resultsDiv&&(e.resultsDiv.current.scrollTop=0)},value:this.state.query}),o.a.createElement("div",{style:{overflowY:"scroll",height:550},ref:this.resultsDiv},o.a.createElement(m.a,{className:pe.a.results,component:"div",variant:"h5"},a))))},t}(o.a.Component);be.propTypes={handleClose:b.a.func.isRequired};var ke=be,we=a(407),xe=we.blurRemove,Ce=we.blurAdd,Se=a(239),Te=a(408),je=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={open:!1,searchableData:null},a.dataPreload=null,a.preload=a.preload.bind(X()(X()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=Se.get("searchable-data");if(t)try{var a=JSON.parse(t);a&&this.setState({searchableData:a})}catch(n){localStorage.removeItem("searchable-data")}this.dataPreload=setTimeout(function(){e.preload()},2e3)},a.componentDidUpdate=function(e,t,a){t.open!==this.state.open&&(this.state.open?Ce():xe())},a.componentWillUnmount=function(){clearTimeout(this.dataPreload)},a.preload=function(){var e=V()(z.a.mark(function e(){var t,a;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==this.state.searchableData){e.next=5;break}return e.next=3,Te({url:"https://trafikito.com/support/search.json"});case 3:t=e.sent;try{a=JSON.parse(t),Se.set("searchable-data",t,864e5),this.setState({searchableData:a})}catch(n){localStorage.removeItem("searchable-data")}case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.render=function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{color:"inherit","aria-label":"Search",style:{marginLeft:3},"aria-haspopup":"true",variant:"contained",onClick:function(){return e.setState({open:!0})}},o.a.createElement(Z.a,null)),this.state.open&&o.a.createElement(ke,{handleClose:function(){e.setState({open:!1}),xe()}}))},t}(o.a.Component),Oe=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={isLeftMenuOpen:!1},t}return r()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{position:"static"},o.a.createElement(u.a,null,o.a.createElement(d.a,{color:"inherit","aria-label":"Menu",style:{marginLeft:-12,marginRight:6},onClick:function(){return e.setState({isLeftMenuOpen:!0})}},o.a.createElement(g.a,null)),o.a.createElement(m.a,{variant:"h6",color:"inherit",style:{flexGrow:1},noWrap:!0},o.a.createElement($.Link,{to:"/",style:{color:"#fff"}},"Help & Support")),o.a.createElement(je,null),o.a.createElement("a",{className:"lnu a-white",href:"https://trafikito.com/user/account/update-details"},o.a.createElement(d.a,{color:"inherit","aria-label":"Account",style:{marginRight:-12}},o.a.createElement(v.a,null))))),o.a.createElement(J,{isOpen:this.state.isLeftMenuOpen,handleClose:function(){return e.setState({isLeftMenuOpen:!1})}}))},t}(o.a.Component),qe=a(416),De=a.n(qe),Re=a(242),_e=a.n(Re),Le=a(474),Ne=a.n(Le),Pe=a(169),Ae=a(473),Me=a.n(Ae),Ie=(a(204),Object(Pe.createMuiTheme)({palette:{primary:{light:N.a[300],main:N.a[500],dark:N.a[700]},secondary:{light:Me.a[300],main:Me.a[500],dark:Me.a[700]}},typography:{useNextVariants:!0}})),Be=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(Pe.MuiThemeProvider,{theme:Ie},o.a.createElement(Ne.a,null),o.a.createElement(_e.a,null,o.a.createElement("link",{rel:"stylesheet",href:Object($.withPrefix)("/global.css")}),o.a.createElement("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"})),o.a.createElement(m.a,{component:"div",className:De.a.main_holder},o.a.createElement(Oe,null),o.a.createElement("div",{className:De.a.content_holder},o.a.createElement("div",{style:{padding:"24px 6px"}},o.a.createElement("main",null,this.props.children)))))},t}(o.a.Component);t.a=Be},212:function(e,t,a){var n;e.exports=(n=a(247))&&n.default||n},247:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(68),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},360:function(e,t,a){e.exports={title:"style-module--title--1WvF5",results:"style-module--results--2yVn2",result_row:"style-module--result_row--3zisV"}},407:function(e,t){e.exports={blurAdd:function(){var e=document.getElementById("___gatsby");return e&&e.classList&&e.classList.add&&e.classList.add("blur"),!0},blurRemove:function(){var e=document.getElementById("___gatsby");return e&&e.classList&&e.classList.remove&&e.classList.remove("blur"),!0}}},408:function(e,t,a){a(35),e.exports=function(e){var t=e.url;return new Promise(function(e){var a=new XMLHttpRequest;a.onreadystatechange=function(){4===a.readyState&&200===a.status&&e(a.response)},a.open("GET",t,!0),a.send()})}},416:function(e,t,a){e.exports={main_holder:"style-module--main_holder--330ks",content_holder:"style-module--content_holder--1a1vw"}},476:function(e){e.exports={data:{site:{siteMetadata:{title:"Trafikito - monitor output of any command",description:"Trafikito is monitoring solution. It runs super light POSIX opens ource agent on linux machine and executes commands you select. Then Trafikito servers will parse the output and do all the magic of monitoring - charts, notifications etc.",author:"Lukas Liesis"}}}}}}]);
//# sourceMappingURL=1-6280e59b3f9af5df9aa3.js.map
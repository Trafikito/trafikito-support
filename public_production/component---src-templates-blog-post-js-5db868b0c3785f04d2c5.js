(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,a){"use strict";a.r(t);a(72);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),l=a(213),s=a(207),c=a(208),p=a(242),m=a(241),d=a.n(m),u=a(486),f=a.n(u),h=a(200),g=a.n(h),y=a(488),v=a.n(y),E=a(155),b=a.n(E),x=(a(484),a(74),a(54),a(247),a(165)),w={"f7277d70-7b35-489b-b378-009a690e0a3f":{link:Object(x.withPrefix)("what-are-notifications.html")}};a.d(t,"pageQuery",function(){return C});var k=a(246).fireEvent,j=a(199),P=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t,a=this.props.data.markdownRemark,r=this.props.data.site.siteMetadata.title,n=this.props.pageContext.related,i=[];return n&&n.length>0&&n.forEach(function(e){a.frontmatter.id!==e.post.frontmatter.id&&i.push({title:e.post.frontmatter.title,id:e.post.frontmatter.id,uri:e.post.frontmatter.uri,tags:e.post.frontmatter.tags,excerpt:j(e.post.excerpt)})}),o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{location:this.props.location,title:r},o.a.createElement(s.a,{title:a.frontmatter.title,description:j(a.excerpt)}),o.a.createElement(d.a,null,o.a.createElement(f.a,{title:a.frontmatter.title,subheader:""}),o.a.createElement(v.a,null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:(e={html:a.html},t=e.html,Object.keys(w).forEach(function(e){t=t.split(e).join(w[e].link)}),t)},style:{minHeight:200}}),o.a.createElement("div",null,o.a.createElement("div",{style:{height:220},id:"emojics-root"})))),o.a.createElement("div",{style:{margin:"0 12px"}},o.a.createElement(b.a,{variant:"h6",style:{margin:"24px 0"}},"You may be also interested:"),o.a.createElement(p.a,{variant:"compact",searchQuery:"",articles:i}),o.a.createElement("div",{style:{textAlign:"center",margin:12}},o.a.createElement(g.a,{variant:"contained",color:"secondary",onClick:function(){return k({type:"SEARCH_SHOW"})}},"Open search")))),o.a.createElement(c.a,{post:a}))},t}(o.a.Component),C=(t.default=P,"4222585127")},208:function(e,t,a){"use strict";var r=a(7),n=a.n(r),i=a(0),o=a.n(i),l=a(4),s=a.n(l),c=a(155),p=a.n(c),m=a(173),d=a.n(m),u=a(254),f=a.n(u),h=a(255),g=a.n(h),y=a(159),v=a(206),E=a(250),b=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e="Home";return this.props.post&&(e=E(this.props.post,"frontmatter.title")),o.a.createElement(y.MuiThemeProvider,{theme:v.a},o.a.createElement("div",{style:{backgroundColor:d.a[50]}},o.a.createElement("div",{style:{maxWidth:700,margin:"0 auto",padding:"0 8px"}},o.a.createElement("div",{style:{paddingBottom:16}},o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"}},o.a.createElement("div",{style:{padding:"24px 0 0"}},o.a.createElement(f.a,{separator:"›","arial-label":"Breadcrumb"},o.a.createElement(g.a,{color:"inherit",href:"https://trafikito.com"},"Trafikito"),o.a.createElement(g.a,{color:"inherit",href:"https://trafikito.com/support"},"Support"),o.a.createElement(p.a,{color:"textPrimary"},e))),o.a.createElement("div",{style:{padding:"6px 0 0",height:32,display:"flex",alignContent:"center",justifyContent:"center"}},o.a.createElement("a",{style:{margin:3},href:"https://www.youtube.com/channel/UCofioaADtesyD75204ngeoQ",target:"_blank"},o.a.createElement("img",{style:{width:32,height:32},src:"https://d4o5fxgxpjzlh.cloudfront.net/images/social/youtube.svg"})),o.a.createElement("a",{style:{margin:3},href:"https://www.instagram.com/trafikito/",target:"_blank"},o.a.createElement("img",{style:{width:32,height:32},src:"https://d4o5fxgxpjzlh.cloudfront.net/images/social/instagram.svg"})),o.a.createElement("a",{style:{margin:3},href:"https://twitter.com/trafikito",target:"_blank"},o.a.createElement("img",{style:{width:32,height:32},src:"https://d4o5fxgxpjzlh.cloudfront.net/images/social/twitter.svg"})),o.a.createElement("a",{style:{margin:3},href:"https://www.facebook.com/Trafikito/",target:"_blank"},o.a.createElement("img",{style:{width:32,height:32},src:"https://d4o5fxgxpjzlh.cloudfront.net/images/social/facebook.svg"})),o.a.createElement("a",{style:{margin:3},href:"https://www.linkedin.com/company/trafikito/",target:"_blank"},o.a.createElement("img",{style:{width:32,height:32},src:"https://d4o5fxgxpjzlh.cloudfront.net/images/social/linkedin.svg"}))))),o.a.createElement("div",{style:{padding:"12px 0",borderTop:"1px solid "+d.a[100],display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}},o.a.createElement(p.a,{component:"div",variant:"caption"},"Copyright © Trafikito.com All rights reserved."),o.a.createElement(f.a,{separator:"|","arial-label":"Footer links"},o.a.createElement(g.a,{href:"https://trafikito.com/tos?view=tos"},o.a.createElement(p.a,{variant:"caption"},"Terms of Service")),o.a.createElement(g.a,{href:"https://trafikito.com/tos?view=privacy"},o.a.createElement(p.a,{variant:"caption"},"Privacy Policy")),o.a.createElement(g.a,{href:"https://trafikito.com/servers"},o.a.createElement(p.a,{variant:"caption"},"Dashboard")),o.a.createElement(g.a,{href:"https://trafikito.com/user"},o.a.createElement(p.a,{variant:"caption"},"Your Account")))))))},t}(o.a.Component);b.propTypes={post:s.a.object},t.a=b},484:function(e,t,a){"use strict";a(485)("link",function(e){return function(t){return e(this,"a","href",t)}})},485:function(e,t,a){var r=a(11),n=a(16),i=a(18),o=/"/g,l=function(e,t,a,r){var n=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},486:function(e,t,a){"use strict";var r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=r(a(487))},487:function(e,t,a){"use strict";var r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=r(a(144)),i=r(a(145)),o=r(a(0)),l=(r(a(4)),r(a(146))),s=(a(147),r(a(148))),c=r(a(155)),p={root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}};function m(e){var t=e.action,a=e.avatar,r=e.classes,s=e.className,p=e.component,m=e.disableTypography,d=e.subheader,u=e.subheaderTypographyProps,f=e.title,h=e.titleTypographyProps,g=(0,i.default)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),y=f;null==y||y.type===c.default||m||(y=o.default.createElement(c.default,(0,n.default)({variant:a?"body2":"headline",internalDeprecatedVariant:!0,className:r.title,component:"span"},h),y));var v=d;return null==v||v.type===c.default||m||(v=o.default.createElement(c.default,(0,n.default)({variant:a?"body2":"body1",className:r.subheader,color:"textSecondary",component:"span"},u),v)),o.default.createElement(p,(0,n.default)({className:(0,l.default)(r.root,s)},g),a&&o.default.createElement("div",{className:r.avatar},a),o.default.createElement("div",{className:r.content},y,v),t&&o.default.createElement("div",{className:r.action},t))}t.styles=p,m.defaultProps={component:"div",disableTypography:!1};var d=(0,s.default)(p,{name:"MuiCardHeader"})(m);t.default=d},488:function(e,t,a){"use strict";var r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=r(a(489))},489:function(e,t,a){"use strict";var r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=r(a(144)),i=r(a(145)),o=r(a(0)),l=(r(a(4)),r(a(146))),s=(a(147),r(a(148))),c={root:{padding:16,"&:last-child":{paddingBottom:24}}};function p(e){var t=e.classes,a=e.className,r=e.component,s=(0,i.default)(e,["classes","className","component"]);return o.default.createElement(r,(0,n.default)({className:(0,l.default)(t.root,a)},s))}t.styles=c,p.defaultProps={component:"div"};var m=(0,s.default)(c,{name:"MuiCardContent"})(p);t.default=m}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-5db868b0c3785f04d2c5.js.map
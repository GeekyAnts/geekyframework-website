(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(153),o=a(151);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(147);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},148:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTYuOTY5IiBoZWlnaHQ9IjE1Mi42ODgiIHZpZXdCb3g9IjAgMCAxMTYuOTY5IDE1Mi42ODgiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmQ4MDA7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik04NDguNTQ4LDQzMC4yNzVsLTEwNy41OSw4Ni4yNjZINzg1LjhsLTQ0LjM3Nyw2Ni40MzIsMTE2LjUtOTUuNzQySDgxMy4yNDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzQwLjk2OSAtNDMwLjI4MSkiLz4KPC9zdmc+Cg=="},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Reazy",description:"The React & React Native Framework"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(156),s=a.n(c);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,d=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Reazy",description:"The React & React Native Framework",author:"@gatsbyjs"}}}}},153:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(146),s=a(148),d=a.n(s),u=(a(154),function(e){var t,a=e.siteTitle,n=e.description;return i.a.createElement("header",{style:{marginBottom:"1.45rem",borderBottom:"2px solid #ffd800",backgroundColor:"#FFF9E5",color:"#000"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0.15rem 0"}},i.a.createElement("table",{cellspacing:"0",cellpadding:"0",style:{marginBottom:0}},i.a.createElement("tr",null,i.a.createElement("td",{width:"60"},i.a.createElement("img",{src:d.a,style:{verticalAlign:"middle",marginRight:"10px",margin:10},width:"35"})),i.a.createElement("td",{style:{padding:0}},i.a.createElement("h1",{style:{margin:0,verticalAlign:"middle"}},i.a.createElement(c.a,{to:"/",style:(t={color:"#000",fontWeight:"normal",fontSize:"36px"},t.color="#000",t.textDecoration="none",t.verticalAlign="middle",t)},a," ",i.a.createElement("small",{style:{fontSize:16,color:"#444"}},n)))),i.a.createElement("td",null,i.a.createElement("ul",{class:"header-menu"},i.a.createElement("li",null,i.a.createElement("a",{href:"/docs"},"Documentation")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/GeekyAnts/geekyframework"},"Github"))))))))});u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var m=u,g=(a(155),function(e){var t=e.children;return i.a.createElement(c.b,{query:"2328579951",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title,description:e.site.siteMetadata.description}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with love at"," ",i.a.createElement("a",{href:"https://www.geekyants.com"},"GeekyAnts"))))},data:n})});g.propTypes={children:l.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-404-js-d56a38b290374f87fa19.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{164:function(e,a,t){"use strict";t.r(a);t(185);var r=t(0),n=t.n(r),l=t(179),m=t(181),c=t(176);a.default=function(e){var a=e.metadata,t=e.items,r=a.allTagsPath,o=a.name,s=a.count;return n.a.createElement(l.a,{title:'Blog | Tagged "'+o+'"',description:'Blog | Tagged "'+o+'"'},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,s,' post(s) tagged with "',o,'"'),n.a.createElement(c.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content,t=e.metadata;return n.a.createElement("div",{className:"margin-vert--xl",key:t.permalink},n.a.createElement(m.a,{frontMatter:a.frontMatter,metadata:t,truncated:!0},n.a.createElement(a,null)))})))))))}},181:function(e,a,t){"use strict";t(93);var r=t(0),n=t.n(r),l=t(178),m=t.n(l),c=t(175),o=t(176),s=t(183),i=t(182),u=t.n(i);a.a=function(e){var a,t,r,l,i,g=e.children,E=e.frontMatter,d=e.metadata,h=e.truncated,v=d.date,p=d.permalink,f=d.tags,b=E.author,N=E.authorURL,k=E.authorTitle,_=E.authorFBID,w=E.title;return n.a.createElement("div",null,(a=v.substring(0,10).split("-"),t=a[0],r=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(a[1],10)-1],l=parseInt(a[2],10),i=_?"https://graph.facebook.com/"+_+"/picture/?height=200&width=200":E.authorImageURL,n.a.createElement("header",null,n.a.createElement("h1",{className:m()("margin-bottom--sm",u.a.blogPostTitle)},n.a.createElement(o.a,{to:p},w)),n.a.createElement("div",{className:"margin-bottom--sm"},n.a.createElement("small",null,r," ",l,", ",t)),n.a.createElement("div",{className:"avatar margin-bottom--md"},i&&n.a.createElement("a",{className:"avatar__photo-link",href:N,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{className:"avatar__photo",src:i,alt:b})),n.a.createElement("div",{className:"avatar__intro"},b&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:N,target:"_blank",rel:"noreferrer noopener"},b)),n.a.createElement("small",{className:"avatar__subtitle"},k)))))),n.a.createElement("article",{className:"markdown"},n.a.createElement(c.a,{components:s.a},g)),n.a.createElement("div",{className:"row margin-vert--lg"},n.a.createElement("div",{className:"col"},f.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("strong",null,"Tags:"),f.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)})))),n.a.createElement("div",{className:"col text--right"},h&&n.a.createElement(o.a,{to:d.permalink},n.a.createElement("strong",null,"Read More")))))}},182:function(e,a,t){e.exports={blogPostTitle:"blogPostTitle_2RZH"}},185:function(e,a,t){var r=t(13).f,n=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in n||t(11)&&r(n,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);
(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,a){e.exports={outer:"portfolio__sections_outer__5_hf2",sectionContainer:"portfolio__sections_sectionContainer___k9Hd",subContainer:"portfolio__sections_subContainer__241z3",infoContainer:"portfolio__sections_infoContainer__1luCr",header:"portfolio__sections_header__35JXn",subHeader:"portfolio__sections_subHeader__3_lLY",description:"portfolio__sections_description__3EkWN",linksContainer:"portfolio__sections_linksContainer__lJtCa",button:"portfolio__sections_button__2mjmA",live:"portfolio__sections_live__24UJW",gradientMove:"portfolio__sections_gradientMove__2Zqlw",image:"portfolio__sections_image__3YfO5"}},18:function(e,t,a){e.exports={container:"footer_container__39b-B",email:"footer_email__8AVyd",socials:"footer_socials__RjMHx",socialIcon:"footer_socialIcon__2LvqN",gradientMove:"footer_gradientMove__1IjZR"}},19:function(e,t,a){e.exports={container:"about_container__3X4q1",headerContainer:"about_headerContainer__2nlqW",header:"about_header__c5dGI",sectionContainer:"about_sectionContainer__3Hk1h",stickerContainer:"about_stickerContainer__HbbUi",sticker:"about_sticker__1RMYU",rotate:"about_rotate__2qzYk",summary:"about_summary__1IEKK",link:"about_link__3rMYY"}},29:function(e,t,a){e.exports={hero:"hero_hero__2i0RQ",headerContainer:"hero_headerContainer__1aixr",header:"hero_header__3oo5R",sub:"hero_sub__3bDoW",imageContainer:"hero_imageContainer__hcTsE",image:"hero_image__22w1f",imageBlur:"hero_imageBlur__Sk5cy",gradient:"hero_gradient__2Wbl1",video:"hero_video__2rqvv"}},39:function(e,t,a){e.exports={name:"nav_name__1cURJ",portfolio:"nav_portfolio__3y0jS",toggleContainer:"nav_toggleContainer__JUc0h",icon:"nav_icon__1b4zK"}},4:function(e,t,a){e.exports={container:"skills_container__1qc5i",headerContainer:"skills_headerContainer__3xYCp",header:"skills_header__xYXpP",sectionContainer:"skills_sectionContainer__AmYwP",rowContainer:"skills_rowContainer__UmIG-",iconRow:"skills_iconRow__1sS1n",rowHeader:"skills_rowHeader__23TAm",animationContainer:"skills_animationContainer__2iZia",iconContainer:"skills_iconContainer__2nd6U",icon:"skills_icon__1jOX5",skillText:"skills_skillText__1Z_7Z"}},45:function(e,t,a){e.exports={container:"portfolio_container__1oprQ",headerContainer:"portfolio_headerContainer__14Eut",header:"portfolio_header__28T7Y",feed:"portfolio_feed__1rYNT"}},61:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var s=a(2),r=a.n(s),o=a(54),n=a.n(o),i=(a(61),a(11)),c=a(39),l=a.n(c),d=a(73),j=document.documentElement,b=a(55),h=a(3),_=function(){var e=Object(s.useState)("dark"),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(h.jsxs)(d.a.nav,{initial:{opacity:0,y:"-54px"},animate:{opacity:1,y:0},transition:{duration:1,type:"spring",stiffness:100},children:[Object(h.jsxs)("p",{className:l.a.portfolio,children:["PORTFOLIO ",(new Date).getFullYear()]}),Object(h.jsx)("p",{className:l.a.name,children:"JOSH WARREN"}),Object(h.jsx)("div",{onClick:function(){"dark"===a?(r("light"),j.style.setProperty("--bg-color","white"),j.style.setProperty("--font-color-one","rgb(95, 95, 95)"),j.style.setProperty("--font-color-two","rgb(126, 126, 126)"),j.style.setProperty("--bg-portfolio","white"),j.style.setProperty("--border-portfolio","1px solid rgba(221, 221, 221, 0)"),j.style.setProperty("--btn-bg-portfolio-live","rgb(27, 27, 27)"),j.style.setProperty("--btn-border-portfolio","1px solid rgb(233, 233, 233)"),j.style.setProperty("--btn-color-portfolio-live","rgb(240, 240, 240)"),j.style.setProperty("--color-hover","black")):(r("dark"),j.style.setProperty("--bg-color","black"),j.style.setProperty("--font-color-one","rgb(212, 212, 212)"),j.style.setProperty("--font-color-two","rgb(192, 192, 192)"),j.style.setProperty("--bg-portfolio","rgb(10, 10, 10)"),j.style.setProperty("--border-portfolio","1px solid rgb(26, 26, 26)"),j.style.setProperty("--btn-bg-portfolio-live","rgb(221, 221, 221)"),j.style.setProperty("--btn-border-portfolio","1px solid rgb(39, 39, 39)"),j.style.setProperty("--btn-color-portfolio-live","rgb(77, 77, 77)"),j.style.setProperty("--color-hover","white"))},className:l.a.toggleContainer,children:Object(h.jsx)(b.a,{className:l.a.icon,style:"dark"===a?null:{transform:"translateX(29px) rotate(180deg)"}})})]})},m=a(74),p=a.p+"static/media/sparks.98b55f4a.mp4",O=a(29),x=a.n(O),f=a(14),u={end:{opacity:1,transition:{duration:.5}},start:{opacity:0,transition:{duration:.5}}},g=function(){var e=Object(f.a)({threshold:.1}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(m.a)(),n=Object(m.a)();Object(s.useEffect)((function(){r?(o.start(u.end),n.start(u.end)):(o.start(u.start),n.start(u.start))}),[r]);return Object(h.jsxs)("div",{ref:a,className:x.a.hero,children:[Object(h.jsxs)(d.a.div,{animate:n,className:x.a.headerContainer,children:[Object(h.jsx)(d.a.h2,{animate:n,className:x.a.header,children:"Josh Warren. Full Stack React Developer."}),Object(h.jsx)(d.a.p,{className:x.a.sub})]}),Object(h.jsx)("div",{className:x.a.gradient}),Object(h.jsx)(d.a.video,{animate:o,playsinline:!0,muted:!0,autoPlay:!0,loop:!0,className:x.a.video,children:Object(h.jsx)("source",{src:p,type:"video/mp4"})})]})},N=a(12),v=a.n(N),y=function(e){var t=e.header,a=e.sub,r=e.desc,o=e.src,n=e.codeLink,c=e.demoLink,l=Object(f.a)({threshold:0,rootMargin:"50px"}),j=Object(i.a)(l,2),b=j[0],_=j[1],p=Object(m.a)();return Object(s.useEffect)((function(){_?p.start(u.end):p.start(u.start)}),[_]),Object(h.jsx)("div",{className:v.a.outer,children:Object(h.jsx)(d.a.div,{animate:p,className:v.a.sectionContainer,children:Object(h.jsxs)("div",{className:v.a.subContainer,children:[Object(h.jsxs)("div",{className:v.a.infoContainer,children:[Object(h.jsx)(d.a.h3,{className:v.a.header,children:t}),Object(h.jsx)(d.a.p,{className:v.a.subHeader,children:a}),Object(h.jsx)(d.a.p,{className:v.a.description,children:r}),Object(h.jsxs)("div",{className:v.a.linksContainer,children:[Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:c,children:Object(h.jsx)("button",{className:"".concat(v.a.button," ").concat(v.a.live),children:"Live Demo"})}),Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:n,children:Object(h.jsx)("button",{className:"".concat(v.a.button," ").concat(v.a.view),children:"View Code"})})]})]}),Object(h.jsx)(d.a.img,{ref:b,className:v.a.image,src:o,alt:""})]})})})},k=a(45),C=a.n(k),w=function(){var e=Object(f.a)({threshold:.1}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(m.a)(),n={y:400},c={y:0,transition:{duration:1,ease:[.6,.01,-.05,.9]}};return Object(s.useEffect)((function(){r?o.start(c):o.start(n)}),[r]),Object(h.jsxs)("div",{className:C.a.container,children:[Object(h.jsx)(d.a.div,{ref:a,className:C.a.headerContainer,children:Object(h.jsx)(d.a.h2,{animate:o,children:"Projects"})}),Object(h.jsxs)("div",{className:C.a.feed,children:[Object(h.jsx)(y,{header:"Instagram",sub:"Instagram Clone",desc:"I built this project using react. Besides using create-react-app and firestore, I built everything from scratch. In total it took me around 20 days to complete.",src:"https://user-images.githubusercontent.com/81135679/127759580-7e0aa20d-d922-4e10-bc5f-9a7ab371cef0.png",codeLink:"https://github.com/joshwrn/instagram-clone",demoLink:"https://joshwrn.github.io/instagram-clone/#/"}),Object(h.jsx)(y,{header:"Fashion Store",sub:"React Clothing Store",desc:"This project was built in react. You have the ability to add items to your cart and complete a fake checkout.",src:"https://user-images.githubusercontent.com/81135679/120249450-d0f68380-c22f-11eb-8c58-209df5794d92.jpg",demoLink:"https://joshwrn.github.io/shopping-cart/",codeLink:"https://github.com/joshwrn/shopping-cart"})]})]})},P=a(27),I=a(56),T=a(18),R=a.n(T),E=function(){var e=Object(f.a)({threshold:.1}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(m.a)();return Object(s.useEffect)((function(){r?o.start(u.end):o.start(u.start),console.log(r)}),[r]),Object(h.jsxs)(d.a.div,{animate:o,ref:a,className:R.a.container,children:[Object(h.jsx)("a",{href:"mailto:joshnwarren@gmail.com",children:Object(h.jsx)("h2",{className:R.a.email,children:"joshnwarren@gmail.com"})}),Object(h.jsx)("div",{className:R.a.bg}),Object(h.jsx)("div",{className:R.a.gradient}),Object(h.jsxs)("div",{className:R.a.socials,children:[Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/joshwrn",children:Object(h.jsx)(P.c,{className:R.a.socialIcon})}),Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://codepen.io/joshwrn",children:Object(h.jsx)(P.b,{className:R.a.socialIcon})}),Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://twitter.com/joshwrn",children:Object(h.jsx)(I.a,{className:R.a.socialIcon})})]})]})},H=a.p+"static/media/holo.c297df0c.png",S=a(19),Y=a.n(S),J=function(){var e=Object(f.a)({threshold:.1}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(m.a)(),n=Object(m.a)(),c={y:400},l={y:0,transition:{duration:1,ease:[.6,.01,-.05,.9],when:"afterChildren",delayChildren:.6,staggerChildren:.04,staggerDirection:-1}};return Object(s.useEffect)((function(){r?(o.start(l),n.start(u.end)):(o.start(c),n.start(u.start)),console.log(r)}),[r]),Object(h.jsxs)(d.a.div,{ref:a,animate:n,className:Y.a.container,children:[Object(h.jsx)(d.a.div,{className:Y.a.headerContainer,children:Object(h.jsx)(d.a.h2,{animate:o,className:Y.a.header,children:"About"})}),Object(h.jsxs)("div",{className:Y.a.sectionContainer,children:[Object(h.jsxs)("p",{className:Y.a.summary,children:["Hi, my name is Josh. I'm a 26 year old full stack developer, looking for a position as a junior dev. My past experience has mostly just been freelance work but I'm looking to be part of an actual team. I've spent most of my time during the pandemic studying web design and teaching myself different programming languages. When I'm not coding I like to mess around in Photoshop and occasionally I make beats for"," ",Object(h.jsx)("a",{className:Y.a.link,rel:"noreferrer",target:"_blank",href:"https://www.youtube.com/channel/UCL3GruHNnB7F008lzpnF-pQ",children:"youtube"}),", where I have over 10,000 subscribers."]}),Object(h.jsx)("div",{className:Y.a.stickerContainer,children:Object(h.jsx)("img",{className:Y.a.sticker,src:H,alt:""})})]})]})},L=a(4),M=a.n(L),z=a(46),A=a(68),D=a(69),U=a(70),W=a(71),q=a(72),B=function(){var e=Object(f.a)({threshold:.1}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(m.a)(),n=Object(m.a)(),c={y:400},l={y:0,transition:{duration:1,ease:[.6,.01,-.05,.9],when:"afterChildren",delayChildren:.6,staggerChildren:.04,staggerDirection:-1}};return Object(s.useEffect)((function(){r?(o.start(l),n.start(u.end)):(o.start(c),n.start(u.start)),console.log(r)}),[r]),Object(h.jsxs)("div",{ref:a,className:M.a.container,children:[Object(h.jsx)(d.a.div,{className:M.a.headerContainer,children:Object(h.jsx)(d.a.h2,{animate:o,className:M.a.header,children:"Skills"})}),Object(h.jsxs)(d.a.div,{animate:n,className:M.a.sectionContainer,children:[Object(h.jsxs)("div",{className:M.a.rowContainer,children:[Object(h.jsx)("h2",{className:M.a.rowHeader,children:"Coding"}),Object(h.jsxs)("div",{className:M.a.iconRow,children:[Object(h.jsxs)(d.a.div,{className:M.a.iconContainer,children:[Object(h.jsx)(z.c,{className:M.a.icon}),Object(h.jsx)("p",{className:M.a.skillText,children:"React"})]}),Object(h.jsxs)("div",{className:M.a.iconContainer,children:[Object(h.jsx)(P.d,{className:M.a.icon}),Object(h.jsx)("p",{className:M.a.skillText,children:"Javascript"})]}),Object(h.jsxs)("div",{className:M.a.iconContainer,children:[Object(h.jsx)(z.a,{className:M.a.icon}),Object(h.jsx)("p",{className:M.a.skillText,children:"CSS"})]}),Object(h.jsxs)("div",{className:M.a.iconContainer,children:[Object(h.jsx)(z.b,{className:M.a.icon}),Object(h.jsx)("p",{className:M.a.skillText,children:"MongoDB"})]}),Object(h.jsxs)("div",{className:M.a.iconContainer,children:[Object(h.jsx)(A.a,{size:40,className:M.a.icon}),Object(h.jsx)("p",{className:M.a.skillText,children:"Express"})]}),Object(h.jsxs)("div",{className:M.a.iconContainer,children:[Object(h.jsx)(P.e,{className:M.a.icon}),Object(h.jsx)("p",{className:M.a.skillText,children:"NodeJS"})]}),Object(h.jsxs)("div",{className:M.a.iconContainer,children:[Object(h.jsx)(P.a,{className:M.a.icon}),Object(h.jsx)("p",{className:M.a.skillText,children:"Git"})]})]})]}),Object(h.jsxs)("div",{className:M.a.rowContainer,children:[Object(h.jsx)("h2",{className:M.a.rowHeader,children:"Design"}),Object(h.jsxs)("div",{className:M.a.iconRow,children:[Object(h.jsxs)("div",{className:M.a.iconContainer,children:[Object(h.jsx)(D.a,{size:40,className:M.a.icon}),Object(h.jsx)("p",{className:M.a.skillText,children:"After Effects"})]}),Object(h.jsxs)("div",{className:M.a.iconContainer,children:[Object(h.jsx)(U.a,{size:40,className:M.a.icon}),Object(h.jsx)("p",{className:M.a.skillText,children:"Premiere"})]}),Object(h.jsxs)("div",{className:M.a.iconContainer,children:[Object(h.jsx)(W.a,{size:40,className:M.a.icon}),Object(h.jsx)("p",{className:M.a.skillText,children:"Photoshop"})]}),Object(h.jsxs)("div",{className:M.a.iconContainer,children:[Object(h.jsx)(q.a,{size:40,className:M.a.icon}),Object(h.jsx)("p",{className:M.a.skillText,children:"Figma"})]})]})]})]})]})};var F=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(_,{}),Object(h.jsxs)("div",{className:"feed",children:[Object(h.jsx)(g,{}),Object(h.jsx)(w,{}),Object(h.jsx)(B,{}),Object(h.jsx)(J,{}),Object(h.jsx)(E,{})]})]})};n.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.bafb2c65.chunk.js.map
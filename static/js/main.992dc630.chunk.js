(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,a){e.exports={outer:"portfolio__sections_outer__5_hf2",sectionContainer:"portfolio__sections_sectionContainer___k9Hd",subContainer:"portfolio__sections_subContainer__241z3",infoContainer:"portfolio__sections_infoContainer__1luCr",header:"portfolio__sections_header__35JXn",subHeader:"portfolio__sections_subHeader__3_lLY",description:"portfolio__sections_description__3EkWN",linksContainer:"portfolio__sections_linksContainer__lJtCa",button:"portfolio__sections_button__2mjmA",live:"portfolio__sections_live__24UJW",gradientMove:"portfolio__sections_gradientMove__2Zqlw",image:"portfolio__sections_image__3YfO5"}},17:function(e,t,a){e.exports={navRef:"hero_navRef__2KNlP",hero:"hero_hero__2i0RQ",headerContainer:"hero_headerContainer__1aixr",header:"hero_header__3oo5R",headerSubContainer:"hero_headerSubContainer__2sFUV",sectionLinks:"hero_sectionLinks__20mQo",sub:"hero_sub__3bDoW",imageContainer:"hero_imageContainer__hcTsE",image:"hero_image__22w1f",imageBlur:"hero_imageBlur__Sk5cy",gradient:"hero_gradient__2Wbl1",video:"hero_video__2rqvv"}},19:function(e,t,a){e.exports={container:"footer_container__39b-B",email:"footer_email__8AVyd",socials:"footer_socials__RjMHx",socialIcon:"footer_socialIcon__2LvqN",gradientMove:"footer_gradientMove__1IjZR"}},23:function(e,t,a){e.exports={top:"nav_top__PV05S",blur:"nav_blur__D2ve0",color:"nav_color__sKd8K",name:"nav_name__1cURJ",portfolio:"nav_portfolio__3y0jS",toggleContainer:"nav_toggleContainer__JUc0h",icon:"nav_icon__1b4zK"}},30:function(e,t,a){e.exports={container:"about_container__3X4q1",sectionContainer:"about_sectionContainer__3Hk1h",stickerContainer:"about_stickerContainer__HbbUi",sticker:"about_sticker__1RMYU",summary:"about_summary__1IEKK",link:"about_link__3rMYY",rotate:"about_rotate__2qzYk"}},4:function(e,t,a){e.exports={container:"skills_container__1qc5i",sectionContainer:"skills_sectionContainer__AmYwP",rowContainer:"skills_rowContainer__UmIG-",iconRow:"skills_iconRow__1sS1n",rowHeader:"skills_rowHeader__23TAm",animationContainer:"skills_animationContainer__2iZia",iconContainer:"skills_iconContainer__2nd6U",icon:"skills_icon__1jOX5",skillText:"skills_skillText__1Z_7Z"}},52:function(e,t,a){e.exports={container:"portfolio_container__1oprQ",feed:"portfolio_feed__1rYNT"}},53:function(e,t,a){e.exports={headerContainer:"header_headerContainer__2JflJ",header:"header_header__1WH8c"}},62:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var s=a(2),o=a.n(s),r=a(55),n=a.n(r),c=a(10),i=(a(62),a(23)),l=a.n(i),j=a(74),d=document.documentElement,b=a(56),_=a(3),h=function(e){var t=e.top,a=Object(s.useState)("dark"),o=Object(c.a)(a,2),r=o[0],n=o[1];return Object(_.jsxs)(j.a.nav,{className:t?l.a.top:l.a.color,initial:{opacity:0,y:"-54px"},animate:{opacity:1,y:0},transition:{duration:1,type:"spring",stiffness:100},children:[Object(_.jsxs)("p",{className:l.a.portfolio,children:["PORTFOLIO ",(new Date).getFullYear()]}),Object(_.jsx)("p",{className:l.a.name,children:"JOSH WARREN"}),Object(_.jsx)("div",{onClick:function(){"dark"===r?(n("light"),d.style.setProperty("--bg-color","white"),d.style.setProperty("--font-color-one","rgb(95, 95, 95)"),d.style.setProperty("--font-color-two","rgb(126, 126, 126)"),d.style.setProperty("--bg-portfolio","white"),d.style.setProperty("--border-portfolio","1px solid rgba(221, 221, 221, 0)"),d.style.setProperty("--btn-bg-portfolio-live","rgb(27, 27, 27)"),d.style.setProperty("--btn-border-portfolio","1px solid rgb(233, 233, 233)"),d.style.setProperty("--btn-color-portfolio-live","rgb(240, 240, 240)"),d.style.setProperty("--color-hover","black")):(n("dark"),d.style.setProperty("--bg-color","black"),d.style.setProperty("--font-color-one","rgb(212, 212, 212)"),d.style.setProperty("--font-color-two","rgb(192, 192, 192)"),d.style.setProperty("--bg-portfolio","rgb(10, 10, 10)"),d.style.setProperty("--border-portfolio","1px solid rgb(26, 26, 26)"),d.style.setProperty("--btn-bg-portfolio-live","rgb(221, 221, 221)"),d.style.setProperty("--btn-border-portfolio","1px solid rgb(39, 39, 39)"),d.style.setProperty("--btn-color-portfolio-live","rgb(77, 77, 77)"),d.style.setProperty("--color-hover","white"))},className:l.a.toggleContainer,children:Object(_.jsx)(b.a,{className:l.a.icon,style:"dark"===r?null:{transform:"translateX(29px) rotate(180deg)"}})}),Object(_.jsx)("div",{className:l.a.blur,style:t?{opacity:0}:{opacity:1}})]})},m=a(75),p=a.p+"static/media/sparks.98b55f4a.mp4",f=a(17),O=a.n(f),u=a(13),x={y:400,filter:"blur(100px)"},g={y:0,filter:"blur(0px)",transition:{duration:.95,ease:[.6,.01,-.05,.9]}},v={end:{opacity:1,transition:{duration:.4}},start:{opacity:0,transition:{duration:.4}}},N=function(e){var t=e.setTop,a=Object(u.a)({threshold:.1}),o=Object(c.a)(a,2),r=o[0],n=o[1],i=Object(u.a)({threshold:.1}),l=Object(c.a)(i,2),d=l[0],b=l[1],h=Object(m.a)(),f=Object(m.a)(),x={filter:"blur(100px)",opacity:0},g={filter:"blur(0px)",opacity:1,transition:{duration:.85,ease:[.6,.01,-.05,.9]}};return Object(s.useEffect)((function(){n?(h.start(g),f.start(v.end)):(h.start(x),f.start(v.start))}),[n]),Object(s.useEffect)((function(){t(!!b)}),[b]),Object(_.jsxs)(j.a.div,{animate:f,className:O.a.hero,children:[Object(_.jsx)("div",{ref:d,className:O.a.navRef}),Object(_.jsx)(j.a.div,{animate:h,className:O.a.headerContainer,children:Object(_.jsxs)("div",{className:O.a.headerSubContainer,children:[Object(_.jsx)(j.a.h2,{className:O.a.header,children:"Josh Warren."}),Object(_.jsx)(j.a.h2,{className:O.a.header,children:"Full Stack Web Developer."})]})}),Object(_.jsx)("div",{className:O.a.gradient}),Object(_.jsx)("div",{ref:r,className:O.a.video,dangerouslySetInnerHTML:{__html:'\n        <video\n          loop\n          muted\n          autoplay\n          playsinline\n          preload="metadata"\n        >\n        <source className='.concat(O.a.video,' src="').concat(p,'" type="video/mp4" />\n        </video>')}})]})},y=a(12),k=a.n(y),C=function(e){var t=e.header,a=e.sub,o=e.desc,r=e.src,n=e.codeLink,i=e.demoLink,l=Object(u.a)({threshold:0,rootMargin:"50px"}),d=Object(c.a)(l,2),b=d[0],h=d[1],p=Object(m.a)();return Object(s.useEffect)((function(){h?p.start(v.end):p.start(v.start)}),[h]),Object(_.jsx)("div",{className:k.a.outer,children:Object(_.jsx)(j.a.div,{animate:p,className:k.a.sectionContainer,children:Object(_.jsxs)("div",{className:k.a.subContainer,children:[Object(_.jsxs)("div",{className:k.a.infoContainer,children:[Object(_.jsx)(j.a.h3,{className:k.a.header,children:t}),Object(_.jsx)(j.a.p,{className:k.a.subHeader,children:a}),Object(_.jsx)(j.a.p,{className:k.a.description,children:o}),Object(_.jsxs)("div",{className:k.a.linksContainer,children:[Object(_.jsx)("a",{rel:"noreferrer",target:"_blank",href:i,children:Object(_.jsx)("button",{className:"".concat(k.a.button," ").concat(k.a.live),children:"Live Demo"})}),Object(_.jsx)("a",{rel:"noreferrer",target:"_blank",href:n,children:Object(_.jsx)("button",{className:"".concat(k.a.button," ").concat(k.a.view),children:"View Code"})})]})]}),Object(_.jsx)(j.a.img,{ref:b,className:k.a.image,src:r,alt:""})]})})})},w=a(52),P=a.n(w),I=a(53),T=a.n(I),S=function(e){var t=e.title,a=Object(u.a)({threshold:.1}),o=Object(c.a)(a,2),r=o[0],n=o[1],i=Object(m.a)();return Object(s.useEffect)((function(){n?i.start(g):i.start(x)}),[n]),Object(_.jsx)(j.a.div,{ref:r,className:T.a.headerContainer,children:Object(_.jsx)(j.a.h2,{className:T.a.header,animate:i,children:t})})},R=function(){return Object(_.jsxs)("div",{className:P.a.container,children:[Object(_.jsx)(S,{title:"Projects"}),Object(_.jsxs)("div",{className:P.a.feed,children:[Object(_.jsx)(C,{header:"Instagram",sub:"Instagram Clone",desc:"I built this project using react. Besides using create-react-app and firestore, I built everything from scratch. In total it took me around 20 days to complete.",src:"https://user-images.githubusercontent.com/81135679/127759580-7e0aa20d-d922-4e10-bc5f-9a7ab371cef0.png",codeLink:"https://github.com/joshwrn/instagram-clone",demoLink:"https://joshwrn.github.io/instagram-clone/#/"}),Object(_.jsx)(C,{header:"Fashion Store",sub:"React Clothing Store",desc:"This project was built in react. You have the ability to add items to your cart and complete a fake checkout.",src:"https://user-images.githubusercontent.com/81135679/120249450-d0f68380-c22f-11eb-8c58-209df5794d92.jpg",demoLink:"https://joshwrn.github.io/shopping-cart/",codeLink:"https://github.com/joshwrn/shopping-cart"})]})]})},E=a(28),H=a(57),J=a(19),L=a.n(J),M=function(){var e=Object(u.a)({threshold:.1}),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(m.a)();return Object(s.useEffect)((function(){o?r.start(v.end):r.start(v.start),console.log(o)}),[o]),Object(_.jsxs)(j.a.div,{animate:r,ref:a,className:L.a.container,children:[Object(_.jsx)("a",{href:"mailto:joshnwarren@gmail.com",children:Object(_.jsx)("h2",{className:L.a.email,children:"joshnwarren@gmail.com"})}),Object(_.jsx)("div",{className:L.a.bg}),Object(_.jsx)("div",{className:L.a.gradient}),Object(_.jsxs)("div",{className:L.a.socials,children:[Object(_.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/joshwrn",children:Object(_.jsx)(E.c,{className:L.a.socialIcon})}),Object(_.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://codepen.io/joshwrn",children:Object(_.jsx)(E.b,{className:L.a.socialIcon})}),Object(_.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://twitter.com/joshwrn",children:Object(_.jsx)(H.a,{className:L.a.socialIcon})})]})]})},Y=a.p+"static/media/lpt3.1525ddd1.png",z=a(30),U=a.n(z),W=function(){var e=Object(u.a)({threshold:.1}),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(m.a)();return Object(s.useEffect)((function(){o?r.start(v.end):r.start(v.start)}),[o]),Object(_.jsxs)(j.a.div,{ref:a,animate:r,className:U.a.container,children:[Object(_.jsx)(S,{title:"About"}),Object(_.jsxs)("div",{className:U.a.sectionContainer,children:[Object(_.jsxs)("p",{className:U.a.summary,children:["Hi, my name is Josh. I'm a 26 year old full stack developer, looking for a position as a junior dev. My past experience has mostly just been freelance work but I'm looking to be part of an actual team. I've spent most of my time during the pandemic studying web design and teaching myself different programming languages. When I'm not coding I like to mess around in Photoshop and occasionally I make beats for"," ",Object(_.jsx)("a",{className:U.a.link,rel:"noreferrer",target:"_blank",href:"https://www.youtube.com/channel/UCL3GruHNnB7F008lzpnF-pQ",children:"youtube"}),", where I have over 10,000 subscribers."]}),Object(_.jsx)("div",{className:U.a.stickerContainer,children:Object(_.jsx)("img",{className:U.a.sticker,src:Y,alt:""})})]})]})},A=a(4),F=a.n(A),B=a(45),D=a(69),q=a(70),K=a(71),Z=a(72),Q=a(73),V=function(){var e=Object(u.a)({threshold:.1}),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(m.a)();return Object(s.useEffect)((function(){o?r.start(v.end):r.start(v.start),console.log(o)}),[o]),Object(_.jsxs)("div",{ref:a,className:F.a.container,children:[Object(_.jsx)(S,{title:"Skills"}),Object(_.jsxs)(j.a.div,{animate:r,className:F.a.sectionContainer,children:[Object(_.jsxs)("div",{className:F.a.rowContainer,children:[Object(_.jsx)("h2",{className:F.a.rowHeader,children:"Coding"}),Object(_.jsxs)("div",{className:F.a.iconRow,children:[Object(_.jsxs)(j.a.div,{className:F.a.iconContainer,children:[Object(_.jsx)(B.c,{className:F.a.icon}),Object(_.jsx)("p",{className:F.a.skillText,children:"React"})]}),Object(_.jsxs)("div",{className:F.a.iconContainer,children:[Object(_.jsx)(E.d,{className:F.a.icon}),Object(_.jsx)("p",{className:F.a.skillText,children:"Javascript"})]}),Object(_.jsxs)("div",{className:F.a.iconContainer,children:[Object(_.jsx)(B.a,{className:F.a.icon}),Object(_.jsx)("p",{className:F.a.skillText,children:"CSS"})]}),Object(_.jsxs)("div",{className:F.a.iconContainer,children:[Object(_.jsx)(B.b,{className:F.a.icon}),Object(_.jsx)("p",{className:F.a.skillText,children:"MongoDB"})]}),Object(_.jsxs)("div",{className:F.a.iconContainer,children:[Object(_.jsx)(D.a,{size:40,className:F.a.icon}),Object(_.jsx)("p",{className:F.a.skillText,children:"Express"})]}),Object(_.jsxs)("div",{className:F.a.iconContainer,children:[Object(_.jsx)(E.e,{className:F.a.icon}),Object(_.jsx)("p",{className:F.a.skillText,children:"NodeJS"})]}),Object(_.jsxs)("div",{className:F.a.iconContainer,children:[Object(_.jsx)(E.a,{className:F.a.icon}),Object(_.jsx)("p",{className:F.a.skillText,children:"Git"})]})]})]}),Object(_.jsxs)("div",{className:F.a.rowContainer,children:[Object(_.jsx)("h2",{className:F.a.rowHeader,children:"Design"}),Object(_.jsxs)("div",{className:F.a.iconRow,children:[Object(_.jsxs)("div",{className:F.a.iconContainer,children:[Object(_.jsx)(q.a,{size:40,className:F.a.icon}),Object(_.jsx)("p",{className:F.a.skillText,children:"After Effects"})]}),Object(_.jsxs)("div",{className:F.a.iconContainer,children:[Object(_.jsx)(K.a,{size:40,className:F.a.icon}),Object(_.jsx)("p",{className:F.a.skillText,children:"Premiere"})]}),Object(_.jsxs)("div",{className:F.a.iconContainer,children:[Object(_.jsx)(Z.a,{size:40,className:F.a.icon}),Object(_.jsx)("p",{className:F.a.skillText,children:"Photoshop"})]}),Object(_.jsxs)("div",{className:F.a.iconContainer,children:[Object(_.jsx)(Q.a,{size:40,className:F.a.icon}),Object(_.jsx)("p",{className:F.a.skillText,children:"Figma"})]})]})]})]})]})};var X=function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],o=t[1];return Object(s.useEffect)((function(){console.log("top",a)}),[a]),Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(h,{top:a}),Object(_.jsxs)("div",{className:"feed",children:[Object(_.jsx)(N,{setTop:o}),Object(_.jsx)(R,{}),Object(_.jsx)(V,{}),Object(_.jsx)(W,{}),Object(_.jsx)(M,{})]})]})};n.a.render(Object(_.jsx)(o.a.StrictMode,{children:Object(_.jsx)(X,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.992dc630.chunk.js.map
(this["webpackJsonpprime-video"]=this["webpackJsonpprime-video"]||[]).push([[0],{22:function(t,e,s){},38:function(t,e,s){},63:function(t,e,s){},65:function(t,e,s){},66:function(t,e,s){"use strict";s.r(e);var c=s(0),i=s.n(c),n=s(6),a=s.n(n),o=(s(22),s(9)),r=s(14),d=s.n(r),l=(s(38),s(39),s(40),s(15)),h=s(17),b=s(16),m=s.n(b),p=(s(62),s(63),s(1)),w=function(t){var e=t.details,s=window.innerWidth,c=s>=768?"25vw":"30vh",i=function(){s=window.innerWidth,c=s>=768?"25vw":"34vh"};return window.addEventListener("resize",i),i(),Object(p.jsx)(l.a,{trigger:Object(p.jsx)("img",{src:e.thumbnailUrl,alt:"thumbnail",className:"thumbnail-image"}),modal:!0,className:"popup-content",children:function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"close-button-container",children:Object(p.jsx)("button",{"data-testid":"closeButton",type:"button",className:"close-button",onClick:t,children:Object(p.jsx)(h.a,{})})}),Object(p.jsx)("div",{className:"player-container",children:Object(p.jsx)(m.a,{url:e.videoUrl,controls:"true",className:"react-player",height:c,width:"100%"})})]})}})},u=function(t){var e=t.movieDetails;return Object(p.jsx)("div",{className:"slider-container",children:Object(p.jsx)(d.a,Object(o.a)(Object(o.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}}]}),{},{children:e.map((function(t){return Object(p.jsx)("div",{className:"thumbnail-container",children:Object(p.jsx)(w,{details:t},t.id)},t.id)}))}))})},g=function(t){var e=t.moviesList,s=e.filter((function(t){return"ACTION"===t.categoryId})),c=e.filter((function(t){return"COMEDY"===t.categoryId}));return Object(p.jsxs)("div",{className:"bg-container",children:[Object(p.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/prime-video-img.png",alt:"prime video",className:"prime-img"}),Object(p.jsxs)("div",{className:"sliders-container",children:[Object(p.jsxs)("div",{className:"movie-container",children:[Object(p.jsx)("h1",{className:"heading",children:"Action Movies"}),Object(p.jsx)(u,{movieDetails:s})]}),Object(p.jsxs)("div",{className:"movie-container",children:[Object(p.jsx)("h1",{className:"heading",children:"Comedy Movies"}),Object(p.jsx)(u,{movieDetails:c})]})]})]})},j=(s(65),[{id:"61227099e13958e58d31e74c",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/the-tomorrow-war-img.png",videoUrl:"https://www.youtube.com/watch?v=QPistcpGB8o",categoryId:"ACTION"},{id:"612271842cad3c2dfcb82481",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/the-boss-baby-img.png",videoUrl:"https://www.youtube.com/watch?v=k397HRbTtWI&t=1s",categoryId:"COMEDY"},{id:"6122709941329807a4e17b39",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/avengers-img.png",videoUrl:"https://www.youtube.com/watch?v=eOrNdBpGMv8",categoryId:"ACTION"},{id:"61227184c889cff17f05900b",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/the-intern-img.png",videoUrl:"https://www.youtube.com/watch?v=ZU3Xban0Y6A",categoryId:"COMEDY"},{id:"612271846f711783024f2bfa",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/karwaan-img.png",videoUrl:"https://www.youtube.com/watch?v=IUCeN7kelXs",categoryId:"COMEDY"},{id:"612271141bf93653809cdccb",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/war-img.png",videoUrl:"https://www.youtube.com/watch?v=tQ0mzXRk-oM",categoryId:"ACTION"},{id:"61227184c7ac22c8258938c5",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/yes-man-img.png",videoUrl:"https://www.youtube.com/watch?v=dDh1l3qVNoY",categoryId:"COMEDY"},{id:"61227184ae30e00e3ce542c8",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/isnt-it-romantic-img.png",videoUrl:"https://www.youtube.com/watch?v=YVYzxm_RqMg&t=9s",categoryId:"COMEDY"},{id:"6122718418ae122e517c3ada",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/total-dhamaal-img.png",videoUrl:"https://www.youtube.com/watch?v=fo9EhcwQXcM",categoryId:"COMEDY"},{id:"61227099ce46ed88e7f00c19",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/godzilla-vs-kong-img.png",videoUrl:"https://www.youtube.com/watch?v=odM92ap8_c0",categoryId:"ACTION"},{id:"612271848b2be0f2f769d24a",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/welcome-to-newyork-img.png",videoUrl:"https://www.youtube.com/watch?v=lMAj8tyThw0",categoryId:"COMEDY"},{id:"61227184882da0a972890152",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/pagalpanti-img.png",videoUrl:"https://www.youtube.com/watch?v=3-7jehmURuM",categoryId:"COMEDY"},{id:"6122709931ad5e69f5125806",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/gamer-img.png",videoUrl:"https://www.youtube.com/watch?v=P2g94xQmtHw",categoryId:"ACTION"},{id:"61227099d3c5b18801b2edb5",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/rule-of-the-law-img.png",videoUrl:"https://www.youtube.com/watch?v=xaPLUII_M6g",categoryId:"ACTION"},{id:"61227114b7b5232771c68883",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/priest-img.png",videoUrl:"https://www.youtube.com/watch?v=IYfdQOGqL1o",categoryId:"ACTION"},{id:"61227099ea52349bd1e16ee4",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/ghost-protocal-img.png",videoUrl:"https://www.youtube.com/watch?v=EDGYVFZxsXQ",categoryId:"ACTION"}]),v=function(){return Object(p.jsx)(g,{moviesList:j})};a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.c1d5f94f.chunk.js.map
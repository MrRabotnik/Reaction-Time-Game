(function(e){function t(t){for(var i,r,l=t[0],a=t[1],u=t[2],b=0,h=[];b<l.length;b++)r=l[b],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);s&&s(t);while(h.length)h.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],i=!0,l=1;l<o.length;l++){var a=o[l];0!==n[a]&&(i=!1)}i&&(c.splice(t--,1),e=r(r.s=o[0]))}return e}var i={},n={app:0},c=[];function r(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=i,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(o,i,function(t){return e[t]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=a;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("7a23");function n(e,t,o,n,c,r){var l=Object(i["g"])("Result"),a=Object(i["g"])("Block");return Object(i["f"])(),Object(i["c"])(i["a"],null,[Object(i["e"])("h1",null,Object(i["h"])(c.title),1),Object(i["e"])("button",{id:"play",class:{disabled:c.isPlaying},onClick:t[1]||(t[1]=function(){return r.startGame&&r.startGame.apply(r,arguments)})},Object(i["h"])(c.playButtonText),3),c.showResult?(Object(i["f"])(),Object(i["c"])(l,{key:0,reactionTime:c.reactionTime,tooSoon:c.tooSoon},null,8,["reactionTime","tooSoon"])):Object(i["d"])("",!0),c.isPlaying&&c.showBlock?(Object(i["f"])(),Object(i["c"])(a,{key:1,onCloseBlock:r.hideBlock},null,8,["onCloseBlock"])):c.isPlaying&&!c.showBlock?(Object(i["f"])(),Object(i["c"])("div",{key:2,id:"backgroundDiv",onClick:t[2]||(t[2]=function(){return r.hideBlock&&r.hideBlock.apply(r,arguments)})})):Object(i["d"])("",!0)],64)}function c(e,t,o,n,c,r){return Object(i["f"])(),Object(i["c"])("div",{id:"block",onClick:t[1]||(t[1]=function(){return r.closeBlock&&r.closeBlock.apply(r,arguments)})},Object(i["h"])(c.title),1)}var r={data:function(){return{title:"Click Me",timer:null,reactionTime:null}},methods:{closeBlock:function(){clearInterval(this.timer),this.$emit("closeBlock",this.reactionTime)}},mounted:function(){var e=this;this.reactionTime=-30,this.timer=setInterval((function(){e.reactionTime+=5}),5)}};o("bd9c");r.render=c;var l=r,a={key:0},u={key:0},s=Object(i["e"])("h1",null,"You are ... not a human 😳😲",-1),b={key:1},h=Object(i["e"])("h1",null,"Wow Good Job...that's fast",-1),m={key:2},O=Object(i["e"])("h1",null,"Good Job...that's human average",-1),j={key:3},f=Object(i["e"])("h1",null,"Not Bad...Not Bad ( Boomer )",-1),d={key:4},p=Object(i["e"])("h1",null,"Sad situation...you might need some sleep",-1),y={key:5},T=Object(i["e"])("h1",null,"Ughh...maybe wake up?",-1),v={key:6},k=Object(i["e"])("h1",null,"Get some help",-1),g={key:7},B=Object(i["e"])("h1",null,"Are you even alive 💀",-1),w={key:1},P=Object(i["e"])("h1",null,"Too Soon...",-1);function R(e,t,o,n,c,r){return o.tooSoon?(Object(i["f"])(),Object(i["c"])("div",w,[P])):(Object(i["f"])(),Object(i["c"])("div",a,[o.reactionTime<=150?(Object(i["f"])(),Object(i["c"])("div",u,[s,Object(i["e"])("h2",null,"Your Reaction Time is - "+Object(i["h"])(o.reactionTime)+"ms ",1)])):o.reactionTime>150&&o.reactionTime<=200?(Object(i["f"])(),Object(i["c"])("div",b,[h,Object(i["e"])("h2",null,"Your Reaction Time is - "+Object(i["h"])(o.reactionTime)+"ms ",1)])):o.reactionTime>200&&o.reactionTime<300?(Object(i["f"])(),Object(i["c"])("div",m,[O,Object(i["e"])("h2",null,"Your Reaction Time is - "+Object(i["h"])(o.reactionTime)+"ms ",1)])):o.reactionTime>300&&o.reactionTime<400?(Object(i["f"])(),Object(i["c"])("div",j,[f,Object(i["e"])("h2",null,"Your Reaction Time is - "+Object(i["h"])(o.reactionTime)+"ms ",1)])):o.reactionTime>400&&o.reactionTime<500?(Object(i["f"])(),Object(i["c"])("div",d,[p,Object(i["e"])("h2",null,"Your Reaction Time is - "+Object(i["h"])(o.reactionTime)+"ms ",1)])):o.reactionTime>500&&o.reactionTime<600?(Object(i["f"])(),Object(i["c"])("div",y,[T,Object(i["e"])("h2",null,"Your Reaction Time is - "+Object(i["h"])(o.reactionTime)+"ms ",1)])):o.reactionTime>600&&o.reactionTime<=1e3?(Object(i["f"])(),Object(i["c"])("div",v,[k,Object(i["e"])("h2",null,"Your Reaction Time is - "+Object(i["h"])(o.reactionTime)+"ms ",1)])):o.reactionTime>1e3?(Object(i["f"])(),Object(i["c"])("div",g,[B,Object(i["e"])("h2",null,"Your Reaction Time is - "+Object(i["h"])(o.reactionTime)+"ms ",1)])):Object(i["d"])("",!0)]))}var S={props:["reactionTime","tooSoon"]};S.render=R;var Y=S,x={data:function(){return{title:"Reaction Timer",playButtonText:"Play",isPlaying:!1,delay:null,showBlock:!1,reactionTime:-30,showResult:!1,tooSoon:!1,timeOut:null}},components:{Block:l,Result:Y},methods:{startGame:function(){var e=this;this.isPlaying||(this.isPlaying=!0,this.showResult=!1,this.tooSoon=!1,this.delay=1e3*(Math.floor(3*Math.random())+2),this.timeOut=setTimeout((function(){e.showBlock=!0}),this.delay))},hideBlock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-30;this.showBlock||(this.tooSoon=!0,clearTimeout(this.timeOut)),this.showBlock=!1,this.isPlaying=!1,this.reactionTime=e,this.showResult=!0,console.log(this.reactionTime)}}};o("8049");x.render=n;var M=x;Object(i["b"])(M).mount("#app")},8049:function(e,t,o){"use strict";o("95a1")},"95a1":function(e,t,o){},bc45:function(e,t,o){},bd9c:function(e,t,o){"use strict";o("bc45")}});
//# sourceMappingURL=app.10e3e92f.js.map
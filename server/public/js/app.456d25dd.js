(function(t){function e(e){for(var s,n,o=e[0],h=e[1],l=e[2],c=0,d=[];c<o.length;c++)n=o[c],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in h)Object.prototype.hasOwnProperty.call(h,s)&&(t[s]=h[s]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var h=a[o];0!==i[h]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],h=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=h;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"0fb6":function(t,e,a){},"175c":function(t,e,a){},3451:function(t,e,a){"use strict";var s=a("175c"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",{staticStyle:{"font-family":"Times New Roman"}},[t._v("A Collection of Front Page News Since the Turn of the Century")]),a("h5",{staticStyle:{display:"inline","font-family":"arial"}},[t._v("By: Viet Nguyen")]),a("h5",{staticStyle:{display:"inline",color:"crimson","font-family":"arial"}},[t._v(" Updated: Sept. 25, 2020")]),a("p",{staticStyle:{"font-size":"18px","font-family":"Times New Roman"}},[t._v("The New York Times assigns keywords to every article they write. These are the most common ones featured on the front page throughout the years.")]),t._m(0),a("br"),a("ExampleData",{attrs:{start:t.startSpinner,myData:t.exampleData},on:{apiCall:t.apiCall}}),a("br"),a("label",{attrs:{for:"year"}},[t._v("Select a year: ")]),a("select",{attrs:{name:"year"},on:{change:function(e){return t.onChange(e)}}},[a("option",{attrs:{selected:"",value:"2000"}},[t._v("2000")]),a("option",{attrs:{value:"2001"}},[t._v("2001")]),a("option",{attrs:{value:"2002"}},[t._v("2002")]),a("option",{attrs:{value:"2003"}},[t._v("2003")]),a("option",{attrs:{value:"2004"}},[t._v("2004")]),a("option",{attrs:{value:"2005"}},[t._v("2005")]),a("option",{attrs:{value:"2006"}},[t._v("2006")]),a("option",{attrs:{value:"2007"}},[t._v("2007")]),a("option",{attrs:{value:"2008"}},[t._v("2008")]),a("option",{attrs:{value:"2009"}},[t._v("2009")]),a("option",{attrs:{value:"2010"}},[t._v("2010")]),a("option",{attrs:{value:"2011"}},[t._v("2011")]),a("option",{attrs:{value:"2012"}},[t._v("2012")]),a("option",{attrs:{value:"2013"}},[t._v("2013")]),a("option",{attrs:{value:"2014"}},[t._v("2014")]),a("option",{attrs:{value:"2015"}},[t._v("2015")]),a("option",{attrs:{value:"2016"}},[t._v("2016")]),a("option",{attrs:{value:"2017"}},[t._v("2017")]),a("option",{attrs:{value:"2018"}},[t._v("2018")]),a("option",{attrs:{value:"2019"}},[t._v("2019")]),a("option",{attrs:{value:"2020"}},[t._v("2020")])]),a("br"),a("br"),t._m(1),a("br"),a("br")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticStyle:{color:"dimgray"}},[t._v("Use the "),a("strong",[t._v("slider")]),t._v(" to view different months. "),a("strong",[t._v("Click")]),t._v(" on a column to view specific articles.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"50%",margin:"auto"}},[a("br"),a("br"),a("h3",[t._v("More about this project")]),a("p",{staticStyle:{"text-align":"left","letter-spacing":"1px","line-height":"1.6","font-size":"18px"}},[t._v("Hello! This project was my first real attempt at a full-stack data visualization. I built it because I found that it's hard to keep track of news over time. I chose to use a bar chart because it allowed me to show more detail for each individual month. However, in hindsight a line graph would've been able to show the general trend of news better. Nonetheless, I think I achieved the goal I set out for.")]),a("br"),a("p",{staticStyle:{"text-align":"left","letter-spacing":"1px","line-height":"1.6","font-size":"18px"}},[t._v("For those interested in the technical side of this project, I chose to use a MEVN stack. MongoDB, Express, Vue, and Node. I also used D3.js and GSAP for scaling and animation. In detail, I built my own MongoDB database and filled it with data from the New York Times API. I did this because I only wanted to store front page news, which would reduce the amount of time spent filtering data directly from the NYT API. I used Express to route the requests from the client to server, Vue.js as the front-end web framework to build a dynamic single page application, and finally, Node as the runtime environment. ")]),a("br"),a("p",{staticStyle:{"text-align":"left","letter-spacing":"1px","line-height":"1.6","font-size":"18px"}},[t._v("In summary, this project was a great introduction to full-stack developing and data visualization. However, I can foresee challenges in making the application dynamic for all screen resolutions, especially in regard to mobile viewing (something I fully intend to learn more about!) ")]),a("br"),a("p",{staticStyle:{"text-align":"left","letter-spacing":"1px","line-height":"1.6","font-size":"18px"}},[t._v("Until next time,"),a("br"),a("br"),t._v("Viet"),a("br"),t._v("viet_nguyen_95@yahoo.com")])])}],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("h1",[t._v(t._s(t.month+t.yearString))])]),a("div",[t.start?a("Spinner"):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showArt,expression:"showArt"}],staticClass:"articlesContainer",on:{click:function(e){return t.noArticles()}}},[a("div",{staticClass:"articles",attrs:{id:"articlesBox"}},[a("h2",[t._v(t._s(t.selectedKeyword))]),a("hr",{staticClass:"line"}),t._l(t.articles,(function(e){return a("div",{staticClass:"article"},[a("div",{staticClass:"details"},[a("div",{staticClass:"title"},[a("h3",{staticStyle:{"text-align":"left"}},[t._v(t._s(e.headline))]),a("h4",{staticStyle:{display:"inline","text-align":"right"}},[t._v(t._s(e.pub_month+" "+e.pub_day+", "+e.pub_year))])]),a("p",{staticStyle:{"text-align":"left"}},[t._v(t._s(e.abstract))]),a("a",{staticStyle:{"text-align":"left",color:"black"},attrs:{href:e.web_url}},[t._v(t._s(e.web_url))])]),a("hr",{staticClass:"line"})])}))],2)]),a("svg",{style:t.style,attrs:{height:"675px",width:"1200px",overflow:"auto"}},[a("defs",[a("filter",{attrs:{id:"f1",x:"0",y:"0"}},[a("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"15"}})],1)]),t._l(t.dataRange,(function(e){return a("rect",{style:t.styleBlur,attrs:{id:e.id,x:e.x,y:e.y,width:e.width,height:e.height,fill:e.fill},on:{click:function(e){return t.showArticles(e)},mouseleave:function(e){return t.mouseLeave(e)},mouseover:function(e){return t.mouseOver(e)}}})})),t._l(t.dataRange,(function(e){return a("g",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"element.show"}],attrs:{id:e.id+"-"}},[e.x<850?a("text",{attrs:{x:e.x+e.width+2,y:e.y+20,"font-family":"Times New Roman","font-weight":"bold"}},[t._v(t._s(e.keyword+": "+e.occurrances))]):a("text",{attrs:{x:e.x-2,y:e.y+20,"font-family":"Times New Roman","font-weight":"bold","text-anchor":"end"}},[t._v(t._s(e.keyword+": "+e.occurrances))])])})),a("g",{attrs:{id:"axis"}}),t.start?t._e():a("text",{attrs:{x:"15",y:"370","font-family":"sans-serif","font-size":"16","font-weight":"bold",transform:"rotate(-90, 15, 370)"}},[t._v("# of Occurrences on the Front Page")]),a("g",[t.start?t._e():a("line",{staticStyle:{stroke:"black","stroke-width":"1"},attrs:{x1:"65",y1:"627",x2:"1200",y2:"627"}}),t._l(t.alphabet,(function(e){return a("g",[a("line",{staticStyle:{stroke:"black","stroke-width":"1"},attrs:{x1:e.x,x2:e.x,y1:"627",y2:"633"}}),a("text",{attrs:{"font-family":"sans-serif","font-size":"12",x:e.x-5,y:647}},[t._v(t._s(e.character))])])}))],2),t.start?t._e():a("text",{attrs:{x:"570",y:"672","font-family":"sans-serif","font-size":"16","font-weight":"bold"}},[t._v("Keyword")])],2),a("br"),a("br"),a("div",{staticClass:"slidecontainer"},[a("input",{staticClass:"slider",attrs:{type:"range",min:"1",max:"12",value:"6"},domProps:{value:t.value},on:{input:function(e){return t.sliderValue(e)}}})])],1)])},o=[],h=(a("cb29"),a("4de4"),a("b65f"),a("d3b7"),a("25f0"),a("5698")),l=a("cffa"),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spin"},[a("div",{staticClass:"ring"},[a("div",{staticClass:"lds-ring",attrs:{id:"Spinner"}},[a("div"),a("div"),a("div"),a("div")])])])}],d={name:"Spinner"},p=d,m=(a("3451"),a("2877")),v=Object(m["a"])(p,u,c,!1,null,"528d3d88",null),f=v.exports,y={name:"ExampleData",components:{Spinner:f},props:["myData","start"],data:function(){return{style:{opacity:"100%"},styleBlur:{filter:""},selectedKeyword:"",showArt:!1,articles:[],dataRange:[],january:[],february:[],march:[],april:[],may:[],june:[],july:[],august:[],september:[],october:[],november:[],december:[],alphabet:[],maxDom:0,value:6,month:"",yearString:""}},methods:{calculateData:function(){this.yearString=", "+this.myData[0].pub_date.substring(0,4),this.january=[],this.february=[],this.march=[],this.april=[],this.may=[],this.june=[],this.july=[],this.august=[],this.september=[],this.october=[],this.november=[],this.december=[];for(var t=0;t<this.myData.length;t++)1==parseInt(this.myData[t].pub_date.substring(5,7))?this.january.push(this.myData[t]):2==parseInt(this.myData[t].pub_date.substring(5,7))?this.february.push(this.myData[t]):3==parseInt(this.myData[t].pub_date.substring(5,7))?this.march.push(this.myData[t]):4==parseInt(this.myData[t].pub_date.substring(5,7))?this.april.push(this.myData[t]):5==parseInt(this.myData[t].pub_date.substring(5,7))?this.may.push(this.myData[t]):6==parseInt(this.myData[t].pub_date.substring(5,7))?this.june.push(this.myData[t]):7==parseInt(this.myData[t].pub_date.substring(5,7))?this.july.push(this.myData[t]):8==parseInt(this.myData[t].pub_date.substring(5,7))?this.august.push(this.myData[t]):9==parseInt(this.myData[t].pub_date.substring(5,7))?this.september.push(this.myData[t]):10==parseInt(this.myData[t].pub_date.substring(5,7))?this.october.push(this.myData[t]):11==parseInt(this.myData[t].pub_date.substring(5,7))?this.november.push(this.myData[t]):12==parseInt(this.myData[t].pub_date.substring(5,7))&&this.december.push(this.myData[t]);var e=[];e.push(this.january),e.push(this.february),e.push(this.march),e.push(this.april),e.push(this.may),e.push(this.june),e.push(this.july),e.push(this.august),e.push(this.september),e.push(this.october),e.push(this.november),e.push(this.december);for(var a=0,s=0;s<e.length;s++){for(var i=[],r=0;r<e[s].length;r++)for(var n=0;n<e[s][r].keywords.length;n++){for(var o=e[s][r].keywords[n].value,u=!1,c=0;c<i.length;c++)if(i[c].keyword==o){i[c].occurrances++,u=!0;break}if(0==u){var d="id"+a.toString(),p={id:d,keyword:o,occurrances:1,x:0,y:0,width:0,height:0,fill:0,show:!1,articles:[]};i.push(p),a++}}e[s]=i}for(var m=0;m<e.length;m++){for(var v=[],f=0;f<e[m].length;f++)e[m][f].occurrances>3&&v.push(e[m][f]);e[m]=v}for(var y=0;y<e.length;y++)e[y].sort((function(t,e){var a=t.keyword.toUpperCase(),s=e.keyword.toUpperCase();return a<s?-1:a>s?1:0}));for(var g=0;g<e.length;g++){for(var b=0,_=0;_<e[g].length;_++)e[g][_].occurrances>b&&(b=e[g][_].occurrances);for(var w=h["b"]().domain([1,b]).range([5,625]),x=h["b"]().domain([1,b]).range([125,50]),D=0;D<e[g].length;D++){e[g][D].x=65+D*Math.trunc(1135/e[g].length),e[g][D].y=625-w(e[g][D].occurrances),e[g][D].width=Math.trunc(1135/e[g].length)-1,e[g][D].height=w(e[g][D].occurrances);var R=x(e[g][D].occurrances);e[g][D].fill="rgb(175, "+R+", "+R+")"}}for(var k=0;k<e.length;k++){var S=(k+1).toString();1==S.length&&(S="0"+S);for(var j=0;j<e[k].length;j++)for(var I=e[k][j].keyword,C=0;C<this.myData.length;C++)for(var A=0;A<this.myData[C].keywords.length;A++)if(this.myData[C].keywords[A].value==I&&S==this.myData[C].pub_date.substring(5,7)){var O="";0==k?O="Jan.":1==k?O="Feb.":2==k?O="March":3==k?O="April":4==k?O="May":5==k?O="June":6==k?O="July":7==k?O="Aug.":8==k?O="Sept.":9==k?O="Oct.":10==k?O="Nov.":11==k&&(O="Dec.");var N={web_url:this.myData[C].web_url,abstract:this.myData[C].abstract,headline:this.myData[C].headline.main,pub_day:parseInt(this.myData[C].pub_date.substring(8,10)),pub_month:O,pub_year:this.myData[C].pub_date.substring(0,4),keyword:this.myData[C].keywords[A].value};e[k][j].articles.push(N)}}for(var M=0;M<12;M++)0==M?this.january=e[M]:1==M?this.february=e[M]:2==M?this.march=e[M]:3==M?this.april=e[M]:4==M?this.may=e[M]:5==M?this.june=e[M]:6==M?this.july=e[M]:7==M?this.august=e[M]:8==M?this.september=e[M]:9==M?this.october=e[M]:10==M?this.november=e[M]:11==M&&(this.december=e[M]);1==this.value?(this.dataRange=this.january,this.month="January"):2==this.value?(this.dataRange=this.february,this.month="February"):3==this.value?(this.dataRange=this.march,this.month="March"):4==this.value?(this.dataRange=this.april,this.month="April"):5==this.value?(this.dataRange=this.may,this.month="May"):6==this.value?(this.dataRange=this.june,this.month="June"):7==this.value?(this.dataRange=this.july,this.month="July"):8==this.value?(this.dataRange=this.august,this.month="August"):9==this.value?(this.dataRange=this.september,this.month="September"):10==this.value?(this.dataRange=this.october,this.month="October"):11==this.value?(this.dataRange=this.november,this.month="November"):12==this.value&&(this.dataRange=this.december,this.month="December"),this.alphabet=[];for(var T="",P=0;P<this.dataRange.length;P++){var E=this.dataRange[P].keyword.substring(0,1).toUpperCase(),J={character:E,x:this.dataRange[P].x};E!=T&&(this.alphabet.push(J),T=E)}this.maxDom=0;for(var z=0;z<this.dataRange.length;z++)this.dataRange[z].occurrances>this.maxDom&&(this.maxDom=this.dataRange[z].occurrances);this.renderAxis(),l["a"].from(this.dataRange,{y:650,duration:1,stagger:.025})},sliderValue:function(t){this.value=t.target.value,this.dataRange=[],1==this.value?(this.dataRange=this.january,this.month="January"):2==this.value?(this.dataRange=this.february,this.month="February"):3==this.value?(this.dataRange=this.march,this.month="March"):4==this.value?(this.dataRange=this.april,this.month="April"):5==this.value?(this.dataRange=this.may,this.month="May"):6==this.value?(this.dataRange=this.june,this.month="June"):7==this.value?(this.dataRange=this.july,this.month="July"):8==this.value?(this.dataRange=this.august,this.month="August"):9==this.value?(this.dataRange=this.september,this.month="September"):10==this.value?(this.dataRange=this.october,this.month="October"):11==this.value?(this.dataRange=this.november,this.month="November"):12==this.value&&(this.dataRange=this.december,this.month="December"),this.maxDom=0;for(var e=0;e<this.dataRange.length;e++)this.dataRange[e].occurrances>this.maxDom&&(this.maxDom=this.dataRange[e].occurrances);this.alphabet=[];for(var a="",s=0;s<this.dataRange.length;s++){var i=this.dataRange[s].keyword.substring(0,1).toUpperCase(),r={character:i,x:this.dataRange[s].x};i!=a&&(this.alphabet.push(r),a=i)}l["a"].from(this.dataRange,{y:650,duration:1,stagger:.025}),this.renderAxis()},mouseOver:function(t){t.target.style="opacity: 50%";for(var e=0;e<this.dataRange.length;e++)if(t.target.id==this.dataRange[e].id){this.dataRange[e].show=!0;var a="";a="#"+this.dataRange[e].id+"-",l["a"].from(a,{y:15,duration:.5,opacity:0});break}},mouseLeave:function(t){t.target.style="opacity: 100%";for(var e=0;e<this.dataRange.length;e++)if(t.target.id==this.dataRange[e].id){this.dataRange[e].show=!1;break}},renderAxis:function(){var t=h["b"]().domain([this.maxDom,1]).range([5,625]),e=h["a"]().scale(t).ticks(20);h["c"]("#axis").attr("transform","translate(60,0)").style("font","14px times").style("stroke-width","1px").call(e)},showArticles:function(t){this.articles=[];for(var e=0;e<this.dataRange.length;e++)t.target.id==this.dataRange[e].id&&(this.articles=this.dataRange[e].articles,this.selectedKeyword=this.dataRange[e].keyword);this.articles.sort((function(t,e){return t.pub_day-e.pub_day})),this.showArt=!0,this.style.opacity="50%",this.styleBlur.filter="url(#f1)",l["a"].from("#articlesBox",{y:50,duration:.25,opacity:0})},noArticles:function(){this.showArt=!1,this.style.opacity="100%",this.styleBlur.filter=""}},watch:{myData:function(){this.calculateData(),this.$emit("apiCall"),this.style.opacity="100%"},start:function(){1==this.start&&(this.style.opacity="25%")}}},g=y,b=(a("cdf7"),Object(m["a"])(g,n,o,!1,null,null,null)),_=b.exports,w=a("bc3a"),x=a.n(w),D="api/data/",R={name:"App",components:{ExampleData:_},data:function(){return{startSpinner:!0,exampleData:[]}},created:function(){var t=this;x.a.get(D+"2000").then((function(e){return t.exampleData=e.data})).catch((function(t){return console.log(t)}))},methods:{onChange:function(t){var e=this;this.startSpinner=!0,x.a.get(D+t.target.value).then((function(t){return e.exampleData=t.data})).catch((function(t){return console.log(t)}))},apiCall:function(){this.startSpinner=!1}}},k=R,S=(a("034f"),Object(m["a"])(k,i,r,!1,null,null,null)),j=S.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,e,a){},cdf7:function(t,e,a){"use strict";var s=a("0fb6"),i=a.n(s);i.a}});
//# sourceMappingURL=app.456d25dd.js.map
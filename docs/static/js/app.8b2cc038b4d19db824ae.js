webpackJsonp([1],{"6Yb7":function(t,e){},"BK/S":function(t,e){},KSFG:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App"},a,!1,function(t){i("6Yb7")},null,null).exports,s=i("/ocq"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"drawsvg"},[e("svg",{attrs:{version:"1.1",viewBox:"0 0 700 300"}},[e("symbol",{attrs:{id:"fade-text"}},[e("text",{attrs:{x:"45%",y:"50%","text-anchor":"middle"}},[this._v("여행이 곧 시작됩니다.")]),this._v(" "),e("text",{attrs:{x:"55%",y:"70%","text-anchor":"middle"}},[this._v("준비는 다 하셨나요?")])]),this._v(" "),e("g",[e("use",{staticClass:"stroke",attrs:{"xlink:href":"#fade-text"}}),this._v(" "),e("use",{staticClass:"fill",attrs:{"xlink:href":"#fade-text"}})])])])},staticRenderFns:[]};var c=i("VU/8")({name:"DrawnText",data:function(){return{}}},r,!1,function(t){i("d0Cz")},"data-v-5db95e12",null).exports,l=i("bOdI"),d=i.n(l),u={},h={name:"fa-icon",props:{name:{type:String,validator:function(t){return!t||t in u||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return d()({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?u[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,i=t.height;return Math.max(e,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,i,n){var a="fa-"+(p++).toString(16);return e[n]=a,' id="'+a+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,i,n,a){var o=i||a;return o&&e[o]?"#"+e[o]:t}),t}},mounted:function(){var t=this;if(this.name||0!==this.$children.length){if(!this.icon){var e=0,i=0;this.$children.forEach(function(n){n.outerScale=t.normalizedScale,e=Math.max(e,n.width),i=Math.max(i,n.height)}),this.childrenWidth=e,this.childrenHeight=i,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(i-t.height)/2})}}else console.warn('Invalid prop: prop "name" is required.')},register:function(t){for(var e in t){var i=t[e];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),u[e]=i}},icons:u},p=870711;var v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,n){return i("path",t._b({key:"path-"+n},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,n){return i("polygon",t._b({key:"polygon-"+n},"polygon",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[i("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var f={name:"CheckListItem",props:["todo","checked","id"],components:{Icon:i("VU/8")(h,v,!1,function(t){i("jSVj")},null,null).exports},data:function(){return{}},methods:{toggleCheck:function(){this.$store.commit("toggleCheck",this.id)},deleteTodo:function(){this.$store.commit("deleteTodo",this.id)}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-item"},[i("div",{staticClass:"wrapper"},[i("div",{on:{click:t.toggleCheck}},[i("p-check",{staticClass:"p-icon p-round p-smooth p-bigger",attrs:{color:"success",checked:t.checked}},[i("i",{staticClass:"icon mdi mdi-check",attrs:{slot:"extra"},slot:"extra"})])],1),t._v(" "),i("p",{staticClass:"todo"},[t._v(t._s(t.todo))]),t._v(" "),i("p",{staticClass:"delete-button",on:{click:t.deleteTodo}},[t._v("X")])])])},staticRenderFns:[]};var g={name:"MainPage",components:{DrawnText:c,CheckListItem:i("VU/8")(f,m,!1,function(t){i("BK/S")},"data-v-ad4d5cbc",null).exports},mounted:function(){this.leftDays=setInterval(this.updateCountDown,1e3)},data:function(){return{options:{start:0,dir:"v",duration:500,beforeChange:function(t,e){},afterChange:function(t,e){}},targetDate:new Date("Aug 18, 2018 00:00:00").getTime(),days:0,hours:0,minutes:0,seconds:0,leftDays:0,input_text:""}},methods:{moveNext:function(){this.$refs.example.$fullpage.moveNext()},updateCountDown:function(){var t=(new Date).getTime(),e=this.targetDate-t;this.days=Math.floor(e/864e5),this.hours=Math.floor(e%864e5/36e5),this.minutes=Math.floor(e%36e5/6e4),this.seconds=Math.floor(e%6e4/1e3)},addTodo:function(){0!==this.input_text.length?(this.$store.commit("addTodo",this.input_text),this.input_text=""):alert("최소 한 글자 이상 입력해 주세요")},deleteTodo:function(){}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fullpage-container"},[i("div",{directives:[{name:"fullpage",rawName:"v-fullpage",value:t.options,expression:"options"}],ref:"mainpage",staticClass:"fullpage-wp"},[i("div",{staticClass:"page-1 page"},[i("div",{staticClass:"part-1"},[i("DrawnText"),t._v(" "),i("p",{staticClass:"left-time"},[t._v(t._s(t.days)+" : "+t._s(t.hours)+" : "+t._s(t.minutes)+" : "+t._s(t.seconds))])],1)]),t._v(" "),i("div",{staticClass:"page-2 page"},[i("p",{directives:[{name:"animate",rawName:"v-animate",value:{value:"fadeIn",delay:0},expression:"{value: 'fadeIn', delay: 0}"}],staticClass:"header-text"},[t._v("가고싶은 해변을 살펴보세요.")]),t._v(" "),i("div",{directives:[{name:"animate",rawName:"v-animate",value:{value:"slideInUp",delay:300},expression:"{value: 'slideInUp', delay: 300}"}],staticClass:"attraction"},[t._m(0)])]),t._v(" "),i("div",{staticClass:"page-3 page"},[i("p",{directives:[{name:"animate",rawName:"v-animate",value:{value:"fadeIn",delay:50},expression:"{value: 'fadeIn', delay: 50}"}],staticClass:"page-3header-text"},[t._v("물건들은 다 챙기셨나요?")]),t._v(" "),i("div",{staticClass:"todo-list-wrapper"},[t._l(this.$store.state.todos,function(t){return i("div",{staticClass:"todo-list"},[i("CheckListItem",{attrs:{todo:t.title,checked:t.completed,id:t.id}})],1)}),t._v(" "),i("div",{staticClass:"webflow-style-input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.input_text,expression:"input_text"}],attrs:{placeholder:"체크 할 일을 추가하세요."},domProps:{value:t.input_text},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null},input:function(e){e.target.composing||(t.input_text=e.target.value)}}})])],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"region-wrapper"},[i("div",{staticClass:"region jangho-beach",attrs:{onclick:"location.href='https://blog.naver.com/tourjeonju?Redirect=Log&logNo=221314197673'"}},[i("p",[t._v("장호항")])]),t._v(" "),i("div",{staticClass:"region chuam-beach",attrs:{onclick:"location.href='https://blog.naver.com/bear00381?Redirect=Log&logNo=221313348996'"}},[i("p",[t._v("추암 해수욕장")])]),t._v(" "),i("div",{staticClass:"region mangsang-beach",attrs:{onclick:"location.href='http://tourhistory.tistory.com/201'"}},[i("p",[t._v("망상 해수욕장")])]),t._v(" "),i("div",{staticClass:"region sinnam-beach",attrs:{onclick:"location.href='https://m.blog.naver.com/PostView.nhn?blogId=syszero&logNo=110173654588&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F'"}},[i("p",[t._v("신남 해수욕장")])]),t._v(" "),i("div",{staticClass:"region mureong-valley",attrs:{onclick:"location.href='https://blog.naver.com/daichung/221084506445'"}},[i("p",[t._v("무릉계곡")])])])}]};var x=i("VU/8")(g,_,!1,function(t){i("KSFG")},"data-v-432be456",null).exports;n.a.use(s.a);var w=new s.a({routes:[{path:"/",name:"intro",component:x}]}),y=(i("oPmM"),i("jaTL"),i("K4fh")),C=i.n(y),b=i("zmct"),k=i.n(b),S=(i("csSS"),i("woOf")),T=i.n(S),I=i("Gu7T"),N=i.n(I),$=i("NYxO");n.a.use($.a);var z=new $.a.Store({state:{todos:[{id:1,title:"옷 챙기기",completed:!1},{id:2,title:"양치도구 챙기기",completed:!1},{id:3,title:"즐길 준비하기",completed:!0}]},mutations:{addTodo:function(t,e){var i={id:t.todos?Math.max(t.todos.map(function(t){return t.id}))+1:1,title:e,completed:!1};t.todos=[].concat(N()(t.todos),[i])},toggleCheck:function(t,e){var i=e;t.todos=t.todos.map(function(t){return t.id===parseInt(i)?T()({},t,{completed:!t.completed}):t}),console.log(t.todos)},deleteTodo:function(t,e){var i=e;t.todos=t.todos.filter(function(t){return t.id!==parseInt(i)})}}});n.a.use(k.a),n.a.use(C.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:w,store:z,components:{App:o},template:"<App/>"})},csSS:function(t,e){},d0Cz:function(t,e){},jSVj:function(t,e){},jaTL:function(t,e){},oPmM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8b2cc038b4d19db824ae.js.map
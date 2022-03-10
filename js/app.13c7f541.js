(function(t){function e(e){for(var o,s,a=e[0],l=e[1],c=e[2],p=0,h=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"4bf6":function(t,e,n){"use strict";n("d06f")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"card"},[n("h1",{style:{color:t.inputValue.length<10?"darkred":"darkblue",fontSize:t.inputValue.length>10?"29px":"28px"}},[t._v(t._s(t.title))]),n("Progress",{attrs:{progression:t.Progress,length:t.notes.length}}),n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],attrs:{type:"time"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}}),n("div",{staticClass:"special_info"},[t._v(t._s(t.info))]),n("input",{attrs:{type:"text",placeholder:t.placeholderString},domProps:{value:t.inputValue},on:{input:t.inputChangeHandler,keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewNote.apply(null,arguments)}}}),n("div",{staticClass:"important"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.important,expression:"important"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.important)?t._i(t.important,null)>-1:t.important},on:{change:function(e){var n=t.important,o=e.target,r=!!o.checked;if(Array.isArray(n)){var i=null,s=t._i(n,i);o.checked?s<0&&(t.important=n.concat([i])):s>-1&&(t.important=n.slice(0,s).concat(n.slice(s+1)))}else t.important=r}}}),t._v("Important note")]),n("div",{staticClass:"important"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.first,expression:"first"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.first)?t._i(t.first,null)>-1:t.first},on:{change:function(e){var n=t.first,o=e.target,r=!!o.checked;if(Array.isArray(n)){var i=null,s=t._i(n,i);o.checked?s<0&&(t.first=n.concat([i])):s>-1&&(t.first=n.slice(0,s).concat(n.slice(s+1)))}else t.first=r}}}),t._v("Take the note top of the list")])]),n("button",{staticClass:"btn",on:{click:t.addNewNote}},[t._v("Add")]),n("span",{class:{primary:!0,bold:t.inputValue.length>5}}),n("span",{class:["bold",{primary:t.inputValue.length>5}]}),n("hr"),0!==t.notes.length?n("ul",{class:{list:!0,"list-column":t.column}},[n("li",{staticClass:"list-counter"},[t._v(" View: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.column,expression:"column"}],attrs:{type:"checkbox",id:"my_checkbox",name:"column"},domProps:{checked:Array.isArray(t.column)?t._i(t.column,null)>-1:t.column},on:{change:function(e){var n=t.column,o=e.target,r=!!o.checked;if(Array.isArray(n)){var i=null,s=t._i(n,i);o.checked?s<0&&(t.column=n.concat([i])):s>-1&&(t.column=n.slice(0,s).concat(n.slice(s+1)))}else t.column=r}}}),n("label",{class:["label_checkbox",{hide:t.column}],attrs:{for:"my_checkbox"}},[t._v("blocks")]),n("label",{class:["label_checkbox",{hide:!t.column}],attrs:{for:"my_checkbox"}},[t._v("rows")])]),t._l(t.notes,(function(e,o){return n("li",{key:o,class:{"list-item":!0,"list-item-column":t.column},style:{backgroundColor:!0===t.importantNotes[o]?"#ffc6c6":"#fff6c6",fontWeight:!0===t.importantNotes[o]?"800":"300"}},[n("strong",[t._v(t._s(e))]),n("strong",[t._v(t._s(t.timeOfNote[o]))]),n("button",{staticClass:"btn danger",on:{click:function(e){return t.deleteNote(o,e)}}},[t._v("Delete note")])])})),n("li",{staticClass:"list-counter"},[n("strong",[t._v("Count of notes: "+t._s(t.notes.length))])])],2):n("div",[t._v("No notes here, add new one!")])],1)])},i=[],s=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"line"},[n("div",{staticClass:"progress",style:{width:t.progression+"%",background:t.backgroundColor,color:t.length%10?"#000":"#fff"}},[t._v(t._s(t.length))])])}),a=[],l={name:"Counter",props:["progression","length"],data:function(){return{}},computed:{backgroundColor:function(){return"#cfef"+this.length%10+this.length%10}}},c=l,u=(n("4bf6"),n("2877")),p=Object(u["a"])(c,s,a,!1,null,"6629e3b2",null),h=p.exports,f={name:"App",components:{Progress:h},data:function(){return{counter:1,title:"What to do today?",placeholderString:"Add your first note!",inputValue:"",notes:[],timeOfNote:[],info:"",important:!1,importantNotes:[],time:"12:00",hours:12,first:!1,column:!1}},methods:{inputChangeHandler:function(t){this.inputValue=t.target.value},addNewNote:function(){""!==this.inputValue&&(this.first?(this.notes.unshift(this.inputValue),this.importantNotes.unshift(this.important),this.timeOfNote.unshift(this.time)):(this.notes.push(this.inputValue),this.importantNotes.push(this.important),this.timeOfNote.push(this.time)),this.hours++,this.hours%=24,this.time=this.hours<10?"0"+this.hours+":00":this.hours+":00",this.important=!1,this.first=!1,this.inputValue=""),this.counter>=1&&(this.placeholderString="Add your new note here..")},deleteNote:function(t){this.notes.splice(t,1),this.importantNotes.splice(t,1),this.timeOfNote.splice(t,1)}},computed:{Progress:function(){return this.notes.length%10/10*100}},watch:{inputValue:function(t){t.length<50&&(this.info=""),t.length>50&&(this.info="Max length of note!",this.inputValue=t.substring(0,t.length-1))}}},d=f,m=(n("034f"),Object(u["a"])(d,r,i,!1,null,null,null)),v=m.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,n){},d06f:function(t,e,n){}});
//# sourceMappingURL=app.13c7f541.js.map
webpackJsonp([5],{LHIU:function(e,t){},p1Xq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("fZjL"),o=n.n(a),l=n("7+uW"),r=n("PIeJ"),i={props:{content:{type:String,default:'Here is just a simple example from <a href="http://element-cn.eleme.io/#/en-US/" target="_blank">element</a>, please refer to this <a href="http://element-cn.eleme.io/#/en-US/component" target="_blank">link</a> for more detail'}},name:"description"},s={render:function(){var e=this.$createElement;return(this._self._c||e)("code",{domProps:{innerHTML:this._s(this.content)}})},staticRenderFns:[]};var c=n("VU/8")(i,s,!1,function(e){n("rLzI")},"data-v-a64e5c96",null).exports,m={components:{description:c},data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("description"),e._v(" "),n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"Activity name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Activity zone"}},[n("el-select",{attrs:{placeholder:"please select your zone"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[n("el-option",{attrs:{label:"Zone one",value:"shanghai"}}),e._v(" "),n("el-option",{attrs:{label:"Zone two",value:"beijing"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"Activity time"}},[n("el-col",{attrs:{span:11}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),e._v(" "),n("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),n("el-col",{attrs:{span:11}},[n("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"Pick a time"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"Instant delivery"}},[n("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Activity type"}},[n("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[n("el-checkbox",{attrs:{label:"Online activities",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"Promotion activities",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"Offline activities",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"Simple brand exposure",name:"type"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"Resources"}},[n("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[n("el-radio",{attrs:{label:"Sponsor"}}),e._v(" "),n("el-radio",{attrs:{label:"Venue"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"Activity form"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Create")]),e._v(" "),n("el-button",[e._v("Cancel")])],1)],1)],1)},staticRenderFns:[]};var d,p=n("VU/8")(m,u,!1,function(e){n("LHIU")},"data-v-3e174cc6",null).exports,f={components:{description:c},data:function(){return{dialogVisible:!1}},methods:{handleClose:function(e){this.$confirm("Are you sure to close this dialog?").then(function(t){e()}).catch(function(e){})}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("description"),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("click to open the Dialog")]),e._v(" "),n("el-dialog",{attrs:{title:"Tips",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("span",[e._v("This is a message")]),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Confirm")])],1)])],1)},staticRenderFns:[]},b=n("VU/8")(f,v,!1,null,null,null).exports,h={components:{description:c},data:function(){return{activeName:"first"}},methods:{handleClick:function(e,t){console.log(e,t)}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("description"),e._v(" "),n("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"User",name:"first"}},[e._v("User")]),e._v(" "),n("el-tab-pane",{attrs:{label:"Config",name:"second"}},[e._v("Config")]),e._v(" "),n("el-tab-pane",{attrs:{label:"Role",name:"third"}},[e._v("Role")]),e._v(" "),n("el-tab-pane",{attrs:{label:"Task",name:"fourth"}},[e._v("Task")])],1)],1)},staticRenderFns:[]},g=n("VU/8")(h,_,!1,null,null,null).exports,k={components:{description:c},data:function(){return{tableData:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]}}},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("description"),this._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData}},[t("el-table-column",{attrs:{prop:"date",label:"Date"}}),this._v(" "),t("el-table-column",{attrs:{prop:"name",label:"Name"}}),this._v(" "),t("el-table-column",{attrs:{prop:"address",label:"Address"}})],1)],1)},staticRenderFns:[]},x=n("VU/8")(k,y,!1,null,null,null).exports,S=n("NYxO"),C={components:{description:c},methods:Object(S.b)({increase:"count/increase",decrease:"count/decrease"}),computed:Object(S.d)({count:function(e){return e.count.num}}),data:function(){return{content:'Here is just a simple example from using <a href="https://vuex.vuejs.org/" target="_blank">Vuex</a>, please refer to this <a href="https://vuex.vuejs.org/" target="_blank">link</a> for more detail'}}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("description",{attrs:{content:e.content}}),e._v(" "),n("el-form",[n("el-form-item",{attrs:{label:"Count"}},[e._v(e._s(e.count))]),e._v(" "),n("el-button",{on:{click:e.increase}},[e._v("+ 1")]),n("el-button",{on:{click:e.decrease}},[e._v("- 1")])],1)],1)},staticRenderFns:[]},A=[{path:"/dialog",name:"dialog",component:b},{path:"/form",name:"form",component:p},{path:"/table",name:"table",component:x},{path:"/tabs",name:"tabs",component:g},{path:"/store",name:"store",component:n("VU/8")(C,E,!1,null,null,null).exports},{path:"*",redirect:{name:"dialog"}}],$=n("bOdI"),V=n.n($),R={count:{namespaced:!0,state:{num:0},actions:{increase:function(e){(0,e.commit)("INCREASE")},decrease:function(e){(0,e.commit)("DECREASE")}},mutations:(d={},V()(d,"INCREASE",function(e){e.num++}),V()(d,"DECREASE",function(e){e.num--}),d)}};l.default.config.productionTip=!1,l.default.use(r.a,{router:A,store:R}),new l.default({el:"#app",router:r.a.router,store:r.a.store,render:function(e){var t=[];return o()(r.a.comp).forEach(function(n){t.push(e(n))}),e("div",{},t)},components:r.a.comp})},rLzI:function(e,t){}},["p1Xq"]);
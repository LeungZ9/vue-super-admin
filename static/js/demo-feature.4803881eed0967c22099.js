webpackJsonp([3],{Ato2:function(e,n){},HYwl:function(e,n,t){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;e(n)}(function(e){var n=[],t=Object.keys,a={},r={},s=/^(no-?highlight|plain|text)$/i,i=/\blang(?:uage)?-([\w-]+)\b/i,o=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,l="</span>",c={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d(e){return e.nodeName.toLowerCase()}function m(e,n){var t=e&&e.exec(n);return t&&0===t.index}function f(e){return s.test(e)}function g(e){var n,t={},a=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return a.forEach(function(e){for(n in e)t[n]=e[n]}),t}function p(e){var n=[];return function e(t,a){for(var r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:a,node:r}),a=e(r,a),d(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:r}));return a}(e,0),n}function h(e){function n(e){return e&&e.source||e}function a(t,a){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}!function r(s,i){if(!s.compiled){if(s.compiled=!0,s.keywords=s.keywords||s.beginKeywords,s.keywords){var o={},l=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof s.keywords?l("keyword",s.keywords):t(s.keywords).forEach(function(e){l(e,s.keywords[e])}),s.keywords=o}s.lexemesRe=a(s.lexemes||/\w+/,!0),i&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")\\b"),s.begin||(s.begin=/\B|\b/),s.beginRe=a(s.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(s.endRe=a(s.end)),s.terminator_end=n(s.end)||"",s.endsWithParent&&i.terminator_end&&(s.terminator_end+=(s.end?"|":"")+i.terminator_end)),s.illegal&&(s.illegalRe=a(s.illegal)),null==s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),s.contains=Array.prototype.concat.apply([],s.contains.map(function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return g(e,{variants:null},n)})),e.cached_variants||e.endsWithParent&&[g(e)]||[e]}("self"===e?s:e)})),s.contains.forEach(function(e){r(e,s)}),s.starts&&r(s.starts,i);var c=s.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([s.terminator_end,s.illegal]).map(n).filter(Boolean);s.terminators=c.length?a(c.join("|"),!0):{exec:function(){return null}}}}(e)}function v(e,n,t,r){function s(e,n){var t=g.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function i(e,n,t,a){var r='<span class="'+(a?"":c.classPrefix);return(r+=e+'">')+n+(t?"":l)}function o(){N+=null!=_.subLanguage?function(){var e="string"==typeof _.subLanguage;if(e&&!a[_.subLanguage])return u(w);var n=e?v(_.subLanguage,w,!0,E[_.subLanguage]):b(w,_.subLanguage.length?_.subLanguage:void 0);return _.relevance>0&&(M+=n.relevance),e&&(E[_.subLanguage]=n.top),i(n.language,n.value,!1,!0)}():function(){var e,n,t,a;if(!_.keywords)return u(w);for(a="",n=0,_.lexemesRe.lastIndex=0,t=_.lexemesRe.exec(w);t;)a+=u(w.substring(n,t.index)),(e=s(_,t))?(M+=e[1],a+=i(e[0],u(t[0]))):a+=u(t[0]),n=_.lexemesRe.lastIndex,t=_.lexemesRe.exec(w);return a+u(w.substr(n))}(),w=""}function d(e){N+=e.className?i(e.className,"",!0):"",_=Object.create(e,{parent:{value:_}})}function f(e,n){if(w+=e,null==n)return o(),0;var a=function(e,n){var t,a;for(t=0,a=n.contains.length;t<a;t++)if(m(n.contains[t].beginRe,e))return n.contains[t]}(n,_);if(a)return a.skip?w+=n:(a.excludeBegin&&(w+=n),o(),a.returnBegin||a.excludeBegin||(w=n)),d(a),a.returnBegin?0:n.length;var r=function e(n,t){if(m(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(_,n);if(r){var s=_;s.skip?w+=n:(s.returnEnd||s.excludeEnd||(w+=n),o(),s.excludeEnd&&(w=n));do{_.className&&(N+=l),_.skip||(M+=_.relevance),_=_.parent}while(_!==r.parent);return r.starts&&d(r.starts),s.returnEnd?0:n.length}if(function(e,n){return!t&&m(n.illegalRe,e)}(n,_))throw new Error('Illegal lexeme "'+n+'" for mode "'+(_.className||"<unnamed>")+'"');return w+=n,n.length||1}var g=R(e);if(!g)throw new Error('Unknown language: "'+e+'"');h(g);var p,_=r||g,E={},N="";for(p=_;p!==g;p=p.parent)p.className&&(N=i(p.className,"",!0)+N);var w="",M=0;try{for(var y,A,O=0;_.terminators.lastIndex=O,y=_.terminators.exec(n);)A=f(n.substring(O,y.index),y[0]),O=y.index+A;for(f(n.substr(O)),p=_;p.parent;p=p.parent)p.className&&(N+=l);return{relevance:M,value:N,language:e,top:_}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:u(n)};throw e}}function b(e,n){n=n||c.languages||t(a);var r={relevance:0,value:u(e)},s=r;return n.filter(R).forEach(function(n){var t=v(n,e,!1);t.language=n,t.relevance>s.relevance&&(s=t),t.relevance>r.relevance&&(s=r,r=t)}),s.language&&(r.second_best=s),r}function _(e){return c.tabReplace||c.useBR?e.replace(o,function(e,n){return c.useBR&&"\n"===e?"<br>":c.tabReplace?n.replace(/\t/g,c.tabReplace):""}):e}function E(e){var t,a,s,o,l,m=function(e){var n,t,a,r,s=e.className+" ";if(s+=e.parentNode?e.parentNode.className:"",t=i.exec(s))return R(t[1])?t[1]:"no-highlight";for(n=0,a=(s=s.split(/\s+/)).length;n<a;n++)if(f(r=s[n])||R(r))return r}(e);f(m)||(c.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,l=t.textContent,s=m?v(m,l,!0):b(l),(a=p(t)).length&&((o=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=s.value,s.value=function(e,t,a){var r=0,s="",i=[];function o(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function l(e){s+="<"+d(e)+n.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+u(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function c(e){s+="</"+d(e)+">"}function m(e){("start"===e.event?l:c)(e.node)}for(;e.length||t.length;){var f=o();if(s+=u(a.substring(r,f[0].offset)),r=f[0].offset,f===e){i.reverse().forEach(c);do{m(f.splice(0,1)[0]),f=o()}while(f===e&&f.length&&f[0].offset===r);i.reverse().forEach(l)}else"start"===f[0].event?i.push(f[0].node):i.pop(),m(f.splice(0,1)[0])}return s+u(a.substr(r))}(a,p(o),l)),s.value=_(s.value),e.innerHTML=s.value,e.className=function(e,n,t){var a=n?r[n]:t,s=[e.trim()];return e.match(/\bhljs\b/)||s.push("hljs"),-1===e.indexOf(a)&&s.push(a),s.join(" ").trim()}(e.className,m,s.language),e.result={language:s.language,re:s.relevance},s.second_best&&(e.second_best={language:s.second_best.language,re:s.second_best.relevance}))}function N(){if(!N.called){N.called=!0;var e=document.querySelectorAll("pre code");n.forEach.call(e,E)}}function R(e){return e=(e||"").toLowerCase(),a[e]||a[r[e]]}return e.highlight=v,e.highlightAuto=b,e.fixMarkup=_,e.highlightBlock=E,e.configure=function(e){c=g(c,e)},e.initHighlighting=N,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",N,!1),addEventListener("load",N,!1)},e.registerLanguage=function(n,t){var s=a[n]=t(e);s.aliases&&s.aliases.forEach(function(e){r[e]=n})},e.listLanguages=function(){return t(a)},e.getLanguage=R,e.inherit=g,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,a){var r=e.inherit({className:"comment",begin:n,end:t,contains:[]},a||{});return r.contains.push(e.PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},JbXa:function(e,n){},gYhw:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("fZjL"),r=t.n(a),s=t("7+uW"),i=t("PIeJ"),o=t("HYwl"),l=t.n(o),c=t("jnSt"),u=t.n(c);t("Ato2");l.a.registerLanguage("javascript",u.a);var d=l.a,m={mounted:function(){d.highlightBlock(this.$refs.pre)},beforeRouteEnter:function(e,n,t){setTimeout(function(){t()},3e3)},data:function(){return{tableData:[{date:"2016-05-03",name:"Jeff",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Jack",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Jason",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]}}},f={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData}},[n("el-table-column",{attrs:{prop:"date",label:"Date"}}),this._v(" "),n("el-table-column",{attrs:{prop:"name",label:"Name"}}),this._v(" "),n("el-table-column",{attrs:{prop:"address",label:"Address"}})],1),this._v(" "),n("pre",{ref:"pre"},[this._v("    "),n("code",{staticClass:"javascript"},[this._v("\n      // To enable shell when next delays in beforeRouteEnter as below\n      beforeRouteEnter(to, from, next) {\n        setTimeout(() => {\n          next()\n        }, 3000)\n      }\n    ")]),this._v("\n  ")])],1)},staticRenderFns:[]};var g=t("VU/8")(m,f,!1,function(e){t("JbXa")},"data-v-eebefbf2",null).exports,p={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"date",label:"Date"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"Name"}}),e._v(" "),t("el-table-column",{attrs:{prop:"address",label:"Address"}}),e._v(" "),t("el-table-column",{attrs:{label:"Detail"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){e.handleClick(n.row)}}},[e._v("Click into detial")])]}}])})],1)],1)},staticRenderFns:[]},h=t("VU/8")({methods:{handleClick:function(e){this.$router.push({name:"cmDetail",params:{name:e.name}})}},data:function(){return{tableData:[{date:"2016-05-03",name:"Jeff",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Jack",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Jason",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]}}},p,!1,null,null,null).exports,v={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("el-form",{attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"Date"}},[this._v("2016-05-03")]),this._v(" "),n("el-form-item",{attrs:{label:"Name"}},[this._v(this._s(this.$route.params.name))]),this._v(" "),n("el-form-item",{attrs:{label:"Address"}},[this._v("No. 189, Grove St, Los Angeles")])],1)],1)},staticRenderFns:[]},b=t("VU/8")({},v,!1,null,null,null).exports,_={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  ....Here is more for "+this._s(this.$route.params.name)+".\n")])},staticRenderFns:[]},E=t("VU/8")({},_,!1,null,null,null).exports,N={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"date",label:"Date"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"Name"}}),e._v(" "),t("el-table-column",{attrs:{prop:"address",label:"Address"}}),e._v(" "),t("el-table-column",{attrs:{label:"Detail"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){e.handleClick(n.row)}}},[e._v("Click into detail")])]}}])})],1)],1)},staticRenderFns:[]},R=t("VU/8")({methods:{handleClick:function(e){this.$router.push({name:"cpList.detail",params:{name:e.name}})}},data:function(){return{tableData:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Jason",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Jack",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Jeff",address:"No. 189, Grove St, Los Angeles"}]}}},N,!1,null,null,null).exports,w=t("Dd8w"),M=t.n(w),y=t("NYxO"),A={mounted:function(){this.setTitle("Detail"),d.highlightBlock(this.$refs.pre1),d.highlightBlock(this.$refs.pre2)},methods:M()({},Object(y.b)({setTitle:"bsHead/setTitle"}))},O={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-form",{attrs:{"label-width":"120px"}},[t("el-form-item",{attrs:{label:"Date"}},[e._v("2016-05-03")]),e._v(" "),t("el-form-item",{attrs:{label:"Name"}},[e._v(e._s(e.$route.params.name))]),e._v(" "),t("el-form-item",{attrs:{label:"Address"}},[e._v("No. 189, Grove St, Los Angeles")])],1),e._v(" "),t("pre",{ref:"pre1"},[e._v("    "),t("code",{staticClass:"javascript"},[e._v("\n      // Here is how to set router for '子级页面'\n      {\n        path: '/child-page',\n        name: 'cpList',                 // Parent router config\n        component: cpList\n      },\n      {\n        path: '/child-page/:name',\n        name: 'cpList.detail',          // Child router config, Using '.' to link with parent\n        component: cpDetail\n      }\n    ")]),e._v("\n  ")]),e._v(" "),t("pre",{ref:"pre2"},[e._v("    "),t("code",{staticClass:"javascript"},[e._v("\n      // For '子级页面', you should set header title by yourself as below\n      import { mapActions } from 'vuex'\n      mounted() {\n         this.setTitle('Detail')\n      }\n      methods: {\n        ...mapActions({\n          setTitle: 'bsHead/setTitle'\n        })\n      }\n    ")]),e._v("\n  ")])],1)},staticRenderFns:[]};var S=t("VU/8")(A,O,!1,function(e){t("lD7w")},"data-v-649ce65a",null).exports,x=t("mvHQ"),D=t.n(x),C={data:function(){return{radio:!1,permission:{id:99,name:"Permission Test",url:"permissionTest",icon:"",parent:14}}},computed:M()({},Object(y.d)({json:function(e){var n="// All permission checking comes from menu data as below\n"+D()(e.bsMenu.data,null,2);return d.highlightAuto(n).value}})),created:function(){var e=this;this.radio=!!this.$store.state.bsMenu.data.find(function(n){return n.id===e.permission.id})},methods:M()({switchRadio:function(e){var n=JSON.parse(D()(this.$store.state.bsMenu.data));e?n.push(this.permission):n.pop(),this.setMenu(n)}},Object(y.b)({setMenu:"bsMenu/setData"}))},T={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-form",[t("el-form-item",{attrs:{label:"Permission Test"}},[t("el-radio-group",{on:{change:e.switchRadio},model:{value:e.radio,callback:function(n){e.radio=n},expression:"radio"}},[t("el-radio-button",{attrs:{label:!0}},[e._v("Enable")]),e._v(" "),t("el-radio-button",{attrs:{label:!1}},[e._v("Disable")])],1),e._v(" "),t("router-link",{staticClass:"el-button el-button--small",attrs:{to:{name:"permissionTest"}}},[e._v("Go to Permission Test")])],1)],1),e._v(" "),t("pre",{staticClass:"hljs javascript"},[t("code",{staticClass:"javascript",domProps:{innerHTML:e._s(e.json)}})])],1)},staticRenderFns:[]};var L={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("Accessed...")])},staticRenderFns:[]},k=[{path:"/child-page",name:"cpList",component:R},{path:"/child-page/:name",name:"cpList.detail",component:S},{path:"/child-menu",name:"cmList",component:h},{path:"/child-menu/:name",name:"cmDetail",component:b},{path:"/child-menu/:name/more",name:"cmMore",component:E},{path:"/shell",name:"shell",component:g},{path:"/permission",name:"permission",component:t("VU/8")(C,T,!1,function(e){t("t3f8")},null,null).exports},{path:"/permission/test",name:"permissionTest",component:t("VU/8")({},L,!1,null,null,null).exports},{path:"*",redirect:{name:"cpList"}}];s.default.config.productionTip=!1,s.default.use(i.a,{router:k}),new s.default({el:"#app",router:i.a.router,store:i.a.store,render:function(e){var n=[];return r()(i.a.comp).forEach(function(t){n.push(e(t))}),e("div",{},n)},components:i.a.comp})},jnSt:function(e,n){e.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},r={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},s={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,r]};r.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,s,a,e.REGEXP_MODE];var i=r.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,s,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:i}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:i}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},lD7w:function(e,n){},t3f8:function(e,n){}},["gYhw"]);
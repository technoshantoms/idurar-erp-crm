(this["webpackJsonperp-crm"]=this["webpackJsonperp-crm"]||[]).push([[16],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));n(0);var a=n(626),c=n(617),r=n(618),i=n(344),o=n(636),s=n(621),u=n(5);function l(e){e.isUpdateForm;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.a.Item,{label:"Payment Mode Name",name:"name",rules:[{required:!0}],children:Object(u.jsx)(s.a,{})}),Object(u.jsx)(o.a.Item,{label:"Description",name:"description",rules:[{required:!0}],children:Object(u.jsx)(s.a,{})}),Object(u.jsx)(o.a.Item,{label:"Mode enabled",name:"enabled",style:{display:"inline-block",width:"calc(50%)",paddingRight:"5px"},valuePropName:"checked",initialValue:!0,children:Object(u.jsx)(a.a,{checkedChildren:Object(u.jsx)(c.a,{}),unCheckedChildren:Object(u.jsx)(r.a,{})})}),Object(u.jsx)(o.a.Item,{label:"Is Default Mode",name:"isDefault",style:{display:"inline-block",width:"calc(50%)",paddingLeft:"5px"},valuePropName:"checked",children:Object(u.jsx)(a.a,{checkedChildren:Object(u.jsx)(c.a,{}),unCheckedChildren:Object(u.jsx)(r.a,{})})})]})}function d(){var e={entity:"paymentMode",PANEL_TITLE:"Currency Panel",ENTITY_NAME:"payment mode",CREATE_ENTITY:"Create payment mode",ADD_NEW_ENTITY:"Add new payment mode",UPDATE_ENTITY:"Update payment mode",DATATABLE_TITLE:"payment modes List",readColumns:[{title:"Payment Mode",dataIndex:"name"},{title:"Description",dataIndex:"description"},{title:"Is Default",dataIndex:"isDefault"},{title:"enabled",dataIndex:"enabled"}],dataTableColumns:[{title:"Payment Mode",dataIndex:"name"},{title:"Description",dataIndex:"description"},{title:"Is Default",dataIndex:"isDefault",key:"isDefault",render:function(e,t){return{props:{style:{width:"60px"}},children:Object(u.jsx)(a.a,{checked:e,checkedChildren:Object(u.jsx)(c.a,{}),unCheckedChildren:Object(u.jsx)(r.a,{})})}}},{title:"Enabled",dataIndex:"enabled",key:"enabled",render:function(e,t){return{props:{style:{width:"60px"}},children:Object(u.jsx)(a.a,{checked:e,checkedChildren:Object(u.jsx)(c.a,{}),unCheckedChildren:Object(u.jsx)(r.a,{})})}}}],searchConfig:{displayLabels:["name"],searchFields:"name",outputValue:"_id"},entityDisplayLabels:["name"]};return Object(u.jsx)(i.a,{createForm:Object(u.jsx)(l,{}),updateForm:Object(u.jsx)(l,{isUpdateForm:!0}),config:e})}},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return B}));var a=n(6),c=n(0),r=n(1),i="OPEN_MODAL",o="CLOSE_MODAL",s="OPEN_ADVANCED_BOX",u="CLOSE_ADVANCED_BOX",l="OPEN_EDIT_BOX",d="CLOSE_EDIT_BOX",p="OPEN_PANEL",j="CLOSE_PANEL",b="COLLAPSE_PANEL",O="OPEN_BOX",f="CLOSE_BOX",x="COLLAPSE_BOX",y="OPEN_READ_BOX",h="CLOSE_READ_BOX",v="COLLAPSE_READ_BOX",m={isModalOpen:!1,isPanelClose:!0,isBoxCollapsed:!1,isReadBoxOpen:!1,isAdvancedBoxOpen:!1,isEditBoxOpen:!1};function g(e,t){switch(t.type){case i:return Object(r.a)(Object(r.a)({},e),{},{isModalOpen:!0});case o:return Object(r.a)(Object(r.a)({},e),{},{isModalOpen:!1});case p:return Object(r.a)(Object(r.a)({},e),{},{isPanelClose:!1});case j:return Object(r.a)(Object(r.a)({},e),{},{isPanelClose:!0});case b:return Object(r.a)(Object(r.a)({},e),{},{isPanelClose:!e.isPanelClose});case O:return Object(r.a)(Object(r.a)({},e),{},{isBoxCollapsed:!0});case f:return Object(r.a)(Object(r.a)({},e),{},{isBoxCollapsed:!1});case x:return Object(r.a)(Object(r.a)({},e),{},{isBoxCollapsed:!e.isBoxCollapsed});case y:return Object(r.a)(Object(r.a)({},e),{},{isAdvancedBoxOpen:!1,isEditBoxOpen:!1,isReadBoxOpen:!0});case h:return Object(r.a)(Object(r.a)({},e),{},{isReadBoxOpen:!1});case s:return Object(r.a)(Object(r.a)({},e),{},{isReadBoxOpen:!1,isEditBoxOpen:!1,isAdvancedBoxOpen:!0});case u:return Object(r.a)(Object(r.a)({},e),{},{isAdvancedBoxOpen:!1});case l:return Object(r.a)(Object(r.a)({},e),{},{isReadBoxOpen:!1,isAdvancedBoxOpen:!1,isEditBoxOpen:!0});case d:return Object(r.a)(Object(r.a)({},e),{},{isEditBoxOpen:!1});case v:return Object(r.a)(Object(r.a)({},e),{},{isReadBoxOpen:!e.isReadBoxOpen});default:throw new Error("Unhandled action type: ".concat(t.type))}}var C=function(e){return{modal:{open:function(){e({type:i})},close:function(){e({type:o})}},advancedBox:{open:function(){e({type:s})},close:function(){e({type:u})}},editBox:{open:function(){e({type:l})},close:function(){e({type:d})}},panel:{open:function(){e({type:p})},close:function(){e({type:j})},collapse:function(){e({type:b})}},collapsedBox:{open:function(){e({type:O})},close:function(){e({type:f})},collapse:function(){e({type:x})}},readBox:{open:function(){e({type:y}),console.log("readBox open")},close:function(){e({type:h}),console.log("readBox close")},collapse:function(){e({type:v})}}}},w=function(e){return{isModalOpen:function(){return e.isModalOpen},isPanelOpen:function(){return e.isPanelOpen},isBoxOpen:function(){return e.isBoxOpen}}},k=n(5),E=Object(c.createContext)();function S(e){var t=e.children,n=Object(c.useReducer)(g,m),r=Object(a.a)(n,2),i=r[0],o=r[1],s=Object(c.useMemo)((function(){return[i,o]}),[i]);return Object(k.jsx)(E.Provider,{value:s,children:t})}function B(){var e=Object(c.useContext)(E);if(void 0===e)throw new Error("useCrudContext must be used within a CrudContextProvider");var t=Object(a.a)(e,2),n=t[0],r=t[1];return{state:n,crudContextAction:C(r),crudContextSelector:w(n)}}},271:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return d}));var a=n(103),c=function(e){return e.crud},r=Object(a.a)([c],(function(e){return e.current})),i=Object(a.a)([c],(function(e){return e.list})),o=function(e){return Object(a.a)(i,(function(t){return t.result.items.find((function(t){return t._id===e}))}))},s=Object(a.a)([c],(function(e){return e.create})),u=Object(a.a)([c],(function(e){return e.update})),l=(Object(a.a)([c],(function(e){return e.read})),Object(a.a)([c],(function(e){return e.delete}))),d=Object(a.a)([c],(function(e){return e.search}))},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(1),c=n(37),r=n(36),i=n(61),o=n(281),s={resetState:function(){return function(){var e=Object(r.a)(Object(c.a)().mark((function e(t){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:i.g});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},resetAction:function(e){var t=e.actionType;return function(){var e=Object(r.a)(Object(c.a)().mark((function e(n){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:i.f,keyState:t,payload:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},currentItem:function(e){var t=e.data;return function(){var e=Object(r.a)(Object(c.a)().mark((function e(n){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:i.b,payload:Object(a.a)({},t)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},currentAction:function(e){var t=e.actionType,n=e.data;return function(){var e=Object(r.a)(Object(c.a)().mark((function e(r){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({type:i.a,keyState:t,payload:Object(a.a)({},n)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},list:function(e){var t=e.entity,n=e.options,a=void 0===n?{page:1}:n;return function(){var e=Object(r.a)(Object(c.a)().mark((function e(n){var r,s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:i.d,keyState:"list",payload:null}),e.next=3,o.a.list({entity:t,options:a});case 3:!0===(r=e.sent).success?(s={items:r.result,pagination:{current:parseInt(r.pagination.page,10),pageSize:10,showSizeChanger:!1,total:parseInt(r.pagination.count,10)}},n({type:i.e,keyState:"list",payload:s})):n({type:i.c,keyState:"list",payload:null});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},create:function(e){var t=e.entity,n=e.jsonData;return function(){var e=Object(r.a)(Object(c.a)().mark((function e(a){var r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:i.d,keyState:"create",payload:null}),e.next=3,o.a.create({entity:t,jsonData:n});case 3:!0===(r=e.sent).success?(a({type:i.e,keyState:"create",payload:r.result}),a({type:i.b,payload:r.result})):a({type:i.c,keyState:"create",payload:null});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},read:function(e){var t=e.entity,n=e.id;return function(){var e=Object(r.a)(Object(c.a)().mark((function e(a){var r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:i.d,keyState:"read",payload:null}),e.next=3,o.a.read({entity:t,id:n});case 3:!0===(r=e.sent).success?(a({type:i.b,payload:r.result}),a({type:i.e,keyState:"read",payload:r.result})):a({type:i.c,keyState:"read",payload:null});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},update:function(e){var t=e.entity,n=e.id,a=e.jsonData;return function(){var e=Object(r.a)(Object(c.a)().mark((function e(r){var s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:i.d,keyState:"update",payload:null}),e.next=3,o.a.update({entity:t,id:n,jsonData:a});case 3:!0===(s=e.sent).success?(r({type:i.e,keyState:"update",payload:s.result}),r({type:i.b,payload:s.result})):r({type:i.c,keyState:"update",payload:null});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},delete:function(e){var t=e.entity,n=e.id;return function(){var e=Object(r.a)(Object(c.a)().mark((function e(a){var r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:i.d,keyState:"delete",payload:null}),e.next=3,o.a.delete({entity:t,id:n});case 3:!0===(r=e.sent).success?a({type:i.e,keyState:"delete",payload:r.result}):a({type:i.c,keyState:"delete",payload:null});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},search:function(e){var t=e.entity,n=e.options,a=void 0===n?{}:n;return function(){var e=Object(r.a)(Object(c.a)().mark((function e(n){var r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:i.d,keyState:"search",payload:null}),e.next=3,o.a.search({entity:t,options:a});case 3:!0===(r=e.sent).success?n({type:i.e,keyState:"search",payload:r.result}):n({type:i.c,keyState:"search",payload:null});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}},276:function(e,t,n){"use strict";n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return y}));var a=n(6),c=n(0),r=n(3),i=n(1),o="OPEN_MODAL",s="CLOSE_MODAL",u="OPEN_PANEL",l="CLOSE_PANEL",d={create:{isOpen:!1},update:{isOpen:!1},read:{isOpen:!1},recordPayment:{isOpen:!1},deleteModal:{isOpen:!1},dataTableList:{isOpen:!0},last:null};function p(e,t){var n=t.keyState,a=void 0===n?null:n;switch(t.type){case o:return Object(i.a)(Object(i.a)({},e),{},{deleteModal:{isOpen:!0}});case s:return Object(i.a)(Object(i.a)({},e),{},{deleteModal:{isOpen:!1}});case u:return Object(i.a)(Object(i.a)({},d),{},Object(r.a)({dataTableList:{isOpen:!1}},a,{isOpen:!0}));case l:return Object(i.a)({},d);default:throw new Error("Unhandled action type: ".concat(t.type))}}var j=function(e){return{modal:{open:function(){e({type:o})},close:function(){e({type:s})}},readPanel:{open:function(){e({type:u,keyState:"read"})},close:function(){e({type:l})}},updatePanel:{open:function(){e({type:u,keyState:"update"})},close:function(){e({type:l})}},createPanel:{open:function(){e({type:u,keyState:"create"})},close:function(){e({type:l})}},recordPanel:{open:function(){e({type:u,keyState:"recordPayment"})},close:function(){e({type:l})}}}},b=function(e){return{isModalOpen:function(){return e.isModalOpen},isPanelOpen:function(){return e.isPanelOpen},isBoxOpen:function(){return e.isBoxOpen}}},O=n(5),f=Object(c.createContext)();function x(e){var t=e.children,n=Object(c.useReducer)(p,d),r=Object(a.a)(n,2),i=r[0],o=r[1],s=Object(c.useMemo)((function(){return[i,o]}),[i]);return Object(O.jsx)(f.Provider,{value:s,children:t})}function y(){var e=Object(c.useContext)(f);if(void 0===e)throw new Error("useErpContext must be used within a ErpContextProvider");var t=Object(a.a)(e,2),n=t[0],r=t[1];return{state:n,erpContextAction:j(r),erpContextSelector:b(n)}}},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(345),n(277);function a(e,t,n){return void 0===n&&(n="|"),t.split(n).map((function(t){return function(e,t){return t.split(".").reduce((function(e,t){return void 0===e||null===e?e:e[t]}),e)}(e,t)})).join(" ")}Object.byString=function(e,t){for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),a=0,c=n.length;a<c;++a){var r=n[a];if(null===e)return;if(!(r in e))return;e=e[r]}return e}},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(37),c=n(36),r=n(123),i=n.n(r),o=n(122),s=n(124),u=n(135);i.a.defaults.baseURL=o.a,i.a.defaults.withCredentials=!0;var l={create:function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,c=t.jsonData,console.log("\ud83d\ude80 Create Request \ud83d\ude80 ~ file: request.js ~ line 19 ~ create: ~ jsonData",c),e.prev=2,e.next=5,i.a.post(n+"/create",c);case 5:return r=e.sent,Object(u.a)(r,{notifyOnSuccess:!0,notifyOnFailed:!0}),e.abrupt("return",r.data);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",Object(s.a)(e.t0));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),read:function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,c=t.id,e.prev=1,e.next=4,i.a.get(n+"/read/"+c);case 4:return r=e.sent,Object(u.a)(r,{notifyOnSuccess:!1,notifyOnFailed:!0}),e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",Object(s.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c,r,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,c=t.id,r=t.jsonData,console.log("\ud83d\ude80 ~ file: request.js ~ line 34 ~ update: ~ id",c),console.log("\ud83d\ude80 Update Request \ud83d\ude80 ~ file: request.js ~ line 42 ~ update: ~ jsonData",r),e.prev=3,e.next=6,i.a.patch(n+"/update/"+c,r);case 6:return o=e.sent,Object(u.a)(o,{notifyOnSuccess:!0,notifyOnFailed:!0}),e.abrupt("return",o.data);case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",Object(s.a)(e.t0));case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),delete:function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c,r,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,c=t.id,r=t.options,void 0===r?{}:r,e.prev=1,e.next=4,i.a.delete(n+"/delete/"+c);case 4:return o=e.sent,Object(u.a)(o,{notifyOnSuccess:!0,notifyOnFailed:!0}),e.abrupt("return",o.data);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",Object(s.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),filter:function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c,r,o,l,d,p;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,c=t.options,r=void 0===c?{}:c,e.prev=1,o=r.filter?"filter="+r.filter:"",l=r.equal?"&equal="+r.equal:"",d="?".concat(o).concat(l),e.next=7,i.a.get(n+"/filter"+d);case 7:return p=e.sent,Object(u.a)(p,{notifyOnSuccess:!1,notifyOnFailed:!1}),e.abrupt("return",p.data);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",Object(s.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),search:function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c,r,o,l,d;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(l in n=t.entity,c=t.options,r=void 0===c?{}:c,e.prev=1,o="?",r)o+=l+"="+r[l]+"&";return o=o.slice(0,-1),e.next=7,i.a.get(n+"/search"+o);case 7:return d=e.sent,Object(u.a)(d,{notifyOnSuccess:!1,notifyOnFailed:!1}),e.abrupt("return",d.data);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",Object(s.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),list:function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c,r,o,l,d;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(l in n=t.entity,c=t.options,r=void 0===c?{}:c,e.prev=1,o="?",r)o+=l+"="+r[l]+"&";return o=o.slice(0,-1),e.next=7,i.a.get(n+"/list"+o);case 7:return d=e.sent,Object(u.a)(d,{notifyOnSuccess:!1,notifyOnFailed:!1}),e.abrupt("return",d.data);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",Object(s.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c,r,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,c=t.jsonData,r=t.options,void 0===r?{}:r,e.prev=1,e.next=4,i.a.post(n,c);case 4:return o=e.sent,e.abrupt("return",o.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(s.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),get:function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,e.prev=1,e.next=4,i.a.get(n);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(s.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),patch:function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.entity,c=t.jsonData,e.prev=1,e.next=4,i.a.patch(n,c);case 4:return r=e.sent,Object(u.a)(r,{notifyOnSuccess:!0,notifyOnFailed:!0}),e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",Object(s.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),source:function(){var e=i.a.CancelToken.source();return e}},d=l},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var a=n(237),c=n(630),r=n(5);function i(e){var t=e.isLoading,n=e.children,i=Object(r.jsx)(c.a,{style:{fontSize:24},spin:!0});return Object(r.jsx)(a.a,{indicator:i,spinning:t,children:n})}},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return S})),n.d(t,"d",(function(){return D}));var a=n(6),c=n(0),r=n(268),i=n(5);var o=function(e){var t=e.children;return Object(i.jsx)(r.a,{children:t})},s=n(102),u=n(251),l=n(628),d=n(542),p=n(543),j=function(e){var t=e.onChange,n=e.title;return Object(i.jsx)("div",{className:"collapseBoxHeader",onClick:t,children:n})},b=function(e){var t=e.isOpen,n=e.children,a=t?{display:"block",opacity:1}:{display:"none",opacity:0};return Object(i.jsx)("div",{className:"TopCollapseBox",children:Object(i.jsx)("div",{style:a,children:Object(i.jsx)(d.a,{children:Object(i.jsxs)(p.a,{span:24,children:[" ",n]})})})})},O=function(e){var t=e.isOpen,n=e.children,a=t?{display:"none",opacity:0}:{display:"block",opacity:1};return Object(i.jsx)("div",{className:"BottomCollapseBox",children:Object(i.jsx)("div",{style:a,children:Object(i.jsx)(d.a,{children:Object(i.jsxs)(p.a,{span:24,children:[" ",n]})})})})};function f(e){var t=e.topContent,n=e.bottomContent,a=e.buttonTitle,c=e.isCollapsed,r=e.onCollapse,o=c?"collapsed":"";return Object(i.jsxs)("div",{className:"panelBox",children:[Object(i.jsx)(b,{isOpen:c,children:t}),Object(i.jsxs)("div",{className:"collapseBox "+o,children:[Object(i.jsx)(j,{title:a,onChange:r}),Object(i.jsx)("div",{className:"whiteBg"}),Object(i.jsx)(O,{isOpen:c,children:n})]})]})}var x=u.a.Sider;function y(e){var t=e.config,n=e.topContent,o=e.bottomContent,u=e.fixHeaderPanel,d=t.ADD_NEW_ENTITY,p=Object(r.b)(),j=p.state,b=p.crudContextAction,O=j.isPanelClose,y=j.isBoxCollapsed,h=b.panel,v=b.collapsedBox,m=Object(c.useState)(O),g=Object(a.a)(m,2),C=g[0],w=g[1],k=Object(c.useState)("-1px"),E=Object(a.a)(k,2),S=E[0],B=E[1],N=Object(c.useState)(0),A=Object(a.a)(N,2),D=A[0],P=A[1],T=Object(c.useState)("20px"),L=Object(a.a)(T,2),_=L[0],I=L[1],R=Object(s.b)(),M=R.state,F=R.appContextAction,q=M.isNavMenuClose,z=F.navMenu;Object(c.useEffect)((function(){var e=[];return O?(P(0),I("20px"),e=setTimeout((function(){B("-1px"),w(O)}),200)):(w(O),B(0),e=setTimeout((function(){P(1),I(0)}),200),q||z.close()),function(){return clearTimeout(e)}}),[O]);return Object(i.jsx)(x,{trigger:Object(i.jsx)(l.a,{className:"trigger"}),width:400,collapsible:!0,collapsed:C,collapsedWidth:"0px",onCollapse:function(){h.collapse()},className:"sidePanel",zeroWidthTriggerStyle:{right:"-50px",top:"15px"},style:{left:S},children:Object(i.jsxs)("div",{className:"sidePanelContent",style:{opacity:D,paddingTop:_},children:[u,Object(i.jsx)(f,{buttonTitle:d,isCollapsed:y,onCollapse:function(){v.collapse()},topContent:n,bottomContent:o})]})})}var h=u.a.Content,v=function(e){var t=e.children,n=Object(r.b)(),o=n.state,u=n.crudContextAction,l=Object(s.b)().state,d=o.isPanelClose,p=l.isNavMenuClose,j=u.panel,b=Object(c.useState)(d),O=Object(a.a)(b,2),f=O[0],x=O[1];return Object(c.useEffect)((function(){var e=[];return d?e=setTimeout((function(){x(d)}),200):x(d),function(){return clearTimeout(e)}}),[d]),Object(c.useEffect)((function(){p||j.close()}),[p]),Object(i.jsx)(h,{className:"whiteBox shadow",style:{padding:"50px 40px",margin:"100px auto",width:f?"100%":"830px",maxWidth:"1000px",flex:"none"},children:t})};function m(e){var t=e.children,n=e.config,a=e.sidePanelTopContent,c=e.sidePanelBottomContent,r=e.fixHeaderPanel;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(o,{children:Object(i.jsxs)(u.a,{style:{minHeight:"100vh"},children:[Object(i.jsx)(y,{config:n,topContent:a,bottomContent:c,fixHeaderPanel:r}),Object(i.jsx)(u.a,{children:Object(i.jsxs)(v,{children:[" ",t]})})]})})})}var g=n(276);var C=function(e){var t=e.children;return Object(i.jsx)(g.a,{children:t})},w=u.a.Content;function k(e){var t=e.children;e.config;return Object(i.jsx)(C,{children:Object(i.jsx)(u.a,{className:"site-layout",children:Object(i.jsx)(w,{className:"whiteBox shadow",style:{padding:"50px 40px",margin:"100px auto",width:"100%",maxWidth:"1100px"},children:t})})})}var E=u.a.Content;function S(e){var t=e.children;return Object(i.jsx)(u.a,{className:"site-layout",children:Object(i.jsx)(E,{style:{padding:"30px 40px",margin:"70px auto",width:"100%",maxWidth:"1100px"},children:t})})}var B=n(546),N=u.a.Content,A=function(e){var t=e.title,n=e.cardContent;return Object(i.jsxs)("div",{className:"whiteBox shadow",style:{color:"#595959",fontSize:13,height:"106px",marginBottom:"24px"},children:[Object(i.jsx)("div",{className:"pad15 strong",style:{textAlign:"center",justifyContent:"center"},children:Object(i.jsx)("h3",{style:{color:"#22075e",marginBottom:0},children:t})}),Object(i.jsx)(B.a,{style:{padding:0,margin:0}}),Object(i.jsx)("div",{className:"pad15",style:{textAlign:"center",justifyContent:"center"},children:n})]})};function D(e){var t=e.children,n=e.topCardTitle,a=e.topCardContent,c=e.bottomCardContent;return Object(i.jsx)(u.a,{className:"site-layout",children:Object(i.jsx)(N,{style:{padding:"30px 40px",margin:"70px auto",width:"100%",maxWidth:"1100px"},children:Object(i.jsxs)(d.a,{gutter:[24,24],children:[Object(i.jsx)(p.a,{className:"gutter-row",xs:{span:24},sm:{span:24},md:{span:17},lg:{span:18},children:Object(i.jsx)("div",{className:"whiteBox shadow",style:{minHeight:"480px"},children:Object(i.jsx)(d.a,{className:"pad10",gutter:[0,0],children:t})})}),Object(i.jsxs)(p.a,{className:"gutter-row",xs:{span:24},sm:{span:24},md:{span:7},lg:{span:6},children:[Object(i.jsx)(A,{title:n,cardContent:a}),Object(i.jsx)("div",{className:"whiteBox shadow",style:{minHeight:"280px"},children:Object(i.jsx)(d.a,{gutter:[0,0],children:c})})]})]})})})}},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(6),c=n(0),r=n(73),i=n(274),o=n(268),s=n(271),u=n(636),l=n(109),d=n(282),p=n(5);function j(e){var t=e.config,n=e.formElements,j=t.entity,b=Object(r.b)(),O=Object(r.c)(s.a),f=O.isLoading,x=O.isSuccess,y=Object(o.b)().crudContextAction,h=y.panel,v=y.collapsedBox,m=y.readBox,g=u.a.useForm(),C=Object(a.a)(g,1)[0];return Object(c.useEffect)((function(){x&&(m.open(),v.open(),h.open(),C.resetFields(),b(i.a.resetAction({actionType:"create"})),b(i.a.list({entity:j})))}),[x]),Object(p.jsx)(d.a,{isLoading:f,children:Object(p.jsxs)(u.a,{form:C,layout:"vertical",onFinish:function(e){console.log("\ud83d\ude80 ~ file: index.jsx ~ line 19 ~ onSubmit ~ fieldsValue",e),b(i.a.create({entity:j,jsonData:e}))},children:[n,Object(p.jsx)(u.a.Item,{children:Object(p.jsx)(l.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})}},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(1),c=n(6),r=n(0),i=n(277),o=n.n(i),s=n(73),u=n(274),l=n(268),d=n(271),p=(n(278),n(636)),j=n(109),b=n(282),O=n(5);function f(e){var t=e.config,n=e.formElements,i=t.entity,f=Object(s.b)(),x=Object(s.c)(d.g),y=x.current,h=x.isLoading,v=x.isSuccess,m=Object(l.b)(),g=m.state,C=m.crudContextAction,w=C.panel,k=C.collapsedBox,E=C.readBox,S=p.a.useForm(),B=Object(c.a)(S,1)[0];Object(r.useEffect)((function(){if(y){var e=Object(a.a)({},y);e.birthday&&(e=Object(a.a)(Object(a.a)({},e),{},{birthday:o()(e.birthday)})),e.date&&(e=Object(a.a)(Object(a.a)({},e),{},{date:o()(e.date)})),e.expiredDate&&(e=Object(a.a)(Object(a.a)({},e),{},{expiredDate:o()(e.expiredDate)})),e.created&&(e=Object(a.a)(Object(a.a)({},e),{},{created:o()(e.created)})),e.updated&&(e=Object(a.a)(Object(a.a)({},e),{},{updated:o()(e.updated)})),console.log("\ud83d\ude80 ~ file: index.jsx ~ line 40 ~ useEffect ~ obj",e),B.setFieldsValue(e)}}),[y]),Object(r.useEffect)((function(){v&&(E.open(),k.open(),w.open(),B.resetFields(),f(u.a.resetAction({actionType:"update"})),f(u.a.list({entity:i})))}),[v]);var N=g.isEditBoxOpen?{display:"block",opacity:1}:{display:"none",opacity:0};return Object(O.jsx)("div",{style:N,children:Object(O.jsx)(b.a,{isLoading:h,children:Object(O.jsxs)(p.a,{form:B,layout:"vertical",onFinish:function(e){console.log("\ud83d\ude80 ~ file: index.jsx ~ line 34 ~ onSubmit ~  current._id",y._id);var t=y._id;f(u.a.update({entity:i,id:t,jsonData:e}))},children:[n,Object(O.jsx)(p.a.Item,{style:{display:"inline-block",paddingRight:"5px"},children:Object(O.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Save"})}),Object(O.jsx)(p.a.Item,{style:{display:"inline-block",paddingLeft:"5px"},children:Object(O.jsx)(j.a,{onClick:function(){E.open()},children:"Cancel"})})]})})})}},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(6),c=n(0),r=n(639),i=n(73),o=n(274),s=n(268),u=n(271),l=n(278),d=n(5);function p(e){var t=e.config,n=t.entity,p=t.entityDisplayLabels,j=t.deleteMessage,b=void 0===j?"Do you want delete : ":j,O=t.modalTitle,f=void 0===O?"Remove Item":O,x=Object(i.b)(),y=Object(i.c)(u.c),h=y.current,v=y.isLoading,m=y.isSuccess,g=Object(s.b)(),C=g.state,w=g.crudContextAction,k=C.isModalOpen,E=w.modal,S=Object(c.useState)(""),B=Object(a.a)(S,2),N=B[0],A=B[1];Object(c.useEffect)((function(){if(m&&(E.close(),x(o.a.list({entity:n}))),h){var e=p.map((function(e){return Object(l.a)(h,e)})).join(" ");A(e)}}),[m,h]);return Object(d.jsx)(r.a,{title:f,visible:k,onOk:function(){var e=h._id;x(o.a.delete({entity:n,id:e}))},onCancel:function(){v||E.close()},confirmLoading:v,children:Object(d.jsxs)("p",{children:[b,N]})})}},314:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(6),c=n(0),r=n(542),i=n(543),o=n(73),s=n(277),u=n.n(s),l=n(268),d=n(271),p=n(278),j=n(5);function b(e){var t=e.config.readColumns,n=Object(o.c)(d.b).result,s=Object(l.b)().state.isReadBoxOpen,b=Object(c.useState)([]),O=Object(a.a)(b,2),f=O[0],x=O[1],y=Object(c.useRef)(!0);Object(c.useEffect)((function(){if(y.current)y.current=!1;else{var e=[];t.map((function(t){var a=t.dataIndex,c=t.title,r=t.isDate||!1,i=Object(p.a)(n,a);i=r?u()(i).format("DD/MM/YYYY"):i,e.push({propsKey:a,label:c,value:i})})),x(e)}}),[n]);var h=s?{display:"block",opacity:1}:{display:"none",opacity:0},v=f.map((function(e){return Object(j.jsxs)(r.a,{gutter:12,children:[Object(j.jsx)(i.a,{className:"gutter-row",span:8,children:Object(j.jsx)("p",{children:e.label})}),Object(j.jsx)(i.a,{className:"gutter-row",span:2,children:Object(j.jsx)("p",{children:" : "})}),Object(j.jsx)(i.a,{className:"gutter-row",span:14,children:Object(j.jsx)("p",{children:e.value})})]},e.propsKey)}));return Object(j.jsx)("div",{style:h,children:v})}},315:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(6),c=n(0),r=n(646),i=n(505),o=n(88),s=n(631),u=n(73),l=n(274),d=n(268),p=n(271),j=n(5);function b(e){var t=e.config,n=e.onRerender,b=t.entity,O=t.searchConfig,f=O.displayLabels,x=O.searchFields,y=O.outputValue,h=void 0===y?"_id":y,v=Object(u.b)(),m=Object(d.b)().crudContextAction,g=m.panel,C=m.collapsedBox,w=m.readBox,k=Object(u.c)(p.f),E=k.result,S=k.isLoading,B=k.isSuccess,N=Object(c.useState)([]),A=Object(a.a)(N,2),D=A[0],P=A[1],T=Object(c.useState)(void 0),L=Object(a.a)(T,2),_=L[0],I=L[1],R=Object(c.useRef)(!1),M=Object(c.useState)(!1),F=Object(a.a)(M,2),q=F[0],z=F[1],H=Object(c.useState)(""),W=Object(a.a)(H,2),X=W[0],Y=W[1],U=Object(c.useState)(""),V=Object(a.a)(U,2),K=V[0],J=V[1],G=Object(r.a)((function(){J(X)}),500,[X]),$=Object(a.a)(G,2)[1],Q=function(e){return f.map((function(t){return e[t]})).join(" ")};Object(c.useEffect)((function(){if(""!=K){var e={q:K,fields:x};v(l.a.search({entity:b,options:e}))}return function(){$()}}),[K]);return Object(c.useEffect)((function(){R.current&&(B?P(E):(z(!1),I(void 0),P([])))}),[B,E]),Object(j.jsx)(i.a,{loading:S,showSearch:!0,allowClear:!0,placeholder:Object(j.jsx)(s.a,{style:{float:"right",padding:"8px 0"}}),defaultActiveFirstOption:!1,showArrow:!1,filterOption:!1,notFoundContent:q?"... Searching":Object(j.jsx)(o.a,{}),value:_,onSearch:function(e){e&&""!=e&&(R.current=!0,z(!0),P([]),I(void 0),Y(e))},style:{width:"100%"},onSelect:function(e){var t=E.find((function(t){return t[h]===e}));v(l.a.currentItem({data:t})),g.open(),C.open(),w.open(),n()},children:D.map((function(e){return Object(j.jsx)(i.a.Option,{value:e[h],children:Q(e)},e[h])}))})}function O(e){var t=e.config,n=Object(c.useState)([0]),r=Object(a.a)(n,2),i=r[0],o=r[1],s=function(){o([i+1])};return i.map((function(e){return Object(j.jsx)(b,{config:t,onRerender:s},e)}))}},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(8),c=n(0),r=n(249),i=n(640),o=n(109),s=n(635),u=n(632),l=n(73),d=n(274),p=n(271),j=n(134),b=n(5);function O(e){var t=e.config,n=e.DropDownRowMenu,O=e.AddNewItem,f=t.entity,x=t.dataTableColumns,y=t.dataTableTitle;x=[].concat(Object(a.a)(x),[{title:"",render:function(e){return Object(b.jsx)(r.a,{overlay:n({row:e}),trigger:["click"],children:Object(b.jsx)(u.a,{style:{cursor:"pointer",fontSize:"24px"}})})}}]);var h=Object(l.c)(p.e),v=h.result,m=h.isLoading,g=v.pagination,C=v.items,w=Object(l.b)(),k=Object(c.useCallback)((function(e){var t={page:e.current||1};w(d.a.list({entity:f,options:t}))}),[]);return Object(c.useEffect)((function(){w(d.a.list({entity:f}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.a,{onBack:function(){return window.history.back()},title:y,ghost:!1,extra:[Object(b.jsx)(o.a,{onClick:k,children:"Refresh"},"".concat(Object(j.a)())),Object(b.jsx)(O,{config:t},"".concat(Object(j.a)()))],style:{padding:"20px 0px"}}),Object(b.jsx)(s.a,{columns:x,rowKey:function(e){return e._id},dataSource:C,pagination:g,loading:m,onChange:k})]})}},344:function(e,t,n){"use strict";var a=n(6),c=n(0),r=n(542),i=n(543),o=n(109),s=n(643),u=n(634),l=n(644),d=n(311),p=n(312),j=n(313),b=n(314),O=n(315),f=n(73),x=n(271),y=n(274),h=n(268),v=n(289),m=n(248),g=n(633),C=n(134),w=n(316),k=n(5);function E(e){var t=e.config,n=Object(h.b)().crudContextAction,a=n.collapsedBox,c=n.panel,r=t.ADD_NEW_ENTITY;return Object(k.jsx)(o.a,{onClick:function(){c.open(),a.close()},type:"primary",children:r})}function S(e){var t=e.row,n=Object(f.b)(),a=Object(h.b)().crudContextAction,c=a.panel,r=a.collapsedBox,i=a.modal,o=a.readBox,l=a.editBox,d=Object(f.c)(Object(x.d)(t._id));return Object(k.jsxs)(m.a,{style:{width:130},children:[Object(k.jsx)(m.a.Item,{icon:Object(k.jsx)(g.a,{}),onClick:function(){n(y.a.currentItem({data:d})),c.open(),r.open(),o.open()},children:"Show"},"".concat(Object(C.a)())),Object(k.jsx)(m.a.Item,{icon:Object(k.jsx)(u.a,{}),onClick:function(){n(y.a.currentItem({data:d})),n(y.a.currentAction({actionType:"update",data:d})),l.open(),c.open(),r.open()},children:"Edit"},"".concat(Object(C.a)())),Object(k.jsx)(m.a.Item,{icon:Object(k.jsx)(s.a,{}),onClick:function(){n(y.a.currentAction({actionType:"delete",data:d})),i.open()},children:"Delete"},"".concat(Object(C.a)()))]})}function B(e){var t=e.config;return Object(k.jsx)(w.a,{config:t,DropDownRowMenu:S,AddNewItem:E})}function N(e){var t=e.config,n=e.formElements,l=Object(h.b)(),d=l.crudContextAction,j=l.state,O=t.entityDisplayLabels,v=(d.panel,d.collapsedBox,d.modal),m=(d.readBox,d.editBox),g=j.isReadBoxOpen,C=j.isEditBoxOpen,w=Object(f.c)(x.b).result,E=Object(f.b)(),S=Object(c.useState)(""),B=Object(a.a)(S,2),N=B[0],A=B[1];Object(c.useEffect)((function(){if(w){var e=O.map((function(e){return w[e]})).join(" ");A(e)}}),[w]);var D=g||C?{opacity:1}:{opacity:0};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(r.a,{style:D,children:[Object(k.jsx)(i.a,{span:13,children:Object(k.jsx)("p",{style:{marginBottom:"10px"},children:N})}),Object(k.jsxs)(i.a,{span:11,children:[Object(k.jsx)(o.a,{onClick:function(){E(y.a.currentAction({actionType:"delete",data:w})),v.open()},type:"text",icon:Object(k.jsx)(s.a,{}),size:"small",style:{float:"right",marginLeft:"5px"},children:"remove"}),Object(k.jsx)(o.a,{onClick:function(){E(y.a.currentAction({actionType:"update",data:w})),m.open()},type:"text",icon:Object(k.jsx)(u.a,{}),size:"small",style:{float:"right",marginLeft:"0px"},children:"edit"})]}),Object(k.jsx)(i.a,{span:24,children:Object(k.jsx)("div",{className:"line"})}),Object(k.jsx)("div",{className:"space10"})]}),Object(k.jsx)(b.a,{config:t}),Object(k.jsx)(p.a,{config:t,formElements:n})]})}function A(e){var t=e.config,n=Object(h.b)().crudContextAction,a=(n.panel,n.collapsedBox);n.modal,n.readBox,n.editBox;return Object(k.jsxs)("div",{className:"box",children:[Object(k.jsx)(r.a,{gutter:12,children:Object(k.jsx)(i.a,{className:"gutter-row",span:21,children:Object(k.jsx)("h1",{style:{fontSize:20,marginBottom:20},children:t.PANEL_TITLE})})}),Object(k.jsxs)(r.a,{gutter:8,children:[Object(k.jsx)(i.a,{className:"gutter-row",span:21,children:Object(k.jsx)(O.a,{config:t})}),Object(k.jsx)(i.a,{className:"gutter-row",span:3,children:Object(k.jsx)(o.a,{onClick:function(){a.close()},block:!0,icon:Object(k.jsx)(l.a,{})})})]})]})}t.a=function(e){var t=e.config,n=e.createForm,a=e.updateForm,r=Object(f.b)();return Object(c.useLayoutEffect)((function(){r(y.a.resetState())}),[]),Object(k.jsxs)(v.a,{config:t,fixHeaderPanel:Object(k.jsx)(A,{config:t}),sidePanelBottomContent:Object(k.jsx)(d.a,{config:t,formElements:n}),sidePanelTopContent:Object(k.jsx)(N,{config:t,formElements:a}),children:[Object(k.jsx)(B,{config:t}),Object(k.jsx)(j.a,{config:t})]})}},617:function(e,t,n){"use strict";var a=n(1),c=n(0),r=n(510),i=n(22),o=function(e,t){return c.createElement(i.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:r.a}))};o.displayName="CheckOutlined",t.a=c.forwardRef(o)},618:function(e,t,n){"use strict";var a=n(1),c=n(0),r=n(148),i=n(22),o=function(e,t){return c.createElement(i.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:r.a}))};o.displayName="CloseOutlined",t.a=c.forwardRef(o)},626:function(e,t,n){"use strict";var a=n(4),c=n(3),r=n(0),i=n(6),o=n(9),s=n(7),u=n.n(s),l=n(60),d=n(56),p=r.forwardRef((function(e,t){var n,a=e.prefixCls,s=void 0===a?"rc-switch":a,p=e.className,j=e.checked,b=e.defaultChecked,O=e.disabled,f=e.loadingIcon,x=e.checkedChildren,y=e.unCheckedChildren,h=e.onClick,v=e.onChange,m=e.onKeyDown,g=Object(o.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=Object(l.a)(!1,{value:j,defaultValue:b}),w=Object(i.a)(C,2),k=w[0],E=w[1];function S(e,t){var n=k;return O||(E(n=e),null===v||void 0===v||v(n,t)),n}var B=u()(s,p,(n={},Object(c.a)(n,"".concat(s,"-checked"),k),Object(c.a)(n,"".concat(s,"-disabled"),O),n));return r.createElement("button",Object.assign({},g,{type:"button",role:"switch","aria-checked":k,disabled:O,className:B,ref:t,onKeyDown:function(e){e.which===d.a.LEFT?S(!1,e):e.which===d.a.RIGHT&&S(!0,e),null===m||void 0===m||m(e)},onClick:function(e){var t=S(!k,e);null===h||void 0===h||h(t,e)}}),f,r.createElement("span",{className:"".concat(s,"-inner")},k?x:y))}));p.displayName="Switch";var j=p,b=n(92),O=n(140),f=n(49),x=n(90),y=n(40),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},v=r.forwardRef((function(e,t){var n,i=e.prefixCls,o=e.size,s=e.loading,l=e.className,d=void 0===l?"":l,p=e.disabled,v=h(e,["prefixCls","size","loading","className","disabled"]);Object(y.a)("checked"in v||!("value"in v),"Switch","`value` is not a valid prop, do you mean `checked`?");var m=r.useContext(f.b),g=m.getPrefixCls,C=m.direction,w=r.useContext(x.b),k=g("switch",i),E=r.createElement("div",{className:"".concat(k,"-handle")},s&&r.createElement(b.a,{className:"".concat(k,"-loading-icon")})),S=u()((n={},Object(c.a)(n,"".concat(k,"-small"),"small"===(o||w)),Object(c.a)(n,"".concat(k,"-loading"),s),Object(c.a)(n,"".concat(k,"-rtl"),"rtl"===C),n),d);return r.createElement(O.a,{insertExtraNode:!0},r.createElement(j,Object(a.a)({},v,{prefixCls:k,className:S,disabled:p||s,ref:t,loadingIcon:E})))}));v.__ANT_SWITCH=!0,v.displayName="Switch";t.a=v}}]);
//# sourceMappingURL=PaymentMode.04764834.chunk.js.map
"use strict";(self.webpackChunkmia_erp=self.webpackChunkmia_erp||[]).push([[435],{3435:function(t,e,n){n.r(e);var a,o,i,r=n(168),l=n(4942),u=n(1413),d=n(9439),c=n(4925),v=n(2791),m=n(5817),p=n(2246),s=n(6522),h=n(959),f=n(9953),b=n(2360),g=n(1251),w=n(8095),x=n(7606),D=n(2989),P=n(1605),y=n(401),B=n(758),S=n(763),C=n.n(S),Z=n(6382),k=n(4897),A=n(3329),_=["params","defaultState","onSubmit","onClose"],I=function(t){return t.product="product",t.variation="variation",t.batch="batch",t}(I||{}),j=(0,h.H1)(I),K=b.ZP.form(a||(a=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 98vw;\n  height: 98vh;\n  padding: 0 8px;\n\n  color: ",";\n\n  background-color: ",";\n"])),(function(t){return t.theme.fontColorSidebar}),(function(t){return t.theme.modalBackgroundColor})),M=(0,b.ZP)(w.ZP)(o||(o=(0,r.Z)(["\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n"])),(function(t){return t.theme.modalBorderColor}),(function(t){return t.theme.modalBorderColor})),R=(0,b.ZP)(w.ZP)(i||(i=(0,r.Z)([""])));e.default=function(t){var e,n,a,o=t.params,i=(t.defaultState,t.onSubmit),r=t.onClose,b=(0,c.Z)(t,_),w=(0,h.dn)(j),S=w.stepCheck,W=w.stepIdx,L=w.setPrevStep,E=w.setNextStep,N=(0,v.useState)([]),U=(0,d.Z)(N,2),q=U[0],Q=U[1],T=(0,v.useState)([]),O=(0,d.Z)(T,2),G=O[0],H=O[1],V=(0,v.useState)([]),F=(0,d.Z)(V,2),Y=F[0],$=F[1],X=(0,v.useState)({}),z=(0,d.Z)(X,2),J=z[0],tt=z[1],et=(0,v.useState)(!1),nt=(0,d.Z)(et,2),at=nt[0],ot=nt[1],it=(0,v.useCallback)((function(t,e){tt((function(n){return(0,u.Z)((0,u.Z)({},n),{},(0,l.Z)({},t,e))}))}),[]),rt=(0,D.hN)(),lt=rt.watch,ut=rt.setValue,dt=lt(),ct=dt.search,vt=dt.searchBy,mt=(0,v.useMemo)((function(){return{tableTitles:k.Y5,tableData:q,searchParams:[{dataPath:"label",label:(0,s.t)("label")},{dataPath:"sku",label:(0,s.t)("sku")}],selectedRow:null===J||void 0===J?void 0:J.product,onSubmitSearch:function(t){var e;ut("search",t.search),ut("searchBy",null===(e=t.param)||void 0===e?void 0:e.dataPath)},onRowClick:function(t){var e=q.find((function(e){return e._id===(null===t||void 0===t?void 0:t.rowId)}));e&&it("product",e),E()}}}),[null===J||void 0===J?void 0:J.product,q,it,E,ut]),pt=(0,v.useMemo)((function(){var t;return(0,h.F9)(null===J||void 0===J||null===(t=J.variation)||void 0===t?void 0:t.properties)}),[J]),st=(0,v.useMemo)((function(){return{tableTitles:pt,tableData:G,hasSearch:!1,selectedRow:null===J||void 0===J?void 0:J.variation,onRowClick:function(t){var e=G.find((function(e){return e._id===(null===t||void 0===t?void 0:t.rowId)}));e&&it("variation",e),E()}}}),[null===J||void 0===J?void 0:J.variation,it,E,pt,G]),ht=(0,v.useMemo)((function(){return{tableTitles:B.fK,tableData:Y,hasSearch:!1,selectedRow:null===J||void 0===J?void 0:J.inventory,onRowClick:function(t){var e=Y.find((function(e){return e._id===(null===t||void 0===t?void 0:t.rowId)}));e&&it("inventory",e),(null===e||void 0===e?void 0:e.warehouse)&&it("warehouse",null===e||void 0===e?void 0:e.warehouse),E()}}}),[null===J||void 0===J?void 0:J.inventory,Y,it,E]),ft=(0,v.useMemo)((function(){return S(I.product)?mt:S(I.variation)?st:S(I.batch)?ht:void 0}),[S,mt,st,ht]),bt=(0,v.useMemo)((function(){var t=J.product,e=J.variation,n=J.inventory;return S(I.product)?!!t:S(I.variation)?Y.length>0?!!t&&!!e:!!t:!!S(I.batch)&&!!n}),[J,Y.length,S]),gt=(0,v.useMemo)((function(){return Object.values(J).length>=4}),[J]),wt=(0,v.useCallback)((function(){var t=J.product,e=J.variation;return S(I.product)?(0,p.Eh)({data:{search:ct,searchBy:vt},onSuccess:Q,onLoading:ot},p.So.getAll,p.So):S(I.variation)&&t?(0,p.Eh)({data:{offerId:null===t||void 0===t?void 0:t._id},onSuccess:function(t){H(t.map((function(t){return(0,y.m$)(t)})))},onLoading:ot},P.Z.getAllByProductId,P.Z):S(I.batch)&&t?(0,p.Eh)({data:{offer:(0,h.rE)(t),variation:e?(0,h.rE)(e):void 0,warehouse:null!==o&&void 0!==o&&o.warehouse?(0,h.rE)(null===o||void 0===o?void 0:o.warehouse):void 0},onSuccess:$,onLoading:ot},p.nh.getAllInventories,p.nh):void 0}),[J,null===o||void 0===o?void 0:o.warehouse,ct,vt,S]);return(0,v.useEffect)((function(){wt()}),[wt]),(0,v.useEffect)((function(){var t,e,n;(null===(t=J.variation)||void 0===t||null===(e=t.offer)||void 0===e?void 0:e._id)!==(null===(n=J.product)||void 0===n?void 0:n._id)&&tt((function(t){return{product:null===t||void 0===t?void 0:t.product}}))}),[null===(e=J.product)||void 0===e?void 0:e._id,null===(n=J.variation)||void 0===n||null===(a=n.offer)||void 0===a?void 0:a._id]),(0,A.jsxs)(K,(0,u.Z)((0,u.Z)({fillWidth:!0,fillHeight:!0},b),{},{onSubmit:function(t){var e,n;t.preventDefault();var a=(0,u.Z)((0,u.Z)((0,u.Z)({},C().omit(null===J||void 0===J||null===(e=J.inventory)||void 0===e?void 0:e.price,["_id","createdAt","updatedAt","deletedAt","author","owner","list","product","variation"])),C().omit(J,["price"])),{},{origin:null===J||void 0===J||null===(n=J.inventory)||void 0===n?void 0:n.price,tempId:(0,Z.x0)(8),quantity:1});i&&i(a),r&&r()},children:[(0,A.jsx)(g.xB,{title:(0,s.t)("Select product"),onBackPress:r}),(0,A.jsxs)(M,{fillWidth:!0,flex:1,overflow:"hidden",children:[(0,A.jsx)(f.Z,{options:j,asStepper:!0,currentIndex:W}),(0,A.jsx)(m.ZP,(0,u.Z)((0,u.Z)({},ft),{},{isLoading:at}))]}),(0,A.jsx)(R,{padding:"8px",children:(0,A.jsx)(x.Z,{steps:j,onPrevPress:function(){return L()},onNextPress:function(){return E()},onCancelPress:0===W?r:void 0,canGoNext:bt,canSubmit:gt,submitButton:!0,currentIndex:W})})]}))}},7606:function(t,e,n){var a,o,i,r=n(168),l=n(9439),u=n(2360),d=n(8095),c=n(2928),v=n(2791),m=n(959),p=n(6522),s=n(4805),h=n(3329),f=(0,u.ZP)(d.ZP)(a||(a=(0,r.Z)(["\n  //min-height: 44px;\n  // border-top: 1px solid ",";\n  // border-bottom: 1px solid ",";\n"])),(function(t){return t.theme.modalBorderColor}),(function(t){return t.theme.modalBorderColor})),b=(0,u.ZP)(c.ZP)(o||(o=(0,r.Z)(["\n  padding-top: 0;\n  padding-bottom: 0;\n\n  flex: 1;\n\n  min-width: min-content;\n  height: 100%;\n"]))),g=(0,u.ZP)(c.ZP)(i||(i=(0,r.Z)(["\n  min-width: 34px;\n  height: 100%;\n  // color: ",";\n  // fill: ",";\n  // background-color: ",";\n  @media screen and (min-width: 480px) {\n    flex: 1;\n  }\n"])),(function(t){return t.theme.accentColor.base}),(function(t){return t.theme.accentColor.base}),(function(t){return t.theme.accentColor.light}));e.Z=function(t){var e=t.steps,n=t.currentIndex,a=void 0===n?0:n,o=t.onNextPress,i=t.onPrevPress,r=t.onCancelPress,u=t.onAcceptPress,d=t.canGoNext,c=void 0===d||d,w=t.canAccept,x=t.canSubmit,D=t.cancelButton,P=void 0===D||D,y=t.submitButton,B=void 0!==y&&y,S=t.acceptButton,C=t.arrowButtons,Z=void 0===C||C,k=t.isLoading,A=(0,s.useMediaQuery)({query:"(max-width: 768px)"}),_=(0,s.useMediaQuery)({query:"(max-width: 480px)"}),I=(0,v.useState)(a),j=(0,l.Z)(I,2),K=j[0],M=j[1],R=(0,v.useMemo)((function(){var t,n;return e&&e[K-1]?{label:null===(t=e[K-1])||void 0===t?void 0:t.label,value:null===(n=e[K-1])||void 0===n?void 0:n.value}:null}),[K,e]),W=(0,v.useMemo)((function(){var t,n;return e&&e[K+1]?{label:null===(t=e[K+1])||void 0===t?void 0:t.label,value:null===(n=e[K+1])||void 0===n?void 0:n.value}:null}),[K,e]),L=(0,v.useCallback)((function(){if(e)if(i){if(0===K)return void(r&&r());var t=K-1;i&&i({option:e[t],value:e[t].value,index:t})}else M((function(t){return 0===t?t:t-1}))}),[K,r,i,e]),E=(0,v.useCallback)((function(){if(e){if(o){var t=K+1;return t===e.length?u&&u():o({option:e[t],value:e[t].value,index:t})}M((function(t){return t+1===e.length?t+1:t}))}}),[K,u,o,e]);return(0,v.useEffect)((function(){m.sr.isNotUnd(a)&&M(a)}),[a]),(0,h.jsxs)(f,{fxDirection:"row",gap:8,fillWidth:!0,children:[P&&!A&&(0,h.jsx)(b,{variant:"defaultSmall",isLoading:k,onClick:r,children:(0,p.t)("Cancel")}),Z&&(0,h.jsx)(g,{variant:_?"onlyIconFilled":"filledSmall",icon:"SmallArrowLeft",onClick:L,disabled:k||!R,children:null===R||void 0===R?void 0:R.label}),Z&&(0,h.jsx)(g,{variant:_?"onlyIconFilled":"filledSmall",endIcon:"SmallArrowRight",onClick:E,disabled:k||!c||!W,children:null===W||void 0===W?void 0:W.label}),(B||S)&&(0,h.jsx)(b,{variant:"filledSmall",type:x&&B?"submit":"button",onClick:u,isLoading:k,disabled:x&&B?!x:!w,children:(0,p.t)("Accept")})]})}},4897:function(t,e,n){n.d(e,{SQ:function(){return d},E_:function(){return c},Dr:function(){return p},Cs:function(){return m},Y5:function(){return v},qo:function(){return s.qo},ni:function(){return s.ni},KS:function(){return s.KS}});var a=n(6522),o=n(3691),i=n(5481),r=n(959),l=n(755),u=n(3299),d=((0,i.Gg)(o.Hb),(0,r.H1)(o.Hb)),c=[{label:"Preview",value:l.Q.img_preview,required:!0},{label:"1x",value:l.Q.img_1x},{label:"2x",value:l.Q.img_2x},{label:"Webp",value:l.Q.webp}],v=[{top:{name:(0,a.t)("label"),getData:function(t){return null===t||void 0===t?void 0:t.label}},getImgPreview:function(t){var e,n;return t.images?null===(e=t.images)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.img_preview:void 0},width:"270px",action:"dataWithAvatar"},{top:{name:(0,a.t)("sku"),getData:function(t){return null===t||void 0===t?void 0:t.sku}},bottom:{name:(0,a.t)("barCode"),getData:function(t){return null===t||void 0===t?void 0:t.barCode}},width:"200px",action:"valueByPath"},{top:{name:(0,a.t)("type"),path:"type"},bottom:{name:(0,a.t)("status"),getData:function(t){return t.approved}},width:"100px",action:"status"},{top:{name:(0,a.t)("Price OUT"),align:"end",getData:function(t){var e;return(0,u.pU)(null===(e=t.price)||void 0===e?void 0:e.out)}},bottom:{name:(0,a.t)("Price IN"),align:"end",getData:function(t){var e;return(0,u.pU)(null===(e=t.price)||void 0===e?void 0:e.in)}},width:"150px",action:"valueByPath"},{top:{name:(0,a.t)("Variation label"),getData:function(t){var e;return(null===(e=t.variation)||void 0===e?void 0:e.label)||"---"}},bottom:{name:(0,a.t)("SKU"),getData:function(t){var e;return(null===(e=t.variation)||void 0===e?void 0:e.sku)||"---"}},width:"190px",action:"valueByPath"},{top:{name:(0,a.t)("Warehouse"),getData:function(t){var e;return null===(e=t.warehouse)||void 0===e?void 0:e.label}},bottom:{name:(0,a.t)("Code"),getData:function(t){var e;return null===(e=t.warehouse)||void 0===e?void 0:e.code}},width:"150px",action:"valueByPath"},{top:{name:"\u0411\u0440\u0435\u043d\u0434",path:"brand.label"},bottom:{name:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a",path:"manufacturer.name"},width:"150px",action:"valueByPath"},{top:{name:"\u041e\u043f\u0438\u0441",path:"description"},width:"150px",action:"valueByPath"},{top:{name:"\u041e\u043d\u043e\u0432\u0438\u0432",getData:function(t){var e,n,a;return null!==(e=null===t||void 0===t||null===(n=t.editor)||void 0===n||null===(a=n.user)||void 0===a?void 0:a.email)&&void 0!==e?e:"---"}},bottom:{name:"\u0410\u0432\u0442\u043e\u0440",getData:function(t){var e,n,a;return null!==(e=null===t||void 0===t||null===(n=t.author)||void 0===n||null===(a=n.user)||void 0===a?void 0:a.email)&&void 0!==e?e:"---"}},width:"150px",action:"valueByPath"},{top:{name:"\u041e\u043d\u043e\u0432\u043b\u0435\u043d\u043e",align:"center",path:"updatedAt"},bottom:{name:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e",align:"center",path:"createdAt"},width:"150px",action:"dateDbl"}],m=[{dataKey:"sku",label:"SKU"},{dataKey:"label",label:(0,a.t)("Label")},{dataKey:"barCode",label:(0,a.t)("Bar-code")},{dataKey:"status",label:(0,a.t)("Status")},{dataKey:"price",label:(0,a.t)("Price")}],p=[{dataKey:"sku",label:"SKU"},{dataKey:"label",label:(0,a.t)("Label")},{dataKey:"barCode",label:(0,a.t)("Bar-code")},{dataPath:"warehouse.code",label:(0,a.t)("Warehouse code")},{dataPath:"warehouse.label",label:(0,a.t)("Warehouse label")}],s=(n(4006),n(2517))},2517:function(t,e,n){n.d(e,{$4:function(){return p},KS:function(){return s},ni:function(){return c},qo:function(){return v}});var a=n(3433),o=n(2973),i=n(6522),r=n(5481),l=n(6981),u=n(3299),d={top:{name:(0,i.t)("updated"),align:"center",path:"updatedAt"},bottom:{name:(0,i.t)("created"),align:"center",path:"createdAt"},width:"150px",action:"dateDbl"},c=((0,r.Gg)(o.D),o.D.new,(0,i.t)(o.D.new),o.D.inWork,(0,i.t)(o.D.inWork),o.D.rejectedByCustomer,(0,i.t)(o.D.rejectedByCustomer),o.D.rejectedByManager,(0,i.t)(o.D.rejectedByManager),o.D.active,(0,i.t)(o.D.active),o.D.fulfilled,(0,i.t)(o.D.fulfilled),o.D.fulfilledWithRefund,(0,i.t)(o.D.fulfilledWithRefund),o.D.archived,(0,i.t)(o.D.archived),o.D.expired,(0,i.t)(o.D.expired),[{top:{name:"".concat((0,i.t)("Status")),getData:function(t){return t.status}},bottom:{name:(0,i.t)("Priority"),getData:function(t){return(0,i.t)("undefined")}},width:"150px",action:"status"},{top:{name:(0,i.t)("Total amount"),align:"end",getData:function(t){var e,n;return(0,u.pU)(null!==(e=null===(n=t.summary)||void 0===n?void 0:n.netto)&&void 0!==e?e:0)}},bottom:{name:(0,i.t)("Slots count"),align:"end",getData:function(t){var e,n;return(null===(e=t.slots)||void 0===e?void 0:e.length)||(null===(n=t.summary)||void 0===n?void 0:n.slotsCount)}},width:"120px",action:"numberWithSpaces"},{top:{name:(0,i.t)("Reference / Internal"),getData:function(t){var e;return null===t||void 0===t||null===(e=t.reference)||void 0===e?void 0:e.internal}},bottom:{name:(0,i.t)("Reference / External"),getData:function(t){var e;return null===t||void 0===t||null===(e=t.reference)||void 0===e?void 0:e.external}},width:"190px",action:"valueByPath"},{top:{name:(0,i.t)("Group"),getData:function(t){var e,n;return null===t||void 0===t||null===(e=t.group)||void 0===e||null===(n=e.reference)||void 0===n?void 0:n.internal}},bottom:{name:(0,i.t)("Strategy"),getData:function(t){var e;return null===t||void 0===t||null===(e=t.group)||void 0===e?void 0:e.strategy}},width:"180px",action:"valueByPath"},{top:{name:(0,i.t)("Customer"),getData:function(t){var e,n,a,o,i,r,l;return(null===(e=t.customer)||void 0===e?void 0:e.name)&&(null===(n=t.customer)||void 0===n||null===(a=n.name)||void 0===a?void 0:a.first)+" "+(null===(o=t.customer)||void 0===o||null===(i=o.name)||void 0===i?void 0:i.second)||(null===(r=t.customer)||void 0===r?void 0:r.label)&&(null===(l=t.customer)||void 0===l?void 0:l.label.base)||"--- ---"}},bottom:{name:(0,i.t)("Phone"),path:"customer.phone"},width:"180px",action:"valueByPath"},{top:{name:(0,i.t)("Receiver"),getData:function(t){var e,n,a,o,i,r,l;return(null===(e=t.receiver)||void 0===e?void 0:e.name)&&(null===(n=t.receiver)||void 0===n||null===(a=n.name)||void 0===a?void 0:a.first)+" "+(null===(o=t.receiver)||void 0===o||null===(i=o.name)||void 0===i?void 0:i.second)||(null===(r=t.receiver)||void 0===r?void 0:r.label)&&(null===(l=t.receiver)||void 0===l?void 0:l.label.base)||"--- ---"}},bottom:{name:(0,i.t)("Phone"),path:"receiver.phone"},width:"180px",action:"valueByPath"},{top:{name:(0,i.t)("Invoices")},width:"200px",action:"tags"},{top:{name:(0,i.t)("Payments")},width:"200px",action:"valueByPath"},{top:{name:(0,i.t)("Deliveries")},width:"200px",action:"valueByPath"},{top:{name:(0,i.t)("comment"),path:"comment"},width:"170px",action:"valueByPath"},{top:{name:(0,i.t)("Refunds")},width:"200px",action:"valueByPath"},{top:{name:(0,i.t)("Manager"),path:"manager.name"},bottom:{name:(0,i.t)("email"),path:"manager.email"},width:"180px",action:"valueByPath"},d]),v=[{label:"\u0414\u0430\u0442\u0430",dataPath:"eventDate",filter:!1,search:!1,sort:!0},{label:"\u041c\u0456\u0442\u043a\u0430",dataPath:"mark.label",filter:!1,search:!0,sort:!0},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",dataPath:"status",filter:!1,search:!1,sort:!0},{label:(0,i.t)("type"),dataPath:"type",filter:!1,search:!0,sort:!0},{label:(0,i.t)("amount"),dataPath:"total",filter:!1,search:!0,sort:!0},{label:"\u041e\u043d\u043e\u0432\u043b\u0435\u043d\u043e",dataPath:"createdAt",filter:!1,search:!1,sort:!0},{label:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e",dataPath:"updatedAt",filter:!1,search:!1,sort:!0}],m=["cashback","bonus","discount"];var p=[{top:{name:(0,i.t)("Offer label"),getData:function(t){var e;return null===(e=t.offer)||void 0===e?void 0:e.label}},bottom:{name:(0,i.t)("Variation label"),getData:function(t){var e;return null===(e=t.variation)||void 0===e?void 0:e.label}},action:"valueByPath",width:"210px"},{top:{name:(0,i.t)("Total amount"),getData:function(t){return t.netto}},bottom:{name:(0,i.t)("Total q-ty"),getData:function(t){return t.quantity}},action:"valueByPath",width:"125px"}].concat((0,a.Z)((0,l.yL)()),(0,a.Z)(m.map((function(t){return{top:{name:(0,i.t)(t),align:"end",getData:function(e){var n;return(0,u.pU)(null===e||void 0===e||null===(n=e[t])||void 0===n?void 0:n.amount)}},bottom:{name:(0,i.t)(t),align:"end",getData:function(e){var n;return(0,u.pU)(null===e||void 0===e||null===(n=e[t])||void 0===n?void 0:n.percentage)}},action:"valueByPath",width:"90px"}}))),[{top:{name:(0,i.t)("Offer sku"),getData:function(t){var e;return null===(e=t.offer)||void 0===e?void 0:e.sku}},bottom:{name:(0,i.t)("Variation sku"),getData:function(t){var e;return null===(e=t.variation)||void 0===e?void 0:e.sku}},action:"valueByPath",width:"150px"},{top:{name:(0,i.t)("Offer bar-code"),getData:function(t){var e;return null===(e=t.offer)||void 0===e?void 0:e.barCode}},bottom:{name:(0,i.t)("Variation bar-code"),getData:function(t){var e;return null===(e=t.variation)||void 0===e?void 0:e.barCode}},action:"valueByPath",width:"150px"},d]),s=p},758:function(t,e,n){n.d(e,{A7:function(){return i},QX:function(){return r},fK:function(){return u}});var a=n(6522),o=n(959),i=[{top:{name:(0,a.t)("label"),getData:function(t){return t.label}},bottom:{name:(0,a.t)("code"),getData:function(t){return t.code}},width:"220px",action:"valueByPath"},{top:{name:(0,a.t)("type"),getData:function(t){return null===t||void 0===t?void 0:t.type}},width:"125px",action:"valueByPath"},{top:{name:(0,a.t)("email"),path:"email"},bottom:{name:(0,a.t)("phone"),path:"phone"},width:"180px",action:"contacts"},{top:{name:(0,a.t)("Address"),getData:function(t){return t.address||"\u043d\u0435 \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043e"}},bottom:{name:"".concat((0,a.t)("longitude"),"/").concat((0,a.t)("latitude")),getData:function(t){var e,n;return"".concat(((null===(e=t.location)||void 0===e?void 0:e.longitude)||"---")+", "+((null===(n=t.location)||void 0===n?void 0:n.latitude)||"---"))}},width:"175px",action:"valueByPath"},{top:{name:(0,a.t)("Manager"),getData:function(t){var e,n;return"".concat((null===(e=t.manager)||void 0===e||null===(n=e.user)||void 0===n?void 0:n.name)||"---")}},bottom:{name:(0,a.t)("email"),getData:function(t){var e,n;return"".concat((null===(e=t.manager)||void 0===e||null===(n=e.user)||void 0===n?void 0:n.email)||"---")}},width:"150px",action:"valueByPath"},{top:{name:(0,a.t)("updated"),align:"center",path:"updatedAt"},bottom:{name:(0,a.t)("created"),align:"center",path:"createdAt"},width:"150px",action:"dateSimple"}],r=[{top:{name:(0,a.t)("variationLabel"),getData:function(t){var e;return null===(e=t.variation)||void 0===e?void 0:e.label}},getImgPreview:function(t){var e,n,a;return null!==(e=t.offer)&&void 0!==e&&e.images?null===(n=t.offer)||void 0===n||null===(a=n.images[0])||void 0===a?void 0:a.img_preview:""},width:"270px",action:"doubleDataWithAvatar"},{top:{name:(0,a.t)("sku"),getData:function(t){var e;return null===(e=t.variation)||void 0===e?void 0:e.sku}},bottom:{name:(0,a.t)("barCode"),getData:function(t){var e;return null===(e=t.variation)||void 0===e?void 0:e.barCode}},width:"200px",action:"valueByPath"},{top:{name:(0,a.t)("type"),path:"type"},bottom:{name:(0,a.t)("status"),path:"status"},width:"120px",action:"status"},{top:{name:"\u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c",align:"end",getData:function(t){return t.stock||0}},bottom:{name:"\u0420\u0435\u0437\u0435\u0440\u0432",align:"end",getData:function(t){return t.reserved||0}},width:"150px",action:"valueByPath"},{top:{name:"\u041e\u0447\u0456\u043a\u0443\u0454\u0442\u044c\u0441\u044f",align:"end",getData:function(t){return(null===t||void 0===t?void 0:t.awaiting)||0}},bottom:{name:"\u0412\u0442\u0440\u0430\u0447\u0435\u043d\u043e",align:"end",getData:function(t){return(null===t||void 0===t?void 0:t.lost)||0}},width:"150px",action:"valueByPath"},{top:{name:(0,a.t)("warehouse"),getData:function(t){var e;return null===(e=t.warehouse)||void 0===e?void 0:e.label}},bottom:{name:(0,a.t)("code"),getData:function(t){var e;return null===(e=t.warehouse)||void 0===e?void 0:e.code}},width:"170px",action:"valueByPath"},{top:{name:"\u041e\u043f\u0438\u0441",path:"description"},width:"190px",action:"valueByPath"},{top:{name:"\u0410\u0432\u0442\u043e\u0440",path:"author.name"},bottom:{name:"\u0415\u043c\u0435\u0439\u043b",path:"author.email"},width:"190px",action:"valueByPath"},{top:{name:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e",align:"center",path:"createdAt"},bottom:{name:"\u041e\u043d\u043e\u0432\u043b\u0435\u043d\u043e",align:"center",path:"updatedAt"},width:"150px",action:"dateSimple"}],l=[{top:{name:(0,a.t)("Price OUT"),align:"end",getData:function(t){var e;return(0,o.__)(Number((null===t||void 0===t||null===(e=t.price)||void 0===e?void 0:e.in)||0))}},bottom:{name:(0,a.t)("Price IN"),align:"end",getData:function(t){var e;return(0,o.__)(Number((null===t||void 0===t||null===(e=t.price)||void 0===e?void 0:e.out)||0))}},width:"170px",action:"valueByPath"},{top:{name:(0,a.t)("comment"),align:"start",path:"description"},width:"150px",action:"valueByPath"}],u=[{top:{name:(0,a.t)("batch")},width:"150px",action:"valueByPath"},{top:{name:(0,a.t)("warehouse"),getData:function(t){var e;return null===(e=t.warehouse)||void 0===e?void 0:e.label}},bottom:{name:(0,a.t)("code"),getData:function(t){var e;return null===(e=t.warehouse)||void 0===e?void 0:e.code}},width:"170px",action:"valueByPath"},{top:{name:(0,a.t)("Stock"),align:"end",getData:function(t){return t.stock||0}},bottom:{name:(0,a.t)("Reserved"),align:"end",getData:function(t){return t.reserved||0}},width:"150px",action:"valueByPath"},{top:{name:(0,a.t)("Awaiting"),align:"end",getData:function(t){return(null===t||void 0===t?void 0:t.awaiting)||0}},bottom:{name:(0,a.t)("Lost"),align:"end",getData:function(t){return(null===t||void 0===t?void 0:t.lost)||0}},width:"150px",action:"valueByPath"},{top:{name:(0,a.t)("updated"),align:"center",path:"updatedAt"},bottom:{name:(0,a.t)("created"),align:"center",path:"createdAt"},width:"150px",action:"dateSimple"}].concat(l)},755:function(t,e,n){n.d(e,{Q:function(){return a}});var a=function(t){return t.img_preview="img_preview",t.img_1x="img_1x",t.img_2x="img_2x",t.webp="webp",t}({})}}]);
//# sourceMappingURL=435.3cd3f396.chunk.js.map
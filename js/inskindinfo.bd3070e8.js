(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["inskindinfo"],{bea4:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("SectionTitle",{attrs:{title:e.sectionTitle}}),l("div",{staticClass:"content-card"},[l("div",{staticClass:"card-inner"},[l("div",{staticClass:"card-detail"},[l("Accordion",{attrs:{id:"inskindinfo-acc1",title:"保障內容"}},[l("TestTabulator",{attrs:{tableId:e.tableAcc1Id,columns:e.tableAcc1Columns,tableData:e.tableAcc1Data,checkId1:"inskindinfo-acc1-check1",checkId2:"inskindinfo-acc1-check2"}})],1),l("Accordion",{attrs:{id:"inskindinfo-acc2",title:"保障內容與其他相關資料"}},[l("Table",{attrs:{colNum:2,table:e.table1Data}})],1)],1)])])],1)},i=[],c=(l("99af"),l("b0c0"),l("96cf"),l("1da1")),n=l("ec26"),d=(l("bc3a"),l("4328"),{name:"InsKindInfo",beforeRouteEnter:function(e,t,l){l((function(e){e.$store.commit("setHistory",{name:t.name,path:t.path,id:Object(n["a"])()})}))},mounted:function(){console.log(this.insPolicyNumber)},computed:{insPolicyNumber:function(){return this.$store.state.insPolicyNumber}},watch:{insPolicyNumber:function(e,t){this.watchApiCall(),console.log("newVal: ".concat(e," \n oldVal: ").concat(t))}},methods:{watchApiCall:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("callApi");case 1:case"end":return e.stop()}}),e)})))()}},data:function(){return{sectionTitle:"保障險種資料",tableAcc1Id:"tableAcc1Id",tableAcc1Columns:[{title:"關係",field:"a"},{title:"產品簡稱",field:"b"},{title:"版數",field:"c"},{title:"社保",field:"d"},{title:"保額",field:"e"},{title:"狀態",field:"f"},{title:"職級",field:"g"},{title:"年齡",field:"h"},{title:"性別",field:"i"},{title:"年度",field:"j"},{title:"生效日期",field:"k"},{title:"每期保費",field:"l"},{title:"變更生效日",field:"m"}],tableAcc1Data:[],table1Data:[{key:"險種名稱",keyId:0,value:""},{key:"比例加費",keyId:1,value:""},{key:"單位保額",keyId:2,value:""},{key:"繳費終日",keyId:3,value:""},{key:"單位保費",keyId:4,value:""},{key:"展期終日",keyId:5,value:""},{key:"定額加費",keyId:6,value:""},{key:"生存保額",keyId:7,value:""},{key:"生效日期",keyId:8,value:""},{key:"基本附加",keyId:9,value:""},{key:"應繳費日",keyId:10,value:""},{key:"體位",keyId:11,value:""},{key:"增額繳清",keyId:12,value:""},{key:"原始保費",keyId:13,value:""},{key:"弱體代碼",keyId:14,value:""},{key:"加費年期",keyId:15,value:""},{key:"保險金額/保費",keyId:16,value:""},{key:"保障終期",keyId:17,value:""},{key:"每期保費",keyId:18,value:""},{key:"保障狀態",keyId:19,value:""},{key:"基本投資",keyId:20,value:""},{key:"生存到期",keyId:21,value:""},{key:"",keyId:22,value:""},{key:"年度目標",keyId:23,value:""}]}}}),o=d,k=l("2877"),u=Object(k["a"])(o,a,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=inskindinfo.bd3070e8.js.map
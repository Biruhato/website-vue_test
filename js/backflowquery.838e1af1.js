(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["backflowquery"],{"5bea":function(e,t,c){"use strict";c.r(t);var a=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("SectionTitle",{attrs:{title:e.sectionTitle}}),c("div",{staticClass:"content-card"},[c("div",{staticClass:"card-inner"},[c("div",{staticClass:"card-detail"},[c("Searchform",{attrs:{bar1:e.bar1}}),c("Accordion",{attrs:{id:"backflowquery-acc1",title:"新件保單"}},[c("TestTabulator",{attrs:{tableId:e.tableAcc1Id,columns:e.tableAcc1Columns,tableData:e.tableAcc1Data,checkId1:"backflowquery-acc1-check1",checkId2:"backflowquery-acc1-check2"}})],1),c("Accordion",{attrs:{id:"backflowquery-acc2",title:"舊件保單"}},[c("TestTabulator",{attrs:{tableId:e.tableAcc2Id,columns:e.tableAcc2Columns,tableData:e.tableAcc2Data,checkId1:"backflowquery-acc2-check1",checkId2:"backflowquery-acc2-check2"}})],1)],1)])])],1)},l=[],i=(c("99af"),c("b0c0"),c("96cf"),c("1da1")),n=c("ec26"),o=(c("bc3a"),c("4328"),{name:"BackflowQuery",beforeRouteEnter:function(e,t,c){c((function(e){e.$store.commit("setHistory",{name:t.name,path:t.path,id:Object(n["a"])()})}))},mounted:function(){console.log(this.insPolicyNumber)},computed:{insPolicyNumber:function(){return this.$store.state.insPolicyNumber}},watch:{insPolicyNumber:function(e,t){this.watchApiCall(),console.log("newVal: ".concat(e," \n oldVal: ").concat(t))}},methods:{watchApiCall:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("callApi");case 1:case"end":return e.stop()}}),e)})))()}},data:function(){return{sectionTitle:"回流關聯查詢",bar1:[{inputType:"textfield",inputName:"新件保單號碼",id:"newInsPolicyNo",placeholder:"新件保單號碼",value:"value1"},{inputType:"textfield",inputName:"舊件保單號碼",id:"oldInsPolicyNo",placeholder:"舊件保單號碼",value:"value2"},{inputType:"datepicker",inputName:"還本週年日",id:"backflowDate1",value:null}],tableAcc1Id:"tableAcc1Id",tableAcc1Columns:[{title:"保單號碼",field:"a"},{title:"新件險種",field:"b"},{title:"新件要保人",field:"c"},{title:"新件被保人",field:"d"}],tableAcc1Data:[],tableAcc2Id:"tableAcc2Id",tableAcc2Columns:[{title:"舊件保單",field:"a"},{title:"受益人姓名",field:"b"},{title:"還本週年日",field:"c"},{title:"實付金額",field:"d"}],tableAcc2Data:[]}}}),r=o,u=c("2877"),s=Object(u["a"])(r,a,l,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=backflowquery.838e1af1.js.map
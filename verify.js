function VERIFY(){}
VERIFY.DEFAULTS = {
	verifyForm:"verifyForm",
	onFocus:false,//是否添加聚焦事件
	onBlur:true,//是否添加失焦事件
	errorColor:'red',//错误的颜色
	rightColor:'green',//正确的颜色
	tipsLocation:'after',//tip的位置  before在输入框前面，after在输入框后面
	iconLocation:'after',//icon的位置  before在输入框前面，after在输入框后面
	tips:false,//是否显示提示
	icon:false,//是否显示icon
	border:"father",//father为父盒子边框变色，self未本身边框变色
	tipDefault:false,//初始是否显示提示
	rightIcon:"icon-dui",//正确的icon的class
	errorIcon:"icon-guanbi",//错误的icon的class
	submitBtn:"submit",//提交按钮的ID
	submitTip:function(){},
	submitAjax:function(){},
	verifyRules:[{
	// 	"Id":'userName',
	// 	"rules":'nameReg',//多个正则满足其中一个可以用|将其隔开
	// 	"minLength":3,
	// 	"maxLength":20,
	// 	ajax:{
	// 		Configuration:function(){
				// this.allocation = {
				// 	type:"get",
				// 	url:"data.json",
				//  cache:false
				// 	success:function(res){
				// 		debugger;
				// 		getdata(res);
				// 	}
				// }
	// 		},
	// 		followUp:function(data,thisId){
	// 			VERIFY.prototype.ajaxtips[thisId] = data.tips;
	// 			return data.verifyflag;
	// 		}
	// 	}
	// },{
	// 	"Id":'password',
	// 	"rules":'passwordReg',
	// 	"minLength":6,
	// 	"maxLength":20
	// },{
	// 	"Id":'passwordRe',
	// 	"equalTo":"password"
	// },{
	// 	"Id":'mobile',
	// 	"rules":'phoneReg',
	// 	ajax:{
	// 		Configuration:function(){
	// 			this.url = "/data.json";
	// 			this.type = "get";
	// 			this.data = {}
	// 		},
	// 		followUp:function(data,thisId){
	// 			VERIFY.prototype.ajaxtips[thisId] = data.tips;
	// 			return data.verifyflag;
	// 		}
	// 	}
	// },{
	// 	"Id":'email',
	// 	"rules":'emailReg',
	// 	ajax:{
	// 		Configuration:function(){
	// 			this.url = "/data.json";
	// 			this.type = "get";
	// 			this.data = {}
	// 		},
	// 		followUp:function(data,thisId){
	// 			VERIFY.prototype.ajaxtips[thisId] = data.tips;
	// 			return data.verifyflag;
	// 		}
	// 	}
	// },{
	// 	"Id":'mobileCode',
	// 	"minLength":4,
	// 	"maxLength":4,
	// 	"num":true
	// },{
	// 	"Id":'emailCode',
	// 	"minLength":4,
	// 	"maxLength":4,
	// 	"num":true
	// },{
	// 	"Id":'code',
	// 	"minLength":4,
	// 	"maxLength":4
	// },{
	// 	"Id":'chineseName',
	// 	"maxLength":10
	// },{
	// 	"Id":'IdCard',
	// 	"rules":'idCardReg'
	// },{
	// 	"Id":'detailLoc',
	// 	"minLength":0
	// },{
	// 	"Id":'seLoc',
	// 	"minLength":0
	// },{
	// 	"Id":'locP',
	// 	"select":true
	// },{
	// 	"Id":'locCity',
	// 	"select":true
	// },{
	// 	"Id":'seAgentTp',
	// 	"minLength":0
	// },{
	// 	"Id":'eMobile',
	// 	"rules":'eMobile'//手机或者邮箱
	}]
}
var verifyflag = {};
var required = document.getElementsByClassName("required");

VERIFY.prototype.getRequired = function(){
	for(var i = 0;i <required.length;i ++){
		if (!this.verifyForm.contains(required[i])) {continue;}
	}
}
VERIFY.prototype.setflag = function(){
	for(var i = 0;i < required.length;i ++){
		if (!this.verifyForm.contains(required[i])) {continue;}
		if (required[i].value == "") {
			verifyflag[required[i].id] = -1;
		}else{
			verifyflag[required[i].id] = 1;
		}
	}
}

var rules = {
	'nameReg':/^[a-zA-Z](\w|[-]|[\u4e00-\u9fa5]){1,}$/g,
	'passwordReg':/^([\w~!@#$%^&*()_+{}:"<>?\-=[\];\',.\/]){1,}$/g,
	'phoneReg':/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/g,
 	'emailReg':/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/g,
 	"chineseReg":/^[\u4e00-\u9fa5]{1,}$/g,
	'idCard1':/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/g,
	'idCard2':/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/g,
	"decimals":/^-?\d+\.\d+$/g,
	"num":/^\d+$/g,
	"decimalsO":/^-?\d+\.\d$/g,
	"decimalsT":/^-?\d+\.\d\d$/g
}
VERIFY.prototype.tips = {
	"userName":"请输入用户名",
	"password":"请输入密码",
	"passwordRe":"请再次输入密码",
	"mobile":"请输入手机号码",
	"email":"请输入邮箱",
	"mobileCode":"请输入手机验证码",
	"emailCode":"请输入邮箱验证码",
	"code":"请输入验证码",
	"chineseName":"请输入姓名",
	"IdCard":"请输入身份证号码",
	"detailLoc":"请输入详细联系地址",
	"seLoc":"请选择业务区域",
	"eMobile":"请输入手机号/邮箱",
	"eCode":"请输入手机验证码/邮箱验证码",
	"oldPassword":"请输入原密码",
	"company":"请输入公司名"
}
VERIFY.prototype.errortips = {
	"userName":"用户名错误",
	"password":"密码错误",
	"passwordRe":"再次输入密码错误",
	"mobile":"请填写正确格式的手机号码",
	"email":"邮箱错误",
	"mobileCode":"手机验证码错误",
	"emailCode":"邮箱验证码错误",
	"code":"验证码错误",
	"chineseName":"姓名错误",
	"IdCard":"身份证号码错误",
	"detailLoc":"详细联系地址错误",
	"seLoc":"业务区域错误",
	"eMobile":"手机号/邮箱错误",
	"eCode":"手机验证码/邮箱验证码错误",
	"oldPassword":"原密码输入错误",
	"company":"请填写需要入驻的公司名称，长度不超过30个汉字",
	"name":"请填写真实的联系人姓名，长度不超过10个汉字",
	"project":"建议使用汉字、字母、数字和符号任意组合，长度不超过30个字符",
	"totalAmount":"大值不超过9999999.999万千瓦时",
	"purchase":"起购电量不能大于总电量",
	"addAmount":"最大值不超过99999.999万千瓦时",
	"time":"用电时长不超过15年",
	"powerMax":"担保的电量不能大于总电量",
	"reducingPay":"最大值10亿元",
	"excessivePay":"最大值10亿元",
	"reducing":"价差不能超过99.9999，最小值为0",
	"excessive":"价差不能超过99.9999，最小值为0"
}
VERIFY.prototype.righttips = {
	"userName":"用户名正确",
	"password":"密码正确",
	"passwordRe":"再次输入密码正确",
	"mobile":"手机号码输入正确",
	"email":"邮箱正确",
	"mobileCode":"手机验证码正确",
	"emailCode":"邮箱验证码正确",
	"code":"验证码正确",
	"chineseName":"姓名正确",
	"IdCard":"身份证号码正确",
	"detailLoc":"详细联系地址正确",
	"seLoc":"业务区域正确",
	"eMobile":"手机号/邮箱正确",
	"eCode":"手机验证码/邮箱验证码正确",
	"oldPassword":"原密码输入正确",
	// "company":"公司名正确",
	"name":"联系人姓名输入正确"
}
VERIFY.prototype.nonetips = {
	"userName":"用户名不能为空",
	"password":"密码不能为空",
	"passwordRe":"再次输入密码不能为空",
	"mobile":"手机号码不能为空",
	"email":"邮箱不能为空",
	"mobileCode":"手机验证码不能为空",
	"emailCode":"邮箱验证码不能为空",
	"code":"验证码不能为空",
	"chineseName":"姓名不能为空",
	"IdCard":"身份证号码不能为空",
	"detailLoc":"详细联系地址不能为空",
	"seLoc":"业务区域正确不能为空",
	"eMobile":"手机号/邮箱不能为空",
	"eCode":"手机验证码/邮箱验证码不能为空",
	"oldPassword":"原密码不能为空",
	"company":"请填写需要入驻的公司名称，长度不超过30个汉字",
	"name":"请填写真实的联系人姓名，长度不超过10个汉字",
	"project":"建议使用汉字、字母、数字和符号任意组合，长度不超过30个字符",
	"totalAmount":"大值不超过9999999.999万千瓦时",
	"purchase":"起购电量不能大于总电量",
	"addAmount":"最大值不超过99999.999万千瓦时",
	"time":"用电时长不超过15年",
	"powerMax":"担保的电量不能大于总电量",
	"reducingPay":"最大值10亿元",
	"excessivePay":"最大值10亿元",
	"reducing":"价差不能超过99.9999，最小值为0",
	"excessive":"价差不能超过99.9999，最小值为0",
	"difPrice":"价差不能超过99.9999，最小值为0"
}
VERIFY.prototype.ajaxtips = {
	"userName":"用户名ajax验证错误",
	"password":"密码ajax验证错误",
	"passwordRe":"再次输入密码ajax验证错误",
	"mobile":"手机号码ajax验证错误",
	"email":"邮箱ajax验证错误",
	"mobileCode":"手机验证码ajax验证错误",
	"emailCode":"邮箱验证码ajax验证错误",
	"code":"验证码ajax验证错误",
	"chineseName":"姓名ajax错误",
	"IdCard":"身份证号码ajax错误",
	"detailLoc":"详细联系地址ajax错误",
	"seLoc":"业务区域ajax错误",
	"eMobile":"手机号/邮箱ajax错误",
	"eCode":"手机验证码/邮箱验证码ajax错误",
	"oldPassword":"原密码ajax错误",
	"company":"公司名ajax错误"
}

// var verifyForm = document.getElementById(VERIFY.DEFAULTS.verifyForm);

VERIFY.prototype.num = function(){
	var ru = this.DEFAULTS.verifyRules;
	for(var j = 0;j < ru.length;j ++){
		if (ru[j].num) {
			var re = document.getElementById(ru[j].Id);
			re.onkeyup = function(){
				this.value=this.value.replace(/\D/g,'');
			}
			re.onafterpaste = function(){
				this.value=this.value.replace(/\D/g,'');
			}
		}
	}
}
VERIFY.prototype.onFocus = function(){
	for(var i = 0;i < required.length;i ++){
		if (!this.verifyForm.contains(required[i])) {continue;}
		(function(n){
			required[n].onfocus = function(){
				debugger;
			}
		})(i);
	}
}
VERIFY.prototype.onBlur = function(){
	var self = this;
	for(var i = 0;i < required.length;i ++){
		if (!this.verifyForm.contains(required[i])) {continue;}
		(function(n){
			required[n].dataset.index = n;
			if (required[n].getAttribute("select") == "selected") {
				required[n].onchange = function(){
					var ru = self.DEFAULTS.verifyRules;
					for(var j = 0;j < ru.length;j ++){
						if(ru[j].Id !== this.id){continue;}
						self.init(ru[j],this.value,n)
					}
				}
			}else{
				required[n].onblur = function(){
					var ru = self.DEFAULTS.verifyRules;
					for(var j = 0;j < ru.length;j ++){
						if(ru[j].Id !== this.id){continue;}
						self.init(ru[j],this.value,n)
					}
				}
			}
		})(i);
	}
}
VERIFY.prototype.addtips = function(){
	for (var i = 0; i < required.length; i++) {
		if (!this.verifyForm.contains(required[i])) {continue;}
		var dd = document.createElement("span");
		dd.className = "remarks tips";
		if(this.DEFAULTS.tipDefault){
			dd.innerHTML = this.tips[required[i].id];
		}
		if (this.DEFAULTS.tipsLocation === "before") {
			required[i].parentNode.parentNode.insertBefore(dd,required[i].parentNode);
		}else{
			required[i].parentNode.parentNode.insertBefore(dd,null);
		}	
		
	}
}
VERIFY.prototype.icon = function(){
	for (var i = 0; i < required.length; i++) {
		if (!this.verifyForm.contains(required[i])) {continue;}
		var ff = document.createElement("span");
		var dd = document.createElement("i");
		ff.className = "register-icon";
		dd.className = "tipIcon";
		ff.appendChild(dd);
		if (this.DEFAULTS.iconLocation === "before") {
			required[i].parentNode.parentNode.insertBefore(ff,required[i].parentNode);
		}else{
			required[i].parentNode.parentNode.insertBefore(ff,null);
		}	
	}
}
VERIFY.prototype.init = function(n,thisValue,index){
	for(var key in n){
		if (key === "rules") {
			var arr = n.rules.split("|");
			var p = [];
			var m = false;
			for(var i = 0;i < arr.length;i ++){
				p[i] = this["regTest"](thisValue,n.Id,index,arr[i]);
			}
			for(var j = 0;j < p.length;j ++){
				m = m|p[j];
			}
			verifyflag[n.Id] = 0;
			if(!m){return;}
			this.rightStyle(n.Id,index,this.righttips);
		}
		if(key === "maxLength"){
			var p = this[key+"Test"](thisValue,n.Id,index,n[key]);
			verifyflag[n.Id] = 0;
			if(!p){return;}
		}
		if(key === "minLength"){
			var p = this[key+"Test"](thisValue,n.Id,index,n[key]);
			verifyflag[n.Id] = 0;
			if(!p){return;}
		}
		if(key === "equalTo"){
			var p = this[key+"Test"](thisValue,n.Id,index,n[key]);
			verifyflag[n.Id] = 0;
			if(!p){return;}
		}
		if (key === "select") {
			var p = this.selectTest(thisValue,n.Id,index,n[key]);
			verifyflag[n.Id] = 0;
			if(!p){return;}
		}
		if (key === "ajax") {
			this[key+"Test"](thisValue,n.Id,index,n[key].Configuration);
			verifyflag[n.Id] = 0;
			window.getdata = function(data){
		        var p = n.ajax.followUp(data,n.Id);
				if (p) {
					this.rightStyle(n.Id,index,this.righttips);
				}else{
					this.errorStyle(n.Id,index,this.ajaxtips);
				}
			}
		}
		if (key === "maxNum") {
			var p = this[key+"Test"](thisValue,n.Id,index,n[key]);
			verifyflag[n.Id] = 0;
			if(!p){return;}
		}
		if (key === "minNum") {
			var p = this[key+"Test"](thisValue,n.Id,index,n[key]);
			verifyflag[n.Id] = 0;
			if(!p){return;}
		}
		if (key === "lessThen") {
			var p = this[key+"Test"](thisValue,n.Id,index,n[key]);
			verifyflag[n.Id] = 0;
			if(!p){return;}
		}
	}
	verifyflag[n.Id] = 1;
}
VERIFY.prototype.errorStyle = function(thisId,index,thisTip) {
	if (this.DEFAULTS.border == 'father') {
		var list = document.getElementById(thisId).parentNode;
	}else if(this.DEFAULTS.border == 'self'){
		var list = document.getElementById(thisId);
	}
	list.style.borderColor = this.DEFAULTS.errorColor;
	var dd = document.getElementsByClassName("tipIcon")[index];
	if(dd){
		dd.className = "iconfont tipIcon "+this.DEFAULTS.errorIcon;
		dd.style.color = this.DEFAULTS.errorColor;
	}
	var tt = document.getElementsByClassName("tips")[index];
	if(tt){
		if (thisTip[thisId] === undefined) {tt.innerHTML="";return;}
		tt.innerHTML = thisTip[thisId];
		tt.style.color = this.DEFAULTS.errorColor;
	}
}
VERIFY.prototype.rightStyle = function(thisId,index,thisTip) {
	if (this.DEFAULTS.border == 'father') {
		var list = document.getElementById(thisId).parentNode;
	}else if (this.DEFAULTS.border == 'self'){
		var list = document.getElementById(thisId);
	}
	// list.className = list.className.replace(/error/g,"");
	list.style.borderColor = this.DEFAULTS.rightColor;
	var dd = document.getElementsByClassName("tipIcon")[index];
	if(dd){
		dd.className = "iconfont tipIcon "+this.DEFAULTS.rightIcon;
		dd.style.color = this.DEFAULTS.rightColor;
	}
	var tt = document.getElementsByClassName("tips")[index];
	if(tt){
		if (thisTip[thisId] === undefined) {tt.innerHTML="";return;}
		tt.innerHTML = thisTip[thisId];
		tt.style.color = this.DEFAULTS.rightColor;
	}
}
VERIFY.prototype.regTest = function(nameValue,thisId,index,reg){
	if(nameValue === ""){
		this.errorStyle(thisId,index,this.nonetips);
		return false;
	}
	if (nameValue.match(rules[reg]) === null) {
		this.errorStyle(thisId,index,this.errortips);
		return false;
	}else{
		this.rightStyle(thisId,index,this.righttips);
		return true;
	}
}
VERIFY.prototype.eMobileTest = function(eMoValue,thisId,index){
	if(eMoValue === ""){
		this.errorStyle(thisId,index,this.nonetips);
		return false;
	}
	if (eMoValue.match(rules.emailReg) === null&&eMoValue.match(rules.phoneReg) === null) {
		this.errorStyle(thisId,index,this.errortips);
		return false;
	}else{
		this.rightStyle(thisId,index,this.righttips);
		return true;
	}
}
VERIFY.prototype.maxLengthTest = function(maxValue,thisId,index,max){
	if(maxValue === ""){
		this.errorStyle(thisId,index,this.nonetips);
		return false;
	}
	if (maxValue.length > max) {
		this.errorStyle(thisId,index,this.errortips);
		return false;
	}else{
		this.rightStyle(thisId,index,this.righttips);
		return true;
	}
}
VERIFY.prototype.maxNumTest = function(maxValue,thisId,index,max){
	if(maxValue === ""){
		this.errorStyle(thisId,index,this.nonetips);
		return false;
	}
	if (parseInt(maxValue) > parseInt(max)) {
		this.errorStyle(thisId,index,this.errortips);
		return false;
	}else{
		this.rightStyle(thisId,index,this.righttips);
		return true;
	}
}
VERIFY.prototype.minNumTest = function(minValue,thisId,index,min){
	if(maxValue === ""){
		this.errorStyle(thisId,index,this.nonetips);
		return false;
	}
	if (parseInt(minValue) < parseInt(min)) {
		this.errorStyle(thisId,index,this.errortips);
		return false;
	}else{
		this.rightStyle(thisId,index,this.righttips);
		return true;
	}
}
VERIFY.prototype.minLengthTest = function(minValue,thisId,index,min){
	if(minValue === ""){
		this.errorStyle(thisId,index,this.nonetips);
		return false;
	}
	if (minValue.length < min) {
		this.errorStyle(thisId,index,this.errortips);
		return false;
	}else{
		this.rightStyle(thisId,index,this.righttips);
		return true;
	}
}
VERIFY.prototype.equalToTest = function(eqValue,thisId,index,eqTo){
	var paV = document.getElementById(eqTo);
	if(eqValue === ""){
		this.errorStyle(thisId,index,this.nonetips);
		return false;
	}
	if (eqValue !== paV.value) {
		this.errorStyle(thisId,index,this.errortips);
		return false;
	}else{
		this.rightStyle(thisId,index,this.righttips);
		return true;
	}
}
VERIFY.prototype.lessThenTest = function(lessValue,thisId,index,lessTo){
	var paV = document.getElementById(lessTo);
	if(parseInt(lessValue) === ""){
		this.errorStyle(thisId,index,this.nonetips);
		return false;
	}
	if (parseInt(lessValue) > parseInt(paV.value)) {
		this.errorStyle(thisId,index,this.errortips);
		return false;
	}else{
		this.rightStyle(thisId,index,this.righttips);
		return true;
	}
}
VERIFY.prototype.numTest = function(eqValue,thisId,index){
	if(eqValue === ""){
		this.errorStyle(thisId,index,this.nonetips);
		return false;
	}
	if (eqValue.match(/^\d{0,}$/) === null) {
		this.errorStyle(thisId,index,this.errortips);
		return false;
	}else{
		this.rightStyle(thisId,index,this.righttips);
		return true;
	}
}
VERIFY.prototype.selectTest = function(seValue,thisId,index){
	var selectIndex = document.getElementById(thisId).options.selectedIndex;
	if (selectIndex == 0) {
		this.errorStyle(thisId,index,this.errortips);
		return false;
	}else{
		this.rightStyle(thisId,index,this.righttips);
		return true;
	}
}
VERIFY.prototype.ajaxTest = function(thisValue,thisId,index,itAjax){
	var self = this;
	var configuration = new itAjax;
	// var _request = AjaxObject();
	// if(_request != null){
	//     _request.onreadystatechange = function(){
	//         console.log(_request.readyState+","+_request.status);
	//         if(_request.readyState==4&&_request.status==200){
	//         	var res = JSON.parse(_request.responseText);
	//         	getdata(res);
	//         }
	//     }
	// 	_request.open(configuration.type,configuration.url,true);
	// 	_request.setRequestHeader("Content-style","application/x-www-form-urlencoded;charset=utf-8");
	// 	_request.send(configuration.data)
	// }
	$.ajax(configuration.allocation);
}

VERIFY.prototype.Submit = function(){
	var submit = document.getElementById(this.DEFAULTS.submitBtn);
	var self = this;
	submit.onclick = function(){
		var tep = 0,tet = 0;
		for(var i = 0;i < required.length;i ++){
			if (!self.verifyForm.contains(required[i])) {continue;}
			if(verifyflag[required[i].id] === -1){
				self.errorStyle(required[i].id,i,self.tips);
				tep ++;
			}
			if(verifyflag[required[i].id] === 0){
				tet ++;
			}
		}
		self.DEFAULTS.submitTip();
		if (tep > 0||tet > 0) {return;}
		self.DEFAULTS.submitAjax();
	}
}


VERIFY.prototype.DEFAULTSIN = function(){
	this.verifyForm = document.getElementById(this.DEFAULTS.verifyForm);
	if (this.DEFAULTS.onFocus) {this.onFocus();}
	if (this.DEFAULTS.onBlur) {this.onBlur();}
	if (this.DEFAULTS.icon) {this.icon();}
	if (this.DEFAULTS.tips) {this.addtips();}
	this.num();
	this.setflag();
	this.Submit();
}
// VERIFY.prototype.DEFAULTSIN ();

// function AjaxObject(){
//    try{
//        return new window.XMLHttpRequest();
//    }catch(e){
//        try{
//            return new ActiveXObject("MSxml2.XMLHttp");
//        }catch (e){
//            try{
//                return new ActiveXObject("Microsoft.XMLHttp");
//            }catch (e){
//                throw new Error("XMLHttpRequest is not supported");
//                return null;
//            }
//        }
//    }
// }

var veriNewNum = 0;
var addDEFAULTS = function(defa){
	switch(veriNewNum){
		case 0:aa = new VERIFY();aa.DEFAULTS = defa;aa.DEFAULTSIN();veriNewNum ++;break;
		case 1:bb = new VERIFY();bb.DEFAULTS = defa;bb.DEFAULTSIN();veriNewNum ++;break;
		case 2:cc = new VERIFY();cc.DEFAULTS = defa;cc.DEFAULTSIN();veriNewNum ++;break;
		case 3:dd = new VERIFY();dd.DEFAULTS = defa;dd.DEFAULTSIN();veriNewNum ++;break;
		case 4:ee = new VERIFY();ee.DEFAULTS = defa;ee.DEFAULTSIN();veriNewNum ++;break;
		case 5:ff = new VERIFY();ff.DEFAULTS = defa;ff.DEFAULTSIN();veriNewNum ++;break;
		case 6:gg = new VERIFY();gg.DEFAULTS = defa;gg.DEFAULTSIN();veriNewNum ++;break;
		case 7:hh = new VERIFY();hh.DEFAULTS = defa;hh.DEFAULTSIN();veriNewNum ++;break;
		case 8:ii = new VERIFY();ii.DEFAULTS = defa;ii.DEFAULTSIN();veriNewNum ++;break;
		case 9:jj = new VERIFY();jj.DEFAULTS = defa;jj.DEFAULTSIN();veriNewNum ++;break;
		case 10:kk = new VERIFY();kk.DEFAULTS = defa;kk.DEFAULTSIN();veriNewNum ++;break;
		case 11:ll = new VERIFY();ll.DEFAULTS = defa;ll.DEFAULTSIN();veriNewNum ++;break;
		case 12:mm = new VERIFY();mm.DEFAULTS = defa;mm.DEFAULTSIN();veriNewNum ++;break;
		case 13:nn = new VERIFY();nn.DEFAULTS = defa;nn.DEFAULTSIN();veriNewNum ++;break;
		case 14:oo = new VERIFY();oo.DEFAULTS = defa;oo.DEFAULTSIN();veriNewNum ++;break;
		case 15:pp = new VERIFY();pp.DEFAULTS = defa;pp.DEFAULTSIN();veriNewNum ++;break;
		case 16:qq = new VERIFY();qq.DEFAULTS = defa;qq.DEFAULTSIN();veriNewNum ++;break;
		case 17:rr = new VERIFY();rr.DEFAULTS = defa;rr.DEFAULTSIN();veriNewNum ++;break;
		case 18:ss = new VERIFY();ss.DEFAULTS = defa;ss.DEFAULTSIN();veriNewNum ++;break;
		case 19:tt = new VERIFY();tt.DEFAULTS = defa;tt.DEFAULTSIN();veriNewNum ++;break;
		case 20:uu = new VERIFY();uu.DEFAULTS = defa;uu.DEFAULTSIN();veriNewNum ++;break;
		case 21:vv = new VERIFY();vv.DEFAULTS = defa;vv.DEFAULTSIN();veriNewNum ++;break;
		case 22:ww = new VERIFY();ww.DEFAULTS = defa;ww.DEFAULTSIN();veriNewNum ++;break;
		case 23:xx = new VERIFY();xx.DEFAULTS = defa;xx.DEFAULTSIN();veriNewNum ++;break;
		case 24:yy = new VERIFY();yy.DEFAULTS = defa;yy.DEFAULTSIN();veriNewNum ++;break;
		case 25:zz = new VERIFY();zz.DEFAULTS = defa;zz.DEFAULTSIN();veriNewNum ++;break;
		default:break;
	}
}

var decimalsArr = [];
var decimalsStr = "";
function decimals(self,num){
	decimalsStr = "";
	decimalsArr = self.value.split(".");
	if (!decimalsArr[1]) {return;}
	if (decimalsArr[1].length > num) {
		for (var i = 0; i < num; i++) {
			decimalsStr += decimalsArr[1][i];
		}
		self.value = decimalsArr[0]+"."+decimalsStr;
	}
}

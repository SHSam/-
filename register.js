//选项框修改
(function(){
	var thisSrc = 5;
	$("#xieyi-sub-img img").bind("click",function(){
		$(this).attr("src","img/chekbox_0"+thisSrc+".png");
		if (thisSrc === 5) {
			$("#xieyi-sub").attr("checked","");
			thisSrc = 3;
		}else{
			$("#xieyi-sub").attr("checked","checked");
			thisSrc = 5;
		}
	})
})();
var setCode = {
	setIt:function(){
	    var inp = document.getElementById('code');
	    var code = document.getElementById('show-code');
	    var submit = document.getElementById('submit');
	    var c = new KinerCode({
	        len: 4,//需要产生的验证码长度
	//        chars: ["1+2","3+15","6*8","8/4","22-15"],//问题模式:指定产生验证码的词典，若不给或数组长度为0则试用默认字典
	        chars: [
	            1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
	            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
	            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	        ],//经典模式:指定产生验证码的词典，若不给或数组长度为0则试用默认字典
	        question: false,//若给定词典为算数题，则此项必须选择true,程序将自动计算出结果进行校验【若选择此项，则可不配置len属性】,若选择经典模式，必须选择false
	        copy: false,//是否允许复制产生的验证码
	        bgColor: "",//背景颜色[与背景图任选其一设置]
	        bgImg: "",//若选择背景图片，则背景颜色失效
	        randomBg: false,//若选true则采用随机背景颜色，此时设置的bgImg和bgColor将失效
	        inputArea: inp,//输入验证码的input对象绑定【 HTMLInputElement 】
	        codeArea: code,//验证码放置的区域【HTMLDivElement 】
	        click2refresh: true,//是否点击验证码刷新验证码
	        false2refresh: true,//在填错验证码后是否刷新验证码
	        validateObj: inp,//触发验证的对象，若不指定则默认为已绑定的输入框inputArea
	        validateEven: "blur",//触发验证的方法名，如click，blur等
	        validateFn: function (result, code) {//验证               回调函数
	            if (result) {
                    verifyflag.code = 1;
                    aa.rightStyle("code",inp.getAttribute("data-index"),aa.righttips);
                    // alert('验证成功');
                } else {
                    if (this.opt.question) {
                         verifyflag.code = 0;
                         aa.errorStyle("code",inp.getAttribute("data-index"),aa.errortips);
                        // alert('验证失败:' + code.answer);
                    } else {
                         verifyflag.code = 0;
                         aa.errorStyle("code",inp.getAttribute("data-index"),aa.errortips);
                        // alert('验证失败:' + code.strCode);
                        // alert('验证失败:' + code.arrCode);
                    }
                }
	        }
	    });
	}
}
setCode.setIt();
var setVerify = {
	init:function(){
		this.setIt();
		this.changeWay();
	},
	setIt:function(){
		addDEFAULTS({
			verifyForm:"verifyForm",
			onFocus:false,//是否添加聚焦事件
			onBlur:true,//是否添加失焦事件
			errorColor:'red',//错误的颜色
			rightColor:'green',//正确的颜色
			tipsLocation:'after',//tip的位置  before在输入框前面，after在输入框后面
			iconLocation:'after',//icon的位置  before在输入框前面，after在输入框后面
			tips:true,//是否显示提示
			icon:true,//是否显示icon
			border:"father",//father为父盒子边框变色，self未本身边框变色
			tipDefault:false,//初始是否显示提示
			rightIcon:"icon-dui",//正确的icon的class
			errorIcon:"icon-guanbi",//错误的icon的class
			submitBtn:"submit",//提交按钮的ID
			submitTip:function(){},
			submitAjax:function(){
				alert("注册成功");
			},
			verifyRules:[{
				"Id":'userName',
				"rules":'nameReg',
				"minLength":3,
				"maxLength":20,
				ajax:{
					Configuration:function(){
						this.url = "/data.json";
						this.type = "get";
						this.data = {}
					},
					followUp:function(data,thisId){
						VERIFY.prototype.ajaxtips[thisId] = data.tips;
						return data.verifyflag;
					}
				}
			},{
				"Id":'password',
				"rules":'passwordReg',
				"minLength":6,
				"maxLength":20
			},{
				"Id":'passwordRe',
				"equalTo":"password"
			},{
				"Id":'mobile',
				"rules":'phoneReg',
				ajax:{
					Configuration:function(){
						this.url = "/data.json";
						this.type = "get";
						this.data = {}
					},
					followUp:function(data,thisId){
						VERIFY.prototype.ajaxtips[thisId] = data.tips;
						return data.verifyflag;
					}
				}
			},{
				"Id":'email',
				"rules":'emailReg',
				ajax:{
					Configuration:function(){
						this.url = "/data.json";
						this.type = "get";
						this.data = {}
					},
					followUp:function(data,thisId){
						VERIFY.prototype.ajaxtips[thisId] = data.tips;
						return data.verifyflag;
					}
				}
			},{
				"Id":'mobileCode',
				"minLength":4,
				"maxLength":4,
				"num":true
			},{
				"Id":'emailCode',
				"minLength":4,
				"maxLength":4,
				"num":true
			},{
				"Id":'code',
				"minLength":4,
				"maxLength":4
			}]
		})
	},
	changeWay:function(){
		verifyflag.email = 1;verifyflag.emailCode = 1;
		$(".change-way").click(function(event){
			$(this).parent().siblings(".register-box-list").removeClass("error");
			$(this).parent().siblings(".register-icon").find("i").attr("class","iconfont");
			$(this).parent().siblings(".tips").removeClass(".color-red");
			$(this).parent().siblings(".tips").text("");
			if (event.target.text === "邮箱验证") {
				$("#mobile").val("");
				$(".email-li").show();
				$(".mobile-li").hide();
				$(".note-li").hide();
				$(".e-note-li").show();//新加
				verifyflag.mobile = 1;verifyflag.mobileCode = 1;verifyflag.email = -1;verifyflag.emailCode = -1;
			}else{
				$("#email").val("");
				$(".email-li").hide();
				$(".mobile-li").show();
				$(".note-li").show();
				$(".e-note-li").hide();//新加
				verifyflag.mobile = -1;verifyflag.mobileCode = -1;verifyflag.email = 1;verifyflag.emailCode = 1;
			}
		})
	}
}
setVerify.init();

//扩展easyui表单的验证  
$.extend($.fn.validatebox.defaults.rules, {
	/* 必须和某个字段相等 */
	equalTo : {
		validator : function(value, param) {
			return $(param[0]).val() == value;
		},
		message : '字段不匹配'
	},
	// 密码复杂验证
	pwd : {
		validator : function(value) {
			var reg = new RegExp(
					'(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,20}');
			return reg.test(value);
		},
		message : '密码必须包含字母、数字、特殊字符，至少6个字符，最多20个字符！'
	},

	// 验证汉字
	CHS : {
		validator : function(value) {
			return /^[\u0391-\uFFE5]+$/.test(value);
		},
		message : '必须输入汉字！'
	},
	// 移动手机号码验证
	Mobile : {// value值为文本框中的值
		validator : function(value) {
			var reg = /^1[3|4|5|8|9]\d{9}$/;
			return reg.test(value);
		},
		message : '请正确输入手机号码！'
	},
	// 国内邮编验证
	ZipCode : {
		validator : function(value) {
			var reg = /^[0-9]\d{5}$/;
			return reg.test(value);
		},
		message : '请正确输入邮编！'
	},
	// 14位客户号验证
	CstmID : {
		validator : function(value) {
			var reg = /^[0-9]\d{13}$/;
			return reg.test(value);
		},
		message : '请输入14位客户协议号!'
	// missingMessage:'请输入数据'
	},
	// 验证查询量等
	Amount : {
		validator : function(value) {
			var reg = /^[0-9]\d{0,6}$/;
			return reg.test(value);
		}
	},
	// 验证金额
	Money : {
		validator : function(value) {
			var reg = /^[1-9]{1}\d*(\.\d{1,2})?$/;
			return reg.test(value);
		}
	},
	// 邮件号码验证
	Mail : {
		validator : function(value) {
			var reg = /^[A-Z0-9]{0,13}$/;
			return reg.test(value);
		}
	},
	// 身份证验证
	IDCard : {
		validator : function(value) {
			// var reg
			// =/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
			// var reg =
			// /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/i;
			var reg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
			return reg.test(value);
		},
		message : '请正确输入身份证号！'
	}
})

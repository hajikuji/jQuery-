// JavaScript Document
$(function() {
'use strict';
window.Validator = function(val, rule) {
//this.is_valid = function(){
//return true;
//};
/*rule= {
	max: 10,
	min:2
}
	
*/
this.is_valid = function(newVal) {
	var key;
	//;这坑我踩了一下午
	if(newVal !== undefined) {
		val = newVal;
	}
	
	/*如果不是必填项且用户未填写任何内容则直接判定为合法*/
	if(!rule.required && !val) {
	return true;
	}
	
	for(key in rule) {
	/*防止重复检查*/
	if (key === "required") {
	continue;
	}
	/*调用rule中想对应的方法*/
	var r = this['validate_' + key]();
	if(!r) {
	return false;
	} 
	}
	return true;
};
this.validate_max = function() {
	pre_max_min();
	return val <= rule.max;
};
this.validate_min = function() {
	pre_max_min();
	return val >= rule.min;
};
this.validate_maxLength = function() {
	pre_length();
	return val.length <= rule.maxLength;
};
this.validate_minLength = function() {
	pre_length();
	
	return val.length >= rule.minLength;
};
this.validate_numeric = function() {
	return $.isNumeric(val);
};
this.validate_required = function() {
var real = $.trim(val);
if(!real && real !== 0) {
return false;
} else {
return true;
}
};
this.validate_pattern = function() {
	var reg = new RegExp(rule.pattern);
	return reg.test(val);
};
/*用于This.valiedate_max或者this.validate_min的前置工作*/
function pre_max_min() {
	val = parseFloat(val);
}
/*用于this.valiedate_maxLength或者this.validate_minLength的前置工作*/
function pre_length() {
	val = val.toString();
}
/*用于this.valiedate_nullable的前置工作*/
//function pre_nullable() {
//	val = val.replace(/(^\s+)|(\s+$)/,"");
//}
};
});
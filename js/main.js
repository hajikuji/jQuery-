// JavaScript Document




/*验证*/
$(function() {
'use strict';
/*选中页面中所有的data-rule的input*/
var $inputs = $('[data-rule]'),
$form = $("#signup"),
inputs = [];
$inputs.each(function(key,val){
    /*解析每一个input的验证规则*/
    var tmp = new Input(val);
inputs.push(tmp);
})
$form.on('submit',function(e){
e.preventDefault();
$inputs.trigger('change');
for (var i = 0; i < inputs.length; i++) {
    var item = inputs[i];
    var r = item.validator.is_valid();
    if(!r) {
        alert('invalid');
        return;
    }
}
signup();
alert('valid');
})
function signup() {
    $.post('/api/signup',{"username":$inputs[0]});
}
});






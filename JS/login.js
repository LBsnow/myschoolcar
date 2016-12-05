/**
 * Created by GD on 2016/11/13.
 */

 $(function () {
 //      用户名判断的登录
 var login_number=document.getElementById("login_number");
 $(login_number).blur(function () {
 var $parent=$(this).parent();
 //          删除以前的提醒原素
 $parent.find(".tip").remove();
 //          取到value的同时去除空格
 if((this.value).trim()=="" || (this.value).trim().length<12){
 var error = "请正确输入";
 $parent.append("<span class='tip errorspan'>"+error+"</span>")
 }else{
 var correct = "输入正确";
 $parent.append("<span class='tip spanclass'>"+correct+"</span>")
 }
 });

 //      密码判断的登录
 var login_password=document.getElementById("login_password");
 $(login_password).blur(function () {
 var $parent = $(this).parent();
 $parent.find(".tipw").remove();
 if((this.value).trim()==""){
 var error = "密码不能为空";
 $parent.append("<span class='tipw errorspan'>"+error+"</span>")
 }else{
 var correct = "密码输入完成";
 $parent.append("<span class='tipw spanclass'>"+correct+"</span>")
 }
 });


 //      登录按钮js
 var btn = document.getElementById("btn");
 $(btn).click(function () {
     // 在表单提交前，对表单必须进行一次整体的验证，用trigger来触发blur事件
 $(".login-input").trigger("blur");
     // 获取错误dom元素的个数，如果个数为0，就是表单验证通过，大于0的话，即返回错误
 var numerror = $("form .errorspan").length;
 if(numerror){
 alert("登录不成功。是否输入不正确");
 return false;
 }
 alert("登录成功");
 });
 });
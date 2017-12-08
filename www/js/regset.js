// var user=document.getElementById('num');
// var word=document.getElementById('word');
// var again=document.getElementById('again');
// var regset=document.getElementById('regset');
// regset.onclick = function () {
//   var data='user='+num.value+'&word='+word.value;
//   var XML=new XMLHttpRequest();
//   XML.open('post','index.php?=cLogin$a=sign',true);
//   XML.setRequestHeader('Content-type',
//     'application/x-www-form-urlencoded');
//   XML.send(data);
//   XML.onreadystatechange=function () {
//     if (XML.status==200&&XML.readyState==4){
//       var data=XML.responseText;
//       var json=eval('('+data+')');
//       if (json.code==1){
//         alert(json.msg);
//         window.location.href='';
//       }else {
//         alert(json.msg);
//       }
//     }
//   }
// };
$(function () {
  console.log($('.l-reg #regset')[0]);
  $('.l-reg #regset').hover(function () {
    console.log($(this));
    $(this).css({'background':'#f00'});
  },function () {
    $(this).css({'background':''});
  });
  $('.l-reg #regset').on('click',function () {
    console.log('qqq');

    var use=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g;
    var user=use.test($('#num').val());
    var pass= $('#pass').val().length >= 6 ;
    var again =$('#pass').val() == $('#again').val();
    if (!user){
      alert('请输入正确的手机号');
    }
    if (!word){
      alert('密码不能少于6位');
    }
    if (!again){
      alert('请确认密码');
    }
//  ajax请求
    if (user && pass && again){
      $.ajax({
        type:"post",
        url:"http://10.0.29.80/demo/waterApp/www/php/index.php?a=Login&b=sign",
        async:true,
        dataType:'json',
        data:{
          'username':user.val(),
          'pass':pass.val()
        },
        success:function (data) {
          // alert(data.msg)
          console.log(data);
        }
      });
    }
  });

});




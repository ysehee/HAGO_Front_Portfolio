/*  로그인 버튼 누르면 '로그인 성공' 얼럿 창 뜨고 
'메인페이지로 가기' 누르면 인덱스 페이지로 이동하기 */
$('#login_btn').click(function(){
    Swal.fire({
        title : "로그인 되었습니다",
        text : "'OK' 버튼을 누르면 메인페이지로 이동합니다",
        icon  : "success",
    }).then(function(){
        $('#login_form').submit();
        location.replace("../HTML/1.%20index2_login.html")
    });

})
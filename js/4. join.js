// 회원가입 STEP 1

$('.phn_ctf').click(function(){
    location.replace("../HTML/6.%20join2.html")
})


// 회원가입 STEP 2

// 필수약관 전체 동의 기능

$("#agr_chk_all").click(function() {
    if($("#agr_chk_all").is(":checked")) $("input[name=agr_chk]").prop("checked", true);
    else $("input[name=agr_chk]").prop("checked", false);
});



// 아이디 중복확인 "사용할 수 있는 아이디입니다".
$('.id_chk').click(function(){
    let user_id = document.getElementById('user_id').value
    alert("아이디 " + user_id + "는(은) 사용할 수 있는 아이디입니다.")
})

// 비밀번호 입력창과 비밀번호 확인창의 값이 같을 때 // 입력할 때마다로 변경할 것★★★

$('#join_scs').click(function(){
    if($('#user_pw').val() == $('#user_pw_chk').val()){
        console.log("비밀번호 같음")
        $('.pw_chk_text').text("비밀번호가 일치합니다.")
        $('.pw_chk_text').css({
            color : 'blue'
        })
    }
    else{
        console.log("비밀번호 다름")
        $('.pw_chk_text').text("비밀번호가 일치하지 않습니다.")
        $('.pw_chk_text').css({
            color : 'red'
        })
    }
})




// 비밀번호 입력창과 비밀번호 확인창의 값이 다를 때




// 생년월일
$(document).ready(function(){            
    var now = new Date();
    var year = now.getFullYear();
    var mon = (now.getMonth() + 1) > 9 ? ''+(now.getMonth() + 1) : '0'+(now.getMonth() + 1); 
    var day = (now.getDate()) > 9 ? ''+(now.getDate()) : '0'+(now.getDate());           
    //년도 selectbox만들기               
    for(var i = 1900 ; i <= year ; i++) {
        $('#year').append('<option value="' + i + '">' + i + '년</option>');    
    }

    // 월별 selectbox 만들기            
    for(var i=1; i <= 12; i++) {
        var mm = i > 9 ? i : "0"+i ;            
        $('#month').append('<option value="' + mm + '">' + mm + '월</option>');    
    }
    
    // 일별 selectbox 만들기
    for(var i=1; i <= 31; i++) {
        var dd = i > 9 ? i : "0"+i ;            
        $('#day').append('<option value="' + dd + '">' + dd+ '일</option>');    
    }
    $("#year  > option[value="+year+"]").attr("selected", "true");        
    $("#month  > option[value="+mon+"]").attr("selected", "true");    
    $("#day  > option[value="+day+"]").attr("selected", "true");       
    
})





// 마케팅약관 전체 동의 기능

$("#mkt_chk_all").click(function() {
    if($("#mkt_chk_all").is(":checked")) $("input[name=mkt_chk]").prop("checked", true);
    else $("input[name=mkt_chk]").prop("checked", false);
});



/*  가입완료 버튼 누르면 '가입완료' 얼럿 창 뜨고 
'메인페이지로 가기' 누르면 인덱스2 페이지로 이동하기 */

$('#join_scs').click(function(event){
     
    if($('#user_id').val().length == 0){ //아이디 입력 검증
        event.preventDefault();
        $('.id_chk_text').text("아이디를 입력하세요.")
        $('.id_chk_text').css({
            color : 'red'
        })
        
    } 
    else if(($('#user_pw').val().length == 0)){ // 비밀번호 입력 검증
        event.preventDefault();
        $('.pw_chk_text').text("비밀번호를 입력하세요.")
        $('.pw_chk_text').css({
            color : 'red'
        })   
        
    }
    else if($('#user_name').val().length == 0){ //이름 입력 검증
        event.preventDefault();
        $('.name_chk_text').text("이름을 입력하세요.")
        $('.name_chk_text').css({
            color : 'red'
        })
        
    }
    else if($('#user_phn_no').val().length == 0){  //휴대폰번호 입력 검증
        event.preventDefault();
        $('.phn_no_chk_text').text("휴대폰 번호를 입력하세요.")
        $('.phn_no_chk_text').css({
            color : 'red'
        })
        
    }
    else{
        $('#join_form').submit()
            location.replace("../HTML/7.%20join3.html")
    }
})




// STEP 3

$('.go_to_main').click(function(){
    location.href=("..//HTML/1.%20index.html")
})
$('.go_to_login').click(function(){
    location.href=("..//HTML/4.%20login.html")
})
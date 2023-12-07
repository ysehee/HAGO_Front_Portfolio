////////////////////////////////////////////////////////////////////
////////////////////////////////네비////////////////////////////////
////////////////////////////////////////////////////////////////////

// 네비 메뉴 호버 시 메뉴명 글씨 색, 굵기 변경
$('.nav_ul > li').hover(function(){
    $(this).css({
        fontWeight : '900',
        color : '#003148',
        cursor: 'pointer'


    })
}
    ,function(){
        $(this).css({
            fontWeight : '400',
            color : '#6b6a6a'
        })
    }
)


// 네비 해당 요소 호버하면 해당 네비판 display flex (=block)

    $('.nav_li_women, .nav_pan_women').hover(
        function(){
            $('.nav_pan, .nav_pan_women').css({
                display : 'flex'
            })
        }
        ,function(){
            $('.nav_pan, .nav_pan_women').css({
                display : 'none'
            })
        }
        )

    $('.nav_li_men, .nav_pan_men').hover(
            function(){
                $('.nav_pan, .nav_pan_men').css({
                    display : 'flex'
                })
            }
            ,function(){
                $('.nav_pan, .nav_pan_men').css({
                    display : 'none'
                })
            }
            )
    $('.nav_li_life, .nav_pan_life').hover(
        function(){
            $('.nav_pan, .nav_pan_life').css({
                display : 'flex'
            })
        }
        ,function(){
            $('.nav_pan, .nav_pan_life').css({
                display : 'none'
            })
        }
        )

    $('.nav_li_elec, .nav_pan_electronics').hover(
            function(){
                $('.nav_pan, .nav_pan_electronics').css({
                    display : 'flex'
                })
            }
            ,function(){
                $('.nav_pan, .nav_pan_electronics').css({
                    display : 'none'
                })
            }
            )
    $('.nav_li_beauty, .nav_pan_beauty').hover(
        function(){
            $('.nav_pan, .nav_pan_beauty').css({
                display : 'flex'
            })
        }
        ,function(){
            $('.nav_pan, .nav_pan_beauty').css({
                display : 'none'
            })
        }
        )

    $('.nav_li_food, .nav_pan_food').hover(
            function(){
                $('.nav_pan, .nav_pan_food').css({
                    display : 'flex'
                })
            }
            ,function(){
                $('.nav_pan, .nav_pan_food').css({
                    display : 'none'
                })
            }
            )


// 네비판 안에 있는 요소들 호버 시 글씨색, 굵기 변경
$('.nav_pan_inner > ul > li').hover(function(){
    $(this).css({
        fontWeight : '900',
        color : '#003148',
        cursor: 'pointer'

    })
}
    ,function(){
        $(this).css({
            fontWeight : '400',
            color : '#000'
        })
    }
)






////////////////////////////////////////////////////////////////////
////////////////////////////저스트초이스/////////////////////////////
////////////////////////////////////////////////////////////////////


// 저스트 초이스 탭 호버 시 글자 css 추가

$('.just_tab > li').hover(function(){
    $(this).addClass('change_sg');
}
,function(){
    $('.just_tab > li').removeClass('change_sg'); 
}
)


// // 저스트 초이스 탭 클릭 시 , 저스트박스 다음 번째 걸로 변경

$(document).ready(function() {
$('.just_box').eq(0).css({left: 0});

let curr_idx=0;
let bn_count = $('.just_box').length;
let timer = 200; 
$('.just_btn_R').click(function(){
    // 나갈방
    $('.just_box').eq(curr_idx % bn_count).animate({
        left: '-100%'
    }, timer, "linear")

    // 들어올방
    $('.just_box').eq((curr_idx+1) % bn_count).css({
        left: '100%'
    }).animate({
        left: 0
    }, timer, "linear")

    // curr_idx++;
    curr_idx+=1;
    
});

$('.just_btn_L').click(function(){
    // 나갈방
    $('.just_box').eq(curr_idx % bn_count).animate({
        left: '100%'
    }, timer)

    // 들어올방
    $('.just_box').eq((curr_idx-1) % bn_count).css({
        left: '-100%'
    }).animate({
        left: 0
    }, timer)

    // curr_idx++;
    curr_idx-=1;
    
})
})








////////////////////////////////////////////////////////////////////
////////////////////////////////뉴인////////////////////////////////
////////////////////////////////////////////////////////////////////



// 뉴인 탭 호버 시 글자 css 추가

$('.new_in_tab > li').hover(function(){
    $(this).addClass('change_sg');
}
,function(){
    $('.new_in_tab > li').removeClass('change_sg'); 
}
)


//뉴인 탭 클릭 시 , 뉴인 다음 번째 걸로 변경

$(document).ready(function() {
$('.new_in_box').eq(0).css({left: 0});

let curr_idx=0;
let bn_count = $('.new_in_box').length;
let timer = 200; 
$('.new_in_btn_R').click(function(){
    // 나갈방
    $('.new_in_box').eq(curr_idx % bn_count).animate({
        left: '-100%'
    }, timer, "linear")

    // 들어올방
    $('.new_in_box').eq((curr_idx+1) % bn_count).css({
        left: '100%'
    }).animate({
        left: 0
    }, timer, "linear")

    // curr_idx++;
    curr_idx+=1;
    
});

$('.new_in_btn_L').click(function(){
    // 나갈방
    $('.new_in_box').eq(curr_idx % bn_count).animate({
        left: '100%'
    }, timer)

    // 들어올방
    $('.new_in_box').eq((curr_idx-1) % bn_count).css({
        left: '-100%'
    }).animate({
        left: 0
    }, timer)

    // curr_idx++;
    curr_idx-=1;
    
})
})



////////////////////////////////////////////////////////////////////
////////////////////////////////뉴 에디트////////////////////////////
////////////////////////////////////////////////////////////////////

// 좌,우 버튼 누르면 안에 있는 요소 움직이는 기능

let i1 = 1;
curr_pos_x = 0;

$('.new_ed_btn_R1').click(function(){
        if(curr_pos_x > -1000 && curr_pos_x <= 0){
        $('.new_ed_inner1').animate({
        left : -200 * i1
        })
        curr_pos_x = -200 * i1
        i1 = i1+1
        console.log(curr_pos_x)
        console.log(i)
    }
})

let j1= 1;
$('.new_ed_btn_L1').click(function(){
    if(curr_pos_x >= -1000 && curr_pos_x < 0 ){
        $('.new_ed_inner1').animate({
        left : curr_pos_x + (200 * j1)
        })
        curr_pos_x = curr_pos_x + (200 * j1)
        i1 = i1 - j1
        console.log(curr_pos_x)
        console.log(i)
        console.log(j)
    }
})

//////////////////////////////////////////////////////////////

let i2 = 1;
curr_pos_x = 0;

$('.new_ed_btn_R2').click(function(){
        if(curr_pos_x > -1000 && curr_pos_x <= 0){
        $('.new_ed_inner2').animate({
        left : -200 * i2
        })
        curr_pos_x = -200 * i2
        i2 = i2+1
        console.log(curr_pos_x)
        console.log(i)
    }
})

let j2= 1;
$('.new_ed_btn_L2').click(function(){
    if(curr_pos_x >= -1000 && curr_pos_x < 0 ){
        $('.new_ed_inner2').animate({
        left : curr_pos_x + (200 * j)
        })
        curr_pos_x = curr_pos_x + (200 * j2)
        i2 = i2 - j2
        console.log(curr_pos_x)
        console.log(i)
        console.log(j)
    }
})

////////////////////////////////////////////////////////////////

let i3 = 1;
curr_pos_x = 0;

$('.new_ed_btn_R3').click(function(){
        if(curr_pos_x > -1000 && curr_pos_x <= 0){
        $('.new_ed_inner3').animate({
        left : -200 * i3
        })
        curr_pos_x = -200 * i3
        i3 = i3+1
        console.log(curr_pos_x)
        console.log(i)
    }
})

let j= 1;
$('.new_ed_btn_L3').click(function(){
    if(curr_pos_x >= -1000 && curr_pos_x < 0 ){
        $('.new_ed_inner3').animate({
        left : curr_pos_x + (200 * j)
        })
        curr_pos_x = curr_pos_x + (200 * j3)
        i3 = i3 - j3
        console.log(curr_pos_x)
        console.log(i)
        console.log(j)
    }
})



////////////////////////////////////////////////////////////////////
////////////////////////단독판매 익스클루시브////////////////////////
////////////////////////////////////////////////////////////////////


/*
오른쪽 버튼 누르면 각 아이템 위치 이동

/*
정 가운데에 온 요소 (위치값 구하기)는 요소 크기 커지게 하기
정가운데에서 빠져나갔을 때 요소 크기 원상복귀

투명도 있는 판 만들기 , 정 가운데에 온 요소 z-index 필요
*/ 


let tmp_idx = 0;
$('.slide_btn_R').click(function(){
    // 커져있는 이미지를 원래크기로 돌려놓기
    $('.excl_item').eq((tmp_idx+2) % 8).css({
        transform: 'scale(1)',
        transition: 'transform 0.3s',
        zIndex: 'auto'
    })

    $('.excl_item').animate({
        left: '-=300' // -300
    }, 500)
    $('.excl_item').eq(tmp_idx%8).animate({
        left: '140%'
    },0)

    tmp_idx+=1;
    
    // 다 움직이고 크게 키우기
    setTimeout(function(){
        $('.excl_item').eq((tmp_idx+2) % 8).css({
            transform: 'scale(1.3)',
            transition: 'transform 0.3s',
            zIndex: 9
        })
    }, 500)


});
$('.slide_btn_L').click(function(){
    $('.excl_item').eq((tmp_idx+2) % 8).css({
        transform: 'scale(1)',
        transition: 'transform 0.3s',
        zIndex: 'auto'
    })

    tmp_idx-=1;
    
    $('.excl_item').eq(tmp_idx%8).animate({
        left: '-300'
    },0)
    $('.excl_item').animate({
        left: '+=300' // -300
    }, 500)

    
    setTimeout(function(){
        $('.excl_item').eq((tmp_idx+2) % 8).css({
            transform: 'scale(1.3)',
            transition: 'transform 0.3s',
            zIndex: 9
        })
    }, 500)
    
});



//  퀵메뉴 클릭시 해당 페이지로 이동

$('.q_login').click(function(){
    location.href=("..///HTML/4.%20login.html")
})
$('.q_join').click(function(){
    location.href=("..//HTML/5.%20join1.html")
})
$('.q_logout').click(function(){
    location.href=("..//HTML/1.%20index.html")
})



// 아이템 선택하면 디테일 화면으로 ㄱㄱ
$('.just_item').click(function(){
    location.href=("..//HTML/2.%20product_detail.html")
})
// 아이템 선택하면 디테일 화면으로 ㄱㄱ
$('.new_in_item').click(function(){
    location.href=("..//HTML/2.%20product_detail.html")
})
$('.excl_item').click(function(){
    location.href=("..//HTML/2.%20product_detail.html")
})
$('.new_ed_item').click(function(){
    location.href=("..//HTML/2.%20product_detail.html")
})
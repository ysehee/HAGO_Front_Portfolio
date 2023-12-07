/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// 탭 버튼 누르면 상세정보 영역 바뀌는 기능

let dtl_tab_area = [
    `<div class="tab_detail" id="tab_detail">
            <div class="item_no">상품번호 326251</div>
            <div class="dtl_img_area">
                <img src="../img/item_img/ETMON/326251/ETMON_326251_(1).jpg" alt="">
                <img src="../img/item_img/ETMON/326251/ETMON_326251_(2).jpg" alt="">
                <img src="../img/item_img/ETMON/326251/ETMON_326251_(3).jpg" alt="">
                <img src="../img/item_img/ETMON/326251/ETMON_326251_(4).jpg" alt="">
                <img src="../img/item_img/ETMON/326251/ETMON_326251_(5).jpg" alt="">
                <img src="../img/item_img/ETMON/326251/ETMON_326251_(6).jpg" alt="">
                <img src="../img/item_img/ETMON/326251/ETMON_326251_(7).jpg" alt="">
                <img src="../img/item_img/ETMON/326251/ETMON_326251_(8).jpg" alt="">
            </div>
            <div class="tab_dtl_desc">
            <div class="item_desc_top">
                <p>상품 일반 정보</p>
                <ul>
                    <li>상품번호</li>
                    <li>326251</li>
                </ul>
                <ul>
                    <li>브랜드</li>
                    <li>ETMON</li>
                </ul>
                <ul>
                    <li>원산지</li>
                    <li>국산(서울특별시 중구)</li>
                </ul>
            </div>
            <div class="item_desc_bot">
                <p>상품정보고시</p>
                <ul>
                    <li>제품 소재</li>
                    <li>상세페이지참조</li>
                </ul>
                <ul>
                    <li>색상</li>
                    <li>상세페이지참조</li>
                </ul>
                <ul>
                    <li>치수</li>
                    <li>상세페이지참조</li>
                </ul>
                <ul>
                    <li>제조자(수입자)</li>
                    <li>상세페이지참조</li>
                </ul>
                <ul>
                    <li>제조국</li>
                    <li>상세페이지참조</li>
                </ul>
                <ul>
                    <li>세탁방법 및 취급시 주의사항</li>
                    <li>상세페이지참조</li>
                </ul>
                <ul>
                    <li>제조연월</li>
                    <li>상세페이지참조</li>
                </ul>
                <ul>
                    <li>품질보증기준</li>
                    <li>상세페이지참조</li>
                </ul>
                <ul>
                    <li>A/S 책임자와 전화번호</li>
                    <li>상세페이지참조</li>
                </ul>
            </div>
            </div>
        </div>
    `,
    `<div class="tab_review" id="tab_review">
    <div class="all_review">전체 리뷰수 0</div>
    <div class="review_opt">
        <ul class="photo_riview">
            <li><img src="../img/icon/check-square.svg" alt=""></li>
            <li>포토리뷰</li>
        </ul>
        <ul class="show_order">
            <li>최신순</li>
            <li>별점 높은순</li>
            <li>별점 낮은순</li>
        </ul>
    </div>
    <div class="review_list">
        <div class="review_none">
            <div class="review_none_icon"></div>
            <p>등록된 리뷰가 아직 없습니다</p>
        </div>
    </div>
    
    
    </div>` ,
    `<div class="tab_qna" id="tab_qna">
    <div class="qna_txt">판매자에게 상품,배송,취소,교환,반품 등<br>궁금한 내용을 문의하세요 </div>
    <div class="qna_icon">상품 문의하기</div>
    <div class="qna_list">
        <div class="qna_none">
            <div class="qna_none_icon"></div>
            <p>등록된 문의가 없습니다</p>
        </div>
    </div>
    </div>` ,
    `<div class="tab_seller_info" id="tab_seller_info">
    <div class="tab_seller_desc">
        <div class="tab_seller_top">
            <p>배송 정보</p>
            <ul>
                <li>배송처</li>
                <li>업체배송</li>
            </ul>
            <ul>
                <li>배송택배사</li>
                <li>로젠(KGB)택배</li>
            </ul>
            <ul>
                <li>배송료</li>
                <li>3,000원</li>
            </ul>
            <ul>
                <li>배송출발일</li>
                <li>-</li>
            </ul>
        </div>
        <div class="tab_seller_bot">
            <p>반품업체 정보</p>
            <ul>
                <li>업체명</li>
                <li>ETMON</li>
            </ul>
            <ul>
                <li>상호/대표자</li>
                <li>박경일 외 1명</li>
            </ul>
            <ul>
                <li>연락처</li>
                <li>07041513231</li>
            </ul>
            <ul>
                <li>택배사</li>
                <li>로젠(KGB)택배</li>
            </ul>
            <ul>
                <li>반품배송비</li>
                <li>구매자 귀책 : 3,000원 (편도)</li>
            </ul>
            <ul>
                <li>반품지주소</li>
                <li>(4607) 서울특별시 중구 다산로 153 (희승빌딩) 2층(신당동,희승빌딩)</li>
            </ul>
        </div>
        <div class="tab_seller_bot">
            <p>교환/반품/환불/취소 안내</p>
            <ul class="h_lg">
                <li>교환/반품/환불</li>
                <li>
                    <p>교환/반품/환불 기간: 상품 수령 후 7일 이내 청약 철회(교환/반품)가 가능합니다(단, 재화 등의 내용이 표시ㆍ광고 내용과 다르거나 계약 내용과 다르게 이행된 때에는 당해 재화 등을 공급받은 날로부터 3월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 청약철회가 가능합니다)</p>
                    <p>교환/반품 방법: 마이페이지를 통해 접수 부탁 드립니다</p>
                    <p>교환/반품 처리 과정: [교환/반품신청내역]에서 확인 가능합니다</p>
                    <p>교환/반품비: 고객님의 단순 변심으로 인한 교환/반품의 경우 비용은 고객님 부담입니다</p>
                    <br>
                    <p>* 다음의 경우에 해당하는 교환/반품은 청약 철회가 제한됩니다</p>
                    <p>교환/반품 불가가 사전 고지된 일부 상품의 경우</p>
                    <p>시간의 경과에 따라 재판매가 곤란할 정도로 재화 등의 가치가 현저히 감소한 경우</p>
                    <p>복제가 가능한 재화 등의 포장이 훼손된 경우</p>
                    <p>소비자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우(단, 상품 확인을 위한 포장 훼손 제외)</p>
                    <p>소비자의 주문에 따라 개별적으로 생산되는 상품이 제작에 들어간 경우</p>
                </li>
            </ul>
            <ul class="h_sm">
                <li style="width: 13.2%;">취소</li>
                <li>
                    <p>모든 상품은 배송준비중 단계까지 취소 신청 가능합니다.</p>
                    <p>주문제작/해외배송 상품의 경우 취소 신청 후 판매자의 주문 취소 확인이 필요합니다.</p>
                </li>
            </ul>
        </div>
    </div>
    </div>`
    ]

    $('.dtl_tab_area').append(dtl_tab_area[0])

$('.dtl_menu > li').click(function(){
    $('.dtl_tab_area').empty()
    console.log(dtl_tab_area[$(this).index()])
    $('.dtl_tab_area').append(dtl_tab_area[$(this).index()])
})



/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

// 각 옵션이 모두 체크되면, 수량+상품금액 박스가 display : block

let color_selc =  false;
let size_selc =  false;

    $('.color_icon > input').click(function(){
        color_selc = true;
        optCheck();
    })
    
    $('.size_icon > input').click(function(){
        size_selc = true;
        optCheck();
    })

function optCheck(){
    
    if(color_selc == true && size_selc == true){
        $('.item_count_box').css({
            display : 'block'
        });

        let color_val = $("input:radio[name='color']:checked").val();
        let size_val = $("input:radio[name='size']:checked").val();
        $('.opt_v_txt').text(color_val +"  /  "+size_val)

        real_t_price.innerText = t_price_v.toLocaleString("ko");;
    }
    else {
        $('.item_count_box').css({
            display : 'none'
        });
    }
    
    
};

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

// 플러스/ 마이너스 버튼 누르면 수량 및 구매금액이 변동되는 기능


let each_price = document.getElementById('each_price');
let e_price_v = +218120;
each_price.innerText = e_price_v.toLocaleString("ko");

let t_price = document.getElementsByClassName('t_price')[0];
let t_price_v = e_price_v;
t_price.innerText = t_price_v.toLocaleString("ko");;

let real_t_price = document.getElementById('real_t_price')
let real_t_price_v = t_price_v.toLocaleString("ko");;

let qty_v = document.getElementsByClassName('qty_v')[0];
let qty_chk = true

if(qty_chk){
$('.o_qty_btn_R').click(function(){
    if(qty_v.value >= 0){
    qty_v.value = Number(qty_v.value)+1
    }

    t_price_v = Number(e_price_v) * qty_v.value
    t_price.innerText = t_price_v.toLocaleString("ko");;
    real_t_price.innerText = t_price_v.toLocaleString("ko");;
});
$('.o_qty_btn_L').click(function(){
    if(qty_v.value > 0){
    qty_v.value = Number(qty_v.value)-1
    }
    t_price_v = Number(e_price_v) * qty_v.value
    t_price.innerText = t_price_v.toLocaleString("ko");;
    real_t_price.innerText = t_price_v.toLocaleString("ko");;
})
}


/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// 장바구니 & 구매하기 버튼 눌렀을 때 뜨는 얼럿 창

$('.cart').click(function(){
    Swal.fire({
        title : "상품이 장바구니에 담겼습니다",
        icon  : "success",
    })
})

$('.pay').click(function(){
    Swal.fire({
        title : "구매가 완료되었습니다",
        icon  : "success",
    })
})


// 라이크 눌렀을 때 하트이미지 투명도 변경

let like = document.getElementsByClassName('like')[0];

like.addEventListener('click', function(){

    if(like.classList.contains('heart_fill')){
        like.classList.remove('heart_fill');
        like.classList.add('heart');
    }
    else{
        like.classList.remove('heart');
        like.classList.add('heart_fill');

        }
})







































// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// 작은 이미지 선택하면 큰 이미지 변동되는 기능










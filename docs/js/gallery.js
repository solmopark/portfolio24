// folder-image
function Folder__Image(){
    const $gallery1 = document.getElementById("gallery-1");
    const gallery1 = window.lightGallery($gallery1, {
        download : false,
        dynamic: true,
        plugins: [lgZoom, lgVideo, lgThumbnail],
        dynamicEl: [
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-banner01.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-banner01.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Main banner / 제작 100% </h4>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-banner02.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-banner02.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Subpage banner / 제작 100% </h4>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-banner03.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-banner03.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Event banner / 제작 100% </h4>
                        </div>`
            }
        ]
    });
    $gallery1.addEventListener("click", () => {
        gallery1.openGallery(0);
    });
    
    const $gallery2 = document.getElementById("gallery-2");
    const gallery2 = window.lightGallery($gallery2, {
        download : false,
        dynamic: true,
        plugins: [lgZoom, lgVideo, lgThumbnail],
        dynamicEl: [
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-card01.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-card01.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Card News 1</h4>
                            <p>제작 100% / 원고 제공 : 기관</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-card02.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-card02.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Card News 2</h4>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-card03.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-card03.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Card News 3</h4>
                            <p> 제작 100% / 원고 제공 : 기관</p>
                        </div>`
            }
        ]
    });
    $gallery2.addEventListener("click", () => {
        gallery2.openGallery(0);
    });
    
    const $gallery3 = document.getElementById("gallery-3");
    const gallery3 = window.lightGallery($gallery3, {
        download : false,
        dynamic: true,
        plugins: [lgZoom, lgVideo, lgThumbnail],
        dynamicEl: [
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design04.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design04.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>visual 1</h4>
                            <p> 월호별 테마 제작 100% / CI 테마에 맞게 수정하여 활용 </p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design05.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design05.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>visual 2</h4>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design06.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design06.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>visual 3</h4>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design01.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design01.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>주제별 디자인 / 제작 100%</h4>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design02.png",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design02.png", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>주제별 디자인 / 제작 100%</h4>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design03.png",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design03.png", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>소식 주제별 디자인</h4>
                            <p>제작 100% / 원고 제공 : 기관</p>
                        </div>`
            }
        ]
    });
    
    $gallery3.addEventListener("click", () => {
        gallery3.openGallery(0);
    });
    
    const $gallery4 = document.getElementById("gallery-4");
    const gallery4 = window.lightGallery($gallery4, {
        download : false,
        dynamic: true,
        plugins: [lgZoom, lgVideo, lgThumbnail],
        dynamicEl: [
            { 
                src:
                    "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine08.png",  
                thumb:
                    "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine08.png", 
                subHtml: `<div class="lightGallery-captions">
                                <h4>사보 활용 웹진 적용</h4>
                                <p>웹진 코딩 / 월호 발행 / 네이버 포스팅 / 이벤트 폼 및 배너 / 애널리틱스 결과보고서 </p>
                            </div>`
                },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine05.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine05.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>비주얼 웹진 적용</h4>
                            <p>메인비주얼 제작 / 웹진 및 뉴스레터 코딩 / 월호 발행 / Tason 예약발행 / 카카오톡 채널 운영 등</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine03.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine03.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>소식별 디자인 웹진 적용</h4>
                            <p>메인배너 제작 / 소식별 디자인 제작 / 웹진 코딩 / 월호 발행</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine01.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine01.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>이벤트 웹진 적용</h4>
                            <p>이벤트 기획안 및 포스터 제작</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine06.png",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine06.png", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>컨텐츠별 PSD 제작 후 웹진 적용</h4>
                            <p> 카드뉴스 3건 / 웹진작업 / 격월 발행</p>
                        </div>`
            },
            
            {
                src:
                    "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine07.png",  
                thumb:
                    "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine07.png", 
                subHtml: `<div class="lightGallery-captions">
                                <h4>사보 활용 웹진 적용</h4>
                                <p>카드뉴스 1건 / 웹진작업 / 월호 발행</p>
                            </div>`
                },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine02.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine02.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>컨텐츠별 PSD 제작 후 웹진 적용</h4>
                            <p> PSD제작 / 웹진작업</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine04.png",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine04.png", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>컨텐츠별 PSD 제작 후 웹진 적용</h4>
                            <p>PSD제작 / 웹진작업</p>
                        </div>`
            },
        ]
    });
    $gallery4.addEventListener("click", () => {
        gallery4.openGallery(0);
    });
    
    const $gallery5 = document.getElementById("gallery-5");
    const gallery5 = window.lightGallery($gallery5, {
        download : false,
        dynamic: true,
        plugins: [lgZoom, lgVideo, lgThumbnail],
        dynamicEl: [
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-plan01.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-plan01.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>이벤트 기획안</h4>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-event02.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-event02.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>이벤트 기획안 -> 디자인적용</h4>
                            <p>포스터 및 SNS 사이즈 / 당첨자 발표 등 </p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-event01.jpg",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-event01.jpg",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>만족도 조사 이벤트</h4>
                            <p>팝업 제작 100%</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-popup01.jpg",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-popup01.jpg",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>구독신청 팝업 / 제작 100% </h4>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-popup02.jpg",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-popup02.jpg", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>컨텐츠 종료 알림 팝업 / 제작 100% </h4>
                        </div>`
            },
        ]
    });
    $gallery5.addEventListener("click", () => {
        gallery5.openGallery(0);
    });
    
    const $gallery6 = document.getElementById("gallery-6");
    const gallery6 = window.lightGallery($gallery6, {
        download : false,
        dynamic: true,
        plugins: [lgZoom, lgVideo, lgThumbnail],
        dynamicEl: [
            
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-re01.png",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-re01.png", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>Newsletter Renewal</h4>
                            <p> NEWLETTER 시안 3종</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-re02.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-re02.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>Webzine Renewal</h4>
                            <p>환경 관련 웹진 리뉴얼 시안 2종</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-e-mail.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-e-mail.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>E-mail Signature</h4>
                            <p>전자메일 서명 시안 6종</p>
                        </div>`
            },
        ]
    });
    $gallery6.addEventListener("click", () => {
        gallery6.openGallery(0);
    });
    
    
    const $gallery7 = document.getElementById("gallery-7");
    const gallery7 = window.lightGallery($gallery7, {
        download : false,
        dynamic: true,
        plugins: [lgZoom, lgVideo, lgThumbnail],
        dynamicEl: [
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster01.jpg",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster01.jpg",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>2022 Poster</h4>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster04.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster04.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Pop art</h4>
                            <p>Coca-Cola Starders</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster02.jpg",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster02.jpg", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>Move Poster 1</h4>
                            <p>악마를 보았다(I saw the devil)</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster03.jpg",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster03.jpg",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Move Poster 2</h4>
                            <p>악마를 보았다(I saw the devil)</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster05.jpg",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster05.jpg",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Move Poster 3</h4>
                            <p>마녀 파트2(The witch part2)</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster06.jpg",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster06.jpg",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Move Poster 4</h4>
                            <p>마녀 파트2(The witch part2)</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster07.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster07.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Event banners and posters</h4>
                            <p>카페 행사 포스터</p>
                        </div>`
            }
        ]
    });
    $gallery7.addEventListener("click", () => {
        gallery7.openGallery(0);
    });
}
Folder__Image();

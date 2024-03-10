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
                            <h4>Webzine main banner</h4>
                            <p>제작 100%</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-banner02.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-banner02.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Webzine Subpage banner</h4>
                            <p>제작 100%, on September 14, 2016</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-banner03.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-banner03.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Event banner</h4>
                            <p>제작 100% May 8, 2020</p>
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
                            <h4>Card News</h4>
                            <p>Description of the slide 4</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-card02.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-card02.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Card News</h4>
                            <p>Published on November 24, 2018</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-card03.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-card03.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Card News</h4>
                            <p>Published on January 6, 2021</p>
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
                            <h4>visual</h4>
                            <p>Published on September 1, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design05.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design05.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>visual</h4>
                            <p>Published on September 1, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design06.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design06.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>visual</h4>
                            <p>메인배너 제작 / 소식별 웹진 디자인 및 코딩 / 월호 발행</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design01.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design01.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>소식 주제별 디자인</h4>
                            <p>Published on September 1, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design02.png",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design02.png", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>소식 주제별 디자인</h4>
                            <p>Published on June 19, 2019</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design03.png",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-design03.png", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>소식 주제별 디자인</h4>
                            <p>Published on June 19, 2019</p>
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
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine05.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine05.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>비주얼 웹진 적용 및 월호 발행</h4>
                            <p>Published on September 1, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine01.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine01.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>이벤트 웹진 적용</h4>
                            <p>Published on September 1, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine03.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine03.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>소식별 디자인 웹진 적용</h4>
                            <p>메인배너 제작 / 소식별 웹진 디자인 및 코딩 / 월호 발행</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine02.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine02.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>컨텐츠별 PSD 제작 후 웹진 적용</h4>
                            <p>Published on September 1, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine04.png",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine04.png", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>컨텐츠별 PSD 제작 후 웹진 적용</h4>
                            <p>Published on June 19, 2019</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine06.png",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine06.png", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>컨텐츠별 PSD 제작 후 웹진 적용</h4>
                            <p>Published on June 19, 2019</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine07.png",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine07.png", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>컨텐츠별 PSD 제작 후 웹진 적용</h4>
                            <p>Published on June 19, 2019</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine08.png",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-webzine08.png", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>컨텐츠별 PSD 제작 후 웹진 적용</h4>
                            <p>Published on June 19, 2019</p>
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
                            <p>Published on September 1, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-event02.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-event02.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>이벤트 기획안 -> 디자인적용</h4>
                            <p>Published on September 1, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-event01.jpg",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-event01.jpg",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>만족도 조사 이벤트</h4>
                            <p></p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-popup01.jpg",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-popup01.jpg",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>구독신청 팝업</h4>
                            <p>Published on September 1, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-popup02.jpg",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-popup02.jpg", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>컨텐츠 종료 알림 팝업</h4>
                            <p>Published on June 19, 2019</p>
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
                            <p>Published on June 19, 2019</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-re02.png",     
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-re02.png",     
            subHtml: `<div class="lightGallery-captions">
                            <h4>Webzine Renewal</h4>
                            <p>Published on September 1, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-e-mail.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-e-mail.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Email Signature</h4>
                            <p>Published on June 19, 2019</p>
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
                            <h4>Poster</h4>
                            <p>Published on September 1, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster02.jpg",  
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster02.jpg", 
            subHtml: `<div class="lightGallery-captions">
                            <h4>Poster</h4>
                            <p>Published on June 19, 2019</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster03.jpg",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster03.jpg",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Poster</h4>
                            <p>Published on June 19, 2019</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster04.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster04.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Poster</h4>
                            <p>Published on October 6, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster05.jpg",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster05.jpg",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Poster</h4>
                            <p>Published on October 6, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster06.jpg",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster06.jpg",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Poster</h4>
                            <p>Published on October 6, 2020</p>
                        </div>`
            },
            {
            src:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster07.png",
            thumb:
                "https://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/img-poster07.png",
            subHtml: `<div class="lightGallery-captions">
                            <h4>Poster</h4>
                            <p>Published on October 6, 2020</p>
                        </div>`
            }
        ]
    });
    $gallery7.addEventListener("click", () => {
        gallery7.openGallery(0);
    });
}
Folder__Image();

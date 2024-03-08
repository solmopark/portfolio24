// folder-image
const $gallery1 = document.getElementById("gallery-1");
const gallery1 = window.lightGallery($gallery1, {
    download : false,
    dynamic: true,
    plugins: [lgZoom, lgVideo, lgThumbnail],
    dynamicEl: [
        {
        src:
            "ttps://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/",
        thumb:
            "ttps://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/",
        subHtml: `<div class="lightGallery-captions">
                        <h4>Webzine main banner</h4>
                        <p>제작 100%</p>
                    </div>`
        },
        {
        src:
            "ttps://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/",
        thumb:
            "ttps://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/",
        subHtml: `<div class="lightGallery-captions">
                        <h4>Webzine Subpage banner</h4>
                        <p>제작 100%, on September 14, 2016</p>
                    </div>`
        },
        {
        src:
            "ttps://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/",
        thumb:
            "ttps://cdn.jsdelivr.net/gh/solmopark/portfolio24/docs/img/",
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
            "https://i.imgur.com/bOd2zuE.jpeg",
        thumb:
            "https://i.imgur.com/bOd2zuE.jpeg",
        subHtml: `<div class="lightGallery-captions">
                        <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                        <p>Description of the slide 4</p>
                    </div>`
        },
        {
        src:
            "https://i.imgur.com/vd1t38g.jpeg",
        thumb:
            "https://i.imgur.com/vd1t38g.jpeg",
        subHtml: `<div class="lightGallery-captions">
                        <h4>Photo by <a href="https://unsplash.com/@charlespostiaux">Charles Postiaux</a></h4>
                        <p>Published on November 24, 2018</p>
                    </div>`
        },
        {
        src:
            "https://i.imgur.com/loUCd29.jpeg",
        thumb:
            "https://i.imgur.com/loUCd29.jpeg",
        subHtml: `<div class="lightGallery-captions">
                        <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
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
            "https://images.unsplash.com/photo-1598911543663-37d77962beb1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
        thumb:
            "https://images.unsplash.com/photo-1598911543663-37d77962beb1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
        subHtml: `<div class="lightGallery-captions">
                        <h4>Photo by <a href="https://unsplash.com/@inespiazzese">Ines Piazzese</a></h4>
                        <p>Published on September 1, 2020</p>
                    </div>`
        },
        {
        src:
            "https://images.unsplash.com/photo-1560885673-2cdc12600ec8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
        thumb:
            "https://images.unsplash.com/photo-1560885673-2cdc12600ec8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
        subHtml: `<div class="lightGallery-captions">
                        <h4>Photo by <a href="https://unsplash.com/@rdsaunders">Richard Saunders</a></h4>
                        <p>Published on June 19, 2019</p>
                    </div>`
        },
        {
        src:
            "https://images.unsplash.com/photo-1571292064306-669f0e758231?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
        thumb:
            "https://images.unsplash.com/photo-1571292064306-669f0e758231?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
        subHtml: `<div class="lightGallery-captions">
                        <h4>Photo by <a href="https://unsplash.com/@jalanmeier">J. Meier</a></h4>
                        <p>Published on October 17, 2019</p>
                    </div>`
        },
        {
        src:
            "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
        thumb:
            "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
        subHtml: `<div class="lightGallery-captions">
                        <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                        <p>Published on October 6, 2020</p>
                    </div>`
        }
    ]
});
$gallery3.addEventListener("click", () => {
    gallery3.openGallery(0);
});
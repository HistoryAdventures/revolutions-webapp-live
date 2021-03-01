let navigationIsOpened = false;
const navigationPopup = $('#navigation_popup');
const navigationPanel = $('#navigation_panel');
const navigation_elem = $('#navigation');
const navigationButton = $('.navigation-button');
const pageShowElem = $('#page-show');
const hiddenContainer = $('#hidden-container');
const galleryPopupContainer = $('#gallery-popup-container');
const pages = {};
let gallerySlider;
let gallerySliderIsCreated = false;
let pageIndex = 0;
let popupOpened = false; 
let getTimer = false; 
let audio;
let audioIsPlayed = false;
let audioEvent;
let gallery;
let gallerySliderPart1;
let gallerySliderPart2;
let feiGallerySlider;
let khariGallerySlider;
let galleryThomosaBrown;
let galleryIndex = 0;
const contentIframe = $('#iframe-big-image');
const quizIframe = $('#quiz-iframe');
let audioIsMuted = false;
let lastAudioOrVideo;
const audioButton = $('#audio-button');
let currentVideoId;
let popupButtonsEvents;
let playedVideo;
let playedAudio;
const audioMutedIcon = `
    <svg class="audio-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="volume-mute" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path>
    </svg>`;
const audioIcon =`
    <svg class="audio-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="volume" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512">
        <path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.53 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path>
    </svg>`;


goToPage(0);
createListenerForSliderArrows();
makeGallerySliderPopupsEvents();

navigationPopup.on('click', () => {
    navigationIsOpened = false;
    navigationPopup.addClass('d-none');
    navigationPanel.removeClass('navigation-panel-show');
});

function getJsonForPages(pageNumber = 0) {
    return new Promise((resolution, rejection) => {
        // http://161.35.4.213/pages/ local.
        // https://revolutions.historyadventures.app/pages/ prod
        $.get(`https://revolutions.historyadventures.app/pages/${pageNumber}.html`, (data, err) => { 
            resolution(data);
            rejection(err);          
        });
    });
   
}

function makeGallerySliderPopupsEvents() {
    gallerySliderPart1 = $('#gallery-slider-part-1');
    gallerySliderPart2 = $('#gallery-slider-part-2');
    feiGallerySlider = $('#fei-gallery-slider');
    khariGallerySlider = $('#khari-gallery-slider');
    galleryThomosaBrown = $('#galleryThomosaBrown');
    gallerySliderPart1.slick();
    gallerySliderPart2.slick();
    feiGallerySlider.slick();
    khariGallerySlider.slick();
    galleryThomosaBrown.slick();
    gallerySliderPart1.on('afterChange', (event, slick, currentSlide) => {
        galleryIndex = currentSlide;
    });
    
    gallerySliderPart2.on('afterChange', (event, slick, currentSlide) => {
        galleryIndex = currentSlide;
    });
    
    feiGallerySlider.on('afterChange', (event, slick, currentSlide) => {
        galleryIndex = currentSlide;
    });
    
    khariGallerySlider.on('afterChange', (event, slick, currentSlide) => {
        galleryIndex = currentSlide;
    });
    
    galleryThomosaBrown.on('afterChange', (event, slick, currentSlide) => {
        galleryIndex = currentSlide;
    });
}

function openCloseNavigation() {
    navigationIsOpened = !navigationIsOpened;
    if(navigationIsOpened) {
        navigationPopup.removeClass('d-none');
        navigationPanel.addClass('navigation-panel-show');
    } else {
        navigationPopup.addClass('d-none');
        navigationPanel.removeClass('navigation-panel-show');
    }
}

function makeNavigation() {
    let html = '<div class="navigation-container">';
    console.log(navigation);
    html += makeBookPart();
    html += '</div>';
    navigation_elem.html(html);
}

function makeBookPart() {
    let bookPart = '<div class="book-part" id="accordion">'
    for (const item of navigation) {
        bookPart += `<div class="book-part-title pt-2 mt-2 cursor-pointer collapsed" id="heading${item.book_part}" 
        data-target="#collapse${item.book_part}" 
        aria-controls="collapse${item.book_part}"
        aria-multiselectable="true"
        data-toggle="collapse">
            <svg aria-hidden="true" class="menu-arrow" focusable="false" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" class=""></path>
            </svg>
            ${item.name}
        </div>`;
        bookPart += `<div class="pl-2 collapse" id="collapse${item.book_part}" 
        aria-labelledby="heading${item.book_part}"  data-parent="#accordion">
            ${makeChapters(item.chapters, item.book_part)}
        </div>`;
    }
    bookPart += '</div>';
    return bookPart;
}

function makeChapters (chapter, index) {
    let chapters = '';
    for(const item of chapter) {
        chapters += `
            <div class="mt-2 cursor-pointer" >
                <div class="d-flex justify-content-between" onClick="goToPage(${item.page_number})">
                    <span>${item.name}</span>
                    <span>${item.page_number}</span>
                </div>
            </div>
        `;
    }
    return chapters;
}

function makePages(pages) {
    let pagesHtml = '<div class="page">';
    for(const item of pages) {
        pagesHtml += `<div class="page-name mt-1" onclick="goToPage(${item.page_number})">${item.name}</div>`;
    }
    pagesHtml += '</div>';
    return pagesHtml;
}

function goToPage(index) {
    if(popupOpened) {
        return
    } else {
        getTimer = true;
        console.log(index);
        pageIndex = index;
        checkPage('page_' + index, index);
    }
}

function checkPage(id, index) {
    if(pages[id]) {
        showPage(id);
        getTimer = false;
    } else {
        getJsonForPages(index).then((data) => {
            hiddenContainer[0].innerHTML += `<div id="${id}">${data}</div>`;
            pages[id] = $('#' + id);          
            setTimeout(() => {
                showPage(id);
            }, 50);
            getTimer = false;
        }).catch(err => {
            console.log(err);
            getTimer = false;
        });
    }
}

function showPage(id) {
    muteLastVideoOrAudio();
    currentId = id + '_current';
    elementClone = pages[id].clone();
    elementClone.id = currentId;
    pageShowElem.html(elementClone);
    makeVideo(currentId);
    makeAudio(id); 
    makeGallery(id);
    if(id === 'page_8') {
        initDictionaryList(); 
    }
}

function openPopupWithAudio(elem) {
    const id = $(elem).attr('data-target');
    const audio =  $(id).find('audio')[0];
    const video = $(id).find('video')[0];
    if(audio) {
        audio.muted = false;
        audio.currentTime = 0;
        audio.play();
    } else if (video) {
        video.muted = false;
        video.currentTime = 0;
        video.play();
    }
    openPopup();
}

function muteLastVideoOrAudio () {
    if(playedVideo) {
        playedVideo.pause();
        lastAudioOrVideo = null;
    } else if (playedAudio) {
        playedAudio.pause();
    }
}

function openPopup() {
    navigationButton.addClass('d-none');
    popupOpened = true;
}

function closePopup() {
    navigationButton.removeClass('d-none');
    popupOpened = false;
}

function makeVideo(id) {
    audioIsMuted = false;
    audioButton.html(audioIcon);
    playedVideo = null;
    playedVideo = pageShowElem.find('video')[0];
    if(playedVideo) {
        lastAudioOrVideo = {
            type: 'video',
            id
        };
        playedVideo.muted = audioIsMuted; 
        playedVideo.play();
        currentVideoId = id;
        audioButton.removeClass('d-none');
    } else {
        audioButton.addClass('d-none');
        currentVideoId = null;
    }
}

function makeAudio (id) {
    if(audio) {
        audio.pause();
    }
    audio = pageShowElem.find('audio')[0];
    if(audio) {
        lastAudioOrVideo = {
            type: 'audio',
            id
        };
        audioIsPlayed = false;
        const elem = $('#' + id + '_audio_play');
        audioEvent = elem.on('click', ()=> {
            audioIsPlayed = !audioIsPlayed;
            if(audioIsPlayed) {
                audio.currentTime = 0;
                audio.muted = false;
                audio.play();
            } else {
                audio.pause();
            }
        });
        elem.tooltip({
            placement: 'bottom', 
            trigger: 'hover',
        });
    } else {
        if(audioEvent) {
            audioEvent.off();
            audio = null;
        }
    }
}

function makeGallery(id) {
    if(id === 'page_18' || id === 'page_29' || id === 'page_40' || id === 'page_53' || id === 'page_65') {
        gallery = pageShowElem.find('.single-item');
        gallery.slick({dots: true});
        getGalleryPopup('popup_gallery_' + id);
    } else {
        gallerySlider = null;
        gallerySliderIsCreated = false;
    }
}

function getGalleryPopup(pageName) {
    getJsonForPages(pageName).then(data => {
        galleryPopupContainer.html(data);
        gallerySlider = $('#gallery-slider');
    }).catch(err => {
        console.log(err);
    });
}


// function makeBigImage(id) {
//     if(id === 'page_17' || id === 'page_30' || id === 'page_41' || id === 'page_54' || id === 'page_66') {
//         const image = pageShowElem.find('.big-image-for-popup');
//         iframeUrl = image.attr('iframe');
//     }
// }

function closeBigImagePopup() {
    contentIframe.attr('src', '');
    closePopup();
}

function createListenerForSliderArrows() {
    $('#arrow-right').on('click', () => {
        console.log(popupOpened);
        toRight();
    });

    $('#arrow-left').on('click', () => {
        toLeft();
    });
    $(window).on('keydown', (e)=> {
        let tooltipOpen=document.querySelector('.tooltip')
        if(tooltipOpen){
            tooltipOpen.remove()
        }
        if (e.keyCode == 37) {
            if (getTimer) {
                return false;
            } else {
                toLeft();
            }
        }
        if (e.keyCode == 39) {
            if (getTimer) {
                return false;
            } else {
                toRight();
            }
        }
    });
}


function toLeft() {
    if(!popupOpened) {
        pageIndex--;
        if(pageIndex === -1) {
            pageIndex = 81;
        }
        goToPage(pageIndex);
    }

}

function toRight() {
    if(!popupOpened) {
        pageIndex++;
        if(pageIndex === 82) {
            pageIndex = 0;  
        }
        goToPage(pageIndex);
    }
}

function closeGallery() {
    gallery.slick('slickGoTo', galleryIndex);
    galleryIndex = 0;
    closePopup();
}

function closeQuiz() {
    quizIframe.attr('src', '');
    closePopup();
}

function onGallery(index) {
    console.log('dddd', gallerySliderIsCreated)
    if(!gallerySliderIsCreated) {
        galleryIndex = 0;
        console.log(gallerySlider)
        gallerySlider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        gallerySlider.slick('slickGoTo', index);
        gallerySlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            galleryIndex = nextSlide;
        });
        gallerySliderIsCreated = true;
    } else {
        gallerySlider.slick('slickGoTo', index);
    }
    galleryIndex = index;
    openPopup();
}

function initIframe(url) {
    console.log(url);
    setTimeout(() => {
        contentIframe.attr('src', url);
    }, 300)
    openPopup();
}

audioButton.on('click', () => {
    console.log('mute');
    audioIsMuted = !audioIsMuted;
    if (currentVideoId) {
        $(playedVideo).prop('muted', false);
    }
    if(audioIsMuted) {
        audioButton.html(audioMutedIcon);
        $(playedVideo).prop('muted', true);
    } else {
        audioButton.html(audioIcon);
    }
});

$('#page_13_1_popup_close').on('click', () => {
    closeAudioPopups('popup_13_1_video');
});

$('#page_13_2_popup_close').on('click', () => {
    closeAudioPopups('popup_13_2_video');
});

$('#oneLastRally_close').on('click', () => {
    closeAudioPopups('popup_24_1_video');
});

$('#liveToFightAnotherDay_close').on('click', () => {
    closeAudioPopups('popup_24_2_video');
});

$('#FadeToBlack_close').on('click', () => {
    closeAudioPopups('FeiHong_end_1_audio');
});

$('#ItUpForGood_close').on('click', () => {
    closeAudioPopups('FeiHong_end_2_audio');
});
$('#awrriorDemiseModal_close').on('click', () => {
    closeAudioPopups('khari_escape_01_audio');
});
$('#noDeathTodayModal_close').on('click', () => {
    closeAudioPopups('khari_escape_02_audio');
});
$('#chicagoEnd01_close').on('click', () => {
    closeAudioPopups('Chicago_end_01_audio');
});
$('#chicagoEnd02_close').on('click', () => {
    closeAudioPopups('Chicago_end_02_audio');
});

function closeAudioPopups(name) {
    const elem = $('#' + name)[0];
    elem.muted = true;
    elem.pause();
    closePopup();
}

function openQuiz (url) {
    quizIframe.attr('src', url);
    openPopup();
}

$('#second-3d').on('shown.bs.modal', function () {
    const html = `
        <div class="iframe-3d-container w-100 d-flex justify-content-center">
            <div class="modal-content position-relative container-3d">
                <button type="button" onclick="closePopup()" class="close position-absolute text-white border rounded px-3 btn btn-outline" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">Done</span>
                </button>
                <div class="modal-body p-0 rounded-0 text-center">
                    <iframe src="https://revolutions.historyadventures.app/3-d/scene-jemba-v1/" frameborder="0" width="100%" style="height:100vh" autoplay="true"></iframe>
                </div>
            </div>
        <div>
    `;
    $('#second-3d .modal-dialog').html(html);
});

$('#second-3d').on('hidden.bs.modal', function () {
    $('#second-3d .modal-dialog').html('');
    closePopup()
});

$('#modal-3d-3-part').on('shown.bs.modal', function () {
    const html = `
        <div class="iframe-3d-container w-100 d-flex justify-content-center">
            <div class="modal-content position-relative container-3d">
                <button type="button" onclick="closePopup()" class="close position-absolute text-white border rounded px-3 btn btn-outline" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">Done</span>
                </button>
                <div class="modal-body p-0 rounded-0 text-center">
                    <iframe src="https://revolutions.historyadventures.app/3-d/fei-hong/" frameborder="0" width="100%" style="height:100vh" autoplay="true"></iframe>
                </div>
            </div>
        <div>
    `;
    $('#modal-3d-3-part .modal-dialog').html(html);
});

$('#modal-3d-3-part').on('hidden.bs.modal', function () {
    $('#modal-3d-3-part .modal-dialog').html('');
    closePopup()
});

$('#modal-3d-4-part').on('shown.bs.modal', function () {
    const html = `
        <div class="iframe-3d-container w-100 d-flex justify-content-center">
            <div class="modal-content position-relative container-3d">
                <button type="button" onclick="closePopup()" class="close position-absolute text-white border rounded px-3 btn btn-outline" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">Done</span>
                </button>
                <div class="modal-body p-0 rounded-0 text-center">
                    <iframe src="https://revolutions.historyadventures.app/3-d/khari/" frameborder="0" width="100%" style="height:100vh" autoplay="true"></iframe>
                </div>
            </div>
        <div>
    `;
    $('#modal-3d-4-part .modal-dialog').html(html);
});

$('#modal-3d-4-part').on('hidden.bs.modal', function () {
    console.log('test hide')
    $('#modal-3d-4-part .modal-dialog').html('');
    closePopup()
});

$('#modal-3d-5-part').on('shown.bs.modal', function () {
    const html = `
        <div class="iframe-3d-container w-100 d-flex justify-content-center">
            <div class="modal-content position-relative container-3d">
                <button type="button" onclick="closePopup()" class="close position-absolute text-white border rounded px-3 btn btn-outline" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">Done</span>
                </button>
                <div class="modal-body p-0 rounded-0 text-center">
                    <iframe src="https://revolutions.historyadventures.app/3-d/thomasbrown" frameborder="0" width="100%" style="height:100vh" autoplay="true"></iframe>
                </div>
            </div>
        <div>
    `;
    $('#modal-3d-5-part .modal-dialog').html(html);
});

$('#modal-3d-5-part').on('hidden.bs.modal', function () {
    console.log('test hide')
    $('#modal-3d-5-part .modal-dialog').html('');
    closePopup()
});

let videoScreen = $('#video-screen');
videoScreen.on('shown.bs.modal', function () {
    const html = `
        <div class="iframe-3d-container w-100 d-flex justify-content-center">
            <div class="modal-content position-relative container-3d">
                <button type="button" onclick="closePopup()" class="close position-absolute text-white border rounded px-3 btn btn-outline" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">Done</span>
                </button>
                <div class="modal-body p-0 rounded-0 text-center">
                    <iframe src="https://revolutions.historyadventures.app/3-d/scene-agent-v1/" frameborder="0" width="100%" style="height:100vh" autoplay="true"></iframe>
                </div>
            </div>
        <div>
    `;
    $('#video-screen .modal-dialog').html(html);
});

videoScreen.on('shown.bs.modal', function () {
    const html = `
        <div class="iframe-3d-container w-100 d-flex justify-content-center">
            <div class="modal-content position-relative container-3d">
                <button type="button" onclick="closePopup()" class="close position-absolute text-white border rounded px-3 btn btn-outline" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">Done</span>
                </button>
                <div class="modal-body p-0 rounded-0 text-center">
                    <iframe src="https://revolutions.historyadventures.app/3-d/scene-agent-v1/" frameborder="0" width="100%" style="height:100vh" autoplay="true"></iframe>
                </div>
            </div>
        <div>
    `;
    $('#video-screen .modal-dialog').html(html);
});

videoScreen.on('hidden.bs.modal', function () {
    $('#video-screen .modal-dialog').html('');
    closePopup()
});

const navigation = [{
    "book_part": 1,
    "name": "Title",
        "chapters": [{
            "chapter": 1,
            "chapter_number_general": 0,
            "name": "How to Use this Book",
            "color": "black",
            "description": "",
            "page_number": 2
            }, {
                "chapter": 2,
                "chapter_number_general": 1,
                "name": "Introduction",
                "color": "black",
                "description": "",
                "page_number": 3
            }]
    }, {
        "book_part": 2,
        "name": "History Adventures",
        "chapters" : [{
            "chapter": 1,
            "chapter_number_general": 3,
            "name": "Agent 355",
            "color": "#1787cf",
            "description": "",
            "page_number": 9
        }, {
            "chapter": 2,
            "chapter_number_general": 4,
            "name": "Jiemba",
            "color": "#ff5d24",
            "description": "",
            "page_number": 20
        }, {
            "chapter": 3,
            "chapter_number_general": 5,
            "name": "Fei Hong",
            "color": "#F2003D",
            "description": "",
            "page_number": 32
        }, {
            "chapter": 4,
            "chapter_number_general": 6,
            "name": "Khari",
            "color": "#FFE600",
            "description": "",
            "page_number": 43
        }, {
            "chapter": 5,
            "chapter_number_general": 7,
            "name": "Thomas Brown",
            "color": "#FFE600",
            "description": "",
            "page_number": 56
        }, {
            "chapter": 6,
            "chapter_number_general": 8,
            "name": "History Adventures  #IRL",
            "color": "#FFE600",
            "description": "",
            "page_number": 68
        }]
    },{
        "book_part": 3,
        "name": "About the Book",
        "chapters": [{
            "chapter": 1,
            "chapter_number_general": 0,
            "name": " Credits",
            "color": "black",
            "description": "",
            "page_number": 75
        }, {
            "chapter": 2,
            "chapter_number_general": 1,
            "name": "Sources",
            "color": "black",
            "description": "",
            "page_number": 79
        }, {
            "chapter": 2,
            "chapter_number_general": 1,
            "name": "Copyright",
            "color": "black",
            "description": "",
            "page_number": 81
        }]
    }      
];
makeNavigation();


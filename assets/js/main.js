// $('.slider').slick({
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     fade: true,
//     arrows: true,
//     accessibility: false
// });
// let pagesCount = $('.slider>.slick-list>.slick-track>.slick-slide').length - 1;
// $('.single-item').slick({
//     dots: true
// });
// $('.modal-slider').slick({
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     fade: true,
//     adaptiveHeight: true
// });


// $(function () {
//     $('.culper-ring  .gallery-items').click(function (el) {
//         let items = document.querySelectorAll('.culpe-modal .slick-track .slick-slide');
//         for (let i = 0; i < items.length; i++) {
//             items[i].classList.remove('slick-active');
//             items[i].classList.remove('slick-current');

//             if (items[i].getAttribute('data-slick-index') === el.target.attributes.index.value) {
//                 items[i].classList.add('slick-active');
//                 items[i].classList.add('slick-current');
//             }
//         }
//     })
// });

// setTimeout(() => {
//     console.log(document.querySelector('#container'));
//     const container = document.querySelector('#container');
//     if (container) {
//         container.classList.add('d-none')
//     }
// }, 400)

// $(document).ready(function () {
//     document.querySelectorAll('.video-background').forEach((item) => {
//         const video = item.parentElement.querySelector('video');
//         video.pause();
//         video.muted = true;
//         const muteBtm = item.querySelector('.mute-btn');
//         if (video.muted) {
//             muteBtm.style.backgroundImage = 'url(http://image.flaticon.com/icons/svg/10/10776.svg)';
//         } else {
//             muteBtm.style.backgroundImage = 'url(http://image.flaticon.com/icons/svg/10/10430.svg)';
//         }

//         muteBtm.onclick = function () {
//             const video = this.parentElement.querySelector('video');
//             toggleVideoMutedState(video, this);
//         };
//     })
// });

// function checkMuteButton(allMuted = false) {
//     document.querySelectorAll('.video-background').forEach((item) => {
//         const video = item.parentElement.querySelector('video');
//         const muteBtm = item.querySelector('.mute-btn');
//         if (video.muted) {
//             muteBtm.style.backgroundImage = 'url(http://image.flaticon.com/icons/svg/10/10776.svg)';
//         } else {
//             muteBtm.style.backgroundImage = 'url(http://image.flaticon.com/icons/svg/10/10430.svg)';
//         }

//         muteBtm.onclick = function () {
//             const video = this.parentElement.querySelector('video');
//             toggleVideoMutedState(video, this);
//         };
//     })
// }

// function toggleVideoMutedState(video, item) {
//     if (video.muted) {
//         video.muted = false;
//         item.style.backgroundImage = 'url(http://image.flaticon.com/icons/svg/10/10430.svg)';
//         muteOtherUnMutedVideos(video);
//     } else {
//         video.muted = true;
//         item.style.backgroundImage = 'url(http://image.flaticon.com/icons/svg/10/10776.svg)';
//     }


// }


// function muteOtherUnMutedVideos(video) {
//     video.classList.add('current-player');
//     document.querySelectorAll('video:not(.current-player)').forEach(item => {
//         item.muted = true;
//         const muteBtm = item.parentElement.querySelector('.mute-btn');
//         muteBtm.style.backgroundImage = 'url(http://image.flaticon.com/icons/svg/10/10430.svg)';
//     });
//     video.classList.remove('current-player');
// }




// $('.slick-arrow').focus();

// let nexButton;
// let previousButton;
// let pageNumber = 0;
// const slickNextButtons = $('.slick-next');
// const slickPreviousButtons = $('.slick-prev');
// const audio_15 = $('#audio_15')[0];
// const audio_jiemba04 = $('#audio_jiemba04')[0];
// audio_15.pause();
// audio_jiemba04.pause();
// let audio_15Playing = false;
// let audio_jiemba04Playing = false;
// const playAudio15Button = $('#play_audio_15');
// const playAudioJiemba04Btn = $('#play_audio_jiemba04');
// let backTimer;
// let nextTimer;
// const playAudioKhari05 = $('#play_audio_khari05'),
//     audioKhari05 = $('#audio_khari05')[0];
// let audioKhari05Playing = false;

// const playAudioChicago = $('#play_audio_chicago'),
//     audioChicago = $('#audio_chicago')[0];
// let audioChicagoPlaying = false;


// for (let i = 0; i < slickNextButtons.length; i++) {
//     if (slickNextButtons[i].parentElement.className === 'slider h-100 slick-initialized slick-slider') {
//         nexButton = slickNextButtons[i];
//     }
// }

// for (let i = 0; i < slickPreviousButtons.length; i++) {
//     if (slickPreviousButtons[i] ?.offsetParent ?.className === 'slider h-100 slick-initialized slick-slider'
// )
//     {
//         previousButton = slickPreviousButtons[i];
//     }
// }




// let $carousel = $('.slider');
// $(window).on('keypress', function (e) {
//     return false;
// })

// $(document).on('keydown', function (e) {
//     if (e.keyCode == 37) {
//         if (backTimer) {
//             return false;
//         } else {
//             backTimer = true;
//             $carousel.slick('slickPrev');
//             backFunctionality();
//             setTimeout(() => {
//                 backTimer = false;
//             }, 350);
//         }
//     }
//     if (e.keyCode == 39) {
//         if (nextTimer) {
//             return false;
//         } else {
//             nextTimer = true;
//             $carousel.slick('slickNext');
//             nextFunctionality();
//             setTimeout(() => {
//                 nextTimer = false;
//             }, 350);
//         }
//     }
// });





// document.querySelector('#jiembaPopupQuiz').addEventListener('click', () => {
//     document.querySelector('#jiembaModal-container').innerHTML = `<iframe src="assets/jiembaModal-quiz/index.html" frameborder="0" width="100%"
//                 class="min-height-100 quiz-iframe"></iframe>`
// });

// document.querySelector('#fieHongPopupQuizBtn').addEventListener('click', () => {
//     document.querySelector('#fieHongPopupQuizModal-container').innerHTML = `<iframe src="assets/fieHongQuiz/index.html"  frameborder="0"
//                 class="min-height-100 quiz-iframe"></iframe>`
// });

// const khari_escape_01_audio = $('#khari_escape_01_audio')[0];

// $('#awrriorDemiseModal_button').on('click', () => {
//     khari_escape_01_audio.muted = false;
//     khari_escape_01_audio.currentTime = 0;
//     khari_escape_01_audio.play();
// });

// $('#awrriorDemiseModal_close').on('click', () => {
//     khari_escape_01_audio.muted = true;
//     khari_escape_01_audio.pause();
// });


// const khari_escape_02_audio = $('#khari_escape_02_audio')[0];

// $('#noDeathToday_button').on('click', () => {
//     khari_escape_02_audio.muted = false;
//     khari_escape_02_audio.currentTime = 0;
//     khari_escape_02_audio.play();
// });

// $('#noDeathTodayModal_close').on('click', () => {
//     khari_escape_02_audio.muted = true;
//     khari_escape_02_audio.pause();
// });


// function onKhariGallery(index, part) {
//     if (part === 'part-1') {
//         feiGallerySliderPart1.slick('slickGoTo', index);
//     }
// }
// function initIframe(src) {
//     let content = document.querySelector('#declarationModal-container');
//     content.innerHTML = ''
//     console.log(content);
//     let frameItem = `<iframe src=${src} id="iframe"  frameborder="0" width="100%"
//                 class="min-height-100"></iframe>`;
//     content.innerHTML = frameItem;
// }

// document.querySelector('#khariDeclarationBtn').addEventListener('click', () => {
//     initIframe('assets/khariDeclaration/index.html')
// });

// document.querySelector('#thomosaBrownDeclarationBtn').addEventListener('click', () => {
//     initIframe('assets/thomosaBrownDeclaration/index.html')
// });
// document.querySelector('#feiHongDeclarationBtn').addEventListener('click', () => {
//     initIframe('assets/feiHong/index.html')
// });

// document.querySelector('#blueDeclarationBtn').addEventListener('click', () => {
//     initIframe('assets/declarationBlue/index.html')
// });
// document.querySelector('#jiembaDeclarationBtn').addEventListener('click', () => {
//     initIframe('assets/source_analysis/HTML/index.html')
// });
// document.querySelector('#khariPopupQuizBtn').addEventListener('click', () => {
//     document.querySelector('#fieHongPopupQuizModal-container').innerHTML = `<iframe src="assets/khariQuiz/index.html"  frameborder="0"
//                 class="min-height-100 quiz-iframe"></iframe>`
// });


// document.querySelector('#thomosaBrownPopupQuiz').addEventListener('click', () => {
//     document.querySelector('#fieHongPopupQuizModal-container').innerHTML = null;
//     setTimeout(() => {
//         document.querySelector('#fieHongPopupQuizModal-container').innerHTML = `<iframe src="assets/thomosaBrownQuiz/index.html"  frameborder="0"
//                 class="min-height-100 quiz-iframe"></iframe>`
//     })

// });

// const chicago_end_01_audio = $('#Chicago_end_01_audio')[0];

// $('#chicagoEnd01_button').on('click', () => {
//     chicago_end_01_audio.muted = false;
//     chicago_end_01_audio.currentTime = 0;
//     chicago_end_01_audio.play();
// });

// $('#chicagoEnd01_close').on('click', () => {
//     chicago_end_01_audio.muted = true;
//     chicago_end_01_audio.pause();
// });

// const chicago_end_02_audio = $('#Chicago_end_02_audio')[0];
// $('#chicagoEnd02_button').on('click', () => {
//     chicago_end_02_audio.muted = false;
//     chicago_end_02_audio.currentTime = 0;
//     chicago_end_02_audio.play();
// });

// $('#chicagoEnd02_close').on('click', () => {
//     chicago_end_02_audio.muted = true;
//     chicago_end_02_audio.pause();
// });

// $(document).keyup(function (e) {
//     if (e.keyCode === 27) {
//         khari_escape_02_audio.muted = true;
//         khari_escape_02_audio.pause();
//         khari_escape_01_audio.muted = true;
//         khari_escape_01_audio.pause();
//         chicago_end_01_audio.muted = true;
//         chicago_end_01_audio.pause();
//         chicago_end_02_audio.muted = true;
//         chicago_end_02_audio.pause();
//     }
// });


// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// })


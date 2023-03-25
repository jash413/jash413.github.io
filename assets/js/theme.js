
"use strict";
const d = document;
d.addEventListener("DOMContentLoaded", function(event) {

    // Plceholder
    var preloader = d.querySelector('.loading-preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('d-none');
        }, 3000);
    }

    var preloader1 = d.querySelector('.loading-preloader1');
    if (preloader1) {
        setTimeout(function() {
            preloader1.classList.add('d-none');
        }, 1000);
    }

    // Headroom
    if (d.querySelector('.headroom')) {
        var headroom = new Headroom(document.querySelector(".main-header"), {
            offset: 150,
            tolerance: {
                up: 0,
                down: 0
            },
        });
        headroom.init();
    }

    // Tooltips
    var ToolTipTrigger = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = ToolTipTrigger.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Popovers
    var PopoverTrigger = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = PopoverTrigger.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })


    // Swiper
    var sliderSelector = '.swiper-container',
        defaultOptions = {
            breakpointsInverse: true,
            observer: true
        };

    var nSlider = document.querySelectorAll(sliderSelector);

    [].forEach.call(nSlider, function(slider, index, arr) {
        var data = slider.getAttribute('data-swiper-options') || {};

        if (data) {
            var dataOptions = JSON.parse(data);
        }

        slider.options = Object.assign({}, defaultOptions, dataOptions);

        var swiper = new Swiper(slider, slider.options);

        //console.log(slider.options.autoplay)

        /* stop on hover */
        if (typeof slider.options.autoplay !== 'undefined' && slider.options.autoplay !== false) {
            slider.addEventListener('mouseenter', function(e) {
                swiper.autoplay.stop();
                //console.log('stop')
            });

            slider.addEventListener('mouseleave', function(e) {
                swiper.autoplay.start();
                //console.log('start')
            });
        }
    });

    // timezz.js
    var countdown = function () {
    var timers = document.querySelectorAll('.countdown');
    if (timers.length === 0) return;

    for (var i = 0; i < timers.length; i++) {
      var date = timers[i].dataset.countdownDate;
      timezz(timers[i], {
        date: date // add more options here

      });
    }
  }();



   
});
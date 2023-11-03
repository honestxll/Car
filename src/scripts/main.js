import enquire from 'enquire.js'
import ScrollReveal from 'scrollreveal'

(function(){
  'use strict';

  /**
   * navbar
   */
  $('.ui.navbar .search-icon > i')
    .click(function() {
      let icon = $(this)
      if (icon.text() === 'search') {
        icon.text('close').parents('.content').addClass('searching')
      } else {
        icon.text('search').parents('.content').removeClass('searching')
      }
    })

  $('.ui.sub.navbar')
    .visibility({ type: 'fixed' })

  $('.ui.sub.navbar .menu .item')
    .click(function(){
      let id = $(this).attr('href')
      let $el = $(id)
      let position = $el.offset().top - 70
      console.log(position);

      $('html')
        .animate({
          scrollTop: position
        }, 500)
    })

  $('.ui.section')
    .visibility({
      observeChange: false,
      once: false,
      offset: 120,
      onTopPassed: sectionHandle,
      onBottomPassedReverse: sectionHandle,
    })

  function sectionHandle() {
    let $currentSection = $(this)
    let index = $('.ui.section').index($currentSection)
    let $subNavMenuItem = $('.ui.sub.navbar .menu > .item')
    let $subNavMenuActiveItem = $($subNavMenuItem).eq(index)

    $subNavMenuItem
      .filter('.active')
      .removeClass('active')

    $subNavMenuActiveItem
      .addClass('active')
  }

  /**
   * sidebar
   */
  $('.ui.sidebar')
    .sidebar('setting', 'dimPage', false)
    .sidebar('attach events', '.ui.navbar .menu-icon')
    .sidebar('attach events', '.ui.sidebar .close-icon')

  $('.ui.navbar#navigation .menu')
    .clone()
    .appendTo('.ui.sidebar')

  /**
   * carousel
   */
  $('.ui.hero.carousel')
    .slick({
      prevArrow: '<button class="ui prev bottom button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next bottom button"><i class="material-icons">chevron_right</i></button>',

      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true,
          }
        }
      ]
    })
  $('.ui.vertical.story .ui.carousel.for')
    .slick({
      asNavFor: '.ui.vertical.story .ui.carousel.nav',
      arrows: false,
      slidesToShow: 1,
    })

  $('.ui.vertical.story .ui.carousel.nav')
    .slick({
      prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',

      asNavFor: '.ui.vertical.story .ui.carousel.for',
      slidesToShow: 3,
      dots: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    })
  $('#exterior-design .ui.carousel.text')
    .slick({
      asNavFor: '#exterior-design .ui.carousel.image',
      arrows: false,
      slidesToShow: 1,
    })

  $('#exterior-design .ui.carousel.image')
    .slick({
      prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',

      asNavFor: '#exterior-design .ui.carousel.text',
      slidesToShow: 2,
      dots: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    })
  $('#interior-design .ui.carousel.text')
    .slick({
      asNavFor: '#interior-design .ui.carousel.image',
      arrows: false,
      slidesToShow: 1,
    })

  $('#interior-design .ui.carousel.image')
    .slick({
      prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',

      asNavFor: '#interior-design .ui.carousel.text',
      slidesToShow: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    })


  /**
   * footer
   */
  enquire.register('screen and (max-width: 767px)', {
    match() {
      $('.ui.footer')
        .addClass('accordion')
        .accordion({
          selector: {
            title: '.header',
            trigger: '.header',
            content: '.content',
          }
        })
    },
    unmatch() {
      $('.ui.footer')
        .removeClass('accordion')
    }
  })

  /**
   * ScrollReveal
   */
  const sr = ScrollReveal({ reset: true })
  sr.reveal('.ui.block .content')
  sr.reveal('.ui.spec .statistic', 100)
  sr.reveal('.ui.spec .details .content', 100)
  sr.reveal('.ui.action .header', 100)
  sr.reveal('.ui.action .action', 100)

})();

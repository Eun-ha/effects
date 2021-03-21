const target = document.querySelectorAll('.section');

    const crown = document.querySelectorAll('#crown');
    const title = document.querySelectorAll('#title');
    const list = document.querySelectorAll('#list');
    
    const tl = new TimelineMax();

    var myFullpage = new fullpage('#fullpage', {
    //Navigation
    menu: '#menu',
    lockAnchors: true,
    anchors:['slide1', 'slide2','slide3','slide4'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide','thirdSlide', 'fourthSlide',],
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor : ['#ccc', '#fff','#ccc','#fff'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    dropEffect: false,
    dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
    cards: false,
    cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function(origin, destination, direction){

      const staggerTart = list[destination.index].children;

      target.forEach(element => 
        element.childNodes[0].childNodes[1].style=""
      )

      title.forEach(element => 
        element.style=""
      )

      crown.forEach(element => 
        element.style=""
      )

      Array.from(staggerTart).map(node => 
       node.style=""
      )


      


    },
    afterLoad: function(origin, destination, direction){
      
      
      const bg = target[destination.index].childNodes[0].firstChild.nextSibling;
      const staggerTart = list[destination.index].children;
      bg.style.transform = "scale(1)"; 
      bg.style.transition = "transform 2s ease"; 

      tl.fromTo(title[destination.index], 0.5, {opacity: 0, y: -20}, {opacity: 1, y:0})
      .fromTo(crown[destination.index], 0.9, {opacity: 0, y: -20}, {opacity: 1, y:0})
      .staggerTo(staggerTart, 0.5, {opacity:1, y:-20}, 0.1);

      console.log(staggerTart);
      console.log(crown);

      

    },
    afterRender: function(){
      

      
    },
    afterResize: function(width, height){},
    afterReBuild: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(section, origin, destination, direction){
      
    },
    onSlideLeave: function(section, origin, destination, direction){
      
    }
  });

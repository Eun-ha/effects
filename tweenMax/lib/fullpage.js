'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e};/*!
 * fullPage 3.0.9
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */(function(e,t,n,o){'function'==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):'object'===('undefined'==typeof exports?'undefined':_typeof(exports))?module.exports=o(t,n):t.fullpage=o(t,n)})(void 0,window,document,function(n,o){'use strict';// keeping central set of classnames and selectors
function i(i,d){var Sn=Math.round,yn=Math.max,wn=Math.abs;/**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */function v(e,t){e||ln(0),dn('autoScrolling',e,t);var n=r('.fp-section.active')[0];if(d.autoScrolling&&!d.scrollBar)c(En,{overflow:'hidden',height:'100%'}),S(oo.recordHistory,'internal'),c(Bn,{"-ms-touch-action":'none',"touch-action":'none'}),null!=n&&ln(n.offsetTop);else{c(En,{overflow:'visible',height:'initial'});var o=!!d.autoScrolling&&oo.recordHistory;//scrolling the page to the section with no animation
if(S(o,'internal'),c(Bn,{"-ms-touch-action":'',"touch-action":''}),null!=n){var i=Ke(n.offsetTop);i.element.scrollTo(0,i.options)}}}/**
        * Defines wheter to record the history for each hash change in the URL.
        */function S(e,t){dn('recordHistory',e,t)}/**
        * Defines the scrolling speed
        */function b(e,t){dn('scrollingSpeed',e,t)}/**
        * Sets fitToSection
        */function A(e,t){dn('fitToSection',e,t)}/**
        * Sets lockAnchors
        */function N(e){d.lockAnchors=e}/**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
        */function W(e){e?(Gt(),Jt()):(Qt(),Zt())}/**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */function K(e,t){'undefined'==typeof t?rn(e,'all','m'):(t=t.replace(/ /g,'').split(','),t.forEach(function(t){rn(e,t,'m')}))}/**
        * Adds or remove the mouse wheel hijacking
        */function U(e){e?(W(!0),en()):(W(!1),tn())}/**
        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
        */function q(e,t){'undefined'==typeof t?(rn(e,'all','k'),d.keyboardScrolling=e):(t=t.replace(/ /g,'').split(','),t.forEach(function(t){rn(e,t,'k')}))}/**
        * Moves the page up one section.
        */function $(){var e=p(r('.fp-section.active')[0],'.fp-section');//looping to the bottom if there's no more sections above
!e&&(d.loopTop||d.continuousVertical)&&(e=g(r('.fp-section'))),null!=e&&Ve(e,null,!0)}/**
        * Moves the page down one section.
        */function Q(){var e=f(r('.fp-section.active')[0],'.fp-section');//looping to the top if there's no more sections below
!e&&(d.loopBottom||d.continuousVertical)&&(e=r('.fp-section')[0]),null!=e&&Ve(e,null,!1)}/**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */function G(e,t){b(0,'internal'),J(e,t),b(oo.scrollingSpeed,'internal')}/**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */function J(e,t){var n=Vt(e);'undefined'==typeof t?null!=n&&Ve(n):Wt(e,t)}/**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */function Z(e){Pe('right',e)}/**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */function ee(e){Pe('left',e)}/**
         * When resizing is finished, we adjust the slides sizes and positions
         */function te(e){if(!t(Bn,'fp-destroyed')){Rn=!0,Mn=l(),zn=s();for(var o=r('.fp-section'),a=0;a<o.length;++a){var p=o[a],f=r('.fp-slides',p)[0],u=r('.fp-slide',p);d.verticalCentered&&c(r('.fp-tableCell',p),{height:jt(p)+'px'}),c(p,{height:Mn+'px'}),1<u.length&&xt(f,r('.fp-slide.active',f)[0])}d.scrollOverflow&&Fn.createScrollBarForAll();var v=r('.fp-section.active')[0],h=m(v,'.fp-section');h&&G(h+1),Rn=!1,R(d.afterResize)&&e&&d.afterResize.call(Bn,n.innerWidth,n.innerHeight),R(d.afterReBuild)&&!e&&d.afterReBuild.call(Bn)}//nothing to do if the plugin was destroyed
//isn't it the first section?
}/**
        * Determines whether fullpage.js is in responsive mode or not.
        */function ne(){return t(Ln,'fp-responsive')}/**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */function oe(e){var t=ne();e?!t&&(v(!1,'internal'),A(!1,'internal'),y(r('#fp-nav')),E(Ln,'fp-responsive'),R(d.afterResponsive)&&d.afterResponsive.call(Bn,e),d.scrollOverflow&&Fn.createScrollBarForAll()):t&&(v(oo.autoScrolling,'internal'),A(oo.autoScrolling,'internal'),w(r('#fp-nav')),x(Ln,'fp-responsive'),R(d.afterResponsive)&&d.afterResponsive.call(Bn,e))}function ie(){d.css3&&(d.css3=$t()),d.scrollBar=d.scrollBar||d.hybrid,pe(),fe(),K(!0),U(!0),v(d.autoScrolling,'internal'),Ct(),qt(),'complete'===o.readyState&&it(),n.addEventListener('load',it),d.scrollOverflow||xe(),ce()}function le(){n.addEventListener('scroll',Ae),n.addEventListener('hashchange',lt),n.addEventListener('focus',gt),n.addEventListener('blur',mt),n.addEventListener('resize',Tt),o.addEventListener('keydown',rt),o.addEventListener('keyup',ct),['click','touchstart'].forEach(function(e){o.addEventListener(e,ae)}),d.normalScrollElements&&(['mouseenter','touchstart'].forEach(function(e){re(e,!1)}),['mouseleave','touchend'].forEach(function(e){re(e,!0)}))}function ae(t){var e=t.target;e&&C(e,'#fp-nav a')?St.call(e,t):j(e,'.fp-tooltip')?st.call(e):j(e,'.fp-controlArrow')?ht.call(e,t):j(e,'.fp-slidesNav a')||null!=C(e,'.fp-slidesNav a')?yt.call(e,t):C(e,d.menu+' [data-menuanchor]')&&wt.call(e,t)}function re(e,t){o['fp_'+e]=t,o.addEventListener(e,se,!0)}function se(t){var e=t.type,n=!1,i=d.scrollOverflow,l='mouseleave'===e?t.toElement||t.relatedTarget:t.target;//onMouseLeave will use the destination target, not the one we are moving away from
//coming from closing a normalScrollElements modal or moving outside viewport?
if(l==o||!l)return U(!0),void(i&&d.scrollOverflowHandler.setIscroll(l,!0));//preventing mouseenter event to do anything when coming from a touchEnd event
//fixing issue #3576
if('touchend'===e&&(lo=!1,setTimeout(function(){lo=!0},800)),'mouseenter'!==e||lo){var a=d.normalScrollElements.split(',');a.forEach(function(e){if(!n){var t=j(l,e),o=C(l,e);//leaving a child inside the normalScoll element is not leaving the normalScroll #3661
(t||o)&&(!An.shared.isNormalScrollElement&&(U(!1),i&&d.scrollOverflowHandler.setIscroll(l,!1)),An.shared.isNormalScrollElement=!0,n=!0)}}),!n&&An.shared.isNormalScrollElement&&(U(!0),i&&d.scrollOverflowHandler.setIscroll(l,!0),An.shared.isNormalScrollElement=!1)}}/**
        * Checks the viewport a few times on a define interval of time to 
        * see if it has changed in any of those. If that's the case, it resizes.
        */function ce(){for(var e=1;4>e;e++)Zn=setTimeout(de,350*e)}/**
        * Adjusts a section to the viewport if it has changed.
        */function de(){var e=l(),t=s();(Mn!==e||zn!==t)&&(Mn=e,zn=t,te(!0))}/**
        * Setting options from DOM elements if they are not provided.
        */function pe(){//no anchors option? Checking for them in the DOM attributes
if(!d.anchors.length){var e=r(d.sectionSelector.split(',').join('[data-anchor],')+'[data-anchor]',Bn);e.length&&e.length===r('.fp-section').length&&(io=!0,e.forEach(function(e){d.anchors.push(e.getAttribute('data-anchor').toString())}))}//no tooltips option? Checking for them in the DOM attributes
if(!d.navigationTooltips.length){var t=r(d.sectionSelector.split(',').join('[data-tooltip],')+'[data-tooltip]',Bn);t.length&&t.forEach(function(e){d.navigationTooltips.push(e.getAttribute('data-tooltip').toString())})}}/**
        * Works over the DOM structure to set it up for the current fullpage options.
        */function fe(){c(Bn,{height:'100%',position:'relative'}),E(Bn,'fullpage-wrapper'),E(xn,'fp-enabled'),Mn=l(),x(Bn,'fp-destroyed'),ge();//styling the sections / slides / menu
for(var e=r('.fp-section'),t=0;t<e.length;t++){var n=t,o=e[t],a=r('.fp-slide',o),s=a.length;//caching the original styles to add them back on destroy('all')
o.setAttribute('data-fp-styles',o.getAttribute('style')),ve(o,n),he(o,n),0<s?ue(o,a,s):d.verticalCentered&&Pt(o)}//fixed elements need to be moved out of the plugin container due to problems with CSS3.
d.fixedElements&&d.css3&&r(d.fixedElements).forEach(function(e){Ln.appendChild(e)}),d.navigation&&Se(),we(),d.scrollOverflow&&(Fn=d.scrollOverflowHandler.init(d))}/**
        * Styles the horizontal slides for a section.
        */function ue(e,t,n){var i=o.createElement('div');i.className='fp-slides',k(t,i);var l=o.createElement('div');l.className='fp-slidesContainer',k(t,l),c(r('.fp-slidesContainer',e),{width:100*n+'%'}),1<n&&(d.controlArrows&&me(e),d.slidesNavigation&&_t(e,n)),t.forEach(function(e){c(e,{width:100/n+'%'}),d.verticalCentered&&Pt(e)});var a=r('.fp-slide.active',e)[0];//if the slide won't be an starting point, the default will be the first one
//the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
null!=a&&(0!==m(r('.fp-section.active'),'.fp-section')||0===m(r('.fp-section.active'),'.fp-section')&&0!==m(a))?on(a,'internal'):E(t[0],'active')}/**
        * Styling vertical sections
        */function ve(e,t){t||null!=r('.fp-section.active')[0]||E(e,'active'),Cn=r('.fp-section.active')[0],c(e,{height:Mn+'px'}),d.paddingTop&&c(e,{"padding-top":d.paddingTop}),d.paddingBottom&&c(e,{"padding-bottom":d.paddingBottom}),'undefined'!=typeof d.sectionsColor[t]&&c(e,{"background-color":d.sectionsColor[t]}),'undefined'!=typeof d.anchors[t]&&e.setAttribute('data-anchor',d.anchors[t])}/**
        * Sets the data-anchor attributes to the menu elements and activates the current one.
        */function he(e,n){'undefined'!=typeof d.anchors[n]&&t(e,'active')&&Mt(d.anchors[n],n),d.menu&&d.css3&&null!=C(r(d.menu)[0],'.fullpage-wrapper')&&r(d.menu).forEach(function(e){Ln.appendChild(e)})}/**
        * Adds internal classes to be able to provide customizable selectors
        * keeping the link with the style sheet.
        */function ge(){E(r(d.sectionSelector,Bn),'fp-section'),E(r(d.slideSelector,Bn),'fp-slide')}/**
        * Creates the control arrows for the given section
        */function me(e){var t=[V('<div class="fp-controlArrow fp-prev"></div>'),V('<div class="fp-controlArrow fp-next"></div>')];H(r('.fp-slides',e)[0],t),'#fff'!==d.controlArrowColor&&(c(r('.fp-controlArrow.fp-next',e),{"border-color":'transparent transparent transparent '+d.controlArrowColor}),c(r('.fp-controlArrow.fp-prev',e),{"border-color":'transparent '+d.controlArrowColor+' transparent transparent'})),d.loopHorizontal||y(r('.fp-controlArrow.fp-prev',e))}/**
        * Creates a vertical navigation bar.
        */function Se(){var e=o.createElement('div');e.setAttribute('id','fp-nav');var t=o.createElement('ul');e.appendChild(t),L(e,Ln);var n=r('#fp-nav')[0];E(n,'fp-'+d.navigationPosition),d.showActiveTooltip&&E(n,'fp-show-active');for(var l,a='',s=0;s<r('.fp-section').length;s++){l='',d.anchors.length&&(l=d.anchors[s]),a+='<li><a href="#'+l+'"><span class="fp-sr-only">'+ye(s,'Section')+'</span><span></span></a>';// Only add tooltip if needed (defined by user)
var c=d.navigationTooltips[s];'undefined'!=typeof c&&''!==c&&(a+='<div class="fp-tooltip fp-'+d.navigationPosition+'">'+c+'</div>'),a+='</li>'}r('ul',n)[0].innerHTML=a;//activating the current active section
var p=r('li',r('#fp-nav')[0])[m(r('.fp-section.active')[0],'.fp-section')];E(r('a',p),'active')}/**
        * Gets the name for screen readers for a section/slide navigation bullet.
        */function ye(e,t,n){var o='Section'===t?d.anchors[e]:n.getAttribute('data-anchor');return d.navigationTooltips[e]||o||t+' '+(e+1)}/*
        * Enables the Youtube videos API so we can control their flow if necessary.
        */function we(){r('iframe[src*="youtube.com/embed/"]',Bn).forEach(function(e){be(e,'enablejsapi=1')})}/**
        * Adds a new parameter and its value to the `src` of a given element
        */function be(e,t){var n=e.getAttribute('src');e.setAttribute('src',n+Ee(n)+t)}/*
        * Returns the prefix sign to use for a new parameter in an existen URL.
        *
        * @return {String}  ? | &
        */function Ee(e){return /\?/.test(e)?'&':'?'}/**
        * Actions and callbacks to fire afterRender
        */function xe(){var e=r('.fp-section.active')[0];E(e,'fp-completely'),Je(e),Ge(),et(e),d.scrollOverflow&&d.scrollOverflowHandler.afterLoad(),Le()&&R(d.afterLoad)&&Fe('afterLoad',{activeSection:e,element:e,direction:null,//for backwards compatibility callback (to be removed in a future!)
anchorLink:e.getAttribute('data-anchor'),sectionIndex:m(e,'.fp-section')}),R(d.afterRender)&&Fe('afterRender')}/**
        * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
        */function Le(){var e=at(),t=Vt(e.section);return!e.section||!t||'undefined'!=typeof t&&m(t)===m(Cn)}//when scrolling...
function Ae(){var e;if(!Rn&&(!d.autoScrolling||d.scrollBar)){var n=B(),o=Ce(n),a=0,s=n+l()/2,c=Ln.offsetHeight-l()===n,p=r('.fp-section');//when using `auto-height` for a small last section it won't be centered in the viewport
if(c)a=p.length-1;//is at top? when using `auto-height` for a small first section it won't be centered in the viewport
else if(!n)a=0;//taking the section which is showing more content in the viewport
else for(var f,u=0;u<p.length;++u)f=p[u],f.offsetTop<=s&&(a=u);//setting the visible section as active when manually scrolling
//executing only once the first time we reach the section
if(Te(o)&&!t(r('.fp-section.active')[0],'fp-completely')&&(E(r('.fp-section.active')[0],'fp-completely'),x(M(r('.fp-section.active')[0]),'fp-completely')),e=p[a],!t(e,'active')){ro=!0;var v,h,g=r('.fp-section.active')[0],S=m(g,'.fp-section')+1,y=zt(e),w=e.getAttribute('data-anchor'),b=m(e,'.fp-section')+1,L=r('.fp-slide.active',e)[0],A={activeSection:g,sectionIndex:b-1,anchorLink:w,element:e,leavingSection:S,direction:y};L&&(h=L.getAttribute('data-anchor'),v=m(L)),jn&&(E(e,'active'),x(M(e),'active'),R(d.onLeave)&&Fe('onLeave',A),R(d.afterLoad)&&Fe('afterLoad',A),nt(g),Je(e),et(e),Mt(w,b-1),d.anchors.length&&(kn=w),Xt(v,h,w,b)),clearTimeout(Qn),Qn=setTimeout(function(){ro=!1},100)}d.fitToSection&&(clearTimeout(Gn),Gn=setTimeout(function(){d.fitToSection&&//is the destination element bigger than the viewport?
r('.fp-section.active')[0].offsetHeight<=Mn&&ke()},d.fitToSectionDelay))}}/**
        * Fits the site to the nearest active section
        */function ke(){jn&&(Rn=!0,Ve(r('.fp-section.active')[0]),Rn=!1)}/**
        * Determines whether the active section has seen in its whole or not.
        */function Te(e){var t=r('.fp-section.active')[0].offsetTop,n=t+l();return'up'==e?n>=B()+l():t<=B()}/**
        * Determines whether a section is in the viewport or not.
        */function Oe(e){var t=e.getBoundingClientRect(),n=t.top,o=t.bottom,i=n+2<Mn&&0<n,l=2<o&&o<Mn;//sometimes there's a 1px offset on the bottom of the screen even when the 
//section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
//using this prevents from lazyLoading the section that is not yet visible 
//(only 1 pixel offset is)
return i||l}/**
        * Gets the directon of the the scrolling fired by the scroll event.
        */function Ce(e){var t=e>so?'down':'up';return so=e,ho=e,t}/**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */function He(e){if(Vn.m[e]){var t='down'===e?Q:$;if(d.scrollOverflow){var n=d.scrollOverflowHandler.scrollable(r('.fp-section.active')[0]),o='down'===e?'bottom':'top';if(null==n)t();else//is the scrollbar at the start/end of the scroll?
if(d.scrollOverflowHandler.isScrolled(o,n))t();else return!0}else// moved up/down
t()}}/*
        * Preventing bouncing in iOS #2285
        */function Ie(t){d.autoScrolling&&Be(t)&&Vn.m.up&&z(t)}/* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */function Ne(t){var e=C(t.target,'.fp-section')||r('.fp-section.active')[0];if(Be(t)){d.autoScrolling&&z(t);var o=nn(t);fo=o.y,uo=o.x,r('.fp-slides',e).length&&wn(po-uo)>wn(co-fo)?!Hn&&wn(po-uo)>s()/100*d.touchSensitivity&&(po>uo?Vn.m.right&&Z(e):Vn.m.left&&ee(e)):d.autoScrolling&&jn&&wn(co-fo)>n.innerHeight/100*d.touchSensitivity&&(co>fo?He('down'):fo>co&&He('up'))}}/**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */function Be(t){//if is not IE   ||  IE is detecting `touch` or `pen`
return'undefined'==typeof t.pointerType||'mouse'!=t.pointerType}/**
        * Handler for the touch start event.
        */function Me(t){if(d.fitToSection&&(eo=!1),Be(t)){var e=nn(t);co=e.y,po=e.x}}/**
        * Gets the average of the last `number` elements of the given array.
        */function ze(e,t){//taking `number` elements from the end to make the average, if there are not enought, 1
for(var n=Math.ceil,o=0,l=e.slice(yn(e.length-t,1)),a=0;a<l.length;a++)o+=l[a];return n(o/t)}/**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */function Re(o){var i=Math.min,l=new Date().getTime(),a=t(r('.fp-completely')[0],'fp-normal-scroll');//is scroll allowed?
if(!Vn.m.down&&!Vn.m.up)return z(o),!1;//autoscrolling and not zooming?
if(d.autoScrolling&&!On&&!a){o=o||n.event;var s=o.wheelDelta||-o.deltaY||-o.detail,c=yn(-1,i(1,s)),p='undefined'!=typeof o.wheelDeltaX||'undefined'!=typeof o.deltaX,f=wn(o.wheelDeltaX)<wn(o.wheelDelta)||wn(o.deltaX)<wn(o.deltaY)||!p;149<Dn.length&&Dn.shift(),Dn.push(wn(s)),d.scrollBar&&z(o);//time difference between the last scroll and the current one
var u=l-vo;if(vo=l,200<u&&(Dn=[]),jn){var v=ze(Dn,10),h=ze(Dn,70);v>=h&&f&&(0>c?He('down'):He('up'))}return!1}d.fitToSection&&(eo=!1)}/**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */function Pe(e,t){var n=null==t?r('.fp-section.active')[0]:t,o=r('.fp-slides',n)[0];// more than one slide needed and nothing should be sliding
if(!(null==o||Hn||2>r('.fp-slide',o).length)){var i=r('.fp-slide.active',o)[0],l=null;//isn't there a next slide in the secuence?
if(l='left'===e?p(i,'.fp-slide'):f(i,'.fp-slide'),null==l){//respect loopHorizontal settin
if(!d.loopHorizontal)return;var a=M(i);l='left'===e?a[a.length-1]:a[0]}Hn=!An.test.isTesting,xt(o,l,e)}}/**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */function je(){for(var e=r('.fp-slide.active'),t=0;t<e.length;t++)on(e[t],'internal')}/**
        * Returns the destination Y position based on the scrolling direction and
        * the height of the section.
        */function De(e){var t=e.offsetHeight,n=e.offsetTop,o=n,i=n>ho,l=o-Mn+t,a=d.bigSectionsDestination;//top of the desination will be at the top of the viewport
//is the destination element bigger than the viewport?
return t>Mn?(!i&&!a||'bottom'===a)&&(o=l):(i||Rn&&null==h(e))&&(o=l),ho=o,o}/**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */function Ve(e,n,o){//callback (onLeave) if the site is not just resizing and readjusting the slides
// If continuousVertical && we need to wrap around
if(null!=e){//there's no element to scroll, leaving the function
var i,l,a=De(e),s={element:e,callback:n,isMovementUp:o,dtop:a,yMovement:zt(e),anchorLink:e.getAttribute('data-anchor'),sectionIndex:m(e,'.fp-section'),activeSlide:r('.fp-slide.active',e)[0],activeSection:r('.fp-section.active')[0],leavingSection:m(r('.fp-section.active'),'.fp-section')+1,//caching the value of isResizing at the momment the function is called
//because it will be checked later inside a setTimeout and the value might change
localIsResizing:Rn};//local variables
//quiting when destination scroll is the same as the current one
if((s.activeSection!=e||Rn)&&(!d.scrollBar||B()!==s.dtop||t(e,'fp-auto-height'))){if(null!=s.activeSlide&&(i=s.activeSlide.getAttribute('data-anchor'),l=m(s.activeSlide)),!s.localIsResizing){var c=s.yMovement;//required for continousVertical
if('undefined'!=typeof o&&(c=o?'up':'down'),s.direction=c,R(d.onLeave)&&!1===Fe('onLeave',s))return}d.autoScrolling&&d.continuousVertical&&'undefined'!=typeof s.isMovementUp&&(!s.isMovementUp&&'up'==s.yMovement||// Intending to scroll down but about to go up or
s.isMovementUp&&'down'==s.yMovement)&&(s=Ue(s)),s.localIsResizing||nt(s.activeSection),d.scrollOverflow&&d.scrollOverflowHandler.beforeLeave(),E(e,'active'),x(M(e),'active'),Je(e),d.scrollOverflow&&d.scrollOverflowHandler.onLeave(),jn=An.test.isTesting,Xt(l,i,s.anchorLink,s.sectionIndex),Xe(s),kn=s.anchorLink,Mt(s.anchorLink,s.sectionIndex)}}}/**
        * Dispatch events & callbacks making sure it does it on the right format, depending on
        * whether v2compatible is being used or not.
        */function Fe(e,t){var n=_e(e,t);if(!d.v2compatible){if(P(Bn,e,n),!1===d[e].apply(n[Object.keys(n)[0]],X(n)))return!1;}else if(!1===d[e].apply(n[0],n.slice(1)))return!1;return!0}/**
        * Makes sure to only create a Panel object if the element exist
        */function We(e){return e?new gn(e):null}function Ye(e){return e?new mn(e):null}/**
        * Gets the event's data for the given event on the right format. Depending on whether
        * v2compatible is being used or not.
        */function _e(e,t){var n;return n=d.v2compatible?{afterRender:function e(){return[Bn]},onLeave:function e(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function e(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function e(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function e(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}:{afterRender:function e(){return{section:We(r('.fp-section.active')[0]),slide:Ye(r('.fp-slide.active',r('.fp-section.active')[0])[0])}},onLeave:function e(){return{origin:We(t.activeSection),destination:We(t.element),direction:t.direction}},afterLoad:function e(){return n.onLeave()},afterSlideLoad:function e(){return{section:We(t.section),origin:Ye(t.prevSlide),destination:Ye(t.destiny),direction:t.direction}},onSlideLeave:function e(){return n.afterSlideLoad()}},n[e]()}/**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */function Xe(e){var t=700>d.scrollingSpeed,n=t?700:d.scrollingSpeed;// using CSS3 translate functionality
if(d.css3&&d.autoScrolling&&!d.scrollBar){// The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
// that's why we round it to 0.
var o='translate3d(0px, -'+Sn(e.dtop)+'px, 0px)';Dt(o,!0),d.scrollingSpeed?(clearTimeout(qn),qn=setTimeout(function(){$e(e),jn=!t},d.scrollingSpeed)):$e(e)}// using JS to animate
else{var i=Ke(e.dtop);An.test.top=-e.dtop+'px',un(i.element,i.options,d.scrollingSpeed,function(){d.scrollBar?setTimeout(function(){$e(e)},30):($e(e),jn=!t)})}// enabling canScroll after the minimum transition laps
t&&(clearTimeout(no),no=setTimeout(function(){jn=!0},n))}/**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */function Ke(e){var t={};//top property animation
return d.autoScrolling&&!d.scrollBar?(t.options=-e,t.element=r('.fullpage-wrapper')[0]):(t.options=e,t.element=n),t}/**
        * Adds sections before or after the current one to create the infinite effect.
        */function Ue(e){return e.isMovementUp?I(r('.fp-section.active')[0],Y(e.activeSection,'.fp-section')):H(r('.fp-section.active')[0],_(e.activeSection,'.fp-section').reverse()),ln(r('.fp-section.active')[0].offsetTop),je(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.offsetTop,e.yMovement=zt(e.element),e}/**
        * Fix section order after continuousVertical changes have been animated
        */function qe(e){// If continuousVertical is in effect (and autoScrolling would also be in effect then),
// finish moving the elements around so the direct navigation will function more simply
null==e.wrapAroundElements||(// Maintain the active slides visible in the viewport
e.isMovementUp?I(r('.fp-section')[0],e.wrapAroundElements):H(r('.fp-section')[r('.fp-section').length-1],e.wrapAroundElements),ln(r('.fp-section.active')[0].offsetTop),je())}/**
        * Actions to do once the section is loaded.
        */function $e(e){qe(e),R(d.afterLoad)&&!e.localIsResizing&&Fe('afterLoad',e),d.scrollOverflow&&d.scrollOverflowHandler.afterLoad(),e.localIsResizing||et(e.element),E(e.element,'fp-completely'),x(M(e.element),'fp-completely'),Ge(),jn=!0,R(e.callback)&&e.callback()}/**
        * Sets the value for the given attribute from the `data-` attribute with the same suffix
        * ie: data-srcset ==> srcset  |  data-src ==> src
        */function Qe(e,t){e.setAttribute(t,e.getAttribute('data-'+t)),e.removeAttribute('data-'+t)}/**
        * Makes sure lazyload is done for other sections in the viewport that are not the
        * active one. 
        */function Ge(){var e=r('.fp-auto-height')[0]||ne()&&r('.fp-auto-height-responsive')[0];//quitting when it doesn't apply
d.lazyLoading&&e&&//making sure to lazy load auto-height sections that are in the viewport
r('.fp-section:not(.active)').forEach(function(e){Oe(e)&&Je(e)})}/**
        * Lazy loads image, video and audio elements.
        */function Je(e){if(d.lazyLoading){var t=ot(e);r('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]',t).forEach(function(t){if(['src','srcset'].forEach(function(n){var o=t.getAttribute('data-'+n);null!=o&&o&&(Qe(t,n),t.addEventListener('load',function(){Ze(e)}))}),j(t,'source')){var n=C(t,'video, audio');n&&(n.load(),n.onloadeddata=function(){Ze(e)})}})}}/**
        * Callback firing when a lazy load media element has loaded.
        * Making sure it only fires one per section in normal conditions (if load time is not huge)
        */function Ze(e){d.scrollOverflow&&(clearTimeout(to),to=setTimeout(function(){t(Ln,'fp-responsive')||Fn.createScrollBar(e)},200))}/**
        * Plays video and audio elements.
        */function et(e){var t=ot(e);//playing HTML5 media elements
r('video, audio',t).forEach(function(e){e.hasAttribute('data-autoplay')&&'function'==typeof e.play&&e.play()}),r('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute('data-autoplay')&&tt(e),e.onload=function(){e.hasAttribute('data-autoplay')&&tt(e)}})}/**
        * Plays a youtube video
        */function tt(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}','*')}/**
        * Stops video and audio elements.
        */function nt(e){var t=ot(e);//stopping HTML5 media elements
r('video, audio',t).forEach(function(e){e.hasAttribute('data-keepplaying')||'function'!=typeof e.pause||e.pause()}),r('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute('src'))&&!e.hasAttribute('data-keepplaying')&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*')})}/**
        * Gets the active slide (or section) for the given section
        */function ot(e){var t=r('.fp-slide.active',e);return t.length&&(e=t[0]),e}/**
        * Scrolls to the anchor in the URL when loading the site
        */function it(){var e=at(),t=e.section,n=e.slide;t&&(d.animateAnchor?Wt(t,n):G(t,n))}/**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */function lt(){if(!ro&&!d.lockAnchors){var e=at(),t=e.section,n=e.slide,o='undefined'==typeof kn,i='undefined'==typeof kn&&'undefined'==typeof n&&!Hn;//when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
t&&t.length&&(t&&t!==kn&&!o||i||!Hn&&Tn!=n)&&Wt(t,n)}}//gets the URL anchors (section and slide)
function at(){var e,t,o=n.location.hash;if(o.length){//getting the anchor link in the URL and deleting the `#`
var i=o.replace('#','').split('/'),l=-1<o.indexOf('#/');//using / for visual reasons and not as a section/slide separator #2803
e=l?'/'+i[1]:decodeURIComponent(i[0]);var a=l?i[2]:i[1];a&&a.length&&(t=decodeURIComponent(a))}return{section:e,slide:t}}//Sliding with arrow keys, both, vertical and horizontal
function rt(t){clearTimeout(Jn);var e=o.activeElement,n=t.keyCode;//tab?
if(9===n)ft(t);else if(!j(e,'textarea')&&!j(e,'input')&&!j(e,'select')&&'true'!==e.getAttribute('contentEditable')&&''!==e.getAttribute('contentEditable')&&d.keyboardScrolling&&d.autoScrolling){-1<[40,38,32,33,34].indexOf(n)&&z(t),On=t.ctrlKey,Jn=setTimeout(function(){bt(t)},150);//preventing the scroll with arrow keys & spacebar & Page Up & Down keys
}}function st(){P(u(this),'click')}//to prevent scrolling while zooming
function ct(t){Pn&&(On=t.ctrlKey)}//binding the mousemove when the mouse's middle button is released
function dt(t){2==t.which&&(go=t.pageY,Bn.addEventListener('mousemove',Et))}//unbinding the mousemove when the mouse's middle button is released
function pt(t){2==t.which&&Bn.removeEventListener('mousemove',Et)}/**
        * Makes sure the tab key will only focus elements within the current section/slide
        * preventing this way from breaking the page.
        * Based on "Modals and keyboard traps"
        * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
        */function ft(t){function e(t){return z(t),l[0]?l[0].focus():null}//outside any section or slide? Let's not hijack the tab!
var n=t.shiftKey,i=o.activeElement,l=ut(ot(r('.fp-section.active')[0]));vt(t)||(i?null==C(i,'.fp-section.active,.fp-section.active .fp-slide.active')&&(i=e(t)):e(t),(!n&&i==l[l.length-1]||n&&i==l[0])&&z(t))}/**
        * Gets all the focusable elements inside the passed element.
        */function ut(e){return[].slice.call(r('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',e)).filter(function(e){return'-1'!==e.getAttribute('tabindex')//are also not hidden elements (or with hidden parents)
&&null!==e.offsetParent})}/**
        * Determines whether the focus is outside fullpage.js sections/slides or not.
        */function vt(t){var e=ut(o),n=e.indexOf(o.activeElement),i=t.shiftKey?n-1:n+1,l=e[i],a=Ye(C(l,'.fp-slide')),r=We(C(l,'.fp-section'));return!a&&!r}//Scrolling horizontally when clicking on the slider controls.
function ht(){/*jshint validthis:true */var e=C(this,'.fp-section');/*jshint validthis:true */t(this,'fp-prev')?Vn.m.left&&ee(e):Vn.m.right&&Z(e)}// changing isWindowFocused to true on focus event
function gt(){Pn=!0}//when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
function mt(){Pn=!1,On=!1}//Scrolls to the section when clicking the navigation bullet
function St(t){z(t);/*jshint validthis:true */var e=m(C(this,'#fp-nav li'));Ve(r('.fp-section')[e])}//Scrolls the slider to the given slide destination for the given section
function yt(t){z(t);/*jshint validthis:true */var e=r('.fp-slides',C(this,'.fp-section'))[0],n=r('.fp-slide',e)[m(C(this,'li'))];xt(e,n)}//Menu item handler when not using anchors or using lockAnchors:true
function wt(t){r(d.menu)[0]&&(d.lockAnchors||!d.anchors.length)&&(z(t),J(this.getAttribute('data-menuanchor')))}/**
        * Keydown event
        */function bt(t){var e=t.shiftKey,n=o.activeElement,i=j(n,'video')||j(n,'audio');//do nothing if we can not scroll or we are not using horizotnal key arrows.
if(jn||!(0>[37,39].indexOf(t.keyCode)))switch(t.keyCode){//up
case 38:case 33:Vn.k.up&&$();break;//down
case 32://spacebar
if(e&&Vn.k.up&&!i){$();break}/* falls through */case 40:case 34:Vn.k.down&&(32!==t.keyCode||!i)&&Q();break;//Home
case 36:Vn.k.up&&J(1);break;//End
case 35:Vn.k.down&&J(r('.fp-section').length);break;//left
case 37:Vn.k.left&&ee();break;//right
case 39:Vn.k.right&&Z();break;default:// exit this handler for other keys
}}/**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */function Et(t){d.autoScrolling&&(jn&&(t.pageY<go&&Vn.m.up?$():t.pageY>go&&Vn.m.down&&Q()),go=t.pageY)}/**
        * Scrolls horizontal sliders.
        */function xt(e,n,o){var i=C(e,'.fp-section'),l={slides:e,destiny:n,direction:o,destinyPos:{left:n.offsetLeft},slideIndex:m(n),section:i,sectionIndex:m(i,'.fp-section'),anchorLink:i.getAttribute('data-anchor'),slidesNav:r('.fp-slidesNav',i)[0],slideAnchor:Ut(n),prevSlide:r('.fp-slide.active',i)[0],prevSlideIndex:m(r('.fp-slide.active',i)[0]),//caching the value of isResizing at the momment the function is called
//because it will be checked later inside a setTimeout and the value might change
localIsResizing:Rn};return l.xMovement=Rt(l.prevSlideIndex,l.slideIndex),l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||(jn=!1),d.onSlideLeave&&!l.localIsResizing&&'none'!==l.xMovement&&R(d.onSlideLeave)&&!1===Fe('onSlideLeave',l)?void(Hn=!1):void(E(n,'active'),x(M(n),'active'),!l.localIsResizing&&(nt(l.prevSlide),Je(n)),!d.loopHorizontal&&d.controlArrows&&(D(r('.fp-controlArrow.fp-prev',i),0!==l.slideIndex),D(r('.fp-controlArrow.fp-next',i),null!=h(n))),t(i,'active')&&!l.localIsResizing&&Xt(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),At(e,l,!0))}function Lt(e){kt(e.slidesNav,e.slideIndex),e.localIsResizing||(R(d.afterSlideLoad)&&Fe('afterSlideLoad',e),jn=!0,et(e.destiny)),Hn=!1}/**
        * Performs the horizontal movement. (CSS3 or jQuery)
        *
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */function At(e,t,n){var o=t.destinyPos;if(d.css3){var i='translate3d(-'+Sn(o.left)+'px, 0px, 0px)';An.test.translate3dH[t.sectionIndex]=i,c(Ht(r('.fp-slidesContainer',e)),an(i)),$n=setTimeout(function(){n&&Lt(t)},d.scrollingSpeed)}else An.test.left[t.sectionIndex]=Sn(o.left),un(e,Sn(o.left),d.scrollingSpeed,function(){n&&Lt(t)})}/**
        * Sets the state for the horizontal bullet navigations.
        */function kt(e,t){d.slidesNavigation&&null!=e&&(x(r('.active',e),'active'),E(r('a',r('li',e)[t]),'active'))}/*
        * Resize event handler.
        */function Tt(){Rn=!0,clearTimeout(Kn),Kn=setTimeout(function(){//issue #3336 
//(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
//so we check it 3 times with intervals in that case
for(var e=0;4>e;e++)Un=setTimeout(Ot,200*e)},200)}/**
        * When resizing the site, we adjust the heights of the sections, slimScroll...
        */function Ot(){// rebuild immediately on touch devices
if(Ct(),In){var e=o.activeElement;//if the keyboard is NOT visible
if(!j(e,'textarea')&&!j(e,'input')&&!j(e,'select')){var t=l();//making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
wn(t-mo)>20*yn(mo,t)/100&&(te(!0),mo=t)}}else de()}/**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */function Ct(){var e=d.responsive||d.responsiveWidth,t=d.responsiveHeight,o=e&&n.innerWidth<e,i=t&&n.innerHeight<t;//backwards compatiblity
//only calculating what we need. Remember its called on the resize event.
e&&t?oe(o||i):e?oe(o):t&&oe(i)}/**
        * Adds transition animations for the given element
        */function Ht(e){var t='all '+d.scrollingSpeed+'ms '+d.easingcss3;return x(e,'fp-notransition'),c(e,{"-webkit-transition":t,transition:t})}/**
        * Remove transition animations for the given element
        */function It(e){return E(e,'fp-notransition')}/**
        * Activating the vertical navigation bullets according to the given slide name.
        */function Nt(e,t){d.navigation&&null!=r('#fp-nav')[0]&&(x(r('.active',r('#fp-nav')[0]),'active'),e?E(r('a[href="#'+e+'"]',r('#fp-nav')[0]),'active'):E(r('a',r('li',r('#fp-nav')[0])[t]),'active'))}/**
        * Activating the website main menu elements according to the given slide name.
        */function Bt(e){r(d.menu).forEach(function(t){d.menu&&null!=t&&(x(r('.active',t),'active'),E(r('[data-menuanchor="'+e+'"]',t),'active'))})}/**
        * Sets to active the current menu and vertical nav items.
        */function Mt(e,t){Bt(e),Nt(e,t)}/**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */function zt(e){var t=m(r('.fp-section.active')[0],'.fp-section'),n=m(e,'.fp-section');return t==n?'none':t>n?'up':'down'}/**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */function Rt(e,t){return e==t?'none':e>t?'left':'right'}function Pt(e){//In case we are styling for the 2nd time as in with reponsiveSlides
if(!t(e,'fp-table')){var n=o.createElement('div');n.className='fp-tableCell',n.style.height=jt(e)+'px',E(e,'fp-table'),T(e,n)}}function jt(e){var n=Mn;if(d.paddingTop||d.paddingBottom){var o=e;t(o,'fp-section')||(o=C(e,'.fp-section'));var i=parseInt(getComputedStyle(o)['padding-top'])+parseInt(getComputedStyle(o)['padding-bottom']);n=Mn-i}return n}/**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */function Dt(e,t){t?Ht(Bn):It(Bn),c(Bn,an(e)),An.test.translate3d=e,setTimeout(function(){x(Bn,'fp-notransition')},10)}/**
        * Gets a section by its anchor / index
        */function Vt(e){var t=r('.fp-section[data-anchor="'+e+'"]',Bn)[0];if(!t){var n='undefined'==typeof e?0:e-1;t=r('.fp-section')[n]}return t}/**
        * Gets a slide inside a given section by its anchor / index
        */function Ft(e,t){var n=r('.fp-slide[data-anchor="'+e+'"]',t)[0];return null==n&&(e='undefined'==typeof e?0:e,n=r('.fp-slide',t)[e]),n}/**
        * Scrolls to the given section and slide anchors
        */function Wt(e,n){var o=Vt(e);//do nothing if there's no section with the given anchor name
if(null!=o){var i=Ft(n,o);//we need to scroll to the section and then to the slide
Ut(o)===kn||t(o,'active')?Yt(i):Ve(o,function(){Yt(i)})}}/**
        * Scrolls the slider to the given slide destination for the given section
        */function Yt(e){null!=e&&xt(C(e,'.fp-slides'),e)}/**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */function _t(e,t){L(V('<div class="fp-slidesNav"><ul></ul></div>'),e);var n=r('.fp-slidesNav',e)[0];//top or bottom
E(n,'fp-'+d.slidesNavPosition);for(var o,l=0;l<t;l++)o=r('.fp-slide',e)[l],L(V('<li><a href="#"><span class="fp-sr-only">'+ye(l,'Slide',o)+'</span><span></span></a></li>'),r('ul',n)[0]);//centering it
c(n,{"margin-left":'-'+n.innerWidth/2+'px'}),E(r('a',r('li',n)[0]),'active')}/**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */function Xt(e,t,n){var o='';d.anchors.length&&!d.lockAnchors&&(e?(null!=n&&(o=n),null==t&&(t=e),Tn=t,Kt(o+'/'+t)):null==e?Kt(n):(Tn=t,Kt(n))),qt()}/**
        * Sets the URL hash.
        */function Kt(e){if(d.recordHistory)location.hash=e;else//Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
if(In||Nn)n.history.replaceState(void 0,void 0,'#'+e);else{var t=n.location.href.split('#')[0];n.location.replace(t+'#'+e)}}/**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */function Ut(e){if(!e)return null;var t=e.getAttribute('data-anchor'),n=m(e);//Slide without anchor link? We take the index instead.
return null==t&&(t=n),t}/**
        * Sets a class for the body of the page depending on the active section / slide
        */function qt(){var e=r('.fp-section.active')[0],t=r('.fp-slide.active',e)[0],n=Ut(e),o=Ut(t),i=n+'';t&&(i=i+'-'+o),i=i.replace('/','-').replace('#','');//removing previous anchor classes
var l=/\b\s?fp-viewing-[^\s]+\b/g;Ln.className=Ln.className.replace(l,''),E(Ln,'fp-viewing-'+i)}/**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */function $t(){var e,i=o.createElement('p'),l={webkitTransform:'-webkit-transform',OTransform:'-o-transform',msTransform:'-ms-transform',MozTransform:'-moz-transform',transform:'transform'};//preventing the style p:empty{display: none;} from returning the wrong result
for(var a in i.style.display='block',o.body.insertBefore(i,null),l)void 0!==i.style[a]&&(i.style[a]='translate3d(1px,1px,1px)',e=n.getComputedStyle(i).getPropertyValue(l[a]));return o.body.removeChild(i),void 0!==e&&0<e.length&&'none'!==e}/**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */function Qt(){o.addEventListener?(o.removeEventListener('mousewheel',Re,!1),o.removeEventListener('wheel',Re,!1),o.removeEventListener('MozMousePixelScroll',Re,!1)):o.detachEvent('onmousewheel',Re)}/**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        */function Gt(){var e,t='';n.addEventListener?e='addEventListener':(e='attachEvent',t='on');// detect available wheel event
var i='onwheel'in o.createElement('div')?'wheel':// Modern browsers support "wheel"
void 0===o.onmousewheel?// Webkit and IE support at least "mousewheel"
'DOMMouseScroll':'mousewheel',l=!!_n&&{passive:!1};// let's assume that remaining browsers are older Firefox
'DOMMouseScroll'==i?o[e](t+'MozMousePixelScroll',Re,l):o[e](t+i,Re,l)}/**
        * Binding the mousemove when the mouse's middle button is pressed
        */function Jt(){Bn.addEventListener('mousedown',dt),Bn.addEventListener('mouseup',pt)}/**
        * Unbinding the mousemove when the mouse's middle button is released
        */function Zt(){Bn.removeEventListener('mousedown',dt),Bn.removeEventListener('mouseup',pt)}/**
        * Adds the possibility to auto scroll through sections on touch devices.
        */function en(){if(In||Nn){d.autoScrolling&&(Ln.removeEventListener(Yn.touchmove,Ie,{passive:!1}),Ln.addEventListener(Yn.touchmove,Ie,{passive:!1}));var e=d.touchWrapper;e.removeEventListener(Yn.touchstart,Me),e.removeEventListener(Yn.touchmove,Ne,{passive:!1}),e.addEventListener(Yn.touchstart,Me),e.addEventListener(Yn.touchmove,Ne,{passive:!1})}}/**
        * Removes the auto scrolling for touch devices.
        */function tn(){if(In||Nn){d.autoScrolling&&(Ln.removeEventListener(Yn.touchmove,Ne,{passive:!1}),Ln.removeEventListener(Yn.touchmove,Ie,{passive:!1}));var e=d.touchWrapper;e.removeEventListener(Yn.touchstart,Me),e.removeEventListener(Yn.touchmove,Ne,{passive:!1})}}/*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        *//**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */function nn(t){var e=[];return e.y='undefined'!=typeof t.pageY&&(t.pageY||t.pageX)?t.pageY:t.touches[0].pageY,e.x='undefined'!=typeof t.pageX&&(t.pageY||t.pageX)?t.pageX:t.touches[0].pageX,Nn&&Be(t)&&d.scrollBar&&'undefined'!=typeof t.touches&&(e.y=t.touches[0].pageY,e.x=t.touches[0].pageX),e}/**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */function on(e,t){b(0,'internal'),'undefined'!=typeof t&&(Rn=!0),xt(C(e,'.fp-slides'),e),'undefined'!=typeof t&&(Rn=!1),b(oo.scrollingSpeed,'internal')}/**
        * Scrolls silently (with no animation) the page to the given Y position.
        */function ln(e){// The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
// that's why we round it to 0.
var t=Sn(e);if(d.css3&&d.autoScrolling&&!d.scrollBar){Dt('translate3d(0px, -'+t+'px, 0px)',!1)}else if(d.autoScrolling&&!d.scrollBar)c(Bn,{top:-t+'px'}),An.test.top=-t+'px';else{var n=Ke(t);vn(n.element,n.options)}}/**
        * Returns the cross-browser transform string.
        */function an(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}/**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */function rn(e,t,n){'all'===t?Object.keys(Vn[n]).forEach(function(t){Vn[n][t]=e}):Vn[n][t]=e}/*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */function sn(e){v(!1,'internal'),K(!0),U(!1),q(!1),E(Bn,'fp-destroyed'),[$n,qn,Kn,Qn,Gn,Zn,Un,no].forEach(function(e){clearTimeout(e)}),n.removeEventListener('scroll',Ae),n.removeEventListener('hashchange',lt),n.removeEventListener('resize',Tt),o.removeEventListener('keydown',rt),o.removeEventListener('keyup',ct),['click','touchstart'].forEach(function(e){o.removeEventListener(e,ae)}),['mouseenter','touchstart','mouseleave','touchend'].forEach(function(e){o.removeEventListener(e,se,!0)}//true is required!
),e&&cn()}/*
        * Removes inline styles added by fullpage.js
        */function cn(){ln(0),r('img[data-src], source[data-src], audio[data-src], iframe[data-src]',Bn).forEach(function(e){Qe(e,'src')}),r('img[data-srcset]').forEach(function(e){Qe(e,'srcset')}),F(r('#fp-nav, .fp-slidesNav, .fp-controlArrow')),c(r('.fp-section'),{height:'',"background-color":'',padding:''}),c(r('.fp-slide'),{width:''}),c(Bn,{height:'',position:'',"-ms-touch-action":'',"touch-action":''}),c(En,{overflow:'',height:''}),x(xn,'fp-enabled'),x(Ln,'fp-responsive'),Ln.className.split(/\s+/).forEach(function(e){0===e.indexOf('fp-viewing')&&x(Ln,e)}),r('.fp-section, .fp-slide').forEach(function(e){d.scrollOverflowHandler&&d.scrollOverflow&&d.scrollOverflowHandler.remove(e),x(e,'fp-table active fp-completely');var n=e.getAttribute('data-fp-styles');n&&e.setAttribute('style',e.getAttribute('data-fp-styles')),t(e,'fp-section')&&!io&&e.removeAttribute('data-anchor')}),It(Bn),['.fp-tableCell','.fp-slidesContainer','.fp-slides'].forEach(function(e){r(e,Bn).forEach(function(e){O(e)})}),c(Bn,{"-webkit-transition":'none',transition:'none'}),n.scrollTo(0,0);//removing selectors
['fp-section','fp-slide','fp-slidesContainer'].forEach(function(e){x(r('.'+e),e)})}/*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */function dn(e,t,n){d[e]=t,'internal'!==n&&(oo[e]=t)}/**
        * Displays warnings
        */function pn(){var e=d.licenseKey;return bn?e&&20>e.length&&(console.warn('%c This website was made using fullPage.js slider. More info on the following website:','font-size: 15px;background:yellow;'),console.warn('%c https://alvarotrigo.com/fullPage/','font-size: 15px;background:yellow;')):(a('error','Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:'),a('error','https://github.com/alvarotrigo/fullPage.js#options.')),t(xn,'fp-enabled')?void a('error','Fullpage.js can only be initialized once and you are doing it multiple times!'):void(//using extensions? Wrong file!
//anchors can not have the same value as any element ID or NAME
d.continuousVertical&&(d.loopTop||d.loopBottom)&&(d.continuousVertical=!1,a('warn','Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled')),d.scrollOverflow&&(d.scrollBar||!d.autoScrolling)&&a('warn','Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox'),d.continuousVertical&&(d.scrollBar||!d.autoScrolling)&&(d.continuousVertical=!1,a('warn','Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled')),d.scrollOverflow&&null==d.scrollOverflowHandler&&(d.scrollOverflow=!1,a('error','The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.')),ao.forEach(function(e){d[e]&&a('warn','fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: '+e)}),d.anchors.forEach(function(e){//case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
var t=[].slice.call(r('[name]')).filter(function(t){return t.getAttribute('name')&&t.getAttribute('name').toLowerCase()==e.toLowerCase()}),n=[].slice.call(r('[id]')).filter(function(t){return t.getAttribute('id')&&t.getAttribute('id').toLowerCase()==e.toLowerCase()});if(n.length||t.length){a('error','data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');var o=n.length?'id':'name';(n.length||t.length)&&a('error','"'+e+'" is is being used by another element `'+o+'` property')}}));// Disable mutually exclusive settings
}/**
        * Getting the position of the element to scroll when using jQuery animations
        */function fn(e){var o;//is not the window element and is a slide?
//gets the top property of the wrapper
return o=e.self!=n&&t(e,'fp-slides')?e.scrollLeft:!d.autoScrolling||d.scrollBar?B():e.offsetTop,o}/**
        * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
        * http://stackoverflow.com/a/16136789/1081396
        */function un(e,t,o,i){var l=fn(e),a=0;eo=!0;var r=function(){if(eo){//in order to stope it from other function whenever we want
var s=t;a+=20,o&&(s=n.fp_easings[d.easing](a,l,t-l,o)),vn(e,s),a<o?setTimeout(r,20):'undefined'!=typeof i&&i()}else a<o&&i()};r()}/**
        * Scrolls the page / slider the given number of pixels.
        * It will do it one or another way dependiong on the library's config.
        */function vn(e,o){!d.autoScrolling||d.scrollBar||e.self!=n&&t(e,'fp-slides')?e.self!=n&&t(e,'fp-slides')?e.scrollLeft=o:e.scrollTo(0,o):e.style.top=o+'px'}/**
        * Gets the active slide.
        *//**
        * Gets the active section.
        *//**
        * Item. Slide or Section objects share the same properties.
        */function hn(e,t){this.anchor=e.getAttribute('data-anchor'),this.item=e,this.index=m(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}/**
        * Section object
        */function gn(e){hn.call(this,e,'.fp-section')}/**
        * Slide object
        */function mn(e){hn.call(this,e,'.fp-slide')}var bn=d&&/([\d\w]{8}-){3}[\d\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$/.test(d.licenseKey)||-1<o.domain.indexOf('alvarotrigo.com'),En=r('html, body'),xn=r('html')[0],Ln=r('body')[0];// cache common elements
//only once my friend!
if(t(xn,'fp-enabled'))return void pn();var An={};// Creating some defaults, extending them with any options that were provided
d=e({//navigation
menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:'right',navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:'bottom',scrollBar:!1,hybrid:!1,//scrolling
css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:'easeInOutCubic',easingcss3:'ease',loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:n.fp_scrolloverflow?n.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:'string'==typeof i?r(i)[0]:i,bigSectionsDestination:null,//Accessibility
keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,//design
controlArrows:!0,controlArrowColor:'#fff',verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,//backwards compabitility with responsiveWiddth
responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:'reveal',percentage:62,property:'translate'},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},//Custom selectors
sectionSelector:'.section',slideSelector:'.slide',//events
v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},d);//flag to avoid very fast sliding for landscape sliders
var kn,Tn,On,Cn,Hn=!1,In=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Nn='ontouchstart'in n||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,Bn='string'==typeof i?r(i)[0]:i,Mn=l(),zn=s(),Rn=!1,Pn=!0,jn=!0,Dn=[],Vn={};Vn.m={up:!0,down:!0,left:!0,right:!0},Vn.k=e({},Vn.m);var Fn,Wn=function(){var e;//IE >= 11 & rest of browsers
return e=n.PointerEvent?{down:'pointerdown',move:'pointermove'}:{down:'MSPointerDown',move:'MSPointerMove'},e}(),Yn={touchmove:'ontouchmove'in n?'touchmove':Wn.move,touchstart:'ontouchstart'in n?'touchstart':Wn.down},_n=!1;// taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js
//cheks for passive event support
try{var Xn=Object.defineProperty({},'passive',{get:function e(){_n=!0}});n.addEventListener('testPassive',null,Xn),n.removeEventListener('testPassive',null,Xn)}catch(t){}//timeouts
var Kn,Un,qn,$n,Qn,Gn,Jn,Zn,eo,to,no,oo=e({},d),io=!1,lo=!0,ao=['parallax','scrollOverflowReset','dragAndMove','offsetSections','fadingEffect','responsiveSlides','continuousHorizontal','interlockedSlides','scrollHorizontally','resetSliders','cards'];//deep copy
pn(),n.fp_easings=e(n.fp_easings,{easeInOutCubic:function l(e,n,o,i){return 1>(e/=i/2)?o/2*e*e*e+n:o/2*((e-=2)*e*e+2)+n}}),Bn&&(An.version='3.0.8',An.setAutoScrolling=v,An.setRecordHistory=S,An.setScrollingSpeed=b,An.setFitToSection=A,An.setLockAnchors=N,An.setMouseWheelScrolling=W,An.setAllowScrolling=K,An.setKeyboardScrolling=q,An.moveSectionUp=$,An.moveSectionDown=Q,An.silentMoveTo=G,An.moveTo=J,An.moveSlideRight=Z,An.moveSlideLeft=ee,An.fitToSection=ke,An.reBuild=te,An.setResponsive=oe,An.getFullpageData=function(){return d},An.destroy=sn,An.getActiveSection=function(){return new gn(r('.fp-section.active')[0])},An.getActiveSlide=function(){var e=r('.fp-slide.active',r('.fp-section.active')[0])[0];return Ye(e)},An.test={top:'0px',translate3d:'translate3d(0px, 0px, 0px)',translate3dH:function(){for(var e=[],t=0;t<r(d.sectionSelector,Bn).length;t++)e.push('translate3d(0px, 0px, 0px)');return e}(),left:function(){for(var e=[],t=0;t<r(d.sectionSelector,Bn).length;t++)e.push(0);return e}(),options:d,setAutoScrolling:v},An.shared={afterRenderActions:xe,isNormalScrollElement:!1},n.fullpage_api=An,d.$&&Object.keys(An).forEach(function(e){d.$.fn.fullpage[e]=An[e]}),ie(),le());var ro=!1,so=0,co=0,po=0,fo=0,uo=0,vo=new Date().getTime(),ho=0,go=0,mo=Mn;return An}//end of $.fn.fullpage
//utils
/**
    * Shows a message in the console of the given type.
    */function a(e,t){n.console&&n.console[e]&&n.console[e]('fullPage: '+t)}/**
    * Equivalent of jQuery function $().
    */function r(e,t){return t=1<arguments.length?t:o,t?t.querySelectorAll(e):null}/**
    * Extends a given Object properties and its childs.
    */function e(t){t=t||{};for(var n,o=1,l=arguments.length;o<l;++o)if(n=arguments[o],!!n)for(var a in n)if(n.hasOwnProperty(a)){// based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
if('[object Object]'===Object.prototype.toString.call(n[a])){t[a]=e(t[a],n[a]);continue}t[a]=n[a]}return t}/**
    * Checks if the passed element contains the passed class.
    */function t(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp('(^| )'+t+'( |$)','gi').test(e.className))}/**
    * Gets the window height. Crossbrowser.
    */function l(){return'innerHeight'in n?n.innerHeight:o.documentElement.offsetHeight}/**
    * Gets the window width.
    */function s(){return n.innerWidth}/**
    * Set's the CSS properties for the passed item/s.
    * @param {NodeList|HTMLElement} items
    * @param {Object} props css properties and values.
    */function c(e,t){e=S(e);for(var n in t)if(t.hasOwnProperty(n)&&null!==n)for(var o,l=0;l<e.length;l++)o=e[l],o.style[n]=t[n];return e}/**
    * Generic function to get the previous or next element.
    */function d(e,t,n){for(var o=e[n];o&&!j(o,t);)o=o[n];return o}/**
    * Gets the previous element to the passed element that matches the passed selector.
    */function p(e,t){return d(e,t,'previousElementSibling')}/**
    * Gets the next element to the passed element that matches the passed selector.
    */function f(e,t){return d(e,t,'nextElementSibling')}/**
    * Gets the previous element to the passed element.
    */function u(e){return e.previousElementSibling}/**
    * Gets the next element to the passed element.
    */function h(e){return e.nextElementSibling}/**
    * Gets the last element from the passed list of elements.
    */function g(e){return e[e.length-1]}/**
    * Gets index from the passed element.
    * @param {String} selector is optional.
    */function m(e,t){e=b(e)?e[0]:e;for(var n=null==t?e.parentNode.childNodes:r(t,e.parentNode),o=0,l=0;l<n.length;l++){if(n[l]==e)return o;1==n[l].nodeType&&o++}return-1}/**
    * Gets an iterable element for the passed element/s
    */function S(e){return b(e)?e:[e]}/**
    * Adds the display=none property for the passed element/s
    */function y(e){e=S(e);for(var t=0;t<e.length;t++)e[t].style.display='none';return e}/**
    * Adds the display=block property for the passed element/s
    */function w(e){e=S(e);for(var t=0;t<e.length;t++)e[t].style.display='block';return e}/**
    * Checks if the passed element is an iterable element or not
    */function b(e){return'[object Array]'===Object.prototype.toString.call(e)||'[object NodeList]'===Object.prototype.toString.call(e)}/**
    * Adds the passed class to the passed element/s
    */function E(e,t){e=S(e);for(var n,o=0;o<e.length;o++)n=e[o],n.classList?n.classList.add(t):n.className+=' '+t;return e}/**
    * Removes the passed class to the passed element/s
    * @param {String} `className` can be multiple classnames separated by whitespace
    */function x(e,t){e=S(e);for(var n=t.split(' '),o=0;o<n.length;o++){t=n[o];for(var l,r=0;r<e.length;r++)l=e[r],l.classList?l.classList.remove(t):l.className=l.className.replace(new RegExp('(^|\\b)'+t.split(' ').join('|')+'(\\b|$)','gi'),' ')}return e}/**
    * Appends the given element ot the given parent.
    */function L(e,t){t.appendChild(e)}/**
    Usage:

    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
    https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
    */function A(e,t,n){var l;t=t||o.createElement('div');for(var a,r=0;r<e.length;r++)a=e[r],(!n||r)&&n||(l=t.cloneNode(!0),a.parentNode.insertBefore(l,a)),l.appendChild(a);return e}/**
    Usage:
    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
    https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
    */function k(e,t){A(e,t,!0)}/**
    * Usage:
    * wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');
    * wrapInner(document.querySelector('#pepe'), element);
    *
    * https://jsfiddle.net/zexxz0tw/6/
    *
    * https://stackoverflow.com/a/21817590/1081396
    */function T(e,t){for('string'==typeof t&&(t=V(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}/**
    * Usage:
    * unwrap(document.querySelector('#pepe'));
    * unwrap(element);
    *
    * https://jsfiddle.net/szjt0hxq/1/
    *
    */function O(e){for(var t=o.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}/**
    * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
    * Returns the element or `false` if there's none
    */function C(e,t){return e&&1===e.nodeType?j(e,t)?e:C(e.parentNode,t):null}/**
    * Places one element (rel) after another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String} el
    * https://jsfiddle.net/9s97hhzv/1/
    */function H(e,t){N(e,e.nextSibling,t)}/**
    * Places one element (rel) before another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String} el
    * https://jsfiddle.net/9s97hhzv/1/
    */function I(e,t){N(e,e,t)}/**
    * Based in https://stackoverflow.com/a/19316024/1081396
    * and https://stackoverflow.com/a/4793630/1081396
    */function N(e,t,n){b(n)||('string'==typeof n&&(n=V(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}//http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
function B(){var e=o.documentElement;return(n.pageYOffset||e.scrollTop)-(e.clientTop||0)}/**
    * Gets the siblings of the passed element
    */function M(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}//for IE 9 ?
function z(e){e.preventDefault?e.preventDefault():e.returnValue=!1}/**
    * Determines whether the passed item is of function type.
    */function R(e){if('function'==typeof e)return!0;var t=Object.prototype.toString(e);return'[object Function]'===t||'[object GeneratorFunction]'===t}/**
    * Trigger custom events
    */function P(e,t,i){var l;i='undefined'==typeof i?{}:i,'function'==typeof n.CustomEvent?l=new CustomEvent(t,{detail:i}):(l=o.createEvent('CustomEvent'),l.initCustomEvent(t,!0,!0,i)),e.dispatchEvent(l)}/**
    * Polyfill of .matches()
    */function j(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}/**
    * Toggles the visibility of the passed element el.
    */function D(e,t){if('boolean'==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?'block':'none';//we don't use it in other way, so no else :)
return e}/**
    * Creates a HTMLElement from the passed HTML string.
    * https://stackoverflow.com/a/494348/1081396
    */function V(e){var t=o.createElement('div');// Change this to div.childNodes to support multiple top-level nodes
return t.innerHTML=e.trim(),t.firstChild}/**
    * Removes the passed item/s from the DOM.
    */function F(e){e=S(e);for(var t,n=0;n<e.length;n++)t=e[n],t&&t.parentElement&&t.parentNode.removeChild(t)}/**
    * Filters an array by the passed filter funtion.
    *///https://jsfiddle.net/w1rktecz/
function W(e,t,n){for(var o=e[n],i=[];o;)(j(o,t)||null==t)&&i.push(o),o=o[n];return i}/**
    * Gets all next elements matching the passed selector.
    */function Y(e,t){return W(e,t,'nextElementSibling')}/**
    * Gets all previous elements matching the passed selector.
    */function _(e,t){return W(e,t,'previousElementSibling')}/**
    * Converts an object to an array.
    */function X(e){return Object.keys(e).map(function(t){return e[t]})}/**
    * forEach polyfill for IE
    * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
    */// slimscroll
// util
// section
// section nav
// slide
// slide nav
return n.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||n;for(var o=0;o<this.length;o++)e.call(t,this[o],o,this)}),n.fp_utils={$:r,deepExtend:e,hasClass:t,getWindowHeight:l,css:c,until:d,prevUntil:p,nextUntil:f,prev:u,next:h,last:g,index:m,getList:S,hide:y,show:w,isArrayOrList:b,addClass:E,removeClass:x,appendTo:L,wrap:A,wrapAll:k,wrapInner:T,unwrap:O,closest:C,after:H,before:I,insertBefore:N,getScrollTop:B,siblings:M,preventDefault:z,isFunction:R,trigger:P,matches:j,toggle:D,createElementFromHTML:V,remove:F,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:W,nextAll:Y,prevAll:_,showError:a},i}),window.jQuery&&window.fullpage&&function(e,t){'use strict';// No jQuery No Go
return e&&t?void(e.fn.fullpage=function(n){n=e.extend({},n,{$:e});new t(this[0],n)}):void window.fp_utils.showError('error','jQuery is required to use the jQuery fullpage adapter!')}(window.jQuery,window.fullpage);
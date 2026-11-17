(function(){
  var btn=document.querySelector('.hamburger');var menu=document.getElementById('mobile-menu');
  if(btn&&menu){
    btn.addEventListener('click',function(){
      var open=menu.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded',open?'true':'false');
      btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    });
    menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('nav-open');btn.setAttribute('aria-expanded','false');}});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){menu.classList.remove('nav-open');btn.setAttribute('aria-expanded','false');}});
    window.addEventListener('resize',function(){if(window.innerWidth>900){menu.classList.remove('nav-open');btn.setAttribute('aria-expanded','false');}});
  }
  var fc=document.querySelector('.float-call');var foot=document.querySelector('.site-footer');
  if(fc&&foot&&'IntersectionObserver' in window){
    new IntersectionObserver(function(en){fc.classList.toggle('is-hidden',en[0].isIntersecting);}).observe(foot);
  }
})();

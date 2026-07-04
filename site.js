// nav toggle
document.querySelectorAll('[data-nav-toggle]').forEach(function(btn){
  btn.addEventListener('click', function(){
    var links = document.getElementById('navlinks');
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? 'Close' : 'Menu';
  });
});
// scroll reveal
var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var revs = document.querySelectorAll('.reveal');
if (prefersReduced || !('IntersectionObserver' in window)) {
  revs.forEach(function(el){ el.classList.add('in'); });
} else {
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revs.forEach(function(el){ io.observe(el); });
}

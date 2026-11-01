// Gallery image missing: show an empty card with the file name to add
function gE(img){
  var f=img.parentNode;
  f.classList.add('empty');
  f.setAttribute('data-label','Add photo: '+img.getAttribute('src'));
  img.remove();
}

// Mobile menu
var burger=document.querySelector('.burger'), menu=document.getElementById('menu');
burger.addEventListener('click',function(){
  var open=menu.classList.toggle('open');
  burger.setAttribute('aria-expanded',open);
  burger.setAttribute('aria-label',open?'Close menu':'Open menu');
});
menu.addEventListener('click',function(e){
  if(e.target.tagName==='A'){menu.classList.remove('open');burger.setAttribute('aria-expanded','false');}
});

// Gallery filter
var chips=document.querySelectorAll('.chip'), items=document.querySelectorAll('.g');
chips.forEach(function(c){
  c.addEventListener('click',function(){
    chips.forEach(function(x){x.classList.remove('on');x.setAttribute('aria-pressed','false');});
    c.classList.add('on');c.setAttribute('aria-pressed','true');
    var f=c.dataset.f;
    items.forEach(function(i){i.classList.toggle('hide',f!=='all'&&i.dataset.c!==f);});
  });
});

// Enquiry form -> WhatsApp message
var form=document.getElementById('enq'), err=document.getElementById('err');
form.date.min=new Date().toISOString().split('T')[0];
form.addEventListener('submit',function(e){
  e.preventDefault();
  if(!form.name.value.trim()||!form.date.value||!form.place.value.trim()){
    err.textContent='Please enter your name, wedding date and city or venue.';
    return;
  }
  err.textContent='';
  var d=new Date(form.date.value+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});
  var msg='Hello Varsha, I am '+form.name.value.trim()+'.\n'
    +'Wedding date: '+d+'\n'
    +'City or venue: '+form.place.value.trim()+'\n'
    +'Looks needed: '+form.look.value
    +(form.msg.value.trim()?'\nNote: '+form.msg.value.trim():'')
    +'\nIs this date available?';
  window.open('https://wa.me/919420363265?text='+encodeURIComponent(msg),'_blank','noopener');
});

document.getElementById('yr').textContent=new Date().getFullYear();

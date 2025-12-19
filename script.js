document.addEventListener('DOMContentLoaded',function(){
  // set year in footers
  const y=new Date().getFullYear();
  ['year','year-about','year-projects'].forEach(id=>{const el=document.getElementById(id); if(el) el.textContent=y});

  // simple nav toggle for small screens
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.main-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      const shown = nav.style.display === 'block';
      nav.style.display = shown ? '' : 'block';
    });
  }

  // contact form demo
  const form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const status=document.getElementById('form-status');
      status.textContent='Message sent (demo). Replace with real backend to send emails.';
      form.reset();
      setTimeout(()=>status.textContent='',4000);
    });
  }
});

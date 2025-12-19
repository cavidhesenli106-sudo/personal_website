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

  // theme toggle: persist in localStorage
  const themeToggle = document.getElementById('theme-toggle');
  const applyTheme = (theme) => {
    if(theme === 'dark') document.body.classList.add('dark-mode'); else document.body.classList.remove('dark-mode');
    if(themeToggle) {
      themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  };

  // initialize theme from storage or prefers-color-scheme
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  if(themeToggle){
    themeToggle.addEventListener('click', ()=>{
      const isDark = document.body.classList.contains('dark-mode');
      const next = isDark ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
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

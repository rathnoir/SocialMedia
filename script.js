document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const link = btn.dataset.link;
      if(!link) return;
      // open in a new tab where possible; on mobile, it will switch apps if it's a deep link
      window.open(link, '_blank', 'noopener');
    });
  });

  // tiny accessibility: keyboard activation
  document.querySelectorAll('.btn').forEach(b=>{
    b.setAttribute('tabindex','0');
    b.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        b.click();
      }
    });
  });

  window.addEventListener('load', () => {
    const wrap = document.querySelector('.wrap');
    wrap.classList.add('loaded');

    // Optional: stagger buttons
    const buttons = document.querySelectorAll('.list .btn');
    buttons.forEach((btn, i) => {
      setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
      }, i * 150); // each button appears 150ms after the previous
    });
  });

  const particlesContainer = document.querySelector('.particles');
  for (let i = 0; i < 20; i++) { // 30 sparks
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.top = Math.random() * 100 + '%';
    p.style.left = Math.random() * 100 + '%';
    p.style.width = (2 + Math.random() * 3) + 'px';
    p.style.height = p.style.width;
    p.style.animationDuration = (5 + Math.random() * 10) + 's';
    p.style.animationDelay = Math.random() * 5 + 's';
    particlesContainer.appendChild(p);
  }

  const sparks = document.querySelectorAll('.sparkLine');

  sparks.forEach(spark => {
    spark.style.height = (50 + Math.random() * 30) + 'px';
    spark.style.animationDuration = (7 + Math.random() * 3) + 's';  // slower
    spark.style.animationDelay = Math.random() * 3 + 's';
  });

  document.addEventListener('click', e => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  const container = document.querySelector('.trailContainer');
for (let i = 0; i < 20; i++) {
  const p = document.createElement('div');
  p.className = 'trailParticle';
  p.style.top = Math.random() * window.innerHeight + 'px';
  p.style.left = Math.random() * window.innerWidth + 'px';
  p.style.animationDuration = (4 + Math.random() * 4) + 's';
  p.style.animationDelay = Math.random() * 5 + 's';
  container.appendChild(p);
}
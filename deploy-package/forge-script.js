// HBX-FORGE TEASER - LIVE STATUS UPDATER
// Drop this before </body> in your main HTML file

(function() {
  // Animate stat counters
  const stats = document.querySelectorAll('.forge-stat-num[data-target]');
  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1500;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    requestAnimationFrame(tick);
  };

  // Use IntersectionObserver to trigger animation when visible
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animate(e.target);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    stats.forEach(s => observer.observe(s));
  } else {
    stats.forEach(animate);
  }

  // Live time update for badge
  const badge = document.querySelector('.forge-badge-text');
  if (badge) {
    const update = () => {
      const now = new Date();
      const time = now.toISOString().split('T')[1].split('.')[0];
      badge.textContent = `SYSTEM ONLINE · ${time} UTC`;
    };
    update();
    setInterval(update, 1000);
  }
})();

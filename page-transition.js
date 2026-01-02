document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.href) {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => location.href = link.href, 300);
    }
  });
});

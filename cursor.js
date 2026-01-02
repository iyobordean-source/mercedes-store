const cursor = document.createElement("div");
cursor.className = "lux-cursor";
document.body.appendChild(cursor);

window.addEventListener("mousemove", e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

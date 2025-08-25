document.addEventListener("DOMContentLoaded", function() {
  const completed = localStorage.getItem('timetableApp_completed') === 'true';

  // Animate buttons line by line only if first time
  if (!completed) {
    const buttons = [document.getElementById('studentBtn'), document.getElementById('teacherBtn')];
    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.style.transition = "opacity 0.5s, transform 0.5s";
        btn.style.opacity = 1;
        btn.style.transform = "translateY(0)";
      }, index * 300);
    });
  }

  // Button click events
  document.getElementById('studentBtn').addEventListener('click', () => selectRole('Student'));
  document.getElementById('teacherBtn').addEventListener('click', () => selectRole('Teacher'));
});

function selectRole(role) {
  localStorage.setItem('timetableApp_role', role);
  localStorage.setItem('timetableApp_completed', 'true'); // mark setup completed
  window.location.href = 'screen2.html?mode=start';
}

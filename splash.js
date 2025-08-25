document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    const completed = localStorage.getItem('timetableApp_completed') === 'true';
    if (completed) {
      // Returning users → go directly to Screen 4
      window.location.href = 'screen4.html';
    } else {
      // First-time users → go to Role Selection
      window.location.href = 'screen1.html';
    }
  }, 2000); // 2 seconds splash
});

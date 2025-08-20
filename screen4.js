// Back button
document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "select_entry.html";
});

// Create weekly day boxes
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekContainer = document.getElementById("weekDays");

days.forEach(day => {
  const box = document.createElement("div");
  box.className = "day-box";
  box.textContent = day;

  box.onclick = () => {
    localStorage.setItem("selectedDay", day);
    window.location.href = "day_view.html"; // open detailed view
  };

  weekContainer.appendChild(box);
});

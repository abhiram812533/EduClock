function goBack() {
  window.location.href = "screen4.html";
}

const dayTitle = document.getElementById("dayTitle");
const slotsContainer = document.getElementById("slotsContainer");

const selectedDay = localStorage.getItem("selectedDay");
dayTitle.textContent = selectedDay;

const timetable = JSON.parse(localStorage.getItem("timetable")) || {};
const times = ["9-10", "10-11", "11-12", "12-1", "1-2", "2-3", "3-4", "4-5"];

times.forEach(time => {
  const slotDiv = document.createElement("div");
  slotDiv.className = "slot";

  const subRoom = timetable[selectedDay]?.[time] || { subject: "", room: "" };
  slotDiv.innerHTML = `
    <div>${time}</div>
    <div class="subject">
      ${subRoom.subject ? subRoom.subject + " (Room " + subRoom.room + ")" : "--"}
    </div>
  `;

  slotsContainer.appendChild(slotDiv);
});

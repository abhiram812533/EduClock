const slots = ["9-10", "10-11", "11-12", "12-1", "1-2", "2-3", "3-4", "4-5"];
let timetable = JSON.parse(localStorage.getItem("timetable")) || {};
let selectedDay = null;

document.getElementById("profileIcon").onclick = () => {
    document.getElementById("profilePopup").classList.toggle("hidden");
};
document.getElementById("logoutBtn").onclick = () => {
    localStorage.clear();
    window.location.href = "screen1.html";
};

document.getElementById("userName").textContent = localStorage.getItem("userName") || "";

function selectDay(day) {
    selectedDay = day;
    renderSlots();
}

function renderSlots() {
    const container = document.getElementById("slotsContainer");
    container.innerHTML = `<h2>${selectedDay}</h2>`;
    slots.forEach(time => {
        const entry = timetable[selectedDay]?.[time] || { subject: "", room: "" };
        container.innerHTML += `
            <div class="slot">
                <span>${time} - ${entry.subject ? entry.subject + " (" + entry.room + ")" : ""}</span>
                <div>
                    <button class="editBtn" onclick="editSlot('${time}')">Edit</button>
                    <button class="deleteBtn" onclick="deleteSlot('${time}')">Delete</button>
                </div>
            </div>
        `;
    });
}

function editSlot(time) {
    const subject = prompt("Enter subject:", timetable[selectedDay]?.[time]?.subject || "");
    const room = prompt("Enter room number:", timetable[selectedDay]?.[time]?.room || "");
    if (!timetable[selectedDay]) timetable[selectedDay] = {};
    timetable[selectedDay][time] = { subject, room };
    localStorage.setItem("timetable", JSON.stringify(timetable));
    renderSlots();
}

function deleteSlot(time) {
    if (timetable[selectedDay]) {
        delete timetable[selectedDay][time];
        localStorage.setItem("timetable", JSON.stringify(timetable));
        renderSlots();
    }
}

document.getElementById("letsGoBtn").onclick = () => {
    window.location.href = "screen4.html";
};

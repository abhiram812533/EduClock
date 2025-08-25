const backBtn = document.getElementById('backBtn');
const roleTitle = document.getElementById('roleTitle');
const nameInput = document.getElementById('nameInput');
const startBtn = document.getElementById('startBtn');
const saveBtn  = document.getElementById('saveBtn');

backBtn.addEventListener('click', ()=> window.location.href='screen1.html');

const params = new URLSearchParams(location.search);
const mode = params.get('mode') || 'start';
const role = localStorage.getItem('timetableApp_role') || 'User';
roleTitle.textContent = `${role} — Enter Name`;

const existing = localStorage.getItem('timetableApp_name');
if (existing) nameInput.value = existing;

if (mode === 'edit'){
  startBtn.style.display = 'none';
  saveBtn.style.display = 'inline-block';
}

startBtn.addEventListener('click', ()=>{
  const n = nameInput.value.trim();
  if(!n){ alert('Please enter your name'); return; }
  localStorage.setItem('timetableApp_name', n);
  ensureTimetable();
  localStorage.setItem('timetableApp_completed','false');
  window.location.href = 'select_entry.html';
});

saveBtn.addEventListener('click', ()=>{
  const n = nameInput.value.trim();
  if(!n){ alert('Please enter your name'); return; }
  localStorage.setItem('timetableApp_name', n);
  window.location.href = 'select_entry.html';
});

function ensureTimetable(){
  if(!localStorage.getItem('timetableApp_timetable')){
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const obj = {};
    days.forEach(d => obj[d] = Array(8).fill(null));
    localStorage.setItem('timetableApp_timetable', JSON.stringify(obj));
  }
}

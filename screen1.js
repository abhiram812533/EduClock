// Auto-skip if already completed
const name = localStorage.getItem('timetableApp_name');
const completed = localStorage.getItem('timetableApp_completed') === 'true';
if (name && completed) {
  window.location.href = 'screen4.html';
}

document.getElementById('studentBtn').addEventListener('click', ()=>selectRole('Student'));
document.getElementById('teacherBtn').addEventListener('click', ()=>selectRole('Teacher'));

function selectRole(role){
  localStorage.setItem('timetableApp_role', role);
  window.location.href = 'screen2.html?mode=start';
}

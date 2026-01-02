// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Countdown: set to 28 January 2026 at 09:30 AM (Hackathon start time)
const eventDate = new Date("2026-01-28T09:30:00");

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');

  if (diff <= 0) {
    daysEl.textContent = "0";
    hoursEl.textContent = "0";
    minsEl.textContent = "0";
    secsEl.textContent = "0";
    return;
  }

  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minsEl.textContent = minutes;
  secsEl.textContent = secs;
}

updateCountdown();
setInterval(updateCountdown, 1000);
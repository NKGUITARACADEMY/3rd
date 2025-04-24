
function setReminder() {
  const text = document.getElementById("reminderText").value;
  const time = new Date(document.getElementById("reminderTime").value).getTime();
  const now = new Date().getTime();
  const delay = time - now;

  if (delay > 0) {
    setTimeout(() => {
      showNotification(text);
    }, delay);
    document.getElementById("status").innerText = "✅ Reminder is set!";
  } else {
    document.getElementById("status").innerText = "❌ Please select future time.";
  }
}

function showNotification(text) {
  if (Notification.permission === "granted") {
    new Notification("⏰ Reminder", { body: text });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification("⏰ Reminder", { body: text });
      }
    });
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

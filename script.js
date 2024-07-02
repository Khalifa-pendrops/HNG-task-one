document.addEventListener('DOMContentLoaded', () => {
    const updated = new Date();
    const currentTimeUTC = updated.toUTCString().slice(17, 25);
    const currentDay = updated.toUTCString().slice(0, 3);
    const currentYear = updated.getFullYear();


    document.getElementById("current_time").textContent = currentTimeUTC;
    document.getElementById("current_day").textContent = currentDay;
    document.getElementById("current_year").textContent = currentYear;
})
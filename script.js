function updateCalendar() {
    const today = new Date();

    const dayOfWeek = today.toLocaleString('en-US', { weekday: 'long' }); // Full name of the day (e.g., 'Friday')
    const dayOfMonth = today.getDate(); // Current day of the month (e.g., 9)
    const month = today.toLocaleString('en-US', { month: 'long' }); // Full name of the month (e.g., 'November')
    const year = today.getFullYear(); // Full year (e.g., 2023)

    const monthElement = document.getElementById('month');
    const dayElement = document.getElementById('day');
    const dateElement = document.getElementById('date');
    const yearElement = document.getElementById('year');

    monthElement.textContent = month;
    dayElement.textContent = dayOfWeek;
    dateElement.textContent = dayOfMonth;
    yearElement.textContent = year;
}

updateCalendar();



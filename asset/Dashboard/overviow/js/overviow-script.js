const container = document.getElementById('heatmap-container');

// داده‌ها: تعداد فعالیت‌های روزانه (می‌توان این داده‌ها را از API دریافت کرد)
const activityData = Array.from({ length: 365 }, () => Math.floor(Math.random() * 5)); // داده شبیه‌سازی شده

// تولید جدول
activityData.forEach((activity, index) => {
  const dayElement = document.createElement('div');
  dayElement.classList.add('heatmap-day');

  // سطح فعالیت را بر اساس داده‌ها تعیین کنید
  if (activity > 0) {
    dayElement.classList.add(`level-${activity}`);
  }

  container.appendChild(dayElement);
});

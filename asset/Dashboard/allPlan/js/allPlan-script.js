// دریافت شماره تلفن کاربر از Local Storage و بررسی وجود آن
const phone = JSON.parse(localStorage.getItem('user'))?.phone || logut();
async function logut() {
    swal("خطا!", "ابتدا وارد شوید", "error");
    window.location.href = "https://bernada.ir";
}
let scheduleData = { schedule: [] };
// دریافت برنامه کاربر از سرور
const getUserSchedule = async (phone) => {
    try {
        const response = await fetch(`https://bernada.ir/api/schedule/${phone}`);
        if (!response.ok) {
            throw new Error("Error fetching schedule");
        }
        const data = await response.json();

        scheduleData = Array.isArray(data.schedule) ? { schedule: data.schedule } : { schedule: [] };

        showSchedule(); // نمایش کل برنامه
    } catch (error) {
        console.error("Error:", error);
    }
};
// بررسی شماره تلفن و در صورت معتبر بودن، دریافت برنامه کاربر
if (phone) {
    getUserSchedule(phone);
} else {
    console.error("شماره تلفن نامعتبر است.");
}
// انتخاب عناصر مورد استفاده
const opartorashon = document.querySelector(".opartorashon");
const tabel = document.querySelector("table");
const bikari = document.querySelector(".bikari");
// نمایش برنامه در جدول
const showSchedule = () => {
    opartorashon.innerHTML = "";

    if (scheduleData.schedule.length > 0) {
        tabel.style.display = "table";
        bikari.style.display = "none";

        scheduleData.schedule.forEach(activity => {
            opartorashon.insertAdjacentHTML("beforeend", `
                <tr>
                    <td>${activity.day}</td>
                    <td>${activity.startTime}</td>
                    <td>${activity.endTime}</td>
                    <td>${activity.activity}</td>
                </tr>
            `);
        });
    } else {
        tabel.style.display = "none";
        bikari.style.display = "block";
    }
};

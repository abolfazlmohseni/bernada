const phoneNumber = JSON.parse(localStorage.getItem('user'))?.numberPhone || "";
let scheduleData = { schedule: [] };

const getUserSchedule = async (userphon) => {
    try {
        const response = await fetch(`https://bernada.ir/api/schedule/${userphon}`);
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

if (phoneNumber) {
    getUserSchedule(phoneNumber);
} else {
    console.error("شماره تلفن نامعتبر است.");
}

const opartorashon = document.querySelector(".opartorashon");
const tabel = document.querySelector("table");
const bikari = document.querySelector(".bikari");

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

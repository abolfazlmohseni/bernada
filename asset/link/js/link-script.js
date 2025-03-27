//ارسال ایمیل
//این کد برای ارسال ایمیل از طریق سایت استفاده میشود
(function () {
    emailjs.init("G_SVtb3Lef7DlG04r");
})();

document.querySelector(".sendBTN").addEventListener("click", function (event) {
    let errText = document.querySelector(".errText")
    let name = document.querySelector(".name");
    let phone = document.querySelector(".phone");
    let message = document.querySelector(".left__form-capshion");
    let time = new Date().toLocaleString("fa-IR");

    if (!name || !phone || !message) {
        errText.style.display = "block"
        return;
    }

    let params = {
        name: name.value,
        phone: phone.value,
        time: time,
        message: message.value
    };

    emailjs.send("service_gmv2ngt", "template_oo2bu6j", params)
        .then(function (response) {
            name.value = ''
            phone.value = ''
            message.value = ''
            errText.innerHTML = "پیام شما با موفقعیت ارسال شد"
            errText.style.color = "#008000"
            errText.style.display = "block"
        }, function (error) {
            swal("ارسال پیام", `در ارسال پیام شما خطایی رخ داد`, "error", {
                button: "باشه",
            });
        });
});


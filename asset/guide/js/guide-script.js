
const acarseionElem = document.querySelectorAll(".acarseion");

acarseionElem.forEach(function (item) {
    item.addEventListener("click", function () {
        const capshonBox = item.querySelector(".capshon-box");
        const Icon = item.querySelector(".bi");

        acarseionElem.forEach(function (otherItem) {
            if (otherItem !== item) {
                const otherCapshonBox = otherItem.querySelector(".capshon-box");
                const otherIcon = otherItem.querySelector(".bi");
                otherCapshonBox.classList.remove("active");
                otherCapshonBox.classList.add("none");
                otherIcon.classList.remove("bi-caret-down-fill");
                otherIcon.classList.add("bi-caret-left-fill");
              
            }
        });

        if (capshonBox.classList.contains("none")) {
            capshonBox.classList.remove("none");
            capshonBox.classList.add("active");
            Icon.classList.remove("bi-caret-left-fill");
            Icon.classList.add("bi-caret-down-fill");
        } else {
            capshonBox.classList.remove("active");
            capshonBox.classList.add("none");
            Icon.classList.remove("bi-caret-down-fill");
            Icon.classList.add("bi-caret-left-fill");
        }
    });
});
const btnThemeSetting = document.querySelector(".btnThemeSetting")
const popUpThemeSetting = document.querySelector(".popUp-themeSetting")
const popupConteyner = document.querySelector(".popup-conteyner")
const boxRight = document.querySelector(".box-Right")
const themes = {
    themeBlue: {
        "--background-color": "#f0f5f9",
        "--text-color": "#000000",
        "--box-bg": "#ffffff",
        "--box-shadow-color": "#00000025",
        "--theme-primary": "#0084db",
        "--secondary-color": "#0085db1f",
        "--color-number": "rgb(112,122,130)",
        "--white-color": "#fff"
    },
    themeAqua: {
        "--background-color": "#e0eef7",
        "--text-color": "#000",
        "--box-bg": "#fff",
        "--box-shadow-color": "#00000025",
        "--theme-primary": "#0074ba",
        "--secondary-color": "#0078ba1f",
        "--color-number": "rgb(112,122,130)",
        "--white-color": "#fff"
    },
    themePurple: {
        "--background-color": "#763ebd25",
        "--text-color": "#000",
        "--box-bg": "#fff",
        "--box-shadow-color": "#00000025",
        "--theme-primary": "#763ebd",
        "--secondary-color": "#763ebd1f",
        "--color-number": "rgb(112,122,130)",
        "--white-color": "#fff"
    },
    themeGreen: {
        "--background-color": "#0a7ea425",
        "--text-color": "#000",
        "--box-bg": "#fff",
        "--box-shadow-color": "#00000025",
        "--theme-primary": "#0a7ea4",
        "--secondary-color": "#0a7ea41f",
        "--color-number": "rgb(112,122,130)",
        "--white-color": "#fff"
    },
    themeCyan: {
        "--background-color": "#01c0c825",
        "--text-color": "#000",
        "--box-bg": "#fff",
        "--box-shadow-color": "#00000025",
        "--theme-primary": "#01c0c8",
        "--secondary-color": "#01c0c81f",
        "--color-number": "rgb(112,122,130)",
        "--white-color": "#fff"
    },
    themeOrange: {
        "--background-color": "#fa896b25",
        "--text-color": "#000",
        "--box-bg": "#fff",
        "--box-shadow-color": "#00000025",
        "--theme-primary": "#fa896b",
        "--secondary-color": "#fa896b1f",
        "--color-number": "rgb(112,122,130)",
        "--white-color": "#fff"
    },
    themeDarkBlue: {
        "--background-color": "#16293e",
        "--text-color": "#fff",
        "--box-bg": "#111c2d",
        "--box-shadow-color": "#0084db20",
        "--theme-primary": "#0084db",
        "--secondary-color": "#0084db1f",
        "--color-number": "rgb(124,143,172)",
        "--white-color": "#fff"
    },
    themeDarkAqua: {
        "--background-color": "#16293e",
        "--text-color": "#fff",
        "--box-bg": "#111c2d",
        "--box-shadow-color": "#0074ba20",
        "--theme-primary": "#0074ba",
        "--secondary-color": "#0074ba1f",
        "--color-number": "rgb(124,143,172)",
        "--white-color": "#fff"
    },
    themeDarkPurple: {
        "--background-color": "#16293e",
        "--text-color": "#fff",
        "--box-bg": "#111c2d",
        "--box-shadow-color": "#763ebd20",
        "--theme-primary": "#763ebd",
        "--secondary-color": "#763ebd1f",
        "--color-number": "rgb(124,143,172)",
        "--white-color": "#fff"
    },
    themeDarkGreen: {
        "--background-color": "#16293e",
        "--text-color": "#fff",
        "--box-bg": "#111c2d",
        "--box-shadow-color": "#0a7ea420",
        "--theme-primary": "#0a7ea4",
        "--secondary-color": "#0a7ea41f",
        "--color-number": "rgb(124,143,172)",
        "--white-color": "#fff"
    },
    themeDarkCyan: {
        "--background-color": "#16293e",
        "--text-color": "#fff",
        "--box-bg": "#111c2d",
        "--box-shadow-color": "#01c0c820",
        "--theme-primary": "#01c0c8",
        "--secondary-color": "#01c0c81f",
        "--color-number": "rgb(124,143,172)",
        "--white-color": "#fff"
    },
    themeDarkOrange: {
        "--background-color": "#16293e",
        "--text-color": "#fff",
        "--box-bg": "#111c2d",
        "--box-shadow-color": "#fa896b20",
        "--theme-primary": "#fa896b",
        "--secondary-color": "#fa896b1f",
        "--color-number": "rgb(124,143,172)",
        "--white-color": "#fff"
    }
};
document.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("userTheme");
    if (savedTheme && themes[savedTheme]) {
        applyTheme(savedTheme);
    }
});


document.querySelectorAll(".light-item__theme, .dark-item__theme").forEach(item => {
    item.addEventListener("click", () => {
        let themeName = item.dataset.color;
        if (themes[themeName]) {
            applyTheme(themeName);
            localStorage.setItem("userTheme", themeName);
        }
    });
});

function applyTheme(themeName) {
    let themeVars = themes[themeName];
    Object.keys(themeVars).forEach(variable => {
        document.documentElement.style.setProperty(variable, themeVars[variable]);
    });
    if (themeName == "themeBlue" || themeName == "themeBlue" || themeName == "themeOrange" || themeName == "themeCyan" || themeName == "themeGreen" || themeName == "themePurple" || themeName == "themeAqua") {
        document.body.classList = `${themeName} light`

    } else {
        document.body.classList = `${themeName} dark`

    }

    document.querySelectorAll(".theme-icon").forEach(icon => icon.remove());
    let selectedTheme = document.querySelector(`[data-color="${themeName}"] .item__theme-color`);
    if (selectedTheme) {
        selectedTheme.insertAdjacentHTML("afterend", `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler theme-icon"
                width="18px" height="18px" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                color="white">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
        `);
    }
}
document.querySelectorAll(".light-item__theme, .dark-item__theme").forEach(item => {
    item.addEventListener("click", () => {
        let themeName = item.dataset.color;
        let themeVars = themes[themeName];

        if (themeVars) {
            Object.keys(themeVars).forEach(variable => {
                document.documentElement.style.setProperty(variable, themeVars[variable]);
            });
        }
    });
});

btnThemeSetting.addEventListener("click", () => {
    if (popupConteyner.style.display == "none") {
        popUpThemeSetting.style.left = "0"
        popupConteyner.style.display = 'block'
        popupConteyner.classList.add("Animation")
    } else {
        popUpThemeSetting.style.left = "-300px"
        popupConteyner.style.display = 'none'
        popupConteyner.classList.remove("Animation")

    }
})
boxRight.addEventListener("click", () => {
    popUpThemeSetting.style.left = "-300px"
    popupConteyner.style.display = 'none'
})
const closeBTN = document.querySelector(".bi-x")
closeBTN.addEventListener("click", () => {
    popUpThemeSetting.style.left = "-300px"
    popupConteyner.style.display = 'none'
})
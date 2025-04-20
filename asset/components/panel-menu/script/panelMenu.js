class BuildMenu extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
         <menu>
            <div class="topmenu">
                <div class="menu-berand">
                    <p>برنا
                    <p class="theme-color__berand">دا</p>
                    </p>
                </div>
                <div>
                    <i class="bi bi-x closemenu"></i>
                </div>
            </div>

            <div class="menu-item">
                <a href="/overview">نمای کلی</a>
            </div>
            <div class="menu-item">
                <a href="/today">کار های امروز</a>
            </div>
            <div class="menu-item">
                <a href="delay">کار های به عقب افتاده</a>
            </div>
            <div class="menu-item">
                <a href="/allPlan">کل برنامه</a>
            </div>
            <div class="menu-item">
                <a href="/buildprogram">ساخت برنامه درسی</a>
            </div>
            <div class="menu-item">
                <a href="/profile">پروفایل</a>
            </div>
            <div class="menu-item">
                <a href="/">خروج</a>
            </div>
        </menu>
        `

    }
}


window.customElements.define("menu-panel", BuildMenu)
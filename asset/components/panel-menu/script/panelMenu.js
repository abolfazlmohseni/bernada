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
                <a href="/overview" class="menu-item">نمای کلی</a>        
                <a href="/today" class="menu-item">کار های امروز</a>    
                <a href="delay" class="menu-item">کار های به عقب افتاده</a>     
                <a href="/allPlan" class="menu-item">کل برنامه</a>      
                <a href="/buildprogram" class="menu-item">ساخت برنامه درسی</a>   
                <a href="/profile" class="menu-item">پروفایل</a>
                <a href="/" class="menu-item">خروج</a>
        
        </menu>
        `

    }
}


window.customElements.define("menu-panel", BuildMenu)
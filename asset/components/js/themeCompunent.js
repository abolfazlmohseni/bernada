class themeUser extends HTMLElement {
    constructor() {
        super()


        var addtheme = `
         <!-- دکمه تنظیمات تم -->
    <div class="btnThemeSetting">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-settings" width="24px" height="24px"
            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z">
            </path>
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
        </svg>
    </div>
    <!-- پاپ اپ تنظیمات تم -->
    <div class="popup-conteyner" style="display: none;">
        <div class="popUp-themeSetting">
            <div class="popUp-themeSetting__header">
                <p>تنظیمات</p>
                <i class="bi bi-x closepopUp"></i>
            </div>
            <div class="popUp-themeSetting__light">
                <div class="themeSetting__light-header">
                    <p>تم های روشن</p>
                </div>
                <div class="themeSetting__light-item">

                    <div class="light-item__rowOne">
                        <div class="light-item__theme" data-color="themeBlue">
                            <div class="item__theme-color themebluebtn" data-color="themeblue"></div>

                        </div>
                        <div class="light-item__theme" data-color="themeAqua">
                            <div class="item__theme-color themeAquabtn" data-color="themeAqua"></div>
                        </div>
                        <div class="light-item__theme" data-color="themePurple">
                            <div class="item__theme-color themePurplebtn" data-color="themePurple"></div>
                        </div>
                    </div>
                    <div class="light-item__rowTwo">
                        <div class="light-item__theme" data-color="themeGreen">
                            <div class="item__theme-color themeGreenbtn" data-color="themeGreen"></div>
                        </div>
                        <div class="light-item__theme" data-color="themeCyan">
                            <div class="item__theme-color themeCyanbtn" data-color="themeCyan"></div>
                        </div>
                        <div class="light-item__theme" data-color="themeOrange">
                            <div class="item__theme-color themeOrangebtn" data-color="themeOrange"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="popUp-themeSetting__dark">
                <div class="themeSetting__dark-header">
                    <p>تم های تیره</p>
                </div>
                <div class="themeSetting__dark-item">

                    <div class="dark-item__rowOne">
                        <div class="dark-item__theme" data-color="themeDarkBlue">
                            <div class="item__theme-color themeDarkBluebtn"></div>

                        </div>
                        <div class="dark-item__theme" data-color="themeDarkAqua">
                            <div class="item__theme-color themeDarkAquabtn"></div>
                        </div>
                        <div class="dark-item__theme" data-color="themeDarkPurple">
                            <div class="item__theme-color themeDarkPurplebtn"></div>
                        </div>
                    </div>
                    <div class="dark-item__rowTwo">
                        <div class="dark-item__theme" data-color="themeDarkGreen">
                            <div class="item__theme-color themeDarkGreenbtn"></div>
                        </div>
                        <div class="dark-item__theme" data-color="themeDarkCyan">
                            <div class="item__theme-color themeDarkCyanbtn"></div>
                        </div>
                        <div class="dark-item__theme" data-color="themeDarkOrange">
                            <div class="item__theme-color themDarkeOrangebtn"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-Right"></div>
    </div>
        `
        this.innerHTML = addtheme
    }
}
export { themeUser }
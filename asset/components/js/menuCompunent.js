class menuUser extends HTMLElement {
    constructor(){
        super()
        var addmenu = `
          <header>
            <div class="header-right">
                <div class="berand" href="/">
                    <p>بِرنا</p>
                    <p class="berand-color">دا</p>
                </div>

            </div>
            <div class="header-meddel">
                <a href="/aboutMe" class="header-meddel__item">درباره ما</a>
                <a href="/link" class="header-meddel__item">ارتباط با ما</a>
                <a href="/guide" class="header-meddel__item">راهنما</a>
            </div>
            <div class="header-left">
                <a href="/register" class="loginBTN">ثبت نام | ورود</a>
            </div>
        </header>
        
        `
        this.innerHTML = addmenu
    }
}

export {menuUser}
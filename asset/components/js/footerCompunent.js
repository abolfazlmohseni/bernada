class footerUser extends HTMLElement {
    constructor() {
        super()
        var addfooter = `
         <footer>
            <div class="footer-top">
                <div class="footer-right">
                    <div class="footer-right__rowOne">
                        <div class="footer-berand">
                            <p>بِرنا</p>
                            <p class="berand-color">دا</p>
                        </div>
                    </div>
                    <div class="footer-right__link">
                        <div class="right__link-items">
                            <div class="circle"></div>
                            <a href="/aboutMe" class="header-meddel__item">درباره ما</a>
                        </div>
                        <div class="right__link-items">
                            <div class="circle"></div>
                            <a href="/link" class="header-meddel__item">ارتباط با ما</a>
                        </div>
                        <div class="right__link-items">
                            <div class="circle"></div>
                            <a href="/register" class="header-meddel__item">ثبت نام</a>
                        </div>
                        <div class="right__link-items">
                            <div class="circle"></div>
                            <a href="/guide" class="header-meddel__item">راهنما</a>
                        </div>
                    </div>
                </div>
                <div class="footer-meddel">
                    <div class="orgFooter">

                        <div class="orgFooter-rowTwo">
                            <p>بِرنادا یک پلتفرم برنامه‌ریزی درسی است که به دانش‌آموزان ابتدایی، متوسطه اول و دوم در
                                رشته‌های
                                ریاضی، تجربی و انسانی کمک می‌کند تا با یک برنامه اصولی، از زمان خود بهترین استفاده را
                                ببرند.
                                با
                                برنادا، مطالعه‌ای منظم و هدفمند را تجربه کنید! </p>
                        </div>
                        <div class="orgFooter-rowTree">
                            <p>همین حالا شروع کن!</p>
                            <a href="/register">ثبت نام</a>
                        </div>
                    </div>
                </div>
                <div class="footer-left">
                    <div class="footer-left__logo">
                        <img src="/imag/logo.png" alt="لوگوی برنادا">
                    </div>
                    <div class="footer-left__logo">
                        <img src="/imag/amozesh-logo.png" alt="لوگوی اموزش و پرورش استان">
                    </div>
                    <div class="footer-left__logo">
                        <img src="/imag/pazhohesh-logo.png" alt="لوگوی پروژهش سرا">
                    </div>
                </div>
            </div>
            <div class="btFooter">
                <p>طراحی و اجرا این پروژه توسط <a href="https://itabolfazlmohseni.ir">ابوالفضل محسنی </a>انجام شده است.
                </p>
            </div>
        </footer>
        `
        this.innerHTML = addfooter
    }
}

export { footerUser }
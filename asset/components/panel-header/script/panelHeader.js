class BuildHeader extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
            <header>
                <div class="header-right">
                    <img src="/imag/user6.jpg" id="profilePreview" class="user-profile">
                    <div class="showuser">
                        <p class="user-head">سلام
                        <p class="userName"></p>
                        </p>
                    </div>
                </div>
                <div class="header-left">
                    <i class="bi bi-list openmenu"></i>
                </div>
            </header>
        `
    }
}

window.customElements.define("header-panel", BuildHeader)
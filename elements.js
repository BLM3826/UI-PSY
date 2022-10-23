class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <h5>
            <a href="">EN</a>
            <a href="" style="border-left:1px solid #fff">ΕΛ</a>
        </h5>`;
  }
}

class Toe1 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                <div class="toe10">
                    <div id="visit"></div>
                    <div id="todate"></div>
                </div><br>
                <div class="toe11"><a href="https://github.com/BLM3826" target="_blank">Personal Profile</a>
                </div><br>
                <div class="toe12">
                    <div class="message"><a href="javascript:show_msg()">Privacy Policy</a>
                        <span class="mtext">We won't try<br>to steal your data.</span>
                    </div> <br>© 2020 Master
                </div>`;
  }
}

class Toe3 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="media">
                    <ul>
                        <li>
                            <a href="https://www.aueb.gr/" target="_blank">
                                <img src="https://www.aueb.gr/sites/default/files/3_AUEB-emblem-HR.jpg" alt="AUEB Logo"
                                    class="aueb"></a>
                        </li>
                        <li>
                            <a href="https://eclass.aueb.gr/" target="_blank">
                                <img src="assets/eclass.png" alt="Eclass Logo" class="eclass"></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/auebgreece" target="_blank">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png"
                                    alt="Facebook Logo" class="fb"></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/aueb.gr/?hl=el" target="_blank">
                                <img src="https://lh3.googleusercontent.com/2sREY-8UpjmaLDCTztldQf6u2RGUtuyf6VT5iyX3z53JS4TdvfQlX-rNChXKgpBYMw"
                                    alt="Instagram Logo" class="insta"></a>
                        </li>
                    </ul>
                </div>`;
  }
}

customElements.define("lang-navbar", Navbar);
customElements.define("toe-one", Toe1);
customElements.define("toe-three", Toe3);

document.addEventListener('DOMContentLoaded', () => {
    class HeaderElement extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });
            shadow.innerHTML = `
            <style>
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 20px;
                    background-color: #333;
                }
                .logo {
                    font-size: 1.5em;
                    color: #fff;
                }
                nav a {
                    color: #fff;
                    text-decoration: none;
                    margin-left: 15px;
                }
            </style>
            <header>
                <div class="logo">PhotoFolio</div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                </nav>
            </header>
        `;
        }

    }
    customElements.define('header-element', HeaderElement);
})
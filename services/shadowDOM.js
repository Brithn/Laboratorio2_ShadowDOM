class DarkModeToggle extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        this.toggleButton = this.shadowDOM.getElementById('toggle-button');
        this.toggleIcon = this.shadowDOM.getElementById('toggle-icon');
        this.body = document.body;

        this.toggleButton.addEventListener('click', () => {
            this.body.classList.toggle('light-mode');
            if (this.body.classList.contains('light-mode')) {
                this.toggleIcon.classList.remove('fa-moon');
                this.toggleIcon.classList.add('fa-sun');
            } else {
                this.toggleIcon.classList.remove('fa-sun');
                this.toggleIcon.classList.add('fa-moon');
            }
        });
    }

    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
    }

    template() {
        return `
            <div class="toggle-container">
                <button id="toggle-button" class="toggle-button">
                    <i id="toggle-icon" class="fas fa-moon"></i>
                </button>
            </div>
        `;
    }

    templateCss() {
        return `
            <style>
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

                .toggle-container {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                }

                .toggle-button {
                    background-color: #ffffff;
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .toggle-button .fas {
                    color: #000000;
                }

                .toggle-button.light-mode {
                    background-color: #000000;
                }

                .toggle-button.light-mode .fas {
                    color: #ffffff;
                }

                body.light-mode {
                    background-color: #ffffff;
                    color: #000000;
                }
            </style>
        `;
    }
}

window.customElements.define('dark-mode-toggle', DarkModeToggle);

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        body {
            margin: 0;
            font-family: serif;
            background-color: #000000;
            color: #ffffff;
            transition: background-color 0.3s, color 0.3s;
        }

        body.light-mode {
            background-color: #ffffff;
            color: #000000;
        }
    `;
    document.head.appendChild(style);
});

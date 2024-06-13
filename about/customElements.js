document.addEventListener('DOMContentLoaded', function() {
  class CustomSectionTitle extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
        <style>
          :host {
            --background-color: #000; 
            --default-color: #fafafa; 
            --heading-color: #ffffff; 
            --accent-color: #27a776; 
            --contrast-color: #161718;
            display: block;
            font-family: 'Poppins', sans-serif;
          }
          .container {
            color: var(--default-color);
            background-color: var(--background-color);
            padding: 20px;
            position: relative;
          }
          .container h2 {
            font-size: 14px;
            font-weight: 400;
            padding: 10px;
            line-height: 1px;
            margin: 0;  
            
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: color-mix(in srgb, var(--default-color), transparent 50%);
            position: relative;
          }
          .container h2::after {
            content: "";
            width: 120px;
            height: 1px;
            display: inline-block;
            background: var(--accent-color);
            margin: 4px 10px;
            position: absolute;
            bottom: 9px;
            border-radius: 50%;
            animation: colorShift 5s infinite;
            transform-origin: center;
          }
          .container p {
            color: var(--heading-color);
            margin: 0;
           
            font-size: 36px;
            font-weight: 400;
            margin-right: 20px;
          }

          @keyframes colorShift {
            0% {
              background-color: var(--accent-color);
            }
            50% {
              background-color: white;
            }
            100% {
              background-color: var(--accent-color);
            }
          }
        </style>
        <div class="container" data-aos="fade-up">
          <h2></h2>
          <p></p>
        </div>
      `;
    }

    static get observedAttributes() {
      return ['heading', 'subheading'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'heading') {
        this.querySelector('h2').textContent = newValue;
      }
      if (name === 'subheading') {
        this.querySelector('p').textContent = newValue;
      }
    }
  }

  customElements.define('custom-section-title', CustomSectionTitle);
});
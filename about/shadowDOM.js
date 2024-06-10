class BreadcrumbNav extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.mapComponentAttributes();
      this.render();
    }

    mapComponentAttributes() {
      const attributeMapping = ['separator'];
      attributeMapping.forEach(key => {
        if (!this.hasAttribute(key)) {
          this.setAttribute(key, '/');
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
      const items = Array.from(this.querySelectorAll('li')).map(item => {
        return `<li class="breadcrumb-item">${item.innerHTML}</li>`;
      }).join('');

      return `
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            ${items}
          </ol>
        </nav>
      `;
    }

    templateCss() {
      const separator = this.getAttribute('separator');
      return `
        <style>
          :host {
            display: block;
            font-family: 'Poppins', sans-serif;
            background-color: #585858;
           
            padding: 5px;
          }
          .breadcrumb {
            list-style: none;
            padding: 0;
            display: flex;
            margin-left: 10%;
            font-size: 1.2em;
          }
          .breadcrumb-item {
            margin-right: 5px;
          }
          .breadcrumb-item + .breadcrumb-item::before {
            content: "${separator}";
            margin-right: 5px;
          }
          .breadcrumb-item a {
            text-decoration: none;
            color: #0de592;
          }
          .breadcrumb-item.active a {
            color: black;
            pointer-events: none;
            cursor: default;
          }
          .breadcrumb li:last-child:not(:has(a)) {
            color: #ffffff; 
          }
        </style>
      `;
    }
  }

  window.customElements.define('breadcrumb-nav', BreadcrumbNav);

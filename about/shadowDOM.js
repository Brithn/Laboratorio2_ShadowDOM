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
        if (!this.attributes[key]) {
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
          .breadcrumb-nav {
            display: block;
            font-family: Arial, sans-serif;
          }
          .breadcrumb {
            list-style: none;
            padding: 0;
            display: flex;
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
            color: blue;
          }
          .breadcrumb-item.active a {
            color: black;
            pointer-events: none;
            cursor: default;
          }
        </style>
      `;
    }
  }

  window.customElements.define('breadcrumb-nav', BreadcrumbNav);
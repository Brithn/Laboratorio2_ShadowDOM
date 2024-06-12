class BreadcrumbNav extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
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
      this.shadowRoot.innerHTML = `
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
            background-color: #303030;
        }
        nav {
            display: block;
            unicode-bidi: isolate;
            padding: 15px 0;
        }
        .breadcrumb {
            list-style: none;
            display: flex;
            font-size: 1.2em;
            padding: 0;
            margin: 0;
            margin-left: 10%;
        }
        .breadcrumb-item {
            margin-right: 5px;
        }
        .breadcrumb-item :hover {
            color: #ff7f50;
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

export default BreadcrumbNav;

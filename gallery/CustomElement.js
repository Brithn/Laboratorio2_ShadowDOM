class CustomElement extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
          <section class="hero">
              <h1>Gallery Single</h1>
              <p>
                  Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem.
                  Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
              </p>
              <button>Available for Hire</button>
          </section>
          <section class="breadcrumb">
              <p>Home / Gallery Single</p>
          </section>
      `;
  }
}

customElements.define('custom-element', CustomElement);

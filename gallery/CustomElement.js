class CustomElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          <section class="hero">
          <div class="col-6  mx-auto">
              <h1>Galería</h1>
              <p>
                 En una galería bulliciosa, el arte y la vida se entrelazan en una danza de colores y formas.
                  Cada obra cuenta una historia, susurra un secreto o despierta una emoción dormida. 
                  Los pasos de los visitantes crean una sinfonía de pisadas que acompaña el murmullo de las conversaciones. 
                  Entre las paredes adornadas, el tiempo parece detenerse, permitiendo a 
                  los espectadores perderse en un mundo de creatividad infinita. En cada esquina,
                  una nueva sorpresa aguarda, transformando la experiencia en un viaje inolvidable.
              </p>
            </div>
          </section>
          <section class="breadcrumb">
              <p>Inicio / Galería</p>
          </section>   
      `;
    }
}

customElements.define('custom-element', CustomElement);

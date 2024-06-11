class MyCarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }
          body {
            display: flex;
            padding: 0 35px;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: linear-gradient(to left top, #031A9A, #8B53FF);
          }
          .wrapper {
            max-width: 1100px;
            width: 100%;
            position: relative;
          }
          .wrapper i {
            top: 50%;
            height: 50px;
            width: 50px;
            cursor: pointer;
            font-size: 1.25rem;
            position: absolute;
            text-align: center;
            line-height: 50px;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0 3px 6px rgba(0,0,0,0.23);
            transform: translateY(-50%);
            transition: transform 0.1s linear;
          }
          .wrapper i:active {
            transform: translateY(-50%) scale(0.85);
          }
          .wrapper i:first-child {
            left: -22px;
          }
          .wrapper i:last-child {
            right: -22px;
          }
          .wrapper .carousel {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: calc((100% / 3) - 12px);
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 16px;
            border-radius: 8px;
            scroll-behavior: smooth;
            scrollbar-width: none;
          }
          .carousel::-webkit-scrollbar {
            display: none;
          }
          .carousel.no-transition {
            scroll-behavior: auto;
          }
          .carousel.dragging {
            scroll-snap-type: none;
            scroll-behavior: auto;
          }
          .carousel.dragging .card {
            cursor: grab;
            user-select: none;
          }
          .carousel :where(.card, .img) {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .carousel .card {
            scroll-snap-align: start;
            height: 342px;
            list-style: none;
            background: #fff;
            cursor: pointer;
            padding-bottom: 15px;
            flex-direction: column;
            border-radius: 8px;
          }
          .carousel .card .img {
            background: #8B53FF;
            height: 148px;
            width: 148px;
            border-radius: 50%;
          }
          .card .img img {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #fff;
          }
          .carousel .card h2 {
            font-weight: 500;
            font-size: 1.56rem;
            margin: 30px 0 5px;
          }
          .carousel .card span {
            color: #6A6D78;
            font-size: 1.31rem;
          }
          @media screen and (max-width: 900px) {
            .wrapper .carousel {
              grid-auto-columns: calc((100% / 2) - 9px);
            }
          }
          @media screen and (max-width: 600px) {
            .wrapper .carousel {
              grid-auto-columns: 100%;
            }
          }
        </style>
        <div class="wrapper">
          <i id="left" class="fa-solid fa-angle-left"></i>
          <ul class="carousel">
            <li class="card">
              <div class="img"><img src="images/img-1.jpg" alt="img" draggable="false"></div>
              <h2>Blanche Pearson</h2>
              <span>Sales Manager</span>
            </li>
            <li class="card">
              <div class="img"><img src="images/img-2.jpg" alt="img" draggable="false"></div>
              <h2>Joenas Brauers</h2>
              <span>Web Developer</span>
            </li>
            <li class="card">
              <div class="img"><img src="images/img-3.jpg" alt="img" draggable="false"></div>
              <h2>Lariach French</h2>
              <span>Online Teacher</span>
            </li>
            <li class="card">
              <div class="img"><img src="images/img-4.jpg" alt="img" draggable="false"></div>
              <h2>James Khosravi</h2>
              <span>Freelancer</span>
            </li>
            <li class="card">
              <div class="img"><img src="images/img-5.jpg" alt="img" draggable="false"></div>
              <h2>Kristina Zasiadko</h2>
              <span>Bank Manager</span>
            </li>
            <li class="card">
              <div class="img"><img src="images/img-6.jpg" alt="img" draggable="false"></div>
              <h2>Donald Horton</h2>
              <span>App Designer</span>
            </li>
          </ul>
          <i id="right" class="fa-solid fa-angle-right"></i>
        </div>
        `;

        this.wrapper = this.shadowRoot.querySelector('.wrapper');
        this.carousel = this.shadowRoot.querySelector('.carousel');
        this.firstCardWidth = this.carousel.querySelector('.card').offsetWidth;
        this.arrowBtns = this.shadowRoot.querySelectorAll('.wrapper i');
        this.carouselChildrens = [...this.carousel.children];

        this.isDragging = false;
        this.isAutoPlay = true;
        this.startX = 0;
        this.startScrollLeft = 0;
        this.timeoutId = null;

        this.initCarousel();
    }

    initCarousel() {
        let cardPerView = Math.round(this.carousel.offsetWidth / this.firstCardWidth);

        this.carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            this.carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        this.carouselChildrens.slice(0, cardPerView).forEach(card => {
            this.carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        this.carousel.classList.add("no-transition");
        this.carousel.scrollLeft = this.carousel.offsetWidth;
        this.carousel.classList.remove("no-transition");

        this.arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                this.carousel.scrollLeft += btn.id == "left" ? -this.firstCardWidth : this.firstCardWidth;
            });
        });

        this.carousel.addEventListener("mousedown", this.dragStart.bind(this));
        this.carousel.addEventListener("mousemove", this.dragging.bind(this));
        document.addEventListener("mouseup", this.dragStop.bind(this));
        this.carousel.addEventListener("scroll", this.infiniteScroll.bind(this));
        this.wrapper.addEventListener("mouseenter", () => clearTimeout(this.timeoutId));
        this.wrapper.addEventListener("mouseleave", this.autoPlay.bind(this));

        this.autoPlay();
    }

    dragStart(e) {
        this.isDragging = true;
        this.carousel.classList.add("dragging");
        this.startX = e.pageX;
        this.startScrollLeft = this.carousel.scrollLeft;
    }

    dragging(e) {
        if (!this.isDragging) return;
        this.carousel.scrollLeft = this.startScrollLeft - (e.pageX - this.startX);
    }

    dragStop() {
        this.isDragging = false;
        this.carousel.classList.remove("dragging");
    }

    infiniteScroll() {
        if (this.carousel.scrollLeft === 0) {
            this.carousel.classList.add("no-transition");
            this.carousel.scrollLeft = this.carousel.scrollWidth - (2 * this.carousel.offsetWidth);
            this.carousel.classList.remove("no-transition");
        } else if (Math.ceil(this.carousel.scrollLeft) === this.carousel.scrollWidth - this.carousel.offsetWidth) {
            this.carousel.classList.add("no-transition");
            this.carousel.scrollLeft = this.carousel.offsetWidth;
            this.carousel.classList.remove("no-transition");
        }

        clearTimeout(this.timeoutId);
        if (!this.wrapper.matches(":hover")) this.autoPlay();
    }

    autoPlay() {
        if (window.innerWidth < 800 || !this.isAutoPlay) return;
        this.timeoutId = setTimeout(() => this.carousel.scrollLeft += this.firstCardWidth, 2500);
    }
}

customElements.define('my-carousel', MyCarousel);

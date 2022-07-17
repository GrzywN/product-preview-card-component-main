class ProductPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
            *,
            *::before,
            *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            }
            .ProductPreview__Card {
            background-color: var(--bg-color-card, #fff);
            border-radius: 0.625rem;
            display: flex;
            flex-direction: column;
            }
            .ProductPreview__ImageWrapper {
            border-top-left-radius: 0.625rem;
            border-top-right-radius: 0.625rem;
            width: auto;
            height: 15rem;
            overflow: hidden;
            }
            .ProductPreview__Image {
            content: var(--image-mobile);
            max-width: 100%;
            border-top-left-radius: 0.625rem;
            border-top-right-radius: 0.625rem;
            transition: transform 0.2s ease-in-out;
            }
            .ProductPreview__Image:hover {
            transform: scale(1.5);
            }
            .ProductPreview__Body {
            padding: 1.5rem;
            }
            .ProductPreview__Type {
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            font-size: 0.75rem;
            line-height: 0.9375rem;
            letter-spacing: 0.3125rem;
            color: var(--color-type, #6c7289);
            text-transform: uppercase;
            margin-bottom: 0.75rem;
            }
            .ProductPreview__Name {
            font-family: 'Fraunces', serif;
            font-weight: 700;
            font-size: 2rem;
            line-height: 2rem;
            letter-spacing: 0;
            color: var(--color-name, #1c232b);
            margin-bottom: 1rem;
            }
            .ProductPreview__Description {
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.4375rem;
            letter-spacing: 0;
            color: var(--color-description, #6c7289);
            margin-bottom: 1.5rem;
            }
            .ProductPreview__Prices {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 1.25rem;
            }
            .ProductPreview__CurrentPrice {
            font-family: 'Fraunces', serif;
            font-weight: 700;
            font-size: 2rem;
            line-height: 2rem;
            letter-spacing: 0;
            color: var(--color-current-price, #3c8067);
            }
            .ProductPreview__OldPrice {
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            font-size: 0.8125rem;
            line-height: 1.4375rem;
            letter-spacing: 0;
            color: var(--color-old-price, #6c7289);
            text-decoration: line-through;
            }
            .ProductPreview__AddToCart {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            font-size: 0.875rem;
            line-height: 1.0625rem;
            letter-spacing: 0;
            color: var(--color-add-to-cart, #fff);
            background-color: var(--bg-color-add-to-cart, #3c8067);
            width: 100%;
            height: 3rem;
            border-radius: 0.5rem;
            border: 0;
            display: grid;
            place-items: center;
            cursor: pointer;
            transition: 0.2s ease-in-out;
            transition-property: color, background-color;
            }
            .ProductPreview__AddToCart:hover {
            color: var(--color-add-to-cart-hover, #fff);
            background-color: var(--bg-color-add-to-cart-hover, #1a4032);
            }
            .ProductPreview__AddToCartWrapper {
            display: flex;
            align-items: center;
            gap: 0.6875rem;
            }
            .ProductPreview__CartIcon {
                content: var(--icon-cart);
            }

            @media screen and (min-width: 48em) {
            .ProductPreview__Card {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                max-width: 37.5rem;
            }
            .ProductPreview__ImageWrapper {
                border-top-right-radius: 0;
                border-bottom-left-radius: 0.625rem;
                height: 100%;
            }
            .ProductPreview__Image {
                content: var(--image-desktop);
                border-top-right-radius: 0;
                border-bottom-left-radius: 0.625rem;
            }
            .ProductPreview__Body {
                padding: 2rem;
            }
            .ProductPreview__Type {
                margin-bottom: 1.25rem;
            }
            .ProductPreview__Name {
                margin-bottom: 1.5rem;
            }
            .ProductPreview__Description {
                margin-bottom: 1.8125rem;
            }
            .ProductPreview__Prices {
                margin-bottom: 1.875rem;
            }
            }
        </style>

        <div class="ProductPreview">
        <div class="ProductPreview__Card">
          <div class="ProductPreview__ImageWrapper">
            <img class="ProductPreview__Image" src="" alt="" />
          </div>
          <div class="ProductPreview__Body">
            <h2 class="ProductPreview__Type"><slot name="type">Perfume</slot></h2>
            <h3 class="ProductPreview__Name"><slot name="name">Gabrielle Essence Eau De Parfum</slot></h3>
            <p class="ProductPreview__Description"
              ><slot name="description">A floral, solar and voluptuous interpretation composed by Olivier Polge,
              Perfumer-Creator for the House of CHANEL.</slot></p
            >
            <div class="ProductPreview__Prices">
              <span class="ProductPreview__CurrentPrice"><slot name="current-price">$149.99</slot></span>
              <span class="ProductPreview__OldPrice"><slot name="old-price">$169.99</slot></span>
            </div>
            <button class="ProductPreview__AddToCart" type="button">
              <span class="ProductPreview__AddToCartWrapper">
                <img class="ProductPreview__CartIcon" src="./assets/icon-cart.svg" alt="" />
                <slot name="add-to-cart">Add to Cart</slot>
              </span>
            </button>
          </div>
        </div>
      </div>
    `;
    const addToCartButton = this.shadowRoot.querySelector(
      ".ProductPreview__AddToCart"
    );
    this.addToCart = this.addToCart.bind(this);
    addToCartButton.addEventListener("click", this.addToCart);
  }

  disconnectedCallback() {
    const addToCartButton = this.shadowRoot.querySelector(
      ".ProductPreview__AddToCart"
    );
    addToCartButton.removeEventListener("click", this.addToCart);
  }

  addToCart() {
    const addToCartEvent = new Event("addToCart");
    this.dispatchEvent(addToCartEvent);
  }
}

customElements.define("product-preview", ProductPreview);

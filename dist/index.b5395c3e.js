class ProductPreview extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.innerHTML = `
        <div class="ProductPreview">
            <div class="ProductPreview__Card">
                <img class="ProductPreview__Image" src="" alt="">
                <div class="ProductPreview__Body">
                    <h2 class="ProductPreview__Type">Perfume</h2>
                    <h3 class="ProductPreview__Name">Product Name</h3>
                    <p class="ProductPreview__Description">Product Description</p>
                    <div class="ProductPreview__Prices">
                        <span class="ProductPreview__CurrentPrice">$149.99</span>
                        <span class="ProductPreview__OldPrice">$169.99</span>
                    </div>
                    <button class="ProductPreview__AddToCart" type="button">
                        <img class="ProductPreview__CartIcon" src="../assets/icon-cart.svg" alt="" width="20" height="20">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    }
}
customElements.define("product-preview", ProductPreview);

//# sourceMappingURL=index.b5395c3e.js.map
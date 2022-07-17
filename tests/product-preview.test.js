// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import ProductPreview from "../src/scripts/product-preview";

describe("ProductPreview", () => {
  if (ProductPreview == null) throw new Error("ProductPreview not found");

  it("should render", () => {
    const productPreview = new ProductPreview();
    expect(productPreview).toBeDefined();
  });

  it("should render a product preview", () => {
    const productPreview = new ProductPreview();
    expect(productPreview.shadowRoot.innerHTML).toContain("ProductPreview");
  });

  it("should render a product preview with a type", () => {
    const productPreview = new ProductPreview();
    expect(productPreview.shadowRoot.innerHTML).toContain("Perfume");
  });

  it("should render a product preview with a name", () => {
    const productPreview = new ProductPreview();
    expect(productPreview.shadowRoot.innerHTML).toContain(
      "Gabrielle Essence Eau De Parfum"
    );
  });

  it("should render a product preview with a description", () => {
    const productPreview = new ProductPreview();
    expect(
      productPreview.shadowRoot.innerHTML
        .replaceAll(" ", "")
        .replaceAll("\n", "")
    ).toContain(
      "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        .replaceAll(" ", "")
        .replaceAll("\n", "")
    );
  });
});

import ProductPreviewCard from "./Components/ProductPreviewCard.js";

// *** *** *** Variables *** *** ***
const $main = document.getElementById("main");

const allProducts = [
    {
        name: "Gabrielle Essence Eau De Parfum",
        category: "Perfume",
        description: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
        currentPrice: 149.99,
        oldPrice: 169.99,
        img: {
            desktop: "./images/image-product-desktop.jpg",
            mobile: "./images/image-product-mobile.jpg"
        }
    }
]

// *** *** *** Ejecución *** *** ***
document.addEventListener("DOMContentLoaded", () => {
    $main.append(
        ProductPreviewCard(allProducts[0])
    );
});

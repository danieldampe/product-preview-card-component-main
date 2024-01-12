export default function ProductPreviewCard(product) {
    // *** *** *** Variables *** *** ***
    const $template = document.getElementById("product-preview-card").content,
        $clone = document.importNode($template, true),
        $card = $clone.querySelector(".product-preview-card"),
        $name = $clone.querySelector(".product-preview-card-name"),
        $category = $clone.querySelector(".product-preview-card-category"),
        $description = $clone.querySelector(".product-preview-card-description"),
        $currentPrice = $clone.querySelector(".product-preview-card-current-price"),
        $oldPrice = $clone.querySelector(".product-preview-card-old-price"),
        $picture = $clone.querySelector(".product-preview-card-picture"),
        $img = $clone.querySelector(".product-preview-card-img"),
        $source = document.createElement("source");

    // *** *** *** Ejecución *** *** ***
    $name.textContent = product.name;
    $category.textContent = product.category;
    $description.textContent = product.description;
    $currentPrice.textContent = "$" + product.currentPrice;
    $oldPrice.textContent = "$" + product.oldPrice;
    $img.src = product.img.mobile;
    $img.alt = product.name;
    $source.srcset = product.img.desktop;
    $source.media = "(min-width: 800px)";
    $picture.prepend($source);
    return $card;
};

var app = new Vue({
    el: "#app",
    data: { 
        product: "Socks",
        description: "A pair of warm, fuzzy socks",
        altText: "A pair of warm, fuzzy socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
        inventory: 100,
        details: ["80% cotton", "Gender neutral"],
        variants: [
            {
                variantId: 1,
                variantColor: "Green",
            },
            {
                variantId: 2,
                variantColor: "Blue",
            },
        ],
    }
})

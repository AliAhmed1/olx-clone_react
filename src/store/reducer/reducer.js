const INTIAL_STATE = {
    products: [{
        title: "samsung A88",
        description: "this is samsung",
        category: "mobile",
        feature: true,
        price: "39999",
    },
    {
        title: "laptop 843",
        description: "this is laptop",
        category: "computer",
        feature: true,
        price: "79999",
    }, {
        title: "Huawei AY9",
        description: "this is Huawei",
        category: "mobile",
        feature: true,
        price: "69999",
    }, {
        title: "bed double",
        description: "this is furniture",
        category: "furniture",
        feature: true,
        price: "59999",
    }, {
        title: "toyota corolla",
        description: "this is Car",
        category: "car",
        feature: true,
        price: "39999",
    },
    ]
}

export default (state = INTIAL_STATE) => {
    return state;
}
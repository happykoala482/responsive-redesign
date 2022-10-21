function mod(n, m) {
    return ((n % m) + m) % m;
}

class DesktopListing {
    constructor(image, name, stars, price, gpuName, cpuName) {
        this.image = image;
        this.name = name;
        this.stars = stars;
        this.price = price;
        this.gpuName = gpuName;
        this.cpuName = cpuName;
    }
}

let entryLevelItems = {
    "gaming" : [
        new DesktopListing("./assets/entryLevel/gaming/1.png", "Lenovo Legion T5i 26IOB6 Gaming PC", 5, "$849.99", "NVIDIA GeForce RTX 3060", "Intel Core i5 11th Gen 11500"),
        new DesktopListing("./assets/entryLevel/gaming/3.png", "PowerSpec B685 Desktop Computer", 2, "$629.99", "Intel UHD Graphics 630", "Intel Core i5 12th Gen 12400"),
        new DesktopListing("./assets/entryLevel/gaming/4.png", "Acer Aspire TC-1750-UR12 Desktop Computer", 3, "$649.99", "Intel UHD Graphics 730", "Intel Core i5 12th Gen 12400"),
        new DesktopListing("./assets/entryLevel/gaming/2.png", "Dell OptiPlex 3090 SFF Desktop Computer", 3, "$699.99", "Intel UHD Graphics 630", "Intel Core i5 10th Gen 10505"),
    ],
    "professional": [
        new DesktopListing("./assets/entryLevel/professional/1.png", "Apple Mac mini MGNR3LL/A (Late 2020) Desktop Computer", 5, "$549.99", "8-Core GPU", "Apple M1 8-Core CPU"),
        new DesktopListing("./assets/entryLevel/professional/2.png", "Dell Precision T3630 Workstation Desktop Computer", 4, "$799.99", "NVIDIA Quadro P2000", "Intel Xeon E-2124G"),
    ],
    "casual": [
        new DesktopListing("./assets/entryLevel/casual/1.png", "HP 27-dp1370 27\" All-in-One Desktop Computer", 5, "$849.99", "NVIDIA GeForce RTX 3060", "Intel Core i5 11th Gen 11500"),
        new DesktopListing("./assets/entryLevel/casual/4.png", "Apple Mac mini MGNR3LL/A (Late 2020) Desktop Computer", 5, "$549.99", "8-Core GPU", "Apple M1 8-Core CPU"),
        new DesktopListing("./assets/entryLevel/casual/2.png", "Dell OptiPlex 3090 SFF Desktop Computer", 3, "$699.99", "Intel UHD Graphics 630", "Intel Core i5 10th Gen 10505"),
        new DesktopListing("./assets/entryLevel/casual/3.png", "Dell Inspiron 24 5400 23.8\" All-in-One Desktop Computer", 4, "$699.99", "Intel UHD Graphics", " Intel Core i3 11th Gen 1115G4"),
    ],
};
let midRangeItems = {
    "gaming" : [
        new DesktopListing("./assets/midRange/gaming/1.png", "PowerSpec G711 Gaming PC", 5, "$1499.99", "NVIDIA GeForce RTX 3060 Ti", "AMD Ryzen 7 5700X"),
        new DesktopListing("./assets/midRange/gaming/2.png", "Dell XPS 8950 Gaming PC Platinum Collection", 3, "$1,599.99", "NVIDIA GeForce RTX 3060", "Intel Core i7 12th Gen 12700"),
        new DesktopListing("./assets/midRange/gaming/3.png", "PowerSpec G512 Gaming PC", 4, "$1,099.99", "NVIDIA GeForce RTX 3060", "AMD Ryzen 5 5600X"),
    ],
    "professional": [
        new DesktopListing("./assets/midRange/professional/1.png", "Supermicro Mid-Tower Server", 2, "$1,349.99", "N/A", "Intel Xeon E-2136"),
        new DesktopListing("./assets/midRange/professional/2.png", "Dell Precision 3240 Workstation Desktop Computer", 3, "$1,149.97", "Intel UHD Graphics 630", "Intel Core i7 10700 "),
        new DesktopListing("./assets/midRange/professional/3.png", "Apple iMac MGTF3LL/A 24\" (Mid 2021) All-in-One Desktop Computer - Silver", 5, "$1,199.99", "7-Core GPU", "Apple M1 8-Core CPU"),
        new DesktopListing("./assets/midRange/professional/4.png", "PowerSpec G711 Gaming PC", 5, "$1,499.99", "NVIDIA GeForce RTX 3060 Ti", "AMD Ryzen 7 5700X"),
    ],
    "casual": [
        new DesktopListing("./assets/midRange/casual/1.png", "Lenovo Legion T5i 26IOB6 Gaming PC", 5, "$849.99", "NVIDIA GeForce RTX 3060", "Intel Core i5 11th Gen 11500"),
        new DesktopListing("./assets/midRange/casual/2.png", "Lenovo IdeaCentre 5 24IAH7 24\" All-in-One Desktop Computer", 5, "$999.99", "Intel Iris Xe Graphics", "Intel Core i5 12th Gen 12500H"),
        new DesktopListing("./assets/midRange/casual/3.png", "PowerSpec G512 Gaming PC", 3, "$1,099.99", "NVIDIA GeForce RTX 3060", "AMD Ryzen 5 5600X"),
        new DesktopListing("./assets/midRange/casual/4.png", "Apple iMac MGTF3LL/A 24\" (Mid 2021) All-in-One Desktop Computer - Silver", 5, "$1,129.99", "8-Core GPU", "Apple M1 8-Core CPU"),
    ],
};
let highEndItems = {
    "gaming" : [
        new DesktopListing("./assets/highEnd/gaming/1.png", "PowerSpec G470 Gaming PC", 5, "$2,499.99", "NVIDIA GeForce RTX 3080 Ti", "Intel Core i9 12900KF"),
        new DesktopListing("./assets/highEnd/gaming/2.png", "PowerSpec G439 Gaming PC", 4, "$1,899.99", "NVIDIA GeForce RTX 3070 Ti", "Intel Core i7 12700KF"),
        new DesktopListing("./assets/highEnd/gaming/3.png", "PowerSpec G440 Gaming PC", 5, "$1,499.99", "NVIDIA GeForce RTX 3070 Ti", "Intel Core i7 12700KF"),
    ],
    "professional": [
        new DesktopListing("./assets/highEnd/professional/1.png", "Apple Mac Studio Z14J0008K (Early 2022) Desktop Computer", 5, "$2,349.99", "24-Core GPU", "Apple M1 Max 10-Core CPU"),
        new DesktopListing("./assets/highEnd/professional/2.png", "Dell G439 Workstation PC", 4, "$2079.99", "AMD Radeon Pro WX 3200", "Intel Core i9 10900X"),
        new DesktopListing("./assets/highEnd/professional/3.png", "PowerSpec G440 Gaming PC", 5, "$1,999.99", "NVIDIA GeForce RTX 3070 Ti", "Intel Core i7 12700KF"),
        new DesktopListing("./assets/highEnd/professional/4.png", "PowerSpec G470 Gaming PC", 5, "$2,499.99", "NVIDIA GeForce RTX 3080 Ti", "Intel Core i9 12900KF"),
    ],
    "casual": [
        new DesktopListing("./assets/highEnd/casual/1.png", "Apple iMac MGPK3LL/A 24\" (Mid 2021) All-in-One Desktop Computer - Blue", 5, "$1,449.99", "8-Core GPU", "Apple M1 8-Core CPU"),
        new DesktopListing("./assets/highEnd/casual/2.png", "PowerSpec G439 Gaming PC", 5, "$1899.99", "NVIDIA GeForce RTX 3070 Ti ", "Intel Core i7 12700KF"),
        new DesktopListing("./assets/highEnd/casual/3.png", "HP Pavilion 32-b0050 31.5\" All-in-One Desktop Computer", 3, "$1,599.99", "Intel UHD Graphics 770", "Intel Core i7-12700T"),
    ],
};

let categoryTexts = {
    "gaming": [
        "Play the latest games. <span class=\"secondary-color large\">Maximize your potential.</span>",
        "Graphics performance is most important to you so we'll allocate the largest chunk of your budget to a <span class=\"gpu\">powerful graphics card.</span>",
        "Our higher-end systems will also have plenty of <span class=\"cpu\">CPU performance</span> so you can stream your gameplay for your friends and audience.",
        "You've got a budget between $650 and $1,000. These systems will be perfect for Esports titles and 1080p gaming!",
        "You've got a budget between $1,000 and $1,750. These systems will handle every game and be perfect for 1440p gaming.",
        "You've got a budget over $1,750. These systems will handle any game you throw at them with the highest settings and the resolution all the way to 4k.",
    ],
    "professional": [
        "A powerful workstation. <span class=\"secondary-color large\">For when your time is money.</span>",
        "A <span class=\"gpu\">powerful graphics card</span> can accelerate tasks like machine learning and video rendering.",
        "Incredible <span class=\"cpu\">CPU performance</span> is the most important for a workstation. More cores and threads means getting your work done for the day that much faster.",
        "You've got a budget between $650 and $1,000. These systems will be perfect for getting your business off the ground.",
        "You've got a budget between $1,000 and $1,750. You've leveled up your business and are ready to invest in yourself. These machines will save you time and make you more efficient in your work.",
        "You've got a budget over $1,750. These systems will handle video editing and playback of 4k streams, compiles of large developer project, machine learning tasks, and more.",
    ],
    "casual": [
        "A computer for the home. <span class=\"secondary-color large\">Watch movies and surf the web.</span>",
        "If you or any kids in the house want to play games, a <span class=\"gpu\">graphics card</span> will make the experience that much better!",
        "A <span class=\"cpu\">reliable CPU</span> will make sure everything load fast and feels snappy.",
        "You've got a budget between $400 and $750. These systems will be snappy and responsive for watching movies and browsing the internet.",
        "You've got a budget between $750 and $1,250. These systems will handle all the basics and let you play some games on the side.",
        "You've got a budget over $1,250. These systems will have higher build quality and be great for any light task you throw at them. They'll also handle some light gaming.",
    ],
}

const categories = ["gaming", "professional", "casual"];
var currentCategoryIndex = 0;

const updateCategorySpecificText = () => {
    const category = categories[mod(currentCategoryIndex, categories.length)];

    const categoryText = categoryTexts[category];

    const specH1 = document.getElementById('spec-h1');
    const specGpu = document.getElementById('gpu-spec');
    const specCpu = document.getElementById('cpu-spec');
    const entryLevel = document.getElementById('entry-level-h2');
    const midRange = document.getElementById('mid-range-h2');
    const highEnd = document.getElementById('high-end-h2');

    specH1.innerHTML = categoryText[0];
    specGpu.innerHTML = categoryText[1];
    specCpu.innerHTML = categoryText[2];
    entryLevel.innerHTML = categoryText[3];
    midRange.innerHTML = categoryText[4];
    highEnd.innerHTML = categoryText[5];
}

const updateCategoryHeader = () => {
    const category = categories[mod(currentCategoryIndex, categories.length)];

    const h1 = document.getElementById('category-bar-h1');
    const image1 = document.getElementById('category-bar-image1');
    const image2 = document.getElementById('category-bar-image2');
    const bar = document.getElementById('category-bar');

    image1.setAttribute('src', `./assets/${category}-1.png`);
    image2.setAttribute('src', `./assets/${category}-2.png`);
    h1.innerHTML = category.charAt(0).toUpperCase() + category.slice(1);
    console.log(bar.classList);
    bar.classList = `category-bar ${category}`;

}

const loadDesktopListingValues = () => {
    const pairs = [['entry-level-carousel', entryLevelItems], ['mid-range-carousel', midRangeItems], ['high-end-carousel', highEndItems]]
    pairs.forEach(pair => {
        const elementId = pair[0];
        const items = pair[1];

        const carousel = document.getElementById(elementId);
        carousel.innerHTML = "";

        const category = categories[mod(currentCategoryIndex, categories.length)];
        const desktopListings = items[category];
        desktopListings.forEach(desktopListing => {
            const newElement = document.createElement('div');
            newElement.classList.add('carousel-item');
            newElement.innerHTML = `
                <div class="desktop-listing">
                    <img src="${desktopListing.image}">
                    <p>${desktopListing.name}</p>
                    <div class="star-ratings">
                        <img src="${desktopListing.stars >= 1 ? "./assets/filled-star.png" : "./assets/empty-star.png"}">
                        <img src="${desktopListing.stars >= 2 ? "./assets/filled-star.png" : "./assets/empty-star.png"}">
                        <img src="${desktopListing.stars >= 3 ? "./assets/filled-star.png" : "./assets/empty-star.png"}">
                        <img src="${desktopListing.stars >= 4 ? "./assets/filled-star.png" : "./assets/empty-star.png"}">
                        <img src="${desktopListing.stars >= 5 ? "./assets/filled-star.png" : "./assets/empty-star.png"}">
                    </div>
                    <p>${desktopListing.price}</p>
                    <div class="desktop-spec gpu-${category}">
                        <img src="./assets/gpu-icon.png">
                        <p class="gpu">${desktopListing.gpuName}</p>
                    </div>
                    <div class="desktop-spec cpu-${category}">
                        <img src="./assets/cpu-icon.png">
                        <p class="cpu">${desktopListing.cpuName}</p>
                    </div>
                </div>`;  
            carousel.append(newElement);
            carousel.scrollLeft = 0;
        });
    });
}

const leftClick = () => {
    currentCategoryIndex -= 1;
    loadDesktopListingValues();   
    updateCategoryHeader();
    updateCategorySpecificText();
}

const rightClick = () => {
    currentCategoryIndex += 1;
    loadDesktopListingValues();
    updateCategoryHeader();
    updateCategorySpecificText();
} 


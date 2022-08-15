let imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

const divContainer = document.getElementById("container");

function renderImg() {
    let imgsDOM = ''
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img class="team-img" src="${imgs[i]}" alt="Employee in the company" />`
    }

    divContainer.innerHTML = imgsDOM;
}

renderImg();
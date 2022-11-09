const loadImageButton = document.getElementById('load-images');
const SecondaryImage = document.getElementById('SecondaryImage');
const cardNode = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');

loadImageButton.addEventListener('click', () => {
    APIcall('Nature');
})

SecondaryImage.addEventListener('click', () => {
    APIcall('Tigers');
})

APIcall = (value) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 563492ad6f9170000100000186bad3b4d9e44f52971f217b0fc156d2");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch(`https://api.pexels.com/v1/search?query=${value}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            const { photos } = result;

            for (let i = 0; i < photos.length; i++) {
                const obj = photos[i];
                let img = document.createElement("img");
                img.src = obj.src.original;
                img.alt = 'image'
                let svgTage = document.querySelector('.card-img-top');
                svgTage.replaceWith(img);
            }
        })
        .catch(error => console.log('error', error));
}

window.onload = () => {}
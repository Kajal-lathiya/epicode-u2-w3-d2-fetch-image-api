const loadImageButton = document.getElementById('load-images');
const cardNode = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const svgTage = document.getElementsByTagName('svg');

loadImageButton.addEventListener('click', () => {})

APIcall = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 563492ad6f9170000100000186bad3b4d9e44f52971f217b0fc156d2");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://api.pexels.com/v1/search?query=Nature", requestOptions)
        .then(response => response.json())
        .then(result => {
            const { photos } = result;
            console.log('svgTage-->', svgTage);
            for (let i = 0; i < photos.length; i++) {
                const obj = photos[i];
                console.log('obj.src.original->', obj.src.original);
                var img = document.createElement("img");
                // img.setAttribute("Sun", "im");
                img.src = obj.src.original;
                img.alt = 'image'

                // this.parentNode.replaceChild(img, svgTage);

                // cardNode.insertBefore(userDiv, cardBody);
                // cardNode.appendChild(userDiv)
                // svgTage.replaceWith(img);
                parentDiv.replaceChild(sp1, sp2);

            }
        })
        .catch(error => console.log('error', error));

}

window.onload = () => {
    APIcall();
}
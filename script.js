const generateButton = document.querySelector('.generate');

const memeImage = document.querySelector('.mm-img');
const memeCaption = document.querySelector('.meme-caption');

generateButton.addEventListener('click', ()=>{
    fetch('https://api.hyrousek.tk/useless/reddit?reddit=memes')
    .then((response) => response.json())
    .then((data) => 
    (
        console.log(data),
        memeImage.setAttribute('src', data.url),
        memeCaption.textContent = data.title
        
    )



  );
})


// memeImage.setAttribute('src', data.url),
//     memeCaption.textContent = data.title
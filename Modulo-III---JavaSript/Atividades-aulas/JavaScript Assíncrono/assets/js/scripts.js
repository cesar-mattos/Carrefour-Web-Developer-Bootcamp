const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
// link {"id":51,"url":"https://thatcopy.github.io/catAPI/imgs/jpg/e3c40e6.jpg","webpurl":"https://thatcopy.github.io/catAPI/imgs/webp/e3c40e6.webp","x":54.63,"y":47.77}

const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
   try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
    } catch(e) {
        console.log(e.message);
    }

};

const loadImg = async() => {
    catImg.src = await getCats();

}

catBtn.addEventListener('click', loadImg)

loadImg();
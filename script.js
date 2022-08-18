const simle = document.querySelector('#simple');
const speedy = document.querySelector('#speedy');
const easy = document.querySelector('#easy');

const questions = document.querySelectorAll('.questions')
const angle = document.querySelector('.angle')

const content = [
    {
        image: './images/illustrationfeaturestab1.svg',
        title: 'Bookmark ine one click',
        contentText: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complate control over how you manage your favourite sites.',
    },
    {
        image: './images/illustrationfeaturestab2.svg',
        title: 'Intelligent search',
        contentText: 'Our powerful search feature will help you find saved sites in no time all. No need to trawl through all of your bookmarks.',
    },
    {
        image: './images/illustrationfeaturestab3.svg',
        title: 'Share your bookmarks',
        contentText: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    }
]

simle.addEventListener('click', function () {

    showContent(0);
    simle.classList.remove('border-off')
    //simle.classList.add('active')
    speedy.classList.remove('active')
    easy.classList.remove('active')
})

speedy.addEventListener('click', function () {

    showContent(1);
    speedy.classList.add('active')
    easy.classList.remove('active')
    simle.classList.add('border-off')
})

easy.addEventListener('click', function () {

    showContent(2);
    easy.classList.add('active')
    speedy.classList.remove('active')
    simle.classList.add('border-off')
})

function showContent(index) {

    document.querySelector('#images').setAttribute('src', content[index].image);

    document.querySelector('#title').textContent = content[index].title;

    document.querySelector('#paragraph').innerHTML = content[index].contentText;
};

questions.forEach(function (item) {
    item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('reply-on');
        item.childNodes[3].classList.toggle('angle-off');
        item.childNodes[5].classList.toggle('angle-show');
    })
})
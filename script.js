const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'thumbnail': "url('./images/image 772.png')",
        'title': 'manipulate text background',
        'name': 'manipulate text background.mp4',
        'duration': '2:47',
    },
    {
        'id': 'a2',
        'thumbnail': "url('./images/image 772.png')",
        'title': 'build gauge with css',
        'name': 'build gauge with css.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a3',
        'thumbnail': "url('./images/image 772.png')",
        'title': '3D popup card',
        'name': '3D popup card.mp4',
        'duration': '24:49',
    },

    {
        'id': 'a4',
        'thumbnail': "url('./images/image 772.png')",
        'title': 'customize HTML5 form elements',
        'name': 'customize HTML5 form elements.mp4',
        'duration': '3:59',
    },
    {
        'id': 'a5',
        'thumbnail': "url('./images/image 772.png')",
        'title': 'custom select box',
        'name': 'custom select box.mp4',
        'duration': '4:25',
    },
    {
        'id': 'a6',
        'thumbnail': "url('./images/image 772.png')",
        'title': 'embed google map to contact form',
        'name': 'embed google map to contact form.mp4',
        'duration': '5:33',
    },
    {
        'id': 'a7',
        'thumbnail': "url('./images/image 772.png')",
        'title': 'password strength checker javascript web app',
        'name': 'password strength checker javascript web app.mp4',
        'duration': '0:29',
    },

    {
        'id': 'a8',
        'thumbnail': "url('./images/image 772.png')",
        'title': 'custom range slider',
        'name': 'custom range slider.mp4',
        'duration': '1:12',
    },
    {
        'id': 'a9',
        'thumbnail': "url(./ images / image 772.png)",
        'title': 'animated shopping cart',
        'name': 'animated shopping cart.mp4',
        'duration': '3:38',
    },

];

data.forEach((video) => {
    let video_element = `
        <div class="video" data-id="${video.id}">
            <img class="thumbnail" src="${video.thumbnail}" alt="${video.title} Thumbnail">
            <h3 class="title">${video.title}</h3>
            <p class="time">${video.duration}</p>
        </div>
    `;
    video_playlist.innerHTML += video_element;
});

let videos = document.querySelectorAll('.video');

videos.forEach(selected_video => {
    selected_video.onclick = () => {
        let match_video = data.find(video => video.id === selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const videosContainer = document.querySelector('.video-playlist .videos');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateThumbnailDisplay();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < data.length - 1) {
        currentIndex++;
        updateThumbnailDisplay();
    }
});

function updateThumbnailDisplay() {
    const translationValue = `-${currentIndex * 32}rem`; // Adjust the value as needed
    videosContainer.style.transform = `translateX(${translationValue})`;
}

// Initial thumbnail display
updateThumbnailDisplay();

function updateTime(t, id) {
    switch (id) {
    case 'one':
        document.getElementById('two').currentTime = t;
        document.getElementById('three').currentTime = t;
        break;
    case 'two':
        document.getElementById('one').currentTime = t;
        document.getElementById('three').currentTime = t;
        break;
    case 'three':
        document.getElementById('one').currentTime = t;
        document.getElementById('two').currentTime = t;
        break;
    }
}

function openVideo(id) {
    var videos = document.querySelectorAll('video'),
        video1 = document.getElementById('one'),
        video2 = document.getElementById('two'),
        video3 = document.getElementById('three');
    switch (id) {
    case 'button1':
        video1.style.display = 'block';
        video2.removeAttribute('ontimeupdate');
        video3.removeAttribute('ontimeupdate');
        video1.setAttribute('ontimeupdate', 'updateTime(this.currentTime, this.id);');
        video1.play();
        video2.pause();
        video3.pause();
        video2.style.display = 'none';
        video3.style.display = 'none';
        break;
    case 'button2':
        video2.style.display = 'block';
        video1.removeAttribute('ontimeupdate');
        video3.removeAttribute('ontimeupdate');
        video2.setAttribute('ontimeupdate', 'updateTime(this.currentTime, this.id);');
        video2.play();
        video1.pause();
        video3.pause();
        video1.style.display = 'none';
        video3.style.display = 'none';
        break;
    case 'button3':
        video3.style.display = 'block';
        video1.removeAttribute('ontimeupdate');
        video2.removeAttribute('ontimeupdate');
        video3.setAttribute('ontimeupdate', 'updateTime(this.currentTime, this.id);');
        video3.play();
        video1.pause();
        video2.pause();
        video1.style.display = 'none';
        video2.style.display = 'none';
        break;
    }
}
// tabs
let tabs = function () {
    let tabNav = document.querySelectorAll('.tabs__nav-item'),
        tabContent = document.querySelectorAll('.tabs__content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active')
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName)
    };

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
}

tabs();


//form 
function auth(evt, auth) {
    var i, tabcontent, tabs__btn;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tabs__btn = document.getElementsByClassName('tabs__btn');
    for (i = 0; i < tabs__btn.length; i++) {
        tabs__btn[i].className = tabs__btn[i].className.replace(' active', '');
    }
    document.getElementById(auth).style.display = 'block';
    evt.currentTarget.className += ' active';
}

document.getElementById('check').onclick = function () {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email == 'Andrew@ntn.com' && password == '12345') {
        document.location.href = './profile.html'
    } else if (email == 'Alex@ntn.com' && password == '77777') {
        document.location.href = './profile.html'
    } else if (email == 'lesha@ntn.com' && password == '11111') {
        document.location.href = './profile.html'
    } else {
        alert('Не верно введен email или пароль')
        document.location.href = 'index.html';
    }
}

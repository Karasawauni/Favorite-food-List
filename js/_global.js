document.addEventListener('DOMContentLoaded', function () {
    const homeBtn = document.querySelector('.icon-home');
    const addBtn = document.querySelector('.icon-add');
    const menuBtn = document.querySelector('.icon-menu');

    if (homeBtn) {
        homeBtn.addEventListener('click', function () {
            setTimeout(() => {
                window.location.href = 'home.html'; // ホーム画面へ
            }, 100); // 100ミリ秒（0.1秒）
        });
    }

    if (addBtn) {
        addBtn.addEventListener('click', function () {
            setTimeout(() => {
                window.location.href = 'add.html'; // 登録画面へ
            }, 100);
        });
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            setTimeout(() => {
                window.location.href = 'menu.html'; // 一覧画面へ
            }, 100);
        });
    }
});
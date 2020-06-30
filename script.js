window.addEventListener('DOMContentLoaded', () => {
// eslint-disable-next-line strict
  'use strict';

  const start = document.querySelector('.start'),
    reset = document.querySelector('.reset'),
    helicopter = document.querySelector('.helicopter');
  let countLeft = -helicopter.offsetLeft,
    countTop = helicopter.offsetTop,
    searchAnimate,
    animation = true;


  const search = () => {
    searchAnimate = requestAnimationFrame(search);
    countLeft += 2;
    countTop -= 1 / 20;
    if (countLeft >= document.documentElement.clientHeight * 2) {
      countLeft = -helicopter.offsetLeft;
      helicopter.style.width = 250 + 'px';
    }
    if (countLeft >= 0) {
      helicopter.style.transform = 'scaleX(-1)';
      helicopter.style.width = 300 + 'px';
      helicopter.style.left = helicopter.offsetLeft + 2 + 'px';
    } else {
      helicopter.style.transform = '';
      helicopter.style.left = helicopter.offsetLeft - 2 + 'px';
      helicopter.style.top = countTop  + 'px';
    }
  };
  //  запустить/остановить анимацию
  start.addEventListener('click', () => {
    if (animation) {
      searchAnimate = requestAnimationFrame(search);
      animation = false;
      start.textContent = 'Зависнуть';
    } else {
      cancelAnimationFrame(searchAnimate);
      animation = true;
      start.textContent = 'Продолжить поиск';
    }
  });
  // сбросить до начальных настроек
  reset.addEventListener('click', () => {
    cancelAnimationFrame(searchAnimate);
    helicopter.style.left = 100 + '%';
    helicopter.style.top = 30 + '%';
    helicopter.style.width = 350 + 'px';
    countLeft = -helicopter.offsetLeft;
    countTop = helicopter.offsetTop;
    animation = true;
    start.textContent = 'Начать поиск';
  });
});


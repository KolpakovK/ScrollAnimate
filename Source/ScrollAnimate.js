// Функция для определения, когда элемент находится в видимой области
function isInViewport(element, offset = 0) {
  const rect = element.getBoundingClientRect();
  return (rect.top + offset <= (window.innerHeight || document.documentElement.clientHeight));
}

function isAbleToReload(element){
  let result = false;
  let offset = (window.innerHeight || document.documentElement.clientHeight) / 2;
  if (element.hasAttribute('data-played') && !element.hasAttribute('data-play-once')){
    const rect = element.getBoundingClientRect();
    result = (rect.top - offset >= (window.innerHeight || document.documentElement.clientHeight));
  }
  return result;
}

// Функция для запуска анимации
function animateOnScroll() {
  const animatedSections = document.querySelectorAll('[data-animated-section]'); // Найти все элементы
  
  animatedSections.forEach(element => {
    let offset = +element.dataset.offset || 0;

    if (isInViewport(element,offset)) {
      let animatedElements = element.querySelectorAll('[data-animated-item]');

      animatedElements.forEach(item => {
        const animationType = item.dataset.animation || 'fadeIn'; // Получить тип анимации из data-атрибута или использовать значение по умолчанию 'fadeIn'
        const duration = item.dataset.duration || '1s'; // Получить время проигрывания анимации из data-атрибута или использовать значение по умолчанию '1s'
        const delay = item.dataset.delay || '0s'; // Получить задержку анимации из data-атрибута или использовать значение по умолчанию '0s'
        const easing = item.dataset.easing || 'ease'; // Получить easing режим из data-атрибута или использовать значение по умолчанию 'ease'

        const playOnce = element.hasAttribute('data-play-once');
        const hasPlayed = element.hasAttribute('data-played');

        if (!playOnce || !hasPlayed) {
          item.style.animation = `${animationType} ${duration} ${easing} ${delay} forwards`;
          element.setAttribute('data-played', 'true'); // Устанавливаем атрибут, указывающий, что анимация была воспроизведена
        }

      });
    }
    if (isAbleToReload(element)){
      element.removeAttribute('data-played'); // Если элемент вне области видимости, сбросить атрибут data-played
      element.querySelectorAll('[data-animated-item]').forEach(item => {item.style.animation = ""});
    }

  });
}


// Обработчик события прокрутки страницы
let isScrolling = false;

window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      animateOnScroll();
      isScrolling = false;
    });
    isScrolling = true;
  }
});

window.addEventListener('resize', animateOnScroll);

// Запуск анимации при загрузке страницы
document.addEventListener('DOMContentLoaded', animateOnScroll);
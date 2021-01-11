// Есть два подхода

// ========================= первый вариант ============================

// intersectionObserver c unobserve (один на все)

const imagesRef = document.querySelectorAll('.feed img');

const options = {
  rootMargin: '200px',
};

const io = new IntersectionObserver((entries, observer) => {
  // если бы в img не было srс и мы установили data атрибут
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.dataset.lazy;
      image.src = src;
      image.classList.add('appear');

      // говорим за каким элементом перестать наблюдать после того как мы уже их загрузили,
      // что бы при прокрутке вверх не вызывалась функция
      observer.unobserve(image);
    }
  });
}, options);

// на каждую картинку вешаем обзерв

imagesRef.forEach(image => {
  io.observe(image);
});

// ========================= второй вариант ============================
/* const imagesRef = document.querySelectorAll('.feed img');

const lazyLoad = target => {
  const options = {
    rootMargin: '200px',
  };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        const src = image.dataset.lazy;
        image.src = src;
        image.classList.add('appear');

        // говорим за каким элементом перестать наблюдать
        // что бы при прокрутке вверх не вызывалась функция
        observer.disconnect(image);
      }
    });
  }, options);
  io.observe(target);
};

imagesRef.forEach(image => lazyLoad(image)); */

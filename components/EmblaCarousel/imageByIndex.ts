// Инициализация массива с объектами изображений
const imageByIndex = [];

// Заполнение массива данными изображений
for (let i = 1; i <= 24; i++) {
  const img = `/images/grandis_slider/${i}.jpg`;
  const item = {
    id: i,
    src: img,
    alt: `grandis_img_${i}`,
  };
  imageByIndex.push(item);
}

// Функция для получения URL изображения по индексу
// const imageByIndex = (index: number): string => {
//   return grandisSlider[index % grandisSlider.length].src;
// };

export default imageByIndex;

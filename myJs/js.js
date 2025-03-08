const imgURL = "https://i.ibb.co/Q9yv5Jk/flappy-bird-set.png";
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")
// создаёт объект, представляющий HTML-элемент <img>
const img = new Image()
// атрибут который определяет URL внешнего исходного файла
img.src = imgURL
// константа для регулирования скорости анимации
const SPEED = 3.1





// -- Для птици --------------------------------------------
// ширина и высота птицы
const SIZE = [51, 36]
// ---------------------------------------------------------




// переменная, необходимая для расчёта
// новых координат на каждом кадре
let index = 0
// // функция для отрисовки кадра
const render = () => {
  index += 0.3
  // координата по оси Х фонового изображения
  const backgroudX = -((index * SPEED) % canvas.width)
// объект, который хотим получить из изображения-источника
  const bgSource = {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height
  }
  // объект, который хотим отобразить на Canvas
  const bgPartOneResult = {
    x: backgroudX + canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
  }
  // вторая часть фонового изображения, которая
  // идёт следом за первой
  const bgPartTwoResult = {
    x: backgroudX,
    y: 0,
    width: canvas.width,
    height: canvas.height,
  };
  
//  рисует изображение, содержимое другого элемента <canvas> или видео.
// Также он может нарисовать часть изображения
//  и/или увеличить/уменьшить его размер
  ctx.drawImage(
    img,

    bgSource.x,
    bgSource.y,
    bgSource.width,
    bgSource.height,

    bgPartOneResult.x,
    bgPartOneResult.y,
    bgPartOneResult.width,
    bgPartOneResult.height
  )
// используем вторую часть фонового изображения,
// чтобы достичь нужного нам эффекта анимации
  ctx.drawImage(
    img,

    bgSource.x,
    bgSource.y,
    bgSource.width,
    bgSource.height,

    bgPartTwoResult.x,
    bgPartTwoResult.y,
    bgPartTwoResult.width,
    bgPartTwoResult.height
  );


// -- Для птици --------------------------------------------
  // изображение птицы, которое копируем
  // из изображения-источника
  const birdSource = {
    x: 432,
//  округляет число до ближайшего меньшего целого числа
    y: Math.floor((index % 9) / 3) * SIZE[1],
    width: SIZE[0],
    height: SIZE[1],
  }
  // изображение птицы, которое копируем
  // из изображения-источника
  const birdResult = {
    x: canvas.width / 2 - SIZE[0] / 2,
    y: 400,
    width: SIZE[0],
    height: SIZE[1],
  };

  ctx.drawImage(
    img,

    birdSource.x,
    birdSource.y,
    birdSource.width,
    birdSource.height,

    birdResult.x,
    birdResult.y,
    birdResult.width,
    birdResult.height
  )
  // ---------------------------------------------------
  
  




// if(pillarSource != birdSource){
// -- Для столбов --------------------------------------------
  // изображение столбов, которое копируем
  // из изображения-источника
  const pillarSource = {
    x: 510,
    y: -180,
    width: canvas.width,
    height: canvas.height
  }
  // изображение птицы, которое копируем
  // из изображения-источника
  const pillarResult = {
    x: backgroudX + canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
  };

  ctx.drawImage(
    img,

    pillarSource.x,
    pillarSource.y,
    pillarSource.width,
    pillarSource.height,

    pillarResult.x,
    pillarResult.y,
    pillarResult.width,
    pillarResult.height
  )
  //-------------------------------------
// }
















  
  // после завершения расчётов для текущего кадра
  // сразу запускаем выполнение расчётов для следующего
  window.requestAnimationFrame(render)

}
// как только изображение будет загружено,
// начнётся отрисовка анимаций
img.onload = render
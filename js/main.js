$(document).ready(function () {
    var CurrentFloor = 2; //переменная, где хранится текущий этаж
    var floorPath = $(".home-image path"); //Каждый отдельный этаж в SVG
    var CounterUp = $(".counter-up"); /*кнопка увеличения этажа*/
    var CounterDown = $(".counter-down"); /*кнопка уменьшения этажа*/

    // функция при наведении мышки на этаж
    floorPath.on("mouseover", function () { 
      floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
      CurrentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
      $(".counter").text(CurrentFloor); //записываем значение этажа в счетчик справа
    });


    //отслеживаем клик по кнопке "вверх"
    CounterUp.on("click", function () {
    // проверяем значение этажа
      if(CurrentFloor < 18) {
           CurrentFloor++; //прибавляем один этаж
            usCurrentFloor = CurrentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}) 
            //форматируем переменную с этажом, чтобы было 01, а не 1
              $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
              floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
              $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем активный этаж
      }
    });
    CounterDown.on("click", function () {
      if(CurrentFloor > 2) {
           CurrentFloor--;
            usCurrentFloor = CurrentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false})
              $(".counter").text(usCurrentFloor);
              floorPath.removeClass("current-floor");
              $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
      }
    });
  });   
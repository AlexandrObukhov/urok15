/*
---1) делаем поле ввода даты
---2) рядом делаем кнопку
3) по клику на кнопке или в поле ввода создаем попап (всплывающее окно)
---    3.1) по клику вызываем функцию
	3.2) функция делает попап
4) в попапе делаем календарь
	4.1) устанавливаем дату сегодня
	4.2) определяем месяц
	4.3) определяем количество недель в месяце, начальную и конечную даты страницы
	4.4) создаем страницу таблицей
	4.5) добавляем строку дней недели
	4.6) делаем заголовок (месяц и год)
	4.7) делаем кнопки перехода
		4.7.1) на месяц назад и вперед - выполняем снова пункт 4
	4.8) вставляем готовый календарь в попап
	4.9) подключаем обработку событий
5) по выбору даты закрываем календарь и вставляем дату в поле ввода
	5.1) ловим событие на дне
	5.2) вставляем дату в поле ввода
	5.3) уничтожаем попап с календарем.
*/
$(function () {
	$('input, button').click(makePopup);
});
function makePopup() {
	alert('OGOGO!');
	// получить и сохранить сегодняшнюю дату
	// создать верстку попапа
	// вставить верстку в страницу
	// подключить события
};
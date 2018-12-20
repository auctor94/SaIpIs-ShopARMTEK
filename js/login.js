﻿var loginBtn = document.getElementById('login-btn'); /*вкладка Вход*/
var signupBtn = document.getElementById('signup-btn');/*вкладка Регистрация*/
var loginTab = document.getElementById('login-tab');/*блок окна Вход*/
var signupTab = document.getElementById('signup-tab');/*блок окна регистрация*/

loginBtn.addEventListener('click', function() { // если нажали на вкладку Вход
    /*classList returns a live DOMTockenList collection of the class attributes of the element*/
    loginBtn.classList.add('selected'); //ДОБАВЛЯЕТ CSS свойство selected, которое меняет цвет кнопки
    signupBtn.classList.remove('selected'); //удаляет анологичное свойство с кнопки Регистрация
    loginTab.classList.add('enabled'); //блоку с полями ввода логина и пароля добавляем свойство {оно позволяет нам занимать ровно столько места, сколько необходимо}
    signupTab.classList.remove('enabled');//удаляет анологичное свойство с кнопки Регистрация
});
signupBtn.addEventListener('click', function() {// если нажали на вкладку Регистрация
    loginBtn.classList.remove('selected');//удаляет анологичное свойство с кнопки Вход
    signupBtn.classList.add('selected'); //ДОБАВЛЯЕТ CSS свойство selected, которое меняет цвет кнопки
    loginTab.classList.remove('enabled');//удаляет анологичное свойство с кнопки Вход
    signupTab.classList.add('enabled');//блоку с полями ввода логина и пароля добавляем свойство {оно позволяет нам занимать ровно столько места, сколько необходимо}
});

//при фокусе на input'e, находящемся в поле с id login-tab
//цвет его фона изменяет цвет
$("#login-tab input").focus(function(){
	$(this).css("background", "AliceBlue");
});

//при потере фокуса элементом input, находящимся внутри поля с id login-tab
//цвет возвращается к изначальному
$("#login-tab input").focusout(function(){
	$(this).css("background", "white");
});

var error = document.getElementById('error');
var errorLabel = document.getElementById('error-label');
var errorClose = document.getElementById('error-close');
errorClose.addEventListener('click', function() {
	error.style.display = "none";
});

//функция для отображения сообщения об ошибки (ошшибка автоматически исчезнет через 10 секунд)
//в функцию передается: message - сообщение, которое нужно вывести
function showError(message){
	console.log(message);
	error.style.display = "initial";
	errorLabel.innerHTML = message;
	setTimeout(function() {
		error.style.display = "none";
	}, 10000);
}
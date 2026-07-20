const lang = {

ru:{
welcome:"Добро пожаловать!",
burger:"Бургеры",
pizza:"Пицца",
meat:"Горячие блюда",
salad:"Салаты",
dessert:"Десерты",
drink:"Напитки",
pdf:"📄 Открыть полное меню (PDF)"
},

kz:{
welcome:"Қош келдіңіз!",
burger:"Бургерлер",
pizza:"Пицца",
meat:"Ыстық тағамдар",
salad:"Салаттар",
dessert:"Десерттер",
drink:"Сусындар",
pdf:"📄 Толық мәзірді ашу (PDF)"
},

en:{
welcome:"Welcome!",
burger:"Burgers",
pizza:"Pizza",
meat:"Main Dishes",
salad:"Salads",
dessert:"Desserts",
drink:"Drinks",
pdf:"📄 Open Full Menu (PDF)"
}

}

function changeLanguage(language){

document.getElementById("welcome").innerHTML=lang[language].welcome;
document.getElementById("burger").innerHTML=lang[language].burger;
document.getElementById("pizza").innerHTML=lang[language].pizza;
document.getElementById("meat").innerHTML=lang[language].meat;
document.getElementById("salad").innerHTML=lang[language].salad;
document.getElementById("dessert").innerHTML=lang[language].dessert;
document.getElementById("drink").innerHTML=lang[language].drink;
document.getElementById("pdf").innerHTML=lang[language].pdf;

}
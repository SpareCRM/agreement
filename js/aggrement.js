import { createClientsHeader } from "./createHeader.js";
import { createClientsSection } from "./createClientsSection.js";
import {agr_div} from "./test.js";
const test = document.createElement('div');
const main_div = document.createElement('div');
test.classList.add('test_div');
const table = document.createElement('table');
const tr = document.createElement('tr');
const tr2 = document.createElement('tr');
const tr3 = document.createElement('tr');
const tr4 = document.createElement('tr');
const tr5 = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');
const td4 = document.createElement('td');
const td5 = document.createElement('td');
const td6 = document.createElement('td');
const td7 = document.createElement('td');
const td8 = document.createElement('td');
const td9 = document.createElement('td');
const td10 = document.createElement('td');

const settings_div = document.createElement('div');
const set_input = document.createElement('input');
const input_span = document.createElement('span');
const btn = document.createElement('input');
const checkbox_span = document.createElement('span');
btn.type = 'checkbox';

checkbox_span.textContent = "Убрать/добавить 1.1.2";
btn.classList.add('check_btn');
checkbox_span.classList.add('check_span_btn');

input_span.textContent = "Введите Ваше  Имя и фамилию"
set_input.placeholder = "Введите Ваше Имя и фамилию";
settings_div.classList.add('settings_div');
main_div.classList.add('main_div');
set_input.classList.add('set_input');
settings_div.append(input_span, set_input, checkbox_span, btn);
main_div.append(test,settings_div );

td1.classList.add('test_td');
td2.classList.add('test_td');
td3.classList.add('test_td');
td4.classList.add('test_td');
td5.classList.add('test_td');
td6.classList.add('test_td');
td7.classList.add('test_td');
td8.classList.add('test_td');
td9.classList.add('test_td');
td10.classList.add('test_td');
tr2.append(td3, td4)
tr3.append(td5, td6)
tr4.append(td7, td8)
tr5.append(td9, td10)
table.append(tr,tr2, tr3, tr4, tr5);
tr.append(td1, td2);
test.append(table);
td1.textContent = "Пункт";
td2.textContent = "Текст договора";
td3.textContent = "1.1";
td4.textContent = `Данный договор заключается для, ВВЕДИТЕ ВАШЕ ИМЯ И ФАМИЛИЮ. Термін оренди: максимальний і мінімальний Терміни оренди зазвичай зазначаються в договорі. Якщо спеціальної вказівки немає, за нормами Цивільного кодексу договір вважається укладеним на 5 років. `;
td5.textContent = "1.1.2";
td6.textContent = "Термін оренди: максимальний і мінімальний Терміни оренди зазвичай зазначаються в договорі. Якщо спеціальної вказівки немає, за нормами Цивільного кодексу договір вважається укладеним на 5 років. Якщо ж мова йде про короткострокову оренду (до 1 року), то деякі положення Глави 59 не застосовуються до цього документа. Мінімально можна зняти квартиру на 1 годину, максимально – за домовленістю сторін.";
td7.textContent = "1.2";
td8.textContent = "Термін оренди: максимальний і мінімальний Терміни оренди зазвичай зазначаються в договорі. Якщо спеціальної вказівки немає, за нормами Цивільного кодексу договір вважається укладеним на 5 років. Якщо ж мова йде про короткострокову оренду (до 1 року), то деякі положення Глави 59 не застосовуються до цього документа. Мінімально можна зняти квартиру на 1 годину, максимально – за домовленістю сторін.";
td9.textContent = "1.2";
td10.textContent = "Термін оренди: максимальний і мінімальний Терміни оренди зазвичай зазначаються в договорі. Якщо спеціальної вказівки немає, за нормами Цивільного кодексу договір вважається укладеним на 5 років. Якщо ж мова йде про короткострокову оренду (до 1 року), то деякі положення Глави 59 не застосовуються до цього документа. Мінімально можна зняти квартиру на 1 годину, максимально – за домовленістю сторін.";

set_input.addEventListener('input', (e) =>{
    td4.textContent = "Данный договор заключается для " + set_input.value + ". Термін оренди: максимальний і мінімальний Терміни оренди зазвичай зазначаються в договорі. Якщо спеціальної вказівки немає, за нормами Цивільного кодексу договір вважається укладеним на 5 років."
});


btn.addEventListener('click', (e) =>{
    //td4.textContent = btn.value;
    if (btn.value == "on") {
        tr3.remove();
        btn.value = "off";
    } else {
       tr2.remove();
       tr4.remove();
       tr5.remove();
       table.append(tr2, tr3, tr4, tr5);
       btn.value = "on";
    }
});




const createApp = async () => {
    
    


    
    const header = createClientsHeader();
    const div1 = agr_div();
    document.body.append(header, main_div );
    

   
    
}

createApp();
**Основные технологии/библиотеки под использование на UI.**

* `webpack` - фреймворк для сборки UI
* `reactjs` - фреймворк отрисовки UI
* `react-router` - реализация роутинга
* `redux` - реализация хранилища состояния приложения
* `Material-UI` - фреймворк графических коммпонентов
* `jest` - для тестирования redux 

Концепция построения приложения заключается в следующем - есть главный модуль, который отвечает за понятие самого приложения (меню, модуль пользовательской сессии + state, возможно модуль авторизации, модуль аутентификации) и подключаемые модули, которые содержат в себе "мясо" - страницы + роутинг + пермишены, т.е. попытка реализовать портальныю модель. Основная цель - максимально развязать компоненты между собой, чтобы изменение в одном не влияло на изменение в другом и как следствие поставка только конкретных модулей + возможность повторного использования + отказ от необходимости вносить изменения в ядровой функционал при подключении нового модуля.


**Как работать с шаблоном**
Разработано 2 шаблона, шаблон приложения (`app-template`) и шаблон страницы(пункта меню, `module-template`). 

*В текущий момент шаблон ещё не приобрел окончательного вида*

Для начала работы необходимо сделать fork с шаблона-приложения, переименовать в package.json, и откорректировать контерйнеры `app/App.js`, (базовая страница), `home/Home.js` (домашняя страница), `misc/NotFound.js` (страница для ошибки роутинга)

Базовый команды: `npm install` - происнсталить все зависимости, `npm start` - запустить приложение на 3000 порту

Модули(страницы) подключаются к приложению в `package.json` и дополнительно в `utils/modules.js`. Там прогружается необходимая информация для роутинга и последующего использования в redux. Согласно контракту необходимо чтобы в модуле на верхем уровне находился файл `index.js`, который по умолчанию экспортировал  структуру вида
```
    {
        modulename:'', //наименование модуля
        menulabel:'', // label для отображения в меню
        permition:'', // permition для проверки на доступность пользователю
        routes:[{   //список роутов
            isStart:false, // во всём списке должен быть только один элемент с isStart = true. На текущий момент не реализовано иерархическое меню
            location:'', // относительный линк
            component:'' //наименование компонента
        }],
        reducers:[] //набор редюсеров для поключения к redux
    }
```
Возможно стоит переделать данную структуру в рекурсивную, для возможности построения вложенного меню. В текущий момент один модуль поставляет один пункт меню в главный SlideBar

для локальной разработки для подключения модуля к приложению необходимо использовать `npm link`:
```
    cd module-template
    npm link
    cd ../app-template
    npm link module-template
```
*Что необходимо реализовать в шаблоне на текущий момент*

* проработать механизм авторизации/аутентификации
* проработать структуру redux store 
* проработать кросмодульное взаимоедйствие 
* доработать реализацию меню/шапку приложения



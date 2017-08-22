**Шаблон модуля приложения**

*Структура приложения*

- actions - место жизни actions в понимании redux
- components - место жизни pure components в понимании react
- containers - место жизни container в понимании react (замаунтиные компоненты с логикой)
- reducer - место жизни reducer в понимании redux
- index.js - файл экпорта + утильные функции.
    Суть - по дефолту должен экспортировать конфиг вида 
    ```config = {
        modulename: 'module-template', //название модуля и базовый путь роутинга
        menulabel: 'module-template-label', //название пункта меню
        permition: 'NONE', // permition, которыми должен обладать пользователь для доступа к данному пункту меню
        routes: [ //перечисления ссылок на компоненты
            {
                location: '/', //куда будет маунтиться 
                component: MountBasePage, //компонент
                isStart: true //кто будет базовым компонентом при клике на пункт меню
            }
        ],
        reducers: { //список редюсеров через запятую
            baseAction
        } 
    }```

    *Добавление новой страницы*
    - добавить новый элемент в components.
    - добавить его логику в новый container 
    - добавить элемент в config/routes в файле index.js

    *Добавление нового редюсера*
    - добавить редюсер в reducers
    - добавить элемент в config/reducers в файле index.js
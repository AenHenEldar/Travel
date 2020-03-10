$(document).ready(function () {
    let world = ['Европа', 'Азия', 'Африка', 'Северная Америка', 'Южная Америка', 'Австралия ', 'Антарктида', 'Афганистан', 'Албания', 'Алжир', 'Андорра', 'Ангола', 'Антигуа и Барбуда', 'Аргентина', 'Армения', 'Австралия', 'Австрия', 'Азербайджан', 'Багамские острова', 'Бахрейн', 'Бангладеш', 'Барбадос', 'Беларусь', 'Бельгия', 'Белиз', 'Бенин', 'Бутан', 'Боливия', 'Босния и Герцеговина', 'Ботсвана', 'Бразилия', 'Бруней', 'Болгария', 'Буркина Фасо', 'Бурунди', 'Кабо Верде', 'Камбоджа', 'Камерун', 'Канада', 'Центральноафриканская Республика', 'Чад', 'Чили', 'Китай', 'Колумбия', 'Коморские острова', 'Конго, Демократическая Республика', 'Конго, Республика Конго', 'Коста Рика', 'Кот-д\'Ивуар', 'Хорватия', 'Куба', 'Кипр', 'Чешская Республика', 'Дания', 'Джибути', 'Доминика', 'Доминиканская Республика', 'Восточный Тимор (Тимор-Лешти)', 'Эквадор', 'Египет', 'Сальвадор', 'Экваториальная Гвинея', 'Эритрея', 'Эстония', 'Свазиленд', 'Эфиопия', 'Фиджи', 'Финляндия', 'Франция', 'Габон', 'Гамбия', 'Грузия', 'Германия', 'Гана', 'Греция', 'Гренада', 'Гватемала', 'Гвинея', 'Гвинея Бисау', 'Гайана', 'Гаити', 'Гондурас', 'Венгрия', 'Исландия', 'Индия', 'Индонезия', 'Иран', 'Ирак', 'Ирландия', 'Израиль', 'Италия', 'Ямайка', 'Япония', 'Иордания', 'Казахстан', 'Кения', 'Кирибати', 'Корея, Северная', 'Южная Корея', 'Косово', 'Кувейт', 'Кыргызстан', 'Лаос', 'Латвия', 'Ливан', 'Лесото', 'Либерия', 'Ливия', 'Лихтенштейн', 'Литва', 'Люксембург', 'Мадагаскар', 'Малави', 'Малайзия', 'Мальдивы', 'Мали', 'Мальта', 'Маршалловы острова', 'Мавритания', 'Маврикий', 'Мексика', 'Микронезия, Федеративные Штаты', 'Молдова', 'Монако', 'Монголия', 'Черногория', 'Марокко', 'Мозамбик', 'Мьянма (Бирма)', 'Намибия', 'Науру', 'Непал', 'Нидерланды', 'Новая Зеландия', 'Никарагуа', 'Нигер', 'Нигерия', 'Северная Македония', 'Норвегия', 'Оман', 'Пакистан', 'Палау', 'Панама', 'Папуа новая Гвинея', 'Парагвай', 'Перу', 'Филиппины', 'Польша', 'Португалия', 'Катар', 'Румыния', 'Россия', 'Руанда', 'Сент-Китс и Невис', 'Сент-Люсия', 'Сент-Винсент и Гренадины', 'Самоа', 'Сан Марино', 'Сан-Томе и Принсипи', 'Саудовская Аравия', 'Сенегал', 'Сербия', 'Сейшельские острова', 'Сьерра Леоне', 'Сингапур', 'Словакия', 'Словения', 'Соломоновы острова', 'Сомали', 'Южная Африка', 'Испания', 'ШриЛанка', 'Судан', 'Судан, Южный', 'Суринам', 'Швеция', 'Швейцария', 'Сирия', 'Тайвань', 'Таджикистан', 'Танзания', 'Таиланд', 'Того', 'Тонга', 'Тринидад и Тобаго', 'Тунис', 'Индейка', 'Туркменистан', 'Тувалу', 'Уганда', 'Украина', 'объединенные арабские Эмираты', 'Объединенное Королевство', 'Соединенные Штаты', 'Уругвай', 'Узбекистан', 'Вануату', 'Ватикан', 'Венесуэла', 'Вьетнам', 'Йемен', 'Замбия', 'Зимбабве', 'Europe', 'Asia', 'Africa', 'North America', 'South America', 'Australia', 'Antarctica', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cape Verde', 'Cambodia', 'Cameroon', 'Canada', 'central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic', 'Congo, Republic Of The Congo', 'costa rica', 'Ivory coast', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor-Leste)', 'Ecuador', 'Egypt', 'Salvador', 'equatorial Guinea', 'Eritrea', 'Estonia', 'Swaziland', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'guinea bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Irish', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'South Korea', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvian', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia, Federated States Of', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'new Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Northern Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'papua new guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'san marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'sierra leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Sudan, South', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'uk', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];




    $('.main__container-elem, .main__confirmation, .main__flex-elem').click(function () {
        $(this).toggleClass('active');
    });

    $('.main__flex-elem .button').click(function () {
        let namePattern = new RegExp("[A-Za-zА-Яа-яЁё]{1,33}"),
            phonePattern = new RegExp("[0-9]{10}"),
            whenPattern = new RegExp("(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))");
        $('.main-field, .label').addClass('active');
        if ($('#where').val()) {
            for (let i = 0; i < world.length; i++) {
                if (world[i] == $('#where').val()) {
                    $('#where, .label[for=where]').removeClass('active');
                }
            }
        }
        if ($('#name').val()) {
            if (namePattern.test($('#name').val())) {
                $('#name, .label[for=name]').removeClass('active');
            }
        }
        if ($('#phone').val()) {
            if (phonePattern.test($('#phone').val())) {
                $('#phone, .label[for=phone]').removeClass('active');
            }
        }
        if ($('#when').val()) {
            if (whenPattern.test($('#when').val())) {
                $('#when, .label[for=when]').removeClass('active');
            }
        }
    });
    
})
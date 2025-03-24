import { Typography } from "@app/shared/ui";
import { Table } from "./ui";
import type { ServiceTree } from "../../types";

export const SERVICES_TREE: ServiceTree[] = [
  {
    title: "Меры социальной поддержки",
    image: require("./assets/images/social-support.jpg"),
    list: ["Льготы на проезд", "Компенсации за ЖКУ, газ и топливо"],
    children: [
      {
        title: "Компенсации за ЖКУ",
        content: [
          {
            title: "Ежемесячная денежная компенсация за ЖКУ",
            render: () => (
              <Typography variant="p">
                Для получения компенсации гражданин представляет в Казенное учреждение Республики Алтай «Управление
                социальной поддержки населения Майминского района» либо многофункциональный центр предоставления
                государственных и муниципальных услуг следующие документы:{"\n"}
                {"\n"}а)заявление о предоставлении компенсации;{"\n"}б)документ, удостоверяющий личность гражданина;
                {"\n"}в)документы, удостоверяющие личность детей-инвалидов (ребенка-инвалида), достигших 14 лет, либо
                свидетельства о рождении детей-инвалидов (ребенка-инвалида), не достигших 14 лет;{"\n"}г)справка МСЭ;
                {"\n"}д)реквизиты.{"\n"}
                {"\n"}Контактный номер телефона:{"\n"}+7 (38822) 2-05-06
              </Typography>
            ),
          },
        ],
      },
      {
        title: "Льготы на проезд",
        content: [
          {
            title: "Льготный проезд на автомобильном транспорте общего пользования (кроме такси)",
            render: () => (
              <Typography variant="p">
                Для оформления льготного проезда гражданин обращается в Казенное учреждение Республики Алтай «Управление
                социальной поддержки населения Майминского района» и представляет следующие документы:{"\n"}
                {"\n"}а)заявление на оформление льготного проезда;{"\n"}б)документ, удостоверяющий личность гражданина;
                {"\n"}в)документы, удостоверяющие личность детей-инвалидов (ребенка-инвалида), достигших 14 лет, либо
                свидетельства о рождении детей-инвалидов (ребенка-инвалида), не достигших 14 лет;{"\n"}г)справка МСЭ;
                {"\n"}
                {"\n"}Данной мерой социальной поддержки можно воспользоваться только в случае, если по другой льготной
                категории (дети из многодетных семей, дети участников СВО, дети-сироты и дети, оставшиеся без попечения
                родителей) не оформлена данная мера социальной поддержки.{"\n"}
                {"\n"} Контактный номер телефона: {"\n"}+7 (38822) 2-05-06
              </Typography>
            ),
          },
        ],
      },
      {
        title: "Компенсации за газ и топливо",
        content: [
          {
            title: "Компенсация за оплату газа либо твердого топлива",
            render: () => (
              <Typography variant="p">
                Гражданам, проживающим в частном секторе, выплачивается ежегодная либо ежемесячная денежная компенсация
                за твердое топливо либо ежемесячная компенсация расходов по оплате природного газа.{"\n"}
                {"\n"}Для получения компенсации гражданин обращается в Казенное учреждение Республики Алтай «Управление
                социальной поддержки населения Майминского района» либо в многофункциональный центр предоставления
                государственных и муниципальных услуг и представляет следующие документы:{"\n"}
                {"\n"}а)заявление о предоставлении компенсации;{"\n"}б)документ, удостоверяющий личность гражданина;
                {"\n"}в)документы, удостоверяющие личность детей-инвалидов (ребенка-инвалида), достигших 14 лет, либо
                свидетельства о рождении детей-инвалидов (ребенка-инвалида), не достигших 14 лет;{"\n"}г)справка МСЭ;
                {"\n"}д)реквизиты.{"\n"}
                {"\n"}Контактный номер телефона:{"\n"}+7 (38822) 2-05-06
              </Typography>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Площадка ”Радуга”",
    image: require("./assets/images/rainbow-playground.jpg"),
    list: ["Мы вместе", "Самоделкин", "Узнаём мир вместе"],
    children: [
      {
        title: "Мы вместе",
        content: [
          {
            title: "Мы вместе",
            render: () => (
              <Typography variant="p">
                Родительский клуб для совместного решения вопросов, оказания психологической помощи (тренинги,
                индивидуальные и групповые консультации, правовые лектории для родителей детей-инвалидов).{"\n"}
                {"\n"}Контактный номер телефона:{"\n"}+ 7 903 919 28 09
              </Typography>
            ),
          },
          {
            title: "График работы на 2024г.",
            render: () => (
              <Table
                timelines={[
                  ["18.10.2024", "14:00-15:00"],
                  ["25.10.2024", "14:00-15:00"],
                  ["08.11.2024", "14:00-15:00"],
                  ["22.11.2024", "14:00-15:00"],
                ]}
              />
            ),
          },
        ],
      },
      {
        title: "Самоделкин",
        content: [
          {
            title: "Самоделкин",
            render: () => (
              <Typography variant="p">
                Организация досуга и творческого развития детей. Проведение мастер-классов (поделки из соленого теста,
                создание новогодних украшений, мастер-класс по изготовлению цветной соли и оформлению ее в баночках,
                мастер-класс изготовление пасхального венка) занятий по творчеству (рисование, лепка, аппликация)
                организация выставки собственных работ. Проведение Новогоднего праздника с чаепитием.{"\n"}
                {"\n"}Контактный номер телефона:{"\n"}+ 7 (38844) 23-4-02
              </Typography>
            ),
          },
          {
            title: "График работы",
            render: () => (
              <Table
                timelines={[
                  ["18.10.2024", "14:00-15:00"],
                  ["25.10.2024", "14:00-15:00"],
                  ["08.11.2024", "14:00-15:00"],
                  ["22.11.2024", "14:00-15:00"],
                ]}
              />
            ),
          },
        ],
      },
      {
        title: "Узнаем мир вместе",
        content: [
          {
            title: "Узнаем мир вместе",
            render: () => (
              <Typography variant="p">
                Клуб, направленный на включение ребенка в активное взаимодействие с социумом.{"\n"}
                {"\n"}Предполагаемые мероприятия:{"\n"}1.Посещение бассейна{"\n"}2.Экскурсия на пасеку «Медом в ухо»
                {"\n"}3.Экскурсия «Палеопарк»{"\n"}4.Катание на Хаски{"\n"}5.Посещение музея Камня{"\n"}6.Посещение
                игровой ВК Манжерок «Лес чудес»{"\n"}7.Посещение конно-спортивной школы с катанием на пони{"\n"}8.Поход
                с родителями на природу{"\n"}
                {"\n"}Контактный номер телефона:{"\n"}+ 7 (38844) 23-4-02
              </Typography>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Пункт проката",
    image: require("./assets/images/rental-point.jpg"),
    list: ["Безвозмездная выдача технических средств реабилитации"],
    content: [
      {
        title: "Пункт проката",
        render: () => (
          <Typography variant="p">
            Работа Пункта проката направлена на оказание помощи семьям в создании благоприятных условий для воспитания
            детей. Возможность взять во временное пользование тренажеры для физического развития или детские развивающие
            принадлежности позволят семьям сэкономить семейный бюджет, при этом воспользоваться необходимыми предметами,
            удовлетворить потребность в развивающем оборудовании, снять социальную напряженность. У детей будет
            возможность пользоваться различными тренажерами и развивающими играми для формирования определенных навыков,
            развития познавательных процессов, формирования представлений об окружающем мире.{"\n"}
            {"\n"}Выдача ТСР будет осуществляться безвозмездно на основании личного заявления клиента, путем заключения
            Договора проката ТСР с организацией.{"\n"}
            {"\n"}Перечень документов{"\n"}а) документ, удостоверяющий личность гражданина;{"\n"}б) документы,
            удостоверяющие личность детей-инвалидов (ребенка-инвалида), достигших 14 лет, либо свидетельства о рождении
            детей-инвалидов (ребенка-инвалида), не достигших 14 лет;{"\n"}в) справка МСЭ.{"\n"}
            {"\n"}Перечень реабилитационного оборудования в пункте проката:{"\n"}1.Коврик со следочками из 3 частей;
            {"\n"}2.Ходунки-ролаторы Я могу;{"\n"}3.Опоры-ходунки для детей 5-13 лет;{"\n"}4.Опоры-ходунки для детей
            7-14 лет;{"\n"}5.Тутор на лучезапястный сустав для детей;{"\n"}6.Яйцо Кислинг;{"\n"}7.Стульчики для
            кормления;{"\n"}8.Балансировочный диск массажный, двусторонний;{"\n"}9.Держатель для предметов на присосках;
            {"\n"}10.Тренажер для голеностопа;{"\n"}11.Ходунки детские с игровой панелью музыкальные;{"\n"}12.Тренажер
            детский «Бегущий по волнам»;{"\n"}13.Коляска прогулочная;{"\n"}14.Тренажер для разработки рук «Сила кисти»;
            {"\n"}15.Детские ходули лапоходы «Великан»;{"\n"}16.Кресло-коляская инвалидная детская;{"\n"}17.Массажные
            следочки с шипами;{"\n"}18.Массажные ладошки с шипами.{"\n"}
            {"\n"}Перечень реабилитационного оборудования в пункте проката:{"\n"}1.Пирамидка;{"\n"}2.Настольная игра
            «Звуковая память»;{"\n"}3.Игра на липучках «Мама и малыш»;{"\n"}4.Рамка – вкладыш со шнуровкой;{"\n"}
            5.Рамка-вкладыш с геометрическими фигурами;{"\n"}6.Пирамидка ведерки;{"\n"}7.Деревянный тактильный куб
            «Парочка»;{"\n"}8.Лабиринт магнитный;{"\n"}9.Развивающие линейки;{"\n"}10.Игра «Сложи палочки»;{"\n"}
            11.Вкладыши-подбери картинку;{"\n"}12.Настольная игра стучалка с молоточком;{"\n"}13.Игра на липучках
            «Фрукты овощи»;{"\n"}14.Пазлы деревянные двойные «Животные»;{"\n"}15.Игра «Повтори за мной»;{"\n"}16.Доска
            для рисования стилусом.{"\n"}
            {"\n"}Контактный номер телефона:{"\n"}+ 7 (38844) 23-4-02
          </Typography>
        ),
      },
    ],
  },
  {
    title: "Социальные услуги",
    image: require("./assets/images/social-services.jpg"),
    list: ["Реабилитация детей", "Услуги психолога"],
    children: [
      {
        title: "Реабилитация детей",
        content: [
          {
            title: "Реабилитация детей-инвалидов и детей с ограниченными возможностями",
            render: () => (
              <Typography variant="p">
                Реабилитация детей-инвалидов – система и процесс полного или частичного восстановления способностей
                детей-инвалидов к бытовой, общественной, профессиональной и иной деятельности.{"\n"}
                {"\n"}Реабилитация направлена на устранение или возможно более полную компенсацию ограничений
                жизнедеятельности, вызванных нарушением здоровья со стойким расстройством функций организма. Она
                проводится в целях социальной адаптации инвалида, достижения им материальной независимости и интеграции
                в общество.{"\n"}
                {"\n"}Перечень документов необходимых для приёма детей на полустационарное, стационарное, дневное
                обслуживание в «Республиканский реабилитационный центр для детей и подростков с ограниченными
                возможностями»:{"\n"}
                {"\n"}1.Заявление родителя (законного представителя);{"\n"}2.Договор и ИППСУ, разработанные КУ РА «УСПН
                Майминского района» с указанием социального статуса;{"\n"}3.Паспорт родителя (законного представителя);
                {"\n"}4.Свидетельство о рождении ребёнка, либо паспорт, достигшим 14-летнего возраста;{"\n"}5.СНИЛС
                ребёнка и родителя;{"\n"}6. Страховой медицинский полис (копия);{"\n"}7.Амбулаторная карта (форма №025/у
                или история развития ребёнка(форма №112/у);{"\n"}8.Справка бюро МСЭ (копия) при наличии инвалидности у
                ребёнка;{"\n"}9.ИПР,разработанной МСЭ(копия);{"\n"}10.Результаты анализов:{"\n"}- общий анализ крови
                {"\n"}- общий анализ мочи{"\n"}- кал на яйца глистов до 1 месяца{"\n"}
                {"\n"}11.Справка «Кожно-венерологический диспансер» (для стационара и дневного отделения);{"\n"}
                12.Справка о контактах с больным за последние 3 дня.{"\n"}
                {"\n"}Контактный номер телефона:{"\n"}+ 7 (38844) 23-4-02
              </Typography>
            ),
          },
        ],
      },
      {
        title: "Услуги психолога",
        content: [
          {
            title: "Услуги психолога",
            render: () => (
              <Typography variant="p">
                Как хочется каждому родителю, чтобы проблемы обошли его ребенка стороной! На пути взросления ребенок
                сталкивается с неизбежным возрастными кризисами, и не всегда родителям удается своевременно оказать ему
                необходимую помощь.{"\n"}
                {"\n"}Общаясь с ребенком, наш психолог может понять, в чем причина поведенческих нарушений,
                эмоционально-личностных проблем, провести коррекционные и развивающие занятия, дать необходимы
                рекомендации.{"\n"}
                {"\n"}Перечень документов для получения услуг психолога:{"\n"}1.Заявление о предоставлении услуг;{"\n"}
                2.Справка МСЭ;{"\n"}3.ИПР, разработанной МСЭ.{"\n"}
                {"\n"}Контактный номер телефона:{"\n"} + 7 903 919 28 09{"\n"}
                {"\n"}
              </Typography>
            ),
          },
        ],
      },
    ],
  },
];

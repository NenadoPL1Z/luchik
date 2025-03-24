import { View } from "react-native";
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
            render: () => <View />,
          },
        ],
      },
      {
        title: "Льготы на проезд",
        content: [
          {
            title: "Льготный проезд на автомобильном транспорте общего пользования (кроме такси)",
            render: () => <View />,
          },
        ],
      },
      {
        title: "Компенсации за газ и топливо",
        content: [
          {
            title: "Компенсация за оплату газа либо твердого топлива",
            render: () => <View />,
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
        content: [],
      },
      {
        title: "Самоделкин",
        content: [],
      },
      {
        title: "Узнаем мир вместе",
        content: [],
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
        render: () => <View />,
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
            render: () => <View />,
          },
        ],
      },
      {
        title: "Услуги психолога",
        content: [
          {
            title: "Услуги психолога",
            render: () => <View />,
          },
        ],
      },
    ],
  },
];

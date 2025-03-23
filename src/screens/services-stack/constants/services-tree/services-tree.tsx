export const SERVICES_TREE = {
  social_support: {
    title: "Меры социальной поддержки",
    image: require("./assets/images/social_support.png"),
    list: ["Льготы на проезд", "Компенсации за ЖКУ, газ и топливо"],
    children: [
      {
        title: "Компенсации за ЖКУ",
        content: [
          {
            title: "Ежемесячная денежная компенсация за ЖКУ",
            render: () => undefined,
          },
        ],
      },
      {
        title: "Льготы на проезд",
        content: [
          {
            title: "Льготный проезд на автомобильном транспорте общего пользования (кроме такси)",
            render: () => undefined,
          },
        ],
      },
      {
        title: "Компенсации за газ и топливо",
        content: [
          {
            title: "Компенсация за оплату газа либо твердого топлива",
            render: () => undefined,
          },
        ],
      },
    ],
  },
  // rainbow_playground: {},
  // rental_point: {},
  // social_services: {},
};

import { View } from "react-native";
import type { Tree } from "../../types";

export const SERVICES_TREE: Record<string, Tree> = {
  social_support: {
    title: "Меры социальной поддержки",
    image: "./assets/images/social_support.png",
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
  // rainbow_playground: {},
  // rental_point: {},
  // social_services: {},
};

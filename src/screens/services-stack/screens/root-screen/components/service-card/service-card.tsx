import { Image, TouchableOpacity, View } from "react-native";
import { Flex, Typography } from "@app/shared/ui";
import { styles } from "./service-card.styles";
import type { ServiceCardProps } from "./types";

export const ServiceCard = ({ title, image, list }: ServiceCardProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Flex justifyContent="space-between" alignItems="flex-start" gap={8}>
        <Flex style={styles.text} alignItems="flex-start" flexDirection="column" gap={8}>
          <Typography variant="h2">{title}</Typography>
          <View>
            {list.map((item) => (
              <Typography key={item} variant="p" color="primary">
                - {item}
              </Typography>
            ))}
          </View>
        </Flex>
        <Image style={styles.image} width={156} height={145} source={image} />
      </Flex>
    </TouchableOpacity>
  );
};

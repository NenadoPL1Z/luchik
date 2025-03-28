import { Image, TouchableOpacity, View } from "react-native";
import { Flex, Typography } from "@app/shared/ui";
import { styles } from "./service-card.styles";
import type { ServiceCardProps } from "./types";

export const ServiceCard = (props: ServiceCardProps) => {
  const { title, image, list, onPush } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPush(props)}>
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
        <Image style={styles.image} source={image} />
      </Flex>
    </TouchableOpacity>
  );
};

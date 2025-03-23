import { Image, TouchableOpacity } from "react-native";
import { Flex, Typography } from "@app/shared/ui";
import type { ServiceCardProps } from "./types";

export const ServiceCard = ({ title }: ServiceCardProps) => {
  return (
    <TouchableOpacity>
      <Flex>
        <Flex>
          <Typography variant="h2">{title}</Typography>
        </Flex>
        <Image
          width={156}
          height={157}
        />
      </Flex>
    </TouchableOpacity>
  );
};

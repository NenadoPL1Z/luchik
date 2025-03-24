import { Flex, Typography } from "@app/shared/ui";
import { View } from "react-native";
import { styles } from "./table.styles";
import type { TableProps } from "./types";

export const Table = ({ timelines }: TableProps) => {
  return (
    <Flex style={styles.table} flexDirection="column">
      <Flex style={[styles.row, styles.header]} alignItems="center" justifyContent="space-between">
        <View style={[styles.column, styles.columnFirst]}>
          <Typography style={styles.text} variant="p" color="white">
            Дата
          </Typography>
        </View>
        <View style={styles.column}>
          <Typography style={styles.text} variant="p" color="white">
            Время работы
          </Typography>
        </View>
      </Flex>
      {timelines.map(([date, time], index) => (
        <Flex
          key={`${date}/${time}`}
          style={[
            styles.row,
            styles.rowOdd,
            (index + 1) % 2 === 0 ? styles.rowEven : {},
            index === timelines.length - 1 ? styles.resetBorder : {},
          ]}>
          <View style={[styles.column, styles.columnFirst]}>
            <Typography style={styles.text} variant="p" color="primary">
              {date}
            </Typography>
          </View>
          <View style={styles.column}>
            <Typography style={styles.text} variant="p" color="primary">
              {time}
            </Typography>
          </View>
        </Flex>
      ))}
    </Flex>
  );
};

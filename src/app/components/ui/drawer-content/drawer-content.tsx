import { Typography } from "@app/shared/ui";
import { Layout } from "@app/widgets/layout";
import type { DrawerContentProps } from "./types";

export const DrawerContent = (props: DrawerContentProps) => {
  return (
    <Layout>
      <Typography variant="h1">{props.state.type}</Typography>
    </Layout>
  );
};

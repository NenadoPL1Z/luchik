import { Header, Layout, Main } from "@app/widgets";
import { Typography } from "@app/shared/ui";
import type { MissionsScreenProps } from "../types";

export const MissionsScreen = (props: MissionsScreenProps) => {
  return (
    <Layout>
      <Header.Drawer
        title="Миссия и цели"
        onPress={() => props.navigation.openDrawer()}
      />
      <Main>
        <Typography variant="p">
          Деятельность учреждения направлена на предоставление социальных услуг и мер социальной поддержки для граждан
          Майминского района. Получателями услуг нашей организации являются льготные категории граждан: многодетные
          семьи, дети-сироты, дети, оставшиеся без попечения родителей, инвалиды, дети-инвалиды, дети с ОВЗ, граждане
          пожилого возраста, нуждающиеся в социальном обслуживании, участники СВО и члены их семей и др. льготные
          категории граждан, нуждающиеся в социальной поддержке от государства. Наша цель постоянное развитие и
          расширение возможностей оказания своевременной помощи всем нуждающимся гражданам Майминского района.
        </Typography>
      </Main>
    </Layout>
  );
};

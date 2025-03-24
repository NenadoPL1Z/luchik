import type { ServiceTree } from "../../../../types";

export type ServiceCardProps = ServiceTree & {
  onPush: (service: ServiceTree) => void;
};

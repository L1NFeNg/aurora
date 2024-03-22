import { ButtonAutoDisableModeEnum } from "@/enums/form/formEnum.ts";

export interface ButtonProps {
  autoDisableMode?: ButtonAutoDisableModeEnum;
  disabled?: boolean;
  clickDuration?: number;
  hidden?: boolean;
}

export interface FormBlockProps {
  title?: string;
}
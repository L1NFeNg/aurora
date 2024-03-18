import { ButtonAutoDisableModeEnum } from "@/enums/form/formEnum.ts";

export type ButtonProps = {
  autoDisableMode?: ButtonAutoDisableModeEnum
  disabled?: boolean
  clickDuration?: number
  hidden?: boolean
}
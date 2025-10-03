import { ModalProps } from "react-native";

type ModalDialogProps = ModalProps & {
  description: string;
  destructive?: boolean;
  dismissOnBackdropPress?: boolean;
  primaryButtonText: string;
  secondaryButtonText: string;
  testID?: string;
  title: string;
  isVisible: boolean;
  onClose?: () => void;
  onPrimaryButtonPress?: () => void;
  onSecondaryButtonPress?: () => void;
};

export type { ModalDialogProps };
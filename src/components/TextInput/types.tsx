export interface TextInputProps {
  onChangeText: (text: string) => void;
  onBlur?: (text: string) => void;
  value?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  height?: number;
  backgroundColor?: string;
}

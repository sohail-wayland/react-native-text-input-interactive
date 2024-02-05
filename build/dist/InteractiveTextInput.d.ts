import * as React from "react";
import { StyleProp, TextInput, TextInputProps, ViewStyle, Animated, TextStyle, ImageStyle, ImageSourcePropType } from "react-native";
export interface IInteractiveTextInputProps extends TextInputProps {
    style?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<TextStyle>;
    iconContainerStyle?: StyleProp<ViewStyle>;
    iconImageStyle?: StyleProp<ImageStyle>;
    iconImageSource?: ImageSourcePropType;
    ImageComponent?: any;
    IconComponent?: any;
    enableIcon?: boolean;
    mainColor?: string;
    originalColor?: string;
    animatedPlaceholderTextColor?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    onIconPress?: () => void;
}
interface IState {
}
export default class InteractiveTextInput extends React.Component<IInteractiveTextInputProps, IState> {
    interpolatedColor: Animated.Value;
    constructor(props: IInteractiveTextInputProps);
    textInputRef: React.RefObject<TextInput>;
    focus: () => void;
    showOriginColor: () => void;
    showFocusColor: () => void;
    renderIcon: () => false | JSX.Element | undefined;
    renderAnimatedTextInput: () => JSX.Element;
    render(): JSX.Element;
}
export {};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
/**
 * ? Local Imports
 */
const InteractiveTextInput_style_1 = tslib_1.__importStar(require("./InteractiveTextInput.style"));
const AnimatedTextInput = react_native_1.Animated.createAnimatedComponent(react_native_1.TextInput);
const MAIN_COLOR = "#2a41cb";
const ORIGINAL_COLOR = "transparent";
const PLACEHOLDER_COLOR = "#757575";
const ORIGINAL_VALUE = 0;
const ANIMATED_VALUE = 1;
class InteractiveTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInputRef = React.createRef();
        this.focus = () => {
            this.textInputRef.current?.focus();
        };
        this.showOriginColor = () => {
            react_native_1.Animated.timing(this.interpolatedColor, {
                duration: 350,
                toValue: ORIGINAL_VALUE,
                useNativeDriver: false,
            }).start();
        };
        this.showFocusColor = () => {
            react_native_1.Animated.timing(this.interpolatedColor, {
                duration: 450,
                toValue: ANIMATED_VALUE,
                useNativeDriver: false,
            }).start();
        };
        /* -------------------------------------------------------------------------- */
        /*                               Render Methods                               */
        /* -------------------------------------------------------------------------- */
        this.renderIcon = () => {
            const { enableIcon, iconImageStyle, iconContainerStyle, iconImageSource, onIconPress, ImageComponent = react_native_1.Image, IconComponent = react_native_1.TouchableOpacity, } = this.props;
            return (enableIcon && (<IconComponent style={[InteractiveTextInput_style_1.default.iconContainerStyle, iconContainerStyle]} onPress={onIconPress}>
          <ImageComponent resizeMode="contain" source={iconImageSource} style={[InteractiveTextInput_style_1.default.iconImageStyle, iconImageStyle]}/>
        </IconComponent>));
        };
        this.renderAnimatedTextInput = () => {
            const mainColor = this.props.mainColor || MAIN_COLOR;
            const originalColor = this.props.originalColor || ORIGINAL_COLOR;
            const animatedPlaceholderTextColor = this.props.animatedPlaceholderTextColor || PLACEHOLDER_COLOR;
            let borderColor = this.interpolatedColor.interpolate({
                inputRange: [ORIGINAL_VALUE, ANIMATED_VALUE],
                outputRange: [originalColor, mainColor],
            });
            let placeholderTextColor = this.interpolatedColor.interpolate({
                inputRange: [ORIGINAL_VALUE, ANIMATED_VALUE],
                outputRange: [animatedPlaceholderTextColor, mainColor],
            });
            return (<AnimatedTextInput ref={this.textInputRef} placeholderTextColor={placeholderTextColor} placeholder="Email" {...this.props} style={[InteractiveTextInput_style_1._textInputStyle(borderColor), this.props.textInputStyle]} onFocus={() => {
                this.showFocusColor();
                this.props.onFocus && this.props.onFocus();
            }} onBlur={() => {
                this.showOriginColor();
                this.props.onBlur && this.props.onBlur();
            }}/>);
        };
        this.interpolatedColor = new react_native_1.Animated.Value(ORIGINAL_VALUE);
        this.state = {};
    }
    render() {
        return (<react_native_1.View style={[InteractiveTextInput_style_1.default.container, this.props.style]}>
        {this.renderAnimatedTextInput()}
        {this.renderIcon()}
      </react_native_1.View>);
    }
}
exports.default = InteractiveTextInput;
//# sourceMappingURL=InteractiveTextInput.js.map
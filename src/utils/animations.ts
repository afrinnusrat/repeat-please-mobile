import { Animated } from 'react-native';

export const timingAnimation = (
	component: Animated.Value,
	toValue: number,
	duration: number,
) => Animated.timing(component, { toValue, duration });

export const springAnimation = (
	component: Animated.Value,
	toValue: number,
	friction: number,
) => Animated.spring(component, { toValue, friction });
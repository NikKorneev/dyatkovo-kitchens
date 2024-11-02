import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const CustomText = () => {
	const state = useThree();
	const { width, height } = state.viewport.getCurrentViewport(
		state.cameta,
		[0, 0, 12]
	);

	return (
		<>
			<Text
				anchorX="left"
				position={[-width / 2.5, -height / 10, 12]}
				font="/fonts/Montserrat-SemiBold.ttf"
			>
				Kitchen
			</Text>
			{/* <THREEText
				anchorX="right"
				position={[width / 2.5, -height * 2, 12]}
				font="/fonts/Montserrat-SemiBold.ttf"
			>
				Для тех, кто ценит лаконичность и функциональность
			</THREEText>
			<THREEText
				position={[0, -height * 4.624, 12]}
				font="/fonts/Montserrat-Medium.ttf"
			>
				Модель Bridge
			</THREEText> */}
		</>
	);
};

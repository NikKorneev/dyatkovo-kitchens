import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function Typography() {
	const state = useThree();
	const { width, height } = state.viewport.getCurrentViewport(
		state.cameta,
		[0, 0, 12]
	);

	return (
		<>
			<Text
				children="кухни"
				anchorX="right"
				font="/Inter-Regular.woff"
				letterSpacing={0.01}
				fontSize={0.7}
				color="black"
				position={[width / 1.4, height / 7, 6]}
			/>
			<Text
				children="Для тех, кто ценит лаконичность и функциональность"
				anchorX="right"
				font="/Montserrat-SemiBold.ttf"
				fontSize={0.09}
				color="black"
				position={[width / 2.9, -height * 1.6, 4]}
			/>
			<Text
				children="МОДЕЛЬ BRIDGE"
				anchorX="right"
				font="/Inter-Regular.woff"
				letterSpacing={-0.01}
				fontSize={width / 12}
				color="black"
				position={[width / 8.4, -height * 1.98, 6]}
			/>
		</>
	);
}

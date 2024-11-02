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
				characters="КУХНИкухни"
				anchorX="right"
				font="/Montserrat-SemiBold.ttf"
				letterSpacing={0.01}
				fontSize={0.7}
				color="black"
				position={[width / 1.58, height / 9, 6]}
			/>
			<Text
				children="Для тех, кто ценит лаконичность и функциональность"
				anchorX="right"
				font="/Montserrat-SemiBold.ttf"
				fontSize={0.09}
				color="black"
				position={[width / 2.9, -height * 1.5, 4]}
			/>
		</>
	);
}

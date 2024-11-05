import { Image, Svg, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import {
	ChoiceBottom,
	ChoiceUp,
	FooterImage,
	FreeChoice,
	HeaderFigure,
	HeaderMain,
	HeaderSecondary,
	TripleLong,
	TripleMid,
	TripleShort,
} from "../constants";

export function Images() {
	const group = useRef();
	const data = useScroll();

	const { height, width } = useThree((state) => state.viewport);
	useFrame(() => {
		group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
		group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
		group.current.children[2].material.zoom =
			1 + data.range(1.15 / 3, 1 / 3) / 3;
		group.current.children[3].material.zoom =
			1 + data.range(1.15 / 3, 1 / 3) / 4;
		group.current.children[4].material.zoom =
			1 + data.range(1.15 / 3, 1 / 3) / 5;
		group.current.children[8].material.zoom =
			1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
	});
	return (
		<group ref={group}>
			<Image
				position={[-2, 0, 0]}
				scale={[4, height, 1]}
				toneMapped={false}
				url={HeaderMain}
			/>
			<Image
				position={[2.5, -1.42, 1]}
				scale={[3.5, 2.4, 2]}
				toneMapped={false}
				url={HeaderSecondary}
			/>
			<Image
				position={[width / -5.9, -5.6, 1]}
				scale={[width / 3.6, width / 4.1, 2]}
				toneMapped={false}
				url={TripleShort}
			/>
			<Image
				position={[width / 20, -5.5, 4]}
				scale={[width / 7.5, width / 4, 2]}
				toneMapped={false}
				url={TripleMid}
			/>
			<Image
				position={[width / 6.4, -5.5, 6]}
				scale={[width / 10.8, width / 3.8, 2]}
				toneMapped={false}
				url={TripleLong}
			/>
			<Image
				position={[-width / 99, -9.7, 3]}
				scale={[width / 5.8, width / 3, 2]}
				url={FreeChoice}
				toneMapped={false}
			/>
			<Svg
				src={ChoiceUp}
				position={[-width / 10.2, -8.5, 6]}
				scale={[0.006, 0.006, 0.006]}
			/>
			<Svg
				src={ChoiceBottom}
				position={[width / 4, -11.13, 3]}
				scale={[0.006, 0.006, 0.006]}
			/>
			<Image
				url={FooterImage}
				position={[0, -height * 2.5 - height / 4, 0]}
				scale={[width, height / 1.1, 1]}
				toneMapped={false}
			/>
			<Svg
				src={HeaderFigure}
				position={[width / 10, 2.5, 4]}
				scale={[0.004, 0.004, 0.01]}
			/>
		</group>
	);
}

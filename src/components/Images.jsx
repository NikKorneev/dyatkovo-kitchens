import { Image, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { HeaderMain, HeaderSecondary } from "../constants";

export function Images() {
	const group = useRef();
	const data = useScroll();
	const { height } = useThree((state) => state.viewport);
	useFrame(() => {
		group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
		group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
	});
	return (
		<group ref={group}>
			<Image
				position={[-2, 0, 0]}
				scale={[4, height, 1]}
				url={HeaderMain}
			/>
			<Image
				position={[2.5, -1.42, 0]}
				scale={[3.5, 2.4, 2]}
				url={HeaderSecondary}
			/>
		</group>
	);
}

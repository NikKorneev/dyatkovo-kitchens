import { MeshTransmissionMaterial, useFBO, useGLTF } from "@react-three/drei";
import { createPortal, useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, useState } from "react";
import * as THREE from "three";

export const Lens = ({ children, damping = 0.15, ...props }) => {
	const ref = useRef();
	const { nodes } = useGLTF("/lens-transformed.glb");
	const buffer = useFBO();
	const viewport = useThree((state) => state.viewport);
	const [scene] = useState(() => new THREE.Scene());
	useFrame((state, delta) => {
		const viewport = state.viewport.getCurrentViewport(
			state.camera,
			[0, 0, 15]
		);
		easing.damp3(
			ref.current.position,
			[
				(state.pointer.x * viewport.width) / 2,
				(state.pointer.y * viewport.height) / 2,
				15,
			],
			damping,
			delta
		);

		state.gl.setRenderTarget(buffer);
		state.gl.setClearColor("#d8d7d7");
		state.gl.render(scene, state.camera);
		state.gl.setRenderTarget(null);
	});
	return (
		<>
			{createPortal(children, scene)}
			<mesh scale={[viewport.width, viewport.height, 1]}>
				<planeGeometry />
				<meshBasicMaterial map={buffer.texture} />
			</mesh>
			<mesh
				scale={0.25}
				ref={ref}
				rotation-x={Math.PI / 2}
				geometry={nodes.Cylinder.geometry}
				{...props}
			>
				<MeshTransmissionMaterial
					buffer={buffer.texture}
					ior={1.2}
					thickness={1.5}
					anisotropy={0.1}
					chromaticAberration={0.04}
				/>
			</mesh>
		</>
	);
};

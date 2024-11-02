import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Header, Images, Lens } from "./components";

export function App() {
	return (
		<>
			<div className="container relative mx-auto">
				<Header />
			</div>
			<Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
				<ScrollControls damping={0.2} pages={3} distance={0.5}>
					<Lens>
						<Scroll>
							{/* <CustomText /> */}
							<Images />
						</Scroll>
						<Scroll html>
							<div
								style={{
									transform: "translate3d(65vw, 192vh, 0)",
								}}
							>
								PMNDRS Pendant lamp
								<br />
								bronze, 38 cm
								<br />
								CHF 59.95
								<br />
							</div>
						</Scroll>
						{/** This is a helper that pre-emptively makes threejs aware of all geometries, textures etc
               By default threejs will only process objects if they are "seen" by the camera leading 
               to jank as you scroll down. With <Preload> that's solved.  */}
						<Preload />
					</Lens>
				</ScrollControls>
			</Canvas>
		</>
	);
}

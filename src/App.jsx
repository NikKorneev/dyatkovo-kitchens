import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Href, Images, Lens, Typography } from "./components";

export function App() {
	return (
		<>
			<Canvas camera={{ position: [0, 0, 20], fov: 15 }} dpr={[2, 4]}>
				<ScrollControls damping={0.2} pages={3.7} distance={0.5}>
					<Lens>
						<Scroll>
							<Typography />
							<Images />
						</Scroll>
						<Scroll html>
							<div
								style={{
									transform: "translate3d(17vw, 184vh, 0)",
								}}
							>
								<div className="flex w-[30vw] justify-between">
									<Href
										text="Заказать кухню"
										href="https://dyatkovo.ru/kuhni/bridge/"
									/>
									<p className="font-bold">
										От 200 тыс. руб.
									</p>
								</div>
							</div>
							<div
								style={{
									transform:
										"translate3d(calc(61vw - 2px), 205vh, 0)",
								}}
							>
								<div className="flex w-[20vw] justify-between">
									<p className="font-extralight">
										Разнообразие сочетаний выразительных
										древесных текстур с палитрой трендовых
										декоров, корпуса в трех различных цветах
										и возможность индивидуального подбора
										цвета цоколя
									</p>
								</div>
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

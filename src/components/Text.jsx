import { extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Text as TroikaText } from "troika-three-text";

// Extend three.js with TroikaText
extend({ TroikaText });

export function CustomText() {
	const textRef = useRef();
	const { viewport } = useThree(); // Получаем ширину и высоту области просмотра
	const { width, height } = viewport; // Здесь width и height — это размеры viewport

	return (
		<mesh position={[width / 40.5, height / 10, 12]} ref={textRef}>
			<troikaText
				text="кухни"
				font="/Montserrat-SemiBold.ttf"
				fontSize={0.4}
				color="black"
				anchorX="left"
			/>
		</mesh>
	);
}

export default CustomText;

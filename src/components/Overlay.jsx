import { Logo } from "../constants";
import { Href } from "./Href";
export const Overlay = () => {
	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				pointerEvents: "none",
				width: "100%",
				height: "100%",
			}}
		>
			<a href="https://dyatkovo.ru" className="absolute left-4 top-1">
				<img src={Logo} alt="logo" className="w-[192px] h-20 px-1" />
			</a>
			<div className="absolute right-4 top-5">
				<Href
					text="Перейти на главную"
					href="https://dyatkovo.ru/kuhni/"
				/>
			</div>

			<div
				style={{
					position: "absolute",
					bottom: 40,
					right: 40,
					fontSize: "13px",
				}}
			>
				<p>created at</p>
				02/11/2024
			</div>
		</div>
	);
};

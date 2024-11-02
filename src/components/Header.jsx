import { Logo } from "../constants";

export const Header = () => {
	return (
		<header className="flex justify-between items-center ">
			<img src={Logo} alt="" className="w-[192px] h-20 py-6 px-4 " />
			<a
				href="https://dyatkovo.ru/kuhni/"
				className="font-montserrat text-customGreen text-[1rem] underline hover:underline"
			>
				Перейти на главную
			</a>
		</header>
	);
};

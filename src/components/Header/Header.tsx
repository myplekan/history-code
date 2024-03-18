import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 h-11 bg-header-opacity-50 fixed w-full">
      <Logo />

      <Nav />

      <div className="flex gap-2 items-center">
        <img
          width={25}
          src={process.env.PUBLIC_URL + "/images/world.svg"}
          alt="World"
        />
        Укр
      </div>
    </header>
  );
};

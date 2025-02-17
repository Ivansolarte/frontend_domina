
import logo from "../../assets/icon/logo.png";
import { useLogin } from "../../store/login";

export const Header = () => {
  const { setLogout } = useLogin();

  const outSession = () => {
    setLogout();
    sessionStorage.clear();
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <p
            className="text-sm/6 font-semibold text-gray-900 cursor-pointer"
            onClick={outSession}
          >
            {"cerrar session"}
          </p>
        </div>
      </nav>
    </header>
  );
};

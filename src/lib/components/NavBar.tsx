import Link from "next/link";
import { useRouter } from "next/router";

function NavBarItem(props: { route: string; title: string }) {
  const { route } = useRouter();

  return (
    <Link
      href={props.route}
      className={`flex w-full flex-col items-center ${
        route === props.route ? "font-bold" : "opacity-70"
      }`}
    >
      {props.title}
    </Link>
  );
}

export function NavBar() {
  return (
    <div className="fixed bottom-0 left-0 flex w-full border-t-[1px] border-t-gray-200 p-2 backdrop-blur">
      <NavBarItem title="Journal" route="/" />
      <NavBarItem title="Stats" route="/stats" />
    </div>
  );
}

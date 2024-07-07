import SideNav from "../components/common/sidenav";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-scree flex-col md:flex-row md:overflow-hidden">
      <div className="grow p-6 md:overflow-y-auto md:p-12 md:w-7/10">{children}</div>
      <div className="w-full flex-none p-6 md:w-3/10">
        <SideNav />
      </div>
    </div>

// h-screen
  );
}
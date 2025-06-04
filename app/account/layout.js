import SideNavigation from "@/app/_components/SideNavigation";

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Reservation",
  },
};

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-6">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

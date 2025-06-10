import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();
  console.log(session);
  const firstName = session.user.name.split(" ").at(0);
  return (
    <h1 className="font-semibold text-xl text-accent-400">
      Welcome, {firstName}
    </h1>
  );
}

import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
   <div>
    <UserButton
      afterSignOutUrl="/"
    />
    <p>Wilfred mugacha</p>
   </div>
  )
}

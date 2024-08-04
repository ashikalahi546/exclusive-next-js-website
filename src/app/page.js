import FlashSalesCard from "@/components/FlashSalesCard";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <main>
      <div className="w-[1170px] mx-auto ">
        <Sidebar />
        <FlashSalesCard />
      </div>

      <div></div>
    </main>
  );
}

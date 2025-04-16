import NavBar from "@/components/NavBar";
import ContractForm from "@/components/ContractForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-center text-purple-600">
          sol-doc - AI Contract Generator
        </h1>
        <ContractForm />
      </main>
    </div>
  );
}

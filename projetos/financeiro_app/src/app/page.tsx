import CampoInput from "./components/ui/campos/CampoInput";
import Tabela from "./components/ui/info/Tabela";
import Saldos from "./components/ui/transacao/Saldos";

export default function Home() {
  return (
    <main className="w-[80%] sm:w-[39rem] m-auto mt-4">
      <Saldos/>
      <CampoInput/>
      <Tabela/>
    </main>
  );
}

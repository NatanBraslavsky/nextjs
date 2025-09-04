import { Input } from "../input";
import { Button } from "../button"
import SelectCampo from "./SelectCampo";

export default function CampoInput(){
    return(
        <div className="mt-10 flex flex-col min-[550px]:flex-row gap-3">
            <Input type="text" placeholder="Descrição"></Input>
            <Input type="text" placeholder="Valor"></Input>
            <SelectCampo/>
            <Button className="bg-blue-500 hover:bg-blue-600 h-10" variant={"default"}>Adicionar</Button>
        </div>
    )
}
import Button from "@/app/components/Button";
import {FaArrowLeft} from "react-icons/fa";
import Link from "next/link";

async function Page({params}) {
    const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
    );
    const produto = await response.json();

    return (
        <div className="mt-10 max-w-[1200px] m-auto p-10">
            <Link className="flex items-center gap-3" href={"/produtos"}>
                <FaArrowLeft className="text-[#7c7c80] font-light" />
                <div>
                    <span className="text-[#7C7C80] text-[15px] font-medium font-sans">
                        Voltar ao catálogo
                    </span>
                </div>
            </Link>
            <div className="flex max-w-[1000px] max-[655px]:flex-col mt-5">
                <div className="rounded-2xl flex justify-center items-center h-[400px] w-6/12 max-[655px]:w-full max-[655px]:h-[285px] max-[655px]:mb-5 bg-[#E5E7EB] text-[16px] font-bold text-[#7A6E7A]">
                    IMAGEM
                </div>
                <div className="pl-4 w-6/12 space-y-4 font-sans max-[655px]:w-full">
                    <h1 className="font-bold text-[26px]">{produto.title}</h1>
                    <p className="text-2xl text-[#7C3BED] font-medium">
                        R$ {produto.price}
                    </p>
                    <h1 className="font-medium text-[20px]">Descrição</h1>
                    <p className="text-zinc-500">{produto.description}</p>
                    <div className="flex flex-col gap-2 mt-5">
                        <Button className="bg-[#7C3BED] text-white">
                            Adicionar ao Carrinho
                        </Button>
                        <Button className="border border-[#E4E4E7]">
                            Comprar Agora
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;

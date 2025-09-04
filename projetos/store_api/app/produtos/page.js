import Link from "next/link";

async function Page() {
    const response = await fetch("https://fakestoreapi.com/products");
    const produtos = await response.json();

    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-8 pb-5 ">
                Catálogo de Produtos
            </h1>
            <p className="text-center mb-7 text-[#6E6E89] text-[16px]">
                Melhores Produtos de todos os tempos
            </p>
            <section className="p-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container m-auto gap-7 rounded-3xl max-w-[1400px]">
                    {produtos.map((produto) => (
                        <div
                            key={produto.id}
                            className="rounded-2xl border border-[#E5E7EB]"
                        >
                            <Link href={`/produtos/${produto.id}`}>
                                <div className="rounded-t-2xl flex justify-center items-center w-full h-[300px] bg-[#E5E7EB] text-[13px] font-bold text-[#7A6E7A]">
                                    IMAGEM
                                </div>
                                <li className="pl-3 pb-3">
                                    <h1
                                        className="text-[16px] font-bold text-[#2f2f35] pt-4"
                                        title={produto.title}
                                    >
                                        {produto.title.length > 30
                                            ? produto.title.slice(0, 30) + "..."
                                            : produto.title}
                                    </h1>
                                    <p className="pt-2 text-[18px] font-bold text-[#7C3BED]">
                                        R$ {produto.price}
                                    </p>
                                </li>
                            </Link>
                        </div>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Page;

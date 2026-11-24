import placeholderimg from "../assets/Sapo Pixel no Atendimento Sem Fundo 1.svg"

export default function ContactUsSection(){

    return(
        <section className="flex flex-col w-full p-10">
            
            <h1 className="border-l-4 border-[#76FD00] uppercase text-[36px] pl-4 text-[#FEFFFE]"> contate nos </h1>

            <div className="flex flex-row gap-40 align-middle justify-center items-center text-[#74ae23]">  
            
                <img src={placeholderimg} className="w-[45%]" />
                
                <div className="flex flex-col w-[45%] gap-2">

                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col w-full">
                            <label>Nome</label>
                            <input type="text" className="border-4 border-[#517224] h-10 p-2" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label>Telefone</label>
                            <input type="text" className="border-4 border-[#517224] h-10 p-2" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <label>Email</label>
                        <input type="text" className="border-4 border-[#517224] h-10 p-2" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label>Mensagem</label>
                        <textarea className="border-4 border-[#517224] h-40 p-2 text-start" />
                    </div>

                    <button className="uppercase w-full text-[#FEFFFE] bg-[#517224] pl-10 pr-10 pt-3 pb-3 z-10"> enviar </button>
                </div>
            
            </div>

        </section>
    );

}

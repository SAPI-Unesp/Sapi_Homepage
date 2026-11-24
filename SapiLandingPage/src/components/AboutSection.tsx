import placeholderimg from "../assets/placehoder_equipe.png"
import bg_content_start from "../assets/image 28.png"

export default function AboutSection(){
    
    return(
        <section className="flex flex-col w-full p-10">
            
            <h1 className="border-l-4 border-[#76FD00] uppercase text-[36px] pl-4 text-[#FEFFFE]"> um pouco sobre nós </h1>

            <div className="relative flex flex-row gap-20 align-middle justify-center items-center">  
                <div className="relative max-w-[45%]">
                    <img src={bg_content_start} className="absolute z-0 opacity-10"/>
                    <p className="text-[#C1E88B] text-[30px] z-10">O SAPI (Sistema de Apoio para Pequenas Instituições) é um projeto de extensão universitária da UNESP que busca aproximar a tecnologia das necessidades da comunidade.
                    <br/>
                    <br/>
                    Nosso objetivo é desenvolver soluções digitais gratuitas e personalizadas para pequenas instituições e empreendimentos que precisam melhorar seus processos, organizar suas atividades ou ampliar sua presença no meio digital.</p>
                </div>
                <div className="relative flex flex-col w-[45%] justify-center align-middle gap-2">
                    <img src={placeholderimg} className="w-full bg-[#517224] rounded-[60px] z-10"/>
                    <img src={bg_content_start} className="absolute opacity-10 rotate-20 z-0" />
                    <button className="self-center uppercase text-[25px] max-w-100 text-[#FEFFFE] bg-[#517224] rounded-[60px] pl-10 pr-10 pt-3 pb-3 z-10"> saiba mais sobre o projeto </button>
                </div>
            </div>

        </section>
    );

}
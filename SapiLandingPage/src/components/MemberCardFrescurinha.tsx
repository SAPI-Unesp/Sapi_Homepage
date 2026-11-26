import { useState } from "react";
import githubIcon from "../assets/Github.png";
import linkedinIcon from "../assets/Linkedin.png";
import instagramIcon from "../assets/Instagram.png";

export interface MemberCardProps {
  name: string;
  nickname: string;
  phrase: string;
  description: string;
  photo_path: string;
  links: string[];
}

function getSocialInfo(url: string) {
  const lower = url.toLowerCase();
  if (lower.includes("github")) return { label: "GitHub", icon: githubIcon };
  if (lower.includes("linkedin")) return { label: "LinkedIn", icon: linkedinIcon };
  if (lower.includes("instagram")) return { label: "Instagram", icon: instagramIcon };
  return { label: url.replace(/^https?:\/\/(www\.)?/, "").split(".")[0], icon: null };
}

export default function MemberCardFrescurinha({
  name,
  nickname,
  phrase,
  description,
  photo_path,
  links,
}: MemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped((prev) => !prev)}
      className="group w-full max-w-101.25 h-137.5 perspective-[1000px] cursor-pointer select-none"
    >
      {/* Container interno que executa a rotação 3D */}
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)] ${
          isFlipped ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        {/* ================= FRENTE DO CARD ================= */}
        <div className="absolute inset-0 flex flex-col items-center justify-between p-8 rounded-xl bg-zinc-900/80 border border-white/10 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5)] backface-hidden overflow-hidden">
          {/* Detalhe neon no topo */}
          <div className="w-16 h-1 rounded-full bg-[#76FD00]" />

          {/* Foto em destaque */}
          <div className="relative p-1.5 rounded-full border-2 border-[#76FD00]/60 shadow-[0_0_25px_rgba(118,253,0,0.2)]">
            <img
              src={photo_path}
              alt={name}
              className="w-44 h-44 rounded-full object-cover"
            />
          </div>

          {/* Identificação principal */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#FEFFFE] tracking-tight">
              {name}
            </h2>
            <span className="mt-1 inline-block font-mono text-base uppercase tracking-widest text-[#76FD00]">
              @{nickname}
            </span>
          </div>

          {/* Indicador sutil de interação */}
          <span className="text-xs uppercase tracking-wider text-zinc-500">
            Passe o mouse ou clique para ver mais
          </span>
        </div>

        {/* ================= VERSO DO CARD ================= */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 rounded-xl bg-zinc-950 border border-[#76FD00]/50 shadow-[0_12px_32px_-4px_rgba(118,253,0,0.2)] transform-[rotateY(180deg)] backface-hidden">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-sm uppercase tracking-wider text-[#76FD00]">
                @{nickname}
              </span>
              <span className="text-xs text-zinc-500">Sobre</span>
            </div>

            {/* Frase */}
            <blockquote className="mt-5 pl-3 border-l-2 border-[#76FD00] italic text-sm text-zinc-200">
              "{phrase}"
            </blockquote>

            {/* Descrição */}
            <p className="mt-5 text-sm text-zinc-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Links sociais usando os ícones que você já tem em src/assets */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-xs uppercase tracking-wider text-zinc-500 mb-3 text-center">
              Conecte-se
            </p>
            <div className="flex justify-center gap-4">
              {links.map((url) => {
                const { label, icon } = getSocialInfo(url);
                return (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    title={label}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-[#FEFFFE] transition-all duration-200 hover:-translate-y-1 hover:border-[#76FD00] hover:bg-[#76FD00]/10"
                  >
                    {icon && (
                      <img src={icon} alt={label} className="w-4 h-4 object-contain" />
                    )}
                    <span>{label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
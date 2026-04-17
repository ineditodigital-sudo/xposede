interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className="relative inline-block">
      <img
        src="https://cdn.xposedde.com.mx/repositorio/LOGOS/LOGO%20XPOSSEDE%20COLORES%20GRIS.webp"
        alt="Xpo Sedde"
        className={className || "h-14"}
      />
      <span className="absolute -top-1 -right-2 text-[10px] font-bold text-gray-600">®</span>
    </div>
  );
}
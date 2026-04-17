interface LogoTextProps {
  className?: string;
}

export function LogoText({ className = "font-title text-2xl text-xposedde-red" }: LogoTextProps) {
  return (
    <span className={className} style={{ letterSpacing: '0.1em' }}>
      XPOSEDDE
    </span>
  );
}

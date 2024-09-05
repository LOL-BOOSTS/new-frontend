import { forwardRef, CSSProperties } from "react";

interface SvgColorProps {
  src: string;
  className?: string;
  sx?: CSSProperties; // For additional styles
}

const SvgColor = forwardRef<HTMLSpanElement, SvgColorProps>(
  ({ src, className, sx, ...other }, ref) => (
    <span
      ref={ref}
      {...other}
      className={className}
      style={{
        width: 24,
        height: 24,
        display: "inline-block",
        backgroundColor: "currentColor",
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
    />
  )
);

SvgColor.displayName = "SvgColor";

export default SvgColor;

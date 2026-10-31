import { useState } from "react";

/**
 * Responsive <img>. Pass `image={{ src, srcSet }}` or a plain `src`.
 * Shows a dark placeholder if the file fails to load, so the layout never breaks.
 */
export default function Img({ image, src, alt, className = "", sizes = "100vw", ...rest }) {
  const [failed, setFailed] = useState(false);
  const finalSrc = image?.src ?? src;

  if (failed) return <div role="img" aria-label={alt} className={`img-fallback ${className}`} />;

  return (
    <img
      src={finalSrc}
      srcSet={image?.srcSet}
      sizes={image?.srcSet ? sizes : undefined}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}

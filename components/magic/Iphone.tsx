/* MagicUI-style iPhone mockup frame (CSS). Wraps any screen content. */
export default function Iphone({ children }: { children: React.ReactNode }) {
  return (
    <div className="iphone">
      <div className="iphone-frame">
        <div className="iphone-island" aria-hidden="true" />
        <div className="iphone-screen">{children}</div>
      </div>
    </div>
  );
}

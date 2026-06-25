/* MagicUI-style iPhone mockup frame (CSS). Wraps any screen content.
   Pass `bare` to hide the dynamic island (e.g. when showing a real
   screenshot that already includes its own status bar). */
export default function Iphone({
  children,
  bare = false,
}: {
  children: React.ReactNode;
  bare?: boolean;
}) {
  return (
    <div className="iphone">
      <div className="iphone-frame">
        {!bare && <div className="iphone-island" aria-hidden="true" />}
        <div className="iphone-screen">{children}</div>
      </div>
    </div>
  );
}

/* MagicUI progressive-blur: fixed frosted gradients at the top and bottom of
   the viewport so the whole page softly blurs toward its edges. */
export default function ProgressiveBlur() {
  return (
    <>
      <div className="progressive-blur progressive-blur-top" aria-hidden="true" />
      <div className="progressive-blur progressive-blur-bottom" aria-hidden="true" />
    </>
  );
}

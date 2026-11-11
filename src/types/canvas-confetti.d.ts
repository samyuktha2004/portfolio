declare module 'canvas-confetti' {
  interface ConfettiOptions {
    angle?: number;
    colors?: string[];
    origin?: { x?: number; y?: number };
    particleCount?: number;
    scalar?: number;
    shapes?: string[];
    spread?: number;
  }

  type Confetti = (options?: ConfettiOptions) => Promise<null> | null;

  const confetti: Confetti;
  export default confetti;
}

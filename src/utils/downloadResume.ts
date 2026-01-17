// Confetti animation for resume download celebration
const triggerConfetti = () => {
  // Import confetti dynamically only when needed
  import('canvas-confetti').then((confetti) => {
    const colors = ['#FFB6C1', '#FFF0F5', '#87CEEB', '#DDA0DD', '#FF95A8'];
    
    // First burst
    confetti.default({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors,
      shapes: ['circle', 'square'],
      scalar: 1.2,
    });
    
    // Second burst (delayed slightly)
    setTimeout(() => {
      confetti.default({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
    }, 250);
    
    // Third burst (from right)
    setTimeout(() => {
      confetti.default({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });
    }, 400);
  });
};

export const downloadResume = () => {
  // Trigger confetti celebration! 🎉
  triggerConfetti();
  
  // Small delay so user sees the confetti before print dialog
  setTimeout(() => {
    // Set document title temporarily for PDF filename
    const originalTitle = document.title;
    document.title = 'Resume-Samyuktha';
    
    // Trigger print dialog - user can save as PDF
    window.print();
    
    // Restore original title after a short delay
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  }, 300);
};
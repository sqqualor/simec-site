export function TopoPattern({ className = "opacity-15 text-slate-400" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 size-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M-100 200 C100 100, 300 350, 500 250 C700 150, 800 400, 900 300"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M-100 280 C120 180, 320 420, 520 320 C720 220, 820 480, 920 380"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M-100 360 C140 260, 340 500, 540 390 C740 280, 840 560, 940 460"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M-100 440 C160 340, 360 580, 560 460 C760 340, 860 640, 940 540"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M-100 520 C180 420, 380 660, 580 530 C780 400, 880 720, 940 620"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M-100 600 C200 500, 400 740, 600 600 C800 460, 900 800, 940 700"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}
import "./globals.css";

export const metadata = {
  title: "NusTree | NUS Academic Pathway Planner",
  description:
    "Curriculum pathway planner, prerequisite visualizer, and degree progress tracker for NUS students.",
  icons: {
    icon: "/images/NusTree_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="relative min-h-screen m-0 antialiased bg-[#161822] text-zinc-100 selection:bg-zinc-700 selection:text-white">
        {/* Subtle Backdrop Pattern */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-subtle-grid bg-mask-subtle opacity-70" />
        </div>

        {/* Page Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

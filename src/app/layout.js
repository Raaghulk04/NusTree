import "./globals.css";

export const metadata = {
  title: "NusTree",
  description: "Academic pathway planner for NUS students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="relative min-h-screen m-0 antialiased bg-zinc-50 dark:bg-zinc-950">
        {/* Global Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern bg-mask-radial opacity-50" />
        </div>

        {/* Page Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

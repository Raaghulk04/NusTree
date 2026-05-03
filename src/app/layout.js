import "./globals.css";

export const metadata = {
  title: "NusTree",
  description: "Academic pathway planner for NUS students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

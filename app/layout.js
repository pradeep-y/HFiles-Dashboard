import "./globals.css";
export const metadata = {
  title: "HFiles Dashboard",
  description: "Medical Records Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

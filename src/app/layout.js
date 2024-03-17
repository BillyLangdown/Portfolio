import "./globals.css";

export const metadata = {
  title: "Billy Langdown Portfolio",
  description: "A portfolio to showcase my software engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

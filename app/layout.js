import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ninja List | Home",
  keywords: "ninjas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="content">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

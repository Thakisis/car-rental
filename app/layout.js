import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/Navbar"
import Debug from "@/components/Debug"
import { TooltipProvider } from "@/components/ui/tooltip"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">

      <body className={inter.className}>
        <Debug></Debug>
        <NavBar></NavBar>
        <TooltipProvider>
        {children}
        </TooltipProvider>
        </body>
    </html>
  )
}

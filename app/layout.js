import "./globals.css"
import { Poppins } from "next/font/google"
export const metadata = {
  title: "Color Palette app",
  description: "Generate great colors for your project easily",
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

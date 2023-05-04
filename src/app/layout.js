import Navbar from "@/components/Navbar";
import { TaskProvider } from "../context/TasksContext";
import { Inter } from "next/font/google";
import { Toaster } from "./Toaster";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <Navbar />
        <TaskProvider>
          { children }
          <Toaster />
        </TaskProvider>
      </body>
    </html>
  )
}

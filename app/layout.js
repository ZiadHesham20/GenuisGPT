import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react"



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPTGenius",
  description: 'GPTGenius: Your AI language companion. Powered by EdenAI, it enhances your conversations, content creation, and magnage your Tours , and more!',
  verification:{
    google: 'EFHUD0Nq7YnVTyadH3yaeYWIHIdG6FD6YT4HbEePp6A'
  }
};

export default function RootLayout({ children }) {
  return (
    
    <ClerkProvider>
      

      <meta
      key={["Gpt Genuis","Chatgpt","openAi","tours","Tours managment"]}
        />
      
      
      <html lang="en" data-theme='night' >
      <body className={inter.className}><Providers>
      {children}
      <Analytics />
        </Providers></body>
    </html>
    </ClerkProvider>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPTGenius",
  description: 'GPTGenius: Your AI language companion. Powered by EdenAI, it enhances your conversations, content creation, and magnage your Tours , and more!',
  verification:{
    google: 'google'
  }
};

export default function RootLayout({ children }) {
  return (
    
    <ClerkProvider>
      <meta name="google-site-verification=oi_TwzJ9mVcOBzGAaXCS-Y6oXhJynx6f_KDKPv_ddGs" content="google" />
      <meta
      key={["Gpt Genuis","Chatgpt","openAi","tours","Tours managment"]}
      />
      
      
      <html lang="en" data-theme='night' >
      <body className={inter.className}><Providers>
      {children}
        </Providers></body>
    </html>
    </ClerkProvider>
  );
}

import { Roboto } from 'next/font/google'
import "@/styles/globals.css";
import "@/styles/reset.css"
import "@/components/Header.css"
import "@/components/Avaliacoes.css";
import "@/components/Video.css"
import '@/components/Mural.css';
import '@/components/Maps.css';
import "@/components/Footer.css";
import "@/components/CarrosAnunciados.css";
import "@/components/Estoque.css"
import "swiper/swiper-bundle.css";
import "@/components/Detalhe.css"
import "@/components/Contato.css"
import type { AppProps } from "next/app";

const roboto = Roboto ({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font--roboto',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>

  )

}

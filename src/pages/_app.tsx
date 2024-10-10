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
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


const Header = () => {
  const router = useRouter();
  const [menuAberto, setMenuAberto] = useState(false);

  const abrirEFecharModal = () => {
    setMenuAberto((prevMenuAberto) => !prevMenuAberto);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <header className={router.pathname === "/" ? "header" : "header white"}>
      <div className="Logo hide sm:show">
            <Link href="/" title="Doin">
                <img className="logo-tamanho" src="/imagens/logoDoinPadrao.png" alt="Doin Motors" />
            </Link>
        </div>
      <div className="header_menu" onClick={abrirEFecharModal}>
        <div className={`barra_cabecalho_1 ${menuAberto ? "ativo" : ""}`}></div>
        <div className={`barra_cabecalho_2 ${menuAberto ? "ativo" : ""}`}></div>
        <div className={`barra_cabecalho_3 ${menuAberto ? "ativo" : ""}`}></div>
        <p className="menu_texto">{menuAberto ? "FECHAR" : "MENU"}</p>
      </div>
      <div className="Logo sm:hide">
        <Link href="/" title="Doin">
          {router.pathname === "/" ? (
            <img className="logo-tamanho" src="/imagens/logoDoinPadrao.png" alt="Doin Motors" />
          ) : (
            <img className="logo-tamanho" src="/imagens/logoDoinPreto.png" alt="Doin Motors" />
          )}
        </Link>
      </div>
      <Link href="/EstoquePage" title="NOSSO ESTOQUE" className="nosso_estoque_header">
        NOSSO ESTOQUE
      </Link>
      <div className="borda_header"></div>
      {menuAberto && (
        <>
          <div className={`overlay ${menuAberto ? "menu_aberto__ativo" : ""}`}onClick={abrirEFecharModal}></div>
          <div className={`header_menu_aberto ${menuAberto ? "menu_aberto__ativo" : ""}`}>
            <Link className="texto_menu_aberto" href="/EstoquePage" title="NOSSO ESTOQUE">
              NOSSO ESTOQUE
            </Link>
            <Link className="texto_menu_aberto" href="/ContatoPage" title="CONTATO">
              CONTATO
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;  


// <div className="Logo hide sm:show">
 //<Link href="/" title="Doin">
//<img className="logo-tamanho" src="/imagens/logoDoinPadrao.png" alt="Doin Motors" />
//</Link>
//</div> //
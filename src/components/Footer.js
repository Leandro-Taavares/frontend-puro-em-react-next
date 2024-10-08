import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="categorias_footer">
          <img src="/imagens/logoDoinPadrao.png" alt="logo" className="logo_doin" />
          <nav>
            <ul className="topicos_rodape">
              <li>
                <Link href="/ProductPage" title="NOSSO ESTOQUE">
                  NOSSO ESTOQUE
                </Link>
              </li>
              <li>
                <Link href="/ContatoPage" title="CONTATO">
                  CONTATO
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="container_conteudo_footer">
                <div class="localidade" data-loja="1">
                    <p class="titulo_loja">Shopping The Blue</p>
                    <div class="telefone">
                        <img src="/imagens/telefoneBranco.png" alt="Telefone" className="imagem_telefone"/>
                        <a class="numero_telefone" href="tel:+5535130377">(13) 3513-0377</a>
                    </div>
                    <div class="whatsapp">
                        <img src="/imagens/whatsAppPreto.png" alt="Telefone" class="imagem_whatsapp"/>
                        <a class="numero_telefone" href="tel:+551332321021">(13) 3232-1021</a>
                    </div>
                    <p class="horario_funcionamento">Segunda a Sexta feira: 8h ás 19h Sábado: 9h ás 13h</p>
                </div>
                <div class="localidade" data-loja="2">
                    <p class="titulo_loja">Vila dos Carros</p>
                    <div class="telefone">
                        <img src="/imagens/telefoneBranco.png" alt="Telefone" class="imagem_telefone"/>
                        <a class="numero_telefone" href="tel:+551335139770">(13) 3513-9770</a>
                    </div>
                    <div class="whatsapp">
                        <img src="/imagens/whatsAppPreto.png" alt="Telefone" class="imagem_whatsapp"/>
                        <a class="numero_telefone" href="tel:+5513974025502">(13)97402-5502</a>
                    </div>
                    <p class="horario_funcionamento">Segunda á Sabado: 09h ás 19h</p>
                </div>
                <div class="redes_sociais">
                    <a class="espacamento" href="https://www.facebook.com/doinmotors" target="_blank" rel=""><img src="/imagens/facebook.png" alt="facebook"/></a>
                    <a class="espacamento" href="https://www.youtube.com/c/DoinMotors" target="_blank" rel=""><img src="/imagens/youtube.png" alt="youtube"/></a>
                    <a class="espacamento" href="https://www.instagram.com/doinmotors/" target="_blank" rel=""><img src="/imagens/instagram.png" alt="instagram"/></a>
                </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;

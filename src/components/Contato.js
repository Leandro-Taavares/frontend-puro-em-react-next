import React from "react";
import Map from "../components/Maps";


function App() {
  return (
    <main>
      <section className="section_contato">
        <div className="informacoes-contato-maps">
          <div class="informacoes-funcionamento">
            <p class="escrita-inf-contato">Contato</p>
            <p class="escrita-inf-horario">Segunda a sexta 09:00 as 19:30</p>
            <p class="escrita-inf-horario">Sabado 09:00 as 14:30</p>
            <a class="escrita-inf" href="tel:+5535130377">
              {" "}
              <img src="/imagens/telefonePreto.png" alt="Telefone" class="imgs-contato" />
              (13) 35130377
            </a>
            <a class="escrita-inf" href="tel:+551332321021">
              {" "}
              <img src="/imagens/telefonePreto.png" alt="Telefone" class="imgs-contato" />
              (13) 32321021
            </a>
            <p class="escrita-inf">
              {" "}
              <img src="/imagens/email.png" alt="Email" class="imgs-contato" />
              atendimento@doinmotors.com.br
            </p>
            <a class="fundo-verde" href="+5513997121727">
              <img src="/imagens/whatsApp.png" alt="whatsapp" class="img-whatsapp" />
              Enviar mensagem
            </a>
          </div>
          <Map smallSize={true} hideTitle={true} />
        </div>
      </section>
    </main>
  );
}

export default App;
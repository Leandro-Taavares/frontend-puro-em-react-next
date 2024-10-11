import React, { useEffect, useState } from "react";
import axios from "axios";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import CarrosAnunciados from "./CarrosAnunciados";


SwiperCore.use([Navigation, Pagination]);

const Estoque = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 532) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://leandro-taavares.github.io/frontend-puro/pagina-estoque-detalhe/data/data.json"
      )
      .then((response) => {
        const car = response.data;

        document.querySelector(".cambio p:nth-child(2)").innerHTML =
          car.transmissao;
        document.querySelector(".Ano p:nth-child(2)").innerHTML = car.ano;
        document.querySelector(".Km p:nth-child(2)").innerHTML = car.km;
        document.querySelector(".Cor p:nth-child(2)").innerHTML = car.cor;
        document.querySelector(".Troca p:nth-child(2)").innerHTML = car.troca
          ? "Sim"
          : "Não";
        document.querySelector(".Dono p:nth-child(2)").innerHTML =
          car.unico_dono ? "Sim" : "Não";
        document.querySelector(".garantia-fabrica").innerHTML = car.garantia;
        document.querySelector(".informações-texto").innerHTML =
          car.informacoes;

        const colunas = document.querySelectorAll(".itens-opcionais > div");
        let colIndex = 0;

        car.opcionais.forEach((opcional) => {
          const opcionalDiv = document.createElement("div");
          opcionalDiv.classList.add("alinha-lista");

          const img = document.createElement("img");
          img.src = "/imagens/checkOpcionais.png";
          img.alt = "check";

          const p = document.createElement("p");
          p.classList.add("texto-opcionais");
          p.innerHTML = opcional;

          opcionalDiv.appendChild(img);
          opcionalDiv.appendChild(p);

          colunas[colIndex].appendChild(opcionalDiv);
          colIndex = (colIndex + 1) % colunas.length;
        });

        const swiperWrapper = document.querySelector(".swiper-wrapper");
        swiperWrapper.innerHTML = "";

        car.imagem.forEach((imageUrl) => {
          const swiperSlide = document.createElement("div");
          swiperSlide.classList.add("swiper-slide");

          const img = document.createElement("img");
          img.src = imageUrl;
          img.alt = car.nome;

          swiperSlide.appendChild(img);
          swiperWrapper.appendChild(swiperSlide);
        });
      })
      .catch((error) => {
        console.error("Erro ao carregar os dados:", error);
      });
  }, []);

  const toggleInfo = () => {
    setIsInfoVisible((prev) => !prev); 
  };

  return (
    <div className="fundo">
      <section>
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/imagens/audi1.png" alt="FotoCarro" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imagens/audi1.png" alt="FotoCarro" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imagens/audi1.png" alt="FotoCarro" />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
        <img src="/imagens/setaMobile.png" alt="Seta-Mobile" className="seta-mobile" onClick={toggleInfo}/>
        <div className="aba-informações-carros">
          <div className="informações-carro">
            <div className="primeira-linha">
              <p className="nome-carro-informacoes">Audi A3</p>
              <p className="versão-carro">
                2.8 16V TURBO DIESEL LS CD 4X4 MANUAL
              </p>
              <div className="cambio">
                <p className="texto-bold">Câmbio</p>
                <p></p>
              </div>
              <div className="Ano">
                <p className="texto-bold">Ano</p>
                <p></p>
              </div>
              <div className="Km">
                <p className="texto-bold">KM</p>
                <p></p>
              </div>
              <div className="Cor">
                <p className="texto-bold">Cor</p>
                <p></p>
              </div>
              <div className="Troca">
                <p className="texto-bold">Aceita troca?</p>
                <p></p>
              </div>
              <div className="Dono">
                <p className="texto-bold">Único dono</p>
                <p></p>
              </div>
            </div>
            <div className="segunda-linha">
              <p className="Opcional">Opcionais</p>
              <div className="itens-opcionais">
                <div className="itens-opcionais-primeira-coluna"></div>
                <div className="itens-opcionais-segunda-coluna"></div>
                <div className="itens-opcionais-terceiro-coluna"></div>
                <div className="itens-opcionais-quarta-coluna"></div>
              </div>
            </div>
            <div className="terceira-linha">
              <p className="Garantia">Garantia e pericia</p>
              <p className="garantia-fabrica"></p>
            </div>
            <div className="quarta-linha">
              <p className="informações">Informações</p>
              <p className="informações-texto"></p>
            </div>
          </div>
          <div className={`informações-carro-2 ${isFixed ? "fixed" : ""} ${isInfoVisible ? "visible" : "hidden"}`}>
            <p className="informações-preco-carro">R$ 130.000,00</p>
            <div className="fundo-whatsapp">
              <img src="/imagens/whatsApp.png" alt="whatsapp" className="img-whatsapp" />
              <p className="texto-enviar-mensagem">Enviar mensagem</p>
            </div>
            <div className="telefone-informações">
              <img src="/imagens/telefonePreto.png" alt="telefone" />
              <p className="telefone-texto">(13) 3327-8001</p>
            </div>
            <div className="localizacao">
              <img src="/imagens/localizacaoMapa.png" alt="marcacao" />
              <p className="texto-localizacao">Onde estamos?</p>
            </div>
            <p className="veiculo-loja">Este veiculo esta na loja</p>
            <div className="endereco">
              <img src="/imagens/localizacaoMapa.png" alt="marcacao" />
              <p className="predio">Doin Motors - Shopping The Blue</p>
            </div>
            <div className="fundo-avalie-carro">
              <img
                src="/imagens/simboloDinheiro.png"
                alt="simbolo-dinheiro"
                className="img-dinheiro"
              />
              <p className="texto-avalie-carro">Avalie seu carro</p>
            </div>
          </div>
          <div className="carros-semelhantes">
          <CarrosAnunciados
            to="/DetalhePage"
            id="carros-anunciados carros-anunciados-detalhe"
            nome="Audi A3"
            transmissao="2.0 Manual"
            ano="2017/2018"
            imagem="https://leandro-taavares.github.io/frontend-puro/pagina-estoque/imagens-site/Foto-Carro.png"
            km={50000}
            preco={130000.0}
            page="detalhe"
          />
          <CarrosAnunciados
            to="/DetalhePage"
            id="carroscarros-anunciados carros-anunciados-detalhe"
            nome="Audi A3"
            transmissao="2.0 Manual"
            ano="2017/2018"
            imagem="https://leandro-taavares.github.io/frontend-puro/pagina-estoque/imagens-site/Mustang-GT2024.jpg"
            km={50000}
            preco={130000.0}
            page="detalhe"
          />
          <CarrosAnunciados
            to="/DetalhePage"
            id="carroscarros-anunciados carros-anunciados-detalhe"
            nome="Audi A3"
            transmissao="2.0 Manual"
            ano="2017/2018"
            imagem="https://leandro-taavares.github.io/frontend-puro/pagina-estoque/imagens-site/Fiat-Toro.jpg"
            km={50000}
            preco={130000.0}
            page="detalhe"
          />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Estoque;
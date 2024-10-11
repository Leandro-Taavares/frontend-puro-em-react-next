import React, { useState, useEffect } from "react"; 
import axios from "axios";
import CarrosAnunciados from "./CarrosAnunciados"


const Estoque = () => {
    const [filtroAberto, setFiltroAberto] = useState(false);
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        axios.get("https://leandro-taavares.github.io/frontend-puro/pagina-estoque/Data/data.json")
          .then(response => {
            setCarros(response.data.resultado);
          })
          .catch(error => {
            console.error("Erro ao buscar os dados", error);
          });
      }, []);

    const abrirEFecharModal = () => {
        setFiltroAberto(!filtroAberto);
        if (!filtroAberto) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    return (
               <div className="estoque-page">
                <section className="section">
                    <div className={`aba-filtro ${filtroAberto ? 'filtro_aberto__ativo' : ''}`}>
                        <div className="marca-carros">
                            <p className="texto-marca-carros">Marca de carro</p>
                            <div className="fechar-filtro">
                                <p onClick={abrirEFecharModal} className="fechar-filtro-mobile-x"></p>
                                <p onClick={abrirEFecharModal} className="fechar-filtro-mobile-x-2"></p>
                            </div>
                        </div>
                        <div className="logo-marcas">
                            <div className="marca marca-1">
                                <img alt="iconeMarca" src="/imagens/logoBmw.png" className="logo-bmw1" />
                                <p className="texto-bmw1">BMW</p>
                            </div>
                            <div className="marca marca-padding marca-2">
                                <img alt="iconeMarca" src="/imagens/logoAudi.png" className="logo-audi1" />
                                <p className="texto-audi1">AUDI</p>
                            </div>
                            <div className="marca marca-padding marca-3">
                                <img
                                    alt="iconeMarca"
                                    src="/imagens/logoMercedes.png"
                                    className="logo-mercedes1"
                                />
                                <p className="texto-mercedes1">Mercedes</p>
                            </div>
                            <div className="marca marca-padding marca-4">
                                <img alt="iconeMarca" src="/imagens/logoJeep.png" className="logo-jeep1" />
                                <p className="texto-jeep1">JEEP</p>
                            </div>
                            <div className="marca marca-padding marca-margin marca-5">
                                <img alt="iconeMarca" src="/imagens/logoBmw.png" className="logo-bmw2" />
                                <p className="texto-bmw2">BMW</p>
                            </div>
                            <div className="marca marca-padding marca-margin marca-6">
                                <img alt="iconeMarca" src="/imagens/logoAudi.png" className="logo-audi2" />
                                <p className="texto-audi2">AUDI</p>
                            </div>
                            <div className="marca marca-padding marca-margin marca-7">
                                <img
                                    alt="iconeMarca"
                                    src="/imagens/logoMercedes.png"
                                    className="logo-mercedes2"
                                />
                                <p className="texto-mercedes2">Mercedes</p>
                            </div>
                            <div className="marca marca-padding marca-margin marca-8">
                                <img src="/imagens/logoJeep.png" alt="iconeMarca" className="logo-jeep2" />
                                <p className="texto-jeep2">JEEP</p>
                            </div>
                        </div>
                        <div className="border"></div>
                        <div className="segunda-aba">
                            <p className="filtro-tipo">Tipo</p>
                            <div className="filtros-usados-novos">
                                <div className="filtro-novos">
                                    <input
                                        type="checkbox"
                                        name="Novos"
                                        id="novos"
                                        className="checkboxs"
                                    />
                                    <label for="novos" className="usados-novos-texto">
                                        Novos
                                    </label>
                                </div>
                                <div className="filtro-usados">
                                    <input
                                        type="checkbox"
                                        name="Usados"
                                        id="usados"
                                        className="checkboxs"
                                    />
                                    <label for="usados" className="usados-novos-texto">
                                        Usados
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="border"></div>
                        <div className="terceira-aba">
                            <p className="filtro-ano">Ano</p>
                            <input
                                type="text"
                                name="de"
                                id="de"
                                className="filtro-de"
                                placeholder="de"
                            />
                            <input
                                type="text"
                                name="ate"
                                id="ate"
                                className="filtro-ate"
                                placeholder="até"
                            />
                            <p className="exemplo-esq">ex: 2014</p>
                            <p className="exemplo-dir">ex: 2019</p>
                        </div>
                        <div className="border"></div>
                        <div className="quarta-aba">
                            <p className="filtro-preco">Preço</p>
                            <input
                                type="text"
                                name="de"
                                id="de1"
                                className="filtro-de"
                                placeholder="de"
                            />
                            <input
                                type="text"
                                name="ate"
                                id="ate1"
                                className="filtro-ate"
                                placeholder="até"
                            />
                            <p className="exemplo-esq">ex: 10.000</p>
                            <p className="exemplo-dir">ex: 20.000</p>
                        </div>
                        <div className="border"></div>
                        <div className="quinta-aba">
                            <p className="filtro-quilometragem">Quilometragem</p>
                            <input
                                type="text"
                                name="de"
                                id="de2"
                                className="filtro-de"
                                placeholder="de"
                            />
                            <input
                                type="text"
                                name="ate"
                                id="ate2"
                                className="filtro-ate"
                                placeholder="até"
                            />
                            <p className="exemplo-esq">ex: 5.000</p>
                            <p className="exemplo-dir">ex: 15.000</p>
                        </div>
                        <div className="border"></div>
                        <div className="sexta-aba">
                            <p className="filtro-combustivel"></p>;
                            <div className="filtros-usados-novos">
                                <div className="filtro-alcool">
                                    <input
                                        type="checkbox"
                                        name="alcool"
                                        id="alcool"
                                        className="checkboxs"
                                    />
                                    <label for="alcool" className="usados-novos-texto">
                                        Alcool
                                    </label>
                                </div>
                                <div className="filtro-diesel">
                                    <input
                                        type="checkbox"
                                        name="diesel"
                                        id="diesel"
                                        className="checkboxs"
                                    />
                                    <label for="diesel" className="usados-novos-texto">
                                        Diesel
                                    </label>
                                </div>
                                <div className="filtro-eletrico">
                                    <input
                                        type="checkbox"
                                        name="eletrico"
                                        id="eletrico"
                                        className="checkboxs"
                                    />
                                    <label for="eletrico" className="usados-novos-texto">
                                        Eletrico
                                    </label>
                                </div>
                                <div className="filtro-gasolina">
                                    <input
                                        type="checkbox"
                                        name="gasolina"
                                        id="gasolina"
                                        className="checkboxs"
                                    />
                                    <label for="gasolina" className="usados-novos-texto">
                                        Gasolina
                                    </label>
                                </div>
                                <div className="filtro-hibrido">
                                    <input
                                        type="checkbox"
                                        name="hibrido"
                                        id="hibrido"
                                        className="checkboxs"
                                    />
                                    <label for="hibrido" className="usados-novos-texto">
                                        Hibrido
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aba-estoque">
                        <div className="home-estoque">
                            <p>Home - Nosso estoque</p>
                        </div>
                        <div className="filtro-mobile" onClick={abrirEFecharModal}>
                            <img src="/imagens/filtrarMobile.png" alt="icone-filtro" className="filtrar-img-mobile" />
                        </div>
                        <div className="estoque-carros">
                            {carros.map((car) => (
                                <CarrosAnunciados
                                    key={car.id}
                                    to="/DetalhePage"
                                    id={car.id}
                                    nome={car.nome}
                                    transmissao={car.transmissao}
                                    ano={car.ano}
                                    imagem={car.imagem}
                                    km={car.km}
                                    preco={car.preco}
                                    page="product"
                                />
                            ))}
                        </div>
                    </div>
                </section >
            </div >
    );
};

export default Estoque;
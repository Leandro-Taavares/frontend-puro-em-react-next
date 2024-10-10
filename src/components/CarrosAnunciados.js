import React from "react";
import Link from "next/link";

const CarrosAnunciados = ({ nome = "", to = "", id = "", transmissao = "", imagem ="", ano = "", km = "", preco = "", page }) => {
  return (
    <Link href={to} key={id}>
      <div className={`carros-anunciados ${page === 'detalhe' ? 'carros-anunciados-detalhe' : ''}`}>
        <img
          src={imagem}
          alt=""
          className={`foto-carro-class ${page === 'detalhe' ? 'foto-carro-class-detalhe' : ''}`}
        />
        <div className="descricao-carro">
          <p className="nome-carro">{nome}</p>
          <p className="modelo-carro">{transmissao}</p>
          <p className="preco-carro">
            R${" "}
            {preco.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="ano-carro">{ano}</p>
          <p className="km-carro">{km.toLocaleString("pt-BR")} km</p>
          <div className="borda-ver-mais">
            <p className="ver-mais">VER MAIS</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarrosAnunciados;
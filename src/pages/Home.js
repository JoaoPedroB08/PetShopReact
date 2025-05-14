import React from "react";
import Banner from "../components/Banner";
import Servico from "../components/Servico";
import banhoTosa from "../imagens/banhoTosa.jpg";
import vacinaCachorro from "../imagens/vacina-cachorro.jpg";
import adestramento from "../imagens/adestramento.jpg";
import hotelResort from "../imagens/hotel-para-cachorros.jpg";
import TituloSecao from "../components/TituloSecao";

const Home = () => {
	return (
		<div>
			<Banner/>

			<section className='section d-flex py-5'>
			<Servico imagemServico={ banhoTosa } tituloImagem="Banho e Tosa para Pets" tituloServico="Banho e Tosa" />
			<Servico imagemServico={ vacinaCachorro } tituloImagem="Pet care para pets" tituloServico="Pet Care" />
			<Servico imagemServico={ adestramento } tituloImagem="Adestramento para pets" tituloServico="Adestramento" />
			<Servico imagemServico={ hotelResort } tituloImagem="Hotel e resorts para pets" tituloServico="Hotel Resort" />
			</section>

			<TituloSecao />
		</div>

	);
};

export default Home;

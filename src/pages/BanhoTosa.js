import React from "react";
import ContentImgLeft from "../components/ContentImgLeft";
import Rotulo from "../components/Rotulo";
import banhoTosa from "../imagens/banhoTosa.jpg";
import TituloSecao from "../components/TituloSecao";
import ContentImgRight from "../components/ContentImgRight";
import vacinaCao from "../imagens/vacina-cachorro.jpg";

const BanhoTosa = () => {
	return (
		<div>
			<Rotulo textRotulo='Banho e Tosa' />

			<ContentImgLeft imgContentL={ banhoTosa } altContentL="Imagem de cachorro em banho e tosa" />

			<TituloSecao textTitulo="🐈 PET CARE 🐾" />

			<ContentImgRight imgContentL={ vacinaCao } altContentL="Imagem de cachorro tomando vacina"/>

		</div>
	);
};

export default BanhoTosa;

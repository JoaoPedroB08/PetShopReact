import React from "react";

import Rotulo from "../components/Rotulo";
import StaticBanner from "../components/StaticBanner";
import ContentPhotos from "../components/ContentPhotos";
import FAQ from "../components/FAQ";

import bannerImagem from "../imagens/adestramento/banner-adestramento.jpg";
import foto1 from '../imagens/adestramento/adestramento1.jpg';
import foto2 from '../imagens/adestramento/adestramento2.jpg';
import foto3 from '../imagens/adestramento/adestramento3.jpg';
import foto4 from '../imagens/adestramento/adestramento4.jpg';
import foto5 from '../imagens/adestramento/adestramento5.jpg';

const Adestramento = () => {
	return (
		<div>
			<Rotulo textRotulo='Adestramento' />
			<StaticBanner bannerAdestramento={bannerImagem} />
            <ContentPhotos 
                img1={foto1}
                img2={foto2}
                img3={foto3}
                img4={foto4}
                img5={foto5}
            />
            <FAQ />
		</div>
	);
};

export default Adestramento;
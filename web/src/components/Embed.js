import React from 'react';
import { EmbedCont, Img, News } from './MainComponents';
import Favourites from './Favourites';

const images = [
  'https://media.gazetadopovo.com.br/2019/08/16183857/agneciabrasil-960x540.jpg',
  'https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2020/4/JDqC1x0Ko0QDEFrabsD4.jpg',
  'https://cdn.diarioonline.com.br/img/Artigo-Destaque/580000/GIOVANA_00586486_0_.jpg'
]

const news = [
  'https://g1.globo.com/pr/parana/noticia/2020/05/02/ex-ministro-sergio-moro-presta-depoimento-de-mais-de-8-horas-na-pf-em-curitiba.ghtml',
  'https://globoesporte.globo.com/futsal/noticia/ex-jogador-de-futsal-de-fla-bota-e-vasco-morre-de-covid-19-aos-44-anos.ghtml',
  'https://extra.globo.com/famosos/beleza-da-filha-de-andrea-sorvetao-chama-atencao-na-web-giovanna-tem-21-anos-e-atriz-24405069.html'
]

function Embed() {
    return (
      <>
        <EmbedCont>
          <Img 
            src={images[0]}
            alt="Notícia" 
          />
          <h4>
            <News 
              style={{
                fontSize: 16,
                textTransform: 'uppercase', 
                textDecoration: 'bold', 
                borderBottom: '1px solid #FF0000' 
              }}
              target="_blank"
              href={news[0]}
            >
              Ex-ministro Sergio Moro presta depoimento de mais de 8 horas na PF, em Curitiba
            </News>
          </h4>
        </EmbedCont>
        <Favourites />
        <EmbedCont>
          <Img 
            src={images[1]} 
            alt="Notícia"
          />
          <h4>
            <News 
              style={{
                fontSize: 16,
                textTransform: 'uppercase', 
                textDecoration: 'bold', 
                borderBottom: '1px solid #FF0000' 
              }}
              target="_blank"
              href={news[1]}
            >
              Coronavírus: ex-jogador de futsal de Flamengo, Botafogo e Vasco morre aos 44 anos
            </News>
          </h4>
        </EmbedCont>
        <Favourites />
        <EmbedCont>
          <Img 
            src={images[2]} 
            alt="Notícia"
          />
          <h4>
          <News 
            style={{
              fontSize: 16,
              textTransform: 'uppercase', 
              textDecoration: 'bold', 
              borderBottom: '1px solid #FF0000' 
            }}
            target="_blank"
            href={news[2]}
          >
          Beleza da filha de Andrea Sorvetão chama atenção na web; Giovanna tem 21 anos e é atriz
          </News>
        </h4>
      </EmbedCont>
      <Favourites />
    </>
  );
}
 
export default Embed;
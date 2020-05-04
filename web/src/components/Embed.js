import React from 'react';
import { EmbedCont, Img, XLink } from './MainComponents';
import Favourites from './Favourites';

function Embed() {
    return (
      <>
        <EmbedCont>
          <Img 
            src={'https://media.gazetadopovo.com.br/2019/08/16183857/agneciabrasil-960x540.jpg'}
            alt="Notícia" 
          />
          <h4>
            <XLink 
              style={{
                fontSize: 16,
                textTransform: 'uppercase', 
                textDecoration: 'bold', 
                borderBottom: '1px solid #FF0000' 
              }}
              to="http://g1.globo.com/pr/parana/noticia/2020/05/02/
              ex-ministro-sergio-moro-presta-depoimento-de-mais-de-8-horas-na-pf-em-curitiba.ghtml"
            >
              Ex-ministro Sergio Moro presta depoimento de mais de 8 horas na PF, em Curitiba
            </XLink>
          </h4>
        </EmbedCont>
        <Favourites />
        <EmbedCont>
          <Img 
            src='https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2020/4/JDqC1x0Ko0QDEFrabsD4.jpg' 
            alt="Notícia"
          />
          <h4>
            <XLink 
              style={{
                fontSize: 16,
                textTransform: 'uppercase', 
                textDecoration: 'bold', 
                borderBottom: '1px solid #FF0000' 
              }}
              to="https://globoesporte.globo.com/futsal/noticia/
                ex-jogador-de-futsal-de-fla-bota-e-vasco-morre-de-covid-19-aos-44-anos.ghtml"
            >
              Coronavírus: ex-jogador de futsal de Flamengo, Botafogo e Vasco morre aos 44 anos
            </XLink>
          </h4>
        </EmbedCont>
        <Favourites />
        <EmbedCont>
          <Img 
            src='https://cdn.diarioonline.com.br/img/Artigo-Destaque/580000/GIOVANA_00586486_0_.jpg' 
            alt="Notícia"
          />
          <h4>
          <XLink 
            style={{
              fontSize: 16,
              textTransform: 'uppercase', 
              textDecoration: 'bold', 
              borderBottom: '1px solid #FF0000' 
            }}
            to="https://extra.globo.com/famosos/beleza-da-filha-de-andrea-sorvetao-
              chama-atencao-na-web-giovanna-tem-21-anos-e-atriz-24405069.html"
          >
          Beleza da filha de Andrea Sorvetão chama atenção na web; Giovanna tem 21 anos e é atriz
          </XLink>
        </h4>
      </EmbedCont>
      <Favourites />
    </>
  );
}
 
export default Embed;
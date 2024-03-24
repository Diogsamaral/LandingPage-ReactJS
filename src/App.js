
import './App.css';

import Header from './components/Header'
import Section from './components/Section'
import ListItem from './components/ListItem'


const gameListData = [
  {
    url: "https://www.twitch.tv/directory/category/dota-2" ,
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29595-144x192.jpg" ,
    alt: "Imagem do jogo Dota 2",
  },
  {  
    url: "https://www.twitch.tv/directory/category/counter-strike",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399-144x192.jpg" ,
    alt: "Imagem do jogo Counter-Strike",
  },  
  {
    url: "https://www.twitch.tv/directory/category/dungeon-defenders",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29232_IGDB-144x192.jpg" ,
    alt: "Imagem do jogo Dungeon Defenders",
  },
  {
    url: "https://www.twitch.tv/directory/category/fifa-23",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/1745202732_IGDB-144x192.jpg", 
    alt: "Imagem do jogo Fifa 23",
  },
]


const channelListData = [
  
  {
    url: "https://www.twitch.tv/gaules",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/1f4ff3f0-3ca3-4344-96f5-40993325b886-profile_image-70x70.png", 
    alt: "Imagem de Gaules",
  },
  {
    url: "https://www.twitch.tv/esl_dota2",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/45d4a988-1fb2-486e-ab36-7d94f754564f-profile_image-70x70.png", 
    alt: "Imagem de Esl_dota2",
  },
  {
    url: "https://www.twitch.tv/baiano",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/05396d4d-7af0-4b9b-8c7e-c03563b4d448-profile_image-70x70.png", 
    alt: "Imagemd de Baiano",
  },
]

const socialListData = [
  
  {
    url: "https://www.twitch.tv/diogolok",
    imageUrl: "/assets/twitch.svg",  
  },
  {                              
    url: "https://twitter.com/diogsninja",
    imageUrl: "/assets/twitter.svg",
  },
  {      
    url: "https://www.instagram.com/diogsamaral/",
    imageUrl: "/assets/instagram.svg" ,
  },
  {      
    url: "https://www.youtube.com/c/DiogoMoog",
    imageUrl: "/assets/youtube.svg",
  },
]



function App() {
  return (
    <div className="App">
    {/* Incluir Header aqui */}
    <Header/>

    {/* Incluir Main aqui */}
    <main>
    {/* Incluir Section aqui */}
      <Section 
        title="Meus jogos"
        subtitle="Os games que eu mais curto jogar!"
        className="games-list"
      >
        {/* itens da lista */}
        {
          gameListData.map(function(item) {
            return (  
              <ListItem 
                url={item.url} 
                imageUrl={item.imageUrl} 
                alt={item.alt} 
              />
            )
          })
        }

      </Section>
      <Section 
        title="Canais e streamers"
        subtitle="Lista de canais e transmissões que não perco!"
        className="channel-list"
      >
        {/* itens da lista */}
        {
          channelListData.map(function(item) {
            return (  
              <ListItem 
                url={item.url} 
                imageUrl={item.imageUrl} 
                alt={item.alt} 
              />
            )
          })
        }

      </Section>
      
      <Section
        title="Minhas redes"
        subtitle="Se conecte comigo agora mesmo!"
        className="social-list"
      >
        {/* itens da lista */}
        {
          socialListData.map(function(item) {
            return (
              <ListItem
                url={item.url} 
                imageUrl={item.imageUrl} 
                alt={item.alt} 
              />
            )

          })
        }

      </Section>

    </main>
    

    {/* Incluir Footer aqui */}
    </div>
  );
}

export default App;

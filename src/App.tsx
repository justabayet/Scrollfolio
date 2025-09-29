import { useRef } from 'react';
import './App.css'
import Panel from './Panel'
import arveyeKikk from './assets/videos/arveye-kikk.mp4'
import arveyeFoundation from './assets/videos/arveye-foundation.mp4'
import arveyeStoele from './assets/videos/arveye-stoele.mp4'
import arveyeThread from './assets/videos/arveye-thread.mp4'
import arveyeWallpaper from './assets/videos/arveye-wallpaper.mp4'
import shaderRiver from './assets/videos/shader-river.mp4'
import "@fontsource/lexend-deca/100.css"
import arrowDown from './assets/arrow-down.png'

import Video from './Video';
import { EMAIL_ADDRESS } from './const';

function App() {
  const topAnchorRef = useRef<HTMLDivElement>(null)
  const resumeAnchorRef = useRef<HTMLDivElement>(null)
  const firstElementRef = useRef<HTMLDivElement>(null)

  return (
    <div style={{
      scrollSnapType: "both mandatory",
      scrollSnapStop: "always",
      overflow: "scroll",
      height: "100dvh"
    }}>
      <div ref={topAnchorRef}></div>
      <Panel topAnchorRef={topAnchorRef} resumeAnchorRef={resumeAnchorRef}>
        <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient( #0f293eff, #180406ff )',
          color: '#ffffffd4',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Lexend Deca'
        }}>
          <div>
            <h1>Anthony Bayet</h1>
            <h2>Creative Developer</h2>
            <p>Belgium 🇧🇪 {EMAIL_ADDRESS}</p>
          </div>
          <div style={{ height: '30%' }}></div>
        </div>

        <div
          onClick={() => {
            if (firstElementRef.current == null) return
            firstElementRef.current.scrollIntoView({ behavior: 'smooth' })
          }}
          style={{
            backgroundColor: '#ffffff8f',
            borderRadius: '50%',
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            width: '48px',
            height: '48px',
            transform: 'translate(-50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <img style={{ paddingTop: 3 }} src={arrowDown} width={28} height={28} />
        </div>
      </Panel>
      <Panel title='Arveye - Destinêye' url='https://proximity.justabayet.com/?view=thread_three'
        description={`The red thread of fate is an invisible red cord connecting you to the person you are destined to be with, regardless of place, time, or context. The thread may stretch and bend but never break. 

Destinêye reveals this invisible thread, making the connection more tangible. It shows the thread emanating from you and going towards the person you are connected to.

Even if the project has been inspired by the original East Asian myth, there is a significant difference between the myth and this representation. In the myth, fate decides who you get bound to. This project cannot know what fate beholds for you; instead, as people have to say yes for life during a marriage, you get to decide who you are bonded to in Destinêye.

I personally don’t believe in fate, but I do believe in relationships built out of patience and genuine love. That’s why such a project, giving you the agency to recognize on your own the value and importance of your relationship, resonates better with my own beliefs.

This project has been built on top of a previous iteration, Arveye: Foundation, providing the toolbox to connect users, leveraging the internal compass of modern devices, and ultimately getting the relative position between users. Once again displaying the power of software-based art sharing a common foundation, with little to no tweaking necessary, and allowing to create completely different artworks.`}
        topAnchorRef={topAnchorRef} resumeAnchorRef={resumeAnchorRef}>
        <div ref={firstElementRef} />
        <Video src={arveyeThread} />
      </Panel>
      <Panel title='Arveye - Aweye' url='https://proximity.justabayet.com/?view=kikk'
        description={`Exploring new places is fantastic but can be overwhelming. With so much to see and so little guidance, it is easy to worry about missing something.

Aweye is here to turn modern exploration into a gamified experience and a dynamic artwork, guiding you through the streets of Barcelona, never missing a glimpse of its Spanish charm, and returning with an eternal digital souvenir, or accompanying you in the Universal Exposition across the many pavilions, piece by piece, assembling an artwork as a symbol of unity and mutual respect.

In fact, Aweye is a gamified compass, guiding you to collect QR codes, each of them unlocking a new destination and a part of the artwork. Each artwork represents the place you are visiting, being uniquely tailored to reflect the character and personality of that place.

And this is only the beginning. The project still has many possibilities for new directions and creative depths to explore. Additionally, built upon Arveye: Foundation, it demonstrates the adaptability and reusability of software. Starting as a purely artistic project, it’s now revealing very practical applications as well.

PS: About this specific representation, it is a Voronoi diagram, which is used to represent intricate biological structures such as cells. It reflects the notion that every human creation and celebration, be it festivities, fascinating architectures, or cities, they all are like building blocks of life.`}
        topAnchorRef={topAnchorRef} resumeAnchorRef={resumeAnchorRef}>
        <Video src={arveyeKikk} />
      </Panel>
      <Panel title='Arveye - Solrece'
        topAnchorRef={topAnchorRef} resumeAnchorRef={resumeAnchorRef}
        description={`We are all solar systems of our own. Each of us is a star, casting our personal light on the people we are connected to. At the same time, every person we know reflects their own light back, shaping who we are. These symbiotic exchanges of influence are represented here as a solar system: you at the center, and your loved ones as the planets that always remain part of your orbit.

Built on Arveye: Foundation, Arveye: Sistinme is the first representation exploring how regardless of distance, the people we know continue to influence our steps and are influenced by us. The connection to the real world geolocation of people helps keep a more physical sense of connection with those who matter most.

No Matter Where`}>
        <Video src={arveyeStoele} />
      </Panel>
      <Panel topAnchorRef={topAnchorRef} resumeAnchorRef={resumeAnchorRef} description='Just shaders. No AI. No edits.'>
        <Video src={shaderRiver} />
      </Panel>
      <Panel title='Arveye - Wallpaper'
        topAnchorRef={topAnchorRef} resumeAnchorRef={resumeAnchorRef}
        description={`A painting on your wall doesn't ask for your attention, it simply exists there, catching your eye during morning coffee or late-night thoughts. 

Most digital art forms are intention craving, they need users to deliberately make decisions to experience the artwork. Large digital art exhibitions create breathtaking moments but demand you to go there and possibly buy the ticket. Web art breaks accessibility barriers, yet still requires intention. You must choose to click that link, scan that code.

Arveye: Wallpaper changes this entirely. By becoming your phone wallpaper, it appears each time you unlock your phone, no conscious decision needed. Like stumbling upon street art during a casual walk, the artwork encounters you naturally as you navigate your day.

Technical notes: Due to current iOS limitations, highly dynamic wallpapers like this are only available on Android platforms. The wallpaper optimizes battery usage by entering sleep mode when not actively displayed. Sensor data is cached locally to maintain smooth performance and ensure the visual remains responsive even during brief sensor delays.
`}>
        <Video src={arveyeWallpaper} />
      </Panel>
      <Panel title='Arveye - Foundation'
        description={`Many people have to live far from their loved ones, isolated. Sometimes to chase a dream, to study, to escape or to discover the world. But whatever the reason, distance often creates the perfect conditions for loneliness to grow and quietly take over.

This project is trying to bring a spark of light in those moments. 

It lets two people connect through a one-time sharing link. Once connected, it shares each other’s geolocation and shows in which direction your friend is, by using modern phone’s built-in sensors: gyroscope, magnetometer and accelerometer.

This first implementation lays the foundation by implementing the core principles: connecting people, sharing geolocation, getting phone absolute direction. Future development will build on this foundation to explore various ways of representing these connections. Finding different, simple yet meaningful ways to make distant people feel present again.`}
        topAnchorRef={topAnchorRef} resumeAnchorRef={resumeAnchorRef}>
        <Video src={arveyeFoundation} />
      </Panel>
      <Panel topAnchorRef={topAnchorRef} resumeAnchorRef={resumeAnchorRef}>
        <div ref={resumeAnchorRef}></div>
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Lexend Deca',
          background: '#DDD',
          color: "#333"
        }}>
          <div>
            <h1>Resume</h1>
            <h2>Work in Progress</h2>
          </div>
        </div>
      </Panel>
    </div>
  )
}

export default App

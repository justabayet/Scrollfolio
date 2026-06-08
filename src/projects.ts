import photoGallery from './assets/videos/photo-gallery.mp4'
import arveyeKikk from './assets/videos/arveye-kikk.mp4'
import arveyeStoele from './assets/videos/arveye-stoele.mp4'
import arveyeThread from './assets/videos/arveye-thread.mp4'
import arveyeWallpaper from './assets/videos/arveye-wallpaper.mp4'
import shaderRiver from './assets/videos/shader-river.mp4'
import arveyeChristmas from './assets/videos/arveye-christmas.mp4'
import mosaic from './assets/videos/mosaic.mp4'

import photoGalleryBackground from './assets/thumbnails/photo-gallery.webp'
import arveyeKikkBackground from './assets/thumbnails/arveye-kikk.webp'
import arveyeStoeleBackground from './assets/thumbnails/arveye-stoele.webp'
import arveyeThreadBackground from './assets/thumbnails/arveye-thread.webp'
import arveyeWallpaperBackground from './assets/thumbnails/arveye-wallpaper.webp'
import shaderRiverBackground from './assets/thumbnails/shader-river.webp'
import arveyeChristmasBackground from './assets/thumbnails/arveye-christmas.webp'
import mosaicBackground from './assets/thumbnails/mosaic.webp'

interface Project {
    title: string
    url?: string
    description: string
    video: string
    background: string
    alt: string
}

export const projects: Project[] = [
    {
        title: 'Arveye Destinêye - Web',
        url: 'https://proximity.justabayet.com/?view=thread_three',
        description: `The red thread of fate is an invisible red cord connecting you to the person you are destined to be with, regardless of place, time, or context. The thread may stretch and bend but never break. 

Destinêye reveals this invisible thread, making the connection more tangible. It shows the thread emanating from you and going towards the person you are connected to.

Even if the project has been inspired by the original East Asian myth, there is a significant difference between the myth and this representation. In the myth, fate decides who you get bound to. This project cannot know what fate beholds for you; instead, as people have to say yes for life during a marriage, you get to decide who you are bonded to in Destinêye.

I personally don’t believe in fate, but I do believe in relationships built out of patience and genuine love. That’s why such a project, giving you the agency to recognize on your own the value and importance of your relationship, resonates better with my own beliefs.

This project has been built on top of a previous iteration, Arveye: Foundation, providing the toolbox to connect users, leveraging the internal compass of modern devices, and ultimately getting the relative position between users. Once again displaying the power of software-based art sharing a common foundation, with little to no tweaking necessary, and allowing to create completely different artworks.`,
        video: arveyeThread,
        background: arveyeThreadBackground,
        alt: 'Arveye Destinêye'
    },
    {
        title: 'Digital Photo Gallery',
        url: 'https://rain-drops.justabayet.com/',
        description: `Photos by Tristan Haquenne.`,
        video: photoGallery,
        background: photoGalleryBackground,
        alt: 'Digital Photo Gallery - Photos by Tristan Haquenne'
    },
    {
        title: 'Arveye Christmas 🎄 - Web',
        url: 'https://christmas.justabayet.com/?couz=48.853%2C2.348%2CGrandma+%26+Grandpa%7C47.071%2C3.003%2CMom+%26+Dad%7C35.677%2C139.764%2CMe%7C41.893%2C12.483%2CNana%7C-33.870%2C151.208%2CBro',
        description: `Christmas is the occasion to gather with the people we care for. But sometimes life, career, distance get in the way.
We end up scattered around the globe, physically far from home. Arveye Christmas helps connect the dots between us, no matter where we are on the globe. `,
        video: arveyeChristmas,
        background: arveyeChristmasBackground,
        alt: 'Arveye Christmas'
    },
    {
        title: 'Mosaic - Android Wallpaper',
        url: 'https://www.linkedin.com/posts/anthony-bayet_how-do-you-bring-digital-art-home-it-feels-activity-7417158615775485952-uG9a?utm_source=share&utm_medium=member_desktop&rcm=ACoAACsdOWMBcHv7TS920yUrZPFfSf0qmKOaBgc',
        description: `How do you bring digital art home?

It feels unfair that when you fall in love with a painting, you can buy it and make it part of your everyday life. But with digital art, it’s not that easy. You have to remember the URL, find a forgotten app buried in a folder called “art”… and in the end it never really becomes part of your daily background the way a painting does.

I wanted to change that.

My first idea was physical digital frames powered by tiny computers, hanging on your wall like living paintings. But they would be too expensive and not very accessible, which is not my goal here.

Then I realized that home is more than our house. In the 21st century, we started building digital homes, dematerialized places that felt like personal ones. Every day, we open our smartphones, scroll social media, listen to music, answer messages. We customize the interior, install apps, arrange them, put them in folders, we change the wallpapers. That becomes part of our digital home.

Wallpapers are the entry point to bring digital art in our everyday life. Consciously or not, we see our phone wallpapers countless times every day. And on Android in particular, they’re incredibly powerful: they can be alive, reactive, contextual.

Walls are great for physical paintings.
Home screen wallpapers are perfect for digital art.

A few months ago, I released Arveye, a wallpaper that uses APIs, geolocation and phone orientation to create an interactive artwork.

Today I’m sharing Mosaic.

It uses deterministic noise so that two separate devices can install it, sync it, and the animation will always flow from one to the other. As if they were connected, without any actual connection.

Looking at it feels like watching a single stream of water flow. You are seeing one part of the movement, and someone who matters to you, somewhere else on the planet, is seeing the next. Your screens are two windows looking out at the same passing river.

Technology: Opengl ES for high performance animation.`,
        video: mosaic,
        background: mosaicBackground,
        alt: 'Mosaic'
    },
    {
        title: 'Arveye Aweye - Web',
        url: 'https://proximity.justabayet.com/?view=kikk',
        description: `Exploring new places is fantastic but can be overwhelming. With so much to see and so little guidance, it is easy to worry about missing something.

Aweye is here to turn modern exploration into a gamified experience and a dynamic artwork, guiding you through the streets of Barcelona, never missing a glimpse of its Spanish charm, and returning with an eternal digital souvenir, or accompanying you in the Universal Exposition across the many pavilions, piece by piece, assembling an artwork as a symbol of unity and mutual respect.

In fact, Aweye is a gamified compass, guiding you to collect QR codes, each of them unlocking a new destination and a part of the artwork. Each artwork represents the place you are visiting, being uniquely tailored to reflect the character and personality of that place.

And this is only the beginning. The project still has many possibilities for new directions and creative depths to explore. Additionally, built upon Arveye: Foundation, it demonstrates the adaptability and reusability of software. Starting as a purely artistic project, it’s now revealing very practical applications as well.

PS: About this specific representation, it is a Voronoi diagram, which is used to represent intricate biological structures such as cells. It reflects the notion that every human creation and celebration, be it festivities, fascinating architectures, or cities, they all are like building blocks of life.`,
        video: arveyeKikk,
        background: arveyeKikkBackground,
        alt: 'Arveye Aweye'
    },
    {
        title: 'Arveye Solrece - Web',
        description: `We are all solar systems of our own. Each of us is a star, casting our personal light on the people we are connected to. At the same time, every person we know reflects their own light back, shaping who we are. These symbiotic exchanges of influence are represented here as a solar system: you at the center, and your loved ones as the planets that always remain part of your orbit.

Built on Arveye: Foundation, Arveye: Sistinme is the first representation exploring how regardless of distance, the people we know continue to influence our steps and are influenced by us. The connection to the real world geolocation of people helps keep a more physical sense of connection with those who matter most.

No Matter Where`,
        video: arveyeStoele,
        background: arveyeStoeleBackground,
        alt: 'Arveye Solrece'
    },
    {
        title: 'River - WebGL',
        description: 'Just shaders. No AI. No edits.',
        video: shaderRiver,
        background: shaderRiverBackground,
        alt: 'Shaders of a river'
    },
    {
        title: 'Arveye Wallpaper - Android Wallpaper',
        description: `A painting on your wall doesn't ask for your attention, it simply exists there, catching your eye during morning coffee or late-night thoughts. 

Most digital art forms are intention craving, they need users to deliberately make decisions to experience the artwork. Large digital art exhibitions create breathtaking moments but demand you to go there and possibly buy the ticket. Web art breaks accessibility barriers, yet still requires intention. You must choose to click that link, scan that code.

Arveye: Wallpaper changes this entirely. By becoming your phone wallpaper, it appears each time you unlock your phone, no conscious decision needed. Like stumbling upon street art during a casual walk, the artwork encounters you naturally as you navigate your day.

Technical notes: Due to current iOS limitations, highly dynamic wallpapers like this are only available on Android platforms. The wallpaper optimizes battery usage by entering sleep mode when not actively displayed. Sensor data is cached locally to maintain smooth performance and ensure the visual remains responsive even during brief sensor delays.
`,
        video: arveyeWallpaper,
        background: arveyeWallpaperBackground,
        alt: 'Arveye Wallpaper'
    },
]
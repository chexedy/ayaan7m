import "./Projects.css";
import { Carousel, Slide } from "../components";
import type { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }

export default function Projects() {
    return (
        <div className="projects">
            <h1 className="header-one">my projects</h1>
            <Carousel options={OPTIONS}>
                <Slide
                    title="where is NJ Transit?"
                    src="/slides/njtransit.png"
                    alt="Front page of my NJ Transit Project Website"
                    link="https:/transit.chexedy.com"
                    description={`This is an interactive map that allows you to:
                    • View every station and track served by NJ Transit
                    • View the departure times of any trains these stations service
                    • View estimated positions of currently active trains
                    • Uses NJ Transit's third-party API for data (may lag behind real-time)
                    • Built as a concept for an official NJ Transit map, since their current system does not have one.`}
                    frameworks={["HTML", "CSS", "JavaScript", "SQL", "Cloudflare Workers/D1", "MapLibre GL JS"]}
                />
                <Slide
                    title="RU Water Fountains"
                    src="/slides/rufountains.png"
                    alt="Home page of my RU Water Fountain website"
                    link="https://fountains.chexedy.com"
                    description={`A map that displays water fountains across the Rutgers-New Brunswick campus. Rutgers students can use their ScarletMail to submit a location and description of a fountain that does not appear on the map, and the request will be reviewed and approved by a site admin. Existing foundations can be edited if they are inaccurate.`}
                    frameworks={["React.js", "HTML", "CSS", "JavaScript", "SQL", "Cloudflare Workers/D1", "MapLibre GL JS"]}
                />
            </Carousel>
        </div>
    )
}
import "./Projects.css";
import { Carousel, Slide } from "../components";
import type { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }

export default function Projects() {
    return (
        <div className="projects">
            <h1 className="header-one">my projects</h1>
            <Carousel options={OPTIONS}>
                <Slide />
            </Carousel>
        </div>
    )
}
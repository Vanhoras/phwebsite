import type { Link } from "./link";

export interface Website {
    id: string;
    title: string;
    description: string;
    points?: string[];
    role: string;
    time: string;
    techStack: string[];
    image: string;
    color: string;
    links?: Link[];
}
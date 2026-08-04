export type Project = {
    name: string;
    description: string;
    techStack: string[];
    features: string[];
    links: Partial<Record<ProjectLinks, string>>;
    image: string;
};

type ProjectLinks = 'github' | 'livelink' | 'codeberge';

type SocialPlatform = 'github' | 'x' | 'gmail' | 'outlook';

export type SocailLinks = Partial<Record<SocialPlatform, string>>;

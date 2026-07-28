export type Project = {
    name: string;
    description: string;
};

type SocialPlatform = 'github' | 'x' | 'gmail'; // extendible to 'linkedin' | '' and so on

export type SocailLinks = Partial<Record<SocialPlatform, string>>;

declare interface NavLink {
    href: string;
    children: React.ReactNode;
}

declare interface NavLinksProps {
    mobile?: boolean;
    closeMenu?: () => void;
}

declare interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    liveDemoUrl: string;
    codeUrl?: string;
}
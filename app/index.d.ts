declare interface NavLink {
    href: string;
    children: React.ReactNode;
}

declare interface NavLinksProps {
    mobile?: boolean;
    closeMenu?: () => void;
}
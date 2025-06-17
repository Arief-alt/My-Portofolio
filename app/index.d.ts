declare interface NavLink {
    href: string;
    children: React.ReactNode;
    reloadPage?: boolean;
}

declare interface NavLinksProps {
    mobile?: boolean;
    closeMenu?: () => void;
    reloadNav?: boolean;
}
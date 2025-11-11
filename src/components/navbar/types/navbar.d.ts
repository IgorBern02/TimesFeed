export interface NavProps {
  section: string;
  onSelect: (section: string) => void;
}

export interface NavItemProps {
  sec: string;
  isActive: boolean;
  onSelect: (section: string) => void;
}

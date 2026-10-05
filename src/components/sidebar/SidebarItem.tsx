import type { NavItem, SectionId } from "@/types/navigation";

interface SidebarItemProps {
  item: NavItem;
  active: boolean;
  onSelect: (id: SectionId) => void;
}

export function SidebarItem({ item, active, onSelect }: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      className={`sidebar-item${active ? " sidebar-item--active" : ""}`}
      aria-current={active ? "page" : undefined}
      onClick={() => onSelect(item.id)}
    >
      <span className="sidebar-item__icon" aria-hidden="true">
        <Icon className="sidebar-item__glyph" strokeWidth={1.75} />
      </span>
      <span className="sidebar-item__label">{item.label}</span>
    </button>
  );
}

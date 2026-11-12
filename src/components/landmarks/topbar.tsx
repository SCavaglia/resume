import AppearanceDropdown from "../buttons/appearance-dropdown";

export function Topbar() {
  return (
    <div className="flex h-10 items-center justify-end border-b px-4">
      <AppearanceDropdown />
    </div>
  );
}

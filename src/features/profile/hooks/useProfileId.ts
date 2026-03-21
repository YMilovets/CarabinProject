import { useId } from "react";

export default function useProfileId() {
  const id = useId();
  const buttonId = `profile-btn-${id.replace(/\D/g, "")}`;
  const menuId = `profile-menu-${id.replace(/\D/g, "")}`;

  return { buttonId, menuId };
}

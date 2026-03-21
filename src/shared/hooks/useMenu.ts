import { MouseEventHandler, useState } from "react";

export default function useMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = !!anchorEl;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    setAnchorEl(currentTarget);
  };

  return {
    isOpen,
    anchorEl,
    onClick: handleClick,
    onClose: handleClose,
  };
}

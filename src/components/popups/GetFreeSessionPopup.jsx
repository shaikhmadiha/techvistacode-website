import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import GetFreeSessionRegistration from "@/components/forms/GetFreeSessionRegistration";

export default function GetFreeSessionPopup({
  variant,
  color,
  title = "Get Free Session",
  size = "medium",
  isHighRounded,
  open,
  setOpen,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        size={size}
        variant={variant}
        color={color}
        disableElevation
        onClick={() => setOpen(true)}
        sx={{
          borderRadius: isHighRounded
            ? "var(--high-rounded-mui-btn)"
            : undefined,
        }}
      >
        {title}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle color="secondary">Get Free Consultation</DialogTitle>
        <DialogContent sx={{ pb: 2, minWidth: { lg: 512, sm: 480, xs: 320 } }}>
          <GetFreeSessionRegistration
            themeColor={"secondary"}
            handleClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

import Navbar, { type NavbarProps } from './Navbar';

export default function BottomNavbar(props: NavbarProps) {
  const sx = props.slotProps?.root?.sx ?? [];
  return <Navbar {...props} slotProps={{ ...props.slotProps, root: {
    ...props.slotProps?.root,
    sx: [{ borderTop: 1, borderColor: 'divider', pb: 'env(safe-area-inset-bottom)' }, ...(Array.isArray(sx) ? sx : [sx])],
  } }} />;
}

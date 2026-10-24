import Navbar, { type NavbarProps } from './Navbar';

export default function TopNavbar(props: NavbarProps) {
  const sx = props.slotProps?.root?.sx ?? [];
  return <Navbar {...props} slotProps={{ ...props.slotProps, root: {
    ...props.slotProps?.root,
    sx: [{ borderBottom: '1px solid #dce4ed', pt: 'env(safe-area-inset-top)' }, ...(Array.isArray(sx) ? sx : [sx])],
  } }} />;
}

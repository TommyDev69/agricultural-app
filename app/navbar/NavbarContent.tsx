import NarbarSubContent from "./NarbarSubContent";

const NavbarContent = () => {
     const navbarItems = [
        { id:1, name: 'Home', href: '/' },
        { id:2, name: 'About', href: '/about' },
        { id:3, name: 'products', href: '/products' },
        { id:4, name: 'projects', href: '/projects' },
    ];
    return ( 
        <>
        <NarbarSubContent navbarItems={navbarItems} />
        
        </>
     );
}
 
export default NavbarContent;
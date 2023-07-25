import useCart from "../hooks/useCart";

type Props = {
    viewCart: boolean;
};

const Footer = ({ viewCart }: Props) => {
    const { totalItems, totalPrice } = useCart();

    const year: number = new Date().getFullYear();

    const pageContent = viewCart ? (
        <p>Shopping Cart &copy; {year}</p>
    ) : (
        <>
            <p>Total Items: {totalItems}</p>
            <p>Total Pice: {totalPrice}</p>
            <p>Shopping Cart &copy; {year}</p>
        </>
    );

    const content = <footer className="footer">{pageContent}</footer>;

    return content;
};

export default Footer;

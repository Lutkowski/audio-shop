import ProductSection from "../ProductSection/ProductSection.tsx";
import useProductStore from "../../store/useProductStore.ts";


const ProductSections = () => {
    const sections = useProductStore((state) => state.sections);

    return (
        <div>
            {sections.map((section) => (
                <ProductSection
                    key={section.title}
                    title={section.title}
                    products={section.products}
                />
            ))}
        </div>
    );
};

export default ProductSections;

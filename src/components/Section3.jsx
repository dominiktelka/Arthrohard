import React, {useState, useMemo} from "react";
import axios from "axios";
import { Popup } from "./Popup";

export default function Section3  (id)  {
    const [productsPerPage, setProductsPerPage] = useState(20);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [popupData, setPopupData] = useState(null);

    const handleChange = (e) => {
        const selectedValue = parseInt(e.target.value);
        setProductsPerPage(selectedValue);
        setPageNumber(1);
        setVisibleProducts([]);
        loadProducts(1, selectedValue);
    };


    const loadProducts = (page, pageSize) => {
        axios
            .get(`https://brandstestowy.smallhost.pl/api/random?pageNumber=${page}&pageSize=${pageSize}`)
            .then((response) => {
                const newProducts = response.data.data.map((item) => (
                    <div className="productBox" key={item.id} onClick={() => handleProductClick(item)}>
                        ID: {item.id}
                    </div>
                ));

                setVisibleProducts((prevProducts) => {
                    const newUniqueProducts = newProducts.filter((newProduct) => {
                        const newProductId = newProduct.key;
                        return !prevProducts.some((prevProduct) => prevProduct.key === newProductId);
                    });

                    return [...prevProducts, ...newUniqueProducts];
                });
            })
            .catch((error) => {
                console.error("Błąd pobierania danych z API:", error);
            });
    };

        const handleProductClick = (item) => {
        setPopupData(item);
    };

    const handleClosePopup = () => {
        setPopupData(null);
    };



    const loadMoreProducts = useMemo(() => {
        return () => {
            if (pageNumber < 50) {
                setPageNumber(pageNumber + 1);
            }
        };
    }, [pageNumber]);

    useMemo(() => {
        loadProducts(pageNumber, productsPerPage);
    }, [pageNumber, productsPerPage]);

    return (
        <div className="productContainer" id={id.id}>
            <div className="pagination">
                <span>Liczba produktów na stronie</span>
                <select value={productsPerPage} onChange={handleChange}>
                    {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value,index) => (
                        <option key={index}  value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <div className="productBoxes">{visibleProducts}</div>
            {popupData && (
                <Popup
                    id={popupData.id}
                    name={popupData.name}
                    value={popupData.value}
                    onClose={handleClosePopup}
                />
            )}
            <div className="loadMoreButton">
                {pageNumber < 50 && ( // Przykład: Wyświetlanie przycisku tylko do 50 stron
                    <button onClick={loadMoreProducts}>Załaduj więcej produktów</button>
                )}
            </div>
        </div>
    );
};
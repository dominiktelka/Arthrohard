import React from "react";

export const Section = (id) => {

    const handleMouseEnter = (e) => {
        const elements = e.currentTarget.querySelectorAll("h2, img");
        elements.forEach((element) => {
            element.classList.add("hovered");
        });
    };

    const handleMouseLeave = (e) => {
        const elements = e.currentTarget.querySelectorAll("h2, img");
        elements.forEach((element) => {
            element.classList.remove("hovered");
        });
    };

    return (
        <div className="aboutUs" id={id.id}>
    <aside className="asideSection">
        <img className="arthrohard" src="./images/product.svg" alt=""/>
    </aside>
    <article className="articleSection" >
        <h1>arthro<span className="hard">hard</span></h1>
        <h3>Lab-V Arthrohard Preparat<br/> na wsparcie stawów dla psa i kota</h3>
        <p>Arthrohard to dobrze przyswajalny suplement diety w formie syropu,<br/> stworzony z myślą o zdrowiu stawów Twojego psa lub kota.</p>
        <button className="buy">Kup Teraz</button>
    </article >
    <img className="vector1" src="./images/Vector.svg" alt=""/>
    <img className="vector2" src="./images/Vector2.svg" alt=""/>
    <img className="vector3" src="./images/Vector3.svg" alt=""/>
    <section className="sectionContainer">
        <h2 className="prep">Co wyróżnia nasz preparat</h2>
        <article className="sectionArticle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h2 className="articleTitle">Innowacyjny dodatek -<br/>Czarciego Pazura</h2>
            <p>Zapewnia dodatkowe wsparcie w zwalczaniu stanów bólowych i zapalnych. Skoncentrowane składniki aktywne, opracowane we współpracy z lekarzami weterynarii, przynoszą szybkie i zauważalne efekty, szczególnie korzystne dla zwierząt z poważnymi problemami stawowymi.</p>
            <img className="flower" src="./images/flower.svg" alt=""/>
        </article>
        <article className="sectionArticle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h2 className="articleTitle">Wygoda - <br/>dwa sposoby podawania</h2>
            <ul className= "articleUl">
                <li>Bezpośrednio do pyszczka</li>
                <li>Zmieszany z karmą</li>
            </ul>
            <img className="dog1" src="./images/dog1.svg" alt=""/>
            <img className="dog2" src="./images/dog2.svg" alt=""/>
        </article>
        <article className="sectionArticle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h2 className="articleTitle">Skuteczność - <br/>skoncentrowana dawka</h2>
            <p><span className="articleSpan">Tylko jedna porcja dziennie.</span><br/>
                To nie tylko wygoda, ale również gwarancja,
                że Twoje zwierzę otrzymuje wszystko, czego potrzebuje, aby cieszyć się zdrowiem i aktywnością na długo. Skorzystaj z zalet Arthrohard i zobacz różnicę w komforcie życia swojego zwierzęcia.</p>
            <img className="vacine"  src="./images/vacin.svg" alt=""/>
        </article>
    </section>
</div>
    );
};
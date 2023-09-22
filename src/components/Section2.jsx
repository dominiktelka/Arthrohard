import React from "react";

export const Section2 = (id) => {

    const handleMouseEnter = (e) => {
        const elements = e.currentTarget.querySelectorAll("h2");
        elements.forEach((element) => {
            element.classList.add("hovered");
        });
    };

    const handleMouseLeave = (e) => {
        const elements = e.currentTarget.querySelectorAll("h2");
        elements.forEach((element) => {
            element.classList.remove("hovered");
        });
    };

    return (
        <div className="container" id={id.id}>
            <h2 className="containerTitle">Skład w 5 ml</h2>
            <p className="pTitle">Co dają szczególnego nasze składniki:</p>
            <img className="sad" src="/images/Group 16.svg" alt="piesek"/>
            <main className="mainSection2">
                <div className="leftColumn">
                <article className="sectionArticle2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <li className="liArticle2"></li>
                    <h2 className="articleTitle2">Siarczan glukozaminy</h2>
                    <p className="article2p">650mg</p>
                    <p className="article2p">Glukozamina jest naturalnym składnikiem chrząstki.
                        Dodatek glukozaminy przyczynia się do zwiększenia produkcji glikozaminoglikanów (m.in. siarczanu keratanu, heparanu, kwasu hialuronowego), które pomagają w odbudowie chrząstki, co jest szczególnie korzystne dla zwierząt ze zmianami zwyrodnieniowymi stawów.</p>
                </article>
                <article className="sectionArticle2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <li className="liArticle2"></li>
                    <h2 className="articleTitle2">Siarczan chondroityny</h2>
                    <p className="article2p">300mg</p>
                    <p className="article2p">Chondroityna, podobnie jak glukozamina, jest składnikiem chrząstki. Chondroityna pomaga zwalczać enzymy, które niszczą chrząstkę, a także pomaga chrząstce zatrzymać wodę, co jest ważne dla jej sprężystości i absorpcji wstrząsów.</p>
                </article>
                <article className="sectionArticle2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <li className="liArticle2"></li>
                    <h2 className="articleTitle2">Kwas hialuronowy</h2>
                    <p className="article2p">50mg</p>
                    <p className="article2p">Tylko jedna porcja dziennie.
                        Kwas hialuronowy jest kluczowym składnikiem płynu stawowego, który działa jak smar i amortyzator dla stawów. Suplementacja kwasem hialuronowym może pomóc w utrzymaniu prawidłowej objętości i konsystencji płynu stawowego.</p>
                </article>
                </div>
                <div className="rightColumn">
                <article className="sectionArticle2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <li className="liArticle2"></li>
                    <h2 className="articleTitle2">Czarci pazur</h2>
                    <p className="article2p">250mg</p>
                    <p className="article2p">Czarci pazur jest rośliną, która ma właściwości przeciwzapalne i przeciwbólowe. Może to pomóc zwierzętom, które doświadczają bólu i stanu zapalnego związanego z problemami ze stawami.</p>
                </article>
                <article className="sectionArticle2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <li className="liArticle2"></li>
                    <h2 className="articleTitle2">Witamina C</h2>
                    <p className="article2p">50mg</p>
                    <p className="article2p">Witamina C jest potężnym przeciwutleniaczem,
                        który może pomóc w ochronie stawów poprzez neutralizację wolnych rodników, które mogą uszkadzać chrząstkę. Ponadto, witamina C odgrywa ważną rolę w produkcji kolagenu, kluczowego składnika chrząstki.</p>
                </article>
                <article className="sectionArticle2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <li className="liArticle2"></li>
                    <h2 className="articleTitle2">MSM</h2>
                    <p className="article2p">250mg</p>
                    <p className="article2p">TMetylosulfonylometan, czyli MSM, to naturalny związek siarki, który pomaga w utrzymaniu zdrowych stawów poprzez zmniejszenie stanu zapalnego i bólu. MSM może również pomagać
                        w produkcji kolagenu, co przyczynia się do zdrowia chrząstki stawowej.</p>
                </article>
                </div>
            </main>
            <button className="buttonSection2">Kup Teraz</button>
            <img className="piesek" src="/images/piesek.svg" alt="piesek"/>
        </div>
    );
};
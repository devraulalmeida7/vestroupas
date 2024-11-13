import styles from '../HomePage/styles.module.css'
import logo from '../../assets/logo.svg'
import search from '../../assets/fi-rr-search.svg'
import banner from '../../assets/banner.png'
import produto1 from '../../assets/produto1.png'
import produto2 from '../../assets/produto2.png'
import produto3 from '../../assets/produto3.png'
import produto4 from '../../assets/produto4.png'
import produto5 from '../../assets/produto5.png'
import produto6 from '../../assets/produto6.png'




import categoria1 from '../../assets/categoria1.png'
import categoria2 from '../../assets/categoria2.png'
import categoria3 from '../../assets/categoria3.png'

export default function HomePage() {
    return (
        <>
        <header>
                <nav className={styles.menu}>
                    <a href="#" className={styles.menuItem}>Mulher</a>
                    <a href="#" className={styles.menuItem}>Homem</a>
                    <a href="#" className={styles.menuItem}>Kids</a>
                    <a href="#" className={styles.menuItem}>Ofertas</a>
                </nav>
            
                <div className={styles.logoContent}>
                    <img className={styles.logo} src={logo} alt="Logo da Vest" />
                </div>
                
                <nav className={styles.menuAux}>
                     <img className={styles.logo} src='' alt="Barra de pesquisa" /> */
                </nav>

            </header>


            <main>
                <section className={styles.newAds}>
                    <article className={styles.adCollection}>
                        <img src={banner} alt="Banner of new collection"></img>
                    </article>

                    <article className={styles.heading}>
                        <h1 className={styles.headingMain}>New Collection</h1>
                        <p className={styles.headingText}>As mais novas coleções, que combinam o clássico com o moderno em
                        uma perfeita harmonia. </p>
                    </article>
                    
                </section>



                <section className={styles.newCollection}>

                    <div className={styles.newCollectionContent}>
                    <article className={styles.produto}>
                            <img className={styles.produtoImage} src={produto1} alt="Camisa Branca 2024"></img>
                            <p className={styles.title}>Camisa Branca 2024</p>
                            <p>R$ 230,00</p>
                        </article>

                        <article className={styles.produto}>
                            <img className={styles.produtoImage} src={produto2} alt="Vestido Summer 2024"></img>
                            <p className={styles.title}>Vestido Summer 2024</p>
                            <p>R$ 350,00</p>
                        </article>

                        <article className={styles.produto}>
                            <img className={styles.produtoImage} src={produto3} alt="Camisa Longa Verão"></img>
                            <p className={styles.title}>Camisa Longa Verão</p>
                            <p>R$ 250,00</p>
                        </article>
                    </div>
                        
                    <div className={styles.newCollectionContent}>
                            <article className={styles.produto}>
                            <img className={styles.produtoImage} src={produto4} alt="Camisa Branca 2024"></img>
                            <p className={styles.title}>Camisa Branca 2024</p>
                            <p>R$ 230,00</p>
                        </article>

                        <article className={styles.produto}>
                            <img className={styles.produtoImage} src={produto5} alt="Vestido Summer 2024"></img>
                            <p className={styles.title}>Vestido Summer 2024</p>
                            <p>R$ 350,00</p>
                        </article>

                        <article className={styles.produto}>
                            <img className={styles.produtoImage} src={produto6} alt="Camisa Longa Verão"></img>
                            <p className={styles.title}>Camisa Longa Verão</p>
                            <p>R$ 250,00</p>
                        </article>
                    </div>
                    

                </section>
            </main>


            <section className={styles.category}>

                <article className={styles.categoryContent}>
                    <img src={categoria1} alt="" className={styles.categoryImage}></img>
                    <h2 className={styles.categoryTitle}>HOMEM</h2>
                </article>

                <article className={styles.categoryContent}>
                    <img src={categoria2} alt="" className={styles.categoryImage}></img>
                    <h2 className={styles.categoryTitle}>MULHER</h2>
                </article>
                
                <article className={styles.categoryContent}>
                    <img src={categoria3} alt="" className={styles.categoryImage}></img>
                    <h2 className={styles.categoryTitle}>INFANTIL</h2>
                </article>


            <footer className={styles.footer}>
                
            </footer>

            </section>
      

        </>
    )
}
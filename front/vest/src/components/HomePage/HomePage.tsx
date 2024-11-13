import styles from '../HomePage/styles.module.css'
import logo from '../../assets/logo.svg'
import search from '../../assets/fi-rr-search.svg'
import banner from '../../assets/banner.png'

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
                    <img src={logo} alt="Logo da Vest" />
                </div>
                
                <nav className={styles.menuAux}>
                    <img className={styles.logo} src={search} alt="Barra de pesquisa" />
                </nav>

            </header>


            <main>
                <section className={styles.newAds}>
                    <img src={banner} alt="Banner of new collection"></img>
                </section>

                <section className={styles.newCollection}>

                    <article className={styles.produto}>
                        <img src="" alt=""></img>
                        <p></p>
                        <p></p>
                    </article>

                    <article className={styles.produto}>
                        <img src="" alt=""></img>
                        <p></p>
                        <p></p>
                    </article>

                    <article className={styles.produto}>
                        <img src="" alt=""></img>
                        <p></p>
                        <p></p>
                    </article>

                    <article className={styles.produto}>
                        <img src="" alt=""></img>
                        <p></p>
                        <p></p>
                    </article>

                    <article className={styles.produto}>
                        <img src="" alt=""></img>
                        <p></p>
                        <p></p>
                    </article>

                    <article className={styles.produto}>
                        <img src="" alt=""></img>
                        <p></p>
                        <p></p>
                    </article>

                    <article className={styles.produto}>
                        <img src="" alt=""></img>
                        <p></p>
                        <p></p>
                    </article>

                </section>
            </main>


            <section className={styles.category}>

                <article className={styles.categoryName}>
                    <img src="" alt="" className={styles.categoryImage}></img>
                    <h2 className={styles.categoryTitle}></h2>
                    <button className={styles.categoryButton}></button>
                </article>

                <article className={styles.categoryName}>
                    <img src="" alt="" className={styles.categoryImage}></img>
                    <h2 className={styles.categoryTitle}></h2>
                    <button className={styles.categoryButton}></button>
                </article>
                
                <article className={styles.categoryName}>
                    <img src="" alt="" className={styles.categoryImage}></img>
                    <h2 className={styles.categoryTitle}></h2>
                    <button className={styles.categoryButton}></button>
                </article>


            <footer className={styles.footer}>
                
            </footer>

            </section>
      

        </>
    )
}
import s from './style.module.css'

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at dolor explicabo in iste maiores minima, minus neque pariatur qui quibusdam recusandae saepe unde, voluptatum?"

const Layout = ({title, descr = lorem, urlBg, colorBg}) => {
    const styles = {
        backgroundImage: urlBg ? `url(${urlBg})` : null,
        backgroundColor: colorBg ? colorBg : null,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    return (
        <section className={s.root} >
            <div className={s.wrapper} style={styles}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`} >
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
        )
}

export default Layout
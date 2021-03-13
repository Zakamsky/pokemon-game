import s from './style.module.css'

const Layout = ({title, urlBg, colorBg, children}) => {
    const styles = {
        backgroundImage: urlBg ? `url(${urlBg})` : null,
        backgroundColor: colorBg ? colorBg : null
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
                        {children}
                    </div>
                </article>
            </div>
        </section>
        )
}

export default Layout
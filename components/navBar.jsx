import Image from "next/image"
import NavbarCollapse from "./navbarCollapse"
import useStore from "@/zustand/zustand"
import navScroll from "@/hooks/navScroll"
import Link from "next/link"
export default function () {

    const { isCollapsed, collapse } = useStore()
    const { scroll } = navScroll()

    return (<div >
        {!isCollapsed && <NavbarCollapse />}
        <nav className={`navbar navbar-expand-lg navbar-dark ${scroll && 'bg-dark'}`} >
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Image src='/img/logo.png' alt="Picture of the author" height={50} width={50}>
                    </Image>
                </Link>
                <button onClick={collapse} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">

                            <Link href='/filter' className="nav-link" aria-current="page">
                                <i className="bi bi-house" />   Casas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-building" /> Apartamentos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-buildings" /> TomHouse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-pin-map" />Terrenos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-shop" />Locales Comerciales</a>
                        </li>
                    </ul>
                    <Link href={'/login'}>
                        <button className="btn btn-warning" type="submit"> <i className="bi arrow-right-circle-fill"></i> Iniciar Sesion</button>
                    </Link>
                </div>
            </div>
        </nav>
    </div>)
}
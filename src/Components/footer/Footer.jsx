import React from 'react'

const Footer = () => {
    return (
        <footer className="container">
            <p className="float-right"><a href="Pendiente">Subir</a></p>
            <p>&copy; {(new Date().getFullYear())} Mi Proyecto, Inc. &middot; <a href="Pendiente">Política de Privacidad</a> &middot; <a href="Pendiente">Términos</a></p>
        </footer>
    )
}

export default Footer

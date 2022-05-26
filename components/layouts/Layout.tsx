import Head from "next/head"

import { FC } from "react"
import { Navbar } from "../ui";



interface FunctionComponent<P = {}> {
    children?: React.ReactNode;
    props?: {
        title?: string
    }
};

export const Layout: FC<FunctionComponent> = ({ children, props }) => {

    const origin = (typeof window === 'undefined') ? '' : window.location.origin;

    return (
        <>
            <Head>
                <title>{props?.title || 'PokemonApp'}</title>
                <meta name="author" content="David117Master" />
                <meta name="descripcion" content={`Información sobre el pokemon ${props?.title}`} />
                <meta name="keywords" content={`${props?.title}, pokemon, pokedex`} />

                <meta property="og:title" content={`Información sobre ${props?.title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${props?.title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px, 20px'
            }}>
                {children}
            </main>
        </>
    )
}

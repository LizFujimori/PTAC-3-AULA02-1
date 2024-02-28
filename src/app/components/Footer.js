import Image from "next/image";

export default function Footer(){
    return(
        <footer>
            <p>2024 ''. Todos os direitos reservador</p>
            <Image
                width={100}
                height={100}
                src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"}
           />
        </footer>
    )
}

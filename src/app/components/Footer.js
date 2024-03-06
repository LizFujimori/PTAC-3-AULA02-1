import Image from "next/image";

export default function Footer(){
    return(
        <footer>
            <p>2024 ''. Todos os direitos reservador</p>
            <Image
                width={26}
                height={26}
                src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"}
           />
        </footer>
    )
}

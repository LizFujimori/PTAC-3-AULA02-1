import Image from "next/image";
import styles from "../components/footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.fix}>
            <p className={styles.text}>2024 ''. Todos os direitos reservador</p>
            <Image
                width={100}
                height={40}
                src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"}
           />
        </footer>
    )
}

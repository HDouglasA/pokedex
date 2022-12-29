import { ContainerFooter, ImageFooter } from "./style";

export const Footer = () => {
	return (
        <ContainerFooter>
            <p>Desenvolvido por @HDouglasA</p>
            <nav>
                <a href="https://www.linkedin.com/in/henrique-douglas-araujo/" target="_blank" rel="noreferrer">
                    <ImageFooter src="/iconLinkedin.svg" alt="logo-linkedin"/>
                </a>
                <a href="https://github.com/HDouglasA" target="_blank" rel="noreferrer">
                    <ImageFooter src="/iconGithub.svg" alt="logo-github"/>
                </a>
            </nav>
        </ContainerFooter>
	)
}
export function homePage() {
    return `
    <div class="container py-5">
        <h1 class="titulo-principal">Associação Semente de Empoderamento</h1>
        
        <section class="py-5">
            <h2>Nossa Missão</h2>
            <div class="row flex-column flex-lg-row align-items-center g-4 mt-2">
                <div class="col-lg-6">
                    <p class="lead">
                        Trabalhamos para empoderar indivíduos e comunidades, oferecendo as ferramentas e o suporte necessários para que possam construir um futuro digno. Nossa missão é criar oportunidades, fortalecer laços e semear a esperança onde ela é mais necessária.
                    </p>
                </div>
                <div class="col-lg-6 text-center text-lg-start">
                    <img src="/imagens/banner-index.png" class="img-fluid banner-missao" alt="Banner com o nome da ONG...">
                </div>
            </div>
        </section>

        <section class="py-5 bg-neutral-light">
            <div class="container">
                <h2>Nossos Valores</h2>
                <div class="row g-4 mt-2">
                    <div class="col-md-6">
                        <div class="card-valor-custom p-4 h-100">
                            <h3>Transparência</h3>
                            <p>
                                Agimos com total clareza e honestidade em todas as nossas atividades. Para nós, a transparência é a base que fortalece a confiança da nossa comunidade, permitindo que todos saibam como cada passo dado se traduz em empoderamento e esperança.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card-valor-custom p-4 h-100">
                            <h3>Inovação</h3>
                            <p>
                                Buscamos soluções criativas e eficazes para os desafios sociais. Acreditamos que a inovação é a ferramenta essencial para criar novas oportunidades e construir um futuro mais promissor e digno para as comunidades que apoiamos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `;
}
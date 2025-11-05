export function projetosPage() {
    return `
    <div class="container py-5">
        <h1 class="titulo-principal">Nossos Projetos e Como Ajudar</h1>
        
        <section class="py-5">
            <h2>Projetos Atuais</h2>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card-projeto h-100">
                        <h3>Projeto Acolher</h3>
                        <p>
                            Mais do que apenas oferecer educação, o Projeto Acolher empodera crianças e adolescentes em situação de vulnerabilidade, dando-lhes as ferramentas e o apoio necessários para que construam um futuro brilhante. Através de oficinas criativas e aulas de reforço, semeamos a esperança e criamos um ambiente seguro para o desenvolvimento pleno de cada um.
                        </p>
                        <img src="/imagens/banner-projeto-acolher.png" class="banner-projeto" alt="Banner com o título 'Bem-vindo Projeto Acolher', em uma arte com diversos itens escolares, livros, lapis, cadernos, clipes, caneta e uma escola ao fundo.">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card-projeto h-100">
                        <h3>Mãos na Horta</h3>
                        <p>
                            A iniciativa Mãos na Horta transforma terrenos ociosos em hortas comunitárias, mas vai além da agricultura. É um projeto que fortalece laços comunitários e oferece capacitação profissional em sustentabilidade. Criamos oportunidades de renda e autossuficiência, garantindo que as famílias construam um futuro mais digno e autônomo.
                        </p>
                        <img src="/imagens/banner-mao-na-horta.png" class="banner-projeto" alt="Banner com o título 'Mãos na horta', e desenho de 4 pessoas plantando sobre um campo.">
                    </div>
                </div>
            </div>
        </section>
        
        <section class="py-5 bg-neutral-light text-center">
            <div class="container">
                <h2>Como ser Voluntário</h2>
                <p class="secao-texto mx-auto">
                    Mais do que doar seu tempo, ser um voluntário da nossa ONG significa se tornar um agente de mudança. Você terá a oportunidade de usar suas habilidades para empoderar comunidades, fortalecer laços e semear a esperança onde ela mais precisa. Junte-se a nós para construir um futuro digno para todos. Para começar sua jornada, basta preencher nosso formulário de cadastro.
                </p>
                <a href="#" class="cta-button" onclick="navegar('cadastro')">Quero ser voluntário!</a>
            </div>
        </section>

        <section class="py-5 text-center">
            <div class="container">
                <h2>Como Doar</h2>
                <p class="secao-texto mx-auto">
                    Sua doação é o combustível que nos permite empoderar comunidades e transformar vidas. Cada contribuição se traduz em ferramentas de trabalho, em oportunidades de aprendizado e em esperança para quem mais precisa. Ao doar, você não apenas ajuda, você investe no futuro digno de muitas famílias e se torna parte fundamental da nossa missão.
                </p>
                <p class="mt-4">
                    Chave Pix: <strong class="pix-key">123.456.789-00</strong>
                </p>
            </div>
        </section>
    </div>
    `;
}
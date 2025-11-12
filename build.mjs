// build.mjs
import { minify } from 'html-minifier-terser';
import fs from 'fs';
import { glob } from 'glob';

// Função auxiliar para garantir diretórios
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. Minifica HTML
async function minifyHTML() {
  let html = fs.readFileSync('index.html', 'utf8');
  
  // Substitui o caminho do CSS para a versão minificada
  html = html.replace('/css/style.css', '/css/style.min.css');
  
  const minified = await minify(html, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true
  });
  
  ensureDir('dist');
  fs.writeFileSync('dist/index.html', minified);
  console.log('✅ HTML minificado (com CSS atualizado)');
}

// 2. Minifica CSS
async function minifyCSS() {
  const { default: CleanCSS } = await import('clean-css');
  const input = fs.readFileSync('css/style.css', 'utf8');
  const output = new CleanCSS({}).minify(input);
  ensureDir('dist/css');
  fs.writeFileSync('dist/css/style.min.css', output.styles);
  console.log('✅ CSS minificado');
}

// 3. Minifica JS
async function minifyJS() {
  const { minify } = await import('terser');
  const files = ['app.js', 'home.js', 'projetos.js', 'cadastro.js'];
  ensureDir('dist/js');

  for (const file of files) {
    if (fs.existsSync(`js/${file}`)) {
      const code = fs.readFileSync(`js/${file}`, 'utf8');
      const result = await minify(code, { mangle: true, compress: true });
      fs.writeFileSync(`dist/js/${file}`, result.code);
    }
  }
  console.log('✅ JavaScript minificado');
}

// 4. Comprime imagens
async function compressImages() {
  const imagemin = (await import('imagemin')).default;
  const imageminPngquant = (await import('imagemin-pngquant')).default;
  const imageminMozjpeg = (await import('imagemin-mozjpeg')).default;

  const files = await glob('imagens/**/*.{jpg,jpeg,png}');
  if (files.length > 0) {
    ensureDir('dist/imagens');
    await imagemin(files, {
      destination: 'dist/imagens',
      plugins: [
        imageminPngquant({ quality: [0.6, 0.8] }),
        imageminMozjpeg({ quality: 75 })
      ]
    });
    console.log('✅ Imagens comprimidas');
  } else {
    console.log('⚠️ Nenhuma imagem encontrada');
  }
}

// Executa tudo
async function build() {
  await minifyHTML();
  await minifyCSS();
  await minifyJS();
  await compressImages();
  console.log('\n🚀 Build concluído! Pasta "dist" pronta para deploy.');
}

build().catch(console.error);
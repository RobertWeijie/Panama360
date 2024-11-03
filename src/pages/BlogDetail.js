import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ScrollToTopButton from '../components/ScrollToTopButton';
import './BlogDetail.css';

// 扩展博客文章数据，添加完整内容
const blogDetails = {
  1: {
    title: 'Fortaleciendo las ideas manufactureras panameñas: construyendo empresas de alta precisión y liderando la innovación económica',
    content: `
      Queridos lectores,

Como panameño orgulloso, me gustaría aprovechar esta oportunidad para presentarles un concepto importante: Fortalecer la idea del Hecho en Panamá e integrar en ella el concepto de empresas de alta tecnología. Panamá es un país hermoso y diverso, con abundantes recursos naturales y una ubicación única. Sin embargo, nuestro desarrollo económico todavía depende de los bienes importados, lo que nos hace enfrentar algunos desafíos. Por lo tanto, creo que fortaleciendo la mentalidad manufacturera panameña y construyendo empresas de vanguardia, podemos lograr prosperidad económica y liderar la innovación económica.

Primero, echemos un vistazo a la situación actual en Panamá. Nuestra economía depende principalmente del turismo, los servicios financieros y los ingresos del canal. Aunque estas industrias nos han traído cierto crecimiento económico, todavía enfrentamos el problema de la alta dependencia de los bienes importados. Esto no solo hace que nuestra economía sea vulnerable a las fluctuaciones de los mercados internacionales, sino que también limita nuestra capacidad de innovar y crecer. Por lo tanto, necesitamos urgentemente cambiar la forma de pensar, de importar, a fabricar localmente, e integrar en ella el concepto de empresas de alta tecnología.

Entonces, ¿por qué deberíamos fortalecer la filosofía manufacturera panameña y construir empresas de alta precisión? Primero, las empresas de alta tecnología nos traerán innovación tecnológica y crecimiento económico. Al introducir tecnología y conocimientos avanzados, podemos cultivar más científicos, ingenieros y talentos innovadores, promover el desarrollo y la aplicación de tecnología e inyectar un nuevo impulso a la economía. En segundo lugar, las empresas de alta tecnología mejorarán nuestra competitividad internacional. Al fabricar productos y servicios de alta calidad y alto valor agregado, podremos ganar más participación en el mercado internacional y ganar más reputación y beneficios para Panamá.

Entonces, ¿cómo deberíamos implementar la idea Hecho en Panamá y construir una empresa de alta precisión? Primero, necesitamos aumentar la inversión en manufactura local e innovación tecnológica. El gobierno debería formular políticas y regulaciones que conduzcan al desarrollo de empresas de alta tecnología. Estas políticas pueden incluir ofrecer incentivos fiscales, reducir los procedimientos de aprobación administrativa y fomentar la investigación y el desarrollo innovadores para atraer más inversiones y talento. Al mismo tiempo, necesitamos fortalecer el sistema educativo, cultivar más científicos, ingenieros y talentos innovadores y proporcionar recursos humanos para empresas de alta tecnología. Además, también podemos establecer relaciones de cooperación con socios internacionales, introducir tecnología avanzada y experiencia en gestión, y mejorar nuestro nivel de fabricación y capacidades de innovación.
Al fortalecer la mentalidad manufacturera panameña y construir empresas sofisticadas, obtendremos muchos beneficios. Primero, lograremos la prosperidad económica y el desarrollo sostenible. El desarrollo de empresas de alta tecnología nos traerá más puntos de crecimiento económico, creará más oportunidades de empleo y mejorará el nivel de vida de las personas. En segundo lugar, mejoraremos nuestra competitividad internacional. Al fabricar productos y servicios de alta calidad y alto valor agregado, podremos ganar más participación en el mercado internacional y ganar más reputación y beneficios para Panamá.

Estimados lectores, fortalecer el pensamiento manufacturero panameño y construir empresas de alta tecnología es la clave para nuestra prosperidad económica y para liderar la innovación económica. Unámonos y trabajemos juntos para luchar por el futuro de Panamá. ¡Presentemos con orgullo nuestras capacidades de fabricación e innovación tecnológica, destacando la fortaleza y el espíritu emprendedor de Panamá ante el mundo!

Contacto:robertochen0220@gmail.com

    `,
    tags: ['AI', 'Manufacturas', 'Economia'],
    date: '2024-10-04'
  },
  // ... 其他文章的详细内容
};

function BlogDetail() {
  const { id } = useParams();
  const { isDarkMode } = useTheme();
  const post = blogDetails[id];

  if (!post) {
    return (
      <div className={`blog-detail ${isDarkMode ? 'dark' : ''}`}>
        <h1>Artículo no encontrado</h1>
        <Link to="/blog" className="back-button">Volver a la lista de blogs</Link>
      </div>
    );
  }

  return (
    <div className={`blog-detail ${isDarkMode ? 'dark' : ''}`}>
      <div className="blog-detail-container">
        <Link to="/blog" className="back-button">Volver a la lista de blogs</Link>
        <article>
          <h1>{post.title}</h1>
          <div className="meta-info">
            <span className="date">{post.date}</span>
            <div className="tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="content">
            {post.content.split('\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default BlogDetail; 
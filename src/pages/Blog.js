import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import './Blog.css';

// 博客文章数据
const blogPosts = [
  {
    id: 1,
    title: 'Fortaleciendo las ideas manufactureras panameñas: construyendo empresas de alta precisión y liderando la innovación económica',
    summary: 'Fortalecer la idea del Hecho en Panamá e integrar en ella el concepto de empresas de alta tecnología',
    tags: ['IA', 'Manufacturas', 'Economia'],
    date: '2024-10-04'

  },
  
  {
    id: 2,
    title: 'Finanza verde: Conectando la protección ambiental con el desarrollo sostenible',
    summary: 'cuando se aborda el desarrollo sostenible y la protección ambiental en Panamá, no se puede pasar por alto el papel crucial de las finanzas verdes',
    tags: ['Ambiente', 'Finanza Verde'],
    date: '2024-10-11'
  },
  /*
  {
    id: 3,
    title: '5G技术的商业应用',
    summary: '5G 网络的普及为各行各业带来新的发展机遇，特别是在物联网领域...',
    tags: ['5G', '物联网', '商业应用'],
    date: '2024-03-13'
  },
  {
    id: 4,
    title: '云计算与数字化转型',
    summary: '企业数字化转型中，云计算扮演着越来越重要的角色...',
    tags: ['云计算', '数字化转', '企业科技'],
    date: '2024-03-12'
  },
  {
    id: 5,
    title: '网络安全最佳实践',
    summary: '随着网络威胁日益增加，企业需要采取更多措施保护数据安全...',
    tags: ['网络安全', '数据保护', '企业安全'],
    date: '2024-03-11'
  },
  {
    id: 6,
    title: '元宇宙与虚拟现实',
    summary: '元宇宙概念的兴起带动了虚拟现实技术的快速发展...',
    tags: ['元宇宙', 'VR', '虚拟现实'],
    date: '2024-03-10'
  },
  {
    id: 7,
    title: '可持续科技发展',
    summary: '探讨科技如何助力环保事业，从清洁能源到智能环保系统，科技正在改变我们保护地球的方式...',
    tags: ['可持续发展', '环保科技', '清洁能源'],
    date: '2024-03-09'
  } */
];

function Blog() {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState(() => {
    return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  });
  const postsPerPage = 6;

  // 获取所有唯一的标签
  const allTags = [...new Set(posts.flatMap(post => post.tags))];

  // 过滤文章
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  // 计算分页
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        
        // 对文章按照日期排序,最新的在前面
        const sortedPosts = data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
        
        setPosts(sortedPosts);
      } catch (error) {
        console.error('获取博客文章失败:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={`blog-container ${isDarkMode ? 'dark' : ''}`}>
      <div className="blog-header">
        <h1>Publicación de blog</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="tags-container">
        <button
          className={`tag ${selectedTag === '' ? 'active' : ''}`}
          onClick={() => setSelectedTag('')}
        >
          Total
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            className={`tag ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {currentPosts.map(post => (
          <div key={post.id} className="blog-card">
            <div className="blog-card-content">
              <h2>{post.title}</h2>
              <p className="date">{post.date}</p>
              <p className="summary">{post.summary}</p>
              <div className="tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <Link to={`/blog/${post.id}`} className="read-more">
              Leer más
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Blog;
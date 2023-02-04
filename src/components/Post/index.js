import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import './styles.scss';
import { Link } from 'react-router-dom';

function Post({
  title, category, excerpt, slug,
}) {
 
  function createMarkup() {
    const cleanExcerpt = DOMPurify.sanitize(
      excerpt,
      { ALLOWED_TAGS: ['strong', 'em', 'img'] },
    );

    return { __html: cleanExcerpt };
  }

  return (
    <article className="post">
      <Link to={`/post/${slug}`}>
        <h2 className="post-title">{title}</h2>
        <div className="post-category">{category}</div>
        <p
          className="post-excerpt"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </Link>
    </article>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Post;

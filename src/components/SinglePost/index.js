import { useParams } from 'react-router-dom';

import NotFound from 'src/components/NotFound';
import PropTypes from 'prop-types';

function SinglePost({ allPosts }) {
  const { slug } = useParams();
  const currentPost = allPosts.find((item) => (item.slug === slug));

  return (
    (!currentPost) ? <NotFound /> : (
      <article className="posts">
        <h2 className="post-title">{currentPost.title}</h2>
        <p>{currentPost.content}</p>
      </article>
    ));
}

SinglePost.propTypes = {
  allPosts: PropTypes.array.isRequired,
};

export default SinglePost;

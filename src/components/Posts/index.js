import PropTypes from 'prop-types';
import Post from 'src/components/Post';

import './styles.scss';

function Posts({ posts, isZen }) {
  return (
    <main className={isZen ? 'posts posts--zen' : 'posts'}>
      <h1 className="posts-title">Dev Of Thrones</h1>
      <div className="posts-list">
        {
          posts.map((post) => (

            <Post {...post} key={post.id} />
          ))
        }
      </div>
    </main>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  isZen: PropTypes.bool,
};

Posts.defaultProps = {
  isZen: false,
};

export default Posts;

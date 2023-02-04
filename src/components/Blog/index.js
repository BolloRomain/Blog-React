import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import ContactPage from 'src/components/ContactPage';
import NotFound from 'src/components/NotFound';
import Spinner from 'src/components/Spinner';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';
import SinglePost from '../SinglePost';


function Blog() {
  const retourDeUseState = useState(false);
 
  const [isZen, setIsZen] = retourDeUseState;
  const [parfum, setParfum] = useState('chocolat');
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const loadPosts = () => {
    return axios.get('https://oclock-open-apis.vercel.app/api/blog/posts')
      .then((response) => {

        console.log('la promesse est tenue, on a la reponse', response);
        setPosts(response.data);
      })
      .catch((error) => {

        console.log('erreur !!!', error);
      })
      .finally(() => {
      });
  };

  const loadCategories = async () => {

    try {
      const result = await axios.get('https://oclock-open-apis.vercel.app/api/blog/categories');
      console.log(result);
      setCategories(result.data);
    }
    catch (error) {
      console.log('erreur !!!', error);
    }
  };

  const loadDatas = async () => {

    await Promise.all([loadPosts(), loadCategories()]);
 
    setIsLoading(false);
  };

  useEffect(
    () => {
      console.log('execution du changement de titre');
      document.title = `Blog en mode ${isZen}`;
    },
    [isZen],
  );

  useEffect(
    () => {
      loadDatas();
    },
    [],
  );

  const getFilteredPostList = (category) => {

    if (category === 'Accueil') return posts;
    return posts.filter((item) => (item.category === category));
  };

  const toggleIsZen = () => {
    setIsZen(!isZen);
  };
  return (
    <div className="blog">
      <Header
        categories={categories}
        isZen={isZen} 
        toggleIsZen={toggleIsZen} 
      />
      { isLoading // est-ce qu'on est en train de loader ?
        ? <Spinner /> // si oui on affiche le spinner
        : ( // si non on affiche les routes
          <Routes>
            <Route path="/contact" element={<ContactPage />} />
            {
              categories.map((item) => (
                <Route
                  path={item.route}
                  element={
                    <Posts posts={getFilteredPostList(item.label)} isZen={isZen} />
                  }
                  key={item.route}
                />
              ))
            }

            <Route path="/post/:slug" element={<SinglePost allPosts={posts} />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        )}

      <Footer />
    </div>
  );
}

export default Blog;

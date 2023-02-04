import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Blog from 'src/components/Blog';

const rootReactElement = (

  <BrowserRouter>
    <Blog />
  </BrowserRouter>
);

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);

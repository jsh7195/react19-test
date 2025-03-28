// App.tsx에서 사용 예시
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteFactory from '@/routes/RouteFactory';
import { routes } from '@/routes/routeConfig';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RouteFactory.createRoutes(routes)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
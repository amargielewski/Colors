import "./App.scss";

import { MainLayout } from "layouts/Main/MainLayout";
import { MainPage } from "pages/Main/MainPage";

const App = () => {
  return (
    <MainLayout>
      <MainPage />
    </MainLayout>
  );
};

export default App;

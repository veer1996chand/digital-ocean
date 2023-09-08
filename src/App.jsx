import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { theme } from "./theme/Theme";

import "./style/main.scss";
import PublicLayout from "./container/PublicLayout/PublicLayout";
import AppRoutes from "./Routes/AppRoutes";
function App() {
  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <PublicLayout>
          <AppRoutes />
        </PublicLayout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;

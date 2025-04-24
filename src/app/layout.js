import { Provider } from "react-redux";
import store from "@/redux/store";
import "dotenv/config";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}

import '../app/common/Variables.sass'
import '../App.sass';
import '../index.sass';
import Menu from "./common/Menu";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function RootLayout({ children }) {
  return (
    <html>
        <head>
            <title>Evan Lihou</title>
        </head>
        <body>
            <div className="App">
                <Menu />
                {children}
            </div>
        </body>
    </html>
  );
}

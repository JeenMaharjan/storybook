import { render } from 'preact'
import './index.css'
import "./styles/theme.css";
import "./styles/tokens.css";
import { App } from './app.tsx'

render(<App />, document.getElementById('app')!)

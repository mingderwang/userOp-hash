import './style.css'
import './typescript.svg'
import { sendUserOp } from './sendUserOp'

sendUserOp(document.querySelector('#counter') as HTMLButtonElement)

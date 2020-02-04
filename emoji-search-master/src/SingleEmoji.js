import React from 'react';
import {useParams} from 'react-router-dom';
import filterEmoji from './filterEmoji.js'
import CopyButton from './CopyButton'
import './index.css'
export const SingleEmoji=()=> {
  let {title}=useParams();
  let emj = filterEmoji(title, 1)[0];
  const codePointHex =emj.symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  return <div>
    <div className="component-emoji-result-row copy-to-clipboard tosize">
      <img alt={emj.title} src={src}/>
    </div>
    <div className="component-emoji-result-row copy-to-clipboard tosize">
      I am Emoji :: {title} :: {emj.keywords}!
    </div>
    <div className="component-emoji-result-row copy-to-clipboard tosize">
      <CopyButton />
    </div>
  </div>

}


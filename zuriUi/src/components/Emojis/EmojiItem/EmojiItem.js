import React from 'react';

import './../EmojiBox/EmojiBox.css';
const EmojiItem = ({ emoji }) => {
  return <li className='zc-emb-emojiboxItem'>{emoji.character}</li>;
};

export default EmojiItem;

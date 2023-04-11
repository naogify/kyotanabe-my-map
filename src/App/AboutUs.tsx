import './AboutUs.scss'
import config from '../config.json'
import { FaPlus } from 'react-icons/fa';

const Content = () => {
  const clickHandler = () => {
    if (config.form_url) {
      window.location.href = config.form_url
    }
  }


  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="image"><img src={`${process.env.PUBLIC_URL}/icon-256.png`} alt=""/></div>
          <div className="logo">京田辺マイマップ</div>
        </div>

        <p>京田辺マイマップは、管理人の <a href="https://twitter.com/naogify" target="_blank" rel="noopener noreferrer">naogify</a> が運営する地図サービスです。</p>
        <p>京田辺近辺のスポットについて、管理人のコメントと共に紹介します。</p>
        <p>基本的には、子連れで行けるスポットや、飲食店の紹介が多めになると思います。どうぞよろしくお願いします。</p>
        <p>何かご連絡等あれば、<a href="https://twitter.com/naogify" target="_blank" rel="noopener noreferrer">Twitter</a> に DM をお願いします。</p>

        <h2>使用素材</h2>
        <p>このアプリでは、下記の素材を使用しています。</p>
        <ul className="materials">
          <li><a href="https://www.city.kyotanabe.lg.jp/0000014375.html" target="_blank" rel="noopener noreferrer">京田辺市文化振興ロゴマーク</a></li>
          <li><a href="https://www.photo-ac.com/main/detail/1453528" target="_blank" rel="noopener noreferrer">写真素材：同志社女子大学 京田辺キャンパス（photoAC Synapse様撮影）</a></li>
        </ul>

        {config.form_url?
          <>
            <h2>データの更新について</h2>
            <p>このアプリのデータを更新するには下の「 + 」ボタンを押してフォームに必要な情報を入力してください。</p>
            <div className="goto-form"><button><FaPlus color="#FFFFFF" onClick={clickHandler} /></button></div>
          </>
          :
          <></>
        }
      </div>
    </div>
  );
};

export default Content;

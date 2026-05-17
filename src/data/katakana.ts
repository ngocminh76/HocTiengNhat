// src/data/katakana.ts
export interface KatakanaVocab {
  word: string;        // từ katakana
  romaji: string;      // cách đọc
  meaning: string;     // nghĩa
  origin: string;      // nguồn gốc tiếng Anh
}

export interface KatakanaChar {
  char: string;        // ký tự katakana
  romaji: string;      // âm đọc
  hiragana: string;    // chữ hiragana tương đương
  mnemonic: string;    // mẹo nhớ mặt chữ
  vocab: KatakanaVocab[]; // 3 ví dụ từ vựng
}

export const KATAKANA: KatakanaChar[] = [
  // ── Hàng A ──
  {
    char: 'ア', romaji: 'a', hiragana: 'あ',
    mnemonic: 'Trông như chữ A bị xén một góc — nhớ âm A!',
    vocab: [
      { word: 'アイスクリーム', romaji: 'aisu kuriimu', meaning: 'Kem', origin: 'Ice cream' },
      { word: 'アパート', romaji: 'apaato', meaning: 'Căn hộ', origin: 'Apartment' },
      { word: 'アルバイト', romaji: 'arubaito', meaning: 'Việc làm thêm', origin: 'Arbeit (Đức)' },
    ],
  },
  {
    char: 'イ', romaji: 'i', hiragana: 'い',
    mnemonic: 'Hai nét thẳng như chữ I viết hoa — âm I!',
    vocab: [
      { word: 'イタリア', romaji: 'itaria', meaning: 'Ý (Italy)', origin: 'Italia' },
      { word: 'インターネット', romaji: 'intaanetto', meaning: 'Internet', origin: 'Internet' },
      { word: 'イヤホン', romaji: 'iyahon', meaning: 'Tai nghe', origin: 'Earphone' },
    ],
  },
  {
    char: 'ウ', romaji: 'u', hiragana: 'う',
    mnemonic: 'Hình chữ U có mái che — âm U!',
    vocab: [
      { word: 'ウイルス', romaji: 'uirusu', meaning: 'Vi-rút', origin: 'Virus' },
      { word: 'ウェブサイト', romaji: 'webu saito', meaning: 'Website', origin: 'Website' },
      { word: 'ウォーター', romaji: 'wootaa', meaning: 'Nước', origin: 'Water' },
    ],
  },
  {
    char: 'エ', romaji: 'e', hiragana: 'え',
    mnemonic: 'Ba nét ngang như chữ E — âm E!',
    vocab: [
      { word: 'エアコン', romaji: 'eakon', meaning: 'Điều hòa không khí', origin: 'Air conditioner' },
      { word: 'エレベーター', romaji: 'erebeetaa', meaning: 'Thang máy', origin: 'Elevator' },
      { word: 'エンジン', romaji: 'enjin', meaning: 'Động cơ', origin: 'Engine' },
    ],
  },
  {
    char: 'オ', romaji: 'o', hiragana: 'お',
    mnemonic: 'Trông như chữ オ — âm O!',
    vocab: [
      { word: 'オフィス', romaji: 'ofisu', meaning: 'Văn phòng', origin: 'Office' },
      { word: 'オレンジ', romaji: 'orenji', meaning: 'Cam', origin: 'Orange' },
      { word: 'オーケストラ', romaji: 'ookesutora', meaning: 'Dàn nhạc', origin: 'Orchestra' },
    ],
  },
  // ── Hàng K ──
  {
    char: 'カ', romaji: 'ka', hiragana: 'か',
    mnemonic: 'Giống chữ か nhưng sắc cạnh hơn — âm KA',
    vocab: [
      { word: 'カメラ', romaji: 'kamera', meaning: 'Máy ảnh', origin: 'Camera' },
      { word: 'カフェ', romaji: 'kafe', meaning: 'Quán cà phê', origin: 'Café' },
      { word: 'カード', romaji: 'kaado', meaning: 'Thẻ card', origin: 'Card' },
    ],
  },
  {
    char: 'キ', romaji: 'ki', hiragana: 'き',
    mnemonic: 'Hai nét ngang và nét chéo như chữ キ — âm KI',
    vocab: [
      { word: 'キッチン', romaji: 'kitchin', meaning: 'Nhà bếp', origin: 'Kitchen' },
      { word: 'キャンプ', romaji: 'kyanpu', meaning: 'Cắm trại', origin: 'Camp' },
      { word: 'キーボード', romaji: 'kiiboodo', meaning: 'Bàn phím', origin: 'Keyboard' },
    ],
  },
  {
    char: 'ク', romaji: 'ku', hiragana: 'く',
    mnemonic: 'Trông như mỏ chim cúi xuống — âm KU',
    vocab: [
      { word: 'クラス', romaji: 'kurasu', meaning: 'Lớp học', origin: 'Class' },
      { word: 'クリスマス', romaji: 'kurisumasu', meaning: 'Giáng Sinh', origin: 'Christmas' },
      { word: 'クーラー', romaji: 'kuuraa', meaning: 'Máy lạnh', origin: 'Cooler' },
    ],
  },
  {
    char: 'ケ', romaji: 'ke', hiragana: 'け',
    mnemonic: 'Chữ ケ có khung vuông và nét nhô ra — âm KE',
    vocab: [
      { word: 'ケーキ', romaji: 'keeki', meaning: 'Bánh kem', origin: 'Cake' },
      { word: 'ケータイ', romaji: 'keetai', meaning: 'Điện thoại di động', origin: 'Keitai (JP)' },
      { word: 'ケース', romaji: 'keesu', meaning: 'Hộp đựng/Case', origin: 'Case' },
    ],
  },
  {
    char: 'コ', romaji: 'ko', hiragana: 'こ',
    mnemonic: 'Hai nét tạo thành góc vuông — âm KO',
    vocab: [
      { word: 'コーヒー', romaji: 'koohii', meaning: 'Cà phê', origin: 'Coffee' },
      { word: 'コンビニ', romaji: 'konbini', meaning: 'Cửa hàng tiện lợi', origin: 'Convenience store' },
      { word: 'コンピューター', romaji: 'konpyuutaa', meaning: 'Máy tính', origin: 'Computer' },
    ],
  },
  // ── Hàng S ──
  {
    char: 'サ', romaji: 'sa', hiragana: 'さ',
    mnemonic: 'Ba nét như chữ サ — âm SA',
    vocab: [
      { word: 'サッカー', romaji: 'sakkaa', meaning: 'Bóng đá', origin: 'Soccer' },
      { word: 'サンドイッチ', romaji: 'sandoicchi', meaning: 'Bánh mì sandwich', origin: 'Sandwich' },
      { word: 'サービス', romaji: 'saabisu', meaning: 'Dịch vụ', origin: 'Service' },
    ],
  },
  {
    char: 'シ', romaji: 'shi', hiragana: 'し',
    mnemonic: '3 nét như người đang cười nhìn lên — nhớ: SHE (she smiles up). KHÁC ツ!',
    vocab: [
      { word: 'シャツ', romaji: 'shatsu', meaning: 'Áo sơ mi', origin: 'Shirt' },
      { word: 'シャワー', romaji: 'shawaa', meaning: 'Vòi sen', origin: 'Shower' },
      { word: 'システム', romaji: 'shisutemu', meaning: 'Hệ thống', origin: 'System' },
    ],
  },
  {
    char: 'ス', romaji: 'su', hiragana: 'す',
    mnemonic: 'Như cái thìa có cán cong — âm SU',
    vocab: [
      { word: 'スーパー', romaji: 'suupaa', meaning: 'Siêu thị', origin: 'Supermarket' },
      { word: 'スポーツ', romaji: 'supootsu', meaning: 'Thể thao', origin: 'Sports' },
      { word: 'スマホ', romaji: 'sumaho', meaning: 'Điện thoại thông minh', origin: 'Smartphone' },
    ],
  },
  {
    char: 'セ', romaji: 'se', hiragana: 'せ',
    mnemonic: 'Trông như chữ セ với nét ngang ngắn — âm SE',
    vocab: [
      { word: 'セール', romaji: 'seeru', meaning: 'Giảm giá', origin: 'Sale' },
      { word: 'センター', romaji: 'sentaa', meaning: 'Trung tâm', origin: 'Center' },
      { word: 'セット', romaji: 'setto', meaning: 'Bộ/Set', origin: 'Set' },
    ],
  },
  {
    char: 'ソ', romaji: 'so', hiragana: 'そ',
    mnemonic: '2 nét dài nghiêng như chữ SO — nhớ: SOfa (dài, thoải mái). KHÁC ン!',
    vocab: [
      { word: 'ソファ', romaji: 'sofa', meaning: 'Ghế sofa', origin: 'Sofa' },
      { word: 'ソース', romaji: 'soosu', meaning: 'Nước sốt', origin: 'Sauce' },
      { word: 'ソフトウェア', romaji: 'sofutouwea', meaning: 'Phần mềm', origin: 'Software' },
    ],
  },
  // ── Hàng T ──
  {
    char: 'タ', romaji: 'ta', hiragana: 'た',
    mnemonic: 'Như chữ ダ không có gạch — âm TA',
    vocab: [
      { word: 'タクシー', romaji: 'takushii', meaning: 'Xe taxi', origin: 'Taxi' },
      { word: 'タオル', romaji: 'taoru', meaning: 'Khăn tắm', origin: 'Towel' },
      { word: 'タブレット', romaji: 'taburetto', meaning: 'Máy tính bảng', origin: 'Tablet' },
    ],
  },
  {
    char: 'チ', romaji: 'chi', hiragana: 'ち',
    mnemonic: '2 nét tạo hình chữ チ như cây gậy cong — âm CHI',
    vocab: [
      { word: 'チョコレート', romaji: 'chokoreeto', meaning: 'Sô-cô-la', origin: 'Chocolate' },
      { word: 'チケット', romaji: 'chiketto', meaning: 'Vé', origin: 'Ticket' },
      { word: 'チーム', romaji: 'chiimu', meaning: 'Đội/Team', origin: 'Team' },
    ],
  },
  {
    char: 'ツ', romaji: 'tsu', hiragana: 'つ',
    mnemonic: '3 nét nhìn SANG PHẢI — nhớ: TSUnami đến từ bên phải. KHÁC シ (nhìn lên)!',
    vocab: [
      { word: 'ツアー', romaji: 'tsuaa', meaning: 'Tour du lịch', origin: 'Tour' },
      { word: 'ツイッター', romaji: 'tsuittaa', meaning: 'Twitter', origin: 'Twitter' },
      { word: 'ツール', romaji: 'tsuuru', meaning: 'Công cụ', origin: 'Tool' },
    ],
  },
  {
    char: 'テ', romaji: 'te', hiragana: 'て',
    mnemonic: 'Chữ T có thêm nét ngang — âm TE',
    vocab: [
      { word: 'テレビ', romaji: 'terebi', meaning: 'Ti vi', origin: 'Television' },
      { word: 'テスト', romaji: 'tesuto', meaning: 'Bài kiểm tra', origin: 'Test' },
      { word: 'テーブル', romaji: 'teebu ru', meaning: 'Bàn', origin: 'Table' },
    ],
  },
  {
    char: 'ト', romaji: 'to', hiragana: 'と',
    mnemonic: 'Như cây bút cắm xuống — âm TO',
    vocab: [
      { word: 'トイレ', romaji: 'toire', meaning: 'Nhà vệ sinh', origin: 'Toilet' },
      { word: 'トマト', romaji: 'tomato', meaning: 'Cà chua', origin: 'Tomato' },
      { word: 'トレーニング', romaji: 'toreeningu', meaning: 'Tập luyện', origin: 'Training' },
    ],
  },
  // ── Hàng N ──
  {
    char: 'ナ', romaji: 'na', hiragana: 'な',
    mnemonic: 'Chữ ナ có nét ngang và nét chéo đơn giản — âm NA',
    vocab: [
      { word: 'ナイフ', romaji: 'naifu', meaning: 'Dao', origin: 'Knife' },
      { word: 'ナプキン', romaji: 'napukin', meaning: 'Khăn ăn', origin: 'Napkin' },
      { word: 'ナンバー', romaji: 'nanbaa', meaning: 'Số', origin: 'Number' },
    ],
  },
  {
    char: 'ニ', romaji: 'ni', hiragana: 'に',
    mnemonic: 'Hai nét ngang ngắn chồng lên nhau — âm NI',
    vocab: [
      { word: 'ニュース', romaji: 'nyuusu', meaning: 'Tin tức', origin: 'News' },
      { word: 'ニット', romaji: 'nitto', meaning: 'Đồ len', origin: 'Knit' },
      { word: 'ニワトリ', romaji: 'niwatori', meaning: 'Gà', origin: 'Native JP' },
    ],
  },
  {
    char: 'ヌ', romaji: 'nu', hiragana: 'ぬ',
    mnemonic: 'Trông như chữ ぬ nhưng sắc nét hơn — âm NU',
    vocab: [
      { word: 'ヌードル', romaji: 'nuudoru', meaning: 'Mì sợi', origin: 'Noodle' },
      { word: 'ヌード', romaji: 'nuudo', meaning: 'Màu nude/khỏa thân', origin: 'Nude' },
      { word: 'ヌガー', romaji: 'nugaa', meaning: 'Kẹo nuga', origin: 'Nougat' },
    ],
  },
  {
    char: 'ネ', romaji: 'ne', hiragana: 'ね',
    mnemonic: 'Chữ ネ có nét chéo xuống — âm NE',
    vocab: [
      { word: 'ネクタイ', romaji: 'nekutai', meaning: 'Cà vạt', origin: 'Necktie' },
      { word: 'ネット', romaji: 'netto', meaning: 'Mạng lưới/Net', origin: 'Net' },
      { word: 'ネイル', romaji: 'neiru', meaning: 'Sơn móng tay', origin: 'Nail' },
    ],
  },
  {
    char: 'ノ', romaji: 'no', hiragana: 'の',
    mnemonic: 'Chỉ một nét chéo dài — âm NO',
    vocab: [
      { word: 'ノート', romaji: 'nooto', meaning: 'Vở/Sổ tay', origin: 'Note' },
      { word: 'ノック', romaji: 'nokku', meaning: 'Gõ cửa', origin: 'Knock' },
      { word: 'ノイズ', romaji: 'noizu', meaning: 'Tiếng ồn', origin: 'Noise' },
    ],
  },
  // ── Hàng H ──
  {
    char: 'ハ', romaji: 'ha', hiragana: 'は',
    mnemonic: 'Hai nét doãng ra như chữ ハ — âm HA',
    vocab: [
      { word: 'ハンバーガー', romaji: 'hanbaagaa', meaning: 'Hamburger', origin: 'Hamburger' },
      { word: 'ハンカチ', romaji: 'hankachi', meaning: 'Khăn tay', origin: 'Handkerchief' },
      { word: 'ハード', romaji: 'haado', meaning: 'Cứng/Hard', origin: 'Hard' },
    ],
  },
  {
    char: 'ヒ', romaji: 'hi', hiragana: 'ひ',
    mnemonic: 'Nét thẳng và nét cong thấp — âm HI',
    vocab: [
      { word: 'ヒーター', romaji: 'hiitaa', meaning: 'Máy sưởi', origin: 'Heater' },
      { word: 'ヒント', romaji: 'hinto', meaning: 'Gợi ý', origin: 'Hint' },
      { word: 'ヒーロー', romaji: 'hiiroo', meaning: 'Anh hùng', origin: 'Hero' },
    ],
  },
  {
    char: 'フ', romaji: 'fu', hiragana: 'ふ',
    mnemonic: 'Trông như cái móc chữ F — âm FU',
    vocab: [
      { word: 'フォーク', romaji: 'fooku', meaning: 'Cái nĩa', origin: 'Fork' },
      { word: 'フロント', romaji: 'furonto', meaning: 'Quầy lễ tân', origin: 'Front' },
      { word: 'フリー', romaji: 'furii', meaning: 'Miễn phí/Tự do', origin: 'Free' },
    ],
  },
  {
    char: 'ヘ', romaji: 'he', hiragana: 'へ',
    mnemonic: 'Hình tam giác nhọn như ngọn núi — âm HE (giống Hiragana へ!)',
    vocab: [
      { word: 'ヘルメット', romaji: 'herumetto', meaning: 'Mũ bảo hiểm', origin: 'Helmet' },
      { word: 'ヘアスタイル', romaji: 'heasutairu', meaning: 'Kiểu tóc', origin: 'Hairstyle' },
      { word: 'ヘッドフォン', romaji: 'heddofon', meaning: 'Tai nghe chụp tai', origin: 'Headphone' },
    ],
  },
  {
    char: 'ホ', romaji: 'ho', hiragana: 'ほ',
    mnemonic: 'Chữ ホ như cây thánh giá + 2 nét — âm HO',
    vocab: [
      { word: 'ホテル', romaji: 'hoteru', meaning: 'Khách sạn', origin: 'Hotel' },
      { word: 'ホーム', romaji: 'hoomu', meaning: 'Sân ga/Trang chủ', origin: 'Home/Platform' },
      { word: 'ホワイトボード', romaji: 'howaitoboodo', meaning: 'Bảng trắng', origin: 'Whiteboard' },
    ],
  },
  // ── Hàng M ──
  {
    char: 'マ', romaji: 'ma', hiragana: 'ま',
    mnemonic: 'Chữ マ có 2 nét như mái nhà — âm MA',
    vocab: [
      { word: 'マスク', romaji: 'masuku', meaning: 'Khẩu trang', origin: 'Mask' },
      { word: 'マラソン', romaji: 'marason', meaning: 'Chạy marathon', origin: 'Marathon' },
      { word: 'マップ', romaji: 'mappu', meaning: 'Bản đồ', origin: 'Map' },
    ],
  },
  {
    char: 'ミ', romaji: 'mi', hiragana: 'み',
    mnemonic: 'Ba nét ngang ngắn — âm MI',
    vocab: [
      { word: 'ミルク', romaji: 'miruku', meaning: 'Sữa', origin: 'Milk' },
      { word: 'ミーティング', romaji: 'miitingu', meaning: 'Cuộc họp', origin: 'Meeting' },
      { word: 'ミュージック', romaji: 'myuujikku', meaning: 'Âm nhạc', origin: 'Music' },
    ],
  },
  {
    char: 'ム', romaji: 'mu', hiragana: 'む',
    mnemonic: 'Chữ ム trông như cái miệng với răng — âm MU',
    vocab: [
      { word: 'ムービー', romaji: 'muubii', meaning: 'Phim', origin: 'Movie' },
      { word: 'ムード', romaji: 'muudo', meaning: 'Tâm trạng/Mood', origin: 'Mood' },
      { word: 'ムール貝', romaji: 'muurugai', meaning: 'Trai nhuyễn thể', origin: 'Moule (Pháp)' },
    ],
  },
  {
    char: 'メ', romaji: 'me', hiragana: 'め',
    mnemonic: 'Hai nét giao nhau như chữ X — âm ME',
    vocab: [
      { word: 'メモ', romaji: 'memo', meaning: 'Ghi chú', origin: 'Memo' },
      { word: 'メール', romaji: 'meeru', meaning: 'Email', origin: 'Mail' },
      { word: 'メニュー', romaji: 'menyuu', meaning: 'Thực đơn', origin: 'Menu' },
    ],
  },
  {
    char: 'モ', romaji: 'mo', hiragana: 'も',
    mnemonic: 'Chữ モ như cành cây với 2 ngang — âm MO',
    vocab: [
      { word: 'モデル', romaji: 'moderu', meaning: 'Người mẫu/Mô hình', origin: 'Model' },
      { word: 'モニター', romaji: 'monitaa', meaning: 'Màn hình', origin: 'Monitor' },
      { word: 'モール', romaji: 'mooru', meaning: 'Trung tâm thương mại', origin: 'Mall' },
    ],
  },
  // ── Hàng Y ──
  {
    char: 'ヤ', romaji: 'ya', hiragana: 'や',
    mnemonic: 'Chữ ヤ trông như móc câu — âm YA',
    vocab: [
      { word: 'ヤード', romaji: 'yaado', meaning: 'Thước yard', origin: 'Yard' },
      { word: 'ヤフー', romaji: 'yafuu', meaning: 'Yahoo!', origin: 'Yahoo' },
      { word: 'ヤンキー', romaji: 'yankii', meaning: 'Yankee/Yankee', origin: 'Yankee' },
    ],
  },
  {
    char: 'ユ', romaji: 'yu', hiragana: 'ゆ',
    mnemonic: 'Chữ ユ như cái chảo — âm YU',
    vocab: [
      { word: 'ユーザー', romaji: 'yuuzaa', meaning: 'Người dùng', origin: 'User' },
      { word: 'ユニフォーム', romaji: 'yunifoomu', meaning: 'Đồng phục', origin: 'Uniform' },
      { word: 'ユーモア', romaji: 'yuumoa', meaning: 'Hài hước', origin: 'Humor' },
    ],
  },
  {
    char: 'ヨ', romaji: 'yo', hiragana: 'よ',
    mnemonic: 'Chữ ヨ như chữ E nằm sấp — âm YO',
    vocab: [
      { word: 'ヨーグルト', romaji: 'yooguruto', meaning: 'Sữa chua', origin: 'Yogurt' },
      { word: 'ヨット', romaji: 'yotto', meaning: 'Thuyền buồm', origin: 'Yacht' },
      { word: 'ヨーロッパ', romaji: 'yooroppa', meaning: 'Châu Âu', origin: 'Europe' },
    ],
  },
  // ── Hàng R ──
  {
    char: 'ラ', romaji: 'ra', hiragana: 'ら',
    mnemonic: 'Chữ ラ như nét ngang và nét móc — âm RA',
    vocab: [
      { word: 'ラーメン', romaji: 'raamen', meaning: 'Mì ramen', origin: 'Rāmen' },
      { word: 'ラジオ', romaji: 'rajio', meaning: 'Radio', origin: 'Radio' },
      { word: 'ランチ', romaji: 'ranchi', meaning: 'Bữa trưa', origin: 'Lunch' },
    ],
  },
  {
    char: 'リ', romaji: 'ri', hiragana: 'り',
    mnemonic: 'Hai nét thẳng song song — âm RI',
    vocab: [
      { word: 'リモコン', romaji: 'rimokon', meaning: 'Điều khiển từ xa', origin: 'Remote control' },
      { word: 'リスト', romaji: 'risuto', meaning: 'Danh sách', origin: 'List' },
      { word: 'リール', romaji: 'riiru', meaning: 'Cuộn/Reel', origin: 'Reel' },
    ],
  },
  {
    char: 'ル', romaji: 'ru', hiragana: 'る',
    mnemonic: 'Chữ ル như chân người đứng — âm RU',
    vocab: [
      { word: 'ルール', romaji: 'ruuru', meaning: 'Quy tắc', origin: 'Rule' },
      { word: 'ルーム', romaji: 'ruumu', meaning: 'Phòng', origin: 'Room' },
      { word: 'ルーター', romaji: 'ruutaa', meaning: 'Router', origin: 'Router' },
    ],
  },
  {
    char: 'レ', romaji: 're', hiragana: 'れ',
    mnemonic: 'Chữ レ như dấu check lớn — âm RE',
    vocab: [
      { word: 'レストラン', romaji: 'resutoran', meaning: 'Nhà hàng', origin: 'Restaurant' },
      { word: 'レポート', romaji: 'repooto', meaning: 'Báo cáo', origin: 'Report' },
      { word: 'レンズ', romaji: 'renzu', meaning: 'Ống kính', origin: 'Lens' },
    ],
  },
  {
    char: 'ロ', romaji: 'ro', hiragana: 'ろ',
    mnemonic: 'Hình chữ nhật nhỏ — âm RO',
    vocab: [
      { word: 'ロボット', romaji: 'robotto', meaning: 'Robot', origin: 'Robot' },
      { word: 'ロック', romaji: 'rokku', meaning: 'Nhạc Rock/Khóa', origin: 'Rock/Lock' },
      { word: 'ロゴ', romaji: 'rogo', meaning: 'Logo', origin: 'Logo' },
    ],
  },
  // ── Hàng W ──
  {
    char: 'ワ', romaji: 'wa', hiragana: 'わ',
    mnemonic: 'Nét cong như chữ U lệch — âm WA',
    vocab: [
      { word: 'ワイン', romaji: 'wain', meaning: 'Rượu vang', origin: 'Wine' },
      { word: 'ワイヤレス', romaji: 'waiyaresu', meaning: 'Không dây', origin: 'Wireless' },
      { word: 'ワーク', romaji: 'waaku', meaning: 'Công việc', origin: 'Work' },
    ],
  },
  {
    char: 'ヲ', romaji: 'wo', hiragana: 'を',
    mnemonic: 'Ít dùng trong loanword — chủ yếu là trợ từ を đọc là "o"',
    vocab: [
      { word: 'ヲタク', romaji: 'wotaku', meaning: 'Otaku (mọt)', origin: 'Otaku (JP)' },
      { word: 'ヲ (trợ từ)', romaji: 'o / wo', meaning: 'Dùng sau tân ngữ (O)', origin: 'Japanese particle' },
      { word: 'ヲ (cũ)', romaji: 'wo', meaning: 'Ký tự cổ, ít gặp', origin: 'Classical JP' },
    ],
  },
  {
    char: 'ン', romaji: 'n', hiragana: 'ん',
    mnemonic: '2 nét ngắn hơn ソ, góc nhọn hơn — âm N. KHÁC ソ (dài và thoải)!',
    vocab: [
      { word: 'ランキング', romaji: 'rankingu', meaning: 'Bảng xếp hạng', origin: 'Ranking' },
      { word: 'サンドイッチ', romaji: 'sandoicchi', meaning: 'Bánh sandwich', origin: 'Sandwich' },
      { word: 'アンケート', romaji: 'ankeeto', meaning: 'Bảng khảo sát', origin: 'Enquête (Pháp)' },
    ],
  },
];

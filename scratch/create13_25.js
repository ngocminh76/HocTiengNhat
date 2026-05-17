import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.join(__dirname, '../src/data/lessons');

const newLessons = [
  {
    id: 13,
    chapter: '第13課',
    title: 'ほしい・たい',
    titleVn: 'Bài 13: Mong muốn',
    theme: 'Mong muốn và Mục đích',
    words: [
      { word: '遊びます', reading: 'あそびます', romaji: 'asobimasu', meaning: 'Chơi', type: 'Động từ' },
      { word: '泳ぎます', reading: 'およぎます', romaji: 'oyogimasu', meaning: 'Bơi', type: 'Động từ' },
      { word: '迎えます', reading: 'むかえます', romaji: 'mukaemasu', meaning: 'Đón', type: 'Động từ' },
      { word: '疲れます', reading: 'つかれます', romaji: 'tsukaremasu', meaning: 'Mệt mỏi', type: 'Động từ' },
      { word: '結婚します', reading: 'けっこんします', romaji: 'kekkonshimasu', meaning: 'Kết hôn', type: 'Động từ' },
      { word: '買い物します', reading: 'かいものします', romaji: 'kaimonoshimasu', meaning: 'Mua sắm', type: 'Động từ' },
      { word: '食事します', reading: 'しょくじします', romaji: 'shokujishimasu', meaning: 'Ăn cơm', type: 'Động từ' },
      { word: '散歩します', reading: 'さんぽします', romaji: 'sanposhimasu', meaning: 'Đi dạo', type: 'Động từ' },
      { word: '大変（な）', reading: 'たいへん', romaji: 'taihen', meaning: 'Vất vả', type: 'Tính từ na' },
      { word: '欲しい', reading: 'ほしい', romaji: 'hoshii', meaning: 'Muốn có', type: 'Tính từ i' },
      { word: '広い', reading: 'ひろい', romaji: 'hiroi', meaning: 'Rộng', type: 'Tính từ i' },
      { word: '狭い', reading: 'せまい', romaji: 'semai', meaning: 'Hẹp', type: 'Tính từ i' },
      { word: 'プール', reading: 'プール', romaji: 'puuru', meaning: 'Bể bơi', type: 'Danh từ' },
      { word: '川', reading: 'かわ', romaji: 'kawa', meaning: 'Sông', type: 'Danh từ' },
      { word: '美術', reading: 'びじゅつ', romaji: 'bijutsu', meaning: 'Mỹ thuật', type: 'Danh từ' },
      { word: '釣り', reading: 'つり', romaji: 'tsuri', meaning: 'Câu cá', type: 'Danh từ' },
      { word: '週末', reading: 'しゅうまつ', romaji: 'shuumatsu', meaning: 'Cuối tuần', type: 'Danh từ' },
      { word: 'お正月', reading: 'おしょうがつ', romaji: 'oshougatsu', meaning: 'Tết', type: 'Danh từ' },
      { word: '何か', reading: 'なにか', romaji: 'nanika', meaning: 'Cái gì đó', type: 'Đại từ' },
      { word: 'どこか', reading: 'どこか', romaji: 'dokoka', meaning: 'Đâu đó', type: 'Đại từ' }
    ]
  },
  {
    id: 14,
    chapter: '第14課',
    title: 'て形・てください',
    titleVn: 'Bài 14: Thể Te và Yêu cầu',
    theme: 'Nhờ vả và Hành động đang diễn ra',
    words: [
      { word: 'つけます', reading: 'つけます', romaji: 'tsukemasu', meaning: 'Bật (điện, máy)', type: 'Động từ' },
      { word: '消します', reading: 'けします', romaji: 'keshimasu', meaning: 'Tắt (điện, máy)', type: 'Động từ' },
      { word: '開けます', reading: 'あけます', romaji: 'akemasu', meaning: 'Mở (cửa)', type: 'Động từ' },
      { word: '閉めます', reading: 'しめます', romaji: 'shimemasu', meaning: 'Đóng (cửa)', type: 'Động từ' },
      { word: '急ぎます', reading: 'いそぎます', romaji: 'isogimasu', meaning: 'Vội, gấp', type: 'Động từ' },
      { word: '待ちます', reading: 'まちます', romaji: 'machimasu', meaning: 'Đợi', type: 'Động từ' },
      { word: '持ちます', reading: 'もちます', romaji: 'mochimasu', meaning: 'Cầm, mang', type: 'Động từ' },
      { word: '取ります', reading: 'とります', romaji: 'torimasu', meaning: 'Lấy', type: 'Động từ' },
      { word: '手伝います', reading: 'てつだいます', romaji: 'tetsudaimasu', meaning: 'Giúp đỡ', type: 'Động từ' },
      { word: '呼びます', reading: 'よびます', romaji: 'yobimasu', meaning: 'Gọi', type: 'Động từ' },
      { word: '話します', reading: 'はなします', romaji: 'hanashimasu', meaning: 'Nói chuyện', type: 'Động từ' },
      { word: '使います', reading: 'つかいます', romaji: 'tsukaimasu', meaning: 'Sử dụng', type: 'Động từ' },
      { word: '止めます', reading: 'とめます', romaji: 'tomemasu', meaning: 'Dừng', type: 'Động từ' },
      { word: '見せます', reading: 'みせます', romaji: 'misemasu', meaning: 'Cho xem', type: 'Động từ' },
      { word: '教えます', reading: 'おしえます', romaji: 'oshiemasu', meaning: 'Nói cho biết', type: 'Động từ' },
      { word: '座ります', reading: 'すわります', romaji: 'suwarimasu', meaning: 'Ngồi', type: 'Động từ' },
      { word: '立ちます', reading: 'たちます', romaji: 'tachimasu', meaning: 'Đứng', type: 'Động từ' },
      { word: '入ります', reading: 'はいります', romaji: 'hairimasu', meaning: 'Vào', type: 'Động từ' },
      { word: '出ます', reading: 'でます', romaji: 'demasu', meaning: 'Ra', type: 'Động từ' },
      { word: '降ります', reading: 'ふります', romaji: 'furimasu', meaning: 'Rơi (mưa, tuyết)', type: 'Động từ' }
    ]
  },
  {
    id: 15,
    chapter: '第15課',
    title: 'てもいいです',
    titleVn: 'Bài 15: Sự cho phép',
    theme: 'Cho phép và Cấm đoán',
    words: [
      { word: '置きます', reading: 'おきます', romaji: 'okimasu', meaning: 'Đặt, để', type: 'Động từ' },
      { word: '作ります', reading: 'つかります', romaji: 'tsukurimasu', meaning: 'Làm, chế tạo', type: 'Động từ' },
      { word: '売ります', reading: 'うります', romaji: 'urimasu', meaning: 'Bán', type: 'Động từ' },
      { word: '知ります', reading: 'しります', romaji: 'shirimasu', meaning: 'Biết', type: 'Động từ' },
      { word: '住みます', reading: 'すみます', romaji: 'sumimasu', meaning: 'Sống', type: 'Động từ' },
      { word: '研究します', reading: 'けんきゅうします', romaji: 'kenkyuushimasu', meaning: 'Nghiên cứu', type: 'Động từ' },
      { word: '資料', reading: 'しりょう', romaji: 'shiryou', meaning: 'Tài liệu', type: 'Danh từ' },
      { word: 'カタログ', reading: 'カタログ', romaji: 'katarogu', meaning: 'Catalog', type: 'Danh từ' },
      { word: '時刻表', reading: 'じこくひょう', romaji: 'jikokuhyou', meaning: 'Bảng giờ tàu', type: 'Danh từ' },
      { word: '服', reading: 'ふく', romaji: 'fuku', meaning: 'Quần áo', type: 'Danh từ' },
      { word: '製品', reading: 'せいひん', romaji: 'seihin', meaning: 'Sản phẩm', type: 'Danh từ' },
      { word: 'ソフト', reading: 'ソフト', romaji: 'sofuto', meaning: 'Phần mềm', type: 'Danh từ' },
      { word: '専門', reading: 'せんもん', romaji: 'senmon', meaning: 'Chuyên môn', type: 'Danh từ' },
      { word: '歯医者', reading: 'はいしゃ', romaji: 'haisha', meaning: 'Nha sĩ', type: 'Danh từ' },
      { word: '床屋', reading: 'とこや', romaji: 'tokoya', meaning: 'Hiệu cắt tóc', type: 'Danh từ' },
      { word: '独身', reading: 'どくしん', romaji: 'dokushin', meaning: 'Độc thân', type: 'Danh từ' },
      { word: '特に', reading: 'とくに', romaji: 'tokuni', meaning: 'Đặc biệt', type: 'Phó từ' },
      { word: '思い出します', reading: 'おもいだします', romaji: 'omoidashimasu', meaning: 'Nhớ lại', type: 'Động từ' },
      { word: 'ご家族', reading: 'ごかぞく', romaji: 'gokazoku', meaning: 'Gia đình (người khác)', type: 'Danh từ' },
      { word: '高校', reading: 'こうこう', romaji: 'koukou', meaning: 'Trường cấp 3', type: 'Danh từ' }
    ]
  },
  {
    id: 16,
    chapter: '第16課',
    title: 'てから・て、て',
    titleVn: 'Bài 16: Nối tiếp hành động',
    theme: 'Liệt kê hành động và Tính từ',
    words: [
      { word: '乗ります', reading: 'のります', romaji: 'norimasu', meaning: 'Lên (tàu, xe)', type: 'Động từ' },
      { word: '降ります', reading: 'おります', romaji: 'orimasu', meaning: 'Xuống (tàu, xe)', type: 'Động từ' },
      { word: '乗り換えます', reading: 'のりかえます', romaji: 'norikaemasu', meaning: 'Chuyển tàu', type: 'Động từ' },
      { word: '浴びます', reading: 'あびます', romaji: 'abimasu', meaning: 'Tắm', type: 'Động từ' },
      { word: '入れます', reading: 'いれます', romaji: 'iremasu', meaning: 'Cho vào', type: 'Động từ' },
      { word: '出します', reading: 'だします', romaji: 'dashimasu', meaning: 'Lấy ra', type: 'Động từ' },
      { word: '入ります', reading: 'はいります', romaji: 'hairimasu', meaning: 'Vào (đại học)', type: 'Động từ' },
      { word: '出ます', reading: 'でます', romaji: 'demasu', meaning: 'Ra, tốt nghiệp', type: 'Động từ' },
      { word: 'やめます', reading: 'やめます', romaji: 'yamemasu', meaning: 'Bỏ, từ bỏ', type: 'Động từ' },
      { word: '押します', reading: 'おします', romaji: 'oshimasu', meaning: 'Bấm, ấn', type: 'Động từ' },
      { word: '若い', reading: 'わかい', romaji: 'wakai', meaning: 'Trẻ', type: 'Tính từ i' },
      { word: '長い', reading: 'ながい', romaji: 'nagai', meaning: 'Dài', type: 'Tính từ i' },
      { word: '短い', reading: 'みじかい', romaji: 'mijikai', meaning: 'Ngắn', type: 'Tính từ i' },
      { word: '明るい', reading: 'あかるい', romaji: 'akarui', meaning: 'Sáng sủa', type: 'Tính từ i' },
      { word: '暗い', reading: 'くらい', romaji: 'kurai', meaning: 'Tối', type: 'Tính từ i' },
      { word: '体', reading: 'からだ', romaji: 'karada', meaning: 'Cơ thể', type: 'Danh từ' },
      { word: '頭', reading: 'あたま', romaji: 'atama', meaning: 'Đầu', type: 'Danh từ' },
      { word: '髪', reading: 'かみ', romaji: 'kami', meaning: 'Tóc', type: 'Danh từ' },
      { word: '顔', reading: 'かお', romaji: 'kao', meaning: 'Khuôn mặt', type: 'Danh từ' },
      { word: '目', reading: 'め', romaji: 'me', meaning: 'Mắt', type: 'Danh từ' }
    ]
  },
  {
    id: 17,
    chapter: '第17課',
    title: 'ない形・ないでください',
    titleVn: 'Bài 17: Phủ định V-nai',
    theme: 'Khuyên bảo và Cấm đoán',
    words: [
      { word: '覚えます', reading: 'おぼえます', romaji: 'oboemasu', meaning: 'Nhớ, học thuộc', type: 'Động từ' },
      { word: '忘れます', reading: 'わすれます', romaji: 'wasuremasu', meaning: 'Quên', type: 'Động từ' },
      { word: 'なくします', reading: 'なくします', romaji: 'nakushimasu', meaning: 'Làm mất', type: 'Động từ' },
      { word: '払います', reading: 'はらいます', romaji: 'haraimasu', meaning: 'Trả tiền', type: 'Động từ' },
      { word: '返します', reading: 'かえします', romaji: 'kaeshimasu', meaning: 'Trả lại', type: 'Động từ' },
      { word: '出かけます', reading: 'でかけます', romaji: 'dekakemasu', meaning: 'Ra ngoài', type: 'Động từ' },
      { word: '脱ぎます', reading: 'ぬぎます', romaji: 'nugimasu', meaning: 'Cởi (quần áo, giày)', type: 'Động từ' },
      { word: '持って行きます', reading: 'もっていきます', romaji: 'motte ikimasu', meaning: 'Mang đi', type: 'Động từ' },
      { word: '持って来ます', reading: 'もってきます', romaji: 'motte kimasu', meaning: 'Mang đến', type: 'Động từ' },
      { word: '心配します', reading: 'しんぱいします', romaji: 'shinpaishimasu', meaning: 'Lo lắng', type: 'Động từ' },
      { word: '残業します', reading: 'ざんぎょうします', romaji: 'zangyoushimasu', meaning: 'Làm thêm giờ', type: 'Động từ' },
      { word: '出張します', reading: 'しゅっちょうします', romaji: 'shucchoushimasu', meaning: 'Đi công tác', type: 'Động từ' },
      { word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: 'Thuốc', type: 'Danh từ' },
      { word: 'お風呂', reading: 'おふろ', romaji: 'ofuro', meaning: 'Bồn tắm', type: 'Danh từ' },
      { word: '大切（な）', reading: 'たいせつ', romaji: 'taisetsu', meaning: 'Quan trọng', type: 'Tính từ na' },
      { word: '大丈夫（な）', reading: 'だいじょうぶ', romaji: 'daijoubu', meaning: 'Không sao', type: 'Tính từ na' },
      { word: '危ない', reading: 'あぶない', romaji: 'abunai', meaning: 'Nguy hiểm', type: 'Tính từ i' },
      { word: '禁煙', reading: 'きんえん', romaji: 'kinen', meaning: 'Cấm hút thuốc', type: 'Danh từ' },
      { word: '保険証', reading: 'ほけんしょう', romaji: 'hokenshou', meaning: 'Thẻ bảo hiểm', type: 'Danh từ' },
      { word: '熱', reading: 'ねつ', romaji: 'netsu', meaning: 'Sốt', type: 'Danh từ' }
    ]
  },
  {
    id: 18,
    chapter: '第18課',
    title: '辞書形・ことができます',
    titleVn: 'Bài 18: Thể từ điển',
    theme: 'Khả năng và Sở thích',
    words: [
      { word: 'できます', reading: 'できます', romaji: 'dekimasu', meaning: 'Có thể', type: 'Động từ' },
      { word: '洗います', reading: 'あらいます', romaji: 'araimasu', meaning: 'Rửa', type: 'Động từ' },
      { word: '弾きます', reading: 'ひきます', romaji: 'hikimasu', meaning: 'Chơi (nhạc cụ)', type: 'Động từ' },
      { word: '歌います', reading: 'うたいます', romaji: 'utaimasu', meaning: 'Hát', type: 'Động từ' },
      { word: '集めます', reading: 'あつめます', romaji: 'atsumemasu', meaning: 'Sưu tầm, tập hợp', type: 'Động từ' },
      { word: '捨てます', reading: 'すてます', romaji: 'sutemasu', meaning: 'Vứt', type: 'Động từ' },
      { word: '換えます', reading: 'かえます', romaji: 'kaemasu', meaning: 'Đổi', type: 'Động từ' },
      { word: '運転します', reading: 'うんてんします', romaji: 'untenshimasu', meaning: 'Lái xe', type: 'Động từ' },
      { word: '予約します', reading: 'よやくします', romaji: 'yoyakushimasu', meaning: 'Đặt chỗ', type: 'Động từ' },
      { word: 'ピアノ', reading: 'ピアノ', romaji: 'piano', meaning: 'Đàn Piano', type: 'Danh từ' },
      { word: '現金', reading: 'げんきん', romaji: 'genkin', meaning: 'Tiền mặt', type: 'Danh từ' },
      { word: '趣味', reading: 'しゅみ', romaji: 'shumi', meaning: 'Sở thích', type: 'Danh từ' },
      { word: '日記', reading: 'にっき', romaji: 'nikki', meaning: 'Nhật ký', type: 'Danh từ' },
      { word: 'お祈り', reading: 'おい祈り', romaji: 'oinori', meaning: 'Việc cầu nguyện', type: 'Danh từ' },
      { word: '課長', reading: 'かちょう', romaji: 'kachou', meaning: 'Tổ trưởng', type: 'Danh từ' },
      { word: '部長', reading: 'ぶちょう', romaji: 'buchou', meaning: 'Trưởng phòng', type: 'Danh từ' },
      { word: '社長', reading: 'しゃちょう', romaji: 'shachou', meaning: 'Giám đốc', type: 'Danh từ' },
      { word: '動物', reading: 'どうぶつ', romaji: 'doubutsu', meaning: 'Động vật', type: 'Danh từ' },
      { word: '馬', reading: 'うま', romaji: 'uma', meaning: 'Con ngựa', type: 'Danh từ' },
      { word: 'インターネット', reading: 'インターネット', romaji: 'intaanetto', meaning: 'Internet', type: 'Danh từ' }
    ]
  },
  {
    id: 19,
    chapter: '第19課',
    title: 'た形・ことがあります',
    titleVn: 'Bài 19: Thể quá khứ',
    theme: 'Kinh nghiệm và Hành động nối tiếp',
    words: [
      { word: '登ります', reading: 'のぼります', romaji: 'noborimasu', meaning: 'Leo (núi)', type: 'Động từ' },
      { word: '泊まります', reading: 'とまります', romaji: 'tomarimasu', meaning: 'Trọ lại', type: 'Động từ' },
      { word: '掃除します', reading: 'そうじします', romaji: 'soujishimasu', meaning: 'Dọn dẹp', type: 'Động từ' },
      { word: '洗濯します', reading: 'せんたくします', romaji: 'sentakushimasu', meaning: 'Giặt giũ', type: 'Động từ' },
      { word: '練習します', reading: 'れんしゅうします', romaji: 'renshuushimasu', meaning: 'Luyện tập', type: 'Động từ' },
      { word: 'なります', reading: 'なります', romaji: 'narimasu', meaning: 'Trở thành, trở nên', type: 'Động từ' },
      { word: '眠い', reading: 'ねむい', romaji: 'nemui', meaning: 'Buồn ngủ', type: 'Tính từ i' },
      { word: '強い', reading: 'つよい', romaji: 'tsuyoi', meaning: 'Mạnh', type: 'Tính từ i' },
      { word: '弱い', reading: 'よわい', romaji: 'yowai', meaning: 'Yếu', type: 'Tính từ i' },
      { word: '調子がいい', reading: 'ちょうしがいい', romaji: 'choushi ga ii', meaning: 'Tình trạng tốt', type: 'Cụm từ' },
      { word: '調子が悪い', reading: 'ちょうしがわるい', romaji: 'choushi ga warui', meaning: 'Tình trạng xấu', type: 'Cụm từ' },
      { word: '状態', reading: 'じょうたい', romaji: 'joutai', meaning: 'Trạng thái', type: 'Danh từ' },
      { word: 'ゴルフ', reading: 'ゴルフ', romaji: 'gorufu', meaning: 'Golf', type: 'Danh từ' },
      { word: '相撲', reading: 'すもう', romaji: 'sumou', meaning: 'Sumo', type: 'Danh từ' },
      { word: 'パチンコ', reading: 'パチンコ', romaji: 'pachinko', meaning: 'Pachinko', type: 'Danh từ' },
      { word: 'お茶', reading: 'おちゃ', romaji: 'ocha', meaning: 'Trà đạo', type: 'Danh từ' },
      { word: '日', reading: 'ひ', romaji: 'hi', meaning: 'Ngày', type: 'Danh từ' },
      { word: '一度', reading: 'いちど', romaji: 'ichido', meaning: 'Một lần', type: 'Phó từ' },
      { word: '一度も', reading: 'いちども', romaji: 'ichidomo', meaning: 'Chưa một lần', type: 'Phó từ' },
      { word: 'だんだん', reading: 'だんだん', romaji: 'dandan', meaning: 'Dần dần', type: 'Phó từ' }
    ]
  },
  {
    id: 20,
    chapter: '第20課',
    title: '普通体',
    titleVn: 'Bài 20: Thể thông thường',
    theme: 'Giao tiếp suồng sã',
    words: [
      { word: '要ります', reading: 'いります', romaji: 'irimasu', meaning: 'Cần', type: 'Động từ' },
      { word: '調べます', reading: 'しらべます', romaji: 'shirabemasu', meaning: 'Tìm hiểu, điều tra', type: 'Động từ' },
      { word: '直します', reading: 'なおします', romaji: 'naoshimasu', meaning: 'Sửa chữa', type: 'Động từ' },
      { word: '修理します', reading: 'しゅうりします', romaji: 'shuurishimasu', meaning: 'Sửa chữa (máy móc)', type: 'Động từ' },
      { word: '電話します', reading: 'でんわします', romaji: 'denwashimasu', meaning: 'Gọi điện', type: 'Động từ' },
      { word: '僕', reading: 'ぼく', romaji: 'boku', meaning: 'Tôi (nam giới dùng)', type: 'Đại từ' },
      { word: '君', reading: 'きみ', romaji: 'kimi', meaning: 'Bạn (nam giới gọi nữ/nam bằng tuổi)', type: 'Đại từ' },
      { word: 'うん', reading: 'うん', romaji: 'un', meaning: 'Có (vâng - thông thường)', type: 'Từ cảm thán' },
      { word: 'ううん', reading: 'ううん', romaji: 'uun', meaning: 'Không (thông thường)', type: 'Từ cảm thán' },
      { word: 'サラリーマン', reading: 'サラリーマン', romaji: 'sarariiman', meaning: 'Nhân viên làm lương', type: 'Danh từ' },
      { word: '言葉', reading: 'ことば', romaji: 'kotoba', meaning: 'Từ vựng, ngôn ngữ', type: 'Danh từ' },
      { word: '物価', reading: 'ぶっか', romaji: 'bukka', meaning: 'Vật giá', type: 'Danh từ' },
      { word: '着物', reading: 'きもの', romaji: 'kimono', meaning: 'Kimono', type: 'Danh từ' },
      { word: 'ビザ', reading: 'ビザ', romaji: 'biza', meaning: 'Visa', type: 'Danh từ' },
      { word: '初め', reading: 'はじめ', romaji: 'hajime', meaning: 'Ban đầu', type: 'Danh từ' },
      { word: '終わり', reading: 'おわり', romaji: 'owari', meaning: 'Kết thúc', type: 'Danh từ' },
      { word: 'こっち', reading: 'こっち', romaji: 'kocchi', meaning: 'Phía này (thông thường)', type: 'Đại từ' },
      { word: 'そっち', reading: 'そっち', romaji: 'socchi', meaning: 'Phía đó (thông thường)', type: 'Đại từ' },
      { word: 'あっち', reading: 'あっち', romaji: 'acchi', meaning: 'Phía kia (thông thường)', type: 'Đại từ' },
      { word: 'どっち', reading: 'どっち', romaji: 'docchi', meaning: 'Phía nào (thông thường)', type: 'Từ để hỏi' }
    ]
  },
  {
    id: 21,
    chapter: '第21課',
    title: 'と思います・と言います',
    titleVn: 'Bài 21: Suy nghĩ và Trích dẫn',
    theme: 'Đánh giá và Tường thuật',
    words: [
      { word: '思います', reading: 'おもいます', romaji: 'omoimasu', meaning: 'Nghĩ rằng', type: 'Động từ' },
      { word: '言います', reading: 'いいます', romaji: 'iimasu', meaning: 'Nói rằng', type: 'Động từ' },
      { word: '足ります', reading: 'たります', romaji: 'tarimasu', meaning: 'Đủ', type: 'Động từ' },
      { word: '勝ちます', reading: 'かちます', romaji: 'kachimasu', meaning: 'Thắng', type: 'Động từ' },
      { word: '負けます', reading: 'まけます', romaji: 'makemasu', meaning: 'Thua', type: 'Động từ' },
      { word: 'あります', reading: 'あります', romaji: 'arimasu', meaning: 'Được tổ chức (lễ hội)', type: 'Động từ' },
      { word: '役に立ちます', reading: 'やくにたちます', romaji: 'yaku ni tachimasu', meaning: 'Hữu ích', type: 'Động từ' },
      { word: '無駄（な）', reading: 'むだ', romaji: 'muda', meaning: 'Lãng phí', type: 'Tính từ na' },
      { word: '不便（な）', reading: 'ふべん', romaji: 'fuben', meaning: 'Bất tiện', type: 'Tính từ na' },
      { word: '同じ', reading: 'おなじ', romaji: 'onaji', meaning: 'Giống nhau', type: 'Tính từ' },
      { word: 'すごい', reading: 'すごい', romaji: 'sugoi', meaning: 'Kinh khủng, tuyệt vời', type: 'Tính từ i' },
      { word: '首相', reading: 'しゅしょう', romaji: 'shushou', meaning: 'Thủ tướng', type: 'Danh từ' },
      { word: '大統領', reading: 'だいとうりょう', romaji: 'daitouryou', meaning: 'Tổng thống', type: 'Danh từ' },
      { word: '政治', reading: 'せいじ', romaji: 'seiji', meaning: 'Chính trị', type: 'Danh từ' },
      { word: 'ニュース', reading: 'ニュース', romaji: 'nyuusu', meaning: 'Tin tức', type: 'Danh từ' },
      { word: 'スピーチ', reading: 'スピーチ', romaji: 'supiichi', meaning: 'Bài phát biểu', type: 'Danh từ' },
      { word: '試合', reading: 'しあい', romaji: 'shiai', meaning: 'Trận đấu', type: 'Danh từ' },
      { word: 'アルバイト', reading: 'アルバイト', romaji: 'arubaito', meaning: 'Làm thêm', type: 'Danh từ' },
      { word: '意見', reading: 'いけん', romaji: 'iken', meaning: 'Ý kiến', type: 'Danh từ' },
      { word: 'お話', reading: 'おはなし', romaji: 'ohanashi', meaning: 'Câu chuyện', type: 'Danh từ' }
    ]
  },
  {
    id: 22,
    chapter: '第22課',
    title: '名詞修飾',
    titleVn: 'Bài 22: Mệnh đề bổ nghĩa',
    theme: 'Định ngữ',
    words: [
      { word: '着ます', reading: 'きます', romaji: 'kimasu', meaning: 'Mặc (áo sơ mi, vv)', type: 'Động từ' },
      { word: 'はきます', reading: 'はきます', romaji: 'hakimasu', meaning: 'Đi, mặc (giày, quần)', type: 'Động từ' },
      { word: 'かぶります', reading: 'かぶります', romaji: 'kaburimasu', meaning: 'Đội (mũ)', type: 'Động từ' },
      { word: 'かけます', reading: 'かけます', romaji: 'kakemasu', meaning: 'Đeo (kính)', type: 'Động từ' },
      { word: '生まれます', reading: 'うまれます', romaji: 'umaremasu', meaning: 'Được sinh ra', type: 'Động từ' },
      { word: 'コート', reading: 'コート', romaji: 'kooto', meaning: 'Áo khoác', type: 'Danh từ' },
      { word: 'スーツ', reading: 'スーツ', romaji: 'suutsu', meaning: 'Suit, vest', type: 'Danh từ' },
      { word: 'セーター', reading: 'セーター', romaji: 'seetaa', meaning: 'Áo len', type: 'Danh từ' },
      { word: '帽子', reading: 'ぼうし', romaji: 'boushi', meaning: 'Mũ', type: 'Danh từ' },
      { word: '眼鏡', reading: 'めがね', romaji: 'megane', meaning: 'Kính', type: 'Danh từ' },
      { word: 'よく', reading: 'よく', romaji: 'yoku', meaning: 'Thường, rõ', type: 'Phó từ' },
      { word: 'おめでとうございます', reading: 'おめでとうございます', romaji: 'omedetou gozaimasu', meaning: 'Chúc mừng', type: 'Câu chào' },
      { word: 'こちら', reading: 'こちら', romaji: 'kochira', meaning: 'Phía này', type: 'Đại từ' },
      { word: '家賃', reading: 'やちん', romaji: 'yachin', meaning: 'Tiền thuê nhà', type: 'Danh từ' },
      { word: '和室', reading: 'わしつ', romaji: 'washitsu', meaning: 'Phòng kiểu Nhật', type: 'Danh từ' },
      { word: '押し入れ', reading: 'おしいれ', romaji: 'oshiire', meaning: 'Tủ âm tường', type: 'Danh từ' },
      { word: '布団', reading: 'ふとん', romaji: 'futon', meaning: 'Đệm', type: 'Danh từ' },
      { word: 'アパート', reading: 'アパート', romaji: 'apaato', meaning: 'Căn hộ', type: 'Danh từ' },
      { word: 'パリ', reading: 'パリ', romaji: 'Pari', meaning: 'Paris', type: 'Danh từ' },
      { word: '万里の長城', reading: 'ばんりのちょうじょう', romaji: 'Banri no Choujou', meaning: 'Vạn Lý Trường Thành', type: 'Danh từ' }
    ]
  },
  {
    id: 23,
    chapter: '第23課',
    title: '〜時・〜と',
    titleVn: 'Bài 23: Mệnh đề Thời gian và Điều kiện',
    theme: 'Thời gian và Hệ quả tất yếu',
    words: [
      { word: '聞きます', reading: 'ききます', romaji: 'kikimasu', meaning: 'Hỏi (giáo viên)', type: 'Động từ' },
      { word: '回します', reading: 'まわします', romaji: 'mawashimasu', meaning: 'Vặn (núm)', type: 'Động từ' },
      { word: '引きます', reading: 'ひきます', romaji: 'hikimasu', meaning: 'Kéo', type: 'Động từ' },
      { word: '変えます', reading: 'かえます', romaji: 'kaemasu', meaning: 'Đổi', type: 'Động từ' },
      { word: '触ります', reading: 'さわります', romaji: 'sawarimasu', meaning: 'Sờ, chạm', type: 'Động từ' },
      { word: '出ます', reading: 'でます', romaji: 'demasu', meaning: 'Ra (tiền thừa)', type: 'Động từ' },
      { word: '動きます', reading: 'うごきます', romaji: 'ugokimasu', meaning: 'Hoạt động (máy)', type: 'Động từ' },
      { word: '歩きます', reading: 'あるきます', romaji: 'arukimasu', meaning: 'Đi bộ', type: 'Động từ' },
      { word: '渡ります', reading: 'わたります', romaji: 'watarimasu', meaning: 'Qua (cầu, đường)', type: 'Động từ' },
      { word: '気をつけます', reading: 'きをつけます', romaji: 'ki wo tsukemasu', meaning: 'Cẩn thận', type: 'Động từ' },
      { word: '引っ越します', reading: 'ひっこします', romaji: 'hikkoshimasu', meaning: 'Chuyển nhà', type: 'Động từ' },
      { word: '電気屋', reading: 'でんきや', romaji: 'denkiya', meaning: 'Cửa hàng điện máy', type: 'Danh từ' },
      { word: 'サイズ', reading: 'サイズ', romaji: 'saizu', meaning: 'Cỡ, size', type: 'Danh từ' },
      { word: '音', reading: 'おと', romaji: 'oto', meaning: 'Âm thanh', type: 'Danh từ' },
      { word: '機械', reading: 'きかい', romaji: 'kikai', meaning: 'Máy móc', type: 'Danh từ' },
      { word: 'つまみ', reading: 'つまみ', romaji: 'tsumami', meaning: 'Núm vặn', type: 'Danh từ' },
      { word: '故障', reading: 'こしょう', romaji: 'koshou', meaning: 'Hỏng hóc', type: 'Danh từ' },
      { word: '道', reading: 'みち', romaji: 'michi', meaning: 'Đường đi', type: 'Danh từ' },
      { word: '交差点', reading: 'こうさてん', romaji: 'kousaten', meaning: 'Ngã tư', type: 'Danh từ' },
      { word: '信号', reading: 'しんごう', romaji: 'shingou', meaning: 'Đèn giao thông', type: 'Danh từ' }
    ]
  },
  {
    id: 24,
    chapter: '第24課',
    title: 'くれます・てあげます',
    titleVn: 'Bài 24: Cho và Nhận',
    theme: 'Sự trao đổi',
    words: [
      { word: 'くれます', reading: 'くれます', romaji: 'kuremasu', meaning: 'Cho (tôi)', type: 'Động từ' },
      { word: '連れて行きます', reading: 'つれていきます', romaji: 'tsurete ikimasu', meaning: 'Dẫn đi', type: 'Động từ' },
      { word: '連れて来ます', reading: 'つれてきます', romaji: 'tsurete kimasu', meaning: 'Dẫn đến', type: 'Động từ' },
      { word: '送ります', reading: 'おくります', romaji: 'okurimasu', meaning: 'Tiễn (ai đó)', type: 'Động từ' },
      { word: '紹介します', reading: 'しょうかいします', romaji: 'shoukaishimasu', meaning: 'Giới thiệu', type: 'Động từ' },
      { word: '案内します', reading: 'あんないします', romaji: 'annaishimasu', meaning: 'Hướng dẫn', type: 'Động từ' },
      { word: '説明します', reading: 'せつめいします', romaji: 'setsumeishimasu', meaning: 'Giải thích', type: 'Động từ' },
      { word: 'いれます', reading: 'いれます', romaji: 'iremasu', meaning: 'Pha (cà phê)', type: 'Động từ' },
      { word: 'おじいさん', reading: 'おじいさん', romaji: 'ojiisan', meaning: 'Ông / Cụ ông', type: 'Danh từ' },
      { word: 'おばあさん', reading: 'おばあさん', romaji: 'obaasan', meaning: 'Bà / Cụ bà', type: 'Danh từ' },
      { word: '準備', reading: 'じゅんび', romaji: 'junbi', meaning: 'Sự chuẩn bị', type: 'Danh từ' },
      { word: '意味', reading: 'いみ', romaji: 'imi', meaning: 'Ý nghĩa', type: 'Danh từ' },
      { word: 'お菓子', reading: 'おかし', romaji: 'okashi', meaning: 'Bánh kẹo', type: 'Danh từ' },
      { word: '全部', reading: 'ぜんぶ', romaji: 'zenbu', meaning: 'Tất cả', type: 'Danh từ' },
      { word: '自分で', reading: 'じぶんで', romaji: 'jibun de', meaning: 'Tự mình', type: 'Phó từ' },
      { word: 'ほかに', reading: 'ほかに', romaji: 'hokani', meaning: 'Ngoài ra', type: 'Phó từ' },
      { word: 'ワゴン車', reading: 'ワゴンしゃ', romaji: 'wagon sha', meaning: 'Xe hơi', type: 'Danh từ' },
      { word: 'お弁当', reading: 'おべんとう', romaji: 'obentou', meaning: 'Cơm hộp', type: 'Danh từ' },
      { word: '母の日', reading: 'ははのひ', romaji: 'haha no hi', meaning: 'Ngày của mẹ', type: 'Danh từ' }
    ]
  },
  {
    id: 25,
    chapter: '第25課',
    title: 'たら・ても',
    titleVn: 'Bài 25: Nếu và Mặc dù',
    theme: 'Điều kiện giả định',
    words: [
      { word: '考えます', reading: 'かんがえます', romaji: 'kangaemasu', meaning: 'Suy nghĩ', type: 'Động từ' },
      { word: '着きます', reading: 'つきます', romaji: 'tsukimasu', meaning: 'Đến (ga, nơi chốn)', type: 'Động từ' },
      { word: '留学します', reading: 'りゅうがくします', romaji: 'ryuugakushimasu', meaning: 'Du học', type: 'Động từ' },
      { word: '取ります', reading: 'とります', romaji: 'torimasu', meaning: 'Lấy (tuổi)', type: 'Động từ' },
      { word: '田舎', reading: 'いなか', romaji: 'inaka', meaning: 'Nông thôn, quê', type: 'Danh từ' },
      { word: '大使館', reading: 'たいしかん', romaji: 'taishikan', meaning: 'Đại sứ quán', type: 'Danh từ' },
      { word: 'グループ', reading: 'グループ', romaji: 'guruupu', meaning: 'Nhóm', type: 'Danh từ' },
      { word: 'チャンス', reading: 'チャンス', romaji: 'chansu', meaning: 'Cơ hội', type: 'Danh từ' },
      { word: '億', reading: 'おく', romaji: 'oku', meaning: 'Trăm triệu', type: 'Danh từ' },
      { word: 'もし', reading: 'もし', romaji: 'moshi', meaning: 'Nếu', type: 'Phó từ' },
      { word: 'いくら', reading: 'いくら', romaji: 'ikura', meaning: 'Cho dù', type: 'Phó từ' },
      { word: '転勤', reading: 'てんきん', romaji: 'tenkin', meaning: 'Chuyển công tác', type: 'Danh từ' },
      { word: 'こと', reading: 'こと', romaji: 'koto', meaning: 'Việc', type: 'Danh từ' },
      { word: '一杯飲みましょう', reading: 'いっぱいのみましょう', romaji: 'ippai nomimashou', meaning: 'Cùng uống 1 ly nhé', type: 'Mẫu câu' },
      { word: 'いろいろお世話になりました', reading: 'いろいろおせわになりました', romaji: 'iroiro osewa ni narimashita', meaning: 'Cảm ơn đã giúp đỡ tôi', type: 'Mẫu câu' },
      { word: '頑張ります', reading: 'がんばります', romaji: 'ganbarimasu', meaning: 'Cố gắng', type: 'Động từ' },
      { word: 'どうぞお元気で', reading: 'どうぞおげんきで', romaji: 'douzo ogenki de', meaning: 'Chúc mạnh khỏe (Khi chia tay)', type: 'Mẫu câu' }
    ]
  }
];

for (const lessonData of newLessons) {
  // Format words
  lessonData.words = lessonData.words.map((w, index) => ({
    id: `L${lessonData.id}_${(index + 1).toString().padStart(2, '0')}`,
    ...w
  }));
  
  // Add empty readings
  lessonData.readings = [];
  
  const content = `import { NihongoLesson } from './types';

const lesson: NihongoLesson = ${JSON.stringify(lessonData, null, 2)};

export default lesson;
`;
  
  const p = path.join(targetDir, `lesson${lessonData.id}.ts`);
  fs.writeFileSync(p, content, 'utf8');
}

// Now update nihongo-lessons.ts
const mainPath = path.join(__dirname, '../src/data/nihongo-lessons.ts');
let mainContent = fs.readFileSync(mainPath, 'utf8');

let imports = '';
let exportsArr = '';
for (let i = 1; i <= 25; i++) {
  imports += `import lesson${i} from './lessons/lesson${i}';\n`;
  exportsArr += `  lesson${i},\n`;
}

const newMain = `export * from './lessons/types';
import { NihongoLesson } from './lessons/types';

${imports}
export const NIHONGO_LESSONS: NihongoLesson[] = [
${exportsArr.trim().replace(/,$/, '')}
];
`;

fs.writeFileSync(mainPath, newMain, 'utf8');
console.log('Successfully created lessons 13 to 25 and updated main file.');

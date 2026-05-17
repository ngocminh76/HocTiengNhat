import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extra = {
  4: [
    { word: '起きます', reading: 'おきます', romaji: 'okimasu', meaning: 'Thức dậy', type: 'Động từ' },
    { word: '寝ます', reading: 'ねます', romaji: 'nemasu', meaning: 'Ngủ', type: 'Động từ' },
    { word: '働きます', reading: 'はたらきます', romaji: 'hatarakimasu', meaning: 'Làm việc', type: 'Động từ' },
    { word: '休みます', reading: 'やすみます', romaji: 'yasumimasu', meaning: 'Nghỉ ngơi', type: 'Động từ' },
    { word: '勉強します', reading: 'べんきょうします', romaji: 'benkyoushimasu', meaning: 'Học tập', type: 'Động từ' },
    { word: '終わります', reading: 'おわります', romaji: 'owarimasu', meaning: 'Kết thúc', type: 'Động từ' },
    { word: '今', reading: 'いま', romaji: 'ima', meaning: 'Bây giờ', type: 'Danh từ' },
    { word: '〜から', reading: '〜から', romaji: '~kara', meaning: 'Từ ~', type: 'Trợ từ' },
    { word: '〜まで', reading: '〜まで', romaji: '~made', meaning: 'Đến ~', type: 'Trợ từ' },
    { word: '〜と〜', reading: '〜と〜', romaji: '~to~', meaning: 'Và', type: 'Trợ từ' },
    { word: 'そちら', reading: 'そちら', romaji: 'sochira', meaning: 'Phía bạn', type: 'Đại từ' },
    { word: '大変ですね', reading: 'たいへんですね', romaji: 'taihen desu ne', meaning: 'Vất vả quá nhỉ', type: 'Mẫu câu' },
    { word: '番号', reading: 'ばんごう', romaji: 'bangou', meaning: 'Số (điện thoại/phòng)', type: 'Danh từ' },
    { word: '何番', reading: 'なんばん', romaji: 'nanban', meaning: 'Số mấy', type: 'Từ để hỏi' },
    { word: 'ニューヨーク', reading: 'ニューヨーク', romaji: 'Nyuuyooku', meaning: 'New York', type: 'Danh từ' },
    { word: 'ペキン', reading: 'ペキン', romaji: 'Pekin', meaning: 'Bắc Kinh', type: 'Danh từ' }
  ],
  5: [
    { word: '行きます', reading: 'いきます', romaji: 'ikimasu', meaning: 'Đi', type: 'Động từ' },
    { word: '来ます', reading: 'きます', romaji: 'kimasu', meaning: 'Đến', type: 'Động từ' },
    { word: '帰ります', reading: 'かえります', romaji: 'kaerimasu', meaning: 'Về', type: 'Động từ' },
    { word: '学校', reading: 'がっこう', romaji: 'gakkou', meaning: 'Trường học', type: 'Danh từ' },
    { word: 'スーパー', reading: 'スーパー', romaji: 'suupaa', meaning: 'Siêu thị', type: 'Danh từ' },
    { word: '駅', reading: 'えき', romaji: 'eki', meaning: 'Nhà ga', type: 'Danh từ' },
    { word: '飛行機', reading: 'ひこうき', romaji: 'hikouki', meaning: 'Máy bay', type: 'Danh từ' },
    { word: '船', reading: 'ふね', romaji: 'fune', meaning: 'Tàu thủy', type: 'Danh từ' },
    { word: '電車', reading: 'でんしゃ', romaji: 'densha', meaning: 'Tàu điện', type: 'Danh từ' },
    { word: '地下鉄', reading: 'ちかてつ', romaji: 'chikatetsu', meaning: 'Tàu điện ngầm', type: 'Danh từ' },
    { word: '新幹線', reading: 'しんかんせん', romaji: 'shinkansen', meaning: 'Tàu Shinkansen', type: 'Danh từ' },
    { word: 'バス', reading: 'バス', romaji: 'basu', meaning: 'Xe buýt', type: 'Danh từ' },
    { word: 'タクシー', reading: 'タクシー', romaji: 'takushii', meaning: 'Taxi', type: 'Danh từ' },
    { word: '自転車', reading: 'じてんしゃ', romaji: 'jitensha', meaning: 'Xe đạp', type: 'Danh từ' },
    { word: '歩いて', reading: 'あるいて', romaji: 'aruite', meaning: 'Đi bộ', type: 'Động từ' },
    { word: '人', reading: 'ひと', romaji: 'hito', meaning: 'Người', type: 'Danh từ' },
    { word: '友達', reading: 'ともだち', romaji: 'tomodachi', meaning: 'Bạn bè', type: 'Danh từ' },
    { word: '彼', reading: 'かれ', romaji: 'kare', meaning: 'Anh ấy / Bạn trai', type: 'Đại từ' },
    { word: '彼女', reading: 'かのじょ', romaji: 'kanojo', meaning: 'Cô ấy / Bạn gái', type: 'Đại từ' },
    { word: '家族', reading: 'かぞく', romaji: 'kazoku', meaning: 'Gia đình', type: 'Danh từ' },
    { word: '一人で', reading: 'ひとりで', romaji: 'hitori de', meaning: 'Một mình', type: 'Phó từ' }
  ],
  6: [
    { word: '食べます', reading: 'たべます', romaji: 'tabemasu', meaning: 'Ăn', type: 'Động từ' },
    { word: '飲みます', reading: 'のみます', romaji: 'nomimasu', meaning: 'Uống', type: 'Động từ' },
    { word: '吸います', reading: 'すいます', romaji: 'suimasu', meaning: 'Hút (thuốc)', type: 'Động từ' },
    { word: '見ます', reading: 'みます', romaji: 'mimasu', meaning: 'Xem, nhìn', type: 'Động từ' },
    { word: '聞きます', reading: 'ききます', romaji: 'kikimasu', meaning: 'Nghe', type: 'Động từ' },
    { word: '読みます', reading: 'よみます', romaji: 'yomimasu', meaning: 'Đọc', type: 'Động từ' },
    { word: '書きます', reading: 'かきます', romaji: 'kakimasu', meaning: 'Viết, vẽ', type: 'Động từ' },
    { word: '買います', reading: 'かいます', romaji: 'kaimasu', meaning: 'Mua', type: 'Động từ' },
    { word: '撮ります', reading: 'とります', romaji: 'torimasu', meaning: 'Chụp (hình)', type: 'Động từ' },
    { word: 'します', reading: 'します', romaji: 'shimasu', meaning: 'Làm, chơi', type: 'Động từ' },
    { word: '会います', reading: 'あいます', romaji: 'aimasu', meaning: 'Gặp (bạn bè)', type: 'Động từ' },
    { word: 'ごはん', reading: 'ごはん', romaji: 'gohan', meaning: 'Cơm, bữa ăn', type: 'Danh từ' },
    { word: '朝ごはん', reading: 'あさごはん', romaji: 'asagohan', meaning: 'Bữa sáng', type: 'Danh từ' },
    { word: '昼ごはん', reading: 'ひるごはん', romaji: 'hirugohan', meaning: 'Bữa trưa', type: 'Danh từ' },
    { word: '晩ごはん', reading: 'ばんごはん', romaji: 'bangohan', meaning: 'Bữa tối', type: 'Danh từ' },
    { word: 'パン', reading: 'パン', romaji: 'pan', meaning: 'Bánh mì', type: 'Danh từ' },
    { word: '卵', reading: 'たまご', romaji: 'tamago', meaning: 'Trứng', type: 'Danh từ' },
    { word: '肉', reading: 'にく', romaji: 'niku', meaning: 'Thịt', type: 'Danh từ' },
    { word: '魚', reading: 'さかな', romaji: 'sakana', meaning: 'Cá', type: 'Danh từ' },
    { word: '野菜', reading: 'やさい', romaji: 'yasai', meaning: 'Rau', type: 'Danh từ' },
    { word: '果物', reading: 'くだもの', romaji: 'kudamono', meaning: 'Trái cây', type: 'Danh từ' },
    { word: '水', reading: 'みず', romaji: 'mizu', meaning: 'Nước', type: 'Danh từ' },
    { word: 'お茶', reading: 'おちゃ', romaji: 'ocha', meaning: 'Trà (Nhật)', type: 'Danh từ' },
    { word: '紅茶', reading: 'こうちゃ', romaji: 'koucha', meaning: 'Hồng trà', type: 'Danh từ' },
    { word: '牛乳', reading: 'ぎゅうにゅう', romaji: 'gyuunyuu', meaning: 'Sữa bò', type: 'Danh từ' },
    { word: 'ミルク', reading: 'ミルク', romaji: 'miruku', meaning: 'Sữa', type: 'Danh từ' },
    { word: 'ジュース', reading: 'ジュース', romaji: 'juusu', meaning: 'Nước ép', type: 'Danh từ' },
    { word: 'ビール', reading: 'ビール', romaji: 'biiru', meaning: 'Bia', type: 'Danh từ' },
    { word: 'お酒', reading: 'おさけ', romaji: 'osake', meaning: 'Rượu', type: 'Danh từ' }
  ],
  7: [
    { word: '切ります', reading: 'きります', romaji: 'kirimasu', meaning: 'Cắt', type: 'Động từ' },
    { word: '送ります', reading: 'おくります', romaji: 'okurimasu', meaning: 'Gửi', type: 'Động từ' },
    { word: 'あげます', reading: 'あげます', romaji: 'agemasu', meaning: 'Cho, tặng', type: 'Động từ' },
    { word: 'もらいます', reading: 'もらいます', romaji: 'moraimasu', meaning: 'Nhận', type: 'Động từ' },
    { word: '貸します', reading: 'かします', romaji: 'kashimasu', meaning: 'Cho mượn', type: 'Động từ' },
    { word: '借ります', reading: 'かります', romaji: 'karimasu', meaning: 'Mượn', type: 'Động từ' },
    { word: '教えます', reading: 'おしえます', romaji: 'oshiemasu', meaning: 'Dạy', type: 'Động từ' },
    { word: '習います', reading: 'ならいます', romaji: 'naraimasu', meaning: 'Học', type: 'Động từ' },
    { word: 'かけます', reading: 'かけます', romaji: 'kakemasu', meaning: 'Gọi (điện thoại)', type: 'Động từ' },
    { word: '手', reading: 'て', romaji: 'te', meaning: 'Tay', type: 'Danh từ' },
    { word: 'はし', reading: 'はし', romaji: 'hashi', meaning: 'Đũa', type: 'Danh từ' },
    { word: 'スプーン', reading: 'スプーン', romaji: 'supuun', meaning: 'Thìa', type: 'Danh từ' },
    { word: 'ナイフ', reading: 'ナイフ', romaji: 'naifu', meaning: 'Dao', type: 'Danh từ' },
    { word: 'フォーク', reading: 'フォーク', romaji: 'fooku', meaning: 'Nĩa', type: 'Danh từ' },
    { word: 'はさみ', reading: 'はさみ', romaji: 'hasami', meaning: 'Kéo', type: 'Danh từ' },
    { word: 'ファクス', reading: 'ファクス', romaji: 'fakusu', meaning: 'Máy Fax', type: 'Danh từ' },
    { word: 'パソコン', reading: 'パソコン', romaji: 'pasokon', meaning: 'Máy tính cá nhân', type: 'Danh từ' },
    { word: '消しゴム', reading: 'けしゴム', romaji: 'keshigomu', meaning: 'Cục tẩy', type: 'Danh từ' },
    { word: '紙', reading: 'かみ', romaji: 'kami', meaning: 'Giấy', type: 'Danh từ' },
    { word: '花', reading: 'はな', romaji: 'hana', meaning: 'Hoa', type: 'Danh từ' },
    { word: 'シャツ', reading: 'シャツ', romaji: 'shatsu', meaning: 'Áo sơ mi', type: 'Danh từ' },
    { word: 'プレゼント', reading: 'プレゼント', romaji: 'purezento', meaning: 'Quà tặng', type: 'Danh từ' }
  ],
  8: [
    { word: 'ハンサム（な）', reading: 'ハンサム', romaji: 'hansamu', meaning: 'Đẹp trai', type: 'Tính từ na' },
    { word: 'きれい（な）', reading: 'きれい', romaji: 'kirei', meaning: 'Đẹp, sạch', type: 'Tính từ na' },
    { word: '静か（な）', reading: 'しずか', romaji: 'shizuka', meaning: 'Yên tĩnh', type: 'Tính từ na' },
    { word: 'にぎやか（な）', reading: 'にぎやか', romaji: 'nigiyaka', meaning: 'Nhộn nhịp', type: 'Tính từ na' },
    { word: '有名（な）', reading: 'ゆうめい', romaji: 'yuumei', meaning: 'Nổi tiếng', type: 'Tính từ na' },
    { word: '親切（な）', reading: 'しんせつ', romaji: 'shinsetsu', meaning: 'Tốt bụng', type: 'Tính từ na' },
    { word: '元気（な）', reading: 'げんき', romaji: 'genki', meaning: 'Khỏe mạnh', type: 'Tính từ na' },
    { word: '暇（な）', reading: 'ひま', romaji: 'hima', meaning: 'Rảnh rỗi', type: 'Tính từ na' },
    { word: '便利（な）', reading: 'べんり', romaji: 'benri', meaning: 'Tiện lợi', type: 'Tính từ na' },
    { word: 'すてき（な）', reading: 'すてき', romaji: 'suteki', meaning: 'Tuyệt vời', type: 'Tính từ na' },
    { word: '大きい', reading: 'おおきい', romaji: 'ookii', meaning: 'To, lớn', type: 'Tính từ i' },
    { word: '小さい', reading: 'ちいさい', romaji: 'chiisai', meaning: 'Nhỏ, bé', type: 'Tính từ i' },
    { word: '新しい', reading: 'あたらしい', romaji: 'atarashii', meaning: 'Mới', type: 'Tính từ i' },
    { word: '古い', reading: 'ふるい', romaji: 'furui', meaning: 'Cũ', type: 'Tính từ i' },
    { word: 'いい（よい）', reading: 'いい', romaji: 'ii', meaning: 'Tốt', type: 'Tính từ i' },
    { word: '悪い', reading: 'わるい', romaji: 'warui', meaning: 'Xấu', type: 'Tính từ i' },
    { word: '暑い', reading: 'あつい', romaji: 'atsui', meaning: 'Nóng', type: 'Tính từ i' },
    { word: '寒い', reading: 'さむい', romaji: 'samui', meaning: 'Lạnh (thời tiết)', type: 'Tính từ i' },
    { word: '冷たい', reading: 'つめたい', romaji: 'tsumetai', meaning: 'Lạnh (cảm giác)', type: 'Tính từ i' },
    { word: '難しい', reading: 'むずかしい', romaji: 'muzukashii', meaning: 'Khó', type: 'Tính từ i' },
    { word: '易しい', reading: 'やさしい', romaji: 'yasashii', meaning: 'Dễ', type: 'Tính từ i' },
    { word: '高い', reading: 'たかい', romaji: 'takai', meaning: 'Cao, đắt', type: 'Tính từ i' },
    { word: '安い', reading: 'やすい', romaji: 'yasui', meaning: 'Rẻ', type: 'Tính từ i' },
    { word: '低い', reading: 'ひくい', romaji: 'hikui', meaning: 'Thấp', type: 'Tính từ i' }
  ],
  9: [
    { word: '分かります', reading: 'わかります', romaji: 'wakarimasu', meaning: 'Hiểu, nắm được', type: 'Động từ' },
    { word: 'あります', reading: 'あります', romaji: 'arimasu', meaning: 'Có (sở hữu)', type: 'Động từ' },
    { word: '好き（な）', reading: 'すき', romaji: 'suki', meaning: 'Thích', type: 'Tính từ na' },
    { word: '嫌い（な）', reading: 'きらい', romaji: 'kirai', meaning: 'Ghét', type: 'Tính từ na' },
    { word: '上手（な）', reading: 'じょうず', romaji: 'jouzu', meaning: 'Giỏi', type: 'Tính từ na' },
    { word: '下手（な）', reading: 'へた', romaji: 'heta', meaning: 'Kém, dở', type: 'Tính từ na' },
    { word: '料理', reading: 'りょうり', romaji: 'ryouri', meaning: 'Món ăn, nấu ăn', type: 'Danh từ' },
    { word: '飲み物', reading: 'のみもの', romaji: 'nomimono', meaning: 'Đồ uống', type: 'Danh từ' },
    { word: 'スポーツ', reading: 'スポーツ', romaji: 'supootsu', meaning: 'Thể thao', type: 'Danh từ' },
    { word: '野球', reading: 'やきゅう', romaji: 'yakyuu', meaning: 'Bóng chày', type: 'Danh từ' },
    { word: 'ダンス', reading: 'ダンス', romaji: 'dansu', meaning: 'Nhảy múa', type: 'Danh từ' },
    { word: '音楽', reading: 'おんがく', romaji: 'ongaku', meaning: 'Âm nhạc', type: 'Danh từ' },
    { word: '歌', reading: 'うた', romaji: 'uta', meaning: 'Bài hát', type: 'Danh từ' },
    { word: 'クラシック', reading: 'クラシック', romaji: 'kurashikku', meaning: 'Nhạc cổ điển', type: 'Danh từ' },
    { word: 'ジャズ', reading: 'ジャズ', romaji: 'jazu', meaning: 'Nhạc Jazz', type: 'Danh từ' },
    { word: 'コンサート', reading: 'コンサート', romaji: 'konsaato', meaning: 'Buổi hòa nhạc', type: 'Danh từ' },
    { word: 'カラオケ', reading: 'カラオケ', romaji: 'karaoke', meaning: 'Karaoke', type: 'Danh từ' },
    { word: '絵', reading: 'え', romaji: 'e', meaning: 'Tranh, bức tranh', type: 'Danh từ' },
    { word: '字', reading: 'じ', romaji: 'ji', meaning: 'Chữ', type: 'Danh từ' },
    { word: '漢字', reading: 'かんじ', romaji: 'kanji', meaning: 'Chữ Hán', type: 'Danh từ' }
  ],
  10: [
    { word: 'います', reading: 'います', romaji: 'imasu', meaning: 'Có (người, động vật)', type: 'Động từ' },
    { word: 'あります', reading: 'あります', romaji: 'arimasu', meaning: 'Có (đồ vật, cây cối)', type: 'Động từ' },
    { word: '男の人', reading: 'おとこのひと', romaji: 'otoko no hito', meaning: 'Người đàn ông', type: 'Danh từ' },
    { word: '女の人', reading: 'おんなのひと', romaji: 'onna no hito', meaning: 'Người phụ nữ', type: 'Danh từ' },
    { word: '男の子', reading: 'おとこのこ', romaji: 'otoko no ko', meaning: 'Cậu bé', type: 'Danh từ' },
    { word: '女の子', reading: 'おんなのこ', romaji: 'onna no ko', meaning: 'Cô bé', type: 'Danh từ' },
    { word: '犬', reading: 'いぬ', romaji: 'inu', meaning: 'Con chó', type: 'Danh từ' },
    { word: '猫', reading: 'ねこ', romaji: 'neko', meaning: 'Con mèo', type: 'Danh từ' },
    { word: '木', reading: 'き', romaji: 'ki', meaning: 'Cây', type: 'Danh từ' },
    { word: '物', reading: 'もの', romaji: 'mono', meaning: 'Đồ vật', type: 'Danh từ' },
    { word: 'フィルム', reading: 'フィルム', romaji: 'firumu', meaning: 'Phim', type: 'Danh từ' },
    { word: '電池', reading: 'でんち', romaji: 'denchi', meaning: 'Pin', type: 'Danh từ' },
    { word: '箱', reading: 'はこ', romaji: 'hako', meaning: 'Cái hộp', type: 'Danh từ' },
    { word: 'スイッチ', reading: 'スイッチ', romaji: 'suicchi', meaning: 'Công tắc', type: 'Danh từ' },
    { word: '冷蔵庫', reading: 'れいぞうこ', romaji: 'reizouko', meaning: 'Tủ lạnh', type: 'Danh từ' },
    { word: 'テーブル', reading: 'テーブル', romaji: 'teeburu', meaning: 'Cái bàn', type: 'Danh từ' },
    { word: 'ベッド', reading: 'ベッド', romaji: 'beddo', meaning: 'Cái giường', type: 'Danh từ' },
    { word: '棚', reading: 'たな', romaji: 'tana', meaning: 'Cái giá sách', type: 'Danh từ' },
    { word: 'ドア', reading: 'ドア', romaji: 'doa', meaning: 'Cửa', type: 'Danh từ' },
    { word: '窓', reading: 'まど', romaji: 'mado', meaning: 'Cửa sổ', type: 'Danh từ' },
    { word: 'ポスト', reading: 'ポスト', romaji: 'posuto', meaning: 'Hộp thư', type: 'Danh từ' },
    { word: 'ビル', reading: 'ビル', romaji: 'biru', meaning: 'Tòa nhà', type: 'Danh từ' },
    { word: '公園', reading: 'こうえん', romaji: 'kouen', meaning: 'Công viên', type: 'Danh từ' },
    { word: '喫茶店', reading: 'きっさてん', romaji: 'kissaten', meaning: 'Quán giải khát', type: 'Danh từ' },
    { word: '本屋', reading: 'ほんや', romaji: 'honya', meaning: 'Hiệu sách', type: 'Danh từ' }
  ],
  11: [
    { word: 'います', reading: 'います', romaji: 'imasu', meaning: 'Có (con cái)', type: 'Động từ' },
    { word: 'かかります', reading: 'かかります', romaji: 'kakarimasu', meaning: 'Mất (thời gian, tiền bạc)', type: 'Động từ' },
    { word: '休みます', reading: 'やすみます', romaji: 'yasumimasu', meaning: 'Nghỉ (làm việc)', type: 'Động từ' },
    { word: '一つ', reading: 'ひとつ', romaji: 'hitotsu', meaning: '1 cái', type: 'Số đếm' },
    { word: '二つ', reading: 'ふたつ', romaji: 'futatsu', meaning: '2 cái', type: 'Số đếm' },
    { word: '三つ', reading: 'みっつ', romaji: 'mittsu', meaning: '3 cái', type: 'Số đếm' },
    { word: '四つ', reading: 'よっつ', romaji: 'yottsu', meaning: '4 cái', type: 'Số đếm' },
    { word: '五つ', reading: 'いつつ', romaji: 'itsutsu', meaning: '5 cái', type: 'Số đếm' },
    { word: '六つ', reading: 'むっつ', romaji: 'muttsu', meaning: '6 cái', type: 'Số đếm' },
    { word: '七つ', reading: 'ななつ', romaji: 'nanatsu', meaning: '7 cái', type: 'Số đếm' },
    { word: '八つ', reading: 'やっつ', romaji: 'yattsu', meaning: '8 cái', type: 'Số đếm' },
    { word: '九つ', reading: 'ここのつ', romaji: 'kokonotsu', meaning: '9 cái', type: 'Số đếm' },
    { word: 'とお', reading: 'とお', romaji: 'too', meaning: '10 cái', type: 'Số đếm' },
    { word: 'いくつ', reading: 'いくつ', romaji: 'ikutsu', meaning: 'Mấy cái', type: 'Từ để hỏi' },
    { word: '一人', reading: 'ひとり', romaji: 'hitori', meaning: '1 người', type: 'Số đếm' },
    { word: '二人', reading: 'ふたり', romaji: 'futari', meaning: '2 người', type: 'Số đếm' },
    { word: '～人', reading: '～にん', romaji: '~nin', meaning: '~ người', type: 'Hậu tố' },
    { word: '～台', reading: '～だい', romaji: '~dai', meaning: '~ cái (máy móc)', type: 'Hậu tố' },
    { word: '～枚', reading: '～まい', romaji: '~mai', meaning: '~ tờ (vật mỏng)', type: 'Hậu tố' },
    { word: '～回', reading: '～かい', romaji: '~kai', meaning: '~ lần', type: 'Hậu tố' },
    { word: '切手', reading: 'きって', romaji: 'kitte', meaning: 'Tem', type: 'Danh từ' },
    { word: 'はがき', reading: 'はがき', romaji: 'hagaki', meaning: 'Bưu thiếp', type: 'Danh từ' },
    { word: '封筒', reading: 'ふうとう', romaji: 'fuutou', meaning: 'Phong bì', type: 'Danh từ' }
  ],
  12: [
    { word: '簡単（な）', reading: 'かんたん', romaji: 'kantan', meaning: 'Đơn giản, dễ', type: 'Tính từ na' },
    { word: '近い', reading: 'ちかい', romaji: 'chikai', meaning: 'Gần', type: 'Tính từ i' },
    { word: '遠い', reading: 'とおい', romaji: 'tooi', meaning: 'Xa', type: 'Tính từ i' },
    { word: '速い、早い', reading: 'はやい', romaji: 'hayai', meaning: 'Nhanh, sớm', type: 'Tính từ i' },
    { word: '遅い', reading: 'おそい', romaji: 'osoi', meaning: 'Chậm, muộn', type: 'Tính từ i' },
    { word: '多い', reading: 'おおい', romaji: 'ooi', meaning: 'Nhiều (người)', type: 'Tính từ i' },
    { word: '少ない', reading: 'すくない', romaji: 'sukunai', meaning: 'Ít (người)', type: 'Tính từ i' },
    { word: '温かい、暖かい', reading: 'あたたかい', romaji: 'atatakai', meaning: 'Ấm', type: 'Tính từ i' },
    { word: '涼しい', reading: 'すずしい', romaji: 'suzushii', meaning: 'Mát mẻ', type: 'Tính từ i' },
    { word: '甘い', reading: 'あまい', romaji: 'amai', meaning: 'Ngọt', type: 'Tính từ i' },
    { word: '辛い', reading: 'からい', romaji: 'karai', meaning: 'Cay', type: 'Tính từ i' },
    { word: '重い', reading: 'おもい', romaji: 'omoi', meaning: 'Nặng', type: 'Tính từ i' },
    { word: '軽い', reading: 'かるい', romaji: 'karui', meaning: 'Nhẹ', type: 'Tính từ i' },
    { word: 'いい（コーヒーが～）', reading: 'いい', romaji: 'ii', meaning: 'Thích (cà phê hơn)', type: 'Tính từ i' },
    { word: '季節', reading: 'きせつ', romaji: 'kisetsu', meaning: 'Mùa', type: 'Danh từ' },
    { word: '春', reading: 'はる', romaji: 'haru', meaning: 'Mùa xuân', type: 'Danh từ' },
    { word: '夏', reading: 'なつ', romaji: 'natsu', meaning: 'Mùa hè', type: 'Danh từ' },
    { word: '秋', reading: 'あき', romaji: 'aki', meaning: 'Mùa thu', type: 'Danh từ' },
    { word: '冬', reading: 'ふゆ', romaji: 'fuyu', meaning: 'Mùa đông', type: 'Danh từ' },
    { word: '天気', reading: 'てんき', romaji: 'tenki', meaning: 'Thời tiết', type: 'Danh từ' },
    { word: '雨', reading: 'あめ', romaji: 'ame', meaning: 'Mưa', type: 'Danh từ' },
    { word: '雪', reading: 'ゆき', romaji: 'yuki', meaning: 'Tuyết', type: 'Danh từ' },
    { word: '曇り', reading: 'くもり', romaji: 'kumori', meaning: 'Có mây', type: 'Danh từ' }
  ]
};

async function run() {
  let injected = 0;
  for (const [lessonId, newWords] of Object.entries(extra)) {
    const p = path.join(__dirname, '../src/data/lessons', `lesson${lessonId}.ts`);
    if (!fs.existsSync(p)) continue;
    
    // We import the file to get its content (requires transpilation or just use dynamic import via tsx)
    // Actually, tsx can dynamically import `.ts` files!
    const mod = await import(`file://${p}`);
    const lesson = mod.default;
    
    const existingWords = lesson.words.map(w => w.word);
    let idCounter = lesson.words.length + 1;
    
    for (const nw of newWords) {
      if (!existingWords.includes(nw.word)) {
        lesson.words.push({
          id: `L${lessonId}_${idCounter.toString().padStart(2, '0')}`,
          word: nw.word,
          reading: nw.reading,
          romaji: nw.romaji,
          meaning: nw.meaning,
          type: nw.type
        });
        idCounter++;
        injected++;
      }
    }
    
    // Write back
    const content = `import { NihongoLesson } from './types';

const lesson: NihongoLesson = ${JSON.stringify(lesson, null, 2)};

export default lesson;
`;
    fs.writeFileSync(p, content, 'utf8');
    console.log(`Lesson ${lessonId} updated. Total words: ${lesson.words.length}`);
  }
  console.log(`Injected ${injected} new words total.`);
}

run();

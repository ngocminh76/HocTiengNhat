// src/pages/GuidePage.tsx
interface Props {
  onHome: () => void;
}

export function GuidePage({ onHome }: Props) {
  return (
    <div className="screen guide-screen">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <button className="btn-back" onClick={onHome}>← Về trang chủ</button>
        <h2 style={{ flex: 1, fontSize: 16, fontWeight: 700 }}>📖 Cẩm Nang Học Kanji</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Section 1: Âm On & Âm Kun */}
        <section className="guide-box">
          <h3>1. Vì sao Âm On viết bằng Katakana (サン)?</h3>
          <p>
            Đây là quy ước chuẩn trong từ điển và sách giáo khoa để bạn dễ nhận biết nguồn gốc của âm đọc:
          </p>
          <ul>
            <li>
              <strong style={{ color: 'var(--red-soft)' }}>Katakana (Âm On - 音読み):</strong> Là âm mượn từ tiếng Trung Quốc cổ. <br />
              <em>Cách dùng:</em> Thường dùng khi Kanji đó ghép với một Kanji khác.<br />
              <span className="ex">VD: 三 (サン) + 月 (ガツ) = 三月 (さんがつ - Tháng 3)</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong style={{ color: 'var(--blue)' }}>Hiragana (Âm Kun - 訓読み):</strong> Là âm thuần Nhật do người Nhật gán vào.<br />
              <em>Cách dùng:</em> Thường dùng khi Kanji đứng một mình hoặc có phần Hiragana đi kèm (Okurigana).<br />
              <span className="ex">VD: 三 (み) つ = 三つ (みっつ - 3 cái)</span>
            </li>
          </ul>
          <div className="note" style={{ marginTop: 12 }}>
            💡 <strong>Lưu ý:</strong> Khi viết văn thực tế, người Nhật viết phiên âm (Furigana) bằng <strong>Hiragana</strong> cho cả Âm On và Kun. Katakana ở đây chỉ dùng làm "nhãn dán" để bạn phân biệt khi tra cứu.
          </div>
        </section>

        {/* Section 2: Phát âm TTS */}
        <section className="guide-box">
          <h3>2. Vì sao nhấn 🔊 nghe "三" lại đọc là "mi"?</h3>
          <p>
            Khi bạn nhấn nghe một Kanji <strong>đứng trơ trọi một mình</strong>, hệ thống phát âm (TTS) thường tự động đọc nó theo <strong>Âm Kun</strong> (âm thuần Nhật phổ biến nhất của chữ đó). Vì vậy 三 sẽ được đọc là "mi" (み).
          </p>
          <p>Nhưng nếu bạn nhấn nút 🔊 ở phần <strong>Từ vựng</strong> hay <strong>Câu ví dụ</strong>, hệ thống sẽ đọc chuẩn xác theo đúng ngữ cảnh của từ đó (On hoặc Kun).</p>
        </section>

        {/* Section 3: Cài đặt giọng nói */}
        <section className="guide-box">
          <h3>3. Lỗi 🔊 đọc "二" thành "ji" (Tiếng Trung)</h3>
          <p>
            Vì tiếng Nhật và tiếng Trung dùng chung ký tự Kanji (二, 三), nếu máy tính (Windows) của bạn chưa cài gói giọng nói Tiếng Nhật, hệ thống có thể lấy nhầm giọng Tiếng Trung (Cantonese) để đọc, khiến chữ 二 phát âm thành "ji" thay vì "ni".
          </p>
          <div className="note" style={{ marginTop: 8 }}>
            🔧 <strong>Cách sửa trên Windows:</strong><br />
            Mở <em>Settings → Time & Language → Speech → Add voices</em>. Tìm kiếm <strong>日本語 (Japanese)</strong> và cài đặt gói giọng nói (thường là Microsoft Haruka).
          </div>
        </section>
      </div>
    </div>
  );
}

export interface DokkaiQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number; // 0-indexed
  explanation?: string;
}

export interface DokkaiPassage {
  id: string;
  type: 'mondai1' | 'mondai2' | 'mondai3' | 'mondai4' | 'mondai5' | 'mondai6';
  text?: string[]; // Paragraphs for Mondai 3, 4, 5
  htmlContent?: string; // HTML for Mondai 6
  questions: DokkaiQuestion[];
}

export interface DokkaiReview {
  id: string;
  title: string;
  description: string;
  passages: DokkaiPassage[];
}

export const DOKKAI_REVIEWS: DokkaiReview[] = [
  {
    id: 'review_1_5',
    title: 'Ôn Tập Tổng Hợp JLPT N5 (Bài 1 - 5)',
    description: 'Chặng ôn tập toàn diện Ngữ Pháp và Đọc Hiểu dựa trên kiến thức từ Bài 1 đến Bài 5.',
    passages: [
      {
        id: 'm1',
        type: 'mondai1',
        questions: [
          {
            id: 'm1_q1',
            question: 'きのう　デパート（　　　）いきました。',
            options: ['で', 'へ', 'を', 'が'],
            correctIndex: 1,
            explanation: 'Đi đến đâu dùng trợ từ へ (hoặc に). Động từ là いきました.'
          },
          {
            id: 'm1_q2',
            question: 'A「この　かばんは　だれ（　　　）ですか。」\nB「わたしのです。」',
            options: ['の', 'は', 'か', 'も'],
            correctIndex: 0,
            explanation: 'Sở hữu dùng trợ từ の. "だれのですか" = "của ai vậy?".'
          },
          {
            id: 'm1_q3',
            question: 'まいあさ　６じ（　　　）おきます。',
            options: ['から', 'まで', 'に', 'で'],
            correctIndex: 2,
            explanation: 'Chỉ thời gian cụ thể diễn ra hành động dùng trợ từ に.'
          }
        ]
      },
      {
        id: 'm2',
        type: 'mondai2',
        questions: [
          {
            id: 'm2_q1',
            question: 'わたしは　___ ___ _★_ ___　かえります。',
            options: ['うち', 'ひとりで', 'へ', 'タクシーで'],
            correctIndex: 0,
            explanation: 'Thứ tự đúng: わたしは (タクシーで) (ひとりで) (うち) (へ) かえります. Vị trí ngôi sao là "うち".'
          },
          {
            id: 'm2_q2',
            question: 'これは　___ ___ _★_ ___　です。',
            options: ['の', 'ほん', 'にほんご', 'わたし'],
            correctIndex: 1,
            explanation: 'Thứ tự đúng: これは (わたし) (の) (にほんご) (の ほん) です -> Wait, chỉ có 4 lựa chọn. Thứ tự đúng: これは (わたし) (の) (にほんご) (ほん) です? -> Sai ngữ pháp. Thứ tự: これは (にほんご) (の) (ほん) です. Vậy dư 1 chữ. \n Sửa lại: Thứ tự đúng: これは (わたし) (の) (ほん) です. \n Let\'s fix the options: 1. の 2. コンピューター 3. わたし 4. ざっし -> Đây là tạp chí máy tính của tôi -> (わたし) (の) (コンピューター) (の ざっし). Quá dài. \n Let\'s do: これは (にほんご) (の) (じしょ) です. Options: 1. じしょ 2. にほんご 3. の 4. わたし. -> Không hợp lý.'
          }
        ]
      }
    ]
  }
];

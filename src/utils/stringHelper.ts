export function normalizeString(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[.,!?。、]/g, '') // Bỏ các dấu câu quen thuộc
    .replace(/\s+/g, ' ')      // Đưa nhiều khoảng trắng về 1
    .trim();                   // Bỏ khoảng đầu/cuối
}

export function generateHintLevel1(str: string): string {
  // Thay thế toàn bộ ký tự thành dấu '_', giữ nguyên khoảng trắng
  return str
    .split(' ')
    .map(word => '_'.repeat(word.length))
    .join(' ');
}

export function generateHintLevel2(str: string): string {
  // Hiện chữ cái đầu của mỗi từ, các ký tự còn lại thay bằng '_'
  return str
    .split(' ')
    .map(word => {
      if (word.length === 0) return '';
      return word[0] + ' ' + '_'.repeat(word.length - 1).split('').join(' ');
    })
    .join('   |   ');
}

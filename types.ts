// Mức độ câu hỏi theo Bloom's Taxonomy
export type DifficultyLevel = 'nhan_biet' | 'thong_hieu' | 'van_dung' | 'van_dung_cao' | 'hon_hop';

// Chế độ lấy câu hỏi từ tài liệu
export type SourceMode = 'strict' | 'creative';

export const SOURCE_MODE_LABELS: Record<SourceMode, { title: string; desc: string; icon: string }> = {
  strict: {
    title: '📋 Nghiêm ngặt',
    desc: 'Lấy chính xác câu hỏi từ tài liệu',
    icon: '📋'
  },
  creative: {
    title: '✨ Sáng tạo',
    desc: 'Có thể thay đổi bối cảnh, số liệu',
    icon: '✨'
  }
};

// Loại giao diện game
export type GameTheme = 'classic' | 'space' | 'quiz_show' | 'rpg' | 'racing' | 'treasure';

export const GAME_THEME_LABELS: Record<GameTheme, string> = {
  classic: '🎯 Cơ Bản - Game Show',
  space: '🚀 Space Defender - Bắn Phi Thuyền',
  quiz_show: '🏆 Quiz Show - Ai Là Triệu Phú',
  rpg: '⚔️ RPG Adventure - Dũng Sĩ Diệt Rồng',
  racing: '🏎️ Speed Racer - Đua Xe Tốc Độ',
  treasure: '💎 Treasure Hunt - Săn Kho Báu'
};

export const DIFFICULTY_LABELS: Record<DifficultyLevel, string> = {
  nhan_biet: 'Nhận biết',
  thong_hieu: 'Thông hiểu',
  van_dung: 'Vận dụng',
  van_dung_cao: 'Vận dụng cao',
  hon_hop: 'Hỗn hợp các mức độ'
};

export interface QuizQuestion {
  id: number;
  type: 'mcq' | 'tf' | 'short';
  topic: string;
  question: string;
  options?: string[]; // Only for MCQ
  correct: number | boolean | number; // index for mcq, boolean for tf, number for short
  explain: string;
  level?: DifficultyLevel; // Mức độ câu hỏi
}

export interface QuizSettings {
  enableTimer: boolean;
  timerSeconds: number; // Tổng số giây
  enableSound: boolean;
}

export interface SavedQuiz {
  id: string;
  name: string;
  topic: string;
  questions: QuizQuestion[];
  settings: QuizSettings;
  difficultyLevel: DifficultyLevel;
  createdAt: string;
  questionCount: number;
}

export interface GeneratorConfig {
  topic: string;
  questionCount: number;
  files: File[];
  difficultyLevel: DifficultyLevel;
}

export type GenerationStatus = 'idle' | 'generating' | 'success' | 'error';
export type PageType = 'create' | 'library' | 'reports' | 'settings' | 'support';
export type UserRole = 'teacher' | 'student';

// Lịch sử tạo quiz (tự động lưu)
export interface QuizHistory {
  id: string;
  topic: string;
  questionCount: number;
  difficultyLevel: DifficultyLevel;
  createdAt: string;
  questions: QuizQuestion[];
  settings: QuizSettings;
}

// Cài đặt ứng dụng
export interface AppSettings {
  defaultModel: string;
  defaultTimer: number;
  defaultSound: boolean;
  defaultDifficulty: DifficultyLevel;
  teacherPassword?: string;
}

// Dữ liệu phân tích/thống kê
export interface AnalyticsData {
  totalQuizzes: number;
  totalQuestions: number;
  quizzesByDifficulty: Record<DifficultyLevel, number>;
  quizzesByDate: Array<{ date: string; count: number }>;
}

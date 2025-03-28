import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';

// 스토어 인터페이스 정의
export interface IAppStore {
    sample: number
}

// Zustand 스토어 생성
const sampleStore = create<IAppStore>()(
    devtools(
        persist(
            (set, get) => ({
                // 초기 상태 값
                sample: 5
                // 액션 메서드

            }),
            {
                name: 'sample-store', 
                storage: createJSONStorage(() => localStorage), 
            }
        )
    )
);

export default sampleStore;
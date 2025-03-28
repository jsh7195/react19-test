import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';

// 스토어 인터페이스 정의
export interface IDevicesStore {

}

// Zustand 스토어 생성
const devicesStore = create<IDevicesStore>()(
    devtools(
        persist(
            (set, get) => ({
                // 초기 상태 값

                // 액션 메서드

            }),
            {
                name: 'devices-store', 
                storage: createJSONStorage(() => localStorage), 
            }
        )
    )
);

export default devicesStore;

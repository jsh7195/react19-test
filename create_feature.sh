#!/bin/bash

# 아토믹 디자인 패턴 기반 피처 디렉토리 구조 생성 스크립트
# 사용법: ./create_feature.sh feature_name

if [ -z "$1" ]; then
  echo "❌ 피처 이름을 입력해주세요"
  echo "사용법: ./create_feature.sh feature_name"
  exit 1
fi

FEATURE_NAME=$1
FEATURE_PATH="src/features/$FEATURE_NAME"

# src/features 디렉토리 확인 및 생성
if [ ! -d "src/features" ]; then
  mkdir -p "src/features"
  echo "✅ 생성됨: src/features/"
fi

# 피처 디렉토리 생성
if [ ! -d "$FEATURE_PATH" ]; then
  mkdir -p "$FEATURE_PATH"
  echo "✅ 생성됨: $FEATURE_PATH/"
else
  echo "⚠️ 이미 존재: $FEATURE_PATH/"
fi

# 필요한 하위 디렉토리 생성
for dir in "layouts" "pages" "templates" "components" "atoms" "api" "hooks" "types" "css" "storage" "routes"; do
  if [ ! -d "$FEATURE_PATH/$dir" ]; then
    mkdir -p "$FEATURE_PATH/$dir"
    echo "✅ 생성됨: $FEATURE_PATH/$dir/"
  else
    echo "⚠️ 이미 존재: $FEATURE_PATH/$dir/"
  fi
done

# 첫 글자를 대문자로 변환하는 함수
capitalize() {
  echo "$(tr '[:lower:]' '[:upper:]' <<< ${1:0:1})${1:1}"
}

# 대문자로 시작하는 피처 이름
CAPITALIZED_FEATURE=$(capitalize "$FEATURE_NAME")

# 기본 파일 생성 함수
create_base_file() {
  local dir=$1
  local filename=$2
  local content=$3
  local filepath="$FEATURE_PATH/$dir/$filename"
  
  if [ ! -f "$filepath" ]; then
    echo "$content" > "$filepath"
    echo "✅ 생성됨: $filepath"
  else
    echo "⚠️ 이미 존재: $filepath"
  fi
}

# 라우트 타입 정의 생성
mkdir -p "src/types"
if [ ! -f "src/types/router.ts" ]; then
  echo "export enum RouteType {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

export interface RootRouteConfig extends RouteConfig {
  routeType: RouteType;
}" > "src/types/router.ts"
  echo "✅ 생성됨: src/types/router.ts"
else
  echo "⚠️ 이미 존재: src/types/router.ts"
fi

# 피처 타입 정의 파일 생성
create_base_file "types" "${FEATURE_NAME}.types.ts" "import { RouteType } from \"@/types/router\";

// ${FEATURE_NAME} 관련 타입 정의
export interface ${CAPITALIZED_FEATURE}LayoutProps {
  routeType: RouteType;
}

export interface IKeyListParams {
  // List 파라미터 인터페이스
}

export interface IKeyDetailParams {
  // Detail 파라미터 인터페이스
}"

# 레이아웃 생성 (간소화된 버전)
create_base_file "layouts" "${CAPITALIZED_FEATURE}Layout.tsx" "import { Outlet } from 'react-router-dom';
import { ${CAPITALIZED_FEATURE}LayoutProps } from '../types/${FEATURE_NAME}.types';

const ${CAPITALIZED_FEATURE}Layout = ({ routeType }: ${CAPITALIZED_FEATURE}LayoutProps) => {
  return (
    <div>
      <header>
        <h1>${CAPITALIZED_FEATURE} 기능</h1>
      </header>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ${CAPITALIZED_FEATURE}Layout;"

# 페이지 생성 - List, Detail, Reg, Modify
create_base_file "pages" "${CAPITALIZED_FEATURE}List.tsx" "const ${CAPITALIZED_FEATURE}List = () => {
  return <p>${CAPITALIZED_FEATURE}ListPage</p>;
};

export default ${CAPITALIZED_FEATURE}List;"

create_base_file "pages" "${CAPITALIZED_FEATURE}Detail.tsx" "const ${CAPITALIZED_FEATURE}Detail = () => {
  return <p>${CAPITALIZED_FEATURE}DetailPage</p>;
};

export default ${CAPITALIZED_FEATURE}Detail;"

create_base_file "pages" "${CAPITALIZED_FEATURE}Reg.tsx" "const ${CAPITALIZED_FEATURE}Reg = () => {
  return <p>${CAPITALIZED_FEATURE}RegPage</p>;
};

export default ${CAPITALIZED_FEATURE}Reg;"

create_base_file "pages" "${CAPITALIZED_FEATURE}Modify.tsx" "const ${CAPITALIZED_FEATURE}Modify = () => {
  return <p>${CAPITALIZED_FEATURE}ModifyPage</p>;
};

export default ${CAPITALIZED_FEATURE}Modify;"

# 템플릿 생성 - List, Detail, Reg, Modify
create_base_file "templates" "${CAPITALIZED_FEATURE}List.tsx" "const ${CAPITALIZED_FEATURE}List = () => {
  return <p>${CAPITALIZED_FEATURE}ListTemplate</p>;
};

export default ${CAPITALIZED_FEATURE}List;"

create_base_file "templates" "${CAPITALIZED_FEATURE}Detail.tsx" "const ${CAPITALIZED_FEATURE}Detail = () => {
  return <p>${CAPITALIZED_FEATURE}DetailTemplate</p>;
};

export default ${CAPITALIZED_FEATURE}Detail;"

create_base_file "templates" "${CAPITALIZED_FEATURE}Reg.tsx" "const ${CAPITALIZED_FEATURE}Reg = () => {
  return <p>${CAPITALIZED_FEATURE}RegTemplate</p>;
};

export default ${CAPITALIZED_FEATURE}Reg;"

create_base_file "templates" "${CAPITALIZED_FEATURE}Modify.tsx" "const ${CAPITALIZED_FEATURE}Modify = () => {
  return <p>${CAPITALIZED_FEATURE}ModifyTemplate</p>;
};

export default ${CAPITALIZED_FEATURE}Modify;"

# CSS 파일 생성 (빈 파일)
create_base_file "css" "${FEATURE_NAME}.css" ""

# API 파일에 React Query Key Factory 포함
create_base_file "api" "${FEATURE_NAME}Api.ts" "import { IKeyListParams, IKeyDetailParams } from '../types/${FEATURE_NAME}.types';

// React Query Key Factory
export const ${FEATURE_NAME}Keys = {
    // ${FEATURE_NAME}Keys
    all: ['${FEATURE_NAME}'] as const,
    count: () => [...${FEATURE_NAME}Keys.all, 'count'] as const,
    lists: () => [...${FEATURE_NAME}Keys.all, 'list'] as const,
    list: (filters: string | IKeyListParams) => [...${FEATURE_NAME}Keys.lists(), filters] as const,
    details: () => [...${FEATURE_NAME}Keys.all, 'detail'] as const,
    detail: (filters: string | IKeyDetailParams) => [...${FEATURE_NAME}Keys.details(), filters] as const
};

export const ${FEATURE_NAME}Api = {
  // ${FEATURE_NAME} API 함수들
};"

# Zustand 스토어 생성
create_base_file "storage" "${FEATURE_NAME}Store.ts" "import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';

// 스토어 인터페이스 정의
export interface I${CAPITALIZED_FEATURE}Store {

}

// Zustand 스토어 생성
const ${FEATURE_NAME}Store = create<I${CAPITALIZED_FEATURE}Store>()(
    devtools(
        persist(
            (set, get) => ({
                // 초기 상태 값

                // 액션 메서드

            }),
            {
                name: '${FEATURE_NAME}-store', 
                storage: createJSONStorage(() => localStorage), 
            }
        )
    )
);

export default ${FEATURE_NAME}Store;"

# 라우트 설정 예시 생성
create_base_file "routes" "${FEATURE_NAME}Routes.ts" "import { RootRouteConfig, RouteType } from '../../types/router';
import ${CAPITALIZED_FEATURE}Layout from '../layouts/${CAPITALIZED_FEATURE}Layout';
import ${CAPITALIZED_FEATURE}List from '../pages/${CAPITALIZED_FEATURE}List';
import ${CAPITALIZED_FEATURE}Detail from '../pages/${CAPITALIZED_FEATURE}Detail';
import ${CAPITALIZED_FEATURE}Reg from '../pages/${CAPITALIZED_FEATURE}Reg';
import ${CAPITALIZED_FEATURE}Modify from '../pages/${CAPITALIZED_FEATURE}Modify';

// ${CAPITALIZED_FEATURE} 라우트 정의
export const ${FEATURE_NAME}Routes: RootRouteConfig = {
  path: '/${FEATURE_NAME}',
  element: <${CAPITALIZED_FEATURE}Layout routeType={RouteType.PUBLIC} />,
  routeType: RouteType.PUBLIC,
  children: [
    {
      path: '',
      element: <${CAPITALIZED_FEATURE}List />
    },
    {
      path: 'reg',
      element: <${CAPITALIZED_FEATURE}Reg />
    },
    {
      path: ':id',
      element: <${CAPITALIZED_FEATURE}Detail />
    },
    {
      path: ':id/mod',
      element: <${CAPITALIZED_FEATURE}Modify />
    }
  ]
};"

echo "🎉 ${FEATURE_NAME} 피처 디렉토리 구조 생성 완료!"
echo "📂 생성된 구조:"
echo "  - 레이아웃: ${CAPITALIZED_FEATURE}Layout (간소화된 버전)"
echo "  - 페이지: ${CAPITALIZED_FEATURE}List, ${CAPITALIZED_FEATURE}Detail, ${CAPITALIZED_FEATURE}Reg, ${CAPITALIZED_FEATURE}Modify"
echo "  - 템플릿: ${CAPITALIZED_FEATURE}List, ${CAPITALIZED_FEATURE}Detail, ${CAPITALIZED_FEATURE}Reg, ${CAPITALIZED_FEATURE}Modify"
echo "  - 타입: ${FEATURE_NAME}.types.ts (레이아웃 props 타입 포함)"
echo "  - 라우트: ${FEATURE_NAME}Routes.ts (새로운 RootRouteConfig 사용)"
echo "  - CSS: ${FEATURE_NAME}.css (빈 파일)"
echo "  - API: ${FEATURE_NAME}Api.ts (React Query Key Factory 추가됨)"
echo "  - Zustand 스토어: ${FEATURE_NAME}Store.ts"
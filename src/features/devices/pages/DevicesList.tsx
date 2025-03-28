import { ChangeEvent, useState } from "react";


const DevicesList = () => {

  const [searchParams, setSearchParams] = useState({
    category: '',
    keyword: '',
    terminal: '',
    installLocation: '',
    registDate: '',
    deviceType: ''
  });

  const terminals = [
    { id: '226796', type: '베팅2', num1: '', num2: '', status: '정보', location: '동특광시', installDate: '028204', ctn: '01235853605', userType: '일반', terminalGroup: '2030-12', deviceType: 'CMS', manageInfo: '이체/일', result: '정상', additionalInfo: '이체', auth: '승인/차단' },
    { id: '226795', type: '베팅2', num1: '', num2: '', status: '정보', location: '동특광시', installDate: '024380', ctn: '01225478007', userType: '일반', terminalGroup: '2030-12', deviceType: 'CMS', manageInfo: '이체/일', result: '정상', additionalInfo: '이체', auth: '승인/차단' },
    { id: '226794', type: '베팅2', num1: '', num2: '', status: '정보', location: '동특광시', installDate: '024364', ctn: '01225710222', userType: '일반', terminalGroup: '2030-12', deviceType: 'CMS', manageInfo: '이체/일', result: '정상', additionalInfo: '이체', auth: '승인/차단' },
    { id: '226793', type: '베팅2', num1: '', num2: '', status: '정보', location: '동특광시', installDate: '024100', ctn: '01236007186', userType: '일반', terminalGroup: '2030-12', deviceType: 'CMS', manageInfo: '이체/일', result: '정상', additionalInfo: '이체', auth: '승인/차단' },
    { id: '226792', type: '베팅2', num1: '', num2: '', status: '정보', location: '동특광시', installDate: '023939', ctn: '01235409026', userType: '일반', terminalGroup: '2030-12', deviceType: 'CMS', manageInfo: '이체/일', result: '정상', additionalInfo: '이체', auth: '승인/차단' },
    { id: '226791', type: '베팅2', num1: '', num2: '', status: '정보', location: '동특광시', installDate: '023909', ctn: '01235407213', userType: '일반', terminalGroup: '2030-12', deviceType: 'CMS', manageInfo: '이체/일', result: '정상', additionalInfo: '이체', auth: '승인/차단' },
    { id: '226790', type: '베팅2', num1: '', num2: '', status: '정보', location: '동특광시', installDate: '023822', ctn: '01236294569', userType: '일반', terminalGroup: '2030-12', deviceType: 'CMS', manageInfo: '이체/일', result: '정상', additionalInfo: '이체', auth: '승인/차단' },
    { id: '226789', type: '베팅2', num1: '', num2: '', status: '정보', location: '동특광시', installDate: '023773', ctn: '01236294404', userType: '일반', terminalGroup: '2030-12', deviceType: 'CMS', manageInfo: '이체/일', result: '정상', additionalInfo: '이체', auth: '승인/차단' },
    { id: '226788', type: '베팅2', num1: '', num2: '', status: '정보', location: '동특광시', installDate: '023737', ctn: '01236085314', userType: '일반', terminalGroup: '2030-12', deviceType: 'CMS', manageInfo: '이체/일', result: '정상', additionalInfo: '이체', auth: '승인/차단' },
    { id: '226787', type: '베팅2', num1: '', num2: '', status: '정보', location: '동특광시', installDate: '023701', ctn: '01226329125', userType: '일반', terminalGroup: '2030-12', deviceType: 'CMS', manageInfo: '이체/일', result: '정상', additionalInfo: '이체', auth: '승인/차단' }
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuItems = [
    { name: '본사관리자' },
    { name: '회원리스트' },
    { name: '단말기리스트', active: true },
    { name: 'PC관제회원' },
    { name: '공지사항' },
    { name: '외부DATA' },
  ];

  const handleInputChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value
    });
  };

  const handleSearch = () => {
    // 검색 로직 구현
    console.log('검색 파라미터:', searchParams);
  };

  return (

    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg">
        {/* <div className="container mx-auto px-4 py-4 flex justify-between items-center"> */}
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-full shadow-md">
              <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold">화이트박스 <span className="hidden sm:inline">관리자시스템</span></h1>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">5</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-sm font-medium">관리자</span>
            </div>
            <button className="flex items-center space-x-1 bg-indigo-700 hover:bg-indigo-800 transition px-3 py-1.5 rounded-md text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>로그아웃</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-indigo-900 text-white transition-all duration-300 ${showMobileMenu ? 'max-h-screen py-2' : 'max-h-0 overflow-hidden'}`}>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center space-x-2 px-4 py-3 hover:bg-indigo-800 ${item.active ? 'bg-indigo-700 border-l-4 border-white' : ''
              }`}
          >
            <span>{item.name}</span>
          </a>
        ))}
      </div>

      {/* Desktop Navigation - Enhanced & Modern */}
      <nav className="hidden md:block bg-white shadow-md border-b border-gray-200 sticky top-0 z-10">
        {/* 컨테이너 클래스 제거하고 패딩 추가 */}
        <div className="px-4">
          <ul className="flex">
            {menuItems.map((item, index) => (
              <li key={index} className="group relative">
                <a
                  href="#"
                  className={`flex items-center space-x-2 px-6 py-5 transition-all ${item.active
                    ? 'text-indigo-600 font-medium bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50'
                    }`}
                >
                  <span>{item.name}</span>
                </a>
                {/* Active indicator bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${item.active
                  ? 'bg-indigo-600'
                  : 'bg-transparent group-hover:bg-indigo-200'
                  } transition-all`}></div>
              </li>
            ))}
          </ul>
        </div>
      </nav>



      <div className="px-4 py-6">
        {/* 단말기 리스트 헤더 */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-5">
          <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            단말기리스트
          </h2>
          <p className="text-gray-600 text-sm">단말기 정보를 검색하고 관리합니다.</p>
        </div>

        {/* ---- 검색 필터 ----- */}
        {/* 검색 필터 - 개선된 디자인 */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-6">
          {/* 상단 설명 및 핵심 필터 */}
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">검색 필터</h3>
            <p className="text-sm text-gray-500">원하는 조건으로 단말기 정보를 검색하세요</p>
          </div>

          {/* 주요 필터 영역 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700 w-24">개별조회</label>
              <select
                className="rounded-md border border-gray-300 shadow-sm py-2 px-3 bg-white focus:ring-indigo-500 focus:border-indigo-500 w-48 text-sm"
                name="category"
                value={searchParams.category}
                onChange={handleInputChange}
              >
                <option value="">일반번호</option>
                <option value="phoneNumber">전화번호</option>
                <option value="name">이름</option>
              </select>
            </div>

            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700 w-24">일련번호</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 flex-1 text-sm"
                name="keyword"
                value={searchParams.keyword}
                onChange={handleInputChange}
                placeholder="검색어 입력"
              />
            </div>

            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700 w-24">판매점</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 flex-1 text-sm"
                name="terminal"
                value={searchParams.terminal}
                onChange={handleInputChange}
                placeholder="판매점명"
              />
            </div>

            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700 w-24">주문고객</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 flex-1 text-sm"
                name="installLocation"
                value={searchParams.installLocation}
                onChange={handleInputChange}
                placeholder="고객명"
              />
            </div>

            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700 w-24">CTN</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 flex-1 text-sm"
                name="registDate"
                value={searchParams.registDate}
                onChange={handleInputChange}
                placeholder="전화번호"
              />
            </div>

            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700 w-24">주차등록</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 flex-1 text-sm"
                name="deviceType"
                value={searchParams.deviceType}
                onChange={handleInputChange}
                placeholder="주차등록"
              />
            </div>
          </div>

          {/* 구분선 */}
          <div className="my-4 border-t border-gray-200"></div>

          {/* 추가 필터 옵션 */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700 w-24">구분조회</label>
              <select className="rounded-md border border-gray-300 shadow-sm py-2 px-3 bg-white focus:ring-indigo-500 focus:border-indigo-500 w-40 text-sm">
                <option>구분선택</option>
                <option>옵션 1</option>
                <option>옵션 2</option>
              </select>
            </div>

            <select className="rounded-md border border-gray-300 shadow-sm py-2 px-3 bg-white focus:ring-indigo-500 focus:border-indigo-500 w-40 text-sm">
              <option>상태전체</option>
              <option>정상</option>
              <option>오류</option>
            </select>

            <select className="rounded-md border border-gray-300 shadow-sm py-2 px-3 bg-white focus:ring-indigo-500 focus:border-indigo-500 w-40 text-sm">
              <option>관제제외</option>
              <option>옵션 1</option>
              <option>옵션 2</option>
            </select>

            <select className="rounded-md border border-gray-300 shadow-sm py-2 px-3 bg-white focus:ring-indigo-500 focus:border-indigo-500 w-40 text-sm">
              <option>기록횟수 전체</option>
              <option>5회 이상</option>
              <option>10회 이상</option>
            </select>
          </div>

          {/* 상태 필터 태그 */}
          <div className="mt-5 flex flex-wrap gap-2">
            <div className="flex items-center bg-gray-50 p-2 rounded-lg shadow-sm hover:bg-gray-100 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">정상 : 32425</div>
            </div>
            <div className="flex items-center bg-gray-50 p-2 rounded-lg shadow-sm hover:bg-gray-100 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">CNT 초과 : 20</div>
            </div>
          </div>

          {/* 검색 및 필터 버튼 */}
          <div className="mt-5 flex justify-end space-x-2">
            <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-md shadow-sm transition flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              초기화
            </button>
            <button
              className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm transition duration-150 ease-in-out flex items-center"
              onClick={handleSearch}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              검색
            </button>
          </div>
        </div>

        {/* 터미널 리스트 테이블 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex justify-between p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-1.5 px-3 rounded-md shadow-sm text-sm transition mr-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                엑셀다운로드
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-1.5 px-3 rounded-md shadow-sm text-sm transition flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
                엑셀등록
              </button>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">조회건수:</span> <span className="bg-indigo-100 text-indigo-800 py-1 px-2 rounded-full text-xs font-medium">24367</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">단말기번호</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제품명</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">입체</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주문고객</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">회원(주사용자)</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">핸드폰</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">등록일시</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">페어링</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">일련번호</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">단말기대금</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">단말기대금</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">결제방법</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">다음결제</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">다음결제</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">승인/차단</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">승인/차단</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {terminals.map((terminal, index) => (
                  <tr key={terminal.id} className={index % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-600">
                      <a href="#" className="hover:underline">{terminal.id}</a>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <select className="border border-gray-300 rounded-md text-xs py-1 bg-white">
                        <option>{terminal.type}</option>
                        <option>베팅1</option>
                        <option>베팅3</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <div className="flex space-x-1">
                        <input type="text" className="border border-gray-300 rounded-md w-16 text-xs p-1" defaultValue={terminal.num1} />
                        <input type="text" className="border border-gray-300 rounded-md w-16 text-xs p-1" defaultValue={terminal.num2} />
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
                        {terminal.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {terminal.location}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {terminal.installDate}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {terminal.ctn}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        활성
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs">
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <select className="border border-gray-300 rounded-md text-xs py-1 bg-white">
                        <option>선택</option>
                        <option>옵션 1</option>
                        <option>옵션 2</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {terminal.terminalGroup}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <select className="border border-gray-300 rounded-md text-xs py-1 bg-white">
                        <option>{terminal.deviceType}</option>
                        <option>옵션 1</option>
                        <option>옵션 2</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {terminal.manageInfo}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                      <span className="text-blue-600">{terminal.result}</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        {terminal.additionalInfo}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <button className="bg-red-500 hover:bg-red-600 text-white rounded-md px-2 py-1 text-xs">차단</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">1</span> - <span className="font-medium">10</span> / <span className="font-medium">24367</span> 결과
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {[1, 2, 3, 4, 5].map(page => (
                    <a
                      key={page}
                      href="#"
                      className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${page === 1 ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      {page}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicesList;

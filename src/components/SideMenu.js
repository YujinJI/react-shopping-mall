import React from 'react';

const SideMenu = (props) => {
  // SideMenu가 Header의 아래에 렌더링 됨. z-index는 아닌 듯. 일단 응급처치로 margin-top 값 줘서 li들이 보이게만 하기
  return (
    <div className='drawer-side'>
      <label htmlFor='side-menu' className='drawer-overlay'></label>
      <ul className='menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100 h-screen text-base'>
        <li>
          <a
            className='!text-gray-700 active:!text-white dark:!text-white mt-12 py-3'
            href='./fashion'
          >
            패션
          </a>
        </li>
        <li>
          <a
            className='!text-gray-700 active:!text-white dark:!text-white py-3'
            href='./accessory'
          >
            액세서리
          </a>
        </li>
        <li>
          <a
            className='!text-gray-700 active:!text-white dark:!text-white py-3'
            href='./digital'
          >
            디지털
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;

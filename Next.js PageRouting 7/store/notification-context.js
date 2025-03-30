import { createContext, useEffect, useState } from "react";

// 1. NotificationContext 생성
// 이 Context는 알림(notification) 상태를 전역으로 관리하기 위해 사용됨
const NotificationContext = createContext({
  // 기본값 설정 (자동 완성 및 안전한 fallback 제공 목적)
  notification: null, // { title, message, status }
  showNotification: function (notificationData) {}, // 알림 띄우기용 함수 (초기에는 빈 함수)
  hideNotification: function () {}, // 알림 숨기기용 함수 (초기에는 빈 함수)
});

// 2. NotificationContextProvider 컴포넌트 생성
// 이 컴포넌트는 실제 알림 상태를 관리하고, 하위 컴포넌트에 Context로 전달해줌
export function NotificationContextProvider(props) {
  // 알림 상태 생성
  // 알림이 없을 땐 undefined (혹은 null), 있을 땐 { title, message, status } 객체가 저장됨
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      }
    }
  }, [activeNotification]);
  
  // 알림을 보여주는 함수
  // 외부에서 showNotification(notificationData)를 호출하면 알림 상태가 설정됨
  function showNotificationHandler(notificationData) {
    // notificationData = { title, message, status }
    setActiveNotification(notificationData);
  }

  // 알림을 숨기는 함수
  function hideNotificationHandler() {
    setActiveNotification(null); // 알림을 제거 (없애기)
  }

  // Context로 전달할 값 정의
  // 하위 컴포넌트들은 이 값을 useContext(NotificationContext)로 받아서 사용함
  const context = {
    notification: activeNotification, // 현재 알림 상태
    showNotification: showNotificationHandler, // 알림 띄우기
    hideNotification: hideNotificationHandler, // 알림 숨기기
  };

  return (
    // Context Provider로 감싸서 하위 컴포넌트에 context 값 전달
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;

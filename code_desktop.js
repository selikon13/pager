document.addEventListener('DOMContentLoaded', () => {
    const markAsReadButton = document.getElementById('mark-as-read');
    const notificationCountSpan = document.getElementById('notification-count');
    const notifications = document.querySelectorAll('.notification-item');
    const unreadClass = 'unread';

    const updateNotificationCount = () => {
        const unreadNotifications = document.querySelectorAll(`.${unreadClass}`).length;
        notificationCountSpan.textContent = unreadNotifications;
    };

    const initialUnreadCount = Math.min(3, notifications.length);
    const initialUnreadNotifications = Array.from(notifications).slice(0, initialUnreadCount);

    // NEW: Добавляем класс к первым трем уведомлениям
    initialUnreadNotifications.forEach((notification, index) => {
        notification.classList.add('first-three-notifications');
        notification.classList.add(unreadClass);
    });

    updateNotificationCount();

    markAsReadButton.addEventListener('click', () => {
        initialUnreadNotifications.forEach(notification => {
            notification.classList.remove(unreadClass);
        });
        updateNotificationCount();
    });

    notifications.forEach(notification => {
        notification.addEventListener('click', () => {
            notification.classList.remove(unreadClass);
            updateNotificationCount();
        });
    });
});
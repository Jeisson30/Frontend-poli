class Notification {
    constructor(type, message, duration = 3000) {
        this.type = type;
        this.message = message;
        this.duration = duration;
        this.notificationArea = document.getElementById('notification-area');
        this.element = this.createNotificationElement();
        this.show();
        this.autoClose();
    }

    createNotificationElement() {
        const notificationDiv = document.createElement('div');
        notificationDiv.classList.add('notification', `notification-type-${this.type}`);
        notificationDiv.innerHTML = `
            <button class="notification-close-btn">&times;</button>
            <p>${this.message}</p>
        `;
        const closeButton = notificationDiv.querySelector('.notification-close-btn');
        closeButton.addEventListener('click', () => this.close());
        return notificationDiv;
    }

    show() {
        this.notificationArea.appendChild(this.element);
        void this.element.offsetWidth;
        this.element.classList.add('show');
    }

    close() {
        this.element.classList.remove('show');
        setTimeout(() => {
            if (this.element && this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        }, 300);
    }

    autoClose() {
        if (this.duration > 0) {
            setTimeout(() => {
                this.close();
            }, this.duration);
        }
    }

    static showNotification(type, message, duration) {
        new Notification(type, message, duration);
    }
}

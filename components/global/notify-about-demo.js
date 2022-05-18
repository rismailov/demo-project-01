import { toast, Slide } from 'react-toastify';

function notifyAboutDemo() {
    const message = 'This is a demo project';

    return toast.info(message, {
        transition: Slide,
        position: toast.POSITION.BOTTOM_LEFT,
        icon: '🤷🏼‍♂️',
    });
}

export default notifyAboutDemo;

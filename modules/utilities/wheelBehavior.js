export function setWheelBehaviorFor(parentElement) {
    if (parentElement) {
        let scrollOption = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        };
        parentElement.onwheel = (e) => {
            let scrollWidth = parentElement.scrollWidth;
            let clientWidth = parentElement.clientWidth;

            if (scrollWidth != clientWidth) {
                e.preventDefault();
                let deltaY = e.deltaY * 2;

                if (deltaY < 0 && scrollOption.left <= 0 || deltaY > 0 && scrollOption.left >= scrollWidth) {
                    return;
                }
                scrollOption.left += deltaY;
                parentElement.scroll(scrollOption);
            }
        };
    }
}
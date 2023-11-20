export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('accordion', {
      mounted (el) {
        const headers = el.querySelectorAll('.accordion-header');
        headers.forEach(header => {
            const item = header.parentNode;
            const chevron = header.querySelector('.chevron');
            const isOpen = el.getAttribute('data-open') !== null;

            //initialze height at first so that the animations will be smooth on the first time
            item.classList.add('active')
            const content = item.querySelector('.accordion-content');
            content.style.height = content.scrollHeight + 'px';
            content.style.height = 0;
            item.classList.remove('active')

            if (isOpen) {
              item.classList.add('active')
              content.style.height = content.scrollHeight + 'px';
              chevron.classList.add('rotate-0')
            }

            header.addEventListener('click', () => {
                item.classList.toggle('active');

                if (item.classList.contains('active')) {
                  content.style.height = content.scrollHeight + 'px';
                  setTimeout(() => {
                    content.style.height = 'auto';
                  }, 300);
                  chevron.classList.add('rotate-0')
                } else {
                  content.style.height = content.scrollHeight + 'px';
                  setTimeout(() => {
                    content.style.height = 0;
                  }, 100);
                  chevron.classList.remove('rotate-0')

                }
            });
           
        });
        //check 
      },
      getSSRProps (binding, vnode) {
        // you can provide SSR-specific props here
        return {}
      }
    })


})
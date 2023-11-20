
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('animate', {
      mounted (el) {
        
        el.style.opacity = 0
        el.style.transition = 'all 350ms ease-in-out'
        el.style.transform = 'translateY(24px)'
        let observer = new IntersectionObserver(( entries) => {

            entries.forEach( (entry) => {
              if (entry.isIntersecting) {
                entry.target.style.opacity = 1
                entry.target.style.transform = 'translateY(0)'
                observer.disconnect()
              }
            })
        
        }, {threshold:0.2} );


        observer.observe(el);
        

      },
      getSSRProps (binding, vnode) {
        // you can provide SSR-specific props here
        return {}
      }
    })


})
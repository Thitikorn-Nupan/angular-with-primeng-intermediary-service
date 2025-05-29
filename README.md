# Step install Primeng + Config
## Note : This way recommend angular CLI & Core version 19.2.14 
* npm install primeng @primeng/themes (if failed add --legacy-peer-deps)
* npm install primeicons --save (if failed add --legacy-peer-deps) 
* go to main css as 'style.css' and add @import 'primeicons/primeicons.css'; 
* go to app.module.ts and add  
`providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    ]
`


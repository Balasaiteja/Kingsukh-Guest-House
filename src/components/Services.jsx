import React from 'react'

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className='title2'>
        <h1> <span style={{letterSpacing:"0.5em"}}>SERVICES</span> <span style={{color:"rgb(101, 99, 99)"}}>_____________</span></h1>
      </div>
      <div className='service-matter'>
        <h1>Strive Only For The Best</h1>
        <div className='svs'>
            <div className='high'>
                <p>High Class Security</p>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYklEQVR4nO2ZXWiOYRjHf5sX+WhRI2qspHykFfkIZQsHJOUjrXyciOWEk7U4EIoDDuyIfBRllCNH2BAJtWJiIstnDiwJk20Ysz266//o7vVu7/Pe7/O8H23/ump77ut/3df13Pd7Pdd93TCIgYVpwEPggf7OS6wGvgKepB3YQB5hCHAE6FUAFyWenpmxGDmOYuCGnO4GdltjVcAvjd0BJpCjmAu8k6MfgaUJdBYDrdJ5Dywix1Blve17wMR+dMcBN/tYNa8PiRwjgTprwtqA+z8mXZ93XrY8SZskI4FMBZo1UQdQ6WCjUlxj40kCxyMPZJX1xl4As9KwZb4vz/rYSl5UgZjUeshKrZeAohDsFsmWJzmouSIJxKTW69aPtAYoCNG+sVUj2541V6iBzAHeyugnYDnRYQnwIYqstR3oksFGoIToUaK5/EC2pWNsOHDaMnYKGEbmEAMOW/PXKUWnhEnAfRn4CWwle9gIdMqXR8CUoMSVwBcRXwFlZB8zgOfyyfi2IlnWMOVCjwhXgLHkDoqsFN2rbVcYr2QcvhqXKcJMrWGhIM7H/172Uw18zmSh5ggvzldT2vxDg84IpXkUSClwF6hPppir8IL6NxhIhuANrshAWxHPUZLVW7G4Z/P1YYw8kLaA0q60n+jcsxdosWy26Fmxi0OugQRFLEE9dRL4btnqsUomT2NGZ3oUDrnyhgIVqpmareNzL3AZKAdGSMr1zNZpFrdCtrIWiF+a+2K6Keb8MzNJo+KYVZ370hmGQ648v6F3Rs3tUSluS3PcPiEbXWE45MrzO/Up/YDjMN4qILMWyBvpl6XZFPGAl2E45Mrz+7/mROqKNbLRkM1Ajku/GncckI3aMBxy5W2RvjmZuqJRNtaH4ZArb7K+Bx2ObaYx6kr+0VVF2g6lw2sSZ63DfLvEvRWmQ64835nbKfIKgdfibg7TIVeeafF8E89UtUGxSZzW/rZlJgMx2C+euY83VwlBgvfvIXdE4ZArb7T1cawOoH9Ouk3JrvkyHYjBQmWgbmBZP3o7NcePIKV8NgIx2Ce+qcEW9NHM/hNkS8U7lCm5pi1i2qH+NYY5Pa6LWwk/CHP1Fwj1KRxXwxJzZ2hg0upZK0gT2AXr/6PkGfZYK2Dkt1YlLzFPx9nHwOxk2n8BrFW9H00evWAAAAAASUVORK5CYII=" alt="smart-home-shield"></img>
            </div>
            <div className='hours'>
                <p>24 Hours Room Service</p>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADn0lEQVR4nO2ayWsUQRSHP8VdFCURjQsY9+Xk2V2QgEREvCqKih5VXKIG40m8i2JycY0b6CEI5iJuEy/ifhND0D9AQY0ao0lLwW+gHKZnarqdzkx3f1B0qH71qup11atXbwIpKSkp0bMJeAh8A74CD4BGEsJpwPMpp0jAl/eAX8ARYLpKk+rMu43EmIeapJlwLkf1zmyH2NKrSdbleVend8YvxI6nBfa9X8kQIzIBDPCEGLJek+sHjgMzgJlAs+o8ycSKMcA64BBwCfhR4Kv/kMxBYK3aViUTgd1AJ/A9wPLPFtP2HrALmEAVsAi4mDPpP8Br4BywE1gD1AOTgfFqNwmYB6wE9gJn1WYwxxgXgIVUIPXATWBAgzXP+8AeoDaE3qky2mPLGEb3DfU55IwGTlr72jxby/SV5gNtVsRo+mrRGIaEhcBLDcZ8nWvArAj6NX20W1vjBbCAiNmiiM0MoAdYEfUAdEp0W9Hj5qg6PmDt9XZ5/KHC9H3L8g37yt3hCWvJH6NyaLKcpAmqyvblPR1r26g8dgC/Ncb95bjHD8jKJsCpVLZqjIPyU/+FJUpbeQpRK50mjfWLArNQjACeS6FxNtVC9ph8BYwMo6hFit5VSyxunQ7vwzrF2UCf9pO5zVUbKzR2EznOCaLguix4merlquZwpdSGS2W9PiUtgqS6sikt8+zyaZsv7TVc2aCMQx/FskYm4/xTJ9hiSqBNHZhnmFQXOX/b+NU3qL7boY+PDnNplex5HJmsu/eg7uhBCGOAO6o3KbNiztllUnO1AnqVdyjKTil/RHCCGmCacoO/tXz9yB7NG0r8PWK7i3CnhE0aKmoDNKvudgHddVqdZpWOcxzPbum9W0xwrHX0TfkP+X4c8n628+tRXYPDZDpwp1Zz+lksgbJKyt86KvYcPLSLo7SdX4+M4UeH5Eq9k7xRu+UucfQZR6V+yztIWxfnN9Zy0Pl+XivEGek/XEjosoRMMjNKA7g6v0a1eRagv71qazLLvnRJaHXEBnBxfvaZbhIzQVJonjLMvnyUkLkHuBDmx03bAN0Ozs8e3zJKp15tPxQS+iyhGkelmRBhaibHUXYVcX7ZU8fIDaN0ajSuT4WE+iU0ivgxSnMzt8Oy7OlqoOj8vNQAJHMFPHUIWeNW/jmlvISWxOz9XFID4LMCvISVUP/GVu0lb6Qad19QdH5eagDSFeARX9ItQOoDcHKCXsyLL5mknv8pKSkpKSSQv6R8ISDGylPjAAAAAElFTkSuQmCC" alt="external-room-service-resort-xnimrodx-lineal-xnimrodx"></img>
            </div>
            <div className='restaurant'>
                <p>Restaurant</p>
                <img src="data:image/png;base64,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" alt="restaurant"></img>
            </div>
            <div className='tourist'>
                <p>Tourist Guide Support</p>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFBElEQVR4nO2ba4hVVRTHf2ppRmWTRTVODzUl+1AyNklhkRMJJZGQZig9ramsyB70wrC+iBE1ZGVEQR/KMMcmxx5CRRZWBD2gohqjLIopKRp7UWrpxIZ14M/mzr3nnLtPc/aMf1gwXO7637XX2Xuf9RrYi/8dw4EWYDGwEngWWAs8BtwGTB7Mz+RIYDnwI9BXQzYC4xlEGAbcBPzRz4J7gV+APd7n24FmBgFGAR3e4j4DbgdOBvaX744EpgNPiUN+BzqBK4DRRHr2O2Tx24D5tjNqYS6w23PeD8BsIsMNsoBu4KiM+tcBL9lRSXj+BS4iEhwqd4A728fWeaRuAf6RI9JEBFgmT+/aQJy3CueDRIAtZmyPXXgh4Hi+Ed5So0memAuGQuIB4Z5AiXGeGHphYO75wj2LEuMaMXRqYO6Zwj2HEuNmMbSet0IlnFHgLguKJWLoxLDUnCvc7u/SYqEY6sLgoo7aSZQYp4qhFwfmvt94XW4xhhJjFPC3GftkYO43jfdLIsBmM/bbgJwuWPrTeJ8mAtwnR2JSAa/HRUSQQn8gBl9agGNfoOSYKcauCnzXdMrFeDglxmXihNbA3FcKtyvWlhazxFBndEgsFe6jKTEOAHaZoa8E5n7beF21qfR4Tp7YxwFCXBd0fSqcTxABJlrhIzHaJVX1YJVw9RSQmBWG0dJocTujHiS74KMYS++dZvzPwH517KqkD7GCCHG1bONLAgRJM4gQB1qJ3C3gqxy7wQVEv0rvIk3jppRYIU/yYQur00aI6wsIvwcsbvhOFuMKI2mwXHQ2x7wLKtUGbyS7E0odHabFCbIg11LL2sVysw3Ro0UW5BqtaXBHLI2WtJgtC1qQo2o9jcgxEnhLFnRiSr05ovMysA8R3wXvyGJezKDrXqXve2+IKUSE8UA7sFMW8UmOatAx0uF2ssN4S31HnAmss4kSHbVx0V5DTs6xpq98u63OeFZZ4oeDbDTnc89QlQ11/saGKtzdNh13MAO0+KXeTFEim4B5NqwV0gnbjPeNCiN/Lse4t44dlwkjbHSm1zPiN+ARuwwT9AR2gk6oHA88ZDNRvjPuAvalIIwD3qswWrfEcgQfRTohgZuFvB743rPrwyIqUFO8ROgnuwuqpcf9OaHFukhtFWRRhW52NSdo1rlYjmCfVbaCda8PA7YKeZd9VgsbrRvlXmsJVla55FQeFZ1243F8acYHu4TH7ZAjCIAuIX08Q03Ax4yUDkjk9Jy/M9zs7AtV+m8VslftYsxyhDqtqvS19yY533ICX86Rkd5e03P6z9tlmBbOztfk986mDqw3Ehf9HZfxqSdzCr68W0N3XT96fwGnZbBhskStuS/nMRaq9tmTSIthEu7usbhhrYgb86uGqd73N0lc8EXGKDF5iDvyTre05qzxTSpgBLddOLPsyMtFz3XMM6NNCE7JoDdN9BxHtQ72FutddtdwdFvO+sJ00buKHFgmBC5QCukE5Va5O7ATxome+83MuEcIGgM6Ybx0rn3ZZSl0KCc0ip5bT2mcsLBGfLBgKDhhbg0nXDAUnDC2QhaaiAuoDhkKTsAGtP17YafVCxgMTmgWPdeZrhYUrbYI8pkaGZ92uJtjcEKT6HVkzDcqYYQXSjfG4ASsBJbobrdEKK9o9eh1smFAnTBB/nErlGzNUS2q2wnzJIlpyDmkcSewxkuIssoa46lUwquFBuHp79LdC4f/AOJJj9jCvFzZAAAAAElFTkSuQmCC" alt="tourist-male"></img>
            </div>
        </div>
        <div className=' bh'>
            <div className='bh1'>
                <h1>100+</h1>
                <span>Bookings Completed </span>
                
            </div>
            <div className='bh2'>
                <h1>150+</h1>
                <span>Happy Customers</span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Services

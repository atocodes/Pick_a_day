const body = document.body

const main = document.querySelector('main')

const wrap_div = document.createElement('div')

wrap_div.id = 'wrap_div'

    const pick_a_day = document.createElement('p')
    pick_a_day.id = 'pick_a_day'
    pick_a_day.textContent = 'PICK A DAY RANGE'


    const day_pickrs = document.createElement('div')
    day_pickrs.id = 'day_pickrs'

        const from = document.createElement('div')
        from.id = 'from'
            
            const from_input_box = document.createElement('div')
            from_input_box.id = 'from_input_box'
                
                let from_day = document.createElement('p')
                from_day.id = 'from_day'
                from_day.textContent = day_picker().days[0]

            from_input_box.append(from_day)
            const from_txt = document.createElement('p')
            from_txt.id = 'from_txt'
            from_txt.textContent = 'From'
            
        from.append(from_input_box,from_txt)

        const to = document.createElement('div')
        to.id = 'to'
            
            const to_input_box = document.createElement('div')
            to_input_box.id = 'to_input_box'
            
                let to_day = document.createElement('p')
                to_day.id = 'to_day'
                to_day.textContent = day_picker().days[6]

            to_input_box.append(to_day)

            const to_txt = document.createElement('p')
            to_txt.id = 'to_txt'
            to_txt.textContent = 'To'

        to.append(to_input_box,to_txt)

    day_pickrs.append(from,to)

    const button_and_notify_area = document.createElement('div')
    button_and_notify_area.id = 'button_and_notify_area'
    
    
        const choice_identify = document.createElement('p')
        choice_identify.id = 'choice_identify'
        choice_identify.innerHTML = `ከ${from_day.textContent} እስከ ${to_day.textContent}`
    

        const button_div = document.createElement('div')
        button_div.id = 'button_div'
            const button = document.createElement('button')
            button.id = 'button'
            button.textContent = 'ባሉት ቀናቶች'
    
        button_div.append(button)

    button_and_notify_area.append(choice_identify,button_div)

wrap_div.append(pick_a_day,day_pickrs,button_and_notify_area)

main.append(wrap_div)


//functionality

const days = day_picker().days
const data = [from_day.textContent,to_day.textContent]

from_input_box.onmouseenter = () =>{
    from_input_box.innerHTML = ''

    for(let day of days){
        from_day = document.createElement('p')
        from_day.id = 'from_day'
        from_day.textContent = day
        from_day.style.margin = '0 10px'
        from_input_box.append(from_day)
    }
    const from_days = document.querySelectorAll('#from_day')
    for(let from_day of from_days){
        from_day.onclick = () =>{

            from_day.style.color = 'var(--light-gray)'
            from_input_box.onmouseleave = () =>{
                from_input_box.innerHTML = ''
                from_input_box.append(from_day)
                data[0] = from_day.textContent
            }
            let indexOf_from_day = choice_identify.textContent.indexOf(' ')
            let from_day_in_choice_identity = choice_identify.textContent.slice(1,indexOf_from_day)
            
            let replacer_in_choice_identity = choice_identify.textContent.replace(from_day_in_choice_identity,from_day.textContent)
            choice_identify.textContent = replacer_in_choice_identity
        }

        if(window.innerWidth < 426){
            from_day.ontouchstart = () =>{

                from_day.style.color = 'var(--light-gray)'
                from_input_box.ontouchend = () =>{
                    from_input_box.innerHTML = ''
                    from_input_box.append(from_day)
                    data[0] = from_day.textContent
                }
                let indexOf_from_day = choice_identify.textContent.indexOf(' ')
                let from_day_in_choice_identity = choice_identify.textContent.slice(1,indexOf_from_day)
                
                let replacer_in_choice_identity = choice_identify.textContent.replace(from_day_in_choice_identity,from_day.textContent)
                choice_identify.textContent = replacer_in_choice_identity
            }
        }
    }   
}

to_input_box.onmouseenter = e =>{
    to_input_box.innerHTML = ''

    for(let day of days){
        to_day = document.createElement('p')
        to_day.id = 'to_day'
        to_day.textContent = day
        to_day.style.margin = '0 10px'
        to_input_box.append(to_day)
    }

    const to_days = document.querySelectorAll('#to_day')
    for(let to_day of to_days){
        to_day.onclick = () =>{

            to_day.style.color = 'var(--light-gray)'
            to_input_box.onmouseleave = () =>{
                to_input_box.innerHTML = ''
                to_input_box.append(to_day)
                data[1] = to_day.textContent
            }

            let indexOf_to_day = choice_identify.textContent.lastIndexOf(' ')
            let to_day_in_choice_identity = choice_identify.textContent.slice(indexOf_to_day)
            
            let replacer_in_choice_identity = choice_identify.textContent.replace(to_day_in_choice_identity,` ${to_day.textContent}`)
            choice_identify.textContent = replacer_in_choice_identity
        }

        if(window.innerWidth < 426){
            to_day.ontouchstart = () =>{
                to_day.style.color = 'var(--light-gray)'
                to_input_box.ontouchend = () =>{
                    to_input_box.innerHTML = ''
                    to_input_box.append(to_day)
                    data[1] = to_day.textContent
                }
    
                let indexOf_to_day = choice_identify.textContent.lastIndexOf(' ')
                let to_day_in_choice_identity = choice_identify.textContent.slice(indexOf_to_day)
                
                let replacer_in_choice_identity = choice_identify.textContent.replace(to_day_in_choice_identity,` ${to_day.textContent}`)
                choice_identify.textContent = replacer_in_choice_identity
    
            }
        }
    }
}


button.onclick = () =>{
    const result_div = document.createElement('div')
        result_div.id = 'result_div'
    
    const result = day_picker(data[0],data[1]).final_day
    
        
            const inside_div = document.createElement('div')
            inside_div.id = 'inside_div'
        
                const revil = document.createElement('p')
                revil.id = 'amh'
                revil.className = 'loading_and_result'
                revil.innerHTML = `እንግዲህ ቀኑ <span id='highlight'>${result}</span> ነው።`
                
                const loading = document.createElement('div')
                loading.id = 'loading'
                inside_div.append(loading)
                
                let count = 0
                let loading_days = setInterval(()=>{
                    if(count < day_picker().days.length){
                        count+=1
                    }else{
                        count = 0
                    }
                    revil.textContent = day_picker().days[count]
                    revil.style.color = 'var(--light-gray)'
                },100)
                
                    setTimeout(()=>{
                        clearInterval(loading_days)
                        inside_div.innerHTML = ''
                        inside_div.append(revil)
                        revil.innerHTML = `እንግዲህ ቀኑ <span id='highlight'>${result}</span> ነው።`
                        revil.style.color = 'var(--white)'
                    },3000)
    
                    inside_div.append(revil)
            result_div.append(inside_div)
        
            
        body.append(result_div)
        
    result_div.onclick = () =>{
        body.removeChild(result_div)
    }
}

